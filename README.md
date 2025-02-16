# GitHub User Search App

This is a simple React application that allows users to search for GitHub users by their username. It uses the GitHub API to fetch user data and stores the search history in `localStorage`. The app is built with **React**, **shadcn/ui**, and **Tailwind CSS**.

---

## Try It Online

You can try the app directly in your browser using StackBlitz:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/jaydeep-bagthariya/UserSeeker)

## Features

- **Search GitHub Users**: Enter a GitHub username to fetch and display user details (name and avatar).
- **Search History**: All searches (successful or failed) are stored in `localStorage` and displayed on the History Page.
- **Clear History**: Easily clear the search history from both the UI and `localStorage`.
- **Responsive Design**: The app is fully responsive and works on all screen sizes.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **shadcn/ui**: A collection of reusable UI components built with Tailwind CSS.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **GitHub API**: Used to fetch user data.
- **React Router**: For navigation between the Search Page and History Page.

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jaydeep-bagthariya/UserSeeker.git
   cd UserSeeker

   ```

2. **Install dependencies:**

   ```bash
   npm install

   ```

3. **Start the development server:**

   ```bash
   npm run dev

   ```

4. **Open the app:**
   - Visit http://localhost:5173 in your browser to view the app.

---

### Usage

1. **Search for a GitHub User:**

   - On the Landing Page, enter a GitHub username in the input field and click the "Search" button.
   - If the user exists, their name and avatar will be displayed.
   - If the user does not exist, an error message will be shown.

2. **View Search History:**

   - Navigate to the History Page to view all past searches.
   - Each entry includes the search query, timestamp, and result (or error).

3. **Clear Search History:**
   - On the History Page, click the "Clear History" button to delete all search history.
