[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Installation

```bash
# npm 8 or higher
# node 16 or higher
$ npm install
```

## HUSKY for linting staged files
```bash
# npm 8 or higher
# node 16 or higher
$ npm run prepare
```

## Database

```bash
$ docker-compose up -d
$ docker-compose exec db bash
$ psql -U postgres -d projectz

```
[psql commands](https://www.postgresqltutorial.com/postgresql-administration/psql-commands/)

## Running the app

```bash
# run migrations
$ npm run migration:run

# generate migrations
$ npm run migration:generate

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

if you get error on migrations try deleting dist folder
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
