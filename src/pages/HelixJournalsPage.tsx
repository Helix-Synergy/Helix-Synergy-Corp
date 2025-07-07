import React from 'react';
import ComingSoonContent from '../components/ComingSoonContent';
import helixJournalsLogo from '../assets/images/helix-journals-logo.png'; // Adjust path if necessary

const HelixJournalsPage: React.FC = () => {
  return (
    <ComingSoonContent
      logoSrc={helixJournalsLogo}
      title="Helix Journals"
      description="Peer-reviewed International Journals in Science, Technology, Health & Agriculture."
      comingSoonDate="20th October 2025" // You can update this date!
    />
  );
};

export default HelixJournalsPage;