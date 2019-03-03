import React from 'react'
import ReactDOM from 'react-dom'
import Family from './Family';
import Member from './Member';

ReactDOM.render(
  <Family lastname='Fogaça' >
    <Member name='William' />
    <Member name='Pedro' />
    <Member name='Maria' />
    <Member name='José' />
  </Family>
, document.getElementById('app'))