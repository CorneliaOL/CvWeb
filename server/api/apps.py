import time
import threading
import os
from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "api"

    def ready(self):
        if os.environ.get("RUN_MAIN") == "true":  # Ensures this only runs during server start
            self.start_loadFromGit()

    def start_loadFromGit(self):
        def task():
            from api.getProjects import loadFromGit
            while True:
                loadFromGit()
                time.sleep(60)

        thread = threading.Thread(target=task, daemon=True)
        thread.start()
