// import React, { useEffect, useRef } from 'react'; // Import useRef and useEffect
// import Box from '@mui/material/Box';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { gsap } from 'gsap'; // Import gsap

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const animatedBackgroundRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // Ensure the animated background element is available
//     if (animatedBackgroundRef.current) {
//       gsap.to(animatedBackgroundRef.current, {
//         // backgroundPosition: "200% 200%", // Animate background position for a moving effect
//         duration: 40, // Slower animation for smooth, subtle movement
//         ease: "none", // Linear ease for continuous motion
//         repeat: -1, // Repeat indefinitely
//         yoyo: true, // Go back and forth for a seamless loop
//       });
//     }

//     // Cleanup function for GSAP animation
//     return () => {
//       if (animatedBackgroundRef.current) {
//         gsap.killTweensOf(animatedBackgroundRef.current);
//       }
//     };
//   }, []); // Empty dependency array ensures this runs once on mount

//   return (
//     <Box 
//       ref={animatedBackgroundRef} // Assign ref to the main Box
//       sx={{ 
//         minHeight: '100vh', 
//         display: 'flex', 
//         flexDirection: 'column',
//         // --- UPDATED: Stunning, multi-layered gradient background ---
//         background: `
//           linear-gradient(120deg, #1A1A1A 0%, #000000 100%), /* Dark linear base for depth */
//           radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.8) 0%, transparent 60%), /* Brighter White */
//           radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.8) 0%, transparent 60%),   /* Brighter Magenta */
//           radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.8) 0%, transparent 60%),   /* Brighter Cyan */
//           radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.8) 0%, transparent 60%)    /* Brighter Yellow */
//         `,
//         backgroundSize: '200% 200%', // Make background larger than element for movement
//         backgroundPosition: '0% 0%', // Initial position for animation
//         backgroundRepeat: 'no-repeat', // Prevent repeating of gradients
//         backgroundAttachment: 'fixed', // Keep background fixed relative to viewport
//         // -------------------------------------------------------------------
//       }}
//     >
//       <Navbar />
//       <Box component="main" sx={{ flex: 1, width: '100%', px: { xs: 1, sm: 3 }, py: 3 }}>
//         {children}
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default Layout;






// import React, { useRef } from 'react'; // Removed useEffect as it's no longer used
// import Box from '@mui/material/Box';
// import Navbar from './Navbar';
// import Footer from './Footer';
// // Removed gsap import as it's no longer used for this specific animation

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   // animatedBackgroundRef is no longer needed for GSAP animation,
//   // but kept here just in case it was intended for other DOM interactions
//   // that are not part of the animation you want to remove.
//   // If it's *only* for the animation, you can remove this ref as well.
//   const animatedBackgroundRef = useRef<HTMLDivElement | null>(null);

//   // The useEffect hook and all its content have been removed.

//   return (
//     <Box
//       ref={animatedBackgroundRef} // Assign ref to the main Box (can be removed if no other use)
//       sx={{
//         width: '100vw', // Ensure it takes full viewport width
//         minHeight: '100vh', // Ensure it takes full viewport height
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'relative',
//         background: `
//           linear-gradient(120deg, #1A1A1A 0%, #000000 100%), /* Dark linear base for depth */
//           radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.15) 0%, transparent 60%), /* Brighter White */
//           radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.15) 0%, transparent 60%),  /* Brighter Magenta */
//           radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.15) 0%, transparent 60%),  /* Brighter Cyan */
//           radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.15) 0%, transparent 60%)   /* Brighter Yellow */
//         `, // Commented out by request
//         backgroundSize: '200% 200%', // Commented out by request
//         backgroundPosition: '0% 0%', // Commented out by request
//         backgroundRepeat: 'no-repeat', // Commented out by request
//         backgroundAttachment: 'fixed', // Commented out by request
//       }}
//     >
//       <Navbar />
//       <Box component="main" sx={{ flex: 1, width: '80%', px: { xs: 1, sm: 3 }, py: 3 }}>
//         {children}
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default Layout;






import React from 'react';
import Box from '@mui/material/Box';
import Navbar from './Navbar'; // Assuming Navbar component is in this path
import Footer from './Footer'; // Assuming Footer component is in this path

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: '100%', // Ensures the component takes 100% of the viewport width
        minHeight: '100vh', // Ensures the component takes at least 100% of the viewport height
        display: 'flex',
        flexDirection: 'column',
        // --- Darker Gradient Background ---
        // This gradient goes from a very dark grey/near-black on the left to a dark purple on the right.
        background: `linear-gradient(to right, #121212, #330033)`, 
        
        // Alternative darker gradient if the above isn't quite right:
        // background: `linear-gradient(to right, #0A0A0A, #2B002B)`, 
        
        backgroundSize: 'cover', // Ensures the gradient covers the entire area
        backgroundPosition: 'center center', // Centers the gradient within the box
        backgroundRepeat: 'no-repeat', // Prevents the gradient from tiling
        backgroundAttachment: 'fixed', // Keeps the background fixed relative to the viewport during scroll
      }}
    >
      <Navbar />
      {/* This Box wraps the main content and allows it to grow to fill available space */}
      <Box component="main" sx={{ flex: 1, width: '100%', px: { xs: 1, sm: 3 }, py: 3 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;






// import React, { useEffect, useRef } from 'react';
// import Box from '@mui/material/Box';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { gsap } from 'gsap';

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const animatedBackgroundRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // Ensure the animated background element is available
//     if (animatedBackgroundRef.current) {
//       gsap.to(animatedBackgroundRef.current, {
//         // backgroundPosition: "200% 200%", // Animate background position for a moving effect
//         duration: 40, // Slower animation for smooth, subtle movement
//         ease: "none", // Linear ease for continuous motion
//         repeat: -1, // Repeat indefinitely
//         yoyo: true, // Go back and forth for a seamless loop
//       });
//     }

//     // Cleanup function for GSAP animation
//     return () => {
//       if (animatedBackgroundRef.current) {
//         gsap.killTweensOf(animatedBackgroundRef.current);
//       }
//     };
//   }, []); // Empty dependency array ensures this runs once on mount

//   return (
//     <Box
//       ref={animatedBackgroundRef} // Assign ref to the main Box for animation
//       sx={{
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'relative',
//         // --- UPDATED: Applying the stunning, multi-layered gradient directly here ---
//         background: `
//           linear-gradient(120deg, #1A1A1A 0%, #000000 100%), /* Dark linear base for depth */
//           radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.15) 0%, transparent 60%), /* Brighter White */
//           radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.15) 0%, transparent 60%),  /* Brighter Magenta */
//           radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.15) 0%, transparent 60%),  /* Brighter Cyan */
//           radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.15) 0%, transparent 60%)   /* Brighter Yellow */
//         `,
//         backgroundSize: '200% 200%', // Make background larger than element for movement
//         backgroundPosition: '0% 0%', // Initial position for animation
//         backgroundRepeat: 'no-repeat', // Prevent repeating of gradients
//         backgroundAttachment: 'fixed', // Keep background fixed relative to viewport
//         // -------------------------------------------------------------------
//       }}
//     >
//       <Navbar />
//       <Box
//         component="main"
//         sx={{
//           flex: 1,
//           width: '100%',
//           px: { xs: 1, sm: 3 },
//           py: 3,
//           position: 'relative',
//           // Ensure the main content area is transparent so the Layout's background shows through
//           background: 'transparent',
//         }}
//       >
//         {children}
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default Layout;
