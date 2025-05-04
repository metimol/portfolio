# 🚀 Vladyslav's Portfolio

Welcome to my professional portfolio website built with Next.js! This project showcases my skills, services, and professional projects in a modern, interactive interface with smooth animations and responsive design. 😊

## ✨ Features

- 🎨 Modern UI with smooth animations using GSAP and Framer Motion
- 📱 Fully responsive design that looks great on all devices
- 🖱️ Custom cursor and interactive elements
- 🔄 Smooth scrolling experience with React Lenis
- 📂 Dynamic project pages with detailed case studies
- 🌐 SEO-friendly structure
- 📊 Service showcase section
- 📞 Contact form for potential clients

## 🛠️ Tech Stack

- **Next.js** - React framework with file-based routing
- **TypeScript** - For type safety and better developer experience
- **SASS/SCSS** - For component-level styling with modules
- **GSAP** - For advanced animations
- **Framer Motion** - For interactive UI components
- **React Lenis** - For smooth scrolling

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio in action! 🎉

## 🔧 Project Structure

```
components/       # Reusable UI components organized by page
├── AboutPage/    # Components for About page
├── HomePage/     # Components for Home page
├── ProjectPage/  # Components for Project pages
├── ContactPage/  # Contact page components
├── Button/       # Reusable button component
└── ...
data/            # Static data like project information
libs/            # External library configurations
pages/           # Next.js pages
public/          # Static assets
styles/          # Global styles and variables
utils/           # Utility functions
```

## 📝 Customization

1. **Projects**: Edit the `data/projectsData.ts` file to update your project information
2. **Images**: Replace images in the `public/images` directory with your own
3. **Content**: Modify the component files to update text content
4. **Styling**: Adjust SCSS variables in `styles/variables.scss` for global style changes

## 🌐 Deployment

### Deploying to Vercel (Recommended)

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com):

1. Create an account on Vercel if you don't have one
2. Connect your GitHub repository
3. Click "Import Project" and select your portfolio repository
4. Deploy! 🚀

### Other Deployment Options

You can also deploy to other platforms like Netlify, AWS Amplify, or any hosting provider that supports Next.js applications:

1. Build the production version:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```bash
   npm run start
   # or
   yarn start
   ```

## ⚠️ Common Production Issues & Solutions

### 1. Images Not Loading

Make sure all image paths are correct. The project uses a utility function `getAssetPath` to handle paths - make sure this works correctly in production.

```typescript
// Check utils/assetPath.ts implementation
```

### 2. GSAP Animation Issues

If animations don't work correctly in production, check that GSAP is being properly initialized. Some animations may need additional configuration for mobile devices.

### 3. Performance Optimization

If you experience performance issues:
- Consider implementing image optimization with Next.js Image component
- Lazy load non-critical components
- Optimize GSAP animations to reduce CPU usage

### 4. Environment Variables

Make sure to set up any necessary environment variables in your deployment platform for API keys or other sensitive information.

## 📞 Need Help?

Feel free to reach out if you have any questions about setting up or customizing this portfolio! 😊

## 📄 License

This project is available for personal use and can serve as inspiration for your own portfolio.

---

Built with ❤️ by Metimol
