import React from 'react';

export function childrenWithProps(children, props) {
  return React.Children.map(children, child => React.cloneElement(child, { ...props }))
}
