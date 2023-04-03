import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Icon = ({ src, title, role, ...props }) => {
  return (
    <div className="RestIcon" aria-label={title} role={role ?? 'presentation'}>
      <FontAwesomeIcon title={title} icon={src} {...props} />
    </div>
  );
};
