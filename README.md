# country-app

This is a Vue.js 3 application that displays public holiday information for different countries using the Nager.Date API. The app allows users to select countries, view a list of public holidays, and see random countries with their upcoming holidays. It is built with TypeScript, Vuex, Axios, Bootstrap and Vue Router.

## Features

- **Country Selection**: Search and display public holidays by country.
- **Random Country Holidays**: Display a few random countries along with their next public holidays.
- **Year Selector**: Choose a year to view public holidays for a specific country in that year.
- **Bootstrap Classes**: Use of Bootstrap for UI components like buttons, aligns and texts.
- **Vuex for State Management**: Manages global state such as countries, holidays, and random country data.
- **Vue Router**: Allows page navigation for different views in the application.
- **Axios for API Requests**: Axios is used to handle HTTP requests to the Nager.Date API, providing a simple and flexible way to interact with external data sources.

## Architecture

- **Vue.js 3**: The front-end framework.
- **Vuex**: For managing global state.
- **Vue Router**: For handling page routing.
- **Bootstrap**: For setting styles for UI components.
- **Axios**: For making API requests.
- **Nager.Date API**: Provides the public holidays of countries.

The application is structured as follows:
```
src/ 
|-- components/ # Reusable Vue components 
|-- store/ # Vuex store with modules for different state entities 
|-- views/ # Main views Pages for the application 
|-- App.vue # Main App component 
|-- main.ts # Application entry point 
|-- router/ # Vue Router configuration 
|-- env/ # API endpoints
|-- assets/ # Static styles
```

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- **Node.js** (v18.20.04 or later)
- **npm** (v10.8.1 or later)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/AzizbekJumanazarov/country-app
   
2. Navigate to the project directory:
    ```
   cd country-app

3. Install the dependencies:
    ```bash
   npm install

4. Create a .env file or update ( if necessary ) in the root of the project and define the API endpoint (adjust if necessary):
    ```
    VUE_APP_API_ENDPOINT=https://date.nager.at/api/v3

5. Run the development server:
    ```bash
    npm run serve
    ```

### Lints and fixes files

```
npm run lint
```
### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
