# Contact Management App with Charts and Maps

This is a contact management app with charts and maps, built using React TypeScript, TailwindCSS, React Router v6, and other libraries. The app allows you to add new contacts, display a list of all added contacts, view contact details, edit and delete contacts. It also has a simple dashboard with a line graph showing the cases fluctuations and a react leaflet map with markers that indicate the country name, total number of active, recovered cases and deaths in that particular country as a popup.

## Responsive React App

## Functionality

### Contacts Page

- A form for adding new contacts
- A form for adding new contacts
- A list of all added contacts
- A button to view the contact details
- The app is able to edit and delete contacts
- Redux is used to store the contact data

### Charts and Maps Page

- A line graph showing the cases fluctuations
- A react leaflet map with markers that indicate the country name, total number of active, recovered cases and deaths in that particular country as a popup.

## APIs Used

- World wide data of cases: https://disease.sh/v3/covid-19/all
- Country Specific data of cases: https://disease.sh/v3/covid-19/countries
- Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all

## Libraries Used

- react-chartjs-2 for line chart
- react-leaflet and leaflet for world map
- react-redux for state management
- tailwind for styling
- TypeScript for type check
- Used React Hooks Functional Components. 
- useState hooks used for state change in Charts and useHooks to update the UI when data being fetched.

## Deployment

I've used for deployement Vercel Click on the Description link to get preview.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/your-repo-name.git`
2. Install dependencies: `yarn install` or `npm install`

## Running the App

1. Start the development server: `yarn start` or `npm start`
2. Open your browser and go to `http://localhost:3000`

## Conclusion

This app is a simple contact management app with charts and maps. It allows you to add, view, edit and delete contacts. It also has a dashboard with a line graph and a world map that shows the COVID-19 cases data. The app is built using ReactJS, TypeScript, TailwindCSS, React Router v6, and React Query aka TanstackQuery.
