// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
// import HexagonIcon from '@mui/icons-material/Hexagon';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/logo/my-logo.png';

// const LogoImg = styled('img')({
//   height: 40,
//   width: 40,
//   marginRight: 16,
//   borderRadius: '8px',
//   background: 'rgba(255,255,255,0.04)',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
// });

// const NavButton = styled(Button)(({ theme }) => ({
//   color: '#F5F8FA',
//   fontWeight: 500,
//   fontSize: '1rem',
//   borderRadius: 6,
//   marginLeft: theme.spacing(2),
//   textTransform: 'none',
//   backgroundImage: 'linear-gradient(to left,rgba(0, 255, 204, 0.37) 0%,rgba(0, 0, 0, 0.24) 51%,rgba(255, 255, 255, 0.4) 100%)',
//   backgroundSize: '200% auto',
//   transition: '0.5s',
//   '&:hover': {
//     backgroundPosition: 'right center',
//     color: '#fff',
//     textDecoration: 'none',
//   },
// }));

// const Navbar: React.FC = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   return (
//     <AppBar position="sticky" elevation={0} sx={{
//       background: 'linear-gradient(120deg, rgba(45, 48, 17, 0.85) 60%, rgba(21, 237, 1, 0.31) 100%)',
//       borderBottom: '1.5px solid rgba(72,175,240,0.18)',
//       boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
//       top: 0,
//       zIndex: 1100,
//       backdropFilter: 'blur(24px)',
//       WebkitBackdropFilter: 'blur(24px)',
//       transition: 'background 0.3s',
//     }}>
//       <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'space-between' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <LogoImg src={logo} alt="Helix Synergy Corp Logo" />
//           <Typography variant="h6" sx={{ color: '#F5F8FA', fontWeight: 700, letterSpacing: 1 }}>
//             Helix Synergy Corp
//           </Typography>
//         </Box>
//         <Box>
//           <NavButton onClick={() => navigate('/')}>Home</NavButton>
//           <NavButton onClick={() => navigate('/contact')}>Contact</NavButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar; 



// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/material/styles';
// // import HexagonIcon from '@mui/icons-material/Hexagon'; // Not used, can be removed if not needed
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/logo/my-logo.png';

// // New imports for responsiveness
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

// const LogoImg = styled('img')({
//   height: 40,
//   width: 40,
//   marginRight: 16,
//   borderRadius: '8px',
//   background: 'rgba(255,255,255,0.04)',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
// });

// const NavButton = styled(Button)(({ theme }) => ({
//   color: '#F5F8FA',
//   fontWeight: 500,
//   fontSize: '1rem',
//   borderRadius: 6,
//   marginLeft: theme.spacing(2),
//   textTransform: 'none',
//   // Keep the gradient for desktop buttons
//   backgroundImage: 'linear-gradient(to left,rgba(0, 255, 204, 0.37) 0%,rgba(0, 0, 0, 0.24) 51%,rgba(255, 255, 255, 0.4) 100%)',
//   backgroundSize: '200% auto',
//   transition: '0.5s',
//   '&:hover': {
//     backgroundPosition: 'right center',
//     color: '#fff',
//     textDecoration: 'none',
//   },
// }));

// // Define navigation items for easy mapping
// const navItems = [
//   { label: 'Home', path: '/' },
//   { label: 'Contact', path: '/contact' },
//   // Add more navigation items here as your application grows
// ];

// const Navbar: React.FC = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();
//   // Use 'md' breakpoint to make the menu collapse on tablets and smaller screens
//   const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleNavLinkClick = (path: string) => {
//     navigate(path);
//     setDrawerOpen(false); // Close drawer after navigating
//   };

//   // Content for the mobile drawer
//   const drawer = (
//     <Box
//       onClick={handleDrawerToggle} // Closes the drawer if clicked anywhere inside it
//       sx={{ 
//         textAlign: 'center', 
//         width: 250, // Fixed width for the drawer
//         background: 'linear-gradient(120deg, rgba(45, 48, 17, 0.95) 60%, rgba(21, 237, 1, 0.41) 100%)', // Slightly stronger background for drawer
//         height: '100%', // Ensure drawer takes full height
//       }}
//     >
//       <Toolbar sx={{ justifyContent: 'center', minHeight: 64 }}>
//         <Typography variant="h6" sx={{ color: '#F5F8FA', fontWeight: 700 }}>
//           Menu
//         </Typography>
//       </Toolbar>
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.label} disablePadding>
//             <ListItemButton 
//               onClick={() => handleNavLinkClick(item.path)}
//               sx={{ 
//                 textAlign: 'center', 
//                 color: '#F5F8FA', 
//                 fontWeight: 500,
//                 fontSize: '1.1rem',
//                 padding: '12px 0', // Adjust padding for better touch area
//                 '&:hover': {
//                   background: 'rgba(255,255,255,0.08)', // Subtle hover for drawer items
//                   color: theme.palette.primary.light, // Change text color on hover
//                 },
//               }}
//             >
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar position="sticky" elevation={0} sx={{
//       background: 'linear-gradient(120deg, rgba(45, 48, 17, 0.85) 60%, rgba(21, 237, 1, 0.31) 100%)',
//       borderBottom: '1.5px solid rgba(72,175,240,0.18)',
//       boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
//       top: 0,
//       zIndex: 1100, // Ensure it's above other content
//       backdropFilter: 'blur(24px)',
//       WebkitBackdropFilter: 'blur(24px)',
//       transition: 'background 0.3s',
//     }}>
//       <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'space-between' }}>
//         {/* Logo and Company Name */}
//         <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
//           <LogoImg src={logo} alt="Helix Synergy Corp Logo" />
//           <Typography variant="h6" sx={{ color: '#F5F8FA', fontWeight: 700, letterSpacing: 1 }}>
//             Helix Synergy Corp
//           </Typography>
//         </Box>
        
//         {/* Navigation Buttons (Desktop vs. Mobile) */}
//         {isMobile ? (
//           <IconButton
//             color="inherit" // Inherits color from AppBar
//             aria-label="open drawer"
//             edge="end" // Pushes the icon to the end of the toolbar
//             onClick={handleDrawerToggle}
//             sx={{ mr: 0, display: { md: 'none' }, color: '#F5F8FA' }} // Only show on mobile
//           >
//             <MenuIcon />
//           </IconButton>
//         ) : (
//           <Box sx={{ display: { xs: 'none', md: 'block' } }}> {/* Only show on desktop */}
//             {navItems.map((item) => (
//               <NavButton key={item.label} onClick={() => handleNavLinkClick(item.path)}>
//                 {item.label}
//               </NavButton>
//             ))}
//           </Box>
//         )}
//       </Toolbar>

//       {/* Mobile Drawer */}
//       <nav>
//         <Drawer
//           anchor="right" // Drawer slides in from the right
//           open={drawerOpen}
//           onClose={handleDrawerToggle} // Closes when clicking outside or pressing Esc
//           ModalProps={{
//             keepMounted: true, // Optimizes for better mobile performance
//           }}
//           sx={{
//             display: { xs: 'block', md: 'none' }, // Only display drawer on mobile breakpoints
//             '& .MuiDrawer-paper': { 
//               boxSizing: 'border-box', 
//               width: 250, // Set the width of the drawer's paper
//               background: 'transparent', // Make drawer background transparent to allow inner Box to handle styling
//               borderLeft: '1.5px solid rgba(72,175,240,0.18)', // Add a border to the drawer edge
//               boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)', // Add shadow to the drawer
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </AppBar>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
// import HexagonIcon from '@mui/icons-material/Hexagon'; // Not used, can be removed if not needed
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo/my-logo.png';

// New imports for responsiveness
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const LogoImg = styled('img')({
  height: 40,
  width: 'auto',
  marginRight: 16,
  borderRadius: '8px',
  background: 'rgba(255, 255, 255, 0)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0)',
});

const NavButton = styled(Button)(({ theme }) => ({
  color: '#F5F8FA',
  fontWeight: 500,
  fontSize: '1rem',
  borderRadius: 6,
  marginLeft: theme.spacing(2),
  textTransform: 'none',
  // Keep the gradient for desktop buttons
  backgroundImage: 'linear-gradient(to left,rgba(0, 255, 204, 0.37) 0%,rgba(0, 0, 0, 0.24) 51%,rgba(255, 255, 255, 0.4) 100%)',
  backgroundSize: '200% auto',
  transition: '0.5s',
  '&:hover': {
    backgroundPosition: 'right center',
    color: '#fff',
    textDecoration: 'none',
  },
}));

// Define navigation items for easy mapping
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Contact', path: '/contact' },
  // Add more navigation items here as your application grows
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  // Use 'md' breakpoint to make the menu collapse on tablets and smaller screens
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavLinkClick = (path: string) => {
    navigate(path);
    setDrawerOpen(false); // Close drawer after navigating
  };

  // Content for the mobile drawer
  const drawer = (
    <Box
      onClick={handleDrawerToggle} // Closes the drawer if clicked anywhere inside it
      sx={{ 
        textAlign: 'center', 
        width: 250, // Fixed width for the drawer
        // NOTE: The drawer background is kept separate from AppBar for distinct styling
        background: 'linear-gradient(120deg, rgba(45, 48, 17, 0.95) 60%, rgba(21, 237, 1, 0.41) 100%)', // Slightly stronger background for drawer
        height: '100%', // Ensure drawer takes full height
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', minHeight: 64 }}>
        <Typography variant="h6" sx={{ color: '#F5F8FA', fontWeight: 700 }}>
          Menu
        </Typography>
      </Toolbar>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton 
              onClick={() => handleNavLinkClick(item.path)}
              sx={{ 
                textAlign: 'center', 
                color: '#F5F8FA', 
                fontWeight: 500,
                fontSize: '1.1rem',
                padding: '12px 0', // Adjust padding for better touch area
                '&:hover': {
                  background: 'rgba(255,255,255,0.08)', // Subtle hover for drawer items
                  color: theme.palette.primary.light, // Change text color on hover
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={0} sx={{
      // --- UPDATED: Light transparent background ---
      background: 'rgba(255, 255, 255, 0.03)', // Light transparent background
      // ---------------------------------------------
      borderBottom: '1.5px solid rgba(72, 176, 240, 0)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0)',
      top: 0,
      zIndex: 1100, // Ensure it's above other content
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      transition: 'background 0.3s',
    }}>
      <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo and Company Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <LogoImg src={logo} alt="Helix Synergy Corp Logo" />
          <Typography variant="h6" sx={{ color: '#F5F8FA', fontWeight: 700, letterSpacing: 1 }}>
            Helix Synergy Corp
          </Typography>
        </Box>
        
        {/* Navigation Buttons (Desktop vs. Mobile) */}
        {isMobile ? (
          <IconButton
            color="inherit" // Inherits color from AppBar
            aria-label="open drawer"
            edge="end" // Pushes the icon to the end of the toolbar
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { md: 'none' }, color: '#F5F8FA' }} // Only show on mobile
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: { xs: 'none', md: 'block' } }}> {/* Only show on desktop */}
            {navItems.map((item) => (
              <NavButton key={item.label} onClick={() => handleNavLinkClick(item.path)}>
                {item.label}
              </NavButton>
            ))}
          </Box>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          anchor="right" // Drawer slides in from the right
          open={drawerOpen}
          onClose={handleDrawerToggle} // Closes when clicking outside or pressing Esc
          ModalProps={{
            keepMounted: true, // Optimizes for better mobile performance
          }}
          sx={{
            display: { xs: 'block', md: 'none' }, // Only display drawer on mobile breakpoints
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 250, // Set the width of the drawer's paper
              background: 'transparent', // Make drawer background transparent to allow inner Box to handle styling
              borderLeft: '1.5px solid rgba(72,175,240,0.18)', // Add a border to the drawer edge
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)', // Add shadow to the drawer
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </AppBar>
  );
};

export default Navbar;