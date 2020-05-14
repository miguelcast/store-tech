import React from 'react';
import { Text as TextRN } from 'react-native';
import PropTypes from 'prop-types';

const fontsFamilies = {
  title: 'Muli-Black',
  subtile: 'Muli-Medium',
  default: 'Muli-ExtraLight',
};

function Text({ variant = 'default', children }) {
  return (
    <TextRN style={{ fontFamily: fontsFamilies[variant] }}>
      {children}
    </TextRN>
  );
}

Text.propTypes = {
  variant: PropTypes.oneOf(['title', 'subtile', 'default'])
};

export default Text;
