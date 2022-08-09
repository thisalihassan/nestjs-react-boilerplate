[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Installation

```bash
# npm 8 or higher
# node 16 or higher
$ npm install
```

## Database

```bash
# npm 8 or higher
# node 16 or higher
$ docker-compose up -d
$ docker-compose exec db bash 
$ psql -U postgres -d projectz

```
[psql commands](https://www.postgresqltutorial.com/postgresql-administration/psql-commands/)

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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
