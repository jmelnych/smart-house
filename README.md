# Smart-house

## About

Simple express app: front/back communication

## Setup (Prerequisites)

You have to install MongoDB database server first in your system and start it. 

Alternatively, you can use docker.

### Docker (option 1)

Run in directory with docker-compose.yml
```
docker-compose up -d
```

### Regular installation (option 2)

Use the below link to install MongoDB
https://docs.mongodb.com/manual/installation/

### Run frontend:

```
cd frontend/
npm start
```

### Run backend:

```
cd server/
npm run start:dev
```

### Run fake device:

```
cd server/
npm run start:device `port`
```