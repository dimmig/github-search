# GitHub Search

GitHub Search is a simple and intuitive React application that allows users to search for GitHub profiles, view their repositories, and manage a personalized list of favorite repositories. This project is built using modern React libraries and state management tools such as Redux, Redux Toolkit, and RTK Query for seamless data fetching and state handling.

---

## Features

### 🔍 **Search GitHub Users**
- Enter a username in the search bar to find GitHub profiles.
- Displays a list of users matching the search query.

### 📂 **View User Repositories**
- Click on a user to view their repositories.
- Displays repository names, descriptions, and other metadata.

### ⭐ **Manage Favorites**
- Add repositories to your favorites list for quick access.
- Remove repositories from the favorites list when no longer needed.
- The favorites list is stored in the global state for easy management.

---

## Tech Stack

### **Frontend**
- **React**: For building the user interface.
- **Tailwind CSS**: For responsive and modern styling.

### **State Management**
- **Redux**: Centralized state management.
- **Redux Toolkit**: Simplified Redux development.
- **RTK Query**: Efficient data fetching and caching.

---

## Project Structure

```plaintext
src/
├── components/       # Reusable UI components
├── store/            # Redux slices and logic
├── hooks/            # React custom hooks
├── models/           # TypeScript models and interfaces
├── pages/            # Application pages (Home, Favorites)
├── api/              # RTK Query API definitions
├── App.tsx           # Main application file
└── index.tsx         # Entry point
