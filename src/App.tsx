// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
// import Layout from './components/Layout';
// import HomePage from './pages/HomePage';
// import ContactPage from './pages/ContactPage';
// import SubCompanyAPage from './pages/SubCompanyAPage';
// import SubCompanyBPage from './pages/SubCompanyBPage';
// import SubCompanyCPage from './pages/SubCompanyCPage';
// import SubCompanyDPage from './pages/SubCompanyDPage';
// import SubCompanyEPage from './pages/SubCompanyEPage';
// import SubCompanyFPage from './pages/SubCompanyFPage';

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     background: {
//       default: '#293742',
//       paper: '#232B33',
//     },
//     primary: {
//       main: '#137CBD',
//       contrastText: '#F5F8FA',
//     },
//     secondary: {
//       main: '#48AFF0',
//     },
//     text: {
//       primary: '#F5F8FA',
//       secondary: '#A7B6C2',
//     },
//   },
//   typography: {
//     fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
//     h2: { fontWeight: 800 },
//     h3: { fontWeight: 700 },
//     h5: { fontWeight: 400 },
//   },
//   components: {
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           background: '#293742',
//           borderBottom: '1px solid #202B33',
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 6,
//           fontWeight: 600,
//           textTransform: 'none',
//           transition: 'background 0.3s, color 0.3s, box-shadow 0.3s',
//         },
//       },
//     },
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/subcompany-a" element={<SubCompanyAPage />} />
//             <Route path="/subcompany-b" element={<SubCompanyBPage />} />
//             <Route path="/subcompany-c" element={<SubCompanyCPage />} />
//             <Route path="/subcompany-d" element={<SubCompanyDPage />} />
//             <Route path="/subcompany-e" element={<SubCompanyEPage />} />
//             <Route path="/subcompany-f" element={<SubCompanyFPage />} />
//           </Routes>
//         </Layout>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
// import Layout from './components/Layout';
// import HomePage from './pages/HomePage';
// import ContactPage from './pages/ContactPage';
// import SubCompanyAPage from './pages/SubCompanyAPage';
// import SubCompanyBPage from './pages/SubCompanyBPage';
// import SubCompanyCPage from './pages/SubCompanyCPage';
// import SubCompanyDPage from './pages/SubCompanyDPage';
// import SubCompanyEPage from './pages/SubCompanyEPage';
// import SubCompanyFPage from './pages/SubCompanyFPage';

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//     background: {
//       // --- UPDATED: Set default background to transparent ---
//       default: 'transparent', // This allows page-specific fixed backgrounds to show through
//       // -----------------------------------------------------
//       paper: '#232B33',
//     },
//     primary: {
//       main: '#137CBD',
//       contrastText: '#F5F8FA',
//     },
//     secondary: {
//       main: '#48AFF0',
//     },
//     text: {
//       primary: '#F5F8FA',
//       secondary: '#A7B6C2',
//     },
//   },
//   typography: {
//     fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
//     h2: { fontWeight: 800 },
//     h3: { fontWeight: 700 },
//     h5: { fontWeight: 400 },
//   },
//   components: {
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           // It's crucial that your Navbar's background in Navbar.tsx
//           // is robust enough (e.g., using rgba with a low alpha, or backdrop-filter)
//           // to properly blend with or overlay the page backgrounds.
//           // This ensures the Navbar looks consistent.
//           // The background property here for MuiAppBar applies to the AppBar's root element
//           // by default, but your Navbar.tsx has its own `background` style, which takes precedence.
//           background: 'transparent', // Ensure this is also transparent to avoid conflicts
//           borderBottom: '1px solid rgba(72,175,240,0.18)', // Keep the border
//           boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)', // Keep the shadow
//           backdropFilter: 'blur(24px)', // Keep the blur
//           WebkitBackdropFilter: 'blur(24px)',
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 6,
//           fontWeight: 600,
//           textTransform: 'none',
//           transition: 'background 0.3s, color 0.3s, box-shadow 0.3s',
//         },
//       },
//     },
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Router>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/subcompany-a" element={<SubCompanyAPage />} />
//             <Route path="/subcompany-b" element={<SubCompanyBPage />} />
//             <Route path="/subcompany-c" element={<SubCompanyCPage />} />
//             <Route path="/subcompany-d" element={<SubCompanyDPage />} />
//             <Route path="/subcompany-e" element={<SubCompanyEPage />} />
//             <Route path="/subcompany-f" element={<SubCompanyFPage />} />
//           </Routes>
//         </Layout>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;












import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

// Import your existing SubCompany pages
import SubCompanyAPage from './pages/SubCompanyAPage';
import SubCompanyBPage from './pages/SubCompanyBPage';
import SubCompanyCPage from './pages/SubCompanyCPage';
import SubCompanyDPage from './pages/SubCompanyDPage';
import SubCompanyEPage from './pages/SubCompanyEPage';
import SubCompanyFPage from './pages/SubCompanyFPage';

// --- NEW IMPORTS: Import your new Coming Soon pages ---
import HelixJournalsPage from './pages/HelixJournalsPage';
import HelixEScrollPage from './pages/HelixEScrollPage';
import DigigroPage from './pages/DigigroPage';
// --- END NEW IMPORTS ---

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      // --- UPDATED: Set default background to transparent ---
      default: 'transparent', // This allows page-specific fixed backgrounds to show through
      // -----------------------------------------------------
      paper: '#232B33',
    },
    primary: {
      main: '#137CBD',
      contrastText: '#F5F8FA',
    },
    secondary: {
      main: '#48AFF0',
    },
    text: {
      primary: '#F5F8FA',
      secondary: '#A7B6C2',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h5: { fontWeight: 400 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          // It's crucial that your Navbar's background in Navbar.tsx
          // is robust enough (e.g., using rgba with a low alpha, or backdrop-filter)
          // to properly blend with or overlay the page backgrounds.
          // This ensures the Navbar looks consistent.
          // The background property here for MuiAppBar applies to the AppBar's root element
          // by default, but your Navbar.tsx has its own `background` style, which takes precedence.
          background: 'transparent', // Ensure this is also transparent to avoid conflicts
          borderBottom: '1px solid rgba(72,175,240,0.18)', // Keep the border
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)', // Keep the shadow
          backdropFilter: 'blur(24px)', // Keep the blur
          WebkitBackdropFilter: 'blur(24px)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
          textTransform: 'none',
          transition: 'background 0.3s, color 0.3s, box-shadow 0.3s',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/subcompany-a" element={<SubCompanyAPage />} />
            <Route path="/subcompany-b" element={<SubCompanyBPage />} />
            <Route path="/subcompany-c" element={<SubCompanyCPage />} />
            <Route path="/subcompany-d" element={<SubCompanyDPage />} />
            <Route path="/subcompany-e" element={<SubCompanyEPage />} />
            <Route path="/subcompany-f" element={<SubCompanyFPage />} />

            {/* --- NEW ROUTES FOR HELIX JOURNALS, HELIX E-SCHROLL, AND DIGIGRO --- */}
            <Route path="/helix-journals" element={<HelixJournalsPage />} />
            <Route path="/helix-e-scroll" element={<HelixEScrollPage />} />
            <Route path="/digigro" element={<DigigroPage />} />
            {/* --- END NEW ROUTES --- */}
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;