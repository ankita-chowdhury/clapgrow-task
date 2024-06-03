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
   - Uses functional components and hooks.

## Technical Requirements

- **React:**
  - Uses the latest version of React.
  - Utilizes functional components and hooks (`useState`, `useEffect`, etc.).

- **API:**
  - Uses the JSONPlaceholder API to fetch user data (https://jsonplaceholder.typicode.com/users).

- **Routing:**
  - Uses React Router for navigation between the User List View and User Detail View.

- **State Management:**
  - Uses React's built-in state management with hooks.

- **Styling:**
  - Uses plain CSS for styling.

## File Structure

src/
├── components/
│   ├── UserList.js
│   ├── UserDetail.js
│   ├── SearchBox.js
│   └── ErrorMessage.js
├── pages/
│   ├── UserListView.js
│   ├── UserDetailView.js
├── App.js
├── index.js
├── App.css
└── index.css
