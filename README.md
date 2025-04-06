## To-Do List App

Access the live app here: **[To-Do List App](https://todo-app-react-5w4c.onrender.com)**

Note: It may take up to **60 seconds to load** as the app is hosted on Render's free tier.

---

### Description

**To-Do List App** is a React-based project developed to practice state management, event handling, and rendering dynamic content in React. The app allows users to add items to a to-do list, toggle their completion status, and visually strike through completed tasks. By using `useState` for managing item input and the list of tasks, I practiced working with React’s component structure, passing props, and dynamically rendering content.

The app consists of three main components: the `App` component to manage state and handle logic, the `Input` component for entering new tasks, and the `Item` component to display and toggle the completion of individual tasks. This project helped me understand how to handle user input, update state, and use conditional rendering for interactivity.

---

### Features

- Add new tasks to the list with a simple input and button.
- Toggle the completion status of tasks by clicking on them.
- Completed tasks are visually marked with a line-through effect.
- Input is cleared after a task is added.

---

### Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **useState**: React hook used for managing component state.
- **JSX**: Syntax extension for JavaScript used with React.
- **CSS**: For styling the app.

---

### How It Works

- **App Component**: The main container that manages the state for both the current input (`item`) and the list of tasks (`array`). It handles adding tasks and toggling their completion status.
- **Input Component**: A form containing an input field and an add button for adding new tasks to the list.
- **Item Component**: Displays each task. Tasks can be toggled as completed by clicking on them, which updates the visual state by striking through completed tasks.

---

### Installation

To get started with this project locally, clone the repository and follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/username/todo-app-react.git
   ```

2. Navigate into the project directory:
   ```bash
   cd todo-app-react
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser at [http://localhost:5173](http://localhost:5173).
