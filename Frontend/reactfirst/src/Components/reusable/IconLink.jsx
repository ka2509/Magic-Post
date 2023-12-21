import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Import specific icons
// Import other icons as needed

const SocialIcon = ({ url, icon }) => {
  const iconItems = icon.split(' ');
  const IconComponent = iconItems.map((iconItem) => {
    const Icon = icons[iconItem]; // Assuming a mapping for icon names to FontAwesomeIcon components
    return <Icon key={iconItem} />;
  });

  return (
    <a
      className="btn btn-floating m-1"
      target="_blank"
      href={url}
      role="button"
    >
      {IconComponent}
    </a>
  );
};

export default SocialIcon;
