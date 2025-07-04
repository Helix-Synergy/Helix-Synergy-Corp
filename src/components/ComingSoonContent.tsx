// import React, { useEffect, useRef } from 'react';
// import { Box, Typography } from '@mui/material';
// import { styled, useTheme } from '@mui/material/styles';
// import { gsap } from 'gsap';

// // Styled container for the entire page content
// const StyledComingSoonContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   minHeight: '100vh', // Ensure it takes full viewport height
//   padding: theme.spacing(4),
//   textAlign: 'center',
//   position: 'relative',
//   overflow: 'hidden', // Hide any overflow from animations
//   // Consistent background with HomePage
//   background: '#0A0A0A',
//   backgroundImage: `
//     radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.15) 0%, transparent 40%),
//     radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.15) 0%, transparent 40%),
//     radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.15) 0%, transparent 40%),
//     radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.15) 0%, transparent 40%)
//   `,
// }));

// // Styled component for the central logo
// const StyledLogo = styled('img')(({ theme }) => ({
//   width: 200, // Base size for the logo
//   height: 200,
//   objectFit: 'contain',
//   marginBottom: theme.spacing(4),
//   borderRadius: '20%', // Consistent with main logo
//   boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)', // Subtle glow
//   filter: 'brightness(100%)',
//   transition: 'transform 0.3s ease-out, filter 0.3s ease-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     filter: 'brightness(120%)',
//   },
//   [theme.breakpoints.down('md')]: {
//     width: 150,
//     height: 150,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: 120,
//     height: 120,
//   },
// }));

// interface ComingSoonContentProps {
//   logoSrc: string;
//   title: string;
//   description: string;
//   comingSoonDate?: string; // Optional prop for the date
// }

// const ComingSoonContent: React.FC<ComingSoonContentProps> = ({
//   logoSrc,
//   title,
//   description,
//   comingSoonDate,
// }) => {
//   const contentRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (contentRef.current) {
//       gsap.fromTo(
//         contentRef.current.children, // Animate direct children (logo, titles, date)
//         { opacity: 0, y: 30, scale: 0.95 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1,
//           ease: 'power3.out',
//           stagger: 0.2, // Stagger animation for each element
//         }
//       );
//     }
//   }, []);

//   return (
//     <StyledComingSoonContainer>
//       {/* This Box acts as a wrapper for the animated content */}
//       <Box ref={contentRef} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <StyledLogo src={logoSrc} alt={`${title} Logo`} />

//         <Typography
//           variant="h3"
//           sx={{
//             color: '#F5F8FA', // Consistent with HERO_TEXT from HomePage
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             mb: 2,
//             fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem' },
//           }}
//         >
//           {title}
//         </Typography>

//         <Typography
//           variant="h6"
//           sx={{
//             color: '#A7B6C2', // Consistent with secondary text from HomePage
//             fontWeight: 400,
//             letterSpacing: 1,
//             mb: 4,
//             maxWidth: '600px', // Limit width for readability
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
//           }}
//         >
//           {description}
//         </Typography>

//         <Typography
//           variant="h4"
//           sx={{
//             color: '#00FFFF', // A vibrant color for the "Coming Soon" message
//             fontWeight: 700,
//             letterSpacing: 3,
//             textTransform: 'uppercase',
//             animation: 'pulse 1.5s infinite alternate', // Simple CSS pulse animation
//             '@keyframes pulse': {
//               '0%': { transform: 'scale(1)', textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' },
//               '100%': { transform: 'scale(1.05)', textShadow: '0 0 20px rgba(0, 255, 255, 0.8)' },
//             },
//             fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
//             mt: 4, // Add margin top
//           }}
//         >
//           Coming Soon!
//         </Typography>

//         {comingSoonDate && (
//           <Typography
//             variant="h5"
//             sx={{
//               color: '#FFD700', // Gold color for the date
//               fontWeight: 600,
//               letterSpacing: 1.5,
//               mt: 2,
//               fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
//             }}
//           >
//             Anticipated: {comingSoonDate}
//           </Typography>
//         )}
//       </Box>
//     </StyledComingSoonContainer>
//   );
// };

// export default ComingSoonContent;





// import React, { useEffect, useRef } from 'react';
// import { Box, Typography } from '@mui/material';
// import { styled, useTheme } from '@mui/material/styles';
// import { gsap } from 'gsap';

// // Styled container for the entire page content
// const StyledComingSoonContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '100%', // Ensure it takes full viewport width
//   minHeight: '100vh', // Ensure it takes full viewport height
//   padding: theme.spacing(4),
//   textAlign: 'center',
//   position: 'relative',
//   overflow: 'hidden', // Hide any overflow from animations
//   // Removed background and backgroundImage to allow Layout background to show through
// }));

// // Styled component for the central logo
// const StyledLogo = styled('img')(({ theme }) => ({
//   width: '100%', // Make logo take 100% of its parent's width (the blur box)
//   height: '100%', // Make logo take 100% of its parent's height
//   objectFit: 'contain',
//   filter: 'brightness(100%)',
//   transition: 'transform 0.3s ease-out, filter 0.3s ease-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     filter: 'brightness(120%)',
//   },
// }));

// // New Styled component for the logo's background container
// const StyledLogoBackgroundWrapper = styled(Box)(({ theme }) => ({
//   width: 200, // Base size for the wrapper, matching the original logo size
//   height: 200, // Base size for the wrapper
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius: '20%', // Apply border-radius here, consistent with main logo
//   boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)', // Apply subtle glow here
//   marginBottom: theme.spacing(4), // Add margin bottom here

//   // *** THE CHANGE IS HERE: Solid white background ***
//   backgroundColor: '#FFFFFF', // Solid white background

//   // Responsive adjustments for the wrapper size
//   [theme.breakpoints.down('md')]: {
//     width: 150,
//     height: 150,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: 120,
//     height: 120,
//   },
// }));

// interface ComingSoonContentProps {
//   logoSrc: string;
//   title: string;
//   description: string;
//   comingSoonDate?: string; // Optional prop for the date
// }

// const ComingSoonContent: React.FC<ComingSoonContentProps> = ({
//   logoSrc,
//   title,
//   description,
//   comingSoonDate,
// }) => {
//   const contentRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (contentRef.current) {
//       gsap.fromTo(
//         contentRef.current.children, // Animate direct children (logo, titles, date)
//         { opacity: 0, y: 30, scale: 0.95 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1,
//           ease: 'power3.out',
//           stagger: 0.2, // Stagger animation for each element
//         }
//       );
//     }
//   }, []);

//   return (
//     <StyledComingSoonContainer>
//       {/* This Box acts as a wrapper for the animated content */}
//       <Box ref={contentRef} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 700, mx: 'auto' }}>
//         {/* Wrap StyledLogo with the new background wrapper */}
//         <StyledLogoBackgroundWrapper>
//           <StyledLogo src={logoSrc} alt={`${title} Logo`} />
//         </StyledLogoBackgroundWrapper>

//         <Typography
//           variant="h3"
//           sx={{
//             color: '#F5F8FA', // Consistent with HERO_TEXT from HomePage
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             mb: 2,
//             fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem' },
//           }}
//         >
//           {title}
//         </Typography>

//         <Typography
//           variant="h6"
//           sx={{
//             color: '#A7B6C2', // Consistent with secondary text from HomePage
//             fontWeight: 400,
//             letterSpacing: 1,
//             mb: 4,
//             maxWidth: '600px', // Limit width for readability
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
//           }}
//         >
//           {description}
//         </Typography>

//         <Typography
//           variant="h4"
//           sx={{
//             color: '#00FFFF', // A vibrant color for the "Coming Soon" message
//             fontWeight: 700,
//             letterSpacing: 3,
//             textTransform: 'uppercase',
//             animation: 'pulse 1.5s infinite alternate', // Simple CSS pulse animation
//             '@keyframes pulse': {
//               '0%': { transform: 'scale(1)', textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' },
//               '100%': { transform: 'scale(1.05)', textShadow: '0 0 20px rgba(0, 255, 255, 0.8)' },
//             },
//             fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
//             mt: 4, // Add margin top
//           }}
//         >
//           Coming Soon!
//         </Typography>

//         {comingSoonDate && (
//           <Typography
//             variant="h5"
//             sx={{
//               color: '#FFD700', // Gold color for the date
//               fontWeight: 600,
//               letterSpacing: 1.5,
//               mt: 2,
//               fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
//             }}
//           >
//             Anticipated: {comingSoonDate}
//           </Typography>
//         )}
//       </Box>
//     </StyledComingSoonContainer>
//   );
// };

// export default ComingSoonContent;






// import React, { useEffect, useRef } from 'react';
// import { Box, Typography, IconButton } from '@mui/material'; // Added IconButton
// import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Added Material-UI back icon
// import { styled, useTheme } from '@mui/material/styles';
// import { gsap } from 'gsap';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// // Styled container for the entire page content
// const StyledComingSoonContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '100%', // Use 100% here as the parent (Layout) will handle 100vw
//   minHeight: '100vh', // Ensure it takes full viewport height
//   padding: theme.spacing(4),
//   textAlign: 'center',
//   position: 'relative', // Changed to relative so the fixed button's z-index works on top
//   overflow: 'hidden', // Hide any overflow from animations
//   // Removed background and backgroundImage to allow Layout background to show through
// }));

// // Styled component for the central logo
// const StyledLogo = styled('img')(({ theme }) => ({
//   width: '100%', // Make logo take 100% of its parent's width (the blur box)
//   height: '100%', // Make logo take 100% of its parent's height
//   objectFit: 'contain',
//   filter: 'brightness(100%)',
//   transition: 'transform 0.3s ease-out, filter 0.3s ease-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     filter: 'brightness(120%)',
//   },
// }));

// // New Styled component for the logo's background container
// const StyledLogoBackgroundWrapper = styled(Box)(({ theme }) => ({
//   width: 200, // Base size for the wrapper, matching the original logo size
//   height: 200, // Base size for the wrapper
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius: '20%', // Apply border-radius here, consistent with main logo
//   boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)', // Apply subtle glow here
//   marginBottom: theme.spacing(4), // Add margin bottom here

//   backgroundColor: '#FFFFFF', // Solid white background

//   // Responsive adjustments for the wrapper size
//   [theme.breakpoints.down('md')]: {
//     width: 150,
//     height: 150,
//   },
//   [theme.breakpoints.down('sm')]: {
//     width: 120,
//     height: 120,
//   },
// }));

// interface ComingSoonContentProps {
//   logoSrc: string;
//   title: string;
//   description: string;
//   comingSoonDate?: string; // Optional prop for the date
// }

// const ComingSoonContent: React.FC<ComingSoonContentProps> = ({
//   logoSrc,
//   title,
//   description,
//   comingSoonDate,
// }) => {
//   const contentRef = useRef<HTMLDivElement | null>(null);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   useEffect(() => {
//     if (contentRef.current) {
//       gsap.fromTo(
//         contentRef.current.children, // Animate direct children (logo, titles, date)
//         { opacity: 0, y: 30, scale: 0.95 },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1,
//           ease: 'power3.out',
//           stagger: 0.2, // Stagger animation for each element
//         }
//       );
//     }
//   }, []);

//   const handleBackClick = () => {
//     navigate(-1); // Navigates to the previous entry in the history stack
//   };

//   return (
//     <StyledComingSoonContainer>
//       {/* Back Button */}
//       <IconButton
//         onClick={handleBackClick}
//         sx={{
//           position: 'fixed', // Make it fixed relative to the viewport
//           top: theme => theme.spacing(10), // 16px from top (adjust as needed)
//           left: theme => theme.spacing(2), // 16px from left (adjust as needed)
//           color: 'rgb(0, 0, 0)', // White/light color
//           zIndex: 1000, // Ensure it's on top of other content
//           backgroundColor: 'rgba(255, 255, 255, 0.42)', // Semi-transparent dark background for visibility
//           '&:hover': {
//             backgroundColor: 'rgba(203, 203, 203, 0.3)',
//             color: '#FFFFFF',
//           },
//           p: 1.5, // Padding for a larger clickable area
//           borderRadius: '50%', // Make it circular
//         }}
//       >
//         <ArrowBackIcon fontSize="medium" /> {/* Large icon size */}
//       </IconButton>

//       {/* This Box acts as a wrapper for the animated content */}
//       <Box ref={contentRef} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 700, mx: 'auto' }}>
//         {/* Wrap StyledLogo with the new background wrapper */}
//         <StyledLogoBackgroundWrapper>
//           <StyledLogo src={logoSrc} alt={`${title} Logo`} />
//         </StyledLogoBackgroundWrapper>

//         <Typography
//           variant="h3"
//           sx={{
//             color: '#F5F8FA', // Consistent with HERO_TEXT from HomePage
//             fontWeight: 800,
//             letterSpacing: 2,
//             textShadow: '0 2px 12px #000',
//             mb: 2,
//             fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem' },
//           }}
//         >
//           {title}
//         </Typography>

//         <Typography
//           variant="h6"
//           sx={{
//             color: '#A7B6C2', // Consistent with secondary text from HomePage
//             fontWeight: 400,
//             letterSpacing: 1,
//             mb: 4,
//             maxWidth: '600px', // Limit width for readability
//             fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
//           }}
//         >
//           {description}
//         </Typography>

//         <Typography
//           variant="h4"
//           sx={{
//             color: '#00FFFF', // A vibrant color for the "Coming Soon" message
//             fontWeight: 700,
//             letterSpacing: 3,
//             textTransform: 'uppercase',
//             animation: 'pulse 1.5s infinite alternate', // Simple CSS pulse animation
//             '@keyframes pulse': {
//               '0%': { transform: 'scale(1)', textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' },
//               '100%': { transform: 'scale(1.05)', textShadow: '0 0 20px rgba(0, 255, 255, 0.8)' },
//             },
//             fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
//             mt: 4, // Add margin top
//           }}
//         >
//           Coming Soon!
//         </Typography>

//         {comingSoonDate && (
//           <Typography
//           variant="h5"
//           sx={{
//             color: '#FFD700', // Gold color for the date
//             fontWeight: 600,
//             letterSpacing: 1.5,
//             mt: 2,
//             fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
//           }}
//           >
//             Anticipated: {comingSoonDate}
//           </Typography>
//         )}
//       </Box>
//     </StyledComingSoonContainer>
//   );
// };

// export default ComingSoonContent;



import React, { useEffect, useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material'; // Added IconButton
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Added Material-UI back icon
import { styled, useTheme } from '@mui/material/styles';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Styled container for the entire page content
const StyledComingSoonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%', // Use 100% here as the parent (Layout) will handle 100vw
  minHeight: '100vh', // Ensure it takes full viewport height
  padding: theme.spacing(4),
  textAlign: 'center',
  position: 'relative', // Changed to relative so the fixed button's z-index works on top
  overflow: 'hidden', // Hide any overflow from animations
  // Removed background and backgroundImage to allow Layout background to show through
}));

// Styled component for the central logo
const StyledLogo = styled('img')(({ theme }) => ({
  width: '100%', // Make logo take 100% of its parent's width (the blur box)
  height: '100%', // Make logo take 100% of its parent's height
  objectFit: 'contain',
  filter: 'brightness(100%)',
  transition: 'transform 0.3s ease-out, filter 0.3s ease-out',
  '&:hover': {
    transform: 'scale(1.05)',
    filter: 'brightness(120%)',
  },
}));

// New Styled component for the logo's background container
const StyledLogoBackgroundWrapper = styled(Box)(({ theme }) => ({
  width: 200, // Base size for the wrapper, matching the original logo size
  height: 200, // Base size for the wrapper
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20%', // Apply border-radius here, consistent with main logo
  boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)', // Apply subtle glow here
  marginBottom: theme.spacing(4), // Add margin bottom here

  backgroundColor: '#FFFFFF', // Solid white background

  // Responsive adjustments for the wrapper size
  [theme.breakpoints.down('md')]: {
    width: 150,
    height: 150,
  },
  [theme.breakpoints.down('sm')]: {
    width: 120,
    height: 120,
  },
}));

interface ComingSoonContentProps {
  logoSrc: string;
  title: string;
  description: string;
  comingSoonDate?: string; // Optional prop for the date
}

const ComingSoonContent: React.FC<ComingSoonContentProps> = ({
  logoSrc,
  title,
  description,
  comingSoonDate,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate hook
  const theme = useTheme(); // Get the theme for use in inline styles

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children, // Animate direct children (logo, titles, date)
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2, // Stagger animation for each element
        }
      );
    }
  }, []);

  const handleBackClick = () => {
    navigate(-1); // Navigates to the previous entry in the history stack
  };

  return (
    <StyledComingSoonContainer>
      {/* Back Button */}
      <IconButton
        onClick={handleBackClick}
        sx={{
          position: 'fixed', // Make it fixed relative to the viewport
          top: theme.spacing(10), // Use theme.spacing directly
          left: theme.spacing(2), // Use theme.spacing directly
          color: 'rgb(0, 0, 0)', // White/light color
          zIndex: 1000, // Ensure it's on top of other content
          backgroundColor: 'rgba(255, 255, 255, 0.42)', // Semi-transparent dark background for visibility
          '&:hover': {
            backgroundColor: 'rgba(203, 203, 203, 0.3)',
            color: '#FFFFFF',
          },
          p: 1.5, // Padding for a larger clickable area
          borderRadius: '50%', // Make it circular
        }}
      >
        <ArrowBackIcon fontSize="medium" /> {/* Large icon size */}
      </IconButton>

      {/* This Box acts as a wrapper for the animated content */}
      <Box ref={contentRef} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 700, mx: 'auto' }}>
        {/* Wrap StyledLogo with the new background wrapper */}
        <StyledLogoBackgroundWrapper>
          <StyledLogo src={logoSrc} alt={`${title} Logo`} />
        </StyledLogoBackgroundWrapper>

        <Typography
          variant="h3"
          sx={{
            color: '#F5F8FA', // Consistent with HERO_TEXT from HomePage
            fontWeight: 800,
            letterSpacing: 2,
            textShadow: '0 2px 12px #000',
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem' },
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: '#A7B6C2', // Consistent with secondary text from HomePage
            fontWeight: 400,
            letterSpacing: 1,
            mb: 4,
            maxWidth: '600px', // Limit width for readability
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
          }}
        >
          {description}
        </Typography>

        <Typography
          variant="h4"
          sx={{
            color: '#00FFFF', // A vibrant color for the "Coming Soon" message
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: 'uppercase',
            animation: 'pulse 1.5s infinite alternate', // Simple CSS pulse animation
            '@keyframes pulse': {
              '0%': { transform: 'scale(1)', textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' },
              '100%': { transform: 'scale(1.05)', textShadow: '0 0 20px rgba(0, 255, 255, 0.8)' },
            },
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            mt: 4, // Add margin top
          }}
        >
          Coming Soon!
        </Typography>

        {comingSoonDate && (
          <Typography
            variant="h5"
            sx={{
              color: '#FFD700', // Gold color for the date
              fontWeight: 600,
              letterSpacing: 1.5,
              mt: 2,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
            }}
          >
            Anticipated: {comingSoonDate}
          </Typography>
        )}
      </Box>
    </StyledComingSoonContainer>
  );
};

export default ComingSoonContent;