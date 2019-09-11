import React from 'react';

import './App.css';

function FancyBorder(props){
  console.log(props.children)

  return (
  <div className={'FancyBorder FancyBorder-' + props.color }>
    {props.children}
  </div>)
}
function WelcomeDialog(){
  return (
    <FancyBorder color='blue'>
      <h1 className="Dialog-title">
        Welcome
      </h1 >  
      <p className="Dialog-message">
        <span>Thank you for visiting our spacecraft!  </span>
      </p> 
    </FancyBorder>
  )
}

function App() {
  return (
    <div className="App">
      <WelcomeDialog></WelcomeDialog>
    </div>
  );
}

export default App;
