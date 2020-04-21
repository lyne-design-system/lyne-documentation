# Documentation for Lyne Design System

## Setup for development

- `npm install`

## Run dev server

You must provide an API token for the Dato CMS GraphQL Endpoint. There are two possibilities:

1. .env file

Add a .env file with the following content
```bash
DATO_API_TOKEN=PAST_TOKEN_HERE
```

After adding the .env file, you can run the dev server: `npm run develop`

2. Pass with npm command

You can pass the env flag directly in the npm command
```bash
DATO_API_TOKEN=PAST_TOKEN_HERE npm run develop
```

## Linting

Make sure to run `npm run lint` on your console to check for linting issues. The build on Travis CI will fail if there are linting issues.
