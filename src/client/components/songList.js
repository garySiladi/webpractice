import React from 'react';
import ScLink from './soundcloudTrack.js';
import { Row, Col } from 'react-bootstrap';

class SongList extends React.Component {

  renderSongs(){
    let songlist = [];
    this.props.songs.forEach(song => {
                songlist.push(
                  <Col md={4} sm={6} xs={12}>
                    <ScLink songlink={song}/>
                  </Col>
                );
    });
    return songlist;
  }

  render(){
    {console.log(this.props)};
    return(
      <Row className="songList">
        {this.renderSongs()}
      </Row>
    );
  }
}

export default SongList;
