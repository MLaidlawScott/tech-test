# Tech Test

## Feedback Comments

- Moved Controller for bodies api to the app layer.
- RTK bundle size: Very heavy in the context of the tech test but used to show modern redux recommended practices. I created a quick custom hook that mimics the data fetching functionality but without redux. I've discussed RTK bundle size with people in the past and I do believe it is worth using if an application is going to use Redux.
- Too much in lib layer
  - Redux: completely agree that in this case things are over-engineered. Examples where I think slices/api slices would be good in libs is if you have some shared logic to use across multiple front-end. For example, imagine two microfrontends that have the same login process. The same api slice could be used in both.
  - Frontend components: again, very over-engineered for the purpose of the tech test. I think either way would work in this case. I tend to do it this way as it is shown this way in the Nx example for micro frontends.

## How to Run

After yarn or npm install...

To run frontend and backend use the following command:

```
npx nx run-many --target=serve --projects=celestial-web,celestial-api --parallel
```

To run tests:

```
npx nx run-many --all --target=test
```

To run end-to-end tests run the following two commands:

```
npx nx serve celestial-api
npx nx e2e celestial-web-e2e --watch
```

Then run tests via Cypress.

To run linting:

```
npx nx run-many --all --target=lint
```

To run Storybook:

```
npx nx run web-component-library:storybook
```

## Technologies Used

### Nx

[Nx](https://nx.dev/) is a build framework that has excellent support for monorepos and code sharing. It also contains a bunch of code gen tools.

### NestJs

The Backend is written using the [NestJs](https://nestjs.com/) Node.js framework. This framework fully supports TypeScript and has good tools to assist with separation of concerns.

### Storybook

[Storybook](https://storybook.js.org/) is a tool for building UI components in isolation. It is especially useful when working with component libraries.

### Redux Toolkit

[Redux Toolkit](https://redux-toolkit.js.org/) is the recommended way of using Redux. It also includes a great tool called RTK Query which allows you to easily implement api calls whilst exposing useful hooks for your components. It uses Thunks under the hood.

### Material-UI

[Material-UI](https://material-ui.com/) is a component library that follows the material design guidelines.

### Prisma & SQLite

[Prisma](https://www.prisma.io/) is a Node.js and Typescript ORM. It is used in this project to interface with an SQLite database.

### Testing

[Cypress](https://www.cypress.io/) is used for end-to-end testing. [Jest](https://jestjs.io/) is used as our test runner. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) would be used for component testing if required.

## Decisions and Notes

- The folder structure for this small project could be done in many ways. In a larger project using Nx I would typically have code which can be shared across multiple applications in the top level `./lib` directory. I.e. `./lib/shared-models`
- For libraries relating to applications they can be nested under another folder, i.e. `./lib/celestial-api/bodies`.
- Having libraries for RTK slices and apis would allow codesharing between web apps and react native apps.
- Testing opportunities for this were minimal so I have decided to include a test in the backend and an end-to-end test using cypress.
- I have used feature branches from master and frequent commits. In a production codebase a develop branch would also be used. For the initial work however I just used branches and merged locally, so pull requests will not be seen on Github.
- Nx creates a lot of files that are not needed for a project this small. In some cases these are left as an example as to what is possible.
