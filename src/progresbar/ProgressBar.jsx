import React, { useRef, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

const ProgressBar = () => {
  const ref = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const startProgress = () => {
    setIsLoading(true);
    ref.current.continuousStart();
  };

  const stopProgress = () => {
    setIsLoading(false);
    ref.current.complete();
  };

  return (
    <div>
      <LoadingBar
        color="#f11946"
        ref={ref}
        onLoaderFinished={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="loading-overlay">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
