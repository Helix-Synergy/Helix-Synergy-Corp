// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Typography, Button, useTheme } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { Link as RouterLink } from 'react-router-dom';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import DescriptionIcon from '@mui/icons-material/Description';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import Link from '@mui/material/Link';
// import logo from '../assets/logo/my-logo.png'; // Assuming your logo path is correct
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

// // Initial opacity for LinesSVG is now 1 for data stream effect, drawing will control visibility
// const LinesSVG = styled('svg')({
//   position: 'absolute',
//   left: 0,
//   top: 0,
//   width: '100%',
//   height: '100%',
//   zIndex: 1,
//   pointerEvents: 'none',
//   opacity: 1, // Initial opacity is 1, as stroke-dashoffset will hide/show lines
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
//   const continuousLineFlowTweenRef = useRef<gsap.core.Tween | null>(null); // New ref for continuous line animation

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
//     if (continuousLineFlowTweenRef.current) { // Kill continuous line animation on re-render/unmount
//       continuousLineFlowTweenRef.current.kill();
//       continuousLineFlowTweenRef.current = null;
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
//     const lineElements = gsap.utils.toArray(linesSvgRef.current.children); // Get SVG line elements

//     // --- Data Stream Connections - Initial SVG Line Setup ---
//     lineElements.forEach((lineEl: any, i) => {
//       const x1 = parseFloat(lineEl.getAttribute('x1'));
//       const y1 = parseFloat(lineEl.getAttribute('y1'));
//       const x2 = parseFloat(lineEl.getAttribute('x2'));
//       const y2 = parseFloat(lineEl.getAttribute('y2'));
//       const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//       gsap.set(lineEl, {
//         strokeDasharray: length,
//         strokeDashoffset: length, // Start fully offset (invisible)
//       });
//     });

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
//           if (continuousLineFlowTweenRef.current) { // Ensure continuous line flow plays when leaving
//             continuousLineFlowTweenRef.current.play();
//           }
//         },
//         onEnterBack: () => {
//           if (finalLogoRotationTweenRef.current) {
//             finalLogoRotationTweenRef.current.pause(); // Pause final rotation when scrolling back into trigger
//           }
//           if (continuousLineFlowTweenRef.current) { // Pause continuous line flow when re-entering
//             continuousLineFlowTweenRef.current.pause();
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
//           if (continuousLineFlowTweenRef.current) { // Kill continuous line flow when leaving back
//             continuousLineFlowTweenRef.current.kill();
//             continuousLineFlowTweenRef.current = null;
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
//       // --- DATA STREAM CONNECTIONS - Line Drawing Animation ---
//       // Replace existing linesSvgRef opacity animation with stroke-dashoffset animation
//       .to(
//         lineElements,
//         {
//           strokeDashoffset: 0, // Draw the lines
//           stagger: 0.1, // Stagger drawing of each line
//           duration: 1.2, // Duration for drawing all lines
//           ease: 'power1.inOut',
//           onComplete: () => {
//             // Start continuous flow animation ONLY after drawing is complete
//             const maxLineLength = Math.max(...lineElements.map((el: any) => parseFloat(el.getAttribute('stroke-dasharray'))));
//             continuousLineFlowTweenRef.current = gsap.to(lineElements, {
//               strokeDashoffset: `-=${maxLineLength * 2}`, // Animate offset to create flow
//               duration: 8, // Speed of the flow
//               ease: 'none',
//               repeat: -1,
//             });
//           }
//         },
//         ">0.2" // Start drawing lines slightly after blur fades out
//       )
//       // Peripheral elements fade in and slide up (existing animation)
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
//         '>-0.5' // Start 0.5 seconds before line drawing finishes for overlap
//       );

//     // --- Final Continuous Logo Rotation (starts after scroll animation ends) ---
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
//         start: 'top -20%',
//         end: 'bottom 100%',
//         toggleActions: 'play none none reverse',
//       },
//     });

//     ScrollTrigger.refresh();

//     // --- Cleanup function ---
//     return () => {
//       tl.kill();
//       if (initialLogoRotationTweenRef.current) {
//         initialLogoRotationTweenRef.current.kill();
//       }
//       if (finalLogoRotationTweenRef.current) {
//         finalLogoRotationTweenRef.current.kill();
//       }
//       if (continuousLineFlowTweenRef.current) {
//         continuousLineFlowTweenRef.current.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, [currentRadius, containerDimensions]);

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
//           background: '#0A0A0A',
//           backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
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
//           mb: 8,
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
//             {positions.map((pos, i) => {
//               // Calculate line length for stroke-dasharray and stroke-dashoffset
//               const lineLength = Math.sqrt(
//                 Math.pow(pos.x - center.x, 2) + Math.pow(pos.y - center.y, 2)
//               );
//               return (
//                 <line
//                   key={i}
//                   x1={center.x}
//                   y1={center.y}
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke="#394B59"
//                   strokeWidth={3}
//                   strokeDasharray={lineLength} // Set initial dasharray
//                   strokeDashoffset={lineLength} // Set initial dashoffset to hide line
//                 />
//               );
//             })}
//           </LinesSVG>
//           <Box ref={peripheralLinksContainerRef}>
//             {positions.map((pos, i) => {
//               const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
//                                            theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
//                                            BASE_SUB_COMPANY_SIZE;
//               const offset = currentSubCompanySize / 2;

//               return (
//                 <Link
//                   key={i}
//                   component={RouterLink}
//                   to={SUB_COMPANIES[i].to}
//                   target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'}
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
//                       color: '#48AFF0',
//                       boxShadow: '0 4px 24px rgba(72, 175, 240, 0.4)',
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

//       {/* Placeholder content below the hero section to enable scrolling */}
//       <Box sx={{ height: '150vh', background: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', color: HERO_TEXT }}>
//         <Typography variant="h4" sx={{ mt: 20 }}>Scroll Down to See More Content...</Typography>
//       </Box>

//       {/* Scroll to top button */}
//       <Button
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
//           width: 30,
//           height: 30,
//           minWidth: 0,
//           padding: 0,
//           opacity: 0,
//           pointerEvents: 'none',
//           transition: 'opacity 0.3s ease-in-out',
//         }}
//         className="scroll-to-top-button"
//       >
//         <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
//       </Button>
//     </Box>
//   );
// };

// export default HomePage;



import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Link from '@mui/material/Link';
import logo from '../assets/logo/my-logo.png'; // Assuming your logo path is correct
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HERO_TEXT = '#F5F8FA';

// Define base sizes and radii
const BASE_HEX_RADIUS = 380; // Increased base radius for larger spread
const BASE_BLUR_BG_SIZE = 450; // Increased size for the main logo blur background
const BASE_LOGO_SIZE = 300; // Increased logo size
const BASE_SUB_COMPANY_SIZE = 160; // Increased size for sub-company circles
const BASE_SUB_COMPANY_FONT_SIZE = '1.3rem'; // Adjusted font size for larger circles

const SUB_COMPANIES = [
  { label: 'HELIX CONFERENCES', to: 'https://helixconferences.com/' },
  { label: 'CODEIT', to: 'https://codeitconsulting.co.in/' },
  { label: 'PEPTIDES', to: 'https://peptides.co.in/' },
  { label: 'HELIX JOURNALS', to: '/helix-journals' },
  { label: 'HELIX e-SCROLL', to: '/helix-e-scroll' },
  { label: 'DIGIGRO', to: '/digigro' },
];

const StyledBlurBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: BASE_BLUR_BG_SIZE,
  height: BASE_BLUR_BG_SIZE,
  borderRadius: '20%', // Modernized to 20% border radius
  background: 'rgba(255, 255, 255, 0.18)', // Subtle white background
  zIndex: 1,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: 1, // Visible by default
  filter: 'blur(10px)', // Blurred by default
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
  borderRadius: '20%', // Modernized to 20% border radius
  zIndex: 2,
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)', // Logo is centered initially
  opacity: 1, // Visible by default
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
}));

const LinesSVG = styled('svg')({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  pointerEvents: 'none',
  opacity: 0, // Initial opacity for animation
});

const HomePage: React.FC = () => {
  const theme = useTheme();
  const heroRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const blurBgRef = useRef<HTMLDivElement | null>(null);
  const peripheralLinksContainerRef = useRef<HTMLDivElement | null>(null);
  const linesSvgRef = useRef<SVGSVGElement | null>(null);
  const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

  // State to store the dynamic dimensions of the hero container
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  const initialLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);
  const finalLogoRotationTweenRef = useRef<gsap.core.Tween | null>(null);

  // Responsive values for radius based on screen size
  const currentRadius = theme.breakpoints.down('sm')
    ? BASE_HEX_RADIUS * 0.5
    : theme.breakpoints.down('md')
    ? BASE_HEX_RADIUS * 0.8
    : BASE_HEX_RADIUS;

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure scroll to top on mount for consistent start

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

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Calculate center dynamically based on actual container dimensions
  const center = {
    x: containerDimensions.width / 2,
    y: containerDimensions.height / 2,
  };

  const angleStep = (2 * Math.PI) / SUB_COMPANIES.length;
  // Store initial calculated positions for the peripheral elements
  const finalPositions = SUB_COMPANIES.map((_, i) => {
    return {
      x: center.x + currentRadius * Math.cos(i * angleStep - Math.PI / 2),
      y: center.y + currentRadius * Math.sin(i * angleStep - Math.PI / 2),
    };
  });

  useEffect(() => {
    // --- CRITICAL CLEANUP FOR REACT SPAs ---
    // Ensure all ScrollTriggers and GSAP tweens are killed on unmount or re-render
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.globalTimeline.clear();

    if (initialLogoRotationTweenRef.current) {
      initialLogoRotationTweenRef.current.kill();
      initialLogoRotationTweenRef.current = null;
    }
    if (finalLogoRotationTweenRef.current) {
      finalLogoRotationTweenRef.current.kill();
      finalLogoRotationTweenRef.current = null;
    }

    // Ensure all referenced DOM elements are available
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

    // --- Initial Continuous Logo Rotation (always active until scroll animation) ---
    initialLogoRotationTweenRef.current = gsap.to(logoRef.current, {
      rotate: 360,
      duration: 15,
      ease: 'none',
      repeat: -1,
    });

    // Cast the result of toArray to an array of HTMLElements
    const subCompanyElements = gsap.utils.toArray(peripheralLinksContainerRef.current.children) as HTMLElement[];

    // --- Main Scroll-Triggered Animation Timeline ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'center center',
        end: '+=2500', // Extend the scroll distance for animation
        scrub: 1, // Smoothly link animation to scroll position
        pin: true, // Pin the hero section during animation
        onEnter: () => {
          if (initialLogoRotationTweenRef.current) {
            initialLogoRotationTweenRef.current.pause(); // Pause initial rotation when entering scroll trigger
          }
        },
        onLeave: () => {
          if (finalLogoRotationTweenRef.current) {
            finalLogoRotationTweenRef.current.play(); // Play final rotation when leaving scroll trigger
          }
        },
        onEnterBack: () => {
          if (finalLogoRotationTweenRef.current) {
            finalLogoRotationTweenRef.current.pause(); // Pause final rotation when scrolling back into trigger
          }
        },
        onLeaveBack: () => {
          if (initialLogoRotationTweenRef.current) {
            initialLogoRotationTweenRef.current.play(); // Resume initial rotation when scrolling back out
          }
          if (finalLogoRotationTweenRef.current) {
            finalLogoRotationTweenRef.current.kill(); // Kill final rotation if we scroll back to top
            finalLogoRotationTweenRef.current = null;
          }
        },
      },
    });

    // --- Animations within the scroll-triggered timeline ---
    // Logo stops rotating and blur fades out
    tl.to(
      logoRef.current,
      {
        rotate: 0, // Stop rotation
        duration: 0.8, // Slightly longer duration for smoother stop
        ease: 'power2.out',
      },
      0
    ) // Start at the beginning of the timeline
      .to(
        blurBgRef.current,
        {
          filter: 'blur(0px)', // Unblur
          opacity: 0, // Fade out
          duration: 0.8,
          ease: 'power2.out',
        },
        0
      ) // Start at the beginning of the timeline
      // Lines appear
      .to(
        linesSvgRef.current,
        {
          opacity: 1,
          duration: 1.0, // Slower fade in for lines
          ease: 'power1.inOut',
        },
        0.3
      ); // Start slightly after logo/blur animation begins

    // --- GRAVITATIONAL PULL ANIMATION ADDITION ---
    // Calculate initial distant positions for gravitational pull
    subCompanyElements.forEach((el, i) => {
      const finalPos = finalPositions[i];
      const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
                                   theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
                                   BASE_SUB_COMPANY_SIZE;
      const offset = currentSubCompanySize / 2;

      // Start further out along the same angle
      const startDistanceMultiplier = 2.0; // 2 times the currentRadius
      const startX = center.x + (currentRadius * startDistanceMultiplier) * Math.cos(i * angleStep - Math.PI / 2);
      const startY = center.y + (currentRadius * startDistanceMultiplier) * Math.sin(i * angleStep - Math.PI / 2);

      // Cast 'el' to HTMLElement here
      gsap.set(el as HTMLElement, { // Set initial state
        opacity: 0,
        scale: 0.5,
        x: startX - (finalPos.x - offset), // Calculate offset from final position
        y: startY - (finalPos.y - offset), // Calculate offset from final position
      });
    });

    tl.to(
      subCompanyElements,
      {
        opacity: 1,
        scale: 1,
        x: 0, // Animate back to original relative position (0 offset from final)
        y: 0,
        stagger: 0.08, // Stagger their appearance
        duration: 1.5, // Longer duration for the pull effect
        ease: 'back.out(1.7)', // Nice bouncy ease for the pull
        onComplete: function() {
          // Trigger logo pulse when the last element finishes its animation
          // The 'this' context here refers to the tween, check if it's the last one in the stagger
          if (this.targets().indexOf(subCompanyElements[subCompanyElements.length - 1]) !== -1) {
             gsap.to(logoRef.current, {
                scale: 1.05,
                duration: 0.2,
                yoyo: true, // Scale up and then back down
                repeat: 1,
                ease: "power1.inOut",
             });
          }
        }
      },
      '>-0.5' // Start this animation slightly before the lines finish for a more fluid transition
    );
    // --- END GRAVITATIONAL PULL ANIMATION ADDITION ---


    // --- Final Continuous Logo Rotation (starts after scroll animation ends) ---
    // This tween will only be played when the ScrollTrigger "onLeave" callback fires
    finalLogoRotationTweenRef.current = gsap.to(logoRef.current, {
      rotate: 360,
      duration: 15,
      ease: 'none',
      repeat: -1,
    }).pause(); // Start paused

    // --- Scroll to Top Button Animation ---
    gsap.to(scrollToTopButtonRef.current, {
      opacity: 1,
      pointerEvents: 'auto',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top -20%', // Show button when 20% of the hero section is scrolled past
        end: 'bottom 100%', // Hide button when hero section is fully in view again (on scroll up)
        toggleActions: 'play none none reverse', // play on scroll down, reverse on scroll up
      },
    });

    ScrollTrigger.refresh(); // Recalculate all ScrollTrigger positions

    // --- Cleanup function ---
    return () => {
      tl.kill(); // Kill the main timeline
      if (initialLogoRotationTweenRef.current) {
        initialLogoRotationTweenRef.current.kill();
      }
      if (finalLogoRotationTweenRef.current) {
        finalLogoRotationTweenRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Kill all ScrollTriggers
      gsap.globalTimeline.clear(); // Clear GSAP's global timeline
    };
  }, [currentRadius, containerDimensions]); // Re-run if radius or container dimensions change

  return (
    <Box sx={{ position: 'relative', zIndex: 0, overflowX: 'hidden' }}>
      {/* This Box now serves as the solid dark background for the entire page */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          minHeight: '100vh',
          zIndex: -1,
          // --- UPDATED: Stronger, more colorful gradients, including white ---
          background: '#0A0A0A', // Darker base for maximum contrast with bright gradients
          backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%), /* Bright White */
            radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),   /* Vibrant Magenta */
            radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),   /* Vibrant Cyan */
            radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)    /* Vibrant Yellow */
          `,
          // -------------------------------------------------------------------
          filter: 'none',
          borderRadius: '0',
          pointerEvents: 'none',
        }}
      />

      {/* Text elements - now outside HeroContainer, scroll naturally */}
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
          mt: { xs: '80px', sm: '100px', md: '120px' },
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
          mb: 8, // Increased bottom margin to give more scroll space before pinning
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
          maxWidth: { xs: '100%', md: 700, lg: 900 },
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
          {/* Logo and Blur Background - visible and rotating by default */}
          <StyledBlurBackground ref={blurBgRef} />
          <CenterLogo ref={logoRef} src={logo} alt="Logo" />

          <LinesSVG ref={linesSvgRef} width={containerDimensions.width} height={containerDimensions.height}>
            {finalPositions.map((pos, i) => ( // Use finalPositions here
              <line
                key={i}
                x1={center.x}
                y1={center.y}
                x2={pos.x}
                y2={pos.y}
                stroke="#394B59"
                strokeWidth={3}
                strokeDasharray="8 6" // Dashed line effect
              />
            ))}
          </LinesSVG>
          <Box ref={peripheralLinksContainerRef}>
            {finalPositions.map((pos, i) => { // Use finalPositions here
              const currentSubCompanySize = theme.breakpoints.down('sm') ? BASE_SUB_COMPANY_SIZE * 0.6 :
                                           theme.breakpoints.down('md') ? BASE_SUB_COMPANY_SIZE * 0.8 :
                                           BASE_SUB_COMPANY_SIZE;
              const offset = currentSubCompanySize / 2;

              return (
                <Link
                  key={i}
                  component={RouterLink}
                  to={SUB_COMPANIES[i].to}
                  target={SUB_COMPANIES[i].to.startsWith('http') ? '_blank' : '_self'} // Open external links in new tab
                  sx={{
                    position: 'absolute',
                    width: currentSubCompanySize,
                    height: currentSubCompanySize,
                    borderRadius: 12, // Modernized border radius
                    background: '#202B33',
                    color: '#F5F8FA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: theme.breakpoints.down('sm') ? '0.9rem' : BASE_SUB_COMPANY_FONT_SIZE,
                    textAlign: 'center',
                    padding: '0 8px',
                    boxSizing: 'border-box',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
                    cursor: 'pointer',
                    border: '2px solid #394B59',
                    transition: 'background 0.3s, color 0.3s, box-shadow 0.3s, border 0.3s',
                    zIndex: 2,
                    left: pos.x - offset,
                    top: pos.y - offset,
                    textDecoration: 'none',
                    // opacity and transform (x,y) are now controlled by GSAP.set and timeline
                    '&:hover': {
                      background: '#30404D',
                      borderColor: '#48AFF0', // Highlight border
                      color: '#48AFF0', // Highlight text
                      boxShadow: '0 4px 24px rgba(72, 175, 240, 0.4)', // Vibrant shadow on hover
                    },
                  }}
                >
                  {SUB_COMPANIES[i].label}
                </Link>
              );
            })}
          </Box>
        </Box>
      </HeroContainer>

      {/* Placeholder content below the hero section to enable scrolling */}
      <Box sx={{ height: '150vh', background: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', color: HERO_TEXT }}>
        <Typography variant="h4" sx={{ mt: 20 }}>Scroll Down to See More Content...</Typography>
      </Box>

      {/* Scroll to top button */}
      <Button
        ref={scrollToTopButtonRef}
        variant="contained"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        sx={{
          position: 'fixed',
          bottom: 60,
          right: 20,
          zIndex: 100000,
          backgroundColor: '#16A085',
          '&:hover': {
            backgroundColor: '#138D75',
          },
          borderRadius: '50%',
          width: 30, // Adjusted width
          height: 30, // Adjusted height
          minWidth: 0,
          padding: 0,
          opacity: 0, // Initially hidden, controlled by ScrollTrigger
          pointerEvents: 'none', // Initially no pointer events, controlled by ScrollTrigger
          transition: 'opacity 0.3s ease-in-out',
        }}
        className="scroll-to-top-button"
      >
        <ArrowUpwardIcon sx={{ color: 'white', fontSize: '1.2rem' }} />
      </Button>
    </Box>
  );
};

export default HomePage;