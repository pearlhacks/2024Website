import React from 'react';

const getBadgeStyle = (isWideWindow) => ({
  display: 'inline-block',
  maxWidth: isWideWindow ? '100px' : '60px', // Smaller size for narrow windows
  minWidth: isWideWindow ? '100px' : '60px', // Adjust as needed
  right: isWideWindow ? '50px' : '10px', // Less margin for narrow windows
  top: '0',
  zIndex: 10000,
});

const MLHBadge = ({ isWideWindow }) => {
  const badgeStyle = getBadgeStyle(isWideWindow);

  return (
    <a
      id="mlh-trust-badge"
      style={badgeStyle}
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content="
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg" 
        alt="MLH Trust Badge"
        style={{ width: '100%', height: 'auto' }} // Ensures the image scales with its container
      />
    </a>
  );
};

export default MLHBadge;
