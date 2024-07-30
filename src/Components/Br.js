import React from 'react';
import { useSpring, animated } from 'react-spring';

const Br = () => {
   const starStyles = useSpring({
    to: [
      { transform: 'translateY(-100px)' },
      { transform: 'translateY(100vh)' }
    ],
    from: { transform: 'translateY(100vh)' },
    reset: true,
    reverse: true,
    config: { duration: 4000 },
    loop: true,
  });

  const starStyle = {
    position: 'absolute',
    width: '10px',
    height: '10px',
    backgroundColor: 'white',
    borderRadius: '50%',
    opacity: 0.8,
  };

  return (
    <div style={{ 
      position: 'fixed', /* Position fixed to cover entire viewport */
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      pointerEvents: 'none', /* Ensure it does not interfere with clicks */
      zIndex: -1, /* Make sure it's behind other content */
    }}>
      {[...Array(50)].map((_, i) => (
        <animated.div
          key={i}
          style={{
            ...starStyle,
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            ...starStyles,
            animationDuration: `${Math.random() * 5000 + 2000}ms`,
            animationDelay: `${Math.random() * 5000}ms`,
            animationIterationCount: 'infinite',
          }}
        />
      ))}
    </div>
  );
};

export default Br;
