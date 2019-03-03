import React from 'react';
import { childrenWithProps } from '../utils/reactUtils';

export default props => (
  <div>
    <h1>Família {props.lastname}</h1>
    { childrenWithProps(props.children, props) }
    
  </div>
)