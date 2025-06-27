// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// const Footer: React.FC = () => (
//   <Box
//     component="footer"
//     sx={{
//       width: '100%',
//       background: '#232B33',
//       color: '#A7B6C2',
//       textAlign: 'center',
//       py: 2,
//       position: 'relative',
//       bottom: 0,
//       borderTop: '1px solid #202B33',
//       fontSize: '0.95rem',
//       letterSpacing: 1,
//     }}
//   >
//     <Typography variant="body2">
//       © {new Date().getFullYear()} Helix Synergy Corp. All rights reserved.
//     </Typography>
//   </Box>
// );

// export default Footer; 


import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

// Import social media icons from @mui/icons-material
// IMPORTANT: Ensure you have installed this package: npm install @mui/icons-material
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import PinterestIcon from '@mui/icons-material/Pinterest';
// NOTE: SnapchatIcon is typically NOT available in @mui/icons-material.
// If you get an error for SnapchatIcon, you will need to:
// 1. Remove the SnapchatIcon import and usage.
// 2. Use a generic icon like <ShareIcon /> from @mui/icons-material as a placeholder.
// 3. Find a custom SVG for Snapchat and use that.
// For now, I'm commenting it out based on your provided code's comment.
// import SnapchatIcon from '@mui/icons-material/Snapchat';

const Footer: React.FC = () => (
  <Box
    component="footer"
    sx={{
      width: '100%',
      background: 'rgba(255, 255, 255, 0.03)', // Light transparent background
      backdropFilter: 'blur(24px)', // Apply blur effect
      WebkitBackdropFilter: 'blur(24px)', // For Safari compatibility
      borderTop: '1.5px solid rgba(72, 176, 240, 0.18)', // Adjust border color/transparency
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.18)', // Add subtle shadow
      color: '#A7B6C2', // Keep text color for contrast
      textAlign: 'center',
      py: 1,
      position: 'relative',
      bottom: 0,
      fontSize: '0.95rem',
      letterSpacing: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      px: { xs: 2, md: 3 }, // Responsive horizontal padding
      flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens
      gap: { xs: 1, md: 0 }, // Gap between items when stacked
      zIndex: 1000, // Ensure it's above other content if necessary
    }}
  >
    <Typography variant="body2" sx={{ mb: { xs: 1, md: 0 } }}>
      © {new Date().getFullYear()} Helix Synergy Corp. All rights reserved.
    </Typography>

    {/* Social Media Icons */}
    <Stack
      direction="row"
      spacing={{ xs: 0.5, md: 1 }} // Smaller spacing on small screens
      sx={{ flexWrap: 'wrap', justifyContent: 'center' }} // Allow icons to wrap and center them
    >
      <IconButton
        aria-label="Facebook"
        color="inherit"
        href="https://www.facebook.com/helixsynergycorp" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#1877F2' } }}
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        aria-label="Twitter"
        color="inherit"
        href="https://www.twitter.com/helixsynergycorp" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#1DA1F2' } }}
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        aria-label="Instagram"
        color="inherit"
        href="https://www.instagram.com/helixsynergycorp" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#E4405F' } }}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        aria-label="LinkedIn"
        color="inherit"
        href="https://www.linkedin.com/company/helixsynergycorp" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#0A66C2' } }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        aria-label="YouTube"
        color="inherit"
        href="https://www.youtube.com/@helixsynergycorp" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#FF0000' } }}
      >
        <YouTubeIcon />
      </IconButton>
      <IconButton
        aria-label="GitHub"
        color="inherit"
        href="https://github.com/helixsynergycorp" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#6e5494' } }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        aria-label="Reddit"
        color="inherit"
        href="https://www.reddit.com/user/helixsynergycorp" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#FF4500' } }}
      >
        <RedditIcon />
      </IconButton>
      <IconButton
        aria-label="Pinterest"
        color="inherit"
        href="https://www.pinterest.com/helixsynergycorp" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#E60023' } }}
      >
        <PinterestIcon />
      </IconButton>
      {/* Snapchat Icon - commented out as it's often not in @mui/icons-material */}
      {/* <IconButton
        aria-label="Snapchat"
        color="inherit"
        href="https://www.snapchat.com/add/helixsynergycorp" // REPLACE WITH ACTUAL LINK
        target="_blank"
        rel="noopener noreferrer"
        sx={{ '&:hover': { color: '#FFFC00' } }}
      >
        <SnapchatIcon />
      </IconButton> */}
    </Stack>
  </Box>
);

export default Footer;