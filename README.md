<h1 align="center"> PC Part Hunter API </h1>
<p align="center">
  Web API for PC Part Hunter
</p>

# Table of Content 
- [Introduction](#introduction)
- [Requirements](#requirements)
- [Documentation](#documentation)

# Introduction
Welcome to the PC Part Hunter API, this service forms part of the [PC Part Hunter]() system.

The API connects to a MongoDB database where the filtered product information is stored.

# Requirements
The service can be run locally using [Docker]() or [Node]() 

## Dependencies
- [CORS]()
- [dotenv]()
- [Express]()
- [Mongoose]()
- [Nodemon]()

## External Services
- [MongoDB]() (Hosted)

## Quick Start

### Docker 
Running the service on docker 
1. Build the docker image 
``` shell
docker build -t part-hunter-api .
```

2.  Run docker container
``` shell
docker run part-hunter-api
```

### Node 
Running the service on a local instance of Node. You may encounter issues if you are running a version of Node other than v16

1. Install the application dependencies (may take a while, Puppeteer is a big boi)
``` shell

npm install

```

2. Run the application using nodemon
``` shell

npm run start

```

### Environment Vairables
You will need to setup up the following environment variables for both Docker and Node

- MONGO_DB=[your-mongodb-database-connection]

# Documentation
** Coming Soon ** 
