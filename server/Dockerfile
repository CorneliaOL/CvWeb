FROM python:3.11-slim

WORKDIR /app

COPY  requirments.txt /app/

RUN pip install --upgrade pip
run pip install -r requirments.txt

COPY . /app/

# Set environment variables for the Django superuser
ENV DJANGO_SUPERUSER_USERNAME=lucasholter \
    DJANGO_SUPERUSER_EMAIL=admin@example.com \
    DJANGO_SUPERUSER_PASSWORD=123

# Run migrations and create a superuser
RUN python manage.py migrate && \
    python manage.py createsuperuser --noinput || true

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
