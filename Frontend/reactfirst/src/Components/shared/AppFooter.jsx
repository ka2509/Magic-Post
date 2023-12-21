import React from 'react';
import SocialIcon from './SocialIcon'; // Import the SocialIcon component

const AppFooter = ({ links, copyright }) => {
  return (
    <footer className="bg-dark text-white text-center">
      <div className="container p-3 pb-0">
        <section>
          {links.map((link) => (
            <SocialIcon key={link.id} url={link.url} icon={link.icon} className="text-white" />
          ))}
        </section>
      </div>
      <div className="text-center p-3">© {copyright}</div>
    </footer>
  );
};

export default AppFooter;