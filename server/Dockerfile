FROM python:3.11-slim

WORKDIR /app

COPY  requirments.txt /app/

RUN pip install --upgrade pip
run pip install -r requirments.txt

COPY . /app/

# Run migrations and create a superuser
RUN python manage.py migrate

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
