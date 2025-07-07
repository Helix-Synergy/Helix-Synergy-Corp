import React from 'react';
import ComingSoonContent from '../components/ComingSoonContent';
import helixESchrollLogo from '../assets/images/helix-e-scroll-logo.png'; // Adjust path if necessary

const HelixEScrollPage: React.FC = () => {
  return (
    <ComingSoonContent
      logoSrc={helixESchrollLogo}
      title="Helix e-Scroll"
      description="Digital Abstract Archives from Global Conferences in Science, Pharma & Technology."
      comingSoonDate="14th August 2025" // You can update this date!
    />
  );
};

export default HelixEScrollPage;