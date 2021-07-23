[![Build Status](https://travis-ci.com/lyne-design-system/lyne-documentation.svg?branch=master)](https://travis-ci.com/lyne-design-system/lyne-documentation) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/lyne-design-system/lyne-documentation?label=release)

# Lyne Documentation Platform for Lyne Design System

## Live version of the Lyne documentation platform can be found here
https://lyne-documentation.netlify.app/

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
