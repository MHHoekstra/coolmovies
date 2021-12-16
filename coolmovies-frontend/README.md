# Coolmovies web challenge

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
