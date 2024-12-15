# Multi-step Signup Form

## Project Overview
This project implements a multi-step signup form for Lorem Gaming's new online gaming experience. The form guides users through a series of steps with required field validation and dynamic navigation, ensuring a smooth and user-friendly registration process.

## Features
- **Multi-step Form Navigation**: Users can jump between stages by clicking the stage name but cannot use the "Next Step" button for skipping.
- **Data Persistence**: Form data is retained even after page refreshes or unfinished submissions.
- **Conditional Navigation**: Redirects users back to incomplete sections with pre-filled data.
- **Form Reset**: Users can reset the form and cancel the signup process.
- **Required Fields Validation**: Users must complete all required fields before submission.
- **Responsive Design**: The skipping feature is disabled on mobile devices.

## Tech Stack
- **Frontend Framework**: React
- **State Management**: Redux Toolkit
- **Programming Language**: TypeScript
- **Styling**: CSS (no external libraries used)

## Folder Structure
```
root
│── public
│── src
│   ├── assets  // Static files like images
│   ├── components  // Reusable UI components
│   ├── constants  // contants static data for the form 
│   ├── features  // Redux slices and related logic
│   ├── pages  // Application screens  
│   ├── types  // Types of components
│   ├── utils  // Utility functions with unit tests
│   ├── App.tsx  // Main app component
│   └── index.tsx  // App entry point
│── README.md  // Project overview and documentation
│── package.json  // Project dependencies and scripts
└── tsconfig.json  // TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/estherlardze/labs/tree/main/week-5
   ```
2. Navigate to the project directory:
   ```bash
   cd multistep
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application
```bash
npm run dev
# or
yarn dev
```
Access the application at `http://localhost:5173`.

```
## Project Implementation

### Data Management Strategy
- **Redux Toolkit**: Manages application state, including form data and navigation state.
- **Local Storage**: Used for data persistence across page reloads.

### Components
- **UI Components**: Reusable UI elements such as buttons, inputs, and navigation tabs.
- **Form Pages**: Separate pages for each signup stage.

### Utility Functions
- Validations
- Data persistence handlers
- Navigation logic


