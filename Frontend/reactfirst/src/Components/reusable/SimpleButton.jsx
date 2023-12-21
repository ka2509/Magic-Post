import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons as needed

const SocialButton = ({ url, icon, children }) => {
  const iconItems = icon.split(' ');
  const IconComponent = iconItems.map((iconItem) => {
    const Icon = icons[iconItem]; // Assuming a mapping for icon names to FontAwesomeIcon components
    return <Icon key={iconItem} className="me-2" />;
  });

  return (
    <a
      className="btn mr-md-2"
      href={url}
      role="button"
      target="_blank"
    >
      {IconComponent}
      {children}
    </a>
  );
};

export default SocialButton;