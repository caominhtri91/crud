# CRUD API

CRUD API EXAMPLE

## Requirement
Node version 14

## Install depenencies
```
yarn install
```

## Run with docker-compose
```
docker-compose up --build
```

## Working with database
### Frist access database with these info:
```
host: localhost
port: 3306
user: root
password: superhardpassword
```
### Create database named `crud`
### Then, in project folder, run migration
```
yarn migration
```

## Swagger api documentation
```
http://localhost:3979/api/v1/docs/
```
