from dotenv import load_dotenv
import os
import requests
import sys
import base64
from .models import Project, Person
from .serializers import PersonSerializer
import time
from functools import reduce
import json

headers = {}
gitUrl = "https://api.github.com"

def loadFromGit():
    load_dotenv(".env")
    git_token = os.getenv("GITHUB_TOKEN")

    global headers
    headers = {
        "Authorization": f"token {git_token}"
    }
    #First index is git username and second is real name
    names = getNames()

    users = []

    for name in names:
        users.append(getProj(name))


def getNames(): 
    people = Person.objects.all()
    serializer = PersonSerializer(people, many=True)

    names = list(map(lambda x: (x["gitName"], x["name"]), serializer.data))
    return names

#Saves to database if name is present, else try to delete it if its saved in database
def saveRepo(repo):
    if repo["name"]:
        project, created = Project.objects.update_or_create(
            git_link=repo["git_link"],
            defaults={
                "name": repo["name"],
                "description": repo["description"],
                "authors": repo["authors"],
                "keywords": repo["keywords"]

            })
        project.save()
    else :
        project = Project.objects.filter(git_link=repo["git_link"]).delete()



#Tuple with (git name, real name)
def getProj(user):

    getUrl = gitUrl + "/users/" + user[0] + "/repos"

    response = requests.get(getUrl, headers=headers)

    data = response.json()
    repoNames = [repo["name"] for repo in data]

    name = [user[0]] * len(repoNames)

    #Returns tuple with (git name, readme, real name)
    mapRepo = map(getReadme, repoNames, name)
    tup = list(mapRepo)

    startAcc = {
        "gitName": user[0],
        "name": user[1],
        "repos": [],
    }

    #Json format with the format of startAcc but with repos filled in
    jsonReadme = reduce(reduceJson, tup, startAcc)

    repos = jsonReadme["repos"]

    #TODO Temporary save to database
    list(map(saveRepo, repos))

    return jsonReadme

def getTitle(readme):
    title = getText(readme, "<!-- Title -->", "<!-- /Title -->")
    return title.strip()

def getDescription(readme):
    description = getText(readme, "<!-- Description -->", "<!-- /Description -->")
    return description.strip()

def getAuthors(readme):
    section = getText(readme, "<!-- Authors -->", "<!-- /Authors -->")
    
    splitSection = section.split("\n")
    splitSection = list(map(lambda x: x.replace("- ", "").strip(), splitSection))


    separator = ", "
    
    authors = separator.join(splitSection)
        
    return authors

def getKeywords(readme):
    section = getText(readme, "<!-- Keywords -->", "<!-- /Keywords -->")
    
    splitSection = section.split("\n")
    splitSection = list(map(lambda x: x.replace("- ", "").strip(), splitSection))


    separator = ", "
    
    keywords = separator.join(splitSection)
        
    return keywords


def getText(text, start, end):
    init_index = text.find(start)

    if init_index == -1:  #If start string cannot be found, return empty
        return ""

    start_index = text.find(start) + len(start)
    end_index = text.find(end, start_index)
    result = text[start_index:end_index].strip()

    return result


def reduceJson(acc, curr):
    if curr[0] and curr[1] and curr[2]:
        repoName = curr[0]
        readme = curr[1]
        gitLink = curr[2]
        repoJson = {
            "repo_name": repoName,
            "name": getTitle(readme),
            "description": getDescription(readme),
            "readme": readme,
            "git_link": gitLink,
            "authors": getAuthors(readme),
            "keywords": getKeywords(readme)
        }
        acc["repos"].append(repoJson)
        return acc


#TODO handle no response
def getReadme(repoName, gitName):
    uri = gitUrl + "/repos/" + gitName +"/" + repoName + "/readme"
    res = requests.get(uri, headers=headers)
    resJson = res.json()

    readmeEncoded = resJson["content"]
    readmeBytes = base64.b64decode(readmeEncoded)
    readme = readmeBytes.decode("utf-8")

    gitLink = "https://github.com/" + gitName + "/" + repoName

    return (repoName, readme, gitLink)

