import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <div className="preloader-wrapper big active center">
        <div className="spinner-layer spinner-blue-only center">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
