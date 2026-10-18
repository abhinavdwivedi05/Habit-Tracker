# Habit Tracker

A simple and interactive Habit Tracker built with React, TypeScript, and Tailwind CSS. The application helps users track daily habits, monitor their consistency, and build better routines.

## Features

- **Habit Management** — View and manage your daily habits.
- **Daily Tracking** — Mark habits as completed for individual days.
- **Weekly Overview** — View dates and track progress across the week.
- **Reusable Components** — Modular UI components for buttons, headers, and habit forms.
- **Type Safety** — TypeScript interfaces and types for more maintainable code.
- **Responsive UI** — A clean interface designed for everyday use.

## Tech Stack

- **React** — Component-based user interface.
- **TypeScript** — Static typing and improved developer experience.
- **Tailwind CSS** — Utility-first styling.
- **Vite** — Development server and build tooling.
- **ESLint** — Code quality and linting.

## Project Structure

```text
Habit-Tracker/
├── src/
│   ├── components/
│   │   ├── button.tsx
│   │   ├── header.tsx
│   │   ├── habitform.tsx
│   │   └── habitlist.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

*Note: The structure above reflects the files identified during development; update it if your project contains additional files or folders.*

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abhinavdwivedi05/Habit-Tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Habit-Tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server. |
| `npm run build` | Builds the application for production. |
| `npm run preview` | Previews the production build. |
| `npm run lint` | Runs ESLint checks, if configured. |

## Development Workflow

1. Create or update reusable React components.
2. Use TypeScript to define component props and data types.
3. Style the interface using Tailwind CSS.
4. Run the application locally and test changes.
5. Commit changes and push them to GitHub.

## Future Improvements

- Persist habits using local storage or a database.
- Add weekly and monthly progress statistics.
- Display habit completion streaks.
- Add habit categories and reminders.
- Introduce charts to visualize consistency over time.

## Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## Author

**Abhinav Dwivedi**

- GitHub: [@abhinavdwivedi05](https://github.com/abhinavdwivedi05)

---

Built with React and TypeScript to encourage consistency and better daily habits.
