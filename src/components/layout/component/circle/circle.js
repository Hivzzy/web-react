// src/components/layout/component/circle/Circle.js
import React from 'react';
import { useTheme } from '@mui/material/styles';

function Circle({ width, height, rotation }) {
  const theme = useTheme();
  const color = theme.palette.circle.fill;
  const transform = rotation ? `rotate(${rotation} 111.5 97)` : '';

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 223 194"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={transform}
    >
      <path d="M223 127.567C223 179.113 167.636 194 117.452 194C67.2677 194 0 179.113 0 127.567C0 76.0214 55.7656 0 105.945 0C156.129 0 223 76.0214 223 127.567Z" fill={color} />
    </svg>
  );
}

export default Circle;
