### Project Documentation

#### Overview
This project is a Movie Dashboard application built with React, Redux, and Tailwind CSS. It provides comprehensive information about movies, including their genres, ratings, Oscar nominations, and wins. The application is designed to be responsive and user-friendly, allowing users to explore and discover movies easily.

#### Key Components
1. **Header**: Displays the navigation bar with links to different pages.
2. **Footer**: Displays the footer with navigation links and copyright information.
3. **Home**: The main page that displays charts and a list of movies.
4. **About**: Provides information about the application and its purpose.
5. **Contact**: Provides contact information for users to reach out.
6. **MovieItem**: Displays detailed information about a single movie.
7. **BarChartComponent**: Displays bar and line charts for movie statistics.
8. **CountryPieChart**: Displays a pie chart for country distribution of movies.

#### Key Design Decisions
1. **Component-Based Architecture**: The application is built using a component-based architecture, which promotes reusability and maintainability. Each component is responsible for a specific part of the UI.
2. **State Management with Redux**: Redux is used for state management to handle the global state of the application. This ensures that the state is predictable and can be easily managed across different components.
3. **Responsive Design with Tailwind CSS**: Tailwind CSS is used for styling the application. It provides utility-first CSS classes that make it easy to create responsive designs. The application is designed to be fully responsive, ensuring a good user experience on both desktop and mobile devices.
4. **Testing with Jest and React Testing Library**: Jest and React Testing Library are used for testing the components. This ensures that the components render correctly and contain the expected content.

#### Trade-offs
1. **Complexity vs. Simplicity**: Using Redux for state management adds complexity to the project, but it provides a predictable and maintainable state management solution. For smaller projects, simpler state management solutions like React's Context API might be more appropriate.
2. **Performance vs. Development Speed**: Using Tailwind CSS speeds up development by providing pre-defined utility classes, but it can lead to larger CSS files if not properly configured. Purging unused styles in production helps mitigate this issue.
3. **Testing Overhead**: Writing tests for each component adds to the development time, but it ensures that the application is robust and reduces the likelihood of bugs.

#### Setup and Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AbdulmoizAbdulmaged/Movie-Dashboard.git
   cd movie-dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Run Tests**:
   ```bash
   npm test
   ```

#### Directory Structure
```
src/
├── components/
│   ├── header/
│   │   ├── Header.jsx
│   │   ├── Header.test.jsx
│   ├── footer/
│   │   ├── Footer.jsx
│   │   ├── Footer.test.jsx
│   ├── movieItem/
│   │   ├── MovieItem.jsx
│   │   ├── MovieItem.test.jsx
│   ├── barChart/
│   │   ├── BarChartComponent.jsx
│   │   ├── BarChartComponent.test.jsx
│   ├── countryPieChart/
│   │   ├── CountryPieChart.jsx
│   │   ├── CountryPieChart.test.jsx
├── pages/
│   ├── home/
│   │   ├── Home.jsx
│   │   ├── Home.test.jsx
│   ├── about/
│   │   ├── About.jsx
│   │   ├── About.test.jsx
│   ├── contact/
│   │   ├── Contact.jsx
│   │   ├── Contact.test.jsx
├── reducers/
│   ├── index.js
├── setupTests.js
├── App.jsx
├── index.jsx
```

#### Conclusion
This project demonstrates a well-structured React application with a focus on component reusability, state management, responsive design, and testing. The key design decisions and trade-offs made ensure that the application is maintainable, scalable, and provides a good user experience.