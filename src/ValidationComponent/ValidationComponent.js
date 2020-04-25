import React from 'react';

const validation = (props) => {
  return (<div className="ValidationComponent">
  <p> {props.textLength >= 5 ? 'Text long enough' : 'Text too short'} </p>
  </div>)
}

export default validation;
