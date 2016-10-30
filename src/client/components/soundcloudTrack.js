import React from 'react';

const EmbedTrack = (songlink) => (
  <div className="soundcloudContainer">
    <div className="lazyLoad" />
    <iframe
      width="300"
      height="300"
      scrolling="no"
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${songlink.songlink}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true`}
    ></iframe>
  </div>
);

export default EmbedTrack;
