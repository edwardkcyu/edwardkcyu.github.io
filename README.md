# Edward Yu - Portfolio

A responsive React portfolio website built with Vite, TypeScript, and Tailwind CSS.

## Features

- 📱 **Responsive Design**: Mobile-first approach with support for all screen sizes
- 🌙 **Dark Mode**: Toggle between light and dark themes with persistent preference
- ⚡ **Fast Performance**: Built with Vite for optimal development and build experience
- 🎨 **Modern UI**: Clean, minimal design with Tailwind CSS
- 📄 **CV Display**: Professional presentation of experience, skills, and education

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling with dark mode support
- **Lucide React** for icons

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Header with contact info and dark mode toggle
│   ├── Summary.tsx     # Professional summary
│   ├── Skills.tsx      # Skills organized by category
│   ├── Experience.tsx  # Work experience timeline
│   ├── Education.tsx   # Education information
│   └── DarkModeToggle.tsx # Dark/light mode toggle
├── data/
│   └── cv-data.ts      # Structured CV data
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Tailwind CSS imports and custom styles
```

## Deployment

The application can be deployed to any static hosting service:

- **GitHub Pages**: Build and deploy the `dist` folder
- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder

## Customization

To update the portfolio content, modify the data in `src/data/cv-data.ts`. The application will automatically reflect changes in the UI.
