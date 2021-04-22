# nodejs-mongo-api

Nodejs API Setup with firebase

## AWS server url

http://ec2-65-0-27-242.ap-south-1.compute.amazonaws.com:8005/api/getir

## Post Request Body

{
"startDate": "2016-01-30",
"endDate": "2018-02-02",
"minCount": 3000,
"maxCount": 5000
}

## Requirements

- Node
- jest-cli
- Git

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/hrishi1212/nodejs-mongo-api.git
cd nodejs-mongo-api
```

```bash
npm install
```

## Steps for starting the server

To start the express server, run the following

```bash
npm start
```

To test test cases, run the following

```bash
npm test
```

# Folder Structure

### A typical directory layout

    .
    ├── config                  # config folder for different environment
    ├── src
        ├── biz                     # biz logic in this folder
            ├── __test__                     # unit test cases in this folder for biz
        ├── controllers             # route controllers in this folder
        ├── exceptions              # error handling exceptions
        ├── models                  # mongoose data models folder
        ├── repositories            # database connectivity and call in this folder
            ├── __test__                     # unit test cases in this folder for repositories
        ├── routes                  # application routes define in this folder
        └── service                 # a serice call to DB or 3rd party api in this folder
            ├── __test__                     # unit test cases in this folder for service
        ├── utils                   # a database connectivity folder
    └── index.js                # entry file index
    └── .gitignore              # git ignore file
    └── package.json            # heart of modular javascript
    └── LICENSE                 # MIT License
