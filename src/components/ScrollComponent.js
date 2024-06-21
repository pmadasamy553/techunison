import React, { useRef } from 'react';

const ScrollComponent = () => {
  const scrollRef = useRef(null);

  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div 
        ref={scrollRef} 
        style={{ 
          height: '300px', 
          overflowY: 'scroll', 
          border: '1px solid black' 
        }}
      >
        <div style={{ height: '1000px' }}>
          <p>Scroll me up and down!</p>
          {/* Add more content here to make the container scrollable */}
        </div>
      </div>
      <button onClick={scrollToTop}>Scroll to Top</button>
      <button onClick={scrollToBottom}>Scroll to Bottom</button>
    </div>
  );
};

export default ScrollComponent;
