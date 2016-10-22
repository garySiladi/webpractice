import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import ContactList from './contactList.js';

const contacts = [
  {url: 'https://www.facebook.com/gergelysiladi', class: 'fa fa-facebook-official'},
  {url: 'mailto:gergelysiladi@gmail.com', class: 'fa fa-envelope'},
  {url: 'https://soundcloud.com/garymacroy', class: 'fa fa-soundcloud'},
  {url: 'https://github.com/garySiladi', class: 'fa fa-github-square'}
];

const MainAbout = () => (
    <div className="mainWelcomeDiv">
      <div className="welcomeDiv">
        <Image src={require('../images/logo.png')}/>
        <p><span>GARY</span><span>SILADI</span></p>
      </div>
      <div className="contactPart">
        <div>
          <ContactList contacts={contacts}/>
        </div>
      </div>
    </div>
);

export default MainAbout;
