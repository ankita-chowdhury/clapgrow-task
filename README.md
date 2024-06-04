# User Directory

This project is a simple React application that retrieves and displays a list of users from a public API. It includes features such as a user list view with search functionality, a user detail view, error handling, and responsive design.

## Features

1. **User List View:**
   - Fetches a list of users from the API.
   - Displays user information (name and email) in a list format.
   - Includes a search bar to filter users by name or email.

2. **User Detail View:**
   - Navigates to a detailed view when a user clicks on a list item.
   - Displays additional information such as name, email, phone, and address.

3. **Error Handling:**
   - Implements error handling for API requests.
   - Displays a user-friendly message if the API request fails.

4. **Responsive Design:**
   - Ensures the app is responsive and works well on different screen sizes.

5. **Code Quality:**
   - Follows best practices for code structure and organization.
   - Used functional components and hooks.

## Technical Requirements

- **React:**
  - Used the latest version of React.
  - Utilizes functional components and hooks (`UseState`, `useEffect`, `useParams` etc.).

- **API:**
  - Used the JSONPlaceholder API to fetch user data list (https://jsonplaceholder.typicode.com/users).
  - Used the JSONPlaceholder API to fetch user details (https://jsonplaceholder.typicode.com/users/${id}).
- **Routing:**
  - Used React Router for navigation between the User List View and User Detail View.

- **State Management:**
  - Used React's built-in state management with hooks.

- **Styling:**
  - Used plain CSS for styling.
  - Used Material UI for adding loader
