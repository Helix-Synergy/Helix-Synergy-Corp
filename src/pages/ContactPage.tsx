// import React from 'react';
// import { Box, Typography, TextField, Button, Paper } from '@mui/material';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix default marker icon issue in Leaflet
// import iconUrl from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// const DefaultIcon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
//   iconAnchor: [12, 41],
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// const center: [number, number] = [39.4893, -0.4816];

// const ContactPage: React.FC = () => {
//   return (
//     <Box sx={{ maxWidth: 700, mx: 'auto', color: '#F5F8FA' }}>
//       <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, color: '#F5F8FA' }}>
//         Contact
//       </Typography>
//       <Typography variant="h6" sx={{ mb: 4, color: '#A7B6C2' }}>
//         Get in touch or find us on the map below.
//       </Typography>
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           zIndex: -1,
//           pointerEvents: 'none',
//           background: 'rgba(0,0,0,0.7)',
//           filter: 'blur(32px)',
//           borderRadius: '48px',
//         }}
//       />
//       <Paper elevation={4} sx={{ background: '#232B33', mb: 4, p: 2 }}>
//         <MapContainer
//           center={center}
//           zoom={13}
//           style={{ width: '100%', height: 350, borderRadius: 16, overflow: 'hidden', marginBottom: 32 }}
//           scrollWheelZoom={false}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker position={center}>
//             <Popup>
//               Novotel Valencia Lavant<br />
//               Valencia International Airport (Manises)<br />
//               Valencia, Spain<br />
//               39.4893° N, -0.4816° E
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </Paper>
//       <Paper elevation={2} sx={{ background: '#232B33', p: 3 }}>
//         <Typography variant="h6" sx={{ mb: 2, color: '#F5F8FA' }}>
//           Contact Form
//         </Typography>
//         <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//           <TextField label="Name" variant="filled" sx={{ input: { color: '#F5F8FA' } }} InputLabelProps={{ style: { color: '#A7B6C2' } }} />
//           <TextField label="Email" variant="filled" sx={{ input: { color: '#F5F8FA' } }} InputLabelProps={{ style: { color: '#A7B6C2' } }} />
//           <TextField label="Message" variant="filled" multiline rows={4} sx={{ input: { color: '#F5F8FA' } }} InputLabelProps={{ style: { color: '#A7B6C2' } }} />
//           <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-end', mt: 1, background: '#137CBD', '&:hover': { background: '#106BA3' } }}>
//             Send
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default ContactPage; 




// import React, { useEffect, useRef } from 'react';
// import { Box, Typography, TextField, Button, Paper } from '@mui/material';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported
// import L from 'leaflet';
// import { gsap } from 'gsap'; // Moved to top
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Moved to top

// // Fix default marker icon issue in Leaflet
// import iconUrl from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';


// // Register ScrollTrigger plugin if it hasn't been globally (e.g., in App.tsx)
// gsap.registerPlugin(ScrollTrigger);

// const DefaultIcon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// // Updated location to Manjeera Trinity, Hyderabad
// const center: [number, number] = [17.4475, 78.3752]; // Approximate coordinates for Manjeera Trinity, Hyderabad

// const ContactPage: React.FC = () => {
//   // Refs for animation targets
//   const pageContainerRef = useRef<HTMLDivElement | null>(null);
//   const titleRef = useRef<HTMLDivElement | null>(null);
//   const subtitleRef = useRef<HTMLDivElement | null>(null);
//   const mapPaperRef = useRef<HTMLDivElement | null>(null);
//   const formPaperRef = useRef<HTMLDivElement | null>(null);
//   const mapMarkerRef = useRef<L.Marker | null>(null); // Ref for Leaflet Marker instance

//   useEffect(() => {
//     // Basic cleanup for GSAP and ScrollTrigger on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, []);

//   useEffect(() => {
//     // Ensure elements are available before animating
//     if (!pageContainerRef.current || !titleRef.current || !subtitleRef.current || !mapPaperRef.current || !formPaperRef.current) {
//       return;
//     }

//     // Initial state for animations (elements start invisible/slightly off-position)
//     gsap.set([titleRef.current, subtitleRef.current, mapPaperRef.current, formPaperRef.current], {
//       opacity: 0,
//       y: 20, // Start slightly below
//     });

//     // Create a timeline for entrance animations
//     const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

//     tl.to(pageContainerRef.current, { // Main container fade-in
//       opacity: 1,
//       duration: 0.5,
//       ease: "power2.out"
//     }, 0) // Start immediately

//     // Staggered animation for text and content sections
//     .to(titleRef.current, { opacity: 1, y: 0 }, 0.2)
//     .to(subtitleRef.current, { opacity: 1, y: 0 }, 0.3)
//     .to(mapPaperRef.current, { opacity: 1, y: 0 }, 0.4)
//     .to(formPaperRef.current, { opacity: 1, y: 0 }, 0.5);

//   }, []); // Empty dependency array means this runs once on mount

//   // Marker hover animations
//   const handleMarkerMouseOver = () => {
//     if (mapMarkerRef.current) {
//       // Open the popup immediately on hover
//       mapMarkerRef.current.openPopup();
//       // Animate the marker icon (pulse effect)
//       // Type casting to 'any' to access the internal '_icon' property
//       gsap.to((mapMarkerRef.current as any)._icon, {
//         scale: 1.2, // Pop up slightly
//         duration: 0.3,
//         yoyo: true, // Go back and forth
//         repeat: -1, // Infinite pulse
//         ease: "power1.inOut",
//         transformOrigin: "bottom center" // Pulse from the bottom
//       });
//     }
//   };

//   const handleMarkerMouseOut = () => {
//     if (mapMarkerRef.current) {
//       // Close the popup
//       mapMarkerRef.current.closePopup();
//       // Stop and reset the marker animation
//       // Type casting to 'any' to access the internal '_icon' property
//       gsap.killTweensOf((mapMarkerRef.current as any)._icon);
//       gsap.to((mapMarkerRef.current as any)._icon, {
//         scale: 1, // Return to original size
//         duration: 0.3,
//         transformOrigin: "bottom center"
//       });
//     }
//   };

//   return (
//     <Box 
//       ref={pageContainerRef}
//       sx={{ 
//         maxWidth: { xs: '90%', sm: 600, md: 700 }, // Responsive max width
//         mx: 'auto', 
//         color: '#F5F8FA', 
//         py: { xs: 4, sm: 6, md: 8 }, // Responsive padding top/bottom
//         px: { xs: 2, sm: 0 }, // Horizontal padding for smaller screens
//         opacity: 0, // Initial opacity for overall entrance animation
//         minHeight: '100vh', // Ensure enough height for content
//       }}
//     >
//       {/* Background overlay for this page, similar to the hero's blur background idea */}
//       <Box
//         sx={{
//           position: 'fixed', // Fixed to cover viewport
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           zIndex: -1, // Behind page content
//           pointerEvents: 'none',
//           // --- UPDATED: Stunning, multi-layered gradient background ---
//           background: `
//             linear-gradient(120deg, #121212 0%, #0A0A0A 100%), /* Darker linear base for depth */
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.4) 0%, transparent 50%), /* Brighter White */
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.4) 0%, transparent 50%),   /* Brighter Magenta */
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.4) 0%, transparent 50%),   /* Brighter Cyan */
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.4) 0%, transparent 50%)    /* Brighter Yellow */
//           `,
//           backgroundBlendMode: 'screen', // Blends radial gradients over the linear base
//           backgroundRepeat: 'no-repeat', // Prevent repeating of gradients
//           backgroundAttachment: 'fixed', // Keep background fixed relative to viewport
//           filter: 'none', // Ensure no blur is applied to the main background
//           borderRadius: '0', // Full screen, no specific border radius
//         }}
//       />

//       {/* Page Title */}
//       <Typography ref={titleRef} variant="h3" sx={{ mb: 2, fontWeight: 700, color: '#F5F8FA', textAlign: 'center' }}>
//         Contact Us
//       </Typography>
//       {/* Page Subtitle */}
//       <Typography ref={subtitleRef} variant="h6" sx={{ mb: 4, color: '#A7B6C2', textAlign: 'center' }}>
//         Get in touch or find us on the map below.
//       </Typography>

//       {/* Map Section */}
//       <Paper elevation={4} ref={mapPaperRef} sx={{ background: '#232B33', mb: 4, p: { xs: 1, sm: 2 }, borderRadius: 3 }}>
//         <MapContainer
//           center={center}
//           zoom={15} // Increased zoom level for a closer view of the location
//           style={{ 
//             width: '100%', 
//             height: '350px', // Fixed height for Leaflet's style prop, or use a responsive wrapper
//             borderRadius: 12, 
//             overflow: 'hidden', 
//             // Removed marginBottom from here, it's handled by parent Paper's mb prop
//           }}
//           scrollWheelZoom={false}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker 
//             position={center} 
//             ref={mapMarkerRef} // Assign ref to the marker
//             eventHandlers={{ // Add event handlers for hover effects
//               mouseover: handleMarkerMouseOver,
//               mouseout: handleMarkerMouseOut,
//             }}
//           >
//             <Popup>
//               <strong>Manjeera Trinity</strong><br />
//               KPHB Phase 3, Kukatpally Housing Board Colony<br />
//               Hyderabad, Telangana 500072, India
//             </Popup>
//           </Marker>
//         </MapContainer>
//       </Paper>

//       {/* Contact Form Section */}
//       <Paper elevation={2} ref={formPaperRef} sx={{ background: '#232B33', p: { xs: 2, sm: 3 }, borderRadius: 3 }}>
//         <Typography variant="h6" sx={{ mb: 2, color: '#F5F8FA' }}>
//           Send us a Message
//         </Typography>
//         <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 } }}>
//           <TextField 
//             label="Name" 
//             variant="filled" 
//             fullWidth // Ensure text field takes full width
//             InputProps={{ style: { color: '#F5F8FA' } }} 
//             InputLabelProps={{ style: { color: '#A7B6C2' } }} 
//             sx={{ 
//               background: 'rgba(255,255,255,0.05)', 
//               borderRadius: '8px',
//               '& .MuiFilledInput-root': {
//                 borderRadius: '8px',
//                 '&:before': { borderBottom: 'none' }, // Remove default underline
//                 '&:after': { borderBottom: 'none' }, // Remove default underline on focus
//                 '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' }, // Remove hover underline
//               },
//             }}
//           />
//           <TextField 
//             label="Email" 
//             variant="filled" 
//             fullWidth 
//             InputProps={{ style: { color: '#F5F8FA' } }} 
//             InputLabelProps={{ style: { color: '#A7B6C2' } }} 
//             sx={{ 
//               background: 'rgba(255,255,255,0.05)', 
//               borderRadius: '8px',
//               '& .MuiFilledInput-root': {
//                 borderRadius: '8px',
//                 '&:before': { borderBottom: 'none' },
//                 '&:after': { borderBottom: 'none' },
//                 '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
//               },
//             }}
//           />
//           <TextField 
//             label="Message" 
//             variant="filled" 
//             multiline 
//             rows={4} 
//             fullWidth 
//             InputProps={{ style: { color: '#F5F8FA' } }} 
//             InputLabelProps={{ style: { color: '#A7B6C2' } }} 
//             sx={{ 
//               background: 'rgba(255,255,255,0.05)', 
//               borderRadius: '8px',
//               '& .MuiFilledInput-root': {
//                 borderRadius: '8px',
//                 '&:before': { borderBottom: 'none' },
//                 '&:after': { borderBottom: 'none' },
//                 '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
//               },
//             }}
//           />
//           <Button 
//             variant="contained" 
//             color="primary" 
//             sx={{ 
//               alignSelf: 'flex-end', 
//               mt: 1, 
//               // --- UPDATED: Transparent button style ---
//               background: 'transparent',
//               border: '2px solid #F5F8FA', // Light border for visibility
//               color: '#F5F8FA', // Light text color
//               boxShadow: 'none', // Remove default shadow
//               borderRadius: '10px',
//               padding: '10px 30px',
//               textTransform: 'uppercase',
//               transition: '0.3s ease-in-out', // Smoother transition
//               '&:hover': { 
//                 background: 'rgba(255, 255, 255, 0.08)', // Subtle hover background
//                 borderColor: '#48AFF0', // Highlight border on hover (e.g., a blue/cyan color)
//                 boxShadow: '0 0 15px rgba(72, 175, 240, 0.4)', // Glowing shadow on hover
//               },
//               // ------------------------------------------
//             }}
//           >
//             Send
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default ContactPage;









// import React, { useEffect, useRef } from 'react';
// import { Box, Typography, TextField, Button, Paper } from '@mui/material';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported
// import L from 'leaflet';
// import { gsap } from 'gsap'; // Moved to top
// import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Moved to top

// // Fix default marker icon issue in Leaflet
// import iconUrl from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// // Register ScrollTrigger plugin if it hasn't been globally (e.g., in App.tsx)
// gsap.registerPlugin(ScrollTrigger);

// const DefaultIcon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// // Updated location to Manjeera Trinity, Hyderabad
// const center: [number, number] = [17.4475, 78.3752]; // Approximate coordinates for Manjeera Trinity, Hyderabad

// const ContactPage: React.FC = () => {
//   // Refs for animation targets
//   const pageContainerRef = useRef<HTMLDivElement | null>(null);
//   const titleRef = useRef<HTMLDivElement | null>(null);
//   const subtitleRef = useRef<HTMLDivElement | null>(null);
//   const mapPaperRef = useRef<HTMLDivElement | null>(null);
//   const formPaperRef = useRef<HTMLDivElement | null>(null);
//   const mapMarkerRef = useRef<L.Marker | null>(null); // Ref for Leaflet Marker instance

//   // Scroll to top when entering the page
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     // Basic cleanup for GSAP and ScrollTrigger on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, []);

//   useEffect(() => {
//     // Ensure elements are available before animating
//     if (!pageContainerRef.current || !titleRef.current || !subtitleRef.current || !mapPaperRef.current || !formPaperRef.current) {
//       return;
//     }

//     // Initial state for entrance animations (elements start invisible/slightly off-position)
//     gsap.set([titleRef.current, subtitleRef.current, mapPaperRef.current, formPaperRef.current], {
//       opacity: 0,
//       y: 20, // Start slightly below
//     });

//     // Create a timeline for entrance animations
//     const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

//     tl.to(pageContainerRef.current, { // Main container fade-in
//       opacity: 1,
//       duration: 0.5,
//       ease: "power2.out"
//     }, 0) // Start immediately

//     // Staggered animation for text and content sections
//     .to(titleRef.current, { opacity: 1, y: 0 }, 0.2)
//     .to(subtitleRef.current, { opacity: 1, y: 0 }, 0.3)
//     .to(mapPaperRef.current, { opacity: 1, y: 0 }, 0.4)
//     .to(formPaperRef.current, { opacity: 1, y: 0 }, 0.5);

//   }, []); // Empty dependency array means this runs once on mount

//   // Marker hover animations
//   const handleMarkerMouseOver = () => {
//     if (mapMarkerRef.current) {
//       // Open the popup immediately on hover
//       mapMarkerRef.current.openPopup();
//       // Animate the marker icon (pulse effect)
//       // Type casting to 'any' to access the internal '_icon' property
//       gsap.to((mapMarkerRef.current as any)._icon, {
//         scale: 1.2, // Pop up slightly
//         duration: 0.3,
//         yoyo: true, // Go back and forth
//         repeat: -1, // Infinite pulse
//         ease: "power1.inOut",
//         transformOrigin: "bottom center" // Pulse from the bottom
//       });
//     }
//   };

//   const handleMarkerMouseOut = () => {
//     if (mapMarkerRef.current) {
//       // Close the popup
//       mapMarkerRef.current.closePopup();
//       // Stop and reset the marker animation
//       // Type casting to 'any' to access the internal '_icon' property
//       gsap.killTweensOf((mapMarkerRef.current as any)._icon);
//       gsap.to((mapMarkerRef.current as any)._icon, {
//         scale: 1, // Return to original size
//         duration: 0.3,
//         transformOrigin: "bottom center"
//       });
//     }
//   };

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0 }}>
//       {/* HomePage-style vibrant background */}
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           minHeight: '100vh',
//           zIndex: -1,
//           background: '#0A0A0A', // Darker base for maximum contrast with bright gradients
//           backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//           `,
//           filter: 'none',
//           borderRadius: '0',
//           pointerEvents: 'none',
//         }}
//       />
//       {/* Main Contact Page Content */}
//       <Box 
//         ref={pageContainerRef}
//         sx={{ 
//           maxWidth: { xs: '90%', sm: 600, md: 700 },
//           mx: 'auto', 
//           color: '#F5F8FA', 
//           py: { xs: 4, sm: 6, md: 8 },
//           px: { xs: 2, sm: 0 },
//           opacity: 0,
//           minHeight: '100vh',
//         }}
//       >
//         {/* Page Title */}
//         <Typography ref={titleRef} variant="h3" sx={{ mb: 2, fontWeight: 700, color: '#F5F8FA', textAlign: 'center' }}>
//           Contact Us
//         </Typography>
//         {/* Page Subtitle */}
//         <Typography ref={subtitleRef} variant="h6" sx={{ mb: 4, color: '#A7B6C2', textAlign: 'center' }}>
//           Get in touch or find us on the map below.
//         </Typography>
//         {/* Map Section */}
//         <Paper elevation={4} ref={mapPaperRef} sx={{ background: '#232B33', mb: 4, p: { xs: 1, sm: 2 }, borderRadius: 3 }}>
//           <MapContainer
//             center={center}
//             zoom={15} // Increased zoom level for a closer view of the location
//             style={{ 
//               width: '100%', 
//               height: '350px', // Fixed height for Leaflet's style prop, or use a responsive wrapper
//               borderRadius: 12, 
//               overflow: 'hidden', 
//             }}
//             scrollWheelZoom={false}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             />
//             <Marker 
//               position={center} 
//               ref={mapMarkerRef} // Assign ref to the marker
//               eventHandlers={{ // Add event handlers for hover effects
//                 mouseover: handleMarkerMouseOver,
//                 mouseout: handleMarkerMouseOut,
//               }}
//             >
//               <Popup>
//                 <strong>Manjeera Trinity</strong><br />
//                 KPHB Phase 3, Kukatpally Housing Board Colony<br />
//                 Hyderabad, Telangana 500072, India
//               </Popup>
//             </Marker>
//           </MapContainer>
//         </Paper>
//         {/* Contact Form Section */}
//         <Paper elevation={2} ref={formPaperRef} sx={{ background: '#232B33', p: { xs: 2, sm: 3 }, borderRadius: 3 }}>
//           <Typography variant="h6" sx={{ mb: 2, color: '#F5F8FA' }}>
//             Send us a Message
//           </Typography>
//           <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 } }}>
//             <TextField 
//               label="Name" 
//               variant="filled" 
//               fullWidth // Ensure text field takes full width
//               InputProps={{ style: { color: '#F5F8FA' } }} 
//               InputLabelProps={{ style: { color: '#A7B6C2' } }} 
//               sx={{ 
//                 background: 'rgba(255,255,255,0.05)', 
//                 borderRadius: '8px',
//                 '& .MuiFilledInput-root': {
//                   borderRadius: '8px',
//                   '&:before': { borderBottom: 'none' },
//                   '&:after': { borderBottom: 'none' },
//                   '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
//                 },
//               }}
//             />
//             <TextField 
//               label="Email" 
//               variant="filled" 
//               fullWidth 
//               InputProps={{ style: { color: '#F5F8FA' } }} 
//               InputLabelProps={{ style: { color: '#A7B6C2' } }} 
//               sx={{ 
//                 background: 'rgba(255,255,255,0.05)', 
//                 borderRadius: '8px',
//                 '& .MuiFilledInput-root': {
//                   borderRadius: '8px',
//                   '&:before': { borderBottom: 'none' },
//                   '&:after': { borderBottom: 'none' },
//                   '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
//                 },
//               }}
//             />
//             <TextField 
//               label="Message" 
//               variant="filled" 
//               multiline 
//               rows={4} 
//               fullWidth 
//               InputProps={{ style: { color: '#F5F8FA' } }} 
//               InputLabelProps={{ style: { color: '#A7B6C2' } }} 
//               sx={{ 
//                 background: 'rgba(255,255,255,0.05)', 
//                 borderRadius: '8px',
//                 '& .MuiFilledInput-root': {
//                   borderRadius: '8px',
//                   '&:before': { borderBottom: 'none' },
//                   '&:after': { borderBottom: 'none' },
//                   '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
//                 },
//               }}
//             />
//             <Button 
//               variant="contained" 
//               color="primary" 
//               sx={{ 
//                 alignSelf: 'flex-end', 
//                 mt: 1, 
//                 background: 'transparent',
//                 border: '2px solid #F5F8FA', // Light border for visibility
//                 color: '#F5F8FA', // Light text color
//                 boxShadow: 'none', // Remove default shadow
//                 borderRadius: '10px',
//                 padding: '10px 30px',
//                 textTransform: 'uppercase',
//                 transition: '0.3s ease-in-out', // Smoother transition
//                 '&:hover': { 
//                   background: 'rgba(255, 255, 255, 0.08)', // Subtle hover background
//                   borderColor: '#48AFF0', // Highlight border on hover (e.g., a blue/cyan color)
//                   boxShadow: '0 0 15px rgba(72, 175, 240, 0.4)', // Glowing shadow on hover
//                 },
//               }}
//             >
//               Send
//             </Button>
//           </Box>
//         </Paper>
//       </Box>
//     </Box>
//   );
// };

// export default ContactPage;











// import React, { useEffect, useRef } from 'react';
// import { Box, Typography, TextField, Button, Paper } from '@mui/material';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported
// import L from 'leaflet';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Fix default marker icon issue in Leaflet
// import iconUrl from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// gsap.registerPlugin(ScrollTrigger);

// const DefaultIcon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// const center: [number, number] = [17.4475, 78.3752]; // Approximate coordinates for Manjeera Trinity, Hyderabad

// const ContactPage: React.FC = () => {
//   const pageContainerRef = useRef<HTMLDivElement | null>(null);
//   const titleRef = useRef<HTMLDivElement | null>(null);
//   const subtitleRef = useRef<HTMLDivElement | null>(null);
//   const mapPaperRef = useRef<HTMLDivElement | null>(null);
//   const formPaperRef = useRef<HTMLDivElement | null>(null);
//   const mapMarkerRef = useRef<L.Marker | null>(null);
//   // NEW: Ref for the map wrapper div
//   const mapWrapperRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//       gsap.globalTimeline.clear();
//     };
//   }, []);

//   useEffect(() => {
//     if (!pageContainerRef.current || !titleRef.current || !subtitleRef.current || !mapPaperRef.current || !formPaperRef.current) {
//       return;
//     }

//     gsap.set([titleRef.current, subtitleRef.current, mapPaperRef.current, formPaperRef.current], {
//       opacity: 0,
//       y: 20,
//     });

//     const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

//     tl.to(pageContainerRef.current, {
//       opacity: 1,
//       duration: 0.5,
//       ease: "power2.out"
//     }, 0)
//     .to(titleRef.current, { opacity: 1, y: 0 }, 0.2)
//     .to(subtitleRef.current, { opacity: 1, y: 0 }, 0.3)
//     .to(mapPaperRef.current, { opacity: 1, y: 0 }, 0.4)
//     .to(formPaperRef.current, { opacity: 1, y: 0 }, 0.5);

//   }, []);

//   // Event handler for when mouse enters the map wrapper
//   const handleMapMouseEnter = () => {
//     if (mapMarkerRef.current) {
//       mapMarkerRef.current.openPopup();
//       gsap.to((mapMarkerRef.current as any)._icon, {
//         scale: 1.2,
//         duration: 0.3,
//         yoyo: true,
//         repeat: -1,
//         ease: "power1.inOut",
//         transformOrigin: "bottom center"
//       });
//     }
//   };

//   // Event handler for when mouse leaves the map wrapper
//   const handleMapMouseLeave = () => {
//     if (mapMarkerRef.current) {
//       mapMarkerRef.current.closePopup();
//       gsap.killTweensOf((mapMarkerRef.current as any)._icon);
//       gsap.to((mapMarkerRef.current as any)._icon, {
//         scale: 1,
//         duration: 0.3,
//         transformOrigin: "bottom center"
//       });
//     }
//   };

//   return (
//     <Box sx={{ position: 'relative', zIndex: 0 }}>
//       {/* HomePage-style vibrant background */}
//       <Box
//         sx={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100vw',
//           height: '100vh',
//           minHeight: '100vh',
//           zIndex: -1,
//           background: '#0A0A0A',
//           backgroundImage: `
//             radial-gradient(circle at 15% 15%, rgba(255, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 85% 25%, rgba(255, 0, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 50% 90%, rgba(0, 255, 255, 0.25) 0%, transparent 45%),
//             radial-gradient(circle at 20% 70%, rgba(255, 255, 0, 0.25) 0%, transparent 45%)
//           `,
//           filter: 'none',
//           borderRadius: '0',
//           pointerEvents: 'none',
//         }}
//       />
//       {/* Main Contact Page Content */}
//       <Box 
//         ref={pageContainerRef}
//         sx={{ 
//           maxWidth: { xs: '90%', sm: 600, md: 700 },
//           mx: 'auto', 
//           color: '#F5F8FA', 
//           py: { xs: 4, sm: 6, md: 8 },
//           px: { xs: 2, sm: 0 },
//           opacity: 0,
//           minHeight: '100vh',
//         }}
//       >
//         {/* Page Title */}
//         <Typography ref={titleRef} variant="h3" sx={{ mb: 2, fontWeight: 700, color: '#F5F8FA', textAlign: 'center' }}>
//           Contact Us
//         </Typography>
//         {/* Page Subtitle */}
//         <Typography ref={subtitleRef} variant="h6" sx={{ mb: 4, color: '#A7B6C2', textAlign: 'center' }}>
//           Get in touch or find us on the map below.
//         </Typography>
//         {/* Map Section */}
//         <Paper 
//           elevation={4} 
//           ref={mapPaperRef} 
//           sx={{ 
//             background: 'rgba(35, 43, 51, 0.6)',
//             backdropFilter: 'blur(10px) saturate(180%)',
//             WebkitBackdropFilter: 'blur(10px) saturate(180%)',
//             mb: 4, 
//             p: { xs: 1, sm: 2 }, 
//             borderRadius: 3,
//             border: '1px solid rgba(255, 255, 255, 0.1)',
//             // Ensure the Paper itself also has a height so the wrapper can detect hover
//             height: 'fit-content', // Or a fixed height if preferred
//           }}
//         >
//           {/* NEW: Wrapper div for hover events */}
//           <Box
//             ref={mapWrapperRef}
//             onMouseEnter={handleMapMouseEnter}
//             onMouseLeave={handleMapMouseLeave}
//             sx={{
//                 width: '100%',
//                 height: '350px', // This height matches the MapContainer's height
//                 borderRadius: 'inherit', // Inherit from parent Paper
//                 overflow: 'hidden',
//                 cursor: 'pointer', // Indicate it's interactive
//             }}
//           >
//             <MapContainer
//               center={center}
//               zoom={15}
//               style={{
//                 width: '100%',
//                 height: '100%', // Take full height of the wrapper
//                 borderRadius: 'inherit',
//                 overflow: 'hidden',
//               }}
//               scrollWheelZoom={false}
//             >
//               <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               />
//               <Marker
//                 position={center}
//                 ref={mapMarkerRef} // Keep this ref for controlling the marker
//                 // REMOVED: eventHandlers from here
//               >
//                 <Popup>
//                   <strong>Manjeera Trinity</strong><br />
//                   KPHB Phase 3, Kukatpally Housing Board Colony<br />
//                   Hyderabad, Telangana 500072, India
//                 </Popup>
//               </Marker>
//             </MapContainer>
//           </Box>
//         </Paper>
//         {/* Contact Form Section */}
//         <Paper 
//           elevation={2} 
//           ref={formPaperRef} 
//           sx={{ 
//             background: 'rgba(35, 43, 51, 0.6)',
//             backdropFilter: 'blur(10px) saturate(180%)',
//             WebkitBackdropFilter: 'blur(10px) saturate(180%)',
//             p: { xs: 2, sm: 3 }, 
//             borderRadius: 3,
//             border: '1px solid rgba(255, 255, 255, 0.1)',
//           }}
//         >
//           <Typography variant="h6" sx={{ mb: 2, color: '#F5F8FA' }}>
//             Send us a Message
//           </Typography>
//           <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 } }}>
//             <TextField 
//               label="Name" 
//               variant="filled" 
//               fullWidth
//               InputProps={{ style: { color: '#F5F8FA' } }} 
//               InputLabelProps={{ style: { color: '#A7B6C2' } }} 
//               sx={{ 
//                 background: 'rgba(255,255,255,0.05)', 
//                 borderRadius: '8px',
//                 '& .MuiFilledInput-root': {
//                   borderRadius: '8px',
//                   '&:before': { borderBottom: 'none' },
//                   '&:after': { borderBottom: 'none' },
//                   '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
//                 },
//               }}
//             />
//             <TextField 
//               label="Email" 
//               variant="filled" 
//               fullWidth 
//               InputProps={{ style: { color: '#F5F8FA' } }} 
//               InputLabelProps={{ style: { color: '#A7B6C2' } }} 
//               sx={{ 
//                 background: 'rgba(255,255,255,0.05)', 
//                 borderRadius: '8px',
//                 '& .MuiFilledInput-root': {
//                   borderRadius: '8px',
//                   '&:before': { borderBottom: 'none' },
//                   '&:after': { borderBottom: 'none' },
//                   '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
//                 },
//               }}
//             />
//             <TextField 
//               label="Message" 
//               variant="filled" 
//               multiline 
//               rows={4} 
//               fullWidth 
//               InputProps={{ style: { color: '#F5F8FA' } }} 
//               InputLabelProps={{ style: { color: '#A7B6C2' } }} 
//               sx={{ 
//                 background: 'rgba(255,255,255,0.05)', 
//                 borderRadius: '8px',
//                 '& .MuiFilledInput-root': {
//                   borderRadius: '8px',
//                   '&:before': { borderBottom: 'none' },
//                   '&:after': { borderBottom: 'none' },
//                   '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
//                 },
//               }}
//             />
//             <Button 
//               variant="contained" 
//               color="primary" 
//               sx={{ 
//                 alignSelf: 'flex-end', 
//                 mt: 1, 
//                 background: 'transparent',
//                 border: '2px solid #F5F8FA',
//                 color: '#F5F8FA',
//                 boxShadow: 'none',
//                 borderRadius: '10px',
//                 padding: '10px 30px',
//                 textTransform: 'uppercase',
//                 transition: '0.3s ease-in-out',
//                 '&:hover': { 
//                   background: 'rgba(255, 255, 255, 0.08)',
//                   borderColor: '#48AFF0',
//                   boxShadow: '0 0 15px rgba(72, 175, 240, 0.4)',
//                 },
//               }}
//             >
//               Send
//             </Button>
//           </Box>
//         </Paper>
//       </Box>
//     </Box>
//   );
// };

// export default ContactPage;




import React, { useEffect, useRef } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported
import L from 'leaflet';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Fix default marker icon issue in Leaflet
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
gsap.registerPlugin(ScrollTrigger);

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
L.Marker.prototype.options.icon = DefaultIcon;

const center: [number, number] = [17.4475, 78.3752]; // Approximate coordinates for Manjeera Trinity, Hyderabad

const ContactPage: React.FC = () => {
  const pageContainerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const mapPaperRef = useRef<HTMLDivElement | null>(null);
  const formPaperRef = useRef<HTMLDivElement | null>(null);
  const mapMarkerRef = useRef<L.Marker | null>(null);
  const mapWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  useEffect(() => {
    if (!pageContainerRef.current || !titleRef.current || !subtitleRef.current || !mapPaperRef.current || !formPaperRef.current) {
      return;
    }

    gsap.set([titleRef.current, subtitleRef.current, mapPaperRef.current, formPaperRef.current], {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

    tl.to(pageContainerRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out"
    }, 0)
    .to(titleRef.current, { opacity: 1, y: 0 }, 0.2)
    .to(subtitleRef.current, { opacity: 1, y: 0 }, 0.3)
    .to(mapPaperRef.current, { opacity: 1, y: 0 }, 0.4)
    .to(formPaperRef.current, { opacity: 1, y: 0 }, 0.5);

  }, []);

  const handleMapMouseEnter = () => {
    if (mapMarkerRef.current) {
      mapMarkerRef.current.openPopup();
      gsap.to((mapMarkerRef.current as any)._icon, {
        scale: 1.2,
        duration: 0.3,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        transformOrigin: "bottom center"
      });
    }
  };

  const handleMapMouseLeave = () => {
    if (mapMarkerRef.current) {
      mapMarkerRef.current.closePopup();
      gsap.killTweensOf((mapMarkerRef.current as any)._icon);
      gsap.to((mapMarkerRef.current as any)._icon, {
        scale: 1,
        duration: 0.3,
        transformOrigin: "bottom center"
      });
    }
  };

  return (
    <Box sx={{ position: 'relative', zIndex: 0 }}>
      {/* HomePage-style vibrant background */}
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
      {/* Main Contact Page Content */}
      <Box 
        ref={pageContainerRef}
        sx={{ 
          maxWidth: { xs: '90%', sm: 600, md: 700 },
          mx: 'auto', 
          color: '#F5F8FA', 
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 0 },
          opacity: 0,
          minHeight: '100vh',
        }}
      >
        {/* Page Title */}
        <Typography ref={titleRef} variant="h3" sx={{ mb: 2, fontWeight: 700, color: '#F5F8FA', textAlign: 'start' }}>
          Contact Us
        </Typography>
        {/* Page Subtitle */}
        <Typography ref={subtitleRef} variant="h6" sx={{ mb: 4, color: '#A7B6C2', textAlign: 'start' }}>
          Get in touch or find us on the map below.
        </Typography>
        {/* Map Section */}
        <Paper 
          elevation={4} 
          ref={mapPaperRef} 
          sx={{ 
            background: 'rgba(35, 43, 51, 0.6)',
            backdropFilter: 'blur(10px) saturate(180%)',
            WebkitBackdropFilter: 'blur(10px) saturate(180%)',
            mb: 4, 
            p: { xs: 1, sm: 2 }, 
            borderRadius: 6,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            height: 'fit-content',
          }}
        >
          {/* NEW: Wrapper div for hover events */}
          <Box
            ref={mapWrapperRef}
            onMouseEnter={handleMapMouseEnter}
            onMouseLeave={handleMapMouseLeave}
            sx={{
                width: '100%',
                height: '350px',
                borderRadius: 'inherit',
                overflow: 'hidden',
                cursor: 'pointer',
            }}
          >
            <MapContainer
              center={center}
              zoom={15}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 'inherit',
                overflow: 'hidden',
              }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                position={center}
                ref={mapMarkerRef}
              >
                <Popup>
                  <strong>Manjeera Trinity</strong><br />
                  KPHB Phase 3, Kukatpally Housing Board Colony<br />
                  Hyderabad, Telangana 500072, India
                </Popup>
              </Marker>
            </MapContainer>
          </Box>
        </Paper>

        {/* Contact Form Section */}
        <Paper 
          elevation={2} 
          ref={formPaperRef} 
          sx={{ 
            background: 'rgba(35, 43, 51, 0.6)',
            backdropFilter: 'blur(10px) saturate(180%)',
            WebkitBackdropFilter: 'blur(10px) saturate(180%)',
            p: { xs: 2, sm: 3 }, 
            borderRadius: 6,
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: '#F5F8FA' }}>
            Send us a Message
          </Typography>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 } }}>
            <TextField 
              label="Name" 
              variant="filled" 
              fullWidth
              InputProps={{ style: { color: '#F5F8FA' } }} 
              InputLabelProps={{ style: { color: '#A7B6C2' } }} 
              sx={{ 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '10px',
                '& .MuiFilledInput-root': {
                  borderRadius: '10px',
                  '&:before': { borderBottom: 'none' },
                  '&:after': { borderBottom: 'none' },
                  '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
                },
              }}
            />
            <TextField 
              label="Email" 
              variant="filled" 
              fullWidth 
              InputProps={{ style: { color: '#F5F8FA' } }} 
              InputLabelProps={{ style: { color: '#A7B6C2' } }} 
              sx={{ 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '10px',
                '& .MuiFilledInput-root': {
                  borderRadius: '10px',
                  '&:before': { borderBottom: 'none' },
                  '&:after': { borderBottom: 'none' },
                  '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
                },
              }}
            />
            <TextField 
              label="Message" 
              variant="filled" 
              multiline 
              rows={4} 
              fullWidth 
              InputProps={{ style: { color: '#F5F8FA' } }} 
              InputLabelProps={{ style: { color: '#A7B6C2' } }} 
              sx={{ 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '10px',
                '& .MuiFilledInput-root': {
                  borderRadius: '10px',
                  '&:before': { borderBottom: 'none' },
                  '&:after': { borderBottom: 'none' },
                  '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
                },
              }}
            />
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ 
                alignSelf: 'flex-end', 
                mt: 1, 
                background: 'transparent',
                border: '2px solid #F5F8FA',
                color: '#F5F8FA',
                boxShadow: 'none',
                borderRadius: '10px',
                padding: '10px 30px',
                textTransform: 'uppercase',
                transition: '0.3s ease-in-out',
                '&:hover': { 
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: '#48AFF0',
                  boxShadow: '0 0 15px rgba(72, 175, 240, 0.4)',
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Paper>

        {/* UPDATED: Dedicated Contact Details Section */}
        <Paper 
          elevation={6}
          sx={{ 
            background: 'rgba(35, 43, 51, 0.85)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            mt: 4,
            p: { xs: 3, sm: 4 },
            borderRadius: 6,
            border: '1.5px solid rgba(72, 175, 240, 0.18)',
            textAlign: 'start',
            boxShadow: '0px 8px 32px rgba(72,175,240,0.10)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Accent bar */}
          <Box sx={{
            width: '100%',
            height: 5,
            background: 'linear-gradient(90deg, #48AFF0 0%, #A259FF 100%)',
            borderRadius: 3,
            ml: 0,
            mb: 2,
          }} />
          <Typography 
            variant="h5"
            sx={{ 
              mb: { xs: 2.5, sm: 3 }, 
              fontWeight: 700,
              color: '#F5F8FA',
              letterSpacing: '0.07em',
              textShadow: '0 2px 8px rgba(72,175,240,0.10)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 1.5,
            }}
          >
            <LocationOnIcon sx={{ color: '#48AFF0', fontSize: 32, verticalAlign: 'middle' }} />
            Our Contact Details
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PhoneIcon sx={{ color: '#48AFF0', fontSize: 22 }} />
              <Typography variant="body1" sx={{ color: '#E0E8EF', fontWeight: 500 }}>
                <a href="tel:+919876543210" style={{ color: '#48AFF0', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#A259FF')}
                  onMouseOut={e => (e.currentTarget.style.color = '#48AFF0')}
                >
                  +91 98765 43210
                </a>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ color: '#48AFF0', fontSize: 22 }} />
              <Typography variant="body1" sx={{ color: '#E0E8EF', fontWeight: 500 }}>
                <a href="mailto:contact@yourcompany.com" style={{ color: '#48AFF0', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#A259FF')}
                  onMouseOut={e => (e.currentTarget.style.color = '#48AFF0')}
                >
                  contact@yourcompany.com
                </a>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mt: 1 }}>
              <LocationOnIcon sx={{ color: '#48AFF0', fontSize: 22, mt: '2px' }} />
              <Typography variant="body1" sx={{ color: '#E0E8EF', fontWeight: 500, textAlign: 'left' }}>
                Manjeera Trinity, KPHB Phase 3,<br />
                Kukatpally Housing Board Colony,<br />
                Hyderabad, Telangana 500072, India
              </Typography>
            </Box>
          </Box>
        </Paper>

      </Box>
    </Box>
  );
};

export default ContactPage;