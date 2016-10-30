import React from 'react';
import SongList from '../components/songList.js';
import { Grid, Row, Col } from 'react-bootstrap';

const soundcloudLinks = [
  "280892081",
  "239432367",
  "232127176",
  "223274804",
  "215970989",
];

class MainProjects extends React.Component {
  render(){
    return(
      <div>
        <Grid fluid className="scHeader">
          <Row>
            <Col>Soundcloud songs</Col>
          </Row>
        </Grid>
        <Grid>
          <SongList songs={soundcloudLinks} />
        </Grid>
      </div>
    );
  }
}

export default MainProjects;
