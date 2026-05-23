import React from 'react';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-primary-dark/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-secondary-dark/20 rounded-full mix-blend-screen filter blur-[80px] animate-blob" style={{ animationDelay: '6s' }}></div>
    </div>
  );
};

export default BackgroundEffects;
