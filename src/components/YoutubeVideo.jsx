import React from 'react';

export default function YoutubeVideo({ videoId }) {
  return (
    <iframe
      width="600"
      height="390"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allowFullScreen
      title="Embedded YouTube Video"
      className='pb-4'
    />
  );
}
