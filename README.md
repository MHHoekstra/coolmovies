
- [Introduction: Coolmovies challenge](#introduction-coolmovies-challenge)
  - [Requirements](#requirements)
  - [Running the server](#running-the-server)
  - [Play around with some examples](#play-around-with-some-examples)
  - [Reinitializing the database with seed data](#reinitializing-the-database-with-seed-data)

# Introduction: Coolmovies challenge
You have to build a cool movies review application using React.

There must be 2 main features:
- You have to list the movie reviews;
- You have to be able to edit your reviews.

We are providing you a GraphQL API mock application to consume and update the list from, that's all! Consuming this API is a requirement, everything else is up to you.

Bonuses would apply for everything else you add, some ideas (but not limited to):
- Responsive design
- Nice and clean UI
- Animations
- Page transitions
- Filters and sorters
- Extending the API to add more features
- Use external libraries/helpers
- Anything else you can think of! We love creative people :)

## Requirements

- Docker, a recent version (>= 20)
- Docker Compose (one compatible with above docker)
- Your local ports 5432 and 5000 free (not running another postgres server, for instance)

You need docker and docker compose installed on your machine. It supports Linux, MacOS and Windows.

If it's your first time, you can follow the official instructions:
https://docs.docker.com/desktop/
https://docs.docker.com/compose/install/

## Running the server

    cd backend
    docker-compose up

Wait for a log message like this: `PostGraphile v4.12.3 server listening on port 5000`

Not try to connect to GraphiQL: http://localhost:5000/graphiql

## Play around with some examples
Now that your backend is working, you can play around with some queries and mutation that we already built as example. Keep in mind that running mutations here you will be actually mutating the data in your backend, but don't worry if you have an accident! In the next section we explain you how to reset your server database.

We are using Insomnia to provide you some examples. If you don't know about Insomnia you can think about it as another Postman application.

You can install Insomnia from here: https://insomnia.rest

Once that you have it running, you can import Insomnia_Collection.json from the `backend` folder.

## Reinitializing the database with seed data
So you were playing with the mutations and deleted something you shouldn't, no problem!

Go to the `backend` folder using your preferred terminal, then:

    docker-compose down
    docker volume rm coolmovies-backend_db
    docker rmi coolmovies-db:latest
    docker-compose up

If you want also to rebuild the Postgraphile Server, run this before the `up` command.

    docker rmi coolmovies-graphql:**latest**

Good luck and have fun!

The ecoPortal Team
