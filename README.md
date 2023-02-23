# Pagepal

<p align="center">
    <img src="./public/demo.gif" alt="demo">
    <br>
    <br>
    <img src="https://img.shields.io/badge/create-bookmarks-teal?style=flat" alt="projects">
    <img src="https://img.shields.io/badge/favourite-links-teal?style=flat" alt="tasks"> 
    <img src="https://img.shields.io/github/deployments/nrabhiram/pagepal/production">
</p>

A React application for managing your favorite places on the web. It allows you to create bookmarks of the links and stores them within the browser.

During this project, I implemented the MVC architecture, test-drove the business logic, and learned and adopted good React practices.

- I used CSS Modules with Tailwind so that the classes are scoped to their respective components.

- I used the Context API and the `useContext` hook to manage the application-wide side. In fact, to separate our concerns of presentation and application state, I added the state (via the `useState` hook) and methods to update the state within the Contexts themselves.

    - For this application, I created two Contexts: One for the bookmarks and the other for the search query.

- In the form, to manage pieces of the inputs' state (value and validity) that are related to one another, I used the `useReducer` hook. Whenever the inputs are changed or the form is submitted, an action is dispatched, and the input is validated. If it is invalid on submission, an error message is displayed.

    - I used the `useEffect` hook to check for the form's validity whenever an input was changed. This serves two purposes.
        
        1. The function runs only when the inputs' validities are changed, thus reducing the number of times the function is called unnecesarily.
        2. The latest snapshots of the reducer values are provided to determine the form's validity.

- I created my own custom Modal component.

    - The modal is an overlay. So, semantically it should exist on top of all the other elements. But, In React, to do so would mean that the parent-child state-sharing architecture would be disrupted. To get the best of both worlds, we can use a `portal` to port the component to a container at the top of the page.
    - I needed the modal to close when the user clicked on the backdrop. In order to check for this and to ensure that the click didn't occur on a child element and bubbled its way up, I used a `ref` to check if it's equal to the `target`.

- I created a few stateless, reusable components for things such as buttons and modals.

## Technologies

![TypeScript](https://img.shields.io/badge/frontend-ts-blue?style=flat&logo=typescript)
![Tailwind](https://img.shields.io/badge/frontend-tailwind-00C4C4?style=flat&logo=tailwindcss)
![ESLint](https://img.shields.io/badge/linter-eslint-4B32C3?style=flat&logo=eslint)
![Prettier](https://img.shields.io/badge/formatter-prettier-F8BC45?style=flat&logo=prettier)
![Vitest](https://img.shields.io/badge/specs-vitest-yellow?style=flat&logo=vitest)
![Vite](https://img.shields.io/badge/build-vite-A855F7?style=flat&logo=vite)

- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) for utility CSS classes
- [ESLint](https://eslint.org/) configured with some initial rules
- [Prettier](https://prettier.io/) to enforce consistent code style
- [Vitest](https://vitest.dev/) for unit testing and code coverage
- [Vite](https://vitejs.dev/) to build the project for development or production

## Development

### Setup

1. `https://github.com/nrabhiram/pagepal.git`
2. Run `npm install` to install all of the project's dependencies
3. Build the project for production: `npm run build`
4. Run the local development server: `npm run dev`

### Dev Loop

- `prettier-format` - run the autoformatter
- `lint` - run the linter
- `test` - run the specs
- `test-filter <spec-name>` - run a specific spec
- `coverage` - get a coverage report of the specs
- `build` - build the project files for distribution
- `dev` - run the local development server

## License

The project is available as open source under the terms of the [MIT License](LICENSE).

## Author

[![Twitter](https://img.shields.io/badge/follow-%40nrabhiram-1DA1F2?style=flat&logo=Twitter)](https://twitter.com/nrabhiram)

[![LinkedIn](https://img.shields.io/badge/connect-%40abhiramreddy-%230077B5?style=flat&logo=LinkedIn)](https://www.linkedin.com/in/abhiram-reddy-23285b196/)
