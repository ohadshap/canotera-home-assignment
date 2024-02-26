# Canotera Home Assignment Project

## Description
This project is a React application for managing laws from a default json file. It also allows users to upload JSON files containing law data, view laws, and switch between different languages (Hebrew and English).

## Installation
1. Clone the repository.
2. Install dependencies using `npm install`.

## Usage
1. Start the development server using `npm start`.
2. Access the application in your browser at `http://localhost:3000`.
3. Use the side menu to navigate between the laws page and the file uploader page.
4. On the file uploader page, select a JSON file containing law data and click upload to update the laws.
5. On the laws page, click on a law to view its sub-laws (if any).
6. Use the language switch button to switch between Hebrew and English.
7. Use the restore default button to reset the laws to their default state.

## Project Structure
- **App.js**: Main component that sets up the routes and side menu.
- **Laws.js**: Component for displaying the laws and handling language switching.
- **LawItem.js**: Component for displaying an individual law.
- **FileUploader.js**: Component for uploading JSON files and updating the laws.
- **SideMenu.js**: Component for the side menu navigation.
- **custom-hooks/store.js**: Custom hook for managing the application state using context.

## Dependencies
- React
- react-router-dom
- @fortawesome/fontawesome-svg-core
- @fortawesome/free-solid-svg-icons
- @fortawesome/react-fontawesome

## Project Structure
The project is structured as follows:
- **components**: Contains all the React components.
- **styles**: Contains CSS files for styling the components.
- **data**: Contains default JSON data for the laws.

## Contributing
Contributions are welcome. Please open an issue or submit a pull request.
