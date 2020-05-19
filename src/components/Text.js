import React from 'react';
import { Text as TextUI } from '@ui-kitten/components';
import PropTypes from 'prop-types';

const fontsFamilies = {
  title: 'Muli-Black',
  subtile: 'Muli-Medium',
  default: 'Muli-ExtraLight',
};

function Text({ variant = 'default', children }) {
  return (
    <TextUI style={{ fontFamily: fontsFamilies[variant] }}>
      {children}
    </TextUI>
  );
}

Text.propTypes = {
  variant: PropTypes.oneOf(['title', 'subtile', 'default'])
};

export default Text;
