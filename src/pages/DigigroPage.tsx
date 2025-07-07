import React from 'react';
import ComingSoonContent from '../components/ComingSoonContent';
import digigroLogo from '../assets/images/digigro-logo.png'; // Adjust path if necessary

const DigigroPage: React.FC = () => {
  return (
    <ComingSoonContent
      logoSrc={digigroLogo}
      title="DIGIGRO"
      description="10+ years of experience in Digital Marketing, SEO & Content Marketing."
      comingSoonDate="24th September 2025" // You can update this date!
    />
  );
};

export default DigigroPage;