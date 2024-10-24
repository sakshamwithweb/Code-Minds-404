import React from 'react';

const KnowMoreAbout = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-6">Know More About Us</h2>
      
      {/* YouTube Video Embed */}
      <div className="relative overflow-hidden" id='about' style={{ paddingBottom: '56.25%', height: 0 }}>
        <iframe 
          className="absolute top-0 left-0 w-full h-full" 
          src="https://www.youtube.com/embed/gxjOjtoYDik" 
          title="YouTube Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default KnowMoreAbout;
