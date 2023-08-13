# ANZ Frontend Engineer Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and then ejected using `npm run eject`.

[Live demo](https://anz-fe-assignment.vercel.app/) (hosted on [Vercel](https://vercel.com/))

## Overview

-   Only the `/transactions` route is implemented. The `/` route simply redirects to `/transactions`.
-   TypeScript is used to ensure type safety and to catch errors early.

-   The React Context API is used to manage shared state between components, and to avoid prop drilling.

-   The CSV is read via a `fetch` call, and then parsed and transformed to the required format. The custom transformer I wrote makes no assumption about the year of the transactions, so it will work for any two years of transactions.

-   Given the choice, I'd use TailwindCSS, but I've used vanilla CSS for this project to demonstrate my understanding of CSS.

-   The CSS uses a modified version of the [BEM](http://getbem.com/) methodology (documented [here](#css-naming-convention)) for naming conventions, alonsgide CSS modules to prevent conflicts, and make the styles easier to maintain and scale.

-   ChartJS is used to render the charts. The charts are responsive, and the data is updated when the user changes the selected account.

-   Every component was designed with accessibility in mind. This includes:
    -   ARIA attributes and semantic HTML tags where appropriate
    -   Focus state styles for keyboard navigation
    -   `alt` attributes for images
    -   A skip to content link for screen readers to skip the navigation and go straight to the main content
    -   A screenReaderOnly class for text that should only be visible to screen readers, used to provide additional information about the UI that is not visible to sighted users
    -   Accessible fallbacks to convey the same information that's displayed using the `canvas` element
    -   Reduced motion for animations when requested by the user
    -   Responsive design for mobile and desktop
    -   Color contrast ratio of at least 4.5:1 for text and 3:1 for graphics and user interface components

## CSS Naming Convention

Because BEM is used in conjunction with CSS modules, the naming convention is slightly different to the standard BEM convention. Instead of using hyphens, which would interfere with JavaScript syntax, underscores are used to separate blocks, elements, and modifiers instead.

Block names are kebab-cased, for example `mainHeader`. Nested elements are separated by two underscores, for example `mainHeader__tagline`. Modifiers are separated by a single underscore, for example `mainHeader__tagline_small`.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
