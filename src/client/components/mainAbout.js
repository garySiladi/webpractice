import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';

const MainAbout = () => (
    <div>
      <Jumbotron>
        <h1>Welcome to my page</h1>
        <Image src={require('../images/logo.png')}/>
        <p><span>GARY</span><span>SILADI</span></p>
      </Jumbotron>
    </div>
);

export default MainAbout;
