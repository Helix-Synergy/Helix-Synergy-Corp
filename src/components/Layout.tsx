import React, { useEffect, useRef } from 'react'; // Import useRef and useEffect
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import Footer from './Footer';
import { gsap } from 'gsap'; // Import gsap

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const animatedBackgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure the animated background element is available
    if (animatedBackgroundRef.current) {
      gsap.to(animatedBackgroundRef.current, {
        backgroundPosition: "200% 200%", // Animate background position for a moving effect
        duration: 40, // Slower animation for smooth, subtle movement
        ease: "none", // Linear ease for continuous motion
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Go back and forth for a seamless loop
      });
    }

    // Cleanup function for GSAP animation
    return () => {
      if (animatedBackgroundRef.current) {
        gsap.killTweensOf(animatedBackgroundRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <Box 
      ref={animatedBackgroundRef} // Assign ref to the main Box
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        // --- UPDATED: Stunning, multi-layered gradient background ---
        background: `
          linear-gradient(120deg, #1A1A1A 0%, #000000 100%), /* Dark linear base for depth */
          radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.8) 0%, transparent 60%), /* Brighter White */
          radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.8) 0%, transparent 60%),   /* Brighter Magenta */
          radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.8) 0%, transparent 60%),   /* Brighter Cyan */
          radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.8) 0%, transparent 60%)    /* Brighter Yellow */
        `,
        backgroundSize: '200% 200%', // Make background larger than element for movement
        backgroundPosition: '0% 0%', // Initial position for animation
        backgroundRepeat: 'no-repeat', // Prevent repeating of gradients
        backgroundAttachment: 'fixed', // Keep background fixed relative to viewport
        // -------------------------------------------------------------------
      }}
    >
      <Navbar />
      <Box component="main" sx={{ flex: 1, width: '100%', px: { xs: 1, sm: 3 }, py: 3 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
