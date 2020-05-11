[![Build Status](https://travis-ci.org/lyne-design-system/lyne-documentation.svg?branch=master)](https://travis-ci.org/lyne-design-system/lyne-documentation)

# Lyne Documentation Platform for Lyne Design System

## Setup for development

First of all run `npm install` on the command line to install all dependencies required by the Lyne Documentation Platform. 

### Run dev server

You must provide an API token for the Dato CMS GraphQL Endpoint. There are **two** possibilities:

#### First — .env file

Add a `.env` file with the following content to the project root
```bash
DATO_API_TOKEN=PASTE_TOKEN_HERE
```

After adding the `.env` file, you can run the dev server with `npm run develop`

#### Second — Pass token with npm command

You can pass the token directly in the npm command
```bash
DATO_API_TOKEN=PASTE_TOKEN_HERE npm run develop
```

### Linting

Make sure to run `npm run lint` on your console to check for linting issues. The build on Travis CI will fail if there are linting issues.
