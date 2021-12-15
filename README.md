- [Introduction: Coolmovies challenge](#introduction-coolmovies-challenge)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Requirements](#requirements)
  - [Running the server](#running-the-server)
  - [Play around with some examples](#play-around-with-some-examples)
  - [Reinitializing the database with seed data](#reinitializing-the-database-with-seed-data)

# Introduction: Coolmovies challenge

You have to add the cool movies review feature to the existing `coolmovies-frontend`.

We have created a basic app for you to get started in.

What's been setup for you:

- [Next.js](https://nextjs.org/) (Build Framework)
- [MUI](https://mui.com/) (Component Library)
- [Redux Toolkit](https://redux-toolkit.js.org/) (State Management)
- [Redux-Observable](https://redux-observable.js.org/) (State Side-effect Middleware)
- [Apollo GraphQL](https://www.apollographql.com/) (GraphQL Query Client)

You must use these tools to complete the test. If you're unfamiliar with any of these, please read their documentation. We have also added some example code for the ideal patterns we would like to see. Have a look at `pages/index.tsx`.

We are providing you a GraphQL API mock application to consume.

## Acceptance Criteria

There are 2 main components that must be developed for this feature: (You have flexibility on the UI/UX for this)

1. Listing of the movie reviews.
2. Editing the existing movie reviews.

The feature must be available on the `/reviews` endpoint of the application.

The design must be responsive.

There are a couple of additional things that we would like to see in your submission.

1. Our designers don't like the default MUI blue. Please change this.
2. Make the proxied GraphQL URL an environment variable.
3. Improve the folder structure of the frontend application how you see fit. (It's intentionally not great)
4. Add the custom `edit.svg` from the `public` folder as an icon to launch editing the review.
5. Add a unit testing framework of your choice, and some unit tests around the more complex areas of your code.

## Requirements

- Docker, a recent version (>= 20)
- Docker Compose (one compatible with above docker)
- Your local ports 5432 and 5000 free (not running another postgres server, for instance)

You need docker and docker compose installed on your machine. It supports Linux, MacOS and Windows.

If it's your first time, you can follow the official instructions:
https://docs.docker.com/desktop/
https://docs.docker.com/compose/install/

## Running the server

    cd coolmovies-backend
    docker-compose up

Wait for a log message like this: `PostGraphile v4.12.3 server listening on port 5000`

Now try to connect to GraphiQL: http://localhost:5000/graphiql

## Play around with some examples

Now that your backend is working, you can play around with some queries and mutation that we already built as example. Keep in mind that running mutations here you will be actually mutating the data in your backend, but don't worry if you have an accident! In the next section we explain you how to reset your server database.

We are using Insomnia to provide you some examples. If you don't know about Insomnia you can think about it as another Postman application.

You can install Insomnia from here: https://insomnia.rest

Once that you have it running, you can import Insomnia_Collection.json from the `backend` folder.

## Reinitializing the database with seed data

So you were playing with the mutations and deleted something you shouldn't, no problem!

Go to the `coolmovies-backend` folder using your preferred terminal, then:

    docker-compose down
    docker volume rm coolmovies-backend_db
    docker rmi coolmovies-db:latest
    docker-compose up

If you want also to rebuild the Postgraphile Server, run this before the `up` command.

    docker rmi coolmovies-graphql:**latest**

Good luck and have fun!

The ecoPortal Team
