Project Showcase SPA

A modern, responsive Single Page Application (SPA) built with React to showcase projects for a creative professional or agency. The application allows users to browse projects, search dynamically, and add new projects without page reloads.

This project demonstrates core React concepts including component-based architecture, state management, event handling, and responsive UI design.

🚀 Features

📄 Landing Page displaying a list of projects

➕ Add Project Form to dynamically add new projects

🔍 Search Functionality to filter projects in real time

🔄 Single Page Application (SPA) behavior (no page reloads)

📱 Responsive Design for mobile, tablet, and desktop

🧩 Reusable Components with clear hierarchy

🧠 State Management using React hooks

🛠️ Technologies Used

React

JavaScript (ES6+)

HTML5

CSS3

Vite (for project setup and development server)

📁 Project Structure
src/
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── ProjectList.jsx
│   ├── ProjectCard.jsx
│   └── AddProjectForm.jsx
├── App.jsx
├── main.jsx
└── index.css

⚙️ Setup Instructions

Clone the repository:

git clone <your-github-repo-url>


Navigate into the project directory:

cd project-showcase


Install dependencies:

npm install


Start the development server:

npm run dev


Open the application in your browser using the local URL provided.

🧪 Testing

Unit and interaction tests can be written using Jest and React Testing Library to validate:

Component rendering

Form submission behavior

Search filtering logic

(Testing setup can be expanded as the application grows.)

📌 Known Limitations

Projects are stored in local state and do not persist after page refresh

No backend or database integration

No authentication or authorization

✨ Future Improvements

Persist projects using an API or local storage

Add client-side routing for individual project detail pages

Improve accessibility (ARIA labels, keyboard navigation)

Add animations and enhanced UI polish

👤 Author

Your Name
Frontend Developer

📄 License

This project is for educational purposes as part of a summative assessment.