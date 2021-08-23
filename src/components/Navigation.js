import React from 'react';

function Navigation(props) {
  return (
    <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            { props.titulo }
          </a>
        </nav>
    </div>
  );
}

export default Navigation;
