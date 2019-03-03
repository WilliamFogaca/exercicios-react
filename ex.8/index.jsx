import React from 'react';
import ReactDOM from 'react-dom';
import ContadorClassComponent from './ContadorClassComponent';


ReactDOM.render(
  <ContadorClassComponent label="Contador" initialValue={10}/>
, document.getElementById('app'))