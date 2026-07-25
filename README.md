# Academic Profile Website

A clean, modern, and responsive personal academic website built with React and Tailwind CSS. It is designed to showcase academic achievements, publications, projects, honors, and blog posts.

## Features

- **Responsive Design:** Fully responsive layout that looks great on both desktop and mobile devices.
- **Modern Tech Stack:** Built with React, Vite, and Tailwind CSS for fast performance and easy customization.
- **Multiple Sections:** Includes dedicated pages for About, Publications, Projects, Honors, and a Blog.
- **Markdown Support:** Write your blog posts in Markdown, rendered beautifully with `react-markdown`.
- **Easy Configuration:** Manage your site data, including personal info, navigation links, and content, from a single `src/data.ts` file.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the dependencies:

```bash
npm install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open your browser and visit `http://localhost:3000` (or the port specified in your terminal) to view the application.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing the compiled assets, ready to be deployed to your preferred hosting provider.

## Customization

You can easily customize the content of your website by editing the `src/data.ts` file. 

- **Personal Info:** Update your name, bio, location, and social links in the `author` object.
- **Sections:** Add or modify items in the `publications`, `projects`, `honors`, and `blogPosts` arrays.
- **Styling:** The visual design is powered by Tailwind CSS. You can modify the global styles in `src/index.css` and individual component classes to match your preferences.

## License

This project is open-source and available under the MIT License.