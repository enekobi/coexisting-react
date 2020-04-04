import React, { useState } from 'react';

const COLORS = ['yellow', 'antiquewhite'];
export default () => {
  const [versions, setVersions] = useState({});
  const [color, setColor] = useState(COLORS[0]);
  const handleClick = () => {
    const { version } = require('react');
    setVersions({});
    setVersions({ bundle: version, global: window.React?.version });
    setColor(current => COLORS.find(c => c !== current));
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        Get versions
      </button>
      {versions.bundle && (
        <div id="nko-log" style={{ backgroundColor: color, color: 'black' }}>
          <h3>App: {versions.bundle}</h3>
          <h3>Window: {versions.global}</h3>
        </div>
      )}
    </>
  );
};
