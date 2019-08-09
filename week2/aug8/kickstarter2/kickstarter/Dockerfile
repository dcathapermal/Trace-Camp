FROM python:3.6
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 8000i
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

