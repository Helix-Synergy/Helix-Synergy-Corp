// // import React, { useEffect, useRef } from 'react';
// // import { Box, Typography, Button, useTheme } from '@mui/material';
// // import { styled } from '@mui/material/styles';
// // import { Link as RouterLink } from 'react-router-dom';
// // import GitHubIcon from '@mui/icons-material/GitHub';
// // import DescriptionIcon from '@mui/icons-material/Description';
// // import Link from '@mui/material/Link';
// // import logo from '../assets/logo/my-logo.png';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // // Register ScrollTrigger plugin
// // gsap.registerPlugin(ScrollTrigger);

// // const HERO_BG = '#293742';
// // const HERO_TEXT = '#F5F8FA';
// // const HEX_RADIUS = 160; // ENLARGED: Increased radius for the sub-company circle
// // const SUB_COMPANIES = [
// //   { label: 'Sub-Company A', to: '/subcompany-a' },
// //   { label: 'Sub-Company B', to: '/subcompany-b' },
// //   { label: 'Sub-Company C', to: '/subcompany-c' },
// //   { label: 'Sub-Company D', to: '/subcompany-d' },
// //   { label: 'Sub-Company E', to: '/subcompany-e' },
// //   { label: 'Sub-Company F', to: '/subcompany-f' },
// // ];

// // // Styled component for the blur background *behind* the logo
// // const StyledBlurBackground = styled(Box)(() => ({
// //   position: 'absolute',
// //   width: 180, // ENLARGED: Slightly larger than the new logo size
// //   height: 180, // ENLARGED: Slightly larger than the new logo size
// //   borderRadius: '20%', // Match logo's border-radius style
// //   // REMOVED BLUE COLOR: Changed to a neutral, semi-transparent grey
// //   background: 'rgba(180, 180, 180, 0.4)',
// //   boxShadow: '0 4px 30px rgba(0,0,0,0.6)',
// //   zIndex: 1, // Ensure it's behind the logo but above lines
// //   left: '50%',
// //   top: '50%',
// //   transform: 'translate(-50%, -50%)',
// //   opacity: 1, // Starts opaque, will fade/unblur on scroll
// //   filter: 'blur(10px)', // Initial blur strength
// // }));

// // const CenterLogo = styled('img')(() => ({
// //   // ENLARGED: Increased logo size
// //   width: 150,
// //   height: 150,
// //   borderRadius: '20%',
// //   boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
// //   // Removed background color, rely on the image and StyledBlurBackground
// //   zIndex: 2, // Ensure logo is above the blur background
// //   position: 'absolute',
// //   left: '50%',
// //   top: '50%',
// //   transform: 'translate(-50%, -50%) rotate(0deg)', // Base transform for GSAP to control rotation, no initial blur here
// // }));

// // const PeripheralDiv = styled(Box)(({ theme }) => ({
// //   position: 'absolute',
// //   width: 80, // Keeping sub-company link size consistent for now
// //   height: 80,
// //   borderRadius: 12,
// //   background: 'transparent',
// //   color: '#F5F8FA',
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   fontWeight: 600,
// //   fontSize: '1.1rem',
// //   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
// //   cursor: 'pointer',
// //   border: '2px solid #394B59',
// //   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
// //   zIndex: 2,
// //   // Initial opacity set here, will be overridden by GSAP for animation
// //   opacity: 0,
// //   '&:hover': {
// //     background: '#30404D',
// //     color: '#48AFF0',
// //     border: '2px solid #48AFF0',
// //     boxShadow: '0 4px 24px #106BA3',
// //   },
// // }));

// // const HeroContainer = styled(Box)(() => ({
// //   position: 'relative',
// //   minHeight: 480,
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   background: HERO_BG,
// //   flexDirection: 'column',
// //   marginBottom: 32,
// // }));

// // const LinesSVG = styled('svg')({
// //   position: 'absolute',
// //   left: 0,
// //   top: 0,
// //   width: '100%',
// //   height: '100%',
// //   zIndex: 1,
// //   pointerEvents: 'none',
// // });

// // const HomePage: React.FC = () => {
// //   const theme = useTheme();
// //   const heroRef = useRef<HTMLDivElement | null>(null);
// //   const logoRef = useRef<HTMLImageElement | null>(null);
// //   const blurBgRef = useRef<HTMLDivElement | null>(null);
// //   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);

// //   // Refs to manage the continuous rotation tweens
// //   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
// //   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);

// //   // UPDATED: Center coordinates based on new Box size (700x520)
// //   const center = { x: 350, y: 260 };
// //   const radius = HEX_RADIUS;
// //   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
// //   const positions = SUB_COMPANIES.map((_, i) => ({
// //     x: center.x + radius * Math.cos(i * angleStep - Math.PI / 2),
// //     y: center.y + radius * Math.sin(i * angleStep - Math.PI / 2),
// //   }));

// //   useEffect(() => {
// //     // --- Initial Continuous Logo Rotation ---
// //     // This tween runs immediately on mount.
// //     if (logoRef.current) {
// //       initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
// //         rotate: 360,
// //         duration: 15,
// //         ease: 'none',
// //         repeat: -1,
// //       });
// //     }

// //     // --- Main Scroll-Triggered Animation Timeline ---
// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: heroRef.current,
// //         start: "top top",
// //         end: "+=2500", // Adjust this value to control scroll duration
// //         scrub: 1,
// //         pin: true,
// //         // markers: true, // Uncomment for debugging
// //         onEnter: () => {
// //           // Pause initial continuous rotation when scroll enters the pinned section
// //           if (initialLogoRotationTweenRef.current) {
// //             initialLogoRotationTweenRef.current.pause();
// //           }
// //         },
// //         onLeave: () => {
// //           // Start final continuous rotation when scroll leaves the pinned section
// //           if (finalLogoRotationTweenRef.current) {
// //             finalLogoRotationTweenRef.current.play();
// //           }
// //         },
// //         onEnterBack: () => {
// //           // Pause final continuous rotation when scrolling back into the pinned section
// //           if (finalLogoRotationTweenRef.current) {
// //             finalLogoRotationTweenRef.current.pause();
// //           }
// //         },
// //         onLeaveBack: () => {
// //           // Resume initial continuous rotation when scrolling back to top of the page
// //           if (initialLogoRotationTweenRef.current) {
// //             initialLogoRotationTweenRef.current.play();
// //           }
// //           // Also ensure final rotation is killed if it was playing
// //           if (finalLogoRotationTweenRef.current) {
// //             finalLogoRotationTweenRef.current.kill();
// //             finalLogoRotationTweenRef.current = null;
// //           }
// //         },
// //       },
// //     });

// //     // Animation for Logo: Return to static (0deg) position
// //     // (This part replaces the continuous rotation within the pinned section)
// //     tl.to(logoRef.current, {
// //       rotate: 0, // Animate to 0 degrees
// //       duration: 0.5, // Relative duration within the timeline
// //     }, 0); // Start at the very beginning of the timeline

// //     // Animation for Blur Background: Unblur and fade out
// //     if (blurBgRef.current) {
// //       tl.to(blurBgRef.current, {
// //         filter: 'blur(0px)',
// //         opacity: 0,
// //         duration: 0.5,
// //       }, 0); // Start at the very beginning of the timeline
// //     }

// //     // Animation for Sub-Company Links: Fade in and move up
// //     if (peripheralLinksContainerRef.current) {
// //       const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);
// //       tl.to(subCompanyElements, {
// //         opacity: 1,
// //         y: 0,
// //         stagger: 0.1,
// //         duration: 0.5,
// //         ease: 'power1.out',
// //       }, ">0.1"); // Start slightly after previous animations finish
// //     }

// //     // --- Final Continuous Logo Rotation (after all other animations complete) ---
// //     // This tween is created but paused initially. It's only played on onLeave of ScrollTrigger.
// //     if (logoRef.current) {
// //       finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
// //         rotate: 360,
// //         duration: 15,
// //         ease: 'none',
// //         repeat: -1,
// //       }).pause(); // Start paused
// //     }

// //     // Cleanup function
// //     return () => {
// //       tl.kill(); // Kill the ScrollTrigger timeline
// //       if (initialLogoRotationTweenRef.current) {
// //         initialLogoRotationTweenRef.current.kill(); // Kill initial rotation
// //       }
// //       if (finalLogoRotationTweenRef.current) {
// //         finalLogoRotationTweenRef.current.kill(); // Kill final rotation
// //       }
// //       ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up all ScrollTriggers
// //     };
// //   }, []); // Empty dependency array ensures this runs once on mount

// //   return (
// //     <Box>
// //       <HeroContainer ref={heroRef} sx={{ minHeight: { xs: 400, md: 520 } }}>
// //         {/* UPDATED: Main Box dimensions to accommodate larger elements */}
// //         <Box sx={{ width: 700, height: 520, position: 'relative', maxWidth: '100%' }}>
// //           {/* Styled Blur Background - positioned behind the logo */}
// //           <StyledBlurBackground ref={blurBgRef} />
// //           {/* Center Logo - now sharp, its background is handled by StyledBlurBackground */}
// //           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
// //           <LinesSVG width={700} height={520}> {/* UPDATED: SVG dimensions */}
// //             {positions.map((pos, i) => (
// //               <line
// //                 key={i}
// //                 x1={center.x}
// //                 y1={center.y}
// //                 x2={pos.x}
// //                 y2={pos.y}
// //                 stroke="#394B59"
// //                 strokeWidth={3}
// //                 strokeDasharray="8 6"
// //               />
// //             ))}
// //           </LinesSVG>
// //           {/* Container for peripheral links to easily select them with GSAP */}
// //           <Box ref={peripheralLinksContainerRef}>
// //             {positions.map((pos, i) => (
// //               <Link
// //                 key={i}
// //                 component={RouterLink}
// //                 to={SUB_COMPANIES[i].to}
// //                 sx={{
// //                   position: 'absolute',
// //                   width: 80,
// //                   height: 80,
// //                   borderRadius: 12,
// //                   background: '#202B33',
// //                   color: '#F5F8FA',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   fontWeight: 600,
// //                   fontSize: '1.1rem',
// //                   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
// //                   cursor: 'pointer',
// //                   border: '2px solid #394B59',
// //                   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
// //                   zIndex: 2,
// //                   left: pos.x - 40,
// //                   top: pos.y - 40,
// //                   textDecoration: 'none',
// //                   opacity: 0, // Initially hidden
// //                   transform: 'translateY(20px)', // Start slightly below current position
// //                   '&:hover': {
// //                     background: '#30404D',
// //                     color: '#48AFF0',
// //                     border: '2px solid #48AFF0',
// //                     boxShadow: '0 4px 24px #106BA3',
// //                   },
// //                 }}
// //               >
// //                 {SUB_COMPANIES[i].label}
// //               </Link>
// //             ))}
// //           </Box>
// //         </Box>
// //         <Typography variant="h2" sx={{ color: HERO_TEXT, fontWeight: 800, mt: 6, mb: 2, letterSpacing: 2, textShadow: '0 2px 12px #000' }}>
// //           Welcome to Helix Synergy Corp
// //         </Typography>
// //         <Typography variant="h5" sx={{ color: '#A7B6C2', mb: 4, fontWeight: 400, letterSpacing: 1 }}>
// //           Innovative Synergy Solutions for a Connected World
// //         </Typography>
// //         <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
// //           <Button
// //             variant="contained"
// //             color="primary"
// //             size="large"
// //             startIcon={<DescriptionIcon />}
// //             sx={{
// //               background: '#137CBD',
// //               color: '#F5F8FA',
// //               fontWeight: 700,
// //               borderRadius: 6,
// //               px: 4,
// //               boxShadow: '0 2px 8px rgb(241, 111, 12)',
// //               transition: 'background 0.3s, box-shadow 0.3s',
// //               '&:hover': {
// //                 background: '#106BA3',
// //                 boxShadow: '0 4px 16px rgb(153, 163, 16)',
// //               },
// //             }}
// //             href="#solutions"
// //           >
// //             Explore Solutions
// //           </Button>
// //           <Button
// //             variant="outlined"
// //             color="primary"
// //             size="large"
// //             startIcon={<GitHubIcon />}
// //             sx={{
// //               color: '#48AFF0',
// //               borderColor: '#48AFF0',
// //               fontWeight: 700,
// //               borderRadius: 6,
// //               px: 4,
// //               background: 'rgba(19,124,189,0.08)',
// //               transition: 'background 0.3s, border 0.3s, color 0.3s',
// //               '&:hover': {
// //                 background: '#30404D',
// //                 borderColor: '#106BA3',
// //                 color: '#106BA3',
// //               },
// //             }}
// //             href="#contact"
// //           >
// //             Contact Us
// //           </Button>
// //           <Button
// //             variant="outlined"
// //             color="primary"
// //             size="large"
// //             sx={{
// //               color: '#48AFF0',
// //               borderColor: '#48AFF0',
// //               fontWeight: 700,
// //               borderRadius: 6,
// //               px: 4,
// //               background: 'rgba(19,124,189,0.08)',
// //               transition: 'background 0.3s, border 0.3s, color 0.3s',
// //               '&:hover': {
// //                 background: '#30404D',
// //                 borderColor: '#106BA3',
// //                 color: '#106BA3',
// //               },
// //             }}
// //             href="#learn-more"
// //           >
// //             Learn More
// //           </Button>
// //         </Box>
// //       </HeroContainer>
// //     </Box>
// //   );
// // };

// // export default HomePage;


// //Another version of the home page ********************************************

// // import React, { useEffect, useRef } from 'react';
// // import { Box, Typography, Button, useTheme } from '@mui/material';
// // import { styled } from '@mui/material/styles';
// // import { Link as RouterLink } from 'react-router-dom';
// // import GitHubIcon from '@mui/icons-material/GitHub';
// // import DescriptionIcon from '@mui/icons-material/Description';
// // import Link from '@mui/material/Link';
// // import logo from '../assets/logo/my-logo.png';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // // Register ScrollTrigger plugin
// // gsap.registerPlugin(ScrollTrigger);

// // const HERO_BG = '#293742';
// // const HERO_TEXT = '#F5F8FA';
// // const HEX_RADIUS = 120;
// // const SUB_COMPANIES = [
// //   { label: 'Sub-Company A', to: '/subcompany-a' },
// //   { label: 'Sub-Company B', to: '/subcompany-b' },
// //   { label: 'Sub-Company C', to: '/subcompany-c' },
// //   { label: 'Sub-Company D', to: '/subcompany-d' },
// //   { label: 'Sub-Company E', to: '/subcompany-e' },
// //   { label: 'Sub-Company F', to: '/subcompany-f' },
// // ];

// // // Styled component for the blur background *behind* the logo
// // const StyledBlurBackground = styled(Box)(() => ({
// //   position: 'absolute',
// //   width: 140, // Slightly larger than the logo
// //   height: 140, // Slightly larger than the logo
// //   borderRadius: '20%', // Match logo's border-radius style
// //   background: 'linear-gradient(45deg, #106BA3, #48AFF0, #137CBD)', // A colorful gradient for the blur
// //   boxShadow: '0 4px 30px rgba(0,0,0,0.6)',
// //   zIndex: 1, // Ensure it's behind the logo but above lines
// //   left: '50%',
// //   top: '50%',
// //   transform: 'translate(-50%, -50%)',
// //   opacity: 1, // Starts opaque, will fade/unblur on scroll
// //   filter: 'blur(10px)', // Initial blur strength
// // }));

// // const CenterLogo = styled('img')(() => ({
// //   width: 110,
// //   height: 110,
// //   borderRadius: '20%',
// //   boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
// //   // Removed background color, rely on the image and StyledBlurBackground
// //   // background: '#232B33', // <-- REMOVED THIS LINE
// //   zIndex: 2, // Ensure logo is above the blur background
// //   position: 'absolute',
// //   left: '50%',
// //   top: '50%',
// //   transform: 'translate(-50%, -50%) rotate(0deg)', // Base transform for GSAP to control rotation, no initial blur here
// // }));

// // const PeripheralDiv = styled(Box)(({ theme }) => ({
// //   position: 'absolute',
// //   width: 80,
// //   height: 80,
// //   borderRadius: 12,
// //   background: 'transparent',
// //   color: '#F5F8FA',
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   fontWeight: 600,
// //   fontSize: '1.1rem',
// //   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
// //   cursor: 'pointer',
// //   border: '2px solid #394B59',
// //   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
// //   zIndex: 2,
// //   // Initial opacity set here, will be overridden by GSAP for animation
// //   opacity: 0,
// //   '&:hover': {
// //     background: '#30404D',
// //     color: '#48AFF0',
// //     border: '2px solid #48AFF0',
// //     boxShadow: '0 4px 24px #106BA3',
// //   },
// // }));

// // const HeroContainer = styled(Box)(() => ({
// //   position: 'relative',
// //   minHeight: 480,
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   background: HERO_BG,
// //   flexDirection: 'column',
// //   marginBottom: 32,
// // }));

// // const LinesSVG = styled('svg')({
// //   position: 'absolute',
// //   left: 0,
// //   top: 0,
// //   width: '100%',
// //   height: '100%',
// //   zIndex: 1,
// //   pointerEvents: 'none',
// // });

// // const HomePage: React.FC = () => {
// //   const theme = useTheme();
// //   // Specify type for heroRef
// //   const heroRef = useRef<HTMLDivElement | null>(null);
// //   // Specify type for logoRef
// //   const logoRef = useRef<HTMLImageElement | null>(null);
// //   // Specify type for blur background ref
// //   const blurBgRef = useRef<HTMLDivElement | null>(null);
// //   // Ref for the container holding all peripheral links
// //   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);

// //   const center = { x: 300, y: 220 };
// //   const radius = HEX_RADIUS;
// //   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
// //   const positions = SUB_COMPANIES.map((_, i) => ({
// //     x: center.x + radius * Math.cos(i * angleStep - Math.PI / 2),
// //     y: center.y + radius * Math.sin(i * angleStep - Math.PI / 2),
// //   }));

// //   useEffect(() => {
// //     // --- Phase 1: Continuous Logo Rotation (Always active) ---
// //     // This tween runs independently and is NOT controlled by ScrollTrigger.
// //     // It will continuously rotate the logo.
// //     let infiniteLogoRotationTween: gsap.core.Tween | null = null;
// //     if (logoRef.current) {
// //       infiniteLogoRotationTween = gsap.to(logoRef.current, {
// //         rotate: 360, // Rotate clockwise
// //         duration: 15, // Duration for one full rotation
// //         ease: 'none',
// //         repeat: -1, // Infinite repeat
// //       });
// //     }

// //     // --- Phase 2: Scroll-Triggered Animation Timeline ---
// //     // This timeline will control the blur background and sub-company links.
// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: heroRef.current,
// //         start: "top top", // When the top of the hero section hits the top of the viewport
// //         end: "+=2500", // Increased scroll duration for pinning. Adjust this value (in pixels)
// //                        // to control how long the animation takes while pinned.
// //         scrub: 1, // Smoothly links animation to scroll position
// //         pin: true, // Pins the hero section
// //         // Optionally add markers for debugging: markers: true,
// //       },
// //     });

// //     // Animation for the Blur Background: Unblur and fade out
// //     if (blurBgRef.current) {
// //       tl.to(blurBgRef.current, {
// //         filter: 'blur(0px)', // Remove blur from the background
// //         opacity: 0, // Fade out the blur background completely
// //         duration: 0.5, // Relative duration within the timeline
// //       }, 0); // Start this at the very beginning of the timeline (position 0)
// //     }

// //     // Animation for Sub-Company Links: Fade in and move up slightly
// //     // Get all the peripheral link elements using gsap.utils.toArray for robustness
// //     if (peripheralLinksContainerRef.current) {
// //       const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

// //       tl.to(subCompanyElements, {
// //         opacity: 1,
// //         y: 0, // Move to original Y position (from initial y: 20)
// //         stagger: 0.1, // Stagger the animation for each link (0.1 seconds between each link starting)
// //         duration: 0.5, // Relative duration for the whole stagger to complete
// //         ease: 'power1.out',
// //       }, 0.2); // Start this animation after 20% of the timeline's total duration (or just after the blur starts fading)
// //                // Adjust this value to fine-tune the delay between blur fade and sub-company appearance.
// //     }


// //     // Cleanup function: important for preventing memory leaks and re-running animations
// //     return () => {
// //       tl.kill(); // Kill the ScrollTrigger timeline
// //       if (infiniteLogoRotationTween) {
// //         infiniteLogoRotationTween.kill(); // Kill the continuous logo rotation
// //       }
// //       // Kill all ScrollTrigger instances to ensure a clean slate
// //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //     };
// //   }, []); // Empty dependency array ensures this runs once on mount

// //   return (
// //     <Box>
// //       <HeroContainer ref={heroRef} sx={{ minHeight: { xs: 400, md: 520 } }}>
// //         <Box sx={{ width: 600, height: 440, position: 'relative', maxWidth: '100%' }}>
// //           {/* Styled Blur Background - positioned behind the logo */}
// //           {/* <StyledBlurBackground ref={blurBgRef} /> */}
// //           {/* Center Logo - now sharp, its background is handled by StyledBlurBackground */}
// //           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
// //           <LinesSVG width={600} height={440}>
// //             {positions.map((pos, i) => (
// //               <line
// //                 key={i}
// //                 x1={center.x}
// //                 y1={center.y}
// //                 x2={pos.x}
// //                 y2={pos.y}
// //                 stroke="#394B59"
// //                 strokeWidth={3}
// //                 strokeDasharray="8 6"
// //               />
// //             ))}
// //           </LinesSVG>
// //           {/* Container for peripheral links to easily select them with GSAP */}
// //           <Box ref={peripheralLinksContainerRef}>
// //             {positions.map((pos, i) => (
// //               // MUI Link component correctly forwards the ref to its underlying DOM element
// //               <Link
// //                 key={i}
// //                 component={RouterLink}
// //                 to={SUB_COMPANIES[i].to}
// //                 sx={{
// //                   position: 'absolute',
// //                   width: 80,
// //                   height: 80,
// //                   borderRadius: 12, // Changed from 2 to 12 to match PeripheralDiv better
// //                   background: '#202B33',
// //                   color: '#F5F8FA',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   fontWeight: 600,
// //                   fontSize: '1.1rem',
// //                   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
// //                   cursor: 'pointer',
// //                   border: '2px solid #394B59',
// //                   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
// //                   zIndex: 2, // Ensure links are above SVG lines and blur background
// //                   left: pos.x - 40,
// //                   top: pos.y - 40,
// //                   textDecoration: 'none',
// //                   // Initial state for animation - they start invisible and slightly offset
// //                   opacity: 0, // Initially hidden
// //                   transform: 'translateY(20px)', // Start slightly below their final position
// //                   '&:hover': {
// //                     background: '#30404D',
// //                     color: '#48AFF0',
// //                     border: '2px solid #48AFF0',
// //                     boxShadow: '0 4px 24px #106BA3',
// //                   },
// //                 }}
// //               >
// //                 {SUB_COMPANIES[i].label}
// //               </Link>
// //             ))}
// //           </Box>
// //         </Box>
// //         <Typography variant="h2" sx={{ color: HERO_TEXT, fontWeight: 800, mt: 6, mb: 2, letterSpacing: 2, textShadow: '0 2px 12px #000' }}>
// //           Welcome to Helix Synergy Corp
// //         </Typography>
// //         <Typography variant="h5" sx={{ color: '#A7B6C2', mb: 4, fontWeight: 400, letterSpacing: 1 }}>
// //           Innovative Synergy Solutions for a Connected World
// //         </Typography>
// //         <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
// //           <Button
// //             variant="contained"
// //             color="primary"
// //             size="large"
// //             startIcon={<DescriptionIcon />}
// //             sx={{
// //               background: '#137CBD',
// //               color: '#F5F8FA',
// //               fontWeight: 700,
// //               borderRadius: 6,
// //               px: 4,
// //               boxShadow: '0 2px 8px rgb(241, 111, 12)',
// //               transition: 'background 0.3s, box-shadow 0.3s',
// //               '&:hover': {
// //                 background: '#106BA3',
// //                 boxShadow: '0 4px 16px rgb(153, 163, 16)',
// //               },
// //             }}
// //             href="#solutions"
// //           >
// //             Explore Solutions
// //           </Button>
// //           <Button
// //             variant="outlined"
// //             color="primary"
// //             size="large"
// //             startIcon={<GitHubIcon />}
// //             sx={{
// //               color: '#48AFF0',
// //               borderColor: '#48AFF0',
// //               fontWeight: 700,
// //               borderRadius: 6,
// //               px: 4,
// //               background: 'rgba(19,124,189,0.08)',
// //               transition: 'background 0.3s, border 0.3s, color 0.3s',
// //               '&:hover': {
// //                 background: '#30404D',
// //                 borderColor: '#106BA3',
// //                 color: '#106BA3',
// //               },
// //             }}
// //             href="#contact"
// //           >
// //             Contact Us
// //           </Button>
// //           <Button
// //             variant="outlined"
// //             color="primary"
// //             size="large"
// //             sx={{
// //               color: '#48AFF0',
// //               borderColor: '#48AFF0',
// //               fontWeight: 700,
// //               borderRadius: 6,
// //               px: 4,
// //               background: 'rgba(19,124,189,0.08)',
// //               transition: 'background 0.3s, border 0.3s, color 0.3s',
// //               '&:hover': {
// //                 background: '#30404D',
// //                 borderColor: '#106BA3',
// //                 color: '#106BA3',
// //               },
// //             }}
// //             href="#learn-more"
// //           >
// //             Learn More
// //           </Button>
// //         </Box>
// //       </HeroContainer>
// //     </Box>
// //   );
// // };

// // export default HomePage;




// // import React, { useEffect, useRef } from 'react';
// // import { Box, Typography, Button, useTheme } from '@mui/material';
// // import { styled } from '@mui/material/styles';
// // import { Link as RouterLink } from 'react-router-dom';
// // import GitHubIcon from '@mui/icons-material/GitHub';
// // import DescriptionIcon from '@mui/icons-material/Description';
// // import Link from '@mui/material/Link';
// // import logo from '../assets/logo/my-logo.png';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // // Register ScrollTrigger plugin
// // gsap.registerPlugin(ScrollTrigger);

// // const HERO_BG = '#293742';
// // const HERO_TEXT = '#F5F8FA';
// // const HEX_RADIUS = 160; // ENLARGED: Increased radius for the sub-company circle
// // const SUB_COMPANIES = [
// //   { label: 'Sub-Company A', to: '/subcompany-a' },
// //   { label: 'Sub-Company B', to: '/subcompany-b' },
// //   { label: 'Sub-Company C', to: '/subcompany-c' },
// //   { label: 'Sub-Company D', to: '/subcompany-d' },
// //   { label: 'Sub-Company E', to: '/subcompany-e' },
// //   { label: 'Sub-Company F', to: '/subcompany-f' },
// // ];

// // // Styled component for the blur background *behind* the logo
// // const StyledBlurBackground = styled(Box)(() => ({
// //   position: 'absolute',
// //   width: 180, // ENLARGED: Slightly larger than the new logo size
// //   height: 180, // ENLARGED: Slightly larger than the new logo size
// //   borderRadius: '20%', // Match logo's border-radius style
// //   // REMOVED BLUE COLOR: Changed to a neutral, semi-transparent grey
// //   background: 'rgba(180, 180, 180, 0.4)',
// //   boxShadow: '0 4px 30px rgba(0,0,0,0.6)',
// //   zIndex: 1, // Ensure it's behind the logo but above lines
// //   left: '50%',
// //   top: '50%',
// //   transform: 'translate(-50%, -50%)',
// //   opacity: 1, // Starts opaque, will fade/unblur on scroll
// //   filter: 'blur(10px)', // Initial blur strength
// // }));

// // const CenterLogo = styled('img')(() => ({
// //   // ENLARGED: Increased logo size
// //   width: 150,
// //   height: 150,
// //   borderRadius: '20%',
// //   // boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
// //   // Removed background color, rely on the image and StyledBlurBackground
// //   zIndex: 2, // Ensure logo is above the blur background
// //   position: 'absolute',
// //   left: '50%',
// //   top: '50%',
// //   transform: 'translate(-50%, -50%) rotate(0deg)', // Base transform for GSAP to control rotation, no initial blur here
// // }));

// // const PeripheralDiv = styled(Box)(({ theme }) => ({
// //   position: 'absolute',
// //   width: 80, // Keeping sub-company link size consistent for now
// //   height: 80,
// //   borderRadius: 12,
// //   background: 'transparent',
// //   color: '#F5F8FA',
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   fontWeight: 600,
// //   fontSize: '1.1rem',
// //   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
// //   cursor: 'pointer',
// //   border: '2px solid #394B59',
// //   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
// //   zIndex: 2,
// //   // Initial opacity set here, will be overridden by GSAP for animation
// //   opacity: 0,
// //   '&:hover': {
// //     background: '#30404D',
// //     color: '#48AFF0',
// //     border: '2px solid #48AFF0',
// //     boxShadow: '0 4px 24px #106BA3',
// //   },
// // }));

// // const HeroContainer = styled(Box)(() => ({
// //   position: 'relative',
// //   minHeight: 480,
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   background: HERO_BG,
// //   flexDirection: 'column',
// //   marginBottom: 32,
// // }));

// // const LinesSVG = styled('svg')({
// //   position: 'absolute',
// //   left: 0,
// //   top: 0,
// //   width: '100%',
// //   height: '100%',
// //   zIndex: 1,
// //   pointerEvents: 'none',
// // });

// // const HomePage: React.FC = () => {
// //   const theme = useTheme();
// //   const heroRef = useRef<HTMLDivElement | null>(null);
// //   const logoRef = useRef<HTMLImageElement | null>(null);
// //   const blurBgRef = useRef<HTMLDivElement | null>(null);
// //   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);

// //   // Refs to manage the continuous rotation tweens
// //   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
// //   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);

// //   // UPDATED: Center coordinates based on new Box size (700x520)
// //   const center = { x: 350, y: 260 };
// //   const radius = HEX_RADIUS;
// //   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
// //   const positions = SUB_COMPANIES.map((_, i) => ({
// //     x: center.x + radius * Math.cos(i * angleStep - Math.PI / 2),
// //     y: center.y + radius * Math.sin(i * angleStep - Math.PI / 2),
// //   }));

// //   useEffect(() => {
// //     // --- CRITICAL CLEANUP FOR REACT SPAs ---
// //     // Kill all existing ScrollTrigger instances before creating new ones.
// //     // This prevents conflicts when the component re-mounts.
// //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //     // Also clear the global GSAP timeline to ensure no lingering tweens
// //     gsap.globalTimeline.clear();
// //     // Kill the rotation tweens explicitly if they somehow persist
// //     if (initialLogoRotationTweenRef.current) {
// //       initialLogoRotationTweenRef.current.kill();
// //       initialLogoRotationTweenRef.current = null;
// //     }
// //     if (finalLogoRotationTweenRef.current) {
// //       finalLogoRotationTweenRef.current.kill();
// //       finalLogoRotationTweenRef.current = null;
// //     }

// //     // Ensure all referenced DOM elements are available before setting up animations
// //     if (!heroRef.current || !logoRef.current || !blurBgRef.current || !peripheralLinksContainerRef.current) {
// //         return; // Exit if elements are not yet mounted
// //     }

// //     // --- Initial Continuous Logo Rotation ---
// //     // This tween runs immediately on mount.
// //     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
// //       rotate: 360,
// //       duration: 15,
// //       ease: 'none',
// //       repeat: -1,
// //     });

// //     // Get all the peripheral link elements using gsap.utils.toArray for robustness
// //     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

// //     // --- Main Scroll-Triggered Animation Timeline ---
// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: heroRef.current,
// //         start: "top top",
// //         end: "+=2500", // Adjust this value to control scroll duration
// //         scrub: 1,
// //         pin: true,
// //         // markers: true, // Uncomment for debugging during development
// //         onEnter: () => {
// //           // Pause initial continuous rotation when scroll enters the pinned section
// //           if (initialLogoRotationTweenRef.current) {
// //             initialLogoRotationTweenRef.current.pause();
// //           }
// //         },
// //         onLeave: () => {
// //           // Start final continuous rotation when scroll leaves the pinned section
// //           if (finalLogoRotationTweenRef.current) {
// //             finalLogoRotationTweenRef.current.play();
// //           }
// //         },
// //         onEnterBack: () => {
// //           // Pause final continuous rotation when scrolling back into the pinned section
// //           if (finalLogoRotationTweenRef.current) {
// //             finalLogoRotationTweenRef.current.pause();
// //           }
// //         },
// //         onLeaveBack: () => {
// //           // Resume initial continuous rotation when scrolling back to top of the page
// //           if (initialLogoRotationTweenRef.current) {
// //             initialLogoRotationTweenRef.current.play();
// //           }
// //           // Also ensure final rotation is killed if it was playing, for a clean restart from initial state
// //           if (finalLogoRotationTweenRef.current) {
// //             finalLogoRotationTweenRef.current.kill();
// //             finalLogoRotationTweenRef.current = null;
// //           }
// //         },
// //       },
// //     });

// //     // Animation for Logo: Return to static (0deg) position
// //     // (This part replaces the continuous rotation within the pinned section)
// //     tl.to(logoRef.current, {
// //       rotate: 0, // Animate to 0 degrees
// //       duration: 0.5, // Relative duration within the timeline
// //     }, 0); // Start at the very beginning of the timeline

// //     // Animation for Blur Background: Unblur and fade out
// //     tl.to(blurBgRef.current, {
// //       filter: 'blur(0px)',
// //       opacity: 0,
// //       duration: 0.5,
// //     }, 0); // Start at the very beginning of the timeline

// //     // Animation for Sub-Company Links: Fade in and move up
// //     tl.to(subCompanyElements, {
// //       opacity: 1,
// //       y: 0,
// //       stagger: 0.1,
// //       duration: 0.5,
// //       ease: 'power1.out',
// //     }, ">0.1"); // Start slightly after previous animations finish

// //     // --- Final Continuous Logo Rotation (after all other animations complete) ---
// //     // This tween is created but paused initially. It's only played on onLeave of the ScrollTrigger.
// //     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
// //       rotate: 360,
// //       duration: 15,
// //       ease: 'none',
// //       repeat: -1,
// //     }).pause(); // Start it paused

// //     // CRITICAL: Refresh ScrollTrigger after everything is set up.
// //     // This forces ScrollTrigger to recalculate all positions and triggers.
// //     ScrollTrigger.refresh();

// //     // --- Cleanup function for when component unmounts ---
// //     return () => {
// //       tl.kill(); // Kills the timeline and its associated ScrollTrigger
// //       if (initialLogoRotationTweenRef.current) {
// //         initialLogoRotationTweenRef.current.kill();
// //         initialLogoRotationTweenRef.current = null;
// //       }
// //       if (finalLogoRotationTweenRef.current) {
// //         finalLogoRotationTweenRef.current.kill();
// //         finalLogoRotationTweenRef.current = null;
// //       }
// //       // Ensure all ScrollTrigger instances are killed to prevent memory leaks/conflicts
// //       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //       gsap.globalTimeline.clear(); // Clear any remaining tweens
// //     };
// //   }, []); // Empty dependency array ensures this runs once on mount/remount

// //   return (
// //     <Box>
// //       <HeroContainer ref={heroRef} sx={{ minHeight: { xs: 400, md: 520 } }}>
// //         {/* UPDATED: Main Box dimensions to accommodate larger elements */}
// //         <Box sx={{ width: 700, height: 520, position: 'relative', maxWidth: '100%' }}>
// //           {/* Styled Blur Background - positioned behind the logo */}
// //           <StyledBlurBackground ref={blurBgRef} />
// //           {/* Center Logo - now sharp, its background is handled by StyledBlurBackground */}
// //           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
// //           <LinesSVG width={700} height={520}> {/* UPDATED: SVG dimensions */}
// //             {positions.map((pos, i) => (
// //               <line
// //                 key={i}
// //                 x1={center.x}
// //                 y1={center.y}
// //                 x2={pos.x}
// //                 y2={pos.y}
// //                 stroke="#394B59"
// //                 strokeWidth={3}
// //                 strokeDasharray="8 6"
// //               />
// //             ))}
// //           </LinesSVG>
// //           {/* Container for peripheral links to easily select them with GSAP */}
// //           <Box ref={peripheralLinksContainerRef}>
// //             {positions.map((pos, i) => (
// //               <Link
// //                 key={i}
// //                 component={RouterLink}
// //                 to={SUB_COMPANIES[i].to}
// //                 sx={{
// //                   position: 'absolute',
// //                   width: 80,
// //                   height: 80,
// //                   borderRadius: 12,
// //                   background: '#202B33',
// //                   color: '#F5F8FA',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   fontWeight: 600,
// //                   fontSize: '1.1rem',
// //                   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
// //                   cursor: 'pointer',
// //                   border: '2px solid #394B59',
// //                   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
// //                   zIndex: 2,
// //                   left: pos.x - 40,
// //                   top: pos.y - 40,
// //                   textDecoration: 'none',
// //                   opacity: 0, // Initially hidden
// //                   transform: 'translateY(20px)', // Start slightly below current position
// //                   '&:hover': {
// //                     background: '#30404D',
// //                     color: '#48AFF0',
// //                     border: '2px solid #48AFF0',
// //                     boxShadow: '0 4px 24px #106BA3',
// //                   },
// //                 }}
// //               >
// //                 {SUB_COMPANIES[i].label}
// //               </Link>
// //             ))}
// //           </Box>
// //         </Box>
// //         <Typography variant="h2" sx={{ color: HERO_TEXT, fontWeight: 800, mt: 6, mb: 2, letterSpacing: 2, textShadow: '0 2px 12px #000' }}>
// //           Welcome to Helix Synergy Corp
// //         </Typography>
// //         <Typography variant="h5" sx={{ color: '#A7B6C2', mb: 4, fontWeight: 400, letterSpacing: 1 }}>
// //           Innovative Synergy Solutions for a Connected World
// //         </Typography>
// //         <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
// //           <Button
// //             variant="contained"
// //             color="primary"
// //             size="large"
// //             startIcon={<DescriptionIcon />}
// //             sx={{
// //               background: '#137CBD',
// //               color: '#F5F8FA',
// //               fontWeight: 700,
// //               borderRadius: 6,
// //               px: 4,
// //               boxShadow: '0 2px 8px rgb(241, 111, 12)',
// //               transition: 'background 0.3s, box-shadow 0.3s',
// //               '&:hover': {
// //                 background: '#106BA3',
// //                 boxShadow: '0 4px 16px rgb(153, 163, 16)',
// //               },
// //             }}
// //             href="#solutions"
// //           >
// //             Explore Solutions
// //           </Button>
// //           <Button
// //             variant="outlined"
// //             color="primary"
// //             size="large"
// //             startIcon={<GitHubIcon />}
// //             sx={{
// //               color: '#48AFF0',
// //               borderColor: '#48AFF0',
// //               fontWeight: 700,
// //               borderRadius: 6,
// //               px: 4,
// //               background: 'rgba(19,124,189,0.08)',
// //               transition: 'background 0.3s, border 0.3s, color 0.3s',
// //               '&:hover': {
// //                 background: '#30404D',
// //                 borderColor: '#106BA3',
// //                 color: '#106BA3',
// //               },
// //             }}
// //             href="#contact"
// //           >
// //             Contact Us
// //           </Button>
// //           <Button
// //             variant="outlined"
// //             color="primary"
// //             size="large"
// //             sx={{
// //               color: '#48AFF0',
// //               borderColor: '#48AFF0',
// //               fontWeight: 700,
// //               borderRadius: 6,
// //               px: 4,
// //               background: 'rgba(19,124,189,0.08)',
// //               transition: 'background 0.3s, border 0.3s, color 0.3s',
// //               '&:hover': {
// //                 background: '#30404D',
// //                 borderColor: '#106BA3',
// //                 color: '#106BA3',
// //               },
// //             }}
// //             href="#learn-more"
// //           >
// //             Learn More
// //           </Button>
// //         </Box>
// //       </HeroContainer>
// //     </Box>
// //   );
// // };

// // export default HomePage;


// import React, { useEffect, useRef } from 'react';
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import DescriptionIcon from '@mui/icons-material/Description';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Particles from '../components/particles'; // Adjust the path if your file structure is different

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// // const HERO_BG = '#293742';
// const HERO_TEXT = '#F5F8FA';
// const HEX_RADIUS = 160;
// const SUB_COMPANIES = [
//   { label: 'Sub-Company A', to: '/subcompany-a' },
//   { label: 'Sub-Company B', to: '/subcompany-b' },
//   { label: 'Sub-Company C', to: '/subcompany-c' },
//   { label: 'Sub-Company D', to: '/subcompany-d' },
//   { label: 'Sub-Company E', to: '/subcompany-e' },
//   { label: 'Sub-Company F', to: '/subcompany-f' },
// ];

// const StyledBlurBackground = styled(Box)(() => ({
//   position: 'absolute',
//   width: 300,
//   height: 300,
//   borderRadius: '20%',
//   background: 'rgba(224, 224, 224, 0.1)',
//   // boxShadow: '0 4px 30px rgba(0,0,0,0.6)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
// }));

// const CenterLogo = styled('img')(() => ({
//   width: 250,
//   height: 250,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%) rotate(0deg)',
// }));

// const PeripheralDiv = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: 80,
//   height: 80,
//   borderRadius: 12,
//   background: 'transparent',
//   color: '#F5F8FA',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontWeight: 600,
//   fontSize: '1.1rem',
//   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//   cursor: 'pointer',
//   border: '2px solid #394B59',
//   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//   zIndex: 2,
//   opacity: 0,
//   '&:hover': {
//     background: '#30404D',
//     color: '#48AFF0',
//     border: '2px solid #48AFF0',
//     boxShadow: '0 4px 24px #106BA3',
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   minHeight: 480,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'linear-gradient(180.4deg, rgba(0,6,10,1) 1%, rgba(1,190,237,1) 91.4%)',
//   flexDirection: 'column',
//   marginBottom: 32,
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   // NEW: Initially hidden
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null); // NEW: Ref for the SVG lines

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);

//   const center = { x: 350, y: 260 };
//   const radius = HEX_RADIUS;
//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const positions = SUB_COMPANIES.map((_, i) => ({
//     x: center.x + radius * Math.cos(i * angleStep - Math.PI / 2),
//     y: center.y + radius * Math.sin(i * angleStep - Math.PI / 2),
//   }));

//   useEffect(() => {
//     // --- CRITICAL CLEANUP FOR REACT SPAs ---
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     gsap.globalTimeline.clear();
//     if (initialLogoRotationTweenRef.current) {
//       initialLogoRotationTweenRef.current.kill();
//       initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//       finalLogoRotationTweenRef.current.kill();
//       finalLogoRotationTweenRef.current = null;
//     }

//     // Ensure all referenced DOM elements are available before setting up animations
//     if (!heroRef.current || !logoRef.current || !blurBgRef.current || !peripheralLinksContainerRef.current || !linesSvgRef.current) {
//         return;
//     }

//     // --- Initial Continuous Logo Rotation ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top 50vh",
//         end: "+=2500",
//         scrub: 1,
//         pin: true,
//         markers: true,
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play();
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill();
//             finalLogoRotationTweenRef.current = null;
//           }
//         },
//       },
//     });

//     // Animation for Logo: Return to static (0deg) position
//     tl.to(logoRef.current, {
//       rotate: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for Blur Background: Unblur and fade out
//     tl.to(blurBgRef.current, {
//       filter: 'blur(0px)',
//       opacity: 0,
//       duration: 0.5,
//     }, 0);

//     // NEW: Animation for LinesSVG: Fade in
//     tl.to(linesSvgRef.current, {
//         opacity: 1,
//         duration: 0.5,
//     }, 0.2); // Start fading in lines around the same time as sub-companies or slightly before


//     // Animation for Sub-Company Links: Fade in and move up
//     tl.to(subCompanyElements, {
//       opacity: 1,
//       y: 0,
//       stagger: 0.1,
//       duration: 0.5,
//       ease: 'power1.out',
//     }, ">0.1"); // Keep this starting after previous animations

//     // --- Final Continuous Logo Rotation ---
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();

//     ScrollTrigger.refresh();

//     // --- Cleanup function ---
//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, []);

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0 }}>
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: 0,
//           pointerEvents: 'none',
//           background: 'rgba(0,0,0,0.7)',
//           filter: 'blur(32px)',
//           borderRadius: '48px',
//         }}
//       />
//       <HeroContainer ref={heroRef} sx={{ minHeight: { xs: 400, md: 520 } }}>
//         <Box sx={{ width: 700, height: 520, position: 'relative', maxWidth: '100%' }}>
//           <StyledBlurBackground ref={blurBgRef} />
//           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
//           {/* NEW: Attach ref to LinesSVG */}
//           <LinesSVG ref={linesSvgRef} width={700} height={520}>
//             {positions.map((pos, i) => (
//               <line
//                 key={i}
//                 x1={center.x}
//                 y1={center.y}
//                 x2={pos.x}
//                 y2={pos.y}
//                 stroke="#394B59"
//                 strokeWidth={3}
//                 strokeDasharray="8 6"
//               />
//             ))}
//           </LinesSVG>
//           <Box ref={peripheralLinksContainerRef}>
//             {positions.map((pos, i) => (
//               <Link
//                 key={i}
//                 component={RouterLink}
//                 to={SUB_COMPANIES[i].to}
//                 sx={{
//                   position: 'absolute',
//                   width: 80,
//                   height: 80,
//                   borderRadius: 12,
//                   background: '#202B33',
//                   color: '#F5F8FA',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontWeight: 600,
//                   fontSize: '1.1rem',
//                   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                   cursor: 'pointer',
//                   border: '2px solid #394B59',
//                   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                   zIndex: 2,
//                   left: pos.x - 40,
//                   top: pos.y - 40,
//                   textDecoration: 'none',
//                   opacity: 0,
//                   transform: 'translateY(20px)',
//                   '&:hover': {
//                     background: '#30404D',
//                     color: '#48AFF0',
//                     border: '2px solid #48AFF0',
//                     boxShadow: '0 4px 24px #106BA3',
//                   },
//                 }}
//               >
//                 {SUB_COMPANIES[i].label}
//               </Link>
//             ))}
//           </Box>
//         </Box>
//         <Typography variant="h2" sx={{ color: HERO_TEXT, fontWeight: 800, mt: 6, mb: 2, letterSpacing: 2, textShadow: '0 2px 12px #000' }}>
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography variant="h5" sx={{ color: '#A7B6C2', mb: 4, fontWeight: 400, letterSpacing: 1 }}>
//           Innovative Synergy Solutions for a Connected World
//         </Typography>
//         <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             startIcon={<DescriptionIcon />}
//             sx={{
//               background: '#137CBD',
//               color: '#F5F8FA',
//               fontWeight: 700,
//               borderRadius: 6,
//               px: 4,
//               boxShadow: '0 2px 8px rgb(241, 111, 12)',
//               transition: 'background 0.3s, box-shadow 0.3s',
//               '&:hover': {
//                 background: '#106BA3',
//                 boxShadow: '0 4px 16px rgb(153, 163, 16)',
//               },
//             }}
//             href="#solutions"
//           >
//             Explore Solutions
//           </Button>
//           <Button
//             variant="outlined"
//             color="primary"
//             size="large"
//             startIcon={<GitHubIcon />}
//             sx={{
//               color: '#48AFF0',
//               borderColor: '#48AFF0',
//               fontWeight: 700,
//               borderRadius: 6,
//               px: 4,
//               background: 'rgba(19,124,189,0.08)',
//               transition: 'background 0.3s, border 0.3s, color 0.3s',
//               '&:hover': {
//                 background: '#30404D',
//                 borderColor: '#106BA3',
//                 color: '#106BA3',
//               },
//             }}
//             href="#contact"
//           >
//             Contact Us
//           </Button>
//           <Button
//             variant="outlined"
//             color="primary"
//             size="large"
//             sx={{
//               color: '#48AFF0',
//               borderColor: '#48AFF0',
//               fontWeight: 700,
//               borderRadius: 6,
//               px: 4,
//               background: 'rgba(19,124,189,0.08)',
//               transition: 'background 0.3s, border 0.3s, color 0.3s',
//               '&:hover': {
//                 background: '#30404D',
//                 borderColor: '#106BA3',
//                 color: '#106BA3',
//               },
//             }}
//             href="#learn-more"
//           >
//             Learn More
//           </Button>
//         </Box>
//       </HeroContainer>
//     </Box>
//   );
// };

// export default HomePage;

// import React, { useEffect, useRef } from 'react';
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import DescriptionIcon from '@mui/icons-material/Description';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Particles from '../components/Particles';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';
// const HEX_RADIUS = 160;

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: '/helix-conferences' },
//   { label: 'CODEIT', to: '/codeit' },
//   { label: 'PEPTIDES', to: '/peptides' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(() => ({
//   position: 'absolute',
//   width: 300,
//   height: 300,
//   borderRadius: '20%',
//   background: 'rgba(224, 224, 224, 0.1)', // This is the blur around the logo that animates away
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
// }));

// const CenterLogo = styled('img')(() => ({
//   width: 250,
//   height: 250,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%) rotate(0deg)',
// }));

// const PeripheralDiv = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: 80,
//   height: 80,
//   borderRadius: 12,
//   background: 'transparent',
//   color: '#F5F8FA',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontWeight: 600,
//   fontSize: '1.1rem',
//   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//   cursor: 'pointer',
//   border: '2px solid #394B59',
//   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//   zIndex: 2,
//   opacity: 0,
//   '&:hover': {
//     background: '#30404D',
//     color: '#48AFF0',
//     border: '2px solid #48AFF0',
//     boxShadow: '0 4px 24px #106BA3',
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative', // Keep relative for children's absolute positioning
//   minHeight: 480,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent', // HeroContainer background is transparent
//   flexDirection: 'column',
//   marginBottom: 32,
//   overflow: 'hidden', // Still useful for clipping internal content
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);

//   const center = { x: 350, y: 260 };
//   const radius = HEX_RADIUS;
//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const positions = SUB_COMPANIES.map((_, i) => ({
//     x: center.x + radius * Math.cos(i * angleStep - Math.PI / 2),
//     y: center.y + radius * Math.sin(i * angleStep - Math.PI / 2),
//   }));

//   useEffect(() => {
//     // --- CRITICAL CLEANUP FOR REACT SPAs ---
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     gsap.globalTimeline.clear();
//     if (initialLogoRotationTweenRef.current) {
//       initialLogoRotationTweenRef.current.kill();
//       initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//       finalLogoRotationTweenRef.current.kill();
//       finalLogoRotationTweenRef.current = null;
//     }

//     // Ensure all referenced DOM elements are available before setting up animations
//     if (!heroRef.current || !logoRef.current || !blurBgRef.current || !peripheralLinksContainerRef.current || !linesSvgRef.current) {
//         return;
//     }

//     // --- Initial Continuous Logo Rotation ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top 50vh",
//         end: "+=2500",
//         scrub: 1,
//         pin: true,
//         // markers: true,
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play();
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill();
//             finalLogoRotationTweenRef.current = null;
//           }
//         },
//       },
//     });

//     // Animation for Logo: Return to static (0deg) position
//     tl.to(logoRef.current, {
//       rotate: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for Blur Background: Unblur and fade out
//     tl.to(blurBgRef.current, {
//       filter: 'blur(0px)',
//       opacity: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for LinesSVG: Fade in
//     tl.to(linesSvgRef.current, {
//         opacity: 1,
//         duration: 0.5,
//     }, 0.2);

//     // Animation for Sub-Company Links: Fade in and move up
//     tl.to(subCompanyElements, {
//       opacity: 1,
//       y: 0,
//       stagger: 0.1,
//       duration: 0.5,
//       ease: 'power1.out',
//     }, ">0.1");

//     // --- Final Continuous Logo Rotation ---
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();

//     ScrollTrigger.refresh();

//     // --- Cleanup function ---
//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, []);

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0 }}>
//       {/* This Box was a blur overlay. Now, its background and filter are removed to show only particles. */}
//       {/* If this Box serves no other purpose after these changes, you can safely remove it entirely. */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: 0, // Remains above particles, but now transparent
//           pointerEvents: 'none',
//           background: 'transparent', // <<-- CRITICAL CHANGE: Set background to transparent
//           filter: 'none',           // <<-- CRITICAL CHANGE: Remove blur effect from this global overlay
//           borderRadius: '48px',     // This is the only remaining visual property on this box
//         }}
//       />

//       <HeroContainer ref={heroRef} sx={{ minHeight: { xs: 400, md: 520 } }}>
//         <Box sx={{ width: 700, height: 520, position: 'relative', maxWidth: '100%' }}>
//           <StyledBlurBackground ref={blurBgRef} />
//           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
//           <LinesSVG ref={linesSvgRef} width={700} height={520}>
//             {positions.map((pos, i) => (
//               <line
//                 key={i}
//                 x1={center.x}
//                 y1={center.y}
//                 x2={pos.x}
//                 y2={pos.y}
//                 stroke="#394B59"
//                 strokeWidth={3}
//                 strokeDasharray="8 6"
//               />
//             ))}
//           </LinesSVG>
//           <Box ref={peripheralLinksContainerRef}>
//             {positions.map((pos, i) => (
//               <Link
//                 key={i}
//                 component={RouterLink}
//                 to={SUB_COMPANIES[i].to}
//                 sx={{
//                   position: 'absolute',
//                   width: 80,
//                   height: 80,
//                   borderRadius: 12,
//                   background: '#202B33',
//                   color: '#F5F8FA',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontWeight: 600,
//                   fontSize: '1.1rem',
//                   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                   cursor: 'pointer',
//                   border: '2px solid #394B59',
//                   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                   zIndex: 2,
//                   left: pos.x - 40,
//                   top: pos.y - 40,
//                   textDecoration: 'none',
//                   opacity: 0,
//                   transform: 'translateY(20px)',
//                   '&:hover': {
//                     background: '#30404D',
//                     borderColor: '#48AFF0',
//                     color: '#106BA3',
//                     boxShadow: '0 4px 24px #106BA3',
//                   },
//                 }}
//               >
//                 {SUB_COMPANIES[i].label}
//               </Link>
//             ))}
//           </Box>
//         </Box>
//       </HeroContainer>
//       {/* Content that was outside HeroContainer previously, now grouped here */}
//       <Typography variant="h2" sx={{ color: HERO_TEXT, fontWeight: 800, mt: 6, mb: 2, letterSpacing: 2, textShadow: '0 2px 12px #000', zIndex: 1 }}>
//         Welcome to Helix Synergy Corp
//       </Typography>
//       <Typography variant="h5" sx={{ color: '#A7B6C2', mb: 4, fontWeight: 400, letterSpacing: 1, zIndex: 1 }}>
//         Innovative Synergy Solutions for a Connected World
//       </Typography>
//       <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', zIndex: 1 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           startIcon={<DescriptionIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#solutions"
//         >
//           Explore Solutions
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           startIcon={<GitHubIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#contact"
//         >
//           Contact Us
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#learn-more"
//         >
//           Learn More
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;






// import React, { useEffect, useRef, useState } from 'react'; // Import useState
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import DescriptionIcon from '@mui/icons-material/Description';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 280; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 140; // Increased size for sub-company circles
// const BASE_SUB_COMPANY_FONT_SIZE = '1.2rem'; // Adjusted font size

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: '/helix-conferences' },
//   { label: 'CODEIT', to: '/codeit' },
//   { label: 'PEPTIDES', to: '/peptides' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(224, 224, 224, 0.1)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8, // Slightly smaller on medium screens
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6, // Significantly smaller on small screens
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%) rotate(0deg)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// // PeripheralDiv is used by the Link component's sx prop, but this still defines its base styles.
// const PeripheralDiv = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_SUB_COMPANY_SIZE,
//   height: BASE_SUB_COMPANY_SIZE,
//   borderRadius: 12,
//   background: '#202B33', // Solid background for peripheral boxes
//   color: '#F5F8FA',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontWeight: 600,
//   fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   textAlign: 'center', // Center text for longer labels
//   padding: '0 8px', // Add padding to prevent text overflow
//   boxSizing: 'border-box', // Include padding in width/height
//   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//   cursor: 'pointer',
//   border: '2px solid #394B59',
//   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//   zIndex: 2,
//   opacity: 0,
//   '&:hover': {
//     background: '#30404D',
//     color: '#48AFF0',
//     border: '2px solid #48AFF0',
//     boxShadow: '0 4px 24px #106BA3',
//   },
//   [theme.breakpoints.down('md')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.8,
//     height: BASE_SUB_COMPANY_SIZE * 0.8,
//     fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.6,
//     height: BASE_SUB_COMPANY_SIZE * 0.6,
//     fontSize: '0.8rem', // Smaller font size for mobile
//     borderRadius: 8,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   minHeight: 480,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   marginBottom: 32,
//   overflow: 'hidden',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);

//   // State to store the dynamic dimensions of the hero container
//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm') ? BASE_HEX_RADIUS * 0.5 :
//                         theme.breakpoints.down('md') ? BASE_HEX_RADIUS * 0.8 :
//                         BASE_HEX_RADIUS;

//   useEffect(() => {
//     // Function to update container dimensions
//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     // Set initial dimensions
//     updateDimensions();

//     // Add event listener for window resize
//     window.addEventListener('resize', updateDimensions);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

//   // Calculate center dynamically based on actual container dimensions
//   // Use a fallback if dimensions are not yet available (e.g., during initial render)
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };
  
//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const positions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     // --- CRITICAL CLEANUP FOR REACT SPAs ---
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     gsap.globalTimeline.clear();
//     if (initialLogoRotationTweenRef.current) {
//       initialLogoRotationTweenRef.current.kill();
//       initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//       finalLogoRotationTweenRef.current.kill();
//       finalLogoRotationTweenRef.current = null;
//     }

//     // Ensure all referenced DOM elements are available before setting up animations
//     if (!heroRef.current || !logoRef.current || !blurBgRef.current || !peripheralLinksContainerRef.current || !linesSvgRef.current) {
//         return;
//     }

//     // --- Initial Continuous Logo Rotation ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top 50vh",
//         end: "+=2500",
//         scrub: 1,
//         pin: true,
//         // markers: true, // Uncomment for debugging scroll trigger
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play();
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill();
//             finalLogoRotationTweenRef.current = null;
//           }
//         },
//       },
//     });

//     // Animation for Logo: Return to static (0deg) position
//     tl.to(logoRef.current, {
//       rotate: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for Blur Background: Unblur and fade out
//     tl.to(blurBgRef.current, {
//       filter: 'blur(0px)',
//       opacity: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for LinesSVG: Fade in
//     tl.to(linesSvgRef.current, {
//         opacity: 1,
//         duration: 0.5,
//     }, 0.2);

//     // Animation for Sub-Company Links: Fade in and move up
//     tl.to(subCompanyElements, {
//       opacity: 1,
//       y: 0,
//       stagger: 0.1,
//       duration: 0.5,
//       ease: 'power1.out',
//     }, ">0.1");

//     // --- Final Continuous Logo Rotation ---
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();

//     ScrollTrigger.refresh();

//     // --- Cleanup function ---
//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, [currentRadius, containerDimensions]); // Re-run effect if radius or container dimensions change

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0 }}>
//       {/* This Box now serves as the solid dark background for the entire page */}
//       <Box
//         sx={{
//           position: 'fixed', // Use fixed to cover the entire viewport
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           minHeight: '100vh', // Ensure it covers at least the viewport height
//           zIndex: -1, // Place behind all content
//           background: '#121212', // Solid dark background color
//           filter: 'none', // No blur for the page background
//           borderRadius: '0', // No rounded corners for the full page background
//           pointerEvents: 'none', // Allows interaction with content above it
//         }}
//       />

//       <HeroContainer ref={heroRef} sx={{ 
//         minHeight: { xs: 400, md: 520, lg: 700 }, // Adjust minHeight for larger screens
//         // Ensure HeroContainer itself can take up more width for the layout to expand
//         width: '100%', 
//         maxWidth: { xs: '100%', md: 700, lg: 900 }, // Max width for the circular layout
//         margin: '0 auto', // Center the HeroContainer
//       }}>
//         <Box 
//           sx={{ 
//             width: '100%', // Take full width of HeroContainer
//             height: '100%', // Take full height of HeroContainer
//             position: 'relative', 
//             maxWidth: '100%',
//             overflow: 'hidden' // Important to clip elements if they go outside
//           }}
//         >
//           <StyledBlurBackground ref={blurBgRef} />
//           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
//           {/* SVG lines now draw based on dynamic center and container dimensions */}
//           <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//             {positions.map((pos, i) => (
//               <line
//                 key={i}
//                 x1={center.x}
//                 y1={center.y}
//                 x2={pos.x}
//                 y2={pos.y}
//                 stroke="#394B59"
//                 strokeWidth={3}
//                 strokeDasharray="8 6"
//               />
//             ))}
//           </LinesSVG>
//           <Box ref={peripheralLinksContainerRef}>
//             {positions.map((pos, i) => {
//               // Calculate offset for peripheral circles dynamically based on their size
//               const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                             theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                             BASE_SUB_COMPANY_SIZE;
//               const offset = currentSubCompanySize / 2;

//               return (
//                 <Link
//                   key={i}
//                   component={RouterLink}
//                   to={SUB_COMPANIES[i].to}
//                   sx={{
//                     position: 'absolute',
//                     width: currentSubCompanySize,
//                     height: currentSubCompanySize,
//                     borderRadius: 12,
//                     background: '#202B33',
//                     color: '#F5F8FA',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: 600,
//                     fontSize: theme.breakpoints.down('sm') ? '0.8rem' : BASE_SUB_COMPANY_FONT_SIZE,
//                     textAlign: 'center',
//                     padding: '0 8px',
//                     boxSizing: 'border-box',
//                     boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                     cursor: 'pointer',
//                     border: '2px solid #394B59',
//                     transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                     zIndex: 2,
//                     left: pos.x - offset, // Adjust position based on new size
//                     top: pos.y - offset, // Adjust position based on new size
//                     textDecoration: 'none',
//                     opacity: 0,
//                     transform: 'translateY(20px)',
//                     '&:hover': {
//                       background: '#30404D',
//                       borderColor: '#48AFF0',
//                       color: '#106BA3',
//                       boxShadow: '0 4px 24px #106BA3',
//                     },
//                   }}
//                 >
//                   {SUB_COMPANIES[i].label}
//                 </Link>
//               );
//             })}
//           </Box>
//         </Box>
//       </HeroContainer>
//       {/* Content below the hero section */}
//       <Typography variant="h2" sx={{ color: HERO_TEXT, fontWeight: 800, mt: 6, mb: 2, letterSpacing: 2, textShadow: '0 2px 12px #000', zIndex: 1, textAlign: 'center' }}>
//         Welcome to Helix Synergy Corp
//       </Typography>
//       <Typography variant="h5" sx={{ color: '#A7B6C2', mb: 4, fontWeight: 400, letterSpacing: 1, zIndex: 1, textAlign: 'center' }}>
//         Innovative Synergy Solutions for a Connected World
//       </Typography>
//       <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', zIndex: 1, px: 2 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           startIcon={<DescriptionIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#solutions"
//         >
//           Explore Solutions
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           startIcon={<GitHubIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#contact"
//         >
//           Contact Us
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#learn-more"
//         >
//           Learn More
//         </Button>
//       </Box>
//       <Box sx={{ mt: 8, pb: 4, textAlign: 'center', color: '#A7B6C2', zIndex: 1 }}>
//         <Typography variant="body2">
//           © {new Date().getFullYear()} Helix Synergy Corp. All rights reserved.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;




// import React, { useEffect, useRef, useState } from 'react'; // Import useState
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import DescriptionIcon from '@mui/icons-material/Description';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 280; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 160; // <--- MODIFIED: Increased size for sub-company circles (was 140)
// const BASE_SUB_COMPANY_FONT_SIZE = '1.3rem'; // <--- MODIFIED: Adjusted font size for larger circles (was 1.2rem)

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: '/helix-conferences' },
//   { label: 'CODEIT', to: '/codeit' },
//   { label: 'PEPTIDES', to: '/peptides' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(224, 224, 224, 0.1)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8, // Slightly smaller on medium screens
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6, // Significantly smaller on small screens
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%) rotate(0deg)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// // PeripheralDiv is used by the Link component's sx prop, but this still defines its base styles.
// // This component itself is NOT rendered, its styles are applied via the <Link sx={...}> below
// const PeripheralDiv = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_SUB_COMPANY_SIZE, // Styles from here are used as base for Link component's sx
//   height: BASE_SUB_COMPANY_SIZE,
//   borderRadius: 12,
//   background: '#202B33', // Solid background for peripheral boxes
//   color: '#F5F8FA',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontWeight: 600,
//   fontSize: BASE_SUB_COMPANY_FONT_SIZE, // Base font size
//   textAlign: 'center', // Center text for longer labels
//   padding: '0 8px', // Add padding to prevent text overflow
//   boxSizing: 'border-box', // Include padding in width/height
//   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//   cursor: 'pointer',
//   border: '2px solid #394B59',
//   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//   zIndex: 2,
//   opacity: 0,
//   '&:hover': {
//     background: '#30404D',
//     color: '#48AFF0',
//     border: '2px solid #48AFF0',
//     boxShadow: '0 4px 24px #106BA3',
//   },
//   // Responsive overrides (these will also be applied to the Link component's sx)
//   [theme.breakpoints.down('md')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.8,
//     height: BASE_SUB_COMPANY_SIZE * 0.8,
//     fontSize: BASE_SUB_COMPANY_FONT_SIZE, // Still use base font size or slightly adjusted
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.6,
//     height: BASE_SUB_COMPANY_SIZE * 0.6,
//     fontSize: '0.9rem', // Slightly larger font for mobile after increasing base
//     borderRadius: 8,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   minHeight: 480,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   marginBottom: 32,
//   overflow: 'hidden',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);

//   // State to store the dynamic dimensions of the hero container
//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm') ? BASE_HEX_RADIUS * 0.5 :
//                         theme.breakpoints.down('md') ? BASE_HEX_RADIUS * 0.8 :
//                         BASE_HEX_RADIUS;

//   useEffect(() => {
//     // Function to update container dimensions
//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     // Set initial dimensions
//     updateDimensions();

//     // Add event listener for window resize
//     window.addEventListener('resize', updateDimensions);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

//   // Calculate center dynamically based on actual container dimensions
//   // Use a fallback if dimensions are not yet available (e.g., during initial render)
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };
  
//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const positions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     // --- CRITICAL CLEANUP FOR REACT SPAs ---
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     gsap.globalTimeline.clear();
//     if (initialLogoRotationTweenRef.current) {
//       initialLogoRotationTweenRef.current.kill();
//       initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//       finalLogoRotationTweenRef.current.kill();
//       finalLogoRotationTweenRef.current = null;
//     }

//     // Ensure all referenced DOM elements are available before setting up animations
//     if (!heroRef.current || !logoRef.current || !blurBgRef.current || !peripheralLinksContainerRef.current || !linesSvgRef.current) {
//         return;
//     }

//     // --- Initial Continuous Logo Rotation ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top 50vh",
//         end: "+=2500",
//         scrub: 1,
//         pin: true,
//         // markers: true, // Uncomment for debugging scroll trigger
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play();
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill();
//             finalLogoRotationTweenRef.current = null;
//           }
//         },
//       },
//     });

//     // Animation for Logo: Return to static (0deg) position
//     tl.to(logoRef.current, {
//       rotate: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for Blur Background: Unblur and fade out
//     tl.to(blurBgRef.current, {
//       filter: 'blur(0px)',
//       opacity: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for LinesSVG: Fade in
//     tl.to(linesSvgRef.current, {
//         opacity: 1,
//         duration: 0.5,
//     }, 0.2);

//     // Animation for Sub-Company Links: Fade in and move up
//     tl.to(subCompanyElements, {
//       opacity: 1,
//       y: 0,
//       stagger: 0.1,
//       duration: 0.5,
//       ease: 'power1.out',
//     }, ">0.1");

//     // --- Final Continuous Logo Rotation ---
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();

//     ScrollTrigger.refresh();

//     // --- Cleanup function ---
//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, [currentRadius, containerDimensions]); // Re-run effect if radius or container dimensions change

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0 }}>
//       {/* This Box now serves as the solid dark background for the entire page */}
//       <Box
//         sx={{
//           position: 'fixed', // Use fixed to cover the entire viewport
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           minHeight: '100vh', // Ensure it covers at least the viewport height
//           zIndex: -1, // Place behind all content
//           background: '#121212', // Solid dark background color
//           filter: 'none', // No blur for the page background
//           borderRadius: '0', // No rounded corners for the full page background
//           pointerEvents: 'none', // Allows interaction with content above it
//         }}
//       />

//       <HeroContainer ref={heroRef} sx={{ 
//         minHeight: { xs: 400, md: 520, lg: 700 }, // Adjust minHeight for larger screens
//         // Ensure HeroContainer itself can take up more width for the layout to expand
//         width: '100%', 
//         maxWidth: { xs: '100%', md: 700, lg: 900 }, // Max width for the circular layout
//         margin: '0 auto', // Center the HeroContainer
//       }}>
//         <Box 
//           sx={{ 
//             width: '100%', // Take full width of HeroContainer
//             height: '100%', // Take full height of HeroContainer
//             position: 'relative', 
//             maxWidth: '100%',
//             overflow: 'hidden' // Important to clip elements if they go outside
//           }}
//         >
//           <StyledBlurBackground ref={blurBgRef} />
//           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
//           {/* SVG lines now draw based on dynamic center and container dimensions */}
//           <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//             {positions.map((pos, i) => (
//               <line
//                 key={i}
//                 x1={center.x}
//                 y1={center.y}
//                 x2={pos.x}
//                 y2={pos.y}
//                 stroke="#394B59"
//                 strokeWidth={3}
//                 strokeDasharray="8 6"
//               />
//             ))}
//           </LinesSVG>
//           <Box ref={peripheralLinksContainerRef}>
//             {positions.map((pos, i) => {
//               // Calculate offset for peripheral circles dynamically based on their size
//               const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                             theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                             BASE_SUB_COMPANY_SIZE;
//               const offset = currentSubCompanySize / 2;

//               return (
//                 <Link
//                   key={i}
//                   component={RouterLink}
//                   to={SUB_COMPANIES[i].to}
//                   sx={{
//                     position: 'absolute',
//                     width: currentSubCompanySize,
//                     height: currentSubCompanySize,
//                     borderRadius: 12,
//                     background: '#202B33',
//                     color: '#F5F8FA',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: 600,
//                     fontSize: theme.breakpoints.down('sm') ? '0.9rem' : BASE_SUB_COMPANY_FONT_SIZE,
//                     textAlign: 'center',
//                     padding: '0 8px',
//                     boxSizing: 'border-box',
//                     boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                     cursor: 'pointer',
//                     border: '2px solid #394B59',
//                     transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                     zIndex: 2,
//                     left: pos.x - offset, // Adjust position based on new size
//                     top: pos.y - offset, // Adjust position based on new size
//                     textDecoration: 'none',
//                     opacity: 0,
//                     transform: 'translateY(20px)',
//                     '&:hover': {
//                       background: '#30404D',
//                       borderColor: '#48AFF0',
//                       color: '#106BA3',
//                       boxShadow: '0 4px 24px #106BA3',
//                     },
//                   }}
//                 >
//                   {SUB_COMPANIES[i].label}
//                 </Link>
//               );
//             })}
//           </Box>
//         </Box>
//       </HeroContainer>
//       {/* Content below the hero section */}
//       <Typography variant="h2" sx={{ color: HERO_TEXT, fontWeight: 800, mt: 6, mb: 2, letterSpacing: 2, textShadow: '0 2px 12px #000', zIndex: 1, textAlign: 'center' }}>
//         Welcome to Helix Synergy Corp
//       </Typography>
//       <Typography variant="h5" sx={{ color: '#A7B6C2', mb: 4, fontWeight: 400, letterSpacing: 1, zIndex: 1, textAlign: 'center' }}>
//         Innovative Synergy Solutions for a Connected World
//       </Typography>
//       <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', zIndex: 1, px: 2 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           startIcon={<DescriptionIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#solutions"
//         >
//           Explore Solutions
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           startIcon={<GitHubIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#contact"
//         >
//           Contact Us
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#learn-more"
//         >
//           Learn More
//         </Button>
//       </Box>
//       <Box sx={{ mt: 8, pb: 4, textAlign: 'center', color: '#A7B6C2', zIndex: 1 }}>
//         <Typography variant="body2">
//           © {new Date().getFullYear()} Helix Synergy Corp. All rights reserved.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;







// import React, { useEffect, useRef, useState } from 'react'; // Import useState
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import DescriptionIcon from '@mui/icons-material/Description';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 160; // Increased size for sub-company circles
// const BASE_SUB_COMPANY_FONT_SIZE = '1.3rem'; // Adjusted font size for larger circles

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: '/helix-conferences' },
//   { label: 'CODEIT', to: '/codeit' },
//   { label: 'PEPTIDES', to: '/peptides' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(224, 224, 224, 0.1)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8, // Slightly smaller on medium screens
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6, // Significantly smaller on small screens
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%) rotate(0deg)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// // PeripheralDiv is used by the Link component's sx prop, but this still defines its base styles.
// const PeripheralDiv = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_SUB_COMPANY_SIZE,
//   height: BASE_SUB_COMPANY_SIZE,
//   borderRadius: 12,
//   background: '#202B33', // Solid background for peripheral boxes
//   color: '#F5F8FA',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontWeight: 600,
//   fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   textAlign: 'center', // Center text for longer labels
//   padding: '0 8px', // Add padding to prevent text overflow
//   boxSizing: 'border-box', // Include padding in width/height
//   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//   cursor: 'pointer',
//   border: '2px solid #394B59',
//   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//   zIndex: 2,
//   opacity: 0,
//   '&:hover': {
//     background: '#30404D',
//     color: '#48AFF0',
//     border: '2px solid #48AFF0',
//     boxShadow: '0 4px 24px #106BA3',
//   },
//   [theme.breakpoints.down('md')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.8,
//     height: BASE_SUB_COMPANY_SIZE * 0.8,
//     fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.6,
//     height: BASE_SUB_COMPANY_SIZE * 0.6,
//     fontSize: '0.9rem', // Smaller font size for mobile
//     borderRadius: 8,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   // minHeight is now handled by the sx prop for precise control
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);

//   // State to store the dynamic dimensions of the hero container
//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm') ? BASE_HEX_RADIUS * 0.5 :
//                         theme.breakpoints.down('md') ? BASE_HEX_RADIUS * 0.8 :
//                         BASE_HEX_RADIUS;

//   useEffect(() => {
//     // Function to update container dimensions
//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     // Set initial dimensions
//     updateDimensions();

//     // Add event listener for window resize
//     window.addEventListener('resize', updateDimensions);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

//   // Calculate center dynamically based on actual container dimensions
//   // Use a fallback if dimensions are not yet available (e.g., during initial render)
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };
  
//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const positions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     // --- CRITICAL CLEANUP FOR REACT SPAs ---
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     gsap.globalTimeline.clear();
//     if (initialLogoRotationTweenRef.current) {
//       initialLogoRotationTweenRef.current.kill();
//       initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//       finalLogoRotationTweenRef.current.kill();
//       finalLogoRotationTweenRef.current = null;
//     }

//     // Ensure all referenced DOM elements are available before setting up animations
//     if (!heroRef.current || !logoRef.current || !blurBgRef.current || !peripheralLinksContainerRef.current || !linesSvgRef.current) {
//         return;
//     }

//     // --- Initial Continuous Logo Rotation ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         // *** CRITICAL CHANGE HERE: Pin when the top of the trigger hits the top of the viewport ***
//         start: "top top", 
//         end: "+=2500",
//         scrub: 1,
//         pin: true,
//         // markers: true, // Uncomment for debugging scroll trigger
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play();
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill();
//             finalLogoRotationTweenRef.current = null;
//           }
//         },
//       },
//     });

//     // Animation for Logo: Return to static (0deg) position
//     tl.to(logoRef.current, {
//       rotate: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for Blur Background: Unblur and fade out
//     tl.to(blurBgRef.current, {
//       filter: 'blur(0px)',
//       opacity: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for LinesSVG: Fade in
//     tl.to(linesSvgRef.current, {
//         opacity: 1,
//         duration: 0.5,
//     }, 0.2);

//     // Animation for Sub-Company Links: Fade in and move up
//     tl.to(subCompanyElements, {
//       opacity: 1,
//       y: 0,
//       stagger: 0.1,
//       duration: 0.5,
//       ease: 'power1.out',
//     }, ">0.1");

//     // --- Final Continuous Logo Rotation ---
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();

//     ScrollTrigger.refresh();

//     // --- Cleanup function ---
//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, [currentRadius, containerDimensions]); // Re-run effect if radius or container dimensions change

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0 }}>
//       {/* This Box now serves as the solid dark background for the entire page */}
//       <Box
//         sx={{
//           position: 'fixed', // Use fixed to cover the entire viewport
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           minHeight: '100vh', // Ensure it covers at least the viewport height
//           zIndex: -1, // Place behind all content
//           background: '#121212', // Solid dark background color
//           filter: 'none', // No blur for the page background
//           borderRadius: '0', // No rounded corners for the full page background
//           pointerEvents: 'none', // Allows interaction with content above it
//         }}
//       />

//       <HeroContainer
//         ref={heroRef}
//         sx={{
//           // *** CRITICAL CHANGE HERE: Dynamically set height to fill viewport minus header ***
//           // Assuming a common header height of 56px on small screens and 64px on larger.
//           // Adjust these 'px' values if your actual header has a different fixed height.
//           height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           width: '100%',
//           maxWidth: { xs: '100%', md: 700, lg: 900 },
//           margin: '0 auto', // Center horizontally within the parent Box
//         }}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             height: '100%', // Inner box takes full height of HeroContainer
//             position: 'relative',
//             maxWidth: '100%',
//             overflow: 'hidden',
//           }}
//         >
//           <StyledBlurBackground ref={blurBgRef} />
//           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
//           {/* LinesSVG and peripheral links positioning based on current dimensions, they remain */}
//           <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//             {positions.map((pos, i) => (
//               <line
//                 key={i}
//                 x1={center.x}
//                 y1={center.y}
//                 x2={pos.x}
//                 y2={pos.y}
//                 stroke="#394B59"
//                 strokeWidth={3}
//                 strokeDasharray="8 6"
//               />
//             ))}
//           </LinesSVG>
//           <Box ref={peripheralLinksContainerRef}>
//             {positions.map((pos, i) => {
//               const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                             theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                             BASE_SUB_COMPANY_SIZE;
//               const offset = currentSubCompanySize / 2;

//               return (
//                 <Link
//                   key={i}
//                   component={RouterLink}
//                   to={SUB_COMPANIES[i].to}
//                   sx={{
//                     position: 'absolute',
//                     width: currentSubCompanySize,
//                     height: currentSubCompanySize,
//                     borderRadius: 12,
//                     background: '#202B33',
//                     color: '#F5F8FA',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: 600,
//                     fontSize: theme.breakpoints.down('sm') ? '0.9rem' : BASE_SUB_COMPANY_FONT_SIZE,
//                     textAlign: 'center',
//                     padding: '0 8px',
//                     boxSizing: 'border-box',
//                     boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                     cursor: 'pointer',
//                     border: '2px solid #394B59',
//                     transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                     zIndex: 2,
//                     left: pos.x - offset,
//                     top: pos.y - offset,
//                     textDecoration: 'none',
//                     opacity: 0, // Initial opacity for animation
//                     transform: 'translateY(20px)', // Initial position for animation
//                     '&:hover': {
//                       background: '#30404D',
//                       borderColor: '#48AFF0',
//                       color: '#106BA3',
//                       boxShadow: '0 4px 24px #106BA3',
//                     },
//                   }}
//                 >
//                   {SUB_COMPANIES[i].label}
//                 </Link>
//               );
//             })}
//           </Box>
//         </Box>
//       </HeroContainer>
//       {/* Content below the hero section */}
//       <Typography variant="h2" sx={{ color: HERO_TEXT, fontWeight: 800, mt: 6, mb: 2, letterSpacing: 2, textShadow: '0 2px 12px #000', zIndex: 1, textAlign: 'center' }}>
//         Welcome to Helix Synergy Corp
//       </Typography>
//       <Typography variant="h5" sx={{ color: '#A7B6C2', mb: 4, fontWeight: 400, letterSpacing: 1, zIndex: 1, textAlign: 'center' }}>
//         Innovative Synergy Solutions for a Connected World
//       </Typography>
//       <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', zIndex: 1, px: 2 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           startIcon={<DescriptionIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#solutions"
//         >
//           Explore Solutions
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           startIcon={<GitHubIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#contact"
//         >
//           Contact Us
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#learn-more"
//         >
//           Learn More
//         </Button>
//       </Box>
//       <Box sx={{ mt: 8, pb: 4, textAlign: 'center', color: '#A7B6C2', zIndex: 1 }}>
//         <Typography variant="body2">
//           © {new Date().getFullYear()} Helix Synergy Corp. All rights reserved.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;





// import React, { useEffect, useRef, useState } from 'react'; // Import useState
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import DescriptionIcon from '@mui/icons-material/Description';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 160; // Increased size for sub-company circles
// const BASE_SUB_COMPANY_FONT_SIZE = '1.3rem'; // Adjusted font size for larger circles

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: '/helix-conferences' },
//   { label: 'CODEIT', to: '/codeit' },
//   { label: 'PEPTIDES', to: '/peptides' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(224, 224, 224, 0.1)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8, // Slightly smaller on medium screens
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6, // Significantly smaller on small screens
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%) rotate(0deg)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// // PeripheralDiv is used by the Link component's sx prop, but this still defines its base styles.
// const PeripheralDiv = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_SUB_COMPANY_SIZE,
//   height: BASE_SUB_COMPANY_SIZE,
//   borderRadius: 12,
//   background: '#202B33', // Solid background for peripheral boxes
//   color: '#F5F8FA',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontWeight: 600,
//   fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   textAlign: 'center', // Center text for longer labels
//   padding: '0 8px', // Add padding to prevent text overflow
//   boxSizing: 'border-box', // Include padding in width/height
//   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//   cursor: 'pointer',
//   border: '2px solid #394B59',
//   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//   zIndex: 2,
//   opacity: 0,
//   '&:hover': {
//     background: '#30404D',
//     color: '#48AFF0',
//     border: '2px solid #48AFF0',
//     boxShadow: '0 4px 24px #106BA3',
//   },
//   [theme.breakpoints.down('md')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.8,
//     height: BASE_SUB_COMPANY_SIZE * 0.8,
//     fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.6,
//     height: BASE_SUB_COMPANY_SIZE * 0.6,
//     fontSize: '0.9rem', // Smaller font size for mobile
//     borderRadius: 8,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   // minHeight is now handled by the sx prop for precise control
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);

//   // State to store the dynamic dimensions of the hero container
//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm') ? BASE_HEX_RADIUS * 0.5 :
//                         theme.breakpoints.down('md') ? BASE_HEX_RADIUS * 0.8 :
//                         BASE_HEX_RADIUS;

//   useEffect(() => {
//     // Function to update container dimensions
//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     // Set initial dimensions
//     updateDimensions();

//     // Add event listener for window resize
//     window.addEventListener('resize', updateDimensions);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

//   // Calculate center dynamically based on actual container dimensions
//   // Use a fallback if dimensions are not yet available (e.g., during initial render)
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };
  
//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const positions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     // --- CRITICAL CLEANUP FOR REACT SPAs ---
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     gsap.globalTimeline.clear();
//     if (initialLogoRotationTweenRef.current) {
//       initialLogoRotationTweenRef.current.kill();
//       initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//       finalLogoRotationTweenRef.current.kill();
//       finalLogoRotationTweenRef.current = null;
//     }

//     // Ensure all referenced DOM elements are available before setting up animations
//     if (!heroRef.current || !logoRef.current || !blurBgRef.current || !peripheralLinksContainerRef.current || !linesSvgRef.current) {
//         return;
//     }

//     // --- Initial Continuous Logo Rotation ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         // *** ONLY CHANGE MADE HERE: Updated start to be relative to the viewport top with an offset ***
//         // This will make the animation start when the top of the trigger (HeroContainer)
//         // is at 1px from the viewport top. Adjust "1px" if you need a specific, very small offset.
//         // A value like "top top" usually means "when the top of the trigger hits the top of the viewport".
//         // If it's scrolling a bit before that, it indicates content *above* the trigger.
//         // To make it truly immediate, consider if your HeroContainer is the very first element in the scroll flow.
//         // However, if a tiny scroll is *always* happening, a small offset can 'pre-trigger' it.
//         // For 'truly immediate' at the very top of the scroll container, "top top" is correct.
//         // If the problem persists with "top top", it implies elements are pushing down heroRef.current.
//         // Given your previous description, "top top" should be the target.
//         start: "top 70vh", 
//         end: "+=2500",
//         scrub: 1,
//         pin: true,
//         // markers: true, // Uncomment for debugging scroll trigger
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play();
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill();
//             finalLogoRotationTweenRef.current = null;
//           }
//         },
//       },
//     });

//     // Animation for Logo: Return to static (0deg) position
//     tl.to(logoRef.current, {
//       rotate: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for Blur Background: Unblur and fade out
//     tl.to(blurBgRef.current, {
//       filter: 'blur(0px)',
//       opacity: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for LinesSVG: Fade in
//     tl.to(linesSvgRef.current, {
//         opacity: 1,
//         duration: 0.5,
//     }, 0.2);

//     // Animation for Sub-Company Links: Fade in and move up
//     tl.to(subCompanyElements, {
//       opacity: 1,
//       y: 0,
//       stagger: 0.1,
//       duration: 0.5,
//       ease: 'power1.out',
//     }, ">0.1");

//     // --- Final Continuous Logo Rotation ---
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();

//     ScrollTrigger.refresh();

//     // --- Cleanup function ---
//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, [currentRadius, containerDimensions]); // Re-run effect if radius or container dimensions change

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0 }}>
//       {/* This Box now serves as the solid dark background for the entire page */}
//       <Box
//         sx={{
//           position: 'fixed', // Use fixed to cover the entire viewport
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           minHeight: '100vh', // Ensure it covers at least the viewport height
//           zIndex: -1, // Place behind all content
//           background: '#121212', // Solid dark background color
//           filter: 'none', // No blur for the page background
//           borderRadius: '0', // No rounded corners for the full page background
//           pointerEvents: 'none', // Allows interaction with content above it
//         }}
//       />

//       <HeroContainer
//         ref={heroRef}
//         sx={{
//           // *** CRITICAL CHANGE HERE: Dynamically set height to fill viewport minus header ***
//           // Assuming a common header height of 56px on small screens and 64px on larger.
//           // Adjust these 'px' values if your actual header has a different fixed height.
//           height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           width: '100%',
//           maxWidth: { xs: '100%', md: 700, lg: 900 },
//           margin: '0 auto', // Center horizontally within the parent Box
//         }}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             height: '100%', // Inner box takes full height of HeroContainer
//             position: 'relative',
//             maxWidth: '100%',
//             overflow: 'hidden',
//           }}
//         >
//           <StyledBlurBackground ref={blurBgRef} />
//           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
//           {/* LinesSVG and peripheral links positioning based on current dimensions, they remain */}
//           <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//             {positions.map((pos, i) => (
//               <line
//                 key={i}
//                 x1={center.x}
//                 y1={center.y}
//                 x2={pos.x}
//                 y2={pos.y}
//                 stroke="#394B59"
//                 strokeWidth={3}
//                 strokeDasharray="8 6"
//               />
//             ))}
//           </LinesSVG>
//           <Box ref={peripheralLinksContainerRef}>
//             {positions.map((pos, i) => {
//               const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                             theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                             BASE_SUB_COMPANY_SIZE;
//               const offset = currentSubCompanySize / 2;

//               return (
//                 <Link
//                   key={i}
//                   component={RouterLink}
//                   to={SUB_COMPANIES[i].to}
//                   sx={{
//                     position: 'absolute',
//                     width: currentSubCompanySize,
//                     height: currentSubCompanySize,
//                     borderRadius: 12,
//                     background: '#202B33',
//                     color: '#F5F8FA',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: 600,
//                     fontSize: theme.breakpoints.down('sm') ? '0.9rem' : BASE_SUB_COMPANY_FONT_SIZE,
//                     textAlign: 'center',
//                     padding: '0 8px',
//                     boxSizing: 'border-box',
//                     boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                     cursor: 'pointer',
//                     border: '2px solid #394B59',
//                     transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                     zIndex: 2,
//                     left: pos.x - offset,
//                     top: pos.y - offset,
//                     textDecoration: 'none',
//                     opacity: 0, // Initial opacity for animation
//                     transform: 'translateY(20px)', // Initial position for animation
//                     '&:hover': {
//                       background: '#30404D',
//                       borderColor: '#48AFF0',
//                       color: '#106BA3',
//                       boxShadow: '0 4px 24px #106BA3',
//                     },
//                   }}
//                 >
//                   {SUB_COMPANIES[i].label}
//                 </Link>
//               );
//             })}
//           </Box>
//         </Box>
//       </HeroContainer>
//       {/* Content below the hero section */}
//       <Typography variant="h2" sx={{ color: HERO_TEXT, fontWeight: 800, mt: 6, mb: 2, letterSpacing: 2, textShadow: '0 2px 12px #000', zIndex: 1, textAlign: 'center' }}>
//         Welcome to Helix Synergy Corp
//       </Typography>
//       <Typography variant="h5" sx={{ color: '#A7B6C2', mb: 4, fontWeight: 400, letterSpacing: 1, zIndex: 1, textAlign: 'center' }}>
//         Innovative Synergy Solutions for a Connected World
//       </Typography>
//       {/* <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', zIndex: 1, px: 2 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           startIcon={<DescriptionIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#solutions"
//         >
//           Explore Solutions
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           startIcon={<GitHubIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#contact"
//         >
//           Contact Us
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#learn-more"
//         >
//           Learn More
//         </Button>
//       </Box> */}
//     </Box>
//   );
// };

// export default HomePage;





// import React, { useEffect, useRef, useState } from 'react'; // Import useState
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import DescriptionIcon from '@mui/icons-material/Description';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 160; // Increased size for sub-company circles
// const BASE_SUB_COMPANY_FONT_SIZE = '1.3rem'; // Adjusted font size for larger circles

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   // background: 'linear-gradient(120deg, rgba(45, 48, 17, 0.85) 60%, rgba(21, 237, 1, 0.31) 100%)',
//   background: 'linear-gradient(120deg,rgba(255, 0, 0, 0.27),rgba(255, 128, 0, 0.27),rgba(255, 255, 0, 0.27),rgba(0, 255, 0, 0.22),rgba(0, 0, 255, 0.27),rgba(76, 0, 130, 0.21),rgba(140, 0, 255, 0.26))',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8, // Slightly smaller on medium screens
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6, // Significantly smaller on small screens
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%) rotate(0deg)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// // PeripheralDiv is used by the Link component's sx prop, but this still defines its base styles.
// const PeripheralDiv = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_SUB_COMPANY_SIZE,
//   height: BASE_SUB_COMPANY_SIZE,
//   borderRadius: 12,
//   background: '#202B33', // Solid background for peripheral boxes
//   color: '#F5F8FA',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontWeight: 600,
//   fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   textAlign: 'center', // Center text for longer labels
//   padding: '0 8px', // Add padding to prevent text overflow
//   boxSizing: 'border-box', // Include padding in width/height
//   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//   cursor: 'pointer',
//   border: '2px solid #394B59',
//   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//   zIndex: 2,
//   opacity: 0,
//   '&:hover': {
//     background: '#30404D',
//     color: '#48AFF0',
//     border: '2px solid rgba(72, 176, 240, 0.37)',
//     boxShadow: '0 4px 24px rgba(16, 107, 163, 0.3)',
//   },

//   [theme.breakpoints.down('md')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.8,
//     height: BASE_SUB_COMPANY_SIZE * 0.8,
//     fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.6,
//     height: BASE_SUB_COMPANY_SIZE * 0.6,
//     fontSize: '0.9rem', // Smaller font size for mobile
//     borderRadius: 8,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   // minHeight is now handled by the sx prop for precise control
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);

//   // State to store the dynamic dimensions of the hero container
//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm') ? BASE_HEX_RADIUS * 0.5 :
//                         theme.breakpoints.down('md') ? BASE_HEX_RADIUS * 0.8 :
//                         BASE_HEX_RADIUS;

//   useEffect(() => {
//     // Function to update container dimensions
//     window.scrollTo(0, 0);
//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     // Set initial dimensions
//     updateDimensions();

//     // Add event listener for window resize
//     window.addEventListener('resize', updateDimensions);

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

//   // Calculate center dynamically based on actual container dimensions
//   // Use a fallback if dimensions are not yet available (e.g., during initial render)
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };
  
//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const positions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     // --- CRITICAL CLEANUP FOR REACT SPAs ---
//     window.scrollTo(0, 0);
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     gsap.globalTimeline.clear();
//     if (initialLogoRotationTweenRef.current) {
//       initialLogoRotationTweenRef.current.kill();
//       initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//       finalLogoRotationTweenRef.current.kill();
//       finalLogoRotationTweenRef.current = null;
//     }

//     // Ensure all referenced DOM elements are available before setting up animations
//     if (!heroRef.current || !logoRef.current || !blurBgRef.current || !peripheralLinksContainerRef.current || !linesSvgRef.current) {
//         return;
//     }

//     // --- Initial Continuous Logo Rotation ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         // *** ONLY CHANGE MADE HERE: Updated start to be relative to the viewport top with an offset ***
//         // This will make the animation start when the top of the trigger (HeroContainer)
//         // is at 1px from the viewport top. Adjust "1px" if you need a specific, very small offset.
//         // A value like "top top" usually means "when the top of the trigger hits the top of the viewport".
//         // If it's scrolling a bit before that, it indicates content *above* the trigger.
//         // To make it truly immediate, consider if your HeroContainer is the very first element in the scroll flow.
//         // However, if a tiny scroll is *always* happening, a small offset can 'pre-trigger' it.
//         // For 'truly immediate' at the very top of the scroll container, "top top" is correct.
//         // If the problem persists with "top top", it implies elements are pushing down heroRef.current.
//         // Given your previous description, "top top" should be the target.
//         start: "top 70vh", 
//         end: "+=2500",
//         scrub: 1,
//         pin: true,
//         // markers: true, // Uncomment for debugging scroll trigger
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play();
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill();
//             finalLogoRotationTweenRef.current = null;
//           }
//         },
//       },
//     });

//     // Animation for Logo: Return to static (0deg) position
//     tl.to(logoRef.current, {
//       rotate: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for Blur Background: Unblur and fade out
//     tl.to(blurBgRef.current, {
//       filter: 'blur(0px)',
//       opacity: 0,
//       duration: 0.5,
//     }, 0);

//     // Animation for LinesSVG: Fade in
//     tl.to(linesSvgRef.current, {
//         opacity: 1,
//         duration: 0.5,
//     }, 0.2);

//     // Animation for Sub-Company Links: Fade in and move up
//     tl.to(subCompanyElements, {
//       opacity: 1,
//       y: 0,
//       stagger: 0.1,
//       duration: 0.5,
//       ease: 'power1.out',
//     }, ">0.1");

//     // --- Final Continuous Logo Rotation ---
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();

//     ScrollTrigger.refresh();

//     // --- Cleanup function ---
//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, [currentRadius, containerDimensions]); // Re-run effect if radius or container dimensions change

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0 }}>
//       {/* This Box now serves as the solid dark background for the entire page */}
//       <Box
//         sx={{
//           position: 'fixed', // Use fixed to cover the entire viewport
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           minHeight: '100vh', // Ensure it covers at least the viewport height
//           zIndex: -1, // Place behind all content
//           background: '#121212', // Solid dark background color
//           filter: 'none', // No blur for the page background
//           borderRadius: '0', // No rounded corners for the full page background
//           pointerEvents: 'none', // Allows interaction with content above it
//         }}
//       />

//       <HeroContainer
//         ref={heroRef}
//         sx={{
//           // *** CRITICAL CHANGE HERE: Dynamically set height to fill viewport minus header ***
//           // Assuming a common header height of 56px on small screens and 64px on larger.
//           // Adjust these 'px' values if your actual header has a different fixed height.
//           height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           width: '100%',
//           maxWidth: { xs: '100%', md: 700, lg: 900 },
//           margin: '0 auto', // Center horizontally within the parent Box
//         }}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             height: '100%', // Inner box takes full height of HeroContainer
//             position: 'relative',
//             maxWidth: '100%',
//             overflow: 'hidden',
//           }}
//         >
//           <StyledBlurBackground ref={blurBgRef} />
//           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
//           {/* LinesSVG and peripheral links positioning based on current dimensions, they remain */}
//           <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//             {positions.map((pos, i) => (
//               <line
//                 key={i}
//                 x1={center.x}
//                 y1={center.y}
//                 x2={pos.x}
//                 y2={pos.y}
//                 stroke="#394B59"
//                 strokeWidth={3}
//                 strokeDasharray="8 6"
//               />
//             ))}
//           </LinesSVG>
//           <Box ref={peripheralLinksContainerRef}>
//             {positions.map((pos, i) => {
//               const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                             theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                             BASE_SUB_COMPANY_SIZE;
//               const offset = currentSubCompanySize / 2;

//               return (
//                 <Link
//                   key={i}
//                   component={RouterLink}
//                   to={SUB_COMPANIES[i].to}
//                   target='_blank'
//                   sx={{
//                     position: 'absolute',
//                     width: currentSubCompanySize,
//                     height: currentSubCompanySize,
//                     borderRadius: 12,
//                     background: '#202B33',
//                     color: '#F5F8FA',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: 600,
//                     fontSize: theme.breakpoints.down('sm') ? '0.9rem' : BASE_SUB_COMPANY_FONT_SIZE,
//                     textAlign: 'center',
//                     padding: '0 8px',
//                     boxSizing: 'border-box',
//                     boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                     cursor: 'pointer',
//                     border: '2px solid #394B59',
//                     transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                     zIndex: 2,
//                     left: pos.x - offset,
//                     top: pos.y - offset,
//                     textDecoration: 'none',
//                     opacity: 0, // Initial opacity for animation
//                     transform: 'translateY(20px)', // Initial position for animation
//                     '&:hover': {
//                       background: '#30404D',
//                       borderColor: '#48AFF0',
//                       color: 'rgba(16, 143, 163, 0.44)',
//                       boxShadow: '0 4px 24px rgba(16, 163, 26, 0.44)',
//                     },
//                   }}
//                 >
//                   {SUB_COMPANIES[i].label}
//                 </Link>
//               );
//             })}
//           </Box>
//         </Box>
//       </HeroContainer>
//       {/* Content below the hero section */}
//       <Typography variant="h2" sx={{ color: HERO_TEXT, fontWeight: 800, mt: 6, mb: 2, letterSpacing: 2, textShadow: '0 2px 12px #000', zIndex: 1, textAlign: 'center' }}>
//         Welcome to Helix Synergy Corp
//       </Typography>
//       <Typography variant="h5" sx={{ color: '#A7B6C2', mb: 4, fontWeight: 400, letterSpacing: 1, zIndex: 1, textAlign: 'center' }}>
//         Innovative Synergy Solutions for a Connected World
//       </Typography>
//       {/* <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', zIndex: 1, px: 2 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           startIcon={<DescriptionIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#solutions"
//         >
//           Explore Solutions
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           startIcon={<GitHubIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#contact"
//         >
//           Contact Us
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#learn-more"
//         >
//           Learn More
//         </Button>
//       </Box> */}
//     </Box>
//   );
// };

// export default HomePage;



// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import DescriptionIcon from '@mui/icons-material/Description';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 160; // Increased size for sub-company circles
// const BASE_SUB_COMPANY_FONT_SIZE = '1.3rem'; // Adjusted font size for larger circles

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'linear-gradient(120deg,rgba(255, 0, 0, 0.27),rgba(255, 128, 0, 0.27),rgba(255, 255, 0, 0.27),rgba(0, 255, 0, 0.22),rgba(0, 0, 255, 0.27),rgba(76, 0, 130, 0.21),rgba(140, 0, 255, 0.26))',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1, // Visible by default
//   filter: 'blur(10px)', // Blurred by default
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)', // Logo is centered initially
//   opacity: 1, // Visible by default
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const PeripheralDiv = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_SUB_COMPANY_SIZE,
//   height: BASE_SUB_COMPANY_SIZE,
//   borderRadius: 12,
//   background: '#202B33',
//   color: '#F5F8FA',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontWeight: 600,
//   fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   textAlign: 'center',
//   padding: '0 8px',
//   boxSizing: 'border-box',
//   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//   cursor: 'pointer',
//   border: '2px solid #394B59',
//   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//   zIndex: 2,
//   opacity: 0, // Initial opacity for animation
//   transform: 'translateY(20px)', // Initial position for animation (will move up slightly)
//   '&:hover': {
//     background: '#30404D',
//     color: '#48AFF0',
//     border: '2px solid rgba(72, 176, 240, 0.37)',
//     boxShadow: '0 4px 24px rgba(16, 107, 163, 0.3)',
//   },
//   [theme.breakpoints.down('md')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.8,
//     height: BASE_SUB_COMPANY_SIZE * 0.8,
//     fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.6,
//     height: BASE_SUB_COMPANY_SIZE * 0.6,
//     fontSize: '0.9rem',
//     borderRadius: 8,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0, // Initial opacity for animation
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);

//   // State to store the dynamic dimensions of the hero container
//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null); // Re-added for post-animation rotation

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm') ? BASE_HEX_RADIUS * 0.5 :
//                         theme.breakpoints.down('md') ? BASE_HEX_RADIUS * 0.8 :
//                         BASE_HEX_RADIUS;

//   useEffect(() => {
//     window.scrollTo(0, 0); // Ensure scroll to top on mount for consistent start

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []);

//   // Calculate center dynamically based on actual container dimensions
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };
  
//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const positions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     // --- CRITICAL CLEANUP FOR REACT SPAs ---
//     window.scrollTo(0, 0);
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     gsap.globalTimeline.clear();
//     if (initialLogoRotationTweenRef.current) {
//       initialLogoRotationTweenRef.current.kill();
//       initialLogoRotationTweenRef.current = null;
//     }
//     // Ensure final rotation tween is also killed
//     if (finalLogoRotationTweenRef.current) {
//       finalLogoRotationTweenRef.current.kill();
//       finalLogoRotationTweenRef.current = null;
//     }

//     // Ensure all referenced DOM elements are available
//     if (!heroRef.current || !logoRef.current || !blurBgRef.current || !peripheralLinksContainerRef.current || !linesSvgRef.current) {
//         return;
//     }

//     // --- Initial Continuous Logo Rotation (always active) ---
//     // This will start immediately and run until the scroll animation takes over.
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "center 310vh", // Animation starts when hero section center hits viewport center
//         end: "+=2500", // Animation duration over 2500px scroll
//         scrub: 1,
//         pin: true, // Pin the HeroContainer to the viewport during the animation
//         // markers: true, // Uncomment for debugging scroll trigger
//         onEnter: () => {
//           // Pause initial continuous rotation when scroll animation starts
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           // Play final continuous rotation when scroll animation ends
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           // Pause final continuous rotation when scrolling back into animation range
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           // Resume initial continuous rotation when scrolling back past the start point
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play();
//           }
//           // Ensure final rotation tween is killed if it was playing (optional, good for cleanup)
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill();
//             finalLogoRotationTweenRef.current = null;
//           }
//         },
//       },
//     });

//     // --- Animations within the scroll-triggered timeline ---
//     // Animation for Logo: Transition to static (0deg) during the scroll
//     tl.to(logoRef.current, {
//       rotate: 0,
//       duration: 0.5,
//     }, 0); // Start at the beginning of the timeline

//     // Animation for Blur Background: Unblur and fade out
//     tl.to(blurBgRef.current, {
//       filter: 'blur(0px)',
//       opacity: 0,
//       duration: 0.5,
//     }, 0); // Start at the beginning of the timeline

//     // Animation for LinesSVG: Fade in
//     tl.to(linesSvgRef.current, {
//         opacity: 1,
//         duration: 0.5,
//     }, 0.2); // Start slightly after previous animations

//     // Animation for Sub-Company Links: Fade in and move up
//     tl.to(subCompanyElements, {
//       opacity: 1,
//       y: 0, // Moves elements from translateY(20px) to their natural position
//       stagger: 0.1, // Staggered animation for each link
//       duration: 0.5,
//       ease: 'power1.out',
//     }, ">0.1"); // Start slightly after lines fade in

//     // --- Final Continuous Logo Rotation (starts after scroll animation ends) ---
//     // This tween will be paused initially and played by onLeave
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause(); // Pause it initially, it will be played by ScrollTrigger's onLeave

//     ScrollTrigger.refresh(); // Important to recalculate positions after initial renders

//     // --- Cleanup function ---
//     return () => {
//       tl.kill(); // Kill the main timeline
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill(); // Kill initial rotation
//         initialLogoRotationTweenRef.current = null;
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill(); // Kill final rotation
//         finalLogoRotationTweenRef.current = null;
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all active ScrollTriggers
//       gsap.globalTimeline.clear(); // Clear global GSAP timeline
//     };
//   }, [currentRadius, containerDimensions]); // Re-run effect if radius or container dimensions change

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0 }}>
//       {/* This Box now serves as the solid dark background for the entire page */}
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           minHeight: '100vh',
//           zIndex: -1,
//           background: '#121212',
//           filter: 'none',
//           borderRadius: '0',
//           pointerEvents: 'none',
//         }}
//       />

//       {/* Text elements - now outside HeroContainer, scroll naturally */}
//       <Typography
//         variant="h2"
//         sx={{
//           color: HERO_TEXT,
//           fontWeight: 800,
//           letterSpacing: 2,
//           textShadow: '0 2px 12px #000',
//           zIndex: 3,
//           textAlign: 'center',
//           fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//           mt: { xs: '80px', sm: '100px', md: '120px' }, // Adjust top margin as needed
//           px: 2, // Padding on sides for smaller screens
//         }}
//       >
//         Welcome to Helix Synergy Corp
//       </Typography>
//       <Typography
//         variant="h5"
//         sx={{
//           color: '#A7B6C2',
//           fontWeight: 400,
//           letterSpacing: 1,
//           zIndex: 3,
//           textAlign: 'center',
//           fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//           mt: 2, // Margin top relative to the main title
//           mb: 4, // Add bottom margin to separate from the hero section
//           px: 2,
//         }}
//       >
//         Innovative Synergy Solutions for a Connected World
//       </Typography>

//       <HeroContainer
//         ref={heroRef}
//         sx={{
//           // Height set to ensure the container itself takes up viewport space
//           height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           width: '100%',
//           maxWidth: { xs: '100%', md: 700, lg: 900 },
//           margin: '0 auto',
//           position: 'relative', // Ensure this is relative for its children
//         }}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             height: '100%',
//             position: 'relative',
//             maxWidth: '100%',
//             overflow: 'hidden',
//           }}
//         >
//           {/* Logo and Blur Background - visible and rotating by default */}
//           <StyledBlurBackground ref={blurBgRef} />
//           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
          
//           <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//             {positions.map((pos, i) => (
//               <line
//                 key={i}
//                 x1={center.x}
//                 y1={center.y}
//                 x2={pos.x}
//                 y2={pos.y}
//                 stroke="#394B59"
//                 strokeWidth={3}
//                 strokeDasharray="8 6"
//               />
//             ))}
//           </LinesSVG>
//           <Box ref={peripheralLinksContainerRef}>
//             {positions.map((pos, i) => {
//               const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                             theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                             BASE_SUB_COMPANY_SIZE;
//               const offset = currentSubCompanySize / 2;

//               return (
//                 <Link
//                   key={i}
//                   component={RouterLink}
//                   to={SUB_COMPANIES[i].to}
//                   target='_blank' 
//                   sx={{
//                     position: 'absolute',
//                     width: currentSubCompanySize,
//                     height: currentSubCompanySize,
//                     borderRadius: 12,
//                     background: '#202B33',
//                     color: '#F5F8FA',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: 600,
//                     fontSize: theme.breakpoints.down('sm') ? '0.9rem' : BASE_SUB_COMPANY_FONT_SIZE,
//                     textAlign: 'center',
//                     padding: '0 8px',
//                     boxSizing: 'border-box',
//                     boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                     cursor: 'pointer',
//                     border: '2px solid #394B59',
//                     transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                     zIndex: 2,
//                     left: pos.x - offset,
//                     top: pos.y - offset,
//                     textDecoration: 'none',
//                     opacity: 0, // Initial opacity for animation
//                     transform: 'translateY(20px)', // Initial position for animation
//                     '&:hover': {
//                       background: '#30404D',
//                       borderColor: '#48AFF0',
//                       color: 'rgba(16, 143, 163, 0.44)',
//                       boxShadow: '0 4px 24px rgba(16, 163, 26, 0.44)',
//                     },
//                   }}
//                 >
//                   {SUB_COMPANIES[i].label}
//                 </Link>
//               );
//             })}
//           </Box>
//         </Box>
//       </HeroContainer>

//       {/* Content below the hero section */}
//       <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', zIndex: 1, px: 2, mt: 8 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           startIcon={<DescriptionIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#solutions"
//         >
//           Explore Solutions
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           startIcon={<GitHubIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#contact"
//         >
//           Contact Us
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#learn-more"
//         >
//           Learn More
//         </Button>
//       </Box>
//       <Box sx={{ mt: 8, pb: 4, textAlign: 'center', color: '#A7B6C2', zIndex: 1 }}>
//         <Typography variant="body2">
//           © {new Date().getFullYear()} Helix Synergy Corp. All rights reserved.
//         </Typography>
//       </Box>
      
//       {/* Scroll to top button */}
//       <Button
//         variant="contained"
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
//         sx={{
//           position: 'fixed',
//           bottom: 20,
//           right: 20,
//           zIndex: 1000,
//           backgroundColor: '#16A085',
//           '&:hover': {
//             backgroundColor: '#138D75',
//           },
//           borderRadius: '50%',
//           width: 50,
//           height: 50,
//           minWidth: 0,
//           padding: 0,
//           opacity: 0,
//           pointerEvents: 'none',
//           transition: 'opacity 0.3s ease-in-out',
//         }}
//         className="scroll-to-top-button" 
//       >
//         <Typography sx={{ fontSize: '1.5rem', lineHeight: 1 }}>↑</Typography>
//       </Button>
//     </Box>
//   );
// };

// export default HomePage;



// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import DescriptionIcon from '@mui/icons-material/Description';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 160; // Increased size for sub-company circles
// const BASE_SUB_COMPANY_FONT_SIZE = '1.3rem'; // Adjusted font size for larger circles

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'linear-gradient(120deg,rgba(255, 0, 0, 0.27),rgba(255, 128, 0, 0.27),rgba(255, 255, 0, 0.27),rgba(0, 255, 0, 0.22),rgba(0, 0, 255, 0.27),rgba(76, 0, 130, 0.21),rgba(140, 0, 255, 0.26))',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1, // Visible by default
//   filter: 'blur(10px)', // Blurred by default
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)', // Logo is centered initially
//   opacity: 1, // Visible by default
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const PeripheralDiv = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_SUB_COMPANY_SIZE,
//   height: BASE_SUB_COMPANY_SIZE,
//   borderRadius: 12,
//   background: '#202B33',
//   color: '#F5F8FA',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontWeight: 600,
//   fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   textAlign: 'center',
//   padding: '0 8px',
//   boxSizing: 'border-box',
//   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//   cursor: 'pointer',
//   border: '2px solid #394B59',
//   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//   zIndex: 2,
//   opacity: 0, // Initial opacity for animation
//   transform: 'translateY(20px)', // Initial position for animation (will move up slightly)
//   '&:hover': {
//     background: '#30404D',
//     color: '#48AFF0',
//     border: '2px solid rgba(72, 176, 240, 0.37)',
//     boxShadow: '0 4px 24px rgba(16, 107, 163, 0.3)',
//   },
//   [theme.breakpoints.down('md')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.8,
//     height: BASE_SUB_COMPANY_SIZE * 0.8,
//     fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.6,
//     height: BASE_SUB_COMPANY_SIZE * 0.6,
//     fontSize: '0.9rem',
//     borderRadius: 8,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0, // Initial opacity for animation
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);

//   // State to store the dynamic dimensions of the hero container
//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null); 

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm') ? BASE_HEX_RADIUS * 0.5 :
//                         theme.breakpoints.down('md') ? BASE_HEX_RADIUS * 0.8 :
//                         BASE_HEX_RADIUS;

//   useEffect(() => {
//     window.scrollTo(0, 0); // Ensure scroll to top on mount for consistent start

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []);

//   // Calculate center dynamically based on actual container dimensions
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };
  
//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const positions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     // --- CRITICAL CLEANUP FOR REACT SPAs ---
//     window.scrollTo(0, 0);
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     gsap.globalTimeline.clear();
//     if (initialLogoRotationTweenRef.current) {
//       initialLogoRotationTweenRef.current.kill();
//       initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//       finalLogoRotationTweenRef.current.kill();
//       finalLogoRotationTweenRef.current = null;
//     }

//     // Ensure all referenced DOM elements are available
//     if (!heroRef.current || !logoRef.current || !blurBgRef.current || !peripheralLinksContainerRef.current || !linesSvgRef.current) {
//         return;
//     }

//     // --- Initial Continuous Logo Rotation (always active) ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "center center", 
//         end: "+=2500",
//         scrub: 1,
//         pin: true,
//         // markers: true, // Uncomment for debugging scroll trigger
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play();
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill();
//             finalLogoRotationTweenRef.current = null;
//           }
//         },
//       },
//     });

//     // --- Animations within the scroll-triggered timeline ---
//     tl.to(logoRef.current, {
//       rotate: 0,
//       duration: 0.5,
//     }, 0);

//     tl.to(blurBgRef.current, {
//       filter: 'blur(0px)',
//       opacity: 0,
//       duration: 0.5,
//     }, 0);

//     tl.to(linesSvgRef.current, {
//         opacity: 1,
//         duration: 0.5,
//     }, 0.2);

//     tl.to(subCompanyElements, {
//       opacity: 1,
//       y: 0, 
//       stagger: 0.1,
//       duration: 0.5,
//       ease: 'power1.out',
//     }, ">0.1");

//     // --- Final Continuous Logo Rotation (starts after scroll animation ends) ---
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause(); 

//     ScrollTrigger.refresh();

//     // --- Cleanup function ---
//     return () => {
//       tl.kill(); 
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, [currentRadius, containerDimensions]); 

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0 }}>
//       {/* This Box now serves as the solid dark background for the entire page */}
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           minHeight: '100vh',
//           zIndex: -1,
//           background: '#121212', // Keep a dark base
//           // --- ADDED: Subtle radial gradients for light effects ---
//           backgroundImage: `
//             radial-gradient(circle at 10% 20%, rgba(100, 255, 200, 0.05) 0%, transparent 50%),
//             radial-gradient(circle at 90% 80%, rgba(200, 100, 255, 0.05) 0%, transparent 50%),
//             radial-gradient(circle at 50% 50%, rgba(255, 255, 150, 0.03) 0%, transparent 50%)
//           `,
//           // -----------------------------------------------------
//           filter: 'none',
//           borderRadius: '0',
//           pointerEvents: 'none',
//         }}
//       />

//       {/* Text elements - now outside HeroContainer, scroll naturally */}
//       <Typography
//         variant="h2"
//         sx={{
//           color: HERO_TEXT,
//           fontWeight: 800,
//           letterSpacing: 2,
//           textShadow: '0 2px 12px #000',
//           zIndex: 3,
//           textAlign: 'center',
//           fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//           mt: { xs: '80px', sm: '100px', md: '120px' }, 
//           px: 2, 
//         }}
//       >
//         Welcome to Helix Synergy Corp
//       </Typography>
//       <Typography
//         variant="h5"
//         sx={{
//           color: '#A7B6C2',
//           fontWeight: 400,
//           letterSpacing: 1,
//           zIndex: 3,
//           textAlign: 'center',
//           fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//           mt: 2, 
//           mb: 4, 
//           px: 2,
//         }}
//       >
//         Innovative Synergy Solutions for a Connected World
//       </Typography>

//       <HeroContainer
//         ref={heroRef}
//         sx={{
//           height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           width: '100%',
//           maxWidth: { xs: '100%', md: 700, lg: 900 },
//           margin: '0 auto',
//           position: 'relative', 
//         }}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             height: '100%',
//             position: 'relative',
//             maxWidth: '100%',
//             overflow: 'hidden',
//           }}
//         >
//           {/* Logo and Blur Background - visible and rotating by default */}
//           <StyledBlurBackground ref={blurBgRef} />
//           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
          
//           <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//             {positions.map((pos, i) => (
//               <line
//                 key={i}
//                 x1={center.x}
//                 y1={center.y}
//                 x2={pos.x}
//                 y2={pos.y}
//                 stroke="#394B59"
//                 strokeWidth={3}
//                 strokeDasharray="8 6"
//               />
//             ))}
//           </LinesSVG>
//           <Box ref={peripheralLinksContainerRef}>
//             {positions.map((pos, i) => {
//               const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                             theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                             BASE_SUB_COMPANY_SIZE;
//               const offset = currentSubCompanySize / 2;

//               return (
//                 <Link
//                   key={i}
//                   component={RouterLink}
//                   to={SUB_COMPANIES[i].to}
//                   target='_blank' 
//                   sx={{
//                     position: 'absolute',
//                     width: currentSubCompanySize,
//                     height: currentSubCompanySize,
//                     borderRadius: 12,
//                     background: '#202B33',
//                     color: '#F5F8FA',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: 600,
//                     fontSize: theme.breakpoints.down('sm') ? '0.9rem' : BASE_SUB_COMPANY_FONT_SIZE,
//                     textAlign: 'center',
//                     padding: '0 8px',
//                     boxSizing: 'border-box',
//                     boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                     cursor: 'pointer',
//                     border: '2px solid #394B59',
//                     transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                     zIndex: 2,
//                     left: pos.x - offset,
//                     top: pos.y - offset,
//                     textDecoration: 'none',
//                     opacity: 0, 
//                     transform: 'translateY(20px)', 
//                     '&:hover': {
//                       background: '#30404D',
//                       borderColor: '#48AFF0',
//                       color: 'rgba(16, 143, 163, 0.44)',
//                       boxShadow: '0 4px 24px rgba(16, 163, 26, 0.44)',
//                     },
//                   }}
//                 >
//                   {SUB_COMPANIES[i].label}
//                 </Link>
//               );
//             })}
//           </Box>
//         </Box>
//       </HeroContainer>

//       {/* Content below the hero section */}
//       <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', zIndex: 1, px: 2, mt: 8 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           startIcon={<DescriptionIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#solutions"
//         >
//           Explore Solutions
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           startIcon={<GitHubIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#contact"
//         >
//           Contact Us
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#learn-more"
//         >
//           Learn More
//         </Button>
//       </Box>
//       <Box sx={{ mt: 8, pb: 4, textAlign: 'center', color: '#A7B6C2', zIndex: 1 }}>
//         <Typography variant="body2">
//           © {new Date().getFullYear()} Helix Synergy Corp. All rights reserved.
//         </Typography>
//       </Box>

      
//       {/* Scroll to top button */}
//       <Button
//         variant="contained"
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
//         sx={{
//           position: 'fixed',
//           bottom: 20,
//           right: 20,
//           zIndex: 1000,
//           backgroundColor: '#16A085',
//           '&:hover': {
//             backgroundColor: '#138D75',
//           },
//           borderRadius: '50%',
//           width: 50,
//           height: 50,
//           minWidth: 0,
//           padding: 0,
//           opacity: 0,
//           pointerEvents: 'none',
//           transition: 'opacity 0.3s ease-in-out',
//         }}
//         className="scroll-to-top-button" 
//       >
//         <Typography sx={{ fontSize: '1.5rem', lineHeight: 1 }}>↑</Typography>
//       </Button>
//     </Box>
//   );
// };


// export default HomePage;











// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import DescriptionIcon from '@mui/icons-material/Description';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 160; // Increased size for sub-company circles
// const BASE_SUB_COMPANY_FONT_SIZE = '1.3rem'; // Adjusted font size for larger circles

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   // clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
//   // borderRadius: '0', // Reset borderRadius as clipPath defines the shape
//   borderRadius: '20%',
//   // background: 'linear-gradient(120deg,rgba(255, 0, 0, 0.27),rgba(255, 128, 0, 0.27),rgba(255, 255, 0, 0.27),rgba(0, 255, 0, 0.22),rgba(0, 0, 255, 0.27),rgba(76, 0, 130, 0.21),rgba(140, 0, 255, 0.26))',
//   background: 'rgba(255, 255, 255, 0.18)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1, // Visible by default
//   filter: 'blur(10px)', // Blurred by default
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)', // Logo is centered initially
//   opacity: 1, // Visible by default
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const PeripheralDiv = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_SUB_COMPANY_SIZE,
//   height: BASE_SUB_COMPANY_SIZE,
//   borderRadius: 12,
//   background: '#202B33',
//   color: '#F5F8FA',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontWeight: 600,
//   fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   textAlign: 'center',
//   padding: '0 8px',
//   boxSizing: 'border-box',
//   boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//   cursor: 'pointer',
//   border: '2px solid #394B59',
//   transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//   zIndex: 2,
//   opacity: 0, // Initial opacity for animation
//   transform: 'translateY(20px)', // Initial position for animation (will move up slightly)
//   '&:hover': {
//     background: '#30404D',
//     color: '#48AFF0',
//     border: '2px solid rgba(72, 176, 240, 0.37)',
//     boxShadow: '0 4px 24px rgba(16, 107, 163, 0.3)',
//   },
//   [theme.breakpoints.down('md')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.8,
//     height: BASE_SUB_COMPANY_SIZE * 0.8,
//     fontSize: BASE_SUB_COMPANY_FONT_SIZE,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_SUB_COMPANY_SIZE * 0.6,
//     height: BASE_SUB_COMPANY_SIZE * 0.6,
//     fontSize: '0.9rem',
//     borderRadius: 8,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0, // Initial opacity for animation
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);

//   // State to store the dynamic dimensions of the hero container
//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null); 

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm') ? BASE_HEX_RADIUS * 0.5 :
//                         theme.breakpoints.down('md') ? BASE_HEX_RADIUS * 0.8 :
//                         BASE_HEX_RADIUS;

//   useEffect(() => {
//     window.scrollTo(0, 0); // Ensure scroll to top on mount for consistent start

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []);

//   // Calculate center dynamically based on actual container dimensions
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };
  
//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const positions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     // --- CRITICAL CLEANUP FOR REACT SPAs ---
//     window.scrollTo(0, 0);
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     gsap.globalTimeline.clear();
//     if (initialLogoRotationTweenRef.current) {
//       initialLogoRotationTweenRef.current.kill();
//       initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//       finalLogoRotationTweenRef.current.kill();
//       finalLogoRotationTweenRef.current = null;
//     }

//     // Ensure all referenced DOM elements are available
//     if (!heroRef.current || !logoRef.current || !blurBgRef.current || !peripheralLinksContainerRef.current || !linesSvgRef.current) {
//         return;
//     }

//     // --- Initial Continuous Logo Rotation (always active) ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "center center", 
//         end: "+=2500",
//         scrub: 1,
//         pin: true,
//         // markers: true, // Uncomment for debugging scroll trigger
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play();
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill();
//             finalLogoRotationTweenRef.current = null;
//           }
//         },
//       },
//     });

//     // --- Animations within the scroll-triggered timeline ---
//     tl.to(logoRef.current, {
//       rotate: 0,
//       duration: 0.5,
//     }, 0);

//     tl.to(blurBgRef.current, {
//       filter: 'blur(0px)',
//       opacity: 0,
//       duration: 0.5,
//     }, 0);

//     tl.to(linesSvgRef.current, {
//         opacity: 1,
//         duration: 0.5,
//     }, 0.2);

//     tl.to(subCompanyElements, {
//       opacity: 1,
//       y: 0, 
//       stagger: 0.1,
//       duration: 0.5,
//       ease: 'power1.out',
//     }, ">0.1");

//     // --- Final Continuous Logo Rotation (starts after scroll animation ends) ---
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause(); 

//     ScrollTrigger.refresh();

//     // --- Cleanup function ---
//     return () => {
//       tl.kill(); 
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, [currentRadius, containerDimensions]); 

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0 }}>
//       {/* This Box now serves as the solid dark background for the entire page */}
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           minHeight: '100vh',
//           zIndex: -1,
//           // --- UPDATED: Stronger, more colorful gradients, including white ---
//           background: '#0A0A0A', // Darker base for maximum contrast with bright gradients
//           backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%), /* Bright White */
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),   /* Vibrant Magenta */
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),   /* Vibrant Cyan */
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)    /* Vibrant Yellow */
//           `,
//           // -------------------------------------------------------------------
//           filter: 'none',
//           borderRadius: '0',
//           pointerEvents: 'none',
//         }}
//       />

//       {/* Text elements - now outside HeroContainer, scroll naturally */}
//       <Typography
//         variant="h2"
//         sx={{
//           color: HERO_TEXT,
//           fontWeight: 800,
//           letterSpacing: 2,
//           textShadow: '0 2px 12px #000',
//           zIndex: 3,
//           textAlign: 'center',
//           fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//           mt: { xs: '80px', sm: '100px', md: '120px' }, 
//           px: 2, 
//         }}
//       >
//         Welcome to Helix Synergy Corp
//       </Typography>
//       <Typography
//         variant="h5"
//         sx={{
//           color: '#A7B6C2',
//           fontWeight: 400,
//           letterSpacing: 1,
//           zIndex: 3,
//           textAlign: 'center',
//           fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//           mt: 2,
//           mb: 4, // Added bottom margin to prevent overlap with pinned hero
//           px: 2,
//         }}
//       >
//         Innovative Synergy Solutions for a Connected World
//       </Typography>

//       <HeroContainer
//         ref={heroRef}
//         sx={{
//           height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           width: '100%',
//           maxWidth: { xs: '100%', md: 700, lg: 900 },
//           margin: '0 auto',
//           position: 'relative', 
//         }}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             height: '100%',
//             position: 'relative',
//             maxWidth: '100%',
//             overflow: 'hidden',
//           }}
//         >
//           {/* Logo and Blur Background - visible and rotating by default */}
//           <StyledBlurBackground ref={blurBgRef} />
//           <CenterLogo ref={logoRef} src={logo} alt="Logo" />
          
//           <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//             {positions.map((pos, i) => (
//               <line
//                 key={i}
//                 x1={center.x}
//                 y1={center.y}
//                 x2={pos.x}
//                 y2={pos.y}
//                 stroke="#394B59"
//                 strokeWidth={3}
//                 strokeDasharray="8 6"
//               />
//             ))}
//           </LinesSVG>
//           <Box ref={peripheralLinksContainerRef}>
//             {positions.map((pos, i) => {
//               const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                             theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                             BASE_SUB_COMPANY_SIZE;
//               const offset = currentSubCompanySize / 2;

//               return (
//                 <Link
//                   key={i}
//                   component={RouterLink}
//                   to={SUB_COMPANIES[i].to}
//                   target='_blank' 
//                   sx={{
//                     position: 'absolute',
//                     width: currentSubCompanySize,
//                     height: currentSubCompanySize,
//                     borderRadius: 12,
//                     background: '#202B33',
//                     color: '#F5F8FA',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: 600,
//                     fontSize: theme.breakpoints.down('sm') ? '0.9rem' : BASE_SUB_COMPANY_FONT_SIZE,
//                     textAlign: 'center',
//                     padding: '0 8px',
//                     boxSizing: 'border-box',
//                     boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                     cursor: 'pointer',
//                     border: '2px solid #394B59',
//                     transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                     zIndex: 2,
//                     left: pos.x - offset,
//                     top: pos.y - offset,
//                     textDecoration: 'none',
//                     opacity: 0, 
//                     transform: 'translateY(20px)', 
//                     '&:hover': {
//                       background: '#30404D',
//                       borderColor: '#48AFF0',
//                       color: 'rgba(16, 143, 163, 0.44)',
//                       boxShadow: '0 4px 24px rgba(16, 163, 26, 0.44)',
//                     },
//                   }}
//                 >
//                   {SUB_COMPANIES[i].label}
//                 </Link>
//               );
//             })}
//           </Box>
//         </Box>
//       </HeroContainer>

//       {/* Content below the hero section */}
//       {/* <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', zIndex: 1, px: 2, mt: 8 }}>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           startIcon={<DescriptionIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#solutions"
//         >
//           Explore Solutions
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           startIcon={<GitHubIcon />}
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#contact"
//         >
//           Contact Us
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           size="large"
//           sx={{
//             backgroundImage: 'linear-gradient(to right, #16A085 0%, #F4D03F 51%, #16A085 100%)',
//             backgroundSize: '200% auto',
//             color: 'white',
//             boxShadow: '0 0 20px #eee',
//             borderRadius: '10px',
//             margin: '10px',
//             padding: '15px 45px',
//             textTransform: 'uppercase',
//             transition: '0.5s',
//             display: 'block',
//             border: 'none',
//             '&:hover': {
//               backgroundPosition: 'right center',
//               color: '#fff',
//               textDecoration: 'none',
//             },
//           }}
//           href="#learn-more"
//         >
//           Learn More
//         </Button>
//       </Box> */}
      
      
//       {/* Scroll to top button */}
//       <Button
//         variant="contained"
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
//         sx={{
//           position: 'fixed',
//           bottom: 20,
//           right: 20,
//           zIndex: 1000,
//           backgroundColor: '#16A085',
//           '&:hover': {
//             backgroundColor: '#138D75',
//           },
//           borderRadius: '50%',
//           width: 50,
//           height: 50,
//           minWidth: 0,
//           padding: 0,
//           opacity: 0,
//           pointerEvents: 'none',
//           transition: 'opacity 0.3s ease-in-out',
//         }}
//         className="scroll-to-top-button" 
//       >
//         <Typography sx={{ fontSize: '1.5rem', lineHeight: 1 }}>↑</Typography>
//       </Button>
//     </Box>
//   );
// };

// export default HomePage;


// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 160; // Increased size for sub-company circles
// const BASE_SUB_COMPANY_FONT_SIZE = '1.3rem'; // Adjusted font size for larger circles

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%', // Modernized to 20% border radius
//   background: 'rgba(255, 255, 255, 0.18)', // Subtle white background
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1, // Visible by default
//   filter: 'blur(10px)', // Blurred by default
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%', // Modernized to 20% border radius
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)', // Logo is centered initially
//   opacity: 1, // Visible by default
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0, // Initial opacity for animation
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   // State to store the dynamic dimensions of the hero container
//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.5
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   useEffect(() => {
//     window.scrollTo(0, 0); // Ensure scroll to top on mount for consistent start

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []);

//   // Calculate center dynamically based on actual container dimensions
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const positions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     // --- CRITICAL CLEANUP FOR REACT SPAs ---
//     // Ensure all ScrollTriggers and GSAP tweens are killed on unmount or re-render
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     gsap.globalTimeline.clear();

//     if (initialLogoRotationTweenRef.current) {
//       initialLogoRotationTweenRef.current.kill();
//       initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//       finalLogoRotationTweenRef.current.kill();
//       finalLogoRotationTweenRef.current = null;
//     }

//     // Ensure all referenced DOM elements are available
//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     // --- Initial Continuous Logo Rotation (always active until scroll animation) ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children);

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500', // Extend the scroll distance for animation
//         scrub: 1, // Smoothly link animation to scroll position
//         pin: true, // Pin the hero section during animation
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause(); // Pause initial rotation when entering scroll trigger
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play(); // Play final rotation when leaving scroll trigger
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause(); // Pause final rotation when scrolling back into trigger
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play(); // Resume initial rotation when scrolling back out
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill(); // Kill final rotation if we scroll back to top
//             finalLogoRotationTweenRef.current = null;
//           }
//         },
//       },
//     });

//     // --- Animations within the scroll-triggered timeline ---
//     // Logo stops rotating and blur fades out
//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0, // Stop rotation
//         duration: 0.8, // Slightly longer duration for smoother stop
//         ease: 'power2.out',
//       },
//       0
//     ) // Start at the beginning of the timeline
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)', // Unblur
//           opacity: 0, // Fade out
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       ) // Start at the beginning of the timeline
//       // Lines appear
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0, // Slower fade in for lines
//           ease: 'power1.inOut',
//         },
//         0.3
//       ) // Start slightly after logo/blur animation begins
//       // Peripheral elements fade in and slide up
//       .fromTo(
//         subCompanyElements,
//         {
//           opacity: 0,
//           y: 20, // Start 20px below their final position
//           scale: 0.8, // Start smaller
//         },
//         {
//           opacity: 1,
//           y: 0, // End at their calculated position
//           scale: 1, // End at full size
//           stagger: 0.08, // Stagger their appearance
//           duration: 0.7, // Smooth reveal duration
//           ease: 'back.out(1.7)', // Nice bouncy ease
//         },
//         '>-0.2'
//       ); // Start 0.2 seconds before the previous animation ends for overlap

//     // --- Final Continuous Logo Rotation (starts after scroll animation ends) ---
//     // This tween will only be played when the ScrollTrigger "onLeave" callback fires
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: 360,
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause(); // Start paused

//     // --- Scroll to Top Button Animation ---
//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top', // Show button when 20% of the hero section is scrolled past
//         // end: 'bottom 100%', // Hide button when hero section is fully in view again (on scroll up)
//         toggleActions: 'play none none reverse', // play on scroll down, reverse on scroll up
//       },
//     });

//     ScrollTrigger.refresh(); // Recalculate all ScrollTrigger positions

//     // --- Cleanup function ---
//     return () => {
//       tl.kill(); // Kill the main timeline
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
//       gsap.globalTimeline.clear(); // Clear GSAP's global timeline
//     };
//   }, [currentRadius, containerDimensions]); // Re-run if radius or container dimensions change

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//       {/* This Box now serves as the solid dark background for the entire page */}
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           minHeight: '100vh',
//           zIndex: -1,
//           // --- UPDATED: Stronger, more colorful gradients, including white ---
//           background: '#0A0A0A', // Darker base for maximum contrast with bright gradients
//           backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%), /* Bright White */
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),   /* Vibrant Magenta */
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),   /* Vibrant Cyan */
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)    /* Vibrant Yellow */
//           `,
//           // -------------------------------------------------------------------
//           filter: 'none',
//           borderRadius: '0',
//           pointerEvents: 'none',
//         }}
//       />

//       {/* Text elements - now outside HeroContainer, scroll naturally */}
//       <Typography
//         variant="h2"
//         sx={{
//           color: HERO_TEXT,
//           fontWeight: 800,
//           letterSpacing: 2,
//           textShadow: '0 2px 12px #000',
//           zIndex: 3,
//           textAlign: 'center',
//           fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//           mt: { xs: '80px', sm: '100px', md: '120px' },
//           px: 2,
//         }}
//       >
//         Welcome to Helix Synergy Corp
//       </Typography>
//       <Typography
//         variant="h5"
//         sx={{
//           color: '#A7B6C2',
//           fontWeight: 400,
//           letterSpacing: 1,
//           zIndex: 3,
//           textAlign: 'center',
//           fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//           mt: 2,
//           mb: 8, // Increased bottom margin to give more scroll space before pinning
//           px: 2,
//         }}
//       >
//         Innovative Synergy Solutions for a Connected World
//       </Typography>

//       <HeroContainer
//         ref={heroRef}
//         sx={{
//           height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//           width: '100%',
//           maxWidth: { xs: '100%', md: 700, lg: 900 },
//           margin: '0 auto',
//           position: 'relative',
//         }}
//       >
//         <Box
//           sx={{
//             width: '100%',
//             height: '100%',
//             position: 'relative',
//             maxWidth: '100%',
//             overflow: 'hidden',
//           }}
//         >
//           {/* Logo and Blur Background - visible and rotating by default */}
//           <StyledBlurBackground ref={blurBgRef} />
//           <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//           <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//             {positions.map((pos, i) => (
//               <line
//                 key={i}
//                 x1={center.x}
//                 y1={center.y}
//                 x2={pos.x}
//                 y2={pos.y}
//                 stroke="#394B59"
//                 strokeWidth={3}
//                 strokeDasharray="8 6" // Dashed line effect
//               />
//             ))}
//           </LinesSVG>
//           <Box ref={peripheralLinksContainerRef}>
//             {positions.map((pos, i) => {
//               const currentSubCompanySize = theme.breakpoints.down('sm')
//                 ? BASE_SUB_COMPANY_SIZE * 0.6
//                 : theme.breakpoints.down('md')
//                 ? BASE_SUB_COMPANY_SIZE * 0.8
//                 : BASE_SUB_COMPANY_SIZE;
//               const offset = currentSubCompanySize / 2;

//               return (
//                 <Link
//                   key={i}
//                   component={RouterLink}
//                   to={SUB_COMPANIES[i].to}
//                   target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'} // Open external links in new tab
//                   sx={{
//                     position: 'absolute',
//                     width: currentSubCompanySize,
//                     height: currentSubCompanySize,
//                     borderRadius: 12, // Modernized border radius
//                     background: '#202B33',
//                     color: '#F5F8FA',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontWeight: 600,
//                     fontSize: theme.breakpoints.down('sm') ? '0.9rem' : BASE_SUB_COMPANY_FONT_SIZE,
//                     textAlign: 'center',
//                     padding: '0 8px',
//                     boxSizing: 'border-box',
//                     boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                     cursor: 'pointer',
//                     border: '2px solid #394B59',
//                     transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                     zIndex: 2,
//                     left: pos.x - offset,
//                     top: pos.y - offset,
//                     textDecoration: 'none',
//                     opacity: 0, // Initial opacity for GSAP animation
//                     transform: 'translateY(20px)', // Initial position for GSAP animation
//                     '&:hover': {
//                       background: '#30404D',
//                       borderColor: '#48AFF0', // Highlight border
//                       color: '#48AFF0', // Highlight text
//                       boxShadow: '0 4px 24px rgba(72, 175, 240, 0.4)', // Vibrant shadow on hover
//                     },
//                   }}
//                 >
//                   {SUB_COMPANIES[i].label}
//                 </Link>
//               );
//             })}
//           </Box>
//         </Box>
//       </HeroContainer>

      

//        {/* Scroll to top button */}
//        <Button
//         ref={scrollToTopButtonRef}
//         variant="contained"
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         sx={{
//           position: 'fixed',
//           bottom: 60,
//           right: 20,
//           zIndex: 100000,
//           backgroundColor: '#16A085',
//           '&:hover': {
//             backgroundColor: '#138D75',
//           },
//           borderRadius: '50%',
//           width: 30, // Adjusted width
//           height: 30, // Adjusted height
//           minWidth: 0,
//           padding: 0,
//           opacity: 0, // Initially hidden, controlled by ScrollTrigger
//           pointerEvents: 'none', // Initially no pointer events, controlled by ScrollTrigger
//           transition: 'opacity 0.3s ease-in-out',
//         }}
//         className="scroll-to-top-button"
//       >
//         {/* Replaced Typography with ArrowUpwardIcon */}
//         <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} /> 
//       </Button>
//     </Box>
//   );
// };

// export default HomePage;


















// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 160; // Increased size for sub-company circles
// const BASE_SUB_COMPANY_FONT_SIZE = '1.3rem'; // Adjusted font size for larger circles

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%', // Modernized to 20% border radius
//   background: 'rgba(255, 255, 255, 0.18)', // Subtle white background
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1, // Will be set to 0 by GSAP initially
//   filter: 'blur(10px)', // Will be unblurred by GSAP
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%', // Modernized to 20% border radius
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)', // Logo is centered initially
//   opacity: 1, // Will be set to 0 by GSAP initially
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0, // Initial opacity for animation
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.5
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   // This useEffect handles page scroll-to-top and container dimension updates
//   // It runs once on mount.
//   useEffect(() => {
//     window.scrollTo(0, 0); // Ensure scroll to top on mount for consistent start

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []); // Empty dependency array means it runs once on mount

//   // NEW: This useEffect handles the entry animation for logo and blur background
//   // It runs on every mount (refresh or re-route to homepage).
//   useEffect(() => {
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     // Ensure all previous GSAP animations on these elements are killed
//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);

//     // Initial state for the entry animation: invisible and scaled down
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 }); // Ensure initial rotation is reset

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         // Once the entry animation is complete, start the continuous clockwise rotation
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], { // Pop up
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, { // Fast anti-clockwise rotation
//         rotate: -720, // Two full rotations anti-clockwise
//         duration: 1.5,
//         ease: 'power3.inOut',
//         // By default, GSAP will handle the transition from -720 to the next rotate value
//         // of the initialLogoRotationTweenRef, making it smooth.
//       }, ">-0.4"); // Overlap with pop-up slightly

//     // Cleanup for this specific entry animation
//     return () => {
//       entryAnimationTl.kill(); // Kill the entry animation timeline on unmount
//     };
//   }, []); // Run only once on mount (which happens on refresh/re-route)


//   // Calculate center dynamically based on actual container dimensions
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   // Store initial calculated positions for the peripheral elements
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   // This useEffect handles the main page animations (scroll-triggered, continuous rotations)
//   useEffect(() => {
//     // CRITICAL CLEANUP FOR REACT SPAs
//     // Ensure all ScrollTriggers and GSAP tweens are killed on unmount or re-render
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     // Only clear globalTimeline if absolutely necessary and not affecting other parts
//     // gsap.globalTimeline.clear(); // Removing this as it can be aggressive

//     // Kill previous instances of these specific tweens
//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }

//     // Ensure all referenced DOM elements are available for main animations
//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     // --- Initial Continuous Logo Rotation (always active until scroll animation) ---
//     // This tween is now defined here. It starts paused and will be played by the
//     // `entryAnimationTl`'s onComplete. It will spin from whatever rotation the
//     // entry animation left it at.
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360', // Add 360 degrees to current rotation for continuous spin
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true, // Start paused, played by entry animation
//     });


//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500', // Extend the scroll distance for animation
//         scrub: 1, // Smoothly link animation to scroll position
//         pin: true, // Pin the hero section during animation
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause(); // Pause initial rotation when entering scroll trigger
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play(); // Play final rotation when leaving scroll trigger
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause(); // Pause final rotation when scrolling back into trigger
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play(); // Resume initial rotation when scrolling back out
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill(); // Kill final rotation if we scroll back to top
//             finalLogoRotationTweenRef.current = null;
//           }
//         },
//       },
//     });

//     // --- Animations within the scroll-triggered timeline ---
//     // Logo stops rotating and blur fades out
//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0, // Stop rotation
//         duration: 0.8, // Slightly longer duration for smoother stop
//         ease: 'power2.out',
//       },
//       0
//     ) // Start at the beginning of the timeline
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)', // Unblur
//           opacity: 0, // Fade out
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       ) // Start at the beginning of the timeline
//       // Lines appear
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0, // Slower fade in for lines
//           ease: 'power1.inOut',
//         },
//         0.3
//       ); // Start slightly after logo/blur animation begins

//     // --- GRAVITATIONAL PULL ANIMATION ADDITION ---
//     // Calculate initial distant positions for gravitational pull
//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                    theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                    BASE_SUB_COMPANY_SIZE;
//       const offset = currentSubCompanySize / 2;

//       // Start further out along the same angle
//       const startDistanceMultiplier = 2.0; // 2 times the currentRadius
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       // Set initial state of peripheral elements for the gravitational pull
//       gsap.set(el as HTMLElement, { // Set initial state
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset), // Calculate offset from final position
//         y: startY - (finalPos.y - offset), // Calculate offset from final position
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0, // Animate back to original relative position (0 offset from final)
//         y: 0,
//         stagger: 0.08, // Stagger their appearance
//         duration: 1.5, // Longer duration for the pull effect
//         ease: 'back.out(1.7)', // Nice bouncy ease for the pull
//         onComplete: function() {
//           // Trigger logo pulse when the last element finishes its animation
//           // The 'this' context here refers to the tween, check if it's the last one in the stagger
//           if (this.targets().indexOf(subCompanyElements[subCompanyElements.length - 1]) !== -1) {
//              gsap.to(logoRef.current, {
//                 scale: 1.05,
//                 duration: 0.2,
//                 yoyo: true, // Scale up and then back down
//                 repeat: 1,
//                 ease: "power1.inOut",
//              });
//           }
//         }
//       },
//       '>-0.5' // Start this animation slightly before the lines finish for a more fluid transition
//     );
//     // --- END GRAVITATIONAL PULL ANIMATION ADDITION ---


//     // --- Final Continuous Logo Rotation (starts after scroll animation ends) ---
//     // This tween will only be played when the ScrollTrigger "onLeave" callback fires
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360', // Continue from current rotation
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause(); // Start paused

//     // --- Scroll to Top Button Animation ---
//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top', // Show button when at the top of the hero section
//         // end: 'bottom 100%', // Hide button when hero section is fully in view again (on scroll up)
//         toggleActions: 'play none none reverse', // play on scroll down, reverse on scroll up
//       },
//     });

//     ScrollTrigger.refresh(); // Recalculate all ScrollTrigger positions

//     // --- Cleanup function for the main animations useEffect ---
//     return () => {
//       tl.kill(); // Kill the main timeline
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
//     };
//   }, [currentRadius, containerDimensions]); // Re-run if radius or container dimensions change

//   return (
//     <>
//       {/* Main Page Content - always visible */}
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         {/* This Box now serves as the solid dark background for the entire page */}
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%), /* Bright White */
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),   /* Vibrant Magenta */
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),   /* Vibrant Cyan */
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)    /* Vibrant Yellow */
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         {/* Text elements - now outside HeroContainer, scroll naturally */}
//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '80px', sm: '100px', md: '80px' },
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8, // Increased bottom margin to give more scroll space before pinning
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             maxWidth: { xs: '100%', md: 700, lg: 900 },
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             {/* Logo and Blur Background - their animation is now managed by the entryAnimationTl */}
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6" // Dashed line effect
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanySize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_SIZE * 0.6
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_SIZE * 0.8
//                   : BASE_SUB_COMPANY_SIZE;
//                 const offset = currentSubCompanySize / 2;

//                 return (
//                   <Link
//                     key={i}
//                     component={RouterLink}
//                     to={SUB_COMPANIES[i].to}
//                     target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'} // Open external links in new tab
//                     sx={{
//                       position: 'absolute',
//                       width: currentSubCompanySize,
//                       height: currentSubCompanySize,
//                       borderRadius: 12, // Modernized border radius
//                       background: '#202B33',
//                       color: '#F5F8FA',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontWeight: 600,
//                       fontSize: theme.breakpoints.down('sm') ? '0.9rem' : BASE_SUB_COMPANY_FONT_SIZE,
//                       textAlign: 'center',
//                       padding: '0 8px',
//                       boxSizing: 'border-box',
//                       boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                       cursor: 'pointer',
//                       border: '2px solid #394B59',
//                       transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                       zIndex: 2,
//                       left: pos.x - offset,
//                       top: pos.y - offset,
//                       textDecoration: 'none',
//                       opacity: 0, // Initial opacity for GSAP animation (controlled by main timeline)
//                       transform: 'translateY(20px)', // Initial position for GSAP animation (controlled by main timeline)
//                       '&:hover': {
//                         background: '#30404D',
//                         borderColor: '#48AFF0', // Highlight border
//                         color: '#48AFF0', // Highlight text
//                         boxShadow: '0 4px 24px rgba(72, 175, 240, 0.4)', // Vibrant shadow on hover
//                       },
//                     }}
//                   >
//                     {SUB_COMPANIES[i].label}
//                   </Link>
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer>

//         {/* Scroll to top button */}
//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 60,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: 'rgba(255, 255, 255, 0.17)',
//             '&:hover': {
//               backgroundColor: 'rgba(255, 255, 255, 0.33)',
//             },
//             borderRadius: '50%',
//             width: 30, // Adjusted width
//             height: 30, // Adjusted height
//             minWidth: 0,
//             padding: 0,
//             opacity: 0, // Initially hidden, controlled by ScrollTrigger
//             pointerEvents: 'none', // Initially no pointer events, controlled by ScrollTrigger
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;












// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 160; // Increased size for sub-company circles
// const BASE_SUB_COMPANY_FONT_SIZE = '1.3rem'; // Adjusted font size for larger circles

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%', // Modernized to 20% border radius
//   background: 'rgba(255, 255, 255, 0.18)', // Subtle white background
//   zIndex: 1,
//   left: '50%',
//   top: '50%', // Moved up slightly
//   transform: 'translate(-50%, -50%)',
//   opacity: 1, // Will be set to 0 by GSAP initially
//   filter: 'blur(10px)', // Will be unblurred by GSAP
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%', // Modernized to 20% border radius
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%', // Moved up slightly
//   transform: 'translate(-50%, -50%)', // Logo is centered initially
//   opacity: 1, // Will be set to 0 by GSAP initially
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
//   // Adjusted padding-top to pull content up within the pinned area
//   paddingTop: '0vh', // Adjust as needed, was '10vh' implicitly
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0, // Initial opacity for animation
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null); // NEW: Ref for the continuous pulse

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.5
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   // This useEffect handles page scroll-to-top and container dimension updates
//   useEffect(() => {
//     window.scrollTo(0, 0); // Ensure scroll to top on mount for consistent start

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []); // Empty dependency array means it runs once on mount

//   // This useEffect handles the entry animation for logo and blur background
//   useEffect(() => {
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     // Ensure all previous GSAP animations on these elements are killed
//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);

//     // Initial state for the entry animation: invisible and scaled down
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 }); // Ensure initial rotation is reset

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         // Once the entry animation is complete, start the continuous clockwise rotation
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//         // NEW: Start the continuous pulse animation after entry is complete
//         if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], { // Pop up
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, { // Fast anti-clockwise rotation
//         rotate: -720, // Two full rotations anti-clockwise
//         duration: 1.5,
//         ease: 'power3.inOut',
//       }, ">-0.4"); // Overlap with pop-up slightly

//     // Cleanup for this specific entry animation
//     return () => {
//       entryAnimationTl.kill(); // Kill the entry animation timeline on unmount
//     };
//   }, []); // Run only once on mount (which happens on refresh/re-route)


//   // Calculate center dynamically based on actual container dimensions
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   // Store initial calculated positions for the peripheral elements
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   // This useEffect handles the main page animations (scroll-triggered, continuous rotations)
//   useEffect(() => {
//     // CRITICAL CLEANUP FOR REACT SPAs
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     // Kill previous instances of these specific tweens
//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }
//     // NEW: Kill previous pulse tween
//     if (logoPulseTweenRef.current) {
//         logoPulseTweenRef.current.kill();
//         logoPulseTweenRef.current = null;
//     }


//     // Ensure all referenced DOM elements are available for main animations
//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     // --- Initial Continuous Logo Rotation (always active until scroll animation) ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360', // Add 360 degrees to current rotation for continuous spin
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true, // Start paused, played by entry animation
//     });

//     // NEW: Continuous Logo Pulse/Bubbling Effect
//     logoPulseTweenRef.current = gsap.to(logoRef.current, {
//       scale: 1.05,
//       duration: 0.2, // Quick scale up
//       yoyo: true, // Scale up and then back down
//       repeat: -1, // Repeat indefinitely
//       ease: "power1.inOut",
//       delay: 0.5, // Initial delay before first pulse after entry anim completes
//       repeatDelay: 2.8, // Delay between pulses (total cycle time 0.2 + 0.2 + 2.8 = 3.2s)
//       paused: true, // Start paused, played by entry animation onComplete
//     });


//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500', // Extend the scroll distance for animation
//         scrub: 1, // Smoothly link animation to scroll position
//         pin: true, // Pin the hero section during animation
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause(); // Pause initial rotation when entering scroll trigger
//           }
//           // NEW: Pause pulse when entering scroll trigger
//           if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play(); // Play final rotation when leaving scroll trigger
//           }
//           // NEW: Resume pulse when leaving scroll trigger
//           if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause(); // Pause final rotation when scrolling back into trigger
//           }
//           // NEW: Pause pulse when re-entering scroll trigger
//           if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play(); // Resume initial rotation when scrolling back out
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill(); // Kill final rotation if we scroll back to top
//             finalLogoRotationTweenRef.current = null;
//           }
//           // NEW: Resume pulse when leaving scroll trigger backwards
//           if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//           }
//         },
//       },
//     });

//     // --- Animations within the scroll-triggered timeline ---
//     // Logo stops rotating and blur fades out
//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0, // Stop rotation
//         duration: 0.8, // Slightly longer duration for smoother stop
//         ease: 'power2.out',
//       },
//       0
//     ) // Start at the beginning of the timeline
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)', // Unblur
//           opacity: 0, // Fade out
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       ) // Start at the beginning of the timeline
//       // Lines appear
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0, // Slower fade in for lines
//           ease: 'power1.inOut',
//         },
//         0.3
//       ); // Start slightly after logo/blur animation begins

//     // --- GRAVITATIONAL PULL ANIMATION ADDITION ---
//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                    theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                    BASE_SUB_COMPANY_SIZE;
//       const offset = currentSubCompanySize / 2;

//       const startDistanceMultiplier = 2.0;
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       gsap.set(el as HTMLElement, {
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset),
//         y: startY - (finalPos.y - offset),
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         stagger: 0.08,
//         duration: 1.5,
//         ease: 'back.out(1.7)',
//       },
//       '>-0.5'
//     );
//     // --- END GRAVITATIONAL PULL ANIMATION ADDITION ---


//     // --- Final Continuous Logo Rotation (starts after scroll animation ends) ---
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360', // Continue from current rotation
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause(); // Start paused

//     // --- Scroll to Top Button Animation ---
//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         // end: 'bottom 100%',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     ScrollTrigger.refresh(); // Recalculate all ScrollTrigger positions

//     // --- Cleanup function for the main animations useEffect ---
//     return () => {
//       tl.kill(); // Kill the main timeline
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (logoPulseTweenRef.current) { // NEW: Kill pulse tween on unmount
//           logoPulseTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [currentRadius, containerDimensions]); // Re-run if radius or container dimensions change

//   return (
//     <>
//       {/* Main Page Content - always visible */}
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         {/* This Box now serves as the solid dark background for the entire page */}
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%), /* Bright White */
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),   /* Vibrant Magenta */
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),   /* Vibrant Cyan */
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)    /* Vibrant Yellow */
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         {/* Text elements - now outside HeroContainer, scroll naturally */}
//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '60px', sm: '80px', md: '80px' }, // Moved up slightly
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             maxWidth: { xs: '100%', md: 700, lg: 900 },
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             {/* Logo and Blur Background - their animation is now managed by the entryAnimationTl */}
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6" // Dashed line effect
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanySize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_SIZE * 0.6
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_SIZE * 0.8
//                   : BASE_SUB_COMPANY_SIZE;
//                 const offset = currentSubCompanySize / 2;

//                 return (
//                   <Link
//                     key={i}
//                     component={RouterLink}
//                     to={SUB_COMPANIES[i].to}
//                     target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'} // Open external links in new tab
//                     sx={{
//                       position: 'absolute',
//                       width: currentSubCompanySize,
//                       height: currentSubCompanySize,
//                       borderRadius: 12, // Modernized border radius
//                       background: '#202B33',
//                       color: '#F5F8FA',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontWeight: 600,
//                       fontSize: theme.breakpoints.down('sm') ? '0.9rem' : BASE_SUB_COMPANY_FONT_SIZE,
//                       textAlign: 'center',
//                       padding: '0 8px',
//                       boxSizing: 'border-box',
//                       boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                       cursor: 'pointer',
//                       border: `2px solid #394B59`, // FIX: Changed to backticks
//                       transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                       zIndex: 2,
//                       left: pos.x - offset,
//                       top: pos.y - offset,
//                       textDecoration: 'none',
//                       opacity: 0, // Initial opacity for GSAP animation (controlled by main timeline)
//                       transform: 'translateY(20px)', // Initial position for GSAP animation (controlled by main timeline)
//                       '&:hover': {
//                         background: '#30404D',
//                         borderColor: '#48AFF0', // Highlight border
//                         color: '#48AFF0', // Highlight text
//                         boxShadow: '0 4px 24px rgba(72, 175, 240, 0.4)', // Vibrant shadow on hover
//                       },
//                     }}
//                   >
//                     {SUB_COMPANIES[i].label}
//                   </Link>
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer> {/* FIX: Added missing closing tag */}

        

//         {/* Scroll to top button */}
//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 60,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: '#16A085',
//             '&:hover': {
//               backgroundColor: '#138D75',
//             },
//             borderRadius: '50%',
//             width: 30, // Adjusted width
//             height: 30, // Adjusted height
//             minWidth: 0,
//             padding: 0,
//             opacity: 0, // Initially hidden, controlled by ScrollTrigger
//             pointerEvents: 'none', // Initially no pointer events, controlled by ScrollTrigger
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;




// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 160; // Increased size for sub-company circles
// const BASE_SUB_COMPANY_FONT_SIZE = '1.3rem'; // Adjusted font size for larger circles

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll' },
//   { label: 'DIGIGRO', to: '/digigro' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%', // Modernized to 20% border radius
//   background: 'rgba(255, 255, 255, 0.18)', // Subtle white background
//   zIndex: 1,
//   left: '50%',
//   top: '50%', // Moved up slightly
//   transform: 'translate(-50%, -50%)',
//   opacity: 1, // Will be set to 0 by GSAP initially
//   filter: 'blur(10px)', // Will be unblurred by GSAP
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%', // Modernized to 20% border radius
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%', // Moved up slightly
//   transform: 'translate(-50%, -50%)', // Logo is centered initially
//   opacity: 1, // Will be set to 0 by GSAP initially
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
//   // Adjusted padding-top to pull content up within the pinned area
//   paddingTop: '0vh', // Adjust as needed, was '10vh' implicitly
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0, // Initial opacity for animation
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null); // NEW: Ref for the continuous pulse

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.5
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   // This useEffect handles page scroll-to-top and container dimension updates
//   useEffect(() => {
//     // --- Scroll to top instantly on mount or refresh ---
//     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []); // Empty dependency array means it runs once on mount


//   // This useEffect handles the entry animation for logo and blur background
//   useEffect(() => {
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     // Ensure all previous GSAP animations on these elements are killed
//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);

//     // Initial state for the entry animation: invisible and scaled down
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 }); // Ensure initial rotation is reset

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         // Once the entry animation is complete, start the continuous clockwise rotation
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//         // NEW: Start the continuous pulse animation after entry is complete
//         if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], { // Pop up
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, { // Fast anti-clockwise rotation
//         rotate: -720, // Two full rotations anti-clockwise
//         duration: 1.5,
//         ease: 'power3.inOut',
//       }, ">-0.4"); // Overlap with pop-up slightly

//     // Cleanup for this specific entry animation
//     return () => {
//       entryAnimationTl.kill(); // Kill the entry animation timeline on unmount
//     };
//   }, []); // Run only once on mount (which happens on refresh/re-route)


//   // Calculate center dynamically based on actual container dimensions
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   // Store initial calculated positions for the peripheral elements
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   // This useEffect handles the main page animations (scroll-triggered, continuous rotations)
//   useEffect(() => {
//     // CRITICAL CLEANUP FOR REACT SPAs
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     // Kill previous instances of these specific tweens
//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }
//     // NEW: Kill previous pulse tween
//     if (logoPulseTweenRef.current) {
//         logoPulseTweenRef.current.kill();
//         logoPulseTweenRef.current = null;
//     }


//     // Ensure all referenced DOM elements are available for main animations
//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     // --- Initial Continuous Logo Rotation (always active until scroll animation) ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360', // Add 360 degrees to current rotation for continuous spin
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true, // Start paused, played by entry animation
//     });

//     // NEW: Continuous Logo Pulse/Bubbling Effect
//     logoPulseTweenRef.current = gsap.to(logoRef.current, {
//       scale: 1.05,
//       duration: 0.2, // Quick scale up
//       yoyo: true, // Scale up and then back down
//       repeat: -1, // Repeat indefinitely
//       ease: "power1.inOut",
//       delay: 0.5, // Initial delay before first pulse after entry anim completes
//       repeatDelay: 2.8, // Delay between pulses (total cycle time 0.2 + 0.2 + 2.8 = 3.2s)
//       paused: true, // Start paused, played by entry animation onComplete
//     });


//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500', // Extend the scroll distance for animation
//         scrub: 1, // Smoothly link animation to scroll position
//         pin: true, // Pin the hero section during animation
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause(); // Pause initial rotation when entering scroll trigger
//           }
//           // NEW: Pause pulse when entering scroll trigger
//           if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play(); // Play final rotation when leaving scroll trigger
//           }
//           // NEW: Resume pulse when leaving scroll trigger
//           if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause(); // Pause final rotation when scrolling back into trigger
//           }
//           // NEW: Pause pulse when re-entering scroll trigger
//           if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play(); // Resume initial rotation when scrolling back out
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill(); // Kill final rotation if we scroll back to top
//             finalLogoRotationTweenRef.current = null;
//           }
//           // NEW: Resume pulse when leaving scroll trigger backwards
//           if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//           }
//         },
//       },
//     });

//     // --- Animations within the scroll-triggered timeline ---
//     // Logo stops rotating and blur fades out
//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0, // Stop rotation
//         duration: 0.8, // Slightly longer duration for smoother stop
//         ease: 'power2.out',
//       },
//       0
//     ) // Start at the beginning of the timeline
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)', // Unblur
//           opacity: 0, // Fade out
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       ) // Start at the beginning of the timeline
//       // Lines appear
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0, // Slower fade in for lines
//           ease: 'power1.inOut',
//         },
//         0.3
//       ); // Start slightly after logo/blur animation begins

//     // --- GRAVITATIONAL PULL ANIMATION ADDITION ---
//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                      theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                      BASE_SUB_COMPANY_SIZE;
//       const offset = currentSubCompanySize / 2;

//       const startDistanceMultiplier = 2.0;
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       gsap.set(el as HTMLElement, {
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset),
//         y: startY - (finalPos.y - offset),
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         stagger: 0.08,
//         duration: 1.5,
//         ease: 'back.out(1.7)',
//       },
//       '>-0.5'
//     );
//     // --- END GRAVITATIONAL PULL ANIMATION ADDITION ---


//     // --- Final Continuous Logo Rotation (starts after scroll animation ends) ---
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360', // Continue from current rotation
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause(); // Start paused

//     // --- Scroll to Top Button Animation ---
//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         // end: 'bottom 100%',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     ScrollTrigger.refresh(); // Recalculate all ScrollTrigger positions

//     // --- Cleanup function for the main animations useEffect ---
//     return () => {
//       tl.kill(); // Kill the main timeline
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (logoPulseTweenRef.current) { // NEW: Kill pulse tween on unmount
//           logoPulseTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [currentRadius, containerDimensions]); // Re-run if radius or container dimensions change

//   return (
//     <>
//       {/* Main Page Content - always visible */}
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         {/* This Box now serves as the solid dark background for the entire page */}
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%), /* Bright White */
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),   /* Vibrant Magenta */
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),   /* Vibrant Cyan */
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)    /* Vibrant Yellow */
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         {/* Text elements - now outside HeroContainer, scroll naturally */}
//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '60px', sm: '80px', md: '80px' }, // Moved up slightly
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             maxWidth: { xs: '100%', md: 700, lg: 900 },
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             {/* Logo and Blur Background - their animation is now managed by the entryAnimationTl */}
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6" // Dashed line effect
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanySize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_SIZE * 0.6
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_SIZE * 0.8
//                   : BASE_SUB_COMPANY_SIZE;
//                 const offset = currentSubCompanySize / 2;

//                 return (
//                   <Link
//                     key={i}
//                     component={RouterLink}
//                     to={SUB_COMPANIES[i].to}
//                     target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'} // Open external links in new tab
//                     sx={{
//                       position: 'absolute',
//                       width: currentSubCompanySize,
//                       height: currentSubCompanySize,
//                       borderRadius: 12, // Modernized border radius
//                       background: '#202B33',
//                       color: '#F5F8FA',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       fontWeight: 600,
//                       fontSize: theme.breakpoints.down('sm') ? '0.9rem' : BASE_SUB_COMPANY_FONT_SIZE,
//                       textAlign: 'center',
//                       padding: '0 8px',
//                       boxSizing: 'border-box',
//                       boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                       cursor: 'pointer',
//                       border: `2px solid #394B59`, // FIX: Changed to backticks
//                       transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
//                       zIndex: 2,
//                       left: pos.x - offset,
//                       top: pos.y - offset,
//                       textDecoration: 'none',
//                       opacity: 0, // Initial opacity for GSAP animation (controlled by main timeline)
//                       transform: 'translateY(20px)', // Initial position for GSAP animation (controlled by main timeline)
//                       '&:hover': {
//                         background: '#30404D',
//                         borderColor: '#48AFF0', // Highlight border
//                         color: '#48AFF0', // Highlight text
//                         boxShadow: '0 4px 24px rgba(72, 175, 240, 0.4)', // Vibrant shadow on hover
//                       },
//                     }}
//                   >
//                     {SUB_COMPANIES[i].label}
//                   </Link>
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer>

//         {/* Scroll to top button */}
//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 70,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: 'rgba(255, 255, 255, 0.23)',
//             '&:hover': {
//               backgroundColor: 'rgba(181, 181, 181, 0.41)',
//             },
//             borderRadius: '50%',
//             width: 30, // Adjusted width
//             height: 30, // Adjusted height
//             minWidth: 0,
//             padding: 0,
//             opacity: 0, // Initially hidden, controlled by ScrollTrigger
//             pointerEvents: 'none', // Initially no pointer events, controlled by ScrollTrigger
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;



// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your main logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // --- NEW IMPORTS: Import your individual peripheral logos ---
// // IMPORTANT: Adjust these paths and filenames to match your actual logo files
// import helixConferencesLogo from '../assets/images/helix-conferences-logo.png'; // Example filename
// import codeitLogo from '../assets/images/codeit-logo.png';
// import peptidesLogo from '../assets/images/peptides-logo.png';
// import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
// import helixESchrollLogo from '../assets/images/helix-e-schroll-logo.png';
// import digigroLogo from '../assets/images/digigro-logo.png';
// // --- END NEW IMPORTS ---

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380; // Increased base radius for larger spread
// const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
// const BASE_LOGO_SIZE = 300; // Increased logo size
// const BASE_SUB_COMPANY_SIZE = 160; // Increased size for sub-company circles
// // Removed BASE_SUB_COMPANY_FONT_SIZE as we are using images, not text

// // --- UPDATED: Add 'image' property to each object in SUB_COMPANIES ---
// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/', image: helixConferencesLogo },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/', image: codeitLogo },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/', image: peptidesLogo },
//   { label: 'HELIX JOURNALS', to: '/helix-journals', image: helixJournalsLogo },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll', image: helixESchrollLogo },
//   { label: 'DIGIGRO', to: '/digigro', image: digigroLogo },
// ];
// // --- END UPDATED SUB_COMPANIES ---

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%', // Modernized to 20% border radius
//   background: 'rgba(255, 255, 255, 0.18)', // Subtle white background
//   zIndex: 1,
//   left: '50%',
//   top: '50%', // Moved up slightly
//   transform: 'translate(-50%, -50%)',
//   opacity: 1, // Will be set to 0 by GSAP initially
//   filter: 'blur(10px)', // Will be unblurred by GSAP
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%', // Modernized to 20% border radius
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%', // Moved up slightly
//   transform: 'translate(-50%, -50%)', // Logo is centered initially
//   opacity: 1, // Will be set to 0 by GSAP initially
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
//   // Adjusted padding-top to pull content up within the pinned area
//   paddingTop: '0vh', // Adjust as needed, was '10vh' implicitly
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0, // Initial opacity for animation
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null); // NEW: Ref for the continuous pulse

//   // Responsive values for radius based on screen size
//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.5
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   // --- START NEW/MODIFIED: Scroll to top and dimension updates ---
//   useEffect(() => {
//     // Force scroll to top instantly on mount/refresh
//     // Use setTimeout with 0 delay to ensure it runs after browser potentially restores scroll
//     const scrollToTop = () => {
//       window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior }); // Use 'instant' for immediate reset
//       // Also ensure ScrollTrigger knows to refresh its positions after scroll reset
//       ScrollTrigger.refresh(true); // 'true' param will re-evaluate all start/end positions
//     };

//     scrollToTop(); // Run once on mount

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     // Add an event listener for `beforeunload` to reset scroll on refresh/close
//     // This is a safety measure, though `scrollToTop` on mount is usually sufficient.
//     const handleBeforeUnload = () => {
//         window.scrollTo(0, 0);
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);


//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []); // Empty dependency array means it runs once on mount
//   // --- END NEW/MODIFIED ---


//   // This useEffect handles the entry animation for logo and blur background
//   useEffect(() => {
//     // Only run this effect if the elements are available
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     // Ensure all previous GSAP animations on these elements are killed
//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);

//     // Initial state for the entry animation: invisible and scaled down
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 }); // Ensure initial rotation is reset

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         // Once the entry animation is complete, start the continuous clockwise rotation
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//         // NEW: Start the continuous pulse animation after entry is complete
//         if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], { // Pop up
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, { // Fast anti-clockwise rotation
//         rotate: -720, // Two full rotations anti-clockwise
//         duration: 1.5,
//         ease: 'power3.inOut',
//       }, ">-0.4"); // Overlap with pop-up slightly

//     // Cleanup for this specific entry animation
//     return () => {
//       entryAnimationTl.kill(); // Kill the entry animation timeline on unmount
//     };
//   }, []); // Run only once on mount (which happens on refresh/re-route)


//   // Calculate center dynamically based on actual container dimensions
//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   // Store initial calculated positions for the peripheral elements
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   // This useEffect handles the main page animations (scroll-triggered, continuous rotations)
//   useEffect(() => {
//     // CRITICAL CLEANUP FOR REACT SPAs
//     // Ensure all ScrollTriggers are killed BEFORE recreating them
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     // Kill previous instances of these specific tweens
//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }
//     // NEW: Kill previous pulse tween
//     if (logoPulseTweenRef.current) {
//         logoPulseTweenRef.current.kill();
//         logoPulseTweenRef.current = null;
//     }


//     // Ensure all referenced DOM elements are available for main animations
//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     // --- Initial Continuous Logo Rotation (always active until scroll animation) ---
//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360', // Add 360 degrees to current rotation for continuous spin
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true, // Start paused, played by entry animation
//     });

//     // NEW: Continuous Logo Pulse/Bubbling Effect
//     logoPulseTweenRef.current = gsap.to(logoRef.current, {
//       scale: 1.05,
//       duration: 0.2, // Quick scale up
//       yoyo: true, // Scale up and then back down
//       repeat: -1, // Repeat indefinitely
//       ease: "power1.inOut",
//       delay: 0.5, // Initial delay before first pulse after entry anim completes
//       repeatDelay: 2.8, // Delay between pulses (total cycle time 0.2 + 0.2 + 2.8 = 3.2s)
//       paused: true, // Start paused, played by entry animation onComplete
//     });


//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     // --- Main Scroll-Triggered Animation Timeline ---
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500', // Extend the scroll distance for animation
//         scrub: 1, // Smoothly link animation to scroll position
//         pin: true, // Pin the hero section during animation
//         onEnter: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.pause(); // Pause initial rotation when entering scroll trigger
//           }
//           // NEW: Pause pulse when entering scroll trigger
//           if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.pause();
//           }
//         },
//         onLeave: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.play(); // Play final rotation when leaving scroll trigger
//           }
//           // NEW: Resume pulse when leaving scroll trigger
//           if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause(); // Pause final rotation when scrolling back into trigger
//           }
//           // NEW: Pause pulse when re-entering scroll trigger
//           if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.pause();
//           }
//         },
//         onLeaveBack: () => {
//           if (initialLogoRotationTweenRef.current) {
//             initialLogoRotationTweenRef.current.play(); // Resume initial rotation when scrolling back out
//           }
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.kill(); // Kill final rotation if we scroll back to top
//             finalLogoRotationTweenRef.current = null;
//           }
//           // NEW: Resume pulse when leaving scroll trigger backwards
//           if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//           }
//         },
//       },
//     });

//     // --- Animations within the scroll-triggered timeline ---
//     // Logo stops rotating and blur fades out
//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0, // Stop rotation
//         duration: 0.8, // Slightly longer duration for smoother stop
//         ease: 'power2.out',
//       },
//       0
//     ) // Start at the beginning of the timeline
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)', // Unblur
//           opacity: 0, // Fade out
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       ) // Start at the beginning of the timeline
//       // Lines appear
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0, // Slower fade in for lines
//           ease: 'power1.inOut',
//         },
//         0.3
//       ); // Start slightly after logo/blur animation begins

//     // --- GRAVITATIONAL PULL ANIMATION ADDITION ---
//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                          theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                          BASE_SUB_COMPANY_SIZE;
//       const offset = currentSubCompanySize / 2;

//       const startDistanceMultiplier = 2.0;
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       gsap.set(el as HTMLElement, {
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset),
//         y: startY - (finalPos.y - offset),
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         stagger: 0.08,
//         duration: 1.5,
//         ease: 'back.out(1.7)',
//       },
//       '>-0.5'
//     );
//     // --- END GRAVITATIONAL PULL ANIMATION ADDITION ---


//     // --- Final Continuous Logo Rotation (starts after scroll animation ends) ---
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360', // Continue from current rotation
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause(); // Start paused

//     // --- Scroll to Top Button Animation ---
//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         // end: 'bottom 100%',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     // --- Important: Re-enable scroll after animations or if not pinned
//     // This helps avoid scroll issues if pin/animations are not active
//     // For this specific setup, pin: true handles the scroll behavior during the animation.
//     // This is more for general best practice or if you had issues with scroll being disabled.
//     // document.body.style.overflow = 'auto'; // Re-enable scroll


//     ScrollTrigger.refresh(); // Recalculate all ScrollTrigger positions

//     // --- Cleanup function for the main animations useEffect ---
//     return () => {
//       tl.kill(); // Kill the main timeline
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (logoPulseTweenRef.current) { // NEW: Kill pulse tween on unmount
//           logoPulseTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [currentRadius, containerDimensions]); // Re-run if radius or container dimensions change

//   return (
//     <>
//       {/* Main Page Content - always visible */}
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         {/* This Box now serves as the solid dark background for the entire page */}
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%), /* Bright White */
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),   /* Vibrant Magenta */
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),   /* Vibrant Cyan */
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)    /* Vibrant Yellow */
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         {/* Text elements - now outside HeroContainer, scroll naturally */}
//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '60px', sm: '80px', md: '80px' }, // Moved up slightly
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             maxWidth: { xs: '100%', md: 700, lg: 900 },
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             {/* Logo and Blur Background - their animation is now managed by the entryAnimationTl */}
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6" // Dashed line effect
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanySize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_SIZE * 0.6
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_SIZE * 0.8
//                   : BASE_SUB_COMPANY_SIZE;
//                 const offset = currentSubCompanySize / 2;

//                 return (
//                   // --- UPDATED: Peripheral Link rendering to use an image ---
//                   <Link
//                     key={i}
//                     component={RouterLink}
//                     to={SUB_COMPANIES[i].to}
//                     target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
//                     sx={{
//                       position: 'absolute',
//                       width: currentSubCompanySize,
//                       height: currentSubCompanySize,
//                       borderRadius: '50%', // Changed to 50% for perfect circles
//                       background: '#202B33', // Maintain background color for the circle
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       boxSizing: 'border-box',
//                       boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
//                       cursor: 'pointer',
//                       border: `2px solid #394B59`,
//                       transition: 'background 0.3s, box-shadow 0.3s, border 0.3s', // Removed 'color'
//                       zIndex: 2,
//                       left: pos.x - offset,
//                       top: pos.y - offset,
//                       textDecoration: 'none',
//                       opacity: 0,
//                       transform: 'translateY(20px)',
//                       // Removed text-specific styles (color, font-size, text-align, padding)
//                       '&:hover': {
//                         background: '#30404D',
//                         borderColor: '#48AFF0',
//                         boxShadow: '0 4px 24px rgba(72, 175, 240, 0.4)',
//                       },
//                     }}
//                   >
//                     <img
//                       src={SUB_COMPANIES[i].image}
//                       alt={SUB_COMPANIES[i].label + ' Logo'}
//                       style={{
//                         maxWidth: '90%', // Increased size to fill more of the circle
//                         maxHeight: '90%', // Increased size to fill more of the circle
//                         objectFit: 'contain', // Scales the image to fit without cropping
//                         borderRadius: '50%', // Optional: if logos are square, makes them circular within the container
//                         padding: '5%', // Small padding to ensure logo doesn't touch the very edge
//                         boxSizing: 'border-box',
//                       }}
//                     />
//                   </Link>
//                   // --- END UPDATED Link rendering ---
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer>

//         {/* Scroll to top button */}
//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 70,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: 'rgba(255, 255, 255, 0.23)',
//             '&:hover': {
//               backgroundColor: 'rgba(181, 181, 181, 0.41)',
//             },
//             borderRadius: '50%',
//             width: 30, // Adjusted width
//             height: 30, // Adjusted height
//             minWidth: 0,
//             padding: 0,
//             opacity: 0, // Initially hidden, controlled by ScrollTrigger
//             pointerEvents: 'none', // Initially no pointer events, controlled by ScrollTrigger
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;





// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your main logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // --- NEW IMPORTS: Import your individual peripheral logos ---
// // IMPORTANT: Adjust these paths and filenames to match your actual logo files
// import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
// import codeitLogo from '../assets/images/codeit-logo.png';
// import peptidesLogo from '../assets/images/peptides-logo.png'; // Adjusted path as per your folder structure if 'Peptides' is a separate project
// import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
// import helixESchrollLogo from '../assets/images/helix-e-schroll-logo.png';
// import digigroLogo from '../assets/images/digigro-logo.png';
// // --- END NEW IMPORTS ---

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380;
// const BASE_BLUR_BG_SIZE = 450;
// const BASE_LOGO_SIZE = 300;

// // --- UPDATED: Increased BASE_SUB_COMPANY_SIZE for larger peripheral logos ---
// // This now directly determines the size of the *logo image itself*
// const BASE_SUB_COMPANY_LOGO_SIZE = 180; // Changed name for clarity
// // --- END UPDATED BASE_SUB_COMPANY_SIZE ---

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/', image: helixConferencesLogo },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/', image: codeitLogo },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/', image: peptidesLogo },
//   { label: 'HELIX JOURNALS', to: '/helix-journals', image: helixJournalsLogo },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll', image: digigroLogo }, // Corrected as per your `image_cd3941.jpg` visual order
//   { label: 'DIGIGRO', to: '/digigro', image: helixESchrollLogo }, // Corrected as per your `image_cd3941.jpg` visual order
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(255, 255, 255, 0.18)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
//   paddingTop: '0vh',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.5
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   useEffect(() => {
//     const scrollToTop = () => {
//       window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
//       ScrollTrigger.refresh(true);
//     };

//     scrollToTop();

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     const handleBeforeUnload = () => {
//         window.scrollTo(0, 0);
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   useEffect(() => {
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 });

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//         if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, {
//         rotate: -720,
//         duration: 1.5,
//         ease: 'power3.inOut',
//       }, ">-0.4");

//     return () => {
//       entryAnimationTl.kill();
//     };
//   }, []);

//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }
//     if (logoPulseTweenRef.current) {
//         logoPulseTweenRef.current.kill();
//         logoPulseTweenRef.current = null;
//     }

//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true,
//     });

//     logoPulseTweenRef.current = gsap.to(logoRef.current, {
//       scale: 1.05,
//       duration: 0.2,
//       yoyo: true,
//       repeat: -1,
//       ease: "power1.inOut",
//       delay: 0.5,
//       repeatDelay: 2.8,
//       paused: true,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500',
//         scrub: 1,
//         pin: true,
//         onUpdate: (self) => {
//             if (self.isActive || self.progress > 0) {
//                 if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.pause();
//                 if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.pause();
//                 if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//             } else {
//                 if (self.direction === 1) {
//                     if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.play();
//                 } else {
//                     if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.play();
//                 }
//                 if (logoPulseTweenRef.current) logoPulseTweenRef.current.play();
//             }
//         },
//       },
//     });

//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0,
//         duration: 0.8,
//         ease: 'power2.out',
//       },
//       0
//     )
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)',
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       )
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0,
//           ease: 'power1.inOut',
//         },
//         0.3
//       );

//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       // Use BASE_SUB_COMPANY_LOGO_SIZE directly for the logo width/height
//       const currentSubCompanyLogoSize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6 :
//                                          theme.breakpoints.down('md') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8 :
//                                          BASE_SUB_COMPANY_LOGO_SIZE;
//       const offset = currentSubCompanyLogoSize / 2; // Offset for centering

//       const startDistanceMultiplier = 2.0;
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       gsap.set(el as HTMLElement, {
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset),
//         y: startY - (finalPos.y - offset),
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         stagger: 0.08,
//         duration: 1.5,
//         ease: 'back.out(1.7)',
//       },
//       '>-0.5'
//     );

//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();

//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     ScrollTrigger.refresh();

//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (logoPulseTweenRef.current) {
//           logoPulseTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [currentRadius, containerDimensions]);

//   return (
//     <>
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '60px', sm: '80px', md: '80px' },
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             maxWidth: { xs: '100%', md: 700, lg: 900 },
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6"
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanyLogoSize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8
//                   : BASE_SUB_COMPANY_LOGO_SIZE;
//                 const offset = currentSubCompanyLogoSize / 2;

//                 return (
//                   <Link
//                     key={i}
//                     component={RouterLink}
//                     to={SUB_COMPANIES[i].to}
//                     target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
//                     sx={{
//                       position: 'absolute',
//                       width: currentSubCompanyLogoSize,
//                       height: currentSubCompanyLogoSize,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       boxSizing: 'border-box',
//                       cursor: 'pointer',
//                       zIndex: 2,
//                       left: pos.x - offset,
//                       top: pos.y - offset,
//                       textDecoration: 'none',
//                       opacity: 0,
//                       transform: 'translateY(20px)',
//                       // --- Removed circle background styles ---
//                       // Removed borderRadius, background, backdropFilter, border, boxShadow from here

//                       // --- New Hover Effect for Logos ---
//                       '& img': { // Target the image inside the Link
//                         transition: 'transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out',
//                         filter: 'grayscale(0%) brightness(100%)', // Initial state
//                         boxShadow: 'none', // Initial shadow
//                         borderRadius: '50%', // Ensure no default rounding if logo is square
//                       },
//                       '&:hover img': {
//                         transform: 'scale(1.1) translateY(-5px)', // Slight lift and scale
//                         filter: 'grayscale(0%) brightness(120%)', // Make it pop more
//                         // Shadow that applies to the visible part of the PNG
//                         boxShadow: '0 10px 20px rgba(0, 255, 255, 0.4), 0 0 15px rgba(255, 255, 0, 0.5)',
//                         // Using multiple box-shadows for a vibrant, glowing edge effect
//                       },
//                       // --- End New Hover Effect ---
//                     }}
//                   >
//                     <img
//                       src={SUB_COMPANIES[i].image}
//                       alt={SUB_COMPANIES[i].label + ' Logo'}
//                       style={{
//                         width: '100%', // Make the image fill the container (which is now sized for the logo)
//                         height: '100%',
//                         objectFit: 'contain',
//                         // Removed borderRadius: '50%' as we are not using circular containers
//                         // Removed padding: '5%'
//                         boxSizing: 'border-box',
//                         // Ensure it's a PNG for proper shadow application to non-square shapes
//                       }}
//                     />
//                   </Link>
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer>

//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 70,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: 'rgba(255, 255, 255, 0.23)',
//             '&:hover': {
//               backgroundColor: 'rgba(181, 181, 181, 0.41)',
//             },
//             borderRadius: '50%',
//             width: 30,
//             height: 30,
//             minWidth: 0,
//             padding: 0,
//             opacity: 0,
//             pointerEvents: 'none',
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;




// // Code It Consulting – Expert IT services for software development, QA, DevOps & cloud solutions.
// //  Peptides Research Labs – 12+ years of scientific excellence in research, lab services, molecular biology & education support.
// // Helix Conferences – Curating world-class biotech, pharma & life science events that shape the future.
// // Helix Journals – Peer-reviewed international journals in science, technology, health & agriculture.
// // Helix E-Schroll – Digital abstract archives from global conferences in science, pharma & technology.
// // Digigro – 10+ years of experience in digital marketing, SEO & content marketing.












// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme, Tooltip } from '@mui/material'; // Added Tooltip import
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your main logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // --- NEW IMPORTS: Import your individual peripheral logos ---
// // IMPORTANT: Adjust these paths and filenames to match your actual logo files
// import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
// import codeitLogo from '../assets/images/codeit-logo.png';
// import peptidesLogo from '../assets/images/peptides-logo.png';
// import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
// import helixESchrollLogo from '../assets/images/helix-e-schroll-logo.png';
// import digigroLogo from '../assets/images/digigro-logo.png';
// // --- END NEW IMPORTS ---

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380;
// const BASE_BLUR_BG_SIZE = 450;
// const BASE_LOGO_SIZE = 300;

// // --- UPDATED: Increased BASE_SUB_COMPANY_SIZE for larger peripheral logos ---
// // This now directly determines the size of the *logo image itself*
// const BASE_SUB_COMPANY_LOGO_SIZE = 180; // Changed name for clarity
// // --- END UPDATED BASE_SUB_COMPANY_SIZE ---

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/', image: helixConferencesLogo, description: 'Curating world-class biotech, pharma & life science events that shape the future.' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/', image: codeitLogo, description: 'Expert IT services for software development, QA, DevOps & cloud solutions.' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/', image: peptidesLogo, description: '12+ years of scientific excellence in research, lab services, molecular biology & education support.' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals', image: helixJournalsLogo, description: 'Peer-reviewed international journals in science, technology, health & agriculture.' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll', image: digigroLogo, description: 'Digital abstract archives from global conferences in science, pharma & technology.' }, // Corrected as per your `image_cd3941.jpg` visual order
//   { label: 'DIGIGRO', to: '/digigro', image: helixESchrollLogo, description: '10+ years of experience in digital marketing, SEO & content marketing.' }, // Corrected as per your `image_cd3941.jpg` visual order
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(255, 255, 255, 0.18)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
//   paddingTop: '0vh',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.5
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   useEffect(() => {
//     const scrollToTop = () => {
//       window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
//       ScrollTrigger.refresh(true);
//     };

//     scrollToTop();

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     const handleBeforeUnload = () => {
//         window.scrollTo(0, 0);
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   useEffect(() => {
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 });

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//         if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, {
//         rotate: -720,
//         duration: 1.5,
//         ease: 'power3.inOut',
//       }, ">-0.4");

//     return () => {
//       entryAnimationTl.kill();
//     };
//   }, []);

//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }
//     if (logoPulseTweenRef.current) {
//         logoPulseTweenRef.current.kill();
//         logoPulseTweenRef.current = null;
//     }

//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true,
//     });

//     logoPulseTweenRef.current = gsap.to(logoRef.current, {
//       scale: 1.05,
//       duration: 0.2,
//       yoyo: true,
//       repeat: -1,
//       ease: "power1.inOut",
//       delay: 0.5,
//       HRepeatDelay: 2.8, // Corrected this, it was likely a typo or not intended
//       paused: true,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500',
//         scrub: 1,
//         pin: true,
//         onUpdate: (self) => {
//             if (self.isActive || self.progress > 0) {
//                 if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.pause();
//                 if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.pause();
//                 if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//             } else {
//                 if (self.direction === 1) {
//                     if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.play();
//                 } else {
//                     if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.play();
//                 }
//                 if (logoPulseTweenRef.current) logoPulseTweenRef.current.play();
//             }
//         },
//       },
//     });

//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0,
//         duration: 0.8,
//         ease: 'power2.out',
//       },
//       0
//     )
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)',
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       )
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0,
//           ease: 'power1.inOut',
//         },
//         0.3
//       );

//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       // Use BASE_SUB_COMPANY_LOGO_SIZE directly for the logo width/height
//       const currentSubCompanyLogoSize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6 :
//                                          theme.breakpoints.down('md') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8 :
//                                          BASE_SUB_COMPANY_LOGO_SIZE;
//       const offset = currentSubCompanyLogoSize / 2; // Offset for centering

//       const startDistanceMultiplier = 2.0;
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       gsap.set(el as HTMLElement, {
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset),
//         y: startY - (finalPos.y - offset),
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         stagger: 0.08,
//         duration: 1.5,
//         ease: 'back.out(1.7)',
//       },
//       '>-0.5'
//     );

//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();

//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     ScrollTrigger.refresh();

//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (logoPulseTweenRef.current) {
//           logoPulseTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [currentRadius, containerDimensions]);

//   return (
//     <>
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '60px', sm: '80px', md: '80px' },
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             maxWidth: { xs: '100%', md: 700, lg: 900 },
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6"
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanyLogoSize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8
//                   : BASE_SUB_COMPANY_LOGO_SIZE;
//                 const offset = currentSubCompanyLogoSize / 2;

//                 return ( // <--- Add this 'return' keyword here
//                   <Tooltip title={SUB_COMPANIES[i].description} placement="top" key={i}>
//                     <Link
//                       component={RouterLink}
//                       to={SUB_COMPANIES[i].to}
//                       target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
//                       sx={{
//                         position: 'absolute',
//                         width: currentSubCompanyLogoSize,
//                         height: currentSubCompanyLogoSize,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         boxSizing: 'border-box',
//                         cursor: 'pointer',
//                         zIndex: 2,
//                         left: pos.x - offset,
//                         top: pos.y - offset,
//                         textDecoration: 'none',
//                         opacity: 0,
//                         transform: 'translateY(20px)',
//                         '& img': {
//                           transition: 'transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out',
//                           filter: 'grayscale(0%) brightness(100%)',
//                           boxShadow: 'none',
//                           borderRadius: '50%',
//                         },
//                         '&:hover img': {
//                           transform: 'scale(1.1) translateY(-5px)',
//                           filter: 'grayscale(0%) brightness(120%)',
//                           boxShadow: '0 10px 20px rgba(0, 255, 255, 0.4), 0 0 15px rgba(255, 255, 0, 0.5)',
//                         },
//                       }}
//                     >
//                       <img
//                         src={SUB_COMPANIES[i].image}
//                         alt={SUB_COMPANIES[i].label + ' Logo'}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'contain',
//                           boxSizing: 'border-box',
//                         }}
//                       />
//                     </Link>
//                   </Tooltip>
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer>

//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 70,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: 'rgba(255, 255, 255, 0.23)',
//             '&:hover': {
//               backgroundColor: 'rgba(181, 181, 181, 0.41)',
//             },
//             borderRadius: '50%',
//             width: 30,
//             height: 30,
//             minWidth: 0,
//             padding: 0,
//             opacity: 0,
//             pointerEvents: 'none',
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;








// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme, Tooltip } from '@mui/material'; // Added Tooltip import
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your main logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // --- NEW IMPORTS: Import your individual peripheral logos ---
// // IMPORTANT: Adjust these paths and filenames to match your actual logo files
// import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
// import codeitLogo from '../assets/images/codeit-logo.png';
// import peptidesLogo from '../assets/images/peptides-logo.png';
// import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
// import helixESchrollLogo from '../assets/images/helix-e-schroll-logo.png';
// import digigroLogo from '../assets/images/digigro-logo.png';
// // --- END NEW IMPORTS ---

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380;
// const BASE_BLUR_BG_SIZE = 450;
// const BASE_LOGO_SIZE = 300;

// // --- UPDATED: Increased BASE_SUB_COMPANY_SIZE for larger peripheral logos ---
// // This now directly determines the size of the *logo image itself*
// const BASE_SUB_COMPANY_LOGO_SIZE = 180; // Changed name for clarity
// // --- END UPDATED BASE_SUB_COMPANY_SIZE ---

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/', image: helixConferencesLogo, description: 'Curating world-class biotech, pharma & life science events that shape the future.' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/', image: codeitLogo, description: 'Expert IT services for software development, QA, DevOps & cloud solutions.' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/', image: peptidesLogo, description: '12+ years of scientific excellence in research, lab services, molecular biology & education support.' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals', image: helixJournalsLogo, description: 'Peer-reviewed international journals in science, technology, health & agriculture.' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll', image: digigroLogo, description: 'Digital abstract archives from global conferences in science, pharma & technology.' }, // Corrected as per your `image_cd3941.jpg` visual order
//   { label: 'DIGIGRO', to: '/digigro', image: helixESchrollLogo, description: '10+ years of experience in digital marketing, SEO & content marketing.' }, // Corrected as per your `image_cd3941.jpg` visual order
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(255, 255, 255, 0.18)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
//   paddingTop: '0vh',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.5
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   useEffect(() => {
//     const scrollToTop = () => {
//       window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
//       ScrollTrigger.refresh(true);
//     };

//     scrollToTop();

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     const handleBeforeUnload = () => {
//         window.scrollTo(0, 0);
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   useEffect(() => {
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 });

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//         if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, {
//         rotate: -720,
//         duration: 1.5,
//         ease: 'power3.inOut',
//       }, ">-0.4");

//     return () => {
//       entryAnimationTl.kill();
//     };
//   }, []);

//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }
//     if (logoPulseTweenRef.current) {
//         logoPulseTweenRef.current.kill();
//         logoPulseTweenRef.current = null;
//     }

//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true,
//     });

//     logoPulseTweenRef.current = gsap.to(logoRef.current, {
//       scale: 1.05,
//       duration: 0.2,
//       yoyo: true,
//       repeat: -1,
//       ease: "power1.inOut",
//       delay: 0.5,
//       repeatDelay: 2.8,
//       paused: true,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500',
//         scrub: 1,
//         pin: true,
//         onUpdate: (self) => {
//             if (self.isActive || self.progress > 0) {
//                 if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.pause();
//                 if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.pause();
//                 if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//             } else {
//                 if (self.direction === 1) {
//                     if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.play();
//                 } else {
//                     if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.play();
//                 }
//                 if (logoPulseTweenRef.current) logoPulseTweenRef.current.play();
//             }
//         },
//       },
//     });

//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0,
//         duration: 0.8,
//         ease: 'power2.out',
//       },
//       0
//     )
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)',
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       )
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0,
//           ease: 'power1.inOut',
//         },
//         0.3
//       );

//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       // Use BASE_SUB_COMPANY_LOGO_SIZE directly for the logo width/height
//       const currentSubCompanyLogoSize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6 :
//                                          theme.breakpoints.down('md') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8 :
//                                          BASE_SUB_COMPANY_LOGO_SIZE;
//       const offset = currentSubCompanyLogoSize / 2; // Offset for centering

//       const startDistanceMultiplier = 2.0;
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       gsap.set(el as HTMLElement, {
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset),
//         y: startY - (finalPos.y - offset),
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         stagger: 0.08,
//         duration: 1.5,
//         ease: 'back.out(1.7)',
//       },
//       '>-0.5'
//     );

//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();

//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     ScrollTrigger.refresh();

//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (logoPulseTweenRef.current) {
//           logoPulseTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [currentRadius, containerDimensions]);

//   return (
//     <>
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '60px', sm: '80px', md: '80px' },
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             maxWidth: { xs: '100%', md: 700, lg: 900 },
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6"
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanyLogoSize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8
//                   : BASE_SUB_COMPANY_LOGO_SIZE;
//                 const offset = currentSubCompanyLogoSize / 2;

//                 return (
//                   <Tooltip
//                     title={SUB_COMPANIES[i].description}
//                     placement="top"
//                     key={i}
//                     componentsProps={{ // Add this prop to style the tooltip popup
//                       tooltip: {
//                         sx: {
//                           fontSize: '1rem', // Adjust this value as needed, e.g., '1.2rem', '16px'
//                           padding: '8px 12px', // You can also adjust padding for better appearance
//                           maxWidth: '250px', // Optional: limit tooltip width for better readability
//                         },
//                       },
//                     }}
//                   >
//                     <Link
//                       component={RouterLink}
//                       to={SUB_COMPANIES[i].to}
//                       target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
//                       sx={{
//                         position: 'absolute',
//                         width: currentSubCompanyLogoSize,
//                         height: currentSubCompanyLogoSize,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         boxSizing: 'border-box',
//                         cursor: 'pointer',
//                         zIndex: 2,
//                         left: pos.x - offset,
//                         top: pos.y - offset,
//                         textDecoration: 'none',
//                         opacity: 0,
//                         transform: 'translateY(20px)',
//                         '& img': {
//                           transition: 'transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out',
//                           filter: 'grayscale(0%) brightness(100%)',
//                           boxShadow: 'none',
//                           borderRadius: '50%',
//                         },
//                         '&:hover img': {
//                           transform: 'scale(1.1) translateY(-5px)',
//                           filter: 'grayscale(0%) brightness(120%)',
//                           boxShadow: '0 10px 20px rgba(0, 255, 255, 0.4), 0 0 15px rgba(255, 255, 0, 0.5)',
//                         },
//                       }}
//                     >
//                       <img
//                         src={SUB_COMPANIES[i].image}
//                         alt={SUB_COMPANIES[i].label + ' Logo'}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'contain',
//                           boxSizing: 'border-box',
//                         }}
//                       />
//                     </Link>
//                   </Tooltip>
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer>

//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 70,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: 'rgba(255, 255, 255, 0.23)',
//             '&:hover': {
//               backgroundColor: 'rgba(181, 181, 181, 0.41)',
//             },
//             borderRadius: '50%',
//             width: 30,
//             height: 30,
//             minWidth: 0,
//             padding: 0,
//             opacity: 0,
//             pointerEvents: 'none',
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;






// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme, Tooltip } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png';
// import { gsap } from 'gsap'; // Corrected this line: removed '=>'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import Zoom from '@mui/material/Zoom';

// // --- NEW IMPORTS: Import your individual peripheral logos ---
// import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
// import codeitLogo from '../assets/images/codeit-logo.png';
// import peptidesLogo from '../assets/images/peptides-logo.png';
// import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
// import helixESchrollLogo from '../assets/images/helix-e-schroll-logo.png';
// import digigroLogo from '../assets/images/digigro-logo.png';
// // --- END NEW IMPORTS ---

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380;
// const BASE_BLUR_BG_SIZE = 450;
// const BASE_LOGO_SIZE = 300;

// const BASE_SUB_COMPANY_LOGO_SIZE = 180;

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/', image: helixConferencesLogo, description: 'Curating world-class biotech, pharma & life science events that shape the future.' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/', image: codeitLogo, description: 'Expert IT services for software development, QA, DevOps & cloud solutions.' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/', image: peptidesLogo, description: '12+ years of scientific excellence in research, lab services, molecular biology & education support.' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals', image: helixJournalsLogo, description: 'Peer-reviewed international journals in science, technology, health & agriculture.' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll', image: digigroLogo, description: 'Digital abstract archives from global conferences in science, pharma & technology.' },
//   { label: 'DIGIGRO', to: '/digigro', image: helixESchrollLogo, description: '10+ years of experience in digital marketing, SEO & content marketing.' },
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(255, 255, 255, 0.18)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
//   paddingTop: '0vh',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.5
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   useEffect(() => {
//     const scrollToTop = () => {
//       window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
//       ScrollTrigger.refresh(true);
//     };

//     scrollToTop();

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     const handleBeforeUnload = () => {
//         window.scrollTo(0, 0);
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   useEffect(() => {
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 });

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//         if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, {
//         rotate: -720,
//         duration: 1.5,
//         ease: 'power3.inOut',
//       }, ">-0.4");

//     return () => {
//       entryAnimationTl.kill();
//     };
//   }, []);

//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }
//     if (logoPulseTweenRef.current) {
//         logoPulseTweenRef.current.kill();
//         logoPulseTweenRef.current = null;
//     }

//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true,
//     });

//     logoPulseTweenRef.current = gsap.to(logoRef.current, {
//       scale: 1.05,
//       duration: 0.2,
//       yoyo: true,
//       repeat: -1,
//       ease: "power1.inOut",
//       delay: 0.5,
//       repeatDelay: 2.8,
//       paused: true,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500',
//         scrub: 1,
//         pin: true,
//         onUpdate: (self: ScrollTrigger) => { // Added type annotation for 'self'
//             if (self.isActive || self.progress > 0) {
//                 if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.pause();
//                 if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.pause();
//                 if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//             } else {
//                 if (self.direction === 1) {
//                     if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.play();
//                 } else {
//                     if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.play();
//                 }
//                 if (logoPulseTweenRef.current) logoPulseTweenRef.current.play();
//             }
//         },
//       },
//     });

//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0,
//         duration: 0.8,
//         ease: 'power2.out',
//       },
//       0
//     )
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)',
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       )
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0,
//           ease: 'power1.inOut',
//         },
//         0.3
//       );

//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       const currentSubCompanyLogoSize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6 :
//                                          theme.breakpoints.down('md') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8 :
//                                          BASE_SUB_COMPANY_LOGO_SIZE;
//       const offset = currentSubCompanyLogoSize / 2;

//       const startDistanceMultiplier = 2.0;
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       gsap.set(el as HTMLElement, {
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset),
//         y: startY - (finalPos.y - offset),
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         stagger: 0.08,
//         duration: 1.5,
//         ease: 'back.out(1.7)',
//       },
//       '>-0.5'
//     );

//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();

//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     ScrollTrigger.refresh();

//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (logoPulseTweenRef.current) {
//           logoPulseTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [currentRadius, containerDimensions]);

//   return (
//     <>
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '60px', sm: '80px', md: '80px' },
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             maxWidth: { xs: '100%', md: 700, lg: 900 },
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6"
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanyLogoSize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8
//                   : BASE_SUB_COMPANY_LOGO_SIZE;
//                 const offset = currentSubCompanyLogoSize / 2;

//                 return (
//                   <Tooltip
//                     title={SUB_COMPANIES[i].description}
//                     placement="top"
//                     key={i}
//                     TransitionComponent={Zoom}
//                     TransitionProps={{ timeout: 300 }}
//                     componentsProps={{
//                       tooltip: {
//                         sx: {
//                           fontSize: '1rem',
//                           padding: '8px 12px',
//                           maxWidth: '250px',
//                         },
//                       },
//                     }}
//                   >
//                     <Link
//                       component={RouterLink}
//                       to={SUB_COMPANIES[i].to}
//                       target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
//                       sx={{
//                         position: 'absolute',
//                         width: currentSubCompanyLogoSize,
//                         height: currentSubCompanyLogoSize,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         boxSizing: 'border-box',
//                         cursor: 'pointer',
//                         zIndex: 2,
//                         left: pos.x - offset,
//                         top: pos.y - offset,
//                         textDecoration: 'none',
//                         opacity: 0,
//                         transform: 'translateY(20px)',
//                         '& img': {
//                           transition: 'transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out',
//                           filter: 'grayscale(0%) brightness(100%)',
//                           boxShadow: 'none',
//                           borderRadius: '50%',
//                         },
//                         '&:hover img': {
//                           transform: 'scale(1.1) translateY(-5px)',
//                           filter: 'grayscale(0%) brightness(120%)',
//                           boxShadow: '0 10px 20px rgba(0, 255, 255, 0.4), 0 0 15px rgba(255, 255, 0, 0.5)',
//                         },
//                       }}
//                     >
//                       <img
//                         src={SUB_COMPANIES[i].image}
//                         alt={SUB_COMPANIES[i].label + ' Logo'}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'contain',
//                           boxSizing: 'border-box',
//                         }}
//                       />
//                     </Link>
//                   </Tooltip>
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer>

//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 70,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: 'rgba(255, 255, 255, 0.23)',
//             '&:hover': {
//               backgroundColor: 'rgba(181, 181, 181, 0.41)',
//             },
//             borderRadius: '50%',
//             width: 30,
//             height: 30,
//             minWidth: 0,
//             padding: 0,
//             opacity: 0,
//             pointerEvents: 'none',
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;








// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme, Tooltip } from '@mui/material'; // Added Tooltip import
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your main logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // --- NEW IMPORTS: Import your individual peripheral logos ---
// // IMPORTANT: Adjust these paths and filenames to match your actual logo files
// import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
// import codeitLogo from '../assets/images/codeit-logo.png';
// import peptidesLogo from '../assets/images/peptides-logo.png';
// import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
// import helixESchrollLogo from '../assets/images/helix-e-schroll-logo.png';
// import digigroLogo from '../assets/images/digigro-logo.png';
// // --- END NEW IMPORTS ---

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380;
// const BASE_BLUR_BG_SIZE = 450;
// const BASE_LOGO_SIZE = 300;

// // --- UPDATED: Increased BASE_SUB_COMPANY_SIZE for larger peripheral logos ---
// // This now directly determines the size of the *logo image itself*
// const BASE_SUB_COMPANY_LOGO_SIZE = 180; // Changed name for clarity
// // --- END UPDATED BASE_SUB_COMPANY_SIZE ---

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/', image: helixConferencesLogo, description: 'Curating world-class biotech, pharma & life science events that shape the future.' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/', image: codeitLogo, description: 'Expert IT services for software development, QA, DevOps & cloud solutions.' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/', image: peptidesLogo, description: '12+ years of scientific excellence in research, lab services, molecular biology & education support.' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals', image: helixJournalsLogo, description: 'Peer-reviewed international journals in science, technology, health & agriculture.' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll', image: digigroLogo, description: 'Digital abstract archives from global conferences in science, pharma & technology.' }, // Corrected as per your `image_cd3941.jpg` visual order
//   { label: 'DIGIGRO', to: '/digigro', image: helixESchrollLogo, description: '10+ years of experience in digital marketing, SEO & content marketing.' }, // Corrected as per your `image_cd3941.jpg` visual order
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(255, 255, 255, 0.18)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
//   paddingTop: '0vh',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.5
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   useEffect(() => {
//     const scrollToTop = () => {
//       window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
//       ScrollTrigger.refresh(true);
//     };

//     scrollToTop();

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     const handleBeforeUnload = () => {
//         window.scrollTo(0, 0);
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   useEffect(() => {
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 });

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//         if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, {
//         rotate: -720,
//         duration: 1.5,
//         ease: 'power3.inOut',
//       }, ">-0.4");

//     return () => {
//       entryAnimationTl.kill();
//     };
//   }, []);

//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }
//     if (logoPulseTweenRef.current) {
//         logoPulseTweenRef.current.kill();
//         logoPulseTweenRef.current = null;
//     }

//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true,
//     });

//     logoPulseTweenRef.current = gsap.to(logoRef.current, {
//       scale: 1.05,
//       duration: 0.2,
//       yoyo: true,
//       repeat: -1,
//       ease: "power1.inOut",
//       delay: 0.5,
//       repeatDelay: 2.8,
//       paused: true,
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500',
//         scrub: 1,
//         pin: true,
//         onUpdate: (self) => {
//             if (self.isActive || self.progress > 0) {
//                 if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.pause();
//                 if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.pause();
//                 if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//             } else {
//                 if (self.direction === 1) {
//                     if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.play();
//                 } else {
//                     if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.play();
//                 }
//                 if (logoPulseTweenRef.current) logoPulseTweenRef.current.play();
//             }
//         },
//       },
//     });

//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0,
//         duration: 0.8,
//         ease: 'power2.out',
//       },
//       0
//     )
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)',
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       )
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0,
//           ease: 'power1.inOut',
//         },
//         0.3
//       );

//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       // Use BASE_SUB_COMPANY_LOGO_SIZE directly for the logo width/height
//       const currentSubCompanyLogoSize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6 :
//                                          theme.breakpoints.down('md') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8 :
//                                          BASE_SUB_COMPANY_LOGO_SIZE;
//       const offset = currentSubCompanyLogoSize / 2; // Offset for centering

//       const startDistanceMultiplier = 2.0;
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       gsap.set(el as HTMLElement, {
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset),
//         y: startY - (finalPos.y - offset),
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         stagger: 0.08,
//         duration: 1.5,
//         ease: 'back.out(1.7)',
//       },
//       '>-0.5'
//     );

//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();

//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     ScrollTrigger.refresh();

//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (logoPulseTweenRef.current) {
//           logoPulseTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [currentRadius, containerDimensions]);

//   return (
//     <>
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '60px', sm: '80px', md: '80px' },
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             maxWidth: { xs: '100%', md: 700, lg: 900 },
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6"
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanyLogoSize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8
//                   : BASE_SUB_COMPANY_LOGO_SIZE;
//                 const offset = currentSubCompanyLogoSize / 2;

//                 return (
//                   <Tooltip
//                     title={SUB_COMPANIES[i].description}
//                     placement="top"
//                     key={i}
//                     componentsProps={{ // Add this prop to style the tooltip popup
//                       tooltip: {
//                         sx: {
//                             borderRadius:'10px',
//                           fontSize: '1rem', // Adjust this value as needed, e.g., '1.2rem', '16px'
//                           padding: '8px 12px', // You can also adjust padding for better appearance
//                           maxWidth: '250px', // Optional: limit tooltip width for better readability
//                         },
//                       },
//                     }}
//                   >
//                     <Link
//                       component={RouterLink}
//                       to={SUB_COMPANIES[i].to}
//                       target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
//                       sx={{
//                         position: 'absolute',
//                         width: currentSubCompanyLogoSize,
//                         height: currentSubCompanyLogoSize,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         boxSizing: 'border-box',
//                         cursor: 'pointer',
//                         zIndex: 2,
//                         left: pos.x - offset,
//                         top: pos.y - offset,
//                         textDecoration: 'none',
//                         opacity: 0,
//                         transform: 'translateY(20px)',
//                         // --- ADDED/MODIFIED FOR WHITE CIRCLE BACKGROUND ---
//                         background: 'white', // White circular background for the link container
//                         borderRadius: '50%', // Ensure the container is perfectly circular
//                         padding: '12px', // Adjust padding as needed to control logo size within the circle
//                         // --- END ADDED/MODIFIED ---
//                         '& img': {
//                           transition: 'transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out',
//                           filter: 'grayscale(0%) brightness(100%)',
//                           boxShadow: 'none',
//                         //   borderRadius: '50%', // REMOVED: container now handles circular shape
//                         },
//                         '&:hover img': {
//                           transform: 'scale(1.1) translateY(-5px)',
//                           filter: 'grayscale(0%) brightness(120%)',
//                         //   boxShadow: '0 10px 20px rgba(0, 255, 255, 0.4), 0 0 15px rgba(255, 255, 0, 0.5)',
//                         },
//                       }}
//                     >
//                       <img
//                         src={SUB_COMPANIES[i].image}
//                         alt={SUB_COMPANIES[i].label + ' Logo'}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'contain',
//                           boxSizing: 'border-box',
//                           borderRadius:'10%',
//                         }}
//                       />
//                     </Link>
//                   </Tooltip>
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer>

//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 70,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: 'rgba(255, 255, 255, 0.23)',
//             '&:hover': {
//               backgroundColor: 'rgba(181, 181, 181, 0.41)',
//             },
//             borderRadius: '50%',
//             width: 30,
//             height: 30,
//             minWidth: 0,
//             padding: 0,
//             opacity: 0,
//             pointerEvents: 'none',
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;





// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme, Tooltip } from '@mui/material'; // Added Tooltip import
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your main logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // --- NEW IMPORTS: Import your individual peripheral logos ---
// // IMPORTANT: Adjust these paths and filenames to match your actual logo files
// import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
// import codeitLogo from '../assets/images/codeit-logo.png';
// import peptidesLogo from '../assets/images/peptides-logo.png';
// import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
// import helixESchrollLogo from '../assets/images/helix-e-schroll-logo.png';
// import digigroLogo from '../assets/images/digigro-logo.png';
// // --- END NEW IMPORTS ---

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380;
// const BASE_BLUR_BG_SIZE = 450;
// const BASE_LOGO_SIZE = 300;

// // --- UPDATED: Increased BASE_SUB_COMPANY_SIZE for larger peripheral logos ---
// // This now directly determines the size of the *logo image itself*
// const BASE_SUB_COMPANY_LOGO_SIZE = 180; // Changed name for clarity
// // --- END UPDATED BASE_SUB_COMPANY_SIZE ---

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/', image: helixConferencesLogo, description: 'Curating world-class biotech, pharma & life science events that shape the future.' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/', image: codeitLogo, description: 'Expert IT services for software development, QA, DevOps & cloud solutions.' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/', image: peptidesLogo, description: '12+ years of scientific excellence in research, lab services, molecular biology & education support.' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals', image: helixJournalsLogo, description: 'Peer-reviewed international journals in science, technology, health & agriculture.' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll', image: digigroLogo, description: 'Digital abstract archives from global conferences in science, pharma & technology.' }, // Corrected as per your `image_cd3941.jpg` visual order
//   { label: 'DIGIGRO', to: '/digigro', image: helixESchrollLogo, description: '10+ years of experience in digital marketing, SEO & content marketing.' }, // Corrected as per your `image_cd3941.jpg` visual order
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(255, 255, 255, 0.18)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
//   paddingTop: '0vh',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.5
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   useEffect(() => {
//     const scrollToTop = () => {
//       window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
//       ScrollTrigger.refresh(true);
//     };

//     scrollToTop();

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     const handleBeforeUnload = () => {
//         window.scrollTo(0, 0);
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   useEffect(() => {
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 });

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//         if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, {
//         rotate: -720,
//         duration: 1.5,
//         ease: 'power3.inOut',
//       }, ">-0.4");

//     return () => {
//       entryAnimationTl.kill();
//     };
//   }, []);

//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     // Ensure tweens are killed before re-creating them to prevent duplicates
//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }
//     if (logoPulseTweenRef.current) {
//         logoPulseTweenRef.current.kill();
//         logoPulseTweenRef.current = null;
//     }

//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true, // Start paused, played by entry animation or onLeaveBack
//     });

//     logoPulseTweenRef.current = gsap.to(logoRef.current, {
//       scale: 1.05,
//       duration: 0.2,
//       yoyo: true,
//       repeat: -1,
//       ease: "power1.inOut",
//       delay: 0.5,
//       repeatDelay: 2.8,
//       paused: true, // Start paused, played by entry animation or onLeave/onLeaveBack
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500',
//         scrub: 1,
//         pin: true,
//         // When entering the scroll trigger area (scrolling down)
//         onEnter: () => {
//             if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.pause();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//         },
//         // When leaving the scroll trigger area (scrolling down past it)
//         onLeave: () => {
//             if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.play();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.play(); // Pulse resumes after scroll animation
//         },
//         // When entering the scroll trigger area (scrolling up into it)
//         onEnterBack: () => {
//             if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.pause();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//         },
//         // When leaving the scroll trigger area (scrolling up past it, back to top)
//         onLeaveBack: () => {
//             if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.play();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.play(); // Pulse resumes at top
//         },
//       },
//     });

//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0,
//         duration: 0.8,
//         ease: 'power2.out',
//       },
//       0
//     )
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)',
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       )
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0,
//           ease: 'power1.inOut',
//         },
//         0.3
//       );

//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       // Use BASE_SUB_COMPANY_LOGO_SIZE directly for the logo width/height
//       const currentSubCompanyLogoSize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6 :
//                                          theme.breakpoints.down('md') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8 :
//                                          BASE_SUB_COMPANY_LOGO_SIZE;
//       const offset = currentSubCompanyLogoSize / 2; // Offset for centering

//       const startDistanceMultiplier = 2.0;
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       gsap.set(el as HTMLElement, {
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset),
//         y: startY - (finalPos.y - offset),
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         stagger: 0.08,
//         duration: 1.5,
//         ease: 'back.out(1.7)',
//       },
//       '>-0.5'
//     );

//     // Initial play for final rotation, but it's paused until onLeave
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();


//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     ScrollTrigger.refresh();

//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (logoPulseTweenRef.current) {
//           logoPulseTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [currentRadius, containerDimensions]);

//   return (
//     <>
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '60px', sm: '80px', md: '80px' },
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             maxWidth: { xs: '100%', md: 700, lg: 900 },
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6"
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanyLogoSize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8
//                   : BASE_SUB_COMPANY_LOGO_SIZE;
//                 const offset = currentSubCompanyLogoSize / 2;

//                 return (
//                   <Tooltip
//                     title={SUB_COMPANIES[i].description}
//                     placement="top"
//                     key={i}
//                     componentsProps={{ // Add this prop to style the tooltip popup
//                       tooltip: {
//                         sx: {
//                           borderRadius:'10px',
//                           fontSize: '1rem', // Adjust this value as needed, e.g., '1.2rem', '16px'
//                           padding: '8px 12px', // You can also adjust padding for better appearance
//                           maxWidth: '250px', // Optional: limit tooltip width for better readability
//                         },
//                       },
//                     }}
//                   >
//                     <Link
//                       component={RouterLink}
//                       to={SUB_COMPANIES[i].to}
//                       target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
//                       sx={{
//                         position: 'absolute',
//                         width: currentSubCompanyLogoSize,
//                         height: currentSubCompanyLogoSize,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         boxSizing: 'border-box',
//                         cursor: 'pointer',
//                         zIndex: 2,
//                         left: pos.x - offset,
//                         top: pos.y - offset,
//                         textDecoration: 'none',
//                         opacity: 0,
//                         transform: 'translateY(20px)',
//                         // --- ADDED/MODIFIED FOR WHITE CIRCLE BACKGROUND ---
//                         background: 'white', // White circular background for the link container
//                         borderRadius: '50%', // Ensure the container is perfectly circular
//                         padding: '12px', // Adjust padding as needed to control logo size within the circle
//                         // --- END ADDED/MODIFIED ---
//                         '& img': {
//                           transition: 'transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out',
//                           filter: 'grayscale(0%) brightness(100%)',
//                           boxShadow: 'none',
//                           // borderRadius: '50%', // REMOVED: container now handles circular shape
//                         },
//                         '&:hover img': {
//                           transform: 'scale(1.1) translateY(-5px)',
//                           filter: 'grayscale(0%) brightness(120%)',
//                         //   boxShadow: '0 10px 20px rgba(0, 255, 255, 0.4), 0 0 15px rgba(255, 255, 0, 0.5)',
//                         },
//                       }}
//                     >
//                       <img
//                         src={SUB_COMPANIES[i].image}
//                         alt={SUB_COMPANIES[i].label + ' Logo'}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'contain',
//                           boxSizing: 'border-box',
//                           borderRadius:'10%',
//                         }}
//                       />
//                     </Link>
//                   </Tooltip>
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer>

//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 70,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: 'rgba(255, 255, 255, 0.23)',
//             '&:hover': {
//               backgroundColor: 'rgba(181, 181, 181, 0.41)',
//             },
//             borderRadius: '50%',
//             width: 30,
//             height: 30,
//             minWidth: 0,
//             padding: 0,
//             opacity: 0,
//             pointerEvents: 'none',
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;















// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme, Tooltip } from '@mui/material'; // Added Tooltip import
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your main logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // --- NEW IMPORTS: Import your individual peripheral logos ---
// // IMPORTANT: Adjust these paths and filenames to match your actual logo files
// import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
// import codeitLogo from '../assets/images/codeit-logo.png';
// import peptidesLogo from '../assets/images/peptides-logo.png';
// import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
// import helixESchrollLogo from '../assets/images/helix-e-schroll-logo.png';
// import digigroLogo from '../assets/images/digigro-logo.png';
// // --- END NEW IMPORTS ---

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380;
// const BASE_BLUR_BG_SIZE = 450;
// const BASE_LOGO_SIZE = 300;

// // --- UPDATED: Increased BASE_SUB_COMPANY_SIZE for larger peripheral logos ---
// // This now directly determines the size of the *logo image itself*
// const BASE_SUB_COMPANY_LOGO_SIZE = 180; // Changed name for clarity
// // --- END UPDATED BASE_SUB_COMPANY_SIZE ---

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/', image: helixConferencesLogo, description: 'Curating world-class biotech, pharma & life science events that shape the future.' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/', image: codeitLogo, description: 'Expert IT services for software development, QA, DevOps & cloud solutions.' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/', image: peptidesLogo, description: '12+ years of scientific excellence in research, lab services, molecular biology & education support.' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals', image: helixJournalsLogo, description: 'Peer-reviewed international journals in science, technology, health & agriculture.' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll', image: digigroLogo, description: 'Digital abstract archives from global conferences in science, pharma & technology.' }, // Corrected as per your `image_cd3941.jpg` visual order
//   { label: 'DIGIGRO', to: '/digigro', image: helixESchrollLogo, description: '10+ years of experience in digital marketing, SEO & content marketing.' }, // Corrected as per your `image_cd3941.jpg` visual order
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(255, 255, 255, 0.18)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
//   paddingTop: '0vh',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.4 // Adjusted for mobile to bring circles closer
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   useEffect(() => {
//     const scrollToTop = () => {
//       window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
//       ScrollTrigger.refresh(true);
//     };

//     scrollToTop();

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     const handleBeforeUnload = () => {
//         window.scrollTo(0, 0);
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   useEffect(() => {
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 });

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//         if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, {
//         rotate: -720,
//         duration: 1.5,
//         ease: 'power3.inOut',
//       }, ">-0.4");

//     return () => {
//       entryAnimationTl.kill();
//     };
//   }, []);

//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     // Ensure tweens are killed before re-creating them to prevent duplicates
//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }
//     if (logoPulseTweenRef.current) {
//         logoPulseTweenRef.current.kill();
//         logoPulseTweenRef.current = null;
//     }

//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true, // Start paused, played by entry animation or onLeaveBack
//     });

//     logoPulseTweenRef.current = gsap.to(logoRef.current, {
//       scale: 1.05,
//       duration: 0.2,
//       yoyo: true,
//       repeat: -1,
//       ease: "power1.inOut",
//       delay: 0.5,
//       repeatDelay: 2.8,
//       paused: true, // Start paused, played by entry animation or onLeave/onLeaveBack
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500',
//         scrub: 1,
//         pin: true,
//         // When entering the scroll trigger area (scrolling down)
//         onEnter: () => {
//             if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.pause();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//         },
//         // When leaving the scroll trigger area (scrolling down past it)
//         onLeave: () => {
//             if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.play();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.play(); // Pulse resumes after scroll animation
//         },
//         // When entering the scroll trigger area (scrolling up into it)
//         onEnterBack: () => {
//             if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.pause();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//         },
//         // When leaving the scroll trigger area (scrolling up past it, back to top)
//         onLeaveBack: () => {
//             if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.play();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.play(); // Pulse resumes at top
//         },
//       },
//     });

//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0,
//         duration: 0.8,
//         ease: 'power2.out',
//       },
//       0
//     )
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)',
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       )
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0,
//           ease: 'power1.inOut',
//         },
//         0.3
//       );

//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       // Use BASE_SUB_COMPANY_LOGO_SIZE directly for the logo width/height
//       const currentSubCompanyLogoSize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6 :
//                                          theme.breakpoints.down('md') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8 :
//                                          BASE_SUB_COMPANY_LOGO_SIZE;
//       const offset = currentSubCompanyLogoSize / 2; // Offset for centering

//       const startDistanceMultiplier = 2.0;
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       gsap.set(el as HTMLElement, {
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset),
//         y: startY - (finalPos.y - offset),
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         stagger: 0.08,
//         duration: 1.5,
//         ease: 'back.out(1.7)',
//       },
//       '>-0.5'
//     );

//     // Initial play for final rotation, but it's paused until onLeave
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();


//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     ScrollTrigger.refresh();

//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (logoPulseTweenRef.current) {
//           logoPulseTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [currentRadius, containerDimensions]);

//   return (
//     <>
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '60px', sm: '80px', md: '80px' },
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             maxWidth: { xs: '100%', md: 700, lg: 900 },
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6"
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanyLogoSize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8
//                   : BASE_SUB_COMPANY_LOGO_SIZE;
//                 const offset = currentSubCompanyLogoSize / 2;

//                 return (
//                   <Tooltip
//                     title={SUB_COMPANIES[i].description}
//                     placement="top"
//                     key={i}
//                     componentsProps={{ // Add this prop to style the tooltip popup
//                       tooltip: {
//                         sx: {
//                           borderRadius:'10px',
//                           fontSize: '1rem', // Adjust this value as needed, e.g., '1.2rem', '16px'
//                           padding: '8px 12px', // You can also adjust padding for better appearance
//                           maxWidth: '250px', // Optional: limit tooltip width for better readability
//                         },
//                       },
//                     }}
//                   >
//                     <Link
//                       component={RouterLink}
//                       to={SUB_COMPANIES[i].to}
//                       target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
//                       sx={{
//                         position: 'absolute',
//                         width: currentSubCompanyLogoSize,
//                         height: currentSubCompanyLogoSize,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         boxSizing: 'border-box',
//                         cursor: 'pointer',
//                         zIndex: 2,
//                         left: pos.x - offset,
//                         top: pos.y - offset,
//                         textDecoration: 'none',
//                         opacity: 0,
//                         transform: 'translateY(20px)',
//                         // --- ADDED/MODIFIED FOR WHITE CIRCLE BACKGROUND ---
//                         background: 'white', // White circular background for the link container
//                         borderRadius: '50%', // Ensure the container is perfectly circular
//                         padding: '12px', // Adjust padding as needed to control logo size within the circle
//                         // --- END ADDED/MODIFIED ---
//                         '& img': {
//                           transition: 'transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out',
//                           filter: 'grayscale(0%) brightness(100%)',
//                           boxShadow: 'none',
//                           // borderRadius: '50%', // REMOVED: container now handles circular shape
//                         },
//                         '&:hover img': {
//                           transform: 'scale(1.1) translateY(-5px)',
//                           filter: 'grayscale(0%) brightness(120%)',
//                           boxShadow: '0 10px 20px rgba(0, 255, 255, 0.4), 0 0 15px rgba(255, 255, 0, 0.5)',
//                         },
//                       }}
//                     >
//                       <img
//                         src={SUB_COMPANIES[i].image}
//                         alt={SUB_COMPANIES[i].label + ' Logo'}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'contain',
//                           boxSizing: 'border-box',
//                           borderRadius:'10%',
//                         }}
//                       />
//                     </Link>
//                   </Tooltip>
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer>

//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 70,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: 'rgba(255, 255, 255, 0.23)',
//             '&:hover': {
//               backgroundColor: 'rgba(181, 181, 181, 0.41)',
//             },
//             borderRadius: '50%',
//             width: 30,
//             height: 30,
//             minWidth: 0,
//             padding: 0,
//             opacity: 0,
//             pointerEvents: 'none',
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;





// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme, Tooltip } from '@mui/material'; // Added Tooltip import
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your main logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // --- NEW IMPORTS: Import your individual peripheral logos ---
// // IMPORTANT: Adjust these paths and filenames to match your actual logo files
// import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
// import codeitLogo from '../assets/images/codeit-logo.png';
// import peptidesLogo from '../assets/images/peptides-logo.png';
// import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
// import helixESchrollLogo from '../assets/images/helix-e-schroll-logo.png';
// import digigroLogo from '../assets/images/digigro-logo.png';
// // --- END NEW IMPORTS ---

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380;
// const BASE_BLUR_BG_SIZE = 450;
// const BASE_LOGO_SIZE = 300;

// // --- UPDATED: Increased BASE_SUB_COMPANY_SIZE for larger peripheral logos ---
// // This now directly determines the size of the *logo image itself*
// const BASE_SUB_COMPANY_LOGO_SIZE = 180; // Changed name for clarity
// // --- END UPDATED BASE_SUB_COMPANY_SIZE ---

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: '[https://helixconferences.com/](https://helixconferences.com/)', image: helixConferencesLogo, description: 'Curating world-class biotech, pharma & life science events that shape the future.' },
//   { label: 'CODEIT', to: '[https://codeitconsulting.co.in/](https://codeitconsulting.co.in/)', image: codeitLogo, description: 'Expert IT services for software development, QA, DevOps & cloud solutions.' },
//   { label: 'PEPTIDES', to: '[https://peptides.co.in/](https://peptides.co.in/)', image: peptidesLogo, description: '12+ years of scientific excellence in research, lab services, molecular biology & education support.' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals', image: helixJournalsLogo, description: 'Peer-reviewed international journals in science, technology, health & agriculture.' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll', image: digigroLogo, description: 'Digital abstract archives from global conferences in science, pharma & technology.' }, // Corrected as per your `image_cd3941.jpg` visual order
//   { label: 'DIGIGRO', to: '/digigro', image: helixESchrollLogo, description: '10+ years of experience in digital marketing, SEO & content marketing.' }, // Corrected as per your `image_cd3941.jpg` visual order
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(255, 255, 255, 0.18)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
//   paddingTop: '0vh',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.4 // Adjusted for mobile to bring circles closer
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 0.8
//     : BASE_HEX_RADIUS;

//   useEffect(() => {
//     const scrollToTop = () => {
//       window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
//       ScrollTrigger.refresh(true);
//     };

//     scrollToTop();

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     const handleBeforeUnload = () => {
//         window.scrollTo(0, 0);
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   useEffect(() => {
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 });

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//         if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, {
//         rotate: -720,
//         duration: 1.5,
//         ease: 'power3.inOut',
//       }, ">-0.4");

//     return () => {
//       entryAnimationTl.kill();
//     };
//   }, []);

//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     // Ensure tweens are killed before re-creating them to prevent duplicates
//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }
//     if (logoPulseTweenRef.current) {
//         logoPulseTweenRef.current.kill();
//         logoPulseTweenRef.current = null;
//     }

//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true, // Start paused, played by entry animation or onLeaveBack
//     });

//     logoPulseTweenRef.current = gsap.to(logoRef.current, {
//       scale: 1.05,
//       duration: 0.2,
//       yoyo: true,
//       repeat: -1,
//       ease: "power1.inOut",
//       delay: 0.5,
//       repeatDelay: 2.8,
//       paused: true, // Start paused, played by entry animation or onLeave/onLeaveBack
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500',
//         scrub: 1,
//         pin: true,
//         // When entering the scroll trigger area (scrolling down)
//         onEnter: () => {
//             if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.pause();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//         },
//         // When leaving the scroll trigger area (scrolling down past it)
//         onLeave: () => {
//             if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.play();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.play(); // Pulse resumes after scroll animation
//         },
//         // When entering the scroll trigger area (scrolling up into it)
//         onEnterBack: () => {
//             if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.pause();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//         },
//         // When leaving the scroll trigger area (scrolling up past it, back to top)
//         onLeaveBack: () => {
//             if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.play();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.play(); // Pulse resumes at top
//         },
//       },
//     });

//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0,
//         duration: 0.8,
//         ease: 'power2.out',
//       },
//       0
//     )
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)',
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       )
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0,
//           ease: 'power1.inOut',
//         },
//         0.3
//       );

//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       // Use BASE_SUB_COMPANY_LOGO_SIZE directly for the logo width/height
//       const currentSubCompanyLogoSize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6 :
//                                          theme.breakpoints.down('md') ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8 :
//                                          BASE_SUB_COMPANY_LOGO_SIZE;
//       const offset = currentSubCompanyLogoSize / 2; // Offset for centering

//       const startDistanceMultiplier = 2.0;
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       gsap.set(el as HTMLElement, {
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset),
//         y: startY - (finalPos.y - offset),
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         stagger: 0.08,
//         duration: 1.5,
//         ease: 'back.out(1.7)',
//       },
//       '>-0.5'
//     );

//     // Initial play for final rotation, but it's paused until onLeave
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();


//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     ScrollTrigger.refresh();

//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (logoPulseTweenRef.current) {
//           logoPulseTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [currentRadius, containerDimensions]);

//   return (
//     <>
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '60px', sm: '80px', md: '80px' },
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             maxWidth: { xs: '100%', md: 700, lg: 900 },
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6"
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanyLogoSize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8
//                   : BASE_SUB_COMPANY_LOGO_SIZE;
//                 const offset = currentSubCompanyLogoSize / 2;

//                 return (
//                   <Tooltip
//                     title={SUB_COMPANIES[i].description}
//                     placement="top"
//                     key={i}
//                     componentsProps={{ // Add this prop to style the tooltip popup
//                       tooltip: {
//                         sx: {
//                           borderRadius:'10px',
//                           fontSize: '1rem', // Adjust this value as needed, e.g., '1.2rem', '16px'
//                           padding: '8px 12px', // You can also adjust padding for better appearance
//                           maxWidth: '250px', // Optional: limit tooltip width for better readability
//                         },
//                       },
//                     }}
//                   >
//                     <Link
//                       component={RouterLink}
//                       to={SUB_COMPANIES[i].to}
//                       target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
//                       sx={{
//                         position: 'absolute',
//                         width: currentSubCompanyLogoSize,
//                         height: currentSubCompanyLogoSize,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         boxSizing: 'border-box',
//                         cursor: 'pointer',
//                         zIndex: 2,
//                         left: pos.x - offset,
//                         top: pos.y - offset,
//                         textDecoration: 'none',
//                         opacity: 0,
//                         transform: 'translateY(20px)',
//                         // --- ADDED/MODIFIED FOR WHITE CIRCLE BACKGROUND ---
//                         background: 'white', // White circular background for the link container
//                         borderRadius: '50%', // Ensure the container is perfectly circular
//                         padding: '12px', // Adjust padding as needed to control logo size within the circle
//                         // --- END ADDED/MODIFIED ---
//                         '& img': {
//                           transition: 'transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out',
//                           filter: 'grayscale(0%) brightness(100%)',
//                           boxShadow: 'none',
//                           // borderRadius: '50%', // REMOVED: container now handles circular shape
//                         },
//                         '&:hover img': {
//                           transform: 'scale(1.1) translateY(-5px)',
//                           filter: 'grayscale(0%) brightness(120%)',
//                           boxShadow: '0 10px 20px rgba(0, 255, 255, 0.4), 0 0 15px rgba(255, 255, 0, 0.5)',
//                         },
//                       }}
//                     >
//                       <img
//                         src={SUB_COMPANIES[i].image}
//                         alt={SUB_COMPANIES[i].label + ' Logo'}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'contain',
//                           boxSizing: 'border-box',
//                           borderRadius:'10%',
//                         }}
//                       />
//                     </Link>
//                   </Tooltip>
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer>

//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 70,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: 'rgba(255, 255, 255, 0.23)',
//             '&:hover': {
//               backgroundColor: 'rgba(181, 181, 181, 0.41)',
//             },
//             borderRadius: '50%',
//             width: 30,
//             height: 30,
//             minWidth: 0,
//             padding: 0,
//             opacity: 0,
//             pointerEvents: 'none',
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;











// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme, Tooltip } from '@mui/material'; // Added Tooltip import
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your main logo path is correct
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// // --- NEW IMPORTS: Import your individual peripheral logos ---
// // IMPORTANT: Adjust these paths and filenames to match your actual logo files
// import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
// import codeitLogo from '../assets/images/codeit-logo.png';
// import peptidesLogo from '../assets/images/peptides-logo.png';
// import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
// import helixESchrollLogo from '../assets/images/helix-e-schroll-logo.png';
// import digigroLogo from '../assets/images/digigro-logo.png';
// // --- END NEW IMPORTS ---

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT = '#F5F8FA';

// // Define base sizes and radii
// const BASE_HEX_RADIUS = 380;
// const BASE_BLUR_BG_SIZE = 450;
// const BASE_LOGO_SIZE = 300;

// // --- ADJUSTED: BASE_SUB_COMPANY_LOGO_SIZE for better mobile scaling and desktop increase ---
// // This now directly determines the largest size for desktop, and scales down for mobile
// const BASE_SUB_COMPANY_LOGO_SIZE = 250; // Increased base size for larger desktop logos
// // --- END ADJUSTED BASE_SUB_COMPANY_SIZE ---

// const SUB_COMPANIES = [
//   { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/', image: helixConferencesLogo, description: 'Curating world-class biotech, pharma & life science events that shape the future.' },
//   { label: 'CODEIT', to: 'https://codeitconsulting.co.in/', image: codeitLogo, description: 'Expert IT services for software development, QA, DevOps & cloud solutions.' },
//   { label: 'PEPTIDES', to: 'https://peptides.co.in/', image: peptidesLogo, description: '12+ years of scientific excellence in research, lab services, molecular biology & education support.' },
//   { label: 'HELIX JOURNALS', to: '/helix-journals', image: helixJournalsLogo, description: 'Peer-reviewed international journals in science, technology, health & agriculture.' },
//   { label: 'HELIX E-SCHROLL', to: '/helix-e-schroll', image: digigroLogo, description: 'Digital abstract archives from global conferences in science, pharma & technology.' }, // Corrected as per your `image_cd3941.jpg` visual order
//   { label: 'DIGIGRO', to: '/digigro', image: helixESchrollLogo, description: '10+ years of experience in digital marketing, SEO & content marketing.' }, // Corrected as per your `image_cd3941.jpg` visual order
// ];

// const StyledBlurBackground = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   width: BASE_BLUR_BG_SIZE,
//   height: BASE_BLUR_BG_SIZE,
//   borderRadius: '20%',
//   background: 'rgba(255, 255, 255, 0.18)',
//   zIndex: 1,
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   filter: 'blur(10px)',
//   [theme.breakpoints.down('md')]: {
//     width: BASE_BLUR_BG_SIZE * 0.8,
//     height: BASE_BLUR_BG_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_BLUR_BG_SIZE * 0.6,
//     height: BASE_BLUR_BG_SIZE * 0.6,
//   },
// }));

// const CenterLogo = styled('img')(({ theme }) => ({
//   width: BASE_LOGO_SIZE,
//   height: BASE_LOGO_SIZE,
//   borderRadius: '20%',
//   zIndex: 2,
//   position: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%, -50%)',
//   opacity: 1,
//   [theme.breakpoints.down('md')]: {
//     width: BASE_LOGO_SIZE * 0.8,
//     height: BASE_LOGO_SIZE * 0.8,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: BASE_LOGO_SIZE * 0.6,
//     height: BASE_LOGO_SIZE * 0.6,
//   },
// }));

// const HeroContainer = styled(Box)(() => ({
//   position: 'relative',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
//   flexDirection: 'column',
//   overflow: 'hidden',
//   paddingTop: '0vh',
// }));

// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 0,
// });

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const heroRef = useRef<HTMLDivElement | null>(null);
//   const logoRef = useRef<HTMLImageElement | null>(null);
//   const blurBgRef = useRef<HTMLDivElement | null>(null);
//   const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
//   const linesSvgRef = useRef<SVGSVGElement | null>(null);
//   const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

//   const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

//   const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
//   const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

//   // --- UPDATED: currentRadius for distance based on device width ---
//   const currentRadius = theme.breakpoints.down('sm')
//     ? BASE_HEX_RADIUS * 0.6 // Increased distance for mobile
//     : theme.breakpoints.down('md')
//     ? BASE_HEX_RADIUS * 1.1 // Increased for tablet
//     : BASE_HEX_RADIUS * 2.2; // Significantly increased for larger desktop screens
//   // --- END UPDATED currentRadius ---

//   useEffect(() => {
//     const scrollToTop = () => {
//       window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
//       ScrollTrigger.refresh(true);
//     };

//     scrollToTop();

//     const updateDimensions = () => {
//       if (heroRef.current) {
//         setContainerDimensions({
//           width: heroRef.current.offsetWidth,
//           height: heroRef.current.offsetHeight,
//         });
//       }
//     };

//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);

//     const handleBeforeUnload = () => {
//         window.scrollTo(0, 0);
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);

//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);

//   useEffect(() => {
//     if (!logoRef.current || !blurBgRef.current) {
//       return;
//     }

//     gsap.killTweensOf([logoRef.current, blurBgRef.current]);
//     gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 });

//     const entryAnimationTl = gsap.timeline({
//       onComplete: () => {
//         if (initialLogoRotationTweenRef.current) {
//           initialLogoRotationTweenRef.current.play();
//         }
//         if (logoPulseTweenRef.current) {
//             logoPulseTweenRef.current.play();
//         }
//       },
//     });

//     entryAnimationTl
//       .to([blurBgRef.current, logoRef.current], {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         ease: 'power2.out',
//       })
//       .to(logoRef.current, {
//         rotate: -720,
//         duration: 1.5,
//         ease: 'power3.inOut',
//       }, ">-0.4");

//     return () => {
//       entryAnimationTl.kill();
//     };
//   }, []);

//   const center = {
//     x: containerDimensions.width / 2,
//     y: containerDimensions.height / 2,
//   };

//   const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
//   const finalPositions = SUB_COMPANIES.map((_, i) => {
//     return {
//       x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
//       y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
//     };
//   });

//   useEffect(() => {
//     ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//     // Ensure tweens are killed before re-creating them to prevent duplicates
//     if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//         initialLogoRotationTweenRef.current = null;
//     }
//     if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//         finalLogoRotationTweenRef.current = null;
//     }
//     if (logoPulseTweenRef.current) {
//         logoPulseTweenRef.current.kill();
//         logoPulseTweenRef.current = null;
//     }

//     if (
//       !heroRef.current ||
//       !logoRef.current ||
//       !blurBgRef.current ||
//       !peripheralLinksContainerRef.current ||
//       !linesSvgRef.current ||
//       !scrollToTopButtonRef.current
//     ) {
//       return;
//     }

//     initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//       paused: true, // Start paused, played by entry animation or onLeaveBack
//     });

//     logoPulseTweenRef.current = gsap.to(logoRef.current, {
//       scale: 1.05,
//       duration: 0.2,
//       yoyo: true,
//       repeat: -1,
//       ease: "power1.inOut",
//       delay: 0.5,
//       repeatDelay: 2.8,
//       paused: true, // Start paused, played by entry animation or onLeave/onLeaveBack
//     });

//     const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'center center',
//         end: '+=2500',
//         scrub: 1,
//         pin: true,
//         // When entering the scroll trigger area (scrolling down)
//         onEnter: () => {
//             if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.pause();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//         },
//         // When leaving the scroll trigger area (scrolling down past it)
//         onLeave: () => {
//             if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.play();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.play(); // Pulse resumes after scroll animation
//         },
//         // When entering the scroll trigger area (scrolling up into it)
//         onEnterBack: () => {
//             if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.pause();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
//         },
//         // When leaving the scroll trigger area (scrolling up past it, back to top)
//         onLeaveBack: () => {
//             if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.play();
//             if (logoPulseTweenRef.current) logoPulseTweenRef.current.play(); // Pulse resumes at top
//         },
//       },
//     });

//     tl.to(
//       logoRef.current,
//       {
//         rotate: 0,
//         duration: 0.8,
//         ease: 'power2.out',
//       },
//       0
//     )
//       .to(
//         blurBgRef.current,
//         {
//           filter: 'blur(0px)',
//           opacity: 0,
//           duration: 0.8,
//           ease: 'power2.out',
//         },
//         0
//       )
//       .to(
//         linesSvgRef.current,
//         {
//           opacity: 1,
//           duration: 1.0,
//           ease: 'power1.inOut',
//         },
//         0.3
//       );

//     subCompanyElements.forEach((el, i) => {
//       const finalPos = finalPositions[i];
//       // --- UPDATED: currentSubCompanyLogoSize for size based on device width ---
//       const currentSubCompanyLogoSize = theme.breakpoints.down('sm')
//         ? BASE_SUB_COMPANY_LOGO_SIZE * 0.4 // Further decreased size for mobile
//         : theme.breakpoints.down('md')
//         ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8
//         : BASE_SUB_COMPANY_LOGO_SIZE * 1.0; // Using BASE_SUB_COMPANY_LOGO_SIZE directly for desktop
//       // --- END UPDATED currentSubCompanyLogoSize ---

//       const offset = currentSubCompanyLogoSize / 2; // Offset for centering

//       const startDistanceMultiplier = 2.0;
//       const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
//       const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

//       gsap.set(el as HTMLElement, {
//         opacity: 0,
//         scale: 0.5,
//         x: startX - (finalPos.x - offset),
//         y: startY - (finalPos.y - offset),
//       });
//     });

//     tl.to(
//       subCompanyElements,
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         stagger: 0.08,
//         duration: 1.5,
//         ease: 'back.out(1.7)',
//       },
//       '>-0.5'
//     );

//     // Initial play for final rotation, but it's paused until onLeave
//     finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
//       rotate: '+=360',
//       duration: 15,
//       ease: 'none',
//       repeat: -1,
//     }).pause();


//     gsap.to(scrollToTopButtonRef.current, {
//       opacity: 1,
//       pointerEvents: 'auto',
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: 'top top',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     ScrollTrigger.refresh();

//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (logoPulseTweenRef.current) {
//           logoPulseTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, [currentRadius, containerDimensions]);

//   return (
//     <>
//       <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             minHeight: '100vh',
//             zIndex: -1,
//             background: '#0A0A0A',
//             backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//           `,
//             filter: 'none',
//             borderRadius: '0',
//             pointerEvents: 'none',
//           }}
//         />

//         <Typography
//           variant="h2"
//           sx={{
//             color: HERO_TEXT,
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
//             mt: { xs: '60px', sm: '80px', md: '80px' },
//             px: 2,
//           }}
//         >
//           Welcome to Helix Synergy Corp
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: '#A7B6C2',
//             fontWeight: 400,
//             letterSpacing: 1,
//             zIndex: 3,
//             textAlign: 'center',
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
//             mt: 2,
//             mb: 8,
//             px: 2,
//           }}
//         >
//           Innovative Synergy Solutions for a Connected World
//         </Typography>

//         <HeroContainer
//           ref={heroRef}
//           sx={{
//             height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
//             width: '100%',
//             // --- UPDATED: maxWidth for HeroContainer to allow more spread on desktop ---
//             maxWidth: { xs: '100%', md: 900, lg: 1200 },
//             // --- END UPDATED maxWidth ---
//             margin: '0 auto',
//             position: 'relative',
//           }}
//         >
//           <Box
//             sx={{
//               width: '100%',
//               height: '100%',
//               position: 'relative',
//               maxWidth: '100%',
//               overflow: 'hidden',
//             }}
//           >
//             <StyledBlurBackground ref={blurBgRef} />
//             <CenterLogo ref={logoRef} src={logo} alt="Logo" />

//             <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
//               {finalPositions.map((pos, i) => (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray="8 6"
//                 />
//               ))}
//             </LinesSVG>
//             <Box ref={peripheralLinksContainerRef}>
//               {finalPositions.map((pos, i) => {
//                 const currentSubCompanyLogoSize = theme.breakpoints.down('sm')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 0.6 // Further decreased size for mobile
//                   : theme.breakpoints.down('md')
//                   ? BASE_SUB_COMPANY_LOGO_SIZE * 1
//                   : BASE_SUB_COMPANY_LOGO_SIZE * 1.5; // Using BASE_SUB_COMPANY_LOGO_SIZE directly for desktop
//                 const offset = currentSubCompanyLogoSize / 2;

//                 return (
//                   <Tooltip
//                     title={SUB_COMPANIES[i].description}
//                     placement="top"
//                     key={i}
//                     componentsProps={{ // Add this prop to style the tooltip popup
//                       tooltip: {
//                         sx: {
//                           borderRadius:'10px',
//                           fontSize: '1rem', // Adjust this value as needed, e.g., '1.2rem', '16px'
//                           padding: '8px 12px', // You can also adjust padding for better appearance
//                           maxWidth: '250px', // Optional: limit tooltip width for better readability
//                         },
//                       },
//                     }}
//                   >
//                     <Link
//                       component={RouterLink}
//                       to={SUB_COMPANIES[i].to}
//                       target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
//                       sx={{
//                         position: 'absolute',
//                         width: currentSubCompanyLogoSize,
//                         height: currentSubCompanyLogoSize,
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         boxSizing: 'border-box',
//                         cursor: 'pointer',
//                         zIndex: 2,
//                         left: pos.x - offset,
//                         top: pos.y - offset,
//                         textDecoration: 'none',
//                         opacity: 0,
//                         transform: 'translateY(20px)',
//                         background: 'white', // White circular background for the link container
//                         borderRadius: '50%', // Reverted to circular
//                         padding: '12px', // Adjust padding as needed to control logo size within the circle
//                         '& img': {
//                           transition: 'transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out',
//                           filter: 'grayscale(0%) brightness(100%)',
//                           boxShadow: 'none',
//                           borderRadius:'10%', // Maintain some border radius on the image itself
//                         },
//                         '&:hover img': {
//                           transform: 'scale(1.1) translateY(-5px)',
//                           filter: 'grayscale(0%) brightness(120%)',
//                         //   boxShadow: '0 10px 20px rgba(0, 255, 255, 0.4), 0 0 15px rgba(255, 255, 0, 0.5)',
//                         },
//                       }}
//                     >
//                       <img
//                         src={SUB_COMPANIES[i].image}
//                         alt={SUB_COMPANIES[i].label + ' Logo'}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'contain',
//                           boxSizing: 'border-box',
//                           borderRadius:'10%',
//                         }}
//                       />
//                     </Link>
//                   </Tooltip>
//                 );
//               })}
//             </Box>
//           </Box>
//         </HeroContainer>

//         <Button
//           ref={scrollToTopButtonRef}
//           variant="contained"
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           sx={{
//             position: 'fixed',
//             bottom: 70,
//             right: 20,
//             zIndex: 100000,
//             backgroundColor: 'rgba(255, 255, 255, 0.23)',
//             '&:hover': {
//               backgroundColor: 'rgba(181, 181, 181, 0.41)',
//             },
//             borderRadius: '50%',
//             width: 30,
//             height: 30,
//             minWidth: 0,
//             padding: 0,
//             opacity: 0,
//             pointerEvents: 'none',
//             transition: 'opacity 0.3s ease-in-out',
//           }}
//           className="scroll-to-top-button"
//         >
//           <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//         </Button>
//       </Box>
//     </>
//   );
// };

// export default HomePage;





import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, useTheme, Tooltip } from '@mui/material'; // Added Tooltip import
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import logo from '../assets/logo/my-logo.png'; // Assuming your main logo path is correct
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useMediaQuery from '@mui/material/useMediaQuery';

// --- NEW IMPORTS: Import your individual peripheral logos ---
// IMPORTANT: Adjust these paths and filenames to match your actual logo files
import helixConferencesLogo from '../assets/images/helix-conferences-logo.png';
import codeitLogo from '../assets/images/codeit-logo.png';
import peptidesLogo from '../assets/images/peptides-logo.png';
import helixJournalsLogo from '../assets/images/helix-journals-logo.png';
import helixEscrollLogo from '../assets/images/helix-e-scroll-logo.png';
import digigroLogo from '../assets/images/digigro-logo.png';
// --- END NEW IMPORTS ---

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HERO_TEXT = '#F5F8FA';

// Define base sizes and radii
const BASE_HEX_RADIUS = 380;
const BASE_BLUR_BG_SIZE = 450;
const BASE_LOGO_SIZE = 300;

// --- ADJUSTED: BASE_SUB_COMPANY_LOGO_SIZE for better mobile scaling and desktop increase ---
// This now directly determines the largest size for desktop, and scales down for mobile
const BASE_SUB_COMPANY_LOGO_SIZE = 250; // Increased base size for larger desktop logos
// --- END ADJUSTED BASE_SUB_COMPANY_SIZE ---

const SUB_COMPANIES = [
  { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/', image: helixConferencesLogo, description: 'Curating world-class biotech, pharma & life science events that shape the future.' },
  { label: 'CODEIT', to: 'https://codeitconsulting.co.in/', image: codeitLogo, description: 'Expert IT services for software development, QA, DevOps & cloud solutions.' },
  { label: 'PEPTIDES', to: 'https://peptides.co.in/', image: peptidesLogo, description: '12+ years of scientific excellence in research, lab services, molecular biology & education support.' },
  { label: 'HELIX JOURNALS', to: '/helix-journals', image: helixJournalsLogo, description: 'Peer-reviewed international journals in science, technology, health & agriculture.' },
//   { label: 'HELIX E-scroll', to: '/helix-e-scroll', image: digigroLogo, description: 'Digital abstract archives from global conferences in science, pharma & technology.' }, // Corrected as per your `image_cd3941.jpg` visual order
//   { label: 'DIGIGRO', to: '/digigro', image: helixEscrollLogo, description: '10+ years of experience in digital marketing, SEO & content marketing.' }, // Corrected as per your `image_cd3941.jpg` visual order
{ label: 'HELIX E-scroll', to: '/helix-e-scroll', image: helixEscrollLogo, description: '10+ years of experience in digital marketing, SEO & content marketing.' },
  { label: 'DIGIGRO', to: '/digigro', image: digigroLogo, description: 'Digital abstract archives from global conferences in science, pharma & technology.' },
];

const StyledBlurBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: BASE_BLUR_BG_SIZE,
  height: BASE_BLUR_BG_SIZE,
  borderRadius: '20%',
  background: 'rgba(255, 255, 255, 0.18)',
  zIndex: 1,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 1,
  filter: 'blur(10px)',
  [theme.breakpoints.down('md')]: {
    width: BASE_BLUR_BG_SIZE * 0.8,
    height: BASE_BLUR_BG_SIZE * 0.8,
  },
  [theme.breakpoints.down('sm')]: {
    width: BASE_BLUR_BG_SIZE * 0.6,
    height: BASE_BLUR_BG_SIZE * 0.6,
  },
}));

const CenterLogo = styled('img')(({ theme }) => ({
  width: BASE_LOGO_SIZE,
  height: BASE_LOGO_SIZE,
  borderRadius: '20%',
  zIndex: 2,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 1,
  [theme.breakpoints.down('md')]: {
    width: BASE_LOGO_SIZE * 0.8,
    height: BASE_LOGO_SIZE * 0.8,
  },
  [theme.breakpoints.down('sm')]: {
    width: BASE_LOGO_SIZE * 0.6,
    height: BASE_LOGO_SIZE * 0.6,
  },
}));

const HeroContainer = styled(Box)(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent',
  flexDirection: 'column',
  overflow: 'hidden',
  paddingTop: '0vh',
}));

const LinesSVG = styled('svg')({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  pointerEvents: 'none',
  opacity: 0,
});

const HomePage: React.FC = () => {
  const theme = useTheme();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const blurBgRef = useRef<HTMLDivElement | null>(null);
  const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
  const linesSvgRef = useRef<SVGSVGElement | null>(null);
  const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
  const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
  const logoPulseTweenRef = useRef<gsap.core.Tween | null>(null);

  // --- UPDATED: currentRadius for distance based on device width ---
  const currentRadius = theme.breakpoints.down('sm')
    ? BASE_HEX_RADIUS * 0.5 // Reduced distance for mobile (from 0.6 to 0.4)
    : theme.breakpoints.down('md')
    ? BASE_HEX_RADIUS * 1.0 // Increased for tablet
    : BASE_HEX_RADIUS * 2; // Significantly increased for larger desktop screens
  // --- END UPDATED currentRadius ---

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      ScrollTrigger.refresh(true);
    };

    scrollToTop();

    const updateDimensions = () => {
      if (heroRef.current) {
        setContainerDimensions({
          width: heroRef.current.offsetWidth,
          height: heroRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const handleBeforeUnload = () => {
        window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (!logoRef.current || !blurBgRef.current) {
      return;
    }

    gsap.killTweensOf([logoRef.current, blurBgRef.current]);
    gsap.set([blurBgRef.current, logoRef.current], { opacity: 0, scale: 0.5, rotate: 0 });

    const entryAnimationTl = gsap.timeline({
      onComplete: () => {
        if (initialLogoRotationTweenRef.current) {
          initialLogoRotationTweenRef.current.play();
        }
        if (logoPulseTweenRef.current) {
            logoPulseTweenRef.current.play();
        }
      },
    });

    entryAnimationTl
      .to([blurBgRef.current, logoRef.current], {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
      })
      .to(logoRef.current, {
        rotate: -720,
        duration: 1.5,
        ease: 'power3.inOut',
      }, ">-0.4");

    return () => {
      entryAnimationTl.kill();
    };
  }, []);

  const center = {
    x: containerDimensions.width / 2,
    y: containerDimensions.height / 2,
  };

  const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
  const finalPositions = SUB_COMPANIES.map((_, i) => {
    return {
      x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
      y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
    };
  });

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Ensure tweens are killed before re-creating them to prevent duplicates
    if (initialLogoRotationTweenRef.current) {
        initialLogoRotationTweenRef.current.kill();
        initialLogoRotationTweenRef.current = null;
    }
    if (finalLogoRotationTweenRef.current) {
        finalLogoRotationTweenRef.current.kill();
        finalLogoRotationTweenRef.current = null;
    }
    if (logoPulseTweenRef.current) {
        logoPulseTweenRef.current.kill();
        logoPulseTweenRef.current = null;
    }

    if (
      !heroRef.current ||
      !logoRef.current ||
      !blurBgRef.current ||
      !peripheralLinksContainerRef.current ||
      !linesSvgRef.current ||
      !scrollToTopButtonRef.current
    ) {
      return;
    }

    initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
      rotate: '+=360',
      duration: 15,
      ease: 'none',
      repeat: -1,
      paused: true, // Start paused, played by entry animation or onLeaveBack
    });

    logoPulseTweenRef.current = gsap.to(logoRef.current, {
      scale: 1.05,
      duration: 0.2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      delay: 0.5,
      repeatDelay: 2.8,
      paused: true, // Start paused, played by entry animation or onLeave/onLeaveBack
    });

    const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'center center',
        end: '+=2500',
        scrub: 1,
        pin: true,
        // When entering the scroll trigger area (scrolling down)
        onEnter: () => {
            if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.pause();
            if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
        },
        // When leaving the scroll trigger area (scrolling down past it)
        onLeave: () => {
            if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.play();
            if (logoPulseTweenRef.current) logoPulseTweenRef.current.play(); // Pulse resumes after scroll animation
        },
        // When entering the scroll trigger area (scrolling up into it)
        onEnterBack: () => {
            if (finalLogoRotationTweenRef.current) finalLogoRotationTweenRef.current.pause();
            if (logoPulseTweenRef.current) logoPulseTweenRef.current.pause();
        },
        // When leaving the scroll trigger area (scrolling up past it, back to top)
        onLeaveBack: () => {
            if (initialLogoRotationTweenRef.current) initialLogoRotationTweenRef.current.play();
            if (logoPulseTweenRef.current) logoPulseTweenRef.current.play(); // Pulse resumes at top
        },
      },
    });

    tl.to(
      logoRef.current,
      {
        rotate: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
      0
    )
      .to(
        blurBgRef.current,
        {
          filter: 'blur(0px)',
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        0
      )
      .to(
        linesSvgRef.current,
        {
          opacity: 1,
          duration: 1.0,
          ease: 'power1.inOut',
        },
        0.3
      );

    subCompanyElements.forEach((el, i) => {
      const finalPos = finalPositions[i];
      // --- UPDATED: currentSubCompanyLogoSize for size based on device width ---
      const currentSubCompanyLogoSize = theme.breakpoints.down('sm')
        ? BASE_SUB_COMPANY_LOGO_SIZE * 0.4 // Further decreased size for mobile
        : theme.breakpoints.down('md')
        ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8
        : BASE_SUB_COMPANY_LOGO_SIZE * 1.0; // Using BASE_SUB_COMPANY_LOGO_SIZE directly for desktop
      // --- END UPDATED currentSubCompanyLogoSize ---

      const offset = currentSubCompanyLogoSize / 2; // Offset for centering

      const startDistanceMultiplier = 2.0;
      const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
      const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

      gsap.set(el as HTMLElement, {
        opacity: 0,
        scale: 0.5,
        x: startX - (finalPos.x - offset),
        y: startY - (finalPos.y - offset),
      });
    });

    tl.to(
      subCompanyElements,
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        stagger: 0.08,
        duration: 1.5,
        ease: 'back.out(1.7)',
      },
      '>-0.5'
    );

    // Initial play for final rotation, but it's paused until onLeave
    finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
      rotate: '+=360',
      duration: 15,
      ease: 'none',
      repeat: -1,
    }).pause();


    gsap.to(scrollToTopButtonRef.current, {
      opacity: 1,
      pointerEvents: 'auto',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        toggleActions: 'play none none reverse',
      },
    });

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      if (initialLogoRotationTweenRef.current) {
        initialLogoRotationTweenRef.current.kill();
      }
      if (finalLogoRotationTweenRef.current) {
        finalLogoRotationTweenRef.current.kill();
      }
      if (logoPulseTweenRef.current) {
          logoPulseTweenRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [currentRadius, containerDimensions]);

  return (
    <>
      <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            minHeight: '100vh',
            zIndex: -1,
            background: '#0A0A0A',
            backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
          `,
            filter: 'none',
            borderRadius: '0',
            pointerEvents: 'none',
          }}
        />

        <Typography
          variant="h2"
          sx={{
            color: HERO_TEXT,
            fontWeight: 800,
            letterSpacing: 2,
            textShadow: '0 2px 12px #000',
            zIndex: 3,
            textAlign: 'center',
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem' },
            mt: { xs: '60px', sm: '80px', md: '80px' },
            px: 2,
          }}
        >
          Welcome to Helix Synergy Corp
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#A7B6C2',
            fontWeight: 400,
            letterSpacing: 1,
            zIndex: 3,
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            mt: 2,
            mb: 8,
            px: 2,
          }}
        >
          Innovative Synergy Solutions for a Connected World
        </Typography>

        <HeroContainer
          ref={heroRef}
          sx={{
            height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
            minHeight: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' },
            width: '100%',
            // --- UPDATED: maxWidth for HeroContainer to allow more spread on desktop ---
            maxWidth: { xs: '100%', md: 900, lg: 1200 },
            // --- END UPDATED maxWidth ---
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative',
              maxWidth: '100%',
              overflow: 'hidden',
            }}
          >
            <StyledBlurBackground ref={blurBgRef} />
            <CenterLogo ref={logoRef} src={logo} alt="Logo" />

            <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
              {finalPositions.map((pos, i) => (
                <line
                  key={i}
                  x1={center.x}
                  y1={center.y}
                  x2={pos.x}
                  y2={pos.y}
                  stroke="#394B59"
                  strokeWidth={3}
                  strokeDasharray="8 6"
                />
              ))}
            </LinesSVG>
            <Box ref={peripheralLinksContainerRef}>
              {finalPositions.map((pos, i) => {
                const currentSubCompanyLogoSize = theme.breakpoints.down('sm')
                  ? BASE_SUB_COMPANY_LOGO_SIZE * 0.4 // Further decreased size for mobile
                  : theme.breakpoints.down('md')
                  ? BASE_SUB_COMPANY_LOGO_SIZE * 0.8
                  : BASE_SUB_COMPANY_LOGO_SIZE * 1.0; // Using BASE_SUB_COMPANY_LOGO_SIZE directly for desktop
                const offset = currentSubCompanyLogoSize / 2;

                return (
                  <Tooltip
                    title={SUB_COMPANIES[i].description}
                    placement="top"
                    key={i}
                    componentsProps={{ // Add this prop to style the tooltip popup
                      tooltip: {
                        sx: {
                          borderRadius:'10px',
                          fontSize: '1rem', // Adjust this value as needed, e.g., '1.2rem', '16px'
                          padding: '8px 12px', // You can also adjust padding for better appearance
                          maxWidth: '250px', // Optional: limit tooltip width for better readability
                        },
                      },
                    }}
                  >
                    <Link
                      component={RouterLink}
                      to={SUB_COMPANIES[i].to}
                      target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
                      sx={{
                        position: 'absolute',
                        width: currentSubCompanyLogoSize,
                        height: currentSubCompanyLogoSize,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        cursor: 'pointer',
                        zIndex: 2,
                        left: pos.x - offset,
                        top: pos.y - offset,
                        textDecoration: 'none',
                        opacity: 0,
                        transform: 'translateY(20px)',
                        background: 'white', // White circular background for the link container
                        borderRadius: '50%', // Reverted to circular
                        padding: '12px', // Adjust padding as needed to control logo size within the circle
                        '& img': {
                          transition: 'transform 0.3s ease-out, filter 0.3s ease-out, box-shadow 0.3s ease-out',
                          filter: 'grayscale(0%) brightness(100%)',
                          boxShadow: 'none',
                          borderRadius:'10%', // Maintain some border radius on the image itself
                        },
                        '&:hover img': {
                          transform: 'scale(1.1) translateY(-5px)',
                          filter: 'grayscale(0%) brightness(120%)',
                        //   boxShadow: '0 10px 20px rgba(0, 255, 255, 0.4), 0 0 15px rgba(255, 255, 0, 0.5)',
                        },
                      }}
                    >
                      <img
                        src={SUB_COMPANIES[i].image}
                        alt={SUB_COMPANIES[i].label + ' Logo'}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          boxSizing: 'border-box',
                          borderRadius:'10%',
                        }}
                      />
                    </Link>
                  </Tooltip>
                );
              })}
            </Box>
          </Box>
        </HeroContainer>

        <Button
          ref={scrollToTopButtonRef}
          variant="contained"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{
            position: 'fixed',
            bottom: 70,
            right: 20,
            zIndex: 100000,
            backgroundColor: 'rgba(255, 255, 255, 0.23)',
            '&:hover': {
              backgroundColor: 'rgba(181, 181, 181, 0.41)',
            },
            borderRadius: '50%',
            width: 30,
            height: 30,
            minWidth: 0,
            padding: 0,
            opacity: 0,
            pointerEvents: 'none',
            transition: 'opacity 0.3s ease-in-out',
          }}
          className="scroll-to-top-button"
        >
          <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
        </Button>
      </Box>
    </>
  );
};

export default HomePage;
