import React from 'react';
import EmbedTrack from './soundcloudTrack.js';
import { Row, Col } from 'react-bootstrap';

class SongList extends React.Component {

  renderSongs(){
    let songlist = [];
    this.props.songs.forEach(function (song, i) {
              songlist.push(
                <Col key={i} md={4} sm={6} xs={12}>
                  <EmbedTrack songlink={song}/>
                </Col>
              );
            });
    return songlist;
  }

  render(){
    return(
      <Row className="songList">
        {this.renderSongs()}
      </Row>
    );
  }
}

export default SongList;
