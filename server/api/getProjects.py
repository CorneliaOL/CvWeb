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
    names = getNames()
    for name in names:
        getProj(name)


def getNames(): 
    people = Person.objects.all()
    serializer = PersonSerializer(people, many=True)

    names = list(map(lambda x: x["gitName"], serializer.data))
    return names


def getProj(user):

    getUrl = gitUrl + "/users/" + user + "/repos"

    response = requests.get(getUrl, headers=headers)

    data = response.json()
    repoNames = [repo["name"] for repo in data]

    name = [user] * len(repoNames)

    mapRepo = map(getReadme, repoNames, name)
    tup = list(mapRepo)

    startAcc = {
        "gitName": user,
        "repos": [],
    }

    jsonReadme = reduce(reduceJson, tup, startAcc)

    repos = jsonReadme["repos"]

    printVal = json.dumps(jsonReadme["repos"], indent=4)

    list(map(test, repos))


    print(printVal)


    # return result

def test(x):
    project = Project(
        name=x["title"],
        description=x["description"])
    project.save()


def getTitle(readme):
    if readme[0] != '#': #If first character is not #, return empty
        return ""

    result = getText(readme, "# ", "\n")

    if result[0] == '!': # If first line is an image, return empty
        return ""
    return result

def getDescription(readme):
    return getText(readme, "## Description", "#")

def getText(text, start, end):
    init_index = text.find(start)

    if init_index == -1:  #If start string cannot be found, return empty
        return ""

    start_index = text.find(start) + len(start)
    end_index = text.find(end, start_index)
    result = text[start_index:end_index].strip()

    return result


def reduceJson(acc, curr):
    if curr[0] and curr[1]:
        repoName = curr[0]
        readme = curr[1]
        repoJson = {
            "name": repoName,
            "title": getTitle(readme),
            "description": getDescription(readme),
            "readme": readme,
        }
        acc["repos"].append(repoJson)
        return acc


def getReadme(repoName, user):
    uri = gitUrl + "/repos/" + user +"/" + repoName + "/readme"
    res = requests.get(uri, headers=headers)
    resJson = res.json()
    readmeEncoded = resJson["content"]
    readmeBytes = base64.b64decode(readmeEncoded)
    readme = readmeBytes.decode("utf-8")

    return (repoName, readme)

