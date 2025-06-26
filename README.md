# My Portfolio Landing Page

This is a production-ready, visually stunning two-page portfolio/product landing site built with React 19, TypeScript, Material-UI (MUI), and Google Maps integration.

## Features
- **Dark theme** inspired by Blueprint.js
- Responsive, modern UI with MUI components
- Central hero section with interactive hexagonal logo and sub-company links
- Google Map with marker and info window on Contact page
- Smooth, satisfying hover effects
- Fully responsive and accessible

## Tech Stack
- React 19 + TypeScript (Create React App)
- Material-UI (MUI) for all UI components
- React Router DOM for navigation
- @react-google-maps/api for Google Maps

## Project Structure
```
home-page/
  src/
    components/
      Navbar.tsx
      Footer.tsx
      Layout.tsx
    pages/
      HomePage.tsx
      ContactPage.tsx
      SubCompanyAPage.tsx
      SubCompanyBPage.tsx
      SubCompanyCPage.tsx
      SubCompanyDPage.tsx
      SubCompanyEPage.tsx
      SubCompanyFPage.tsx
    App.tsx
    index.tsx
    ...
  public/
    my-logo.jpg (place your logo here)
    ...
```

## Setup & Running
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set your Google Maps API key:**
   - Create a `.env` file in the root with:
     ```
     REACT_APP_Maps_API_KEY=your_google_maps_api_key
     ```
3. **Start the development server:**
   ```bash
   npm start
   ```

## Build for Production
```bash
npm run build
```

## Customization
- Replace `/public/my-logo.jpg` with your own hexagonal logo.
- Edit sub-company pages in `src/pages/` as needed.

---
© {year} My Portfolio. All rights reserved.
