'use client'
import React, { useEffect, useRef } from 'react';
const SemicircleGraph = ({ percentage, color }) => {
  const canvasRef = useRef(null);

  const image = new Image();
  image.src = '/frame5.svg';

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const angle = (percentage / 100) * Math.PI;
    context.clearRect(0, 0, canvas.width, canvas.height);

    const padding = 7;
    const radius = canvas.height - padding;

    image.onload = () => {
      // Draw the gray semicircle
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height, radius, 0, Math.PI, true);
      context.strokeStyle = '#e0e0e0';
      context.lineWidth = 9;
      context.stroke();

      // Draw the colored semicircle based on the percentage
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height, radius, Math.PI, Math.PI + angle, false);
      context.strokeStyle = color;
      context.lineWidth = 10;
      context.stroke();

      // Draw the image on the canvas
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Draw the ball at the end of the colored semicircle
      const ballRadius = 10;
      const ballX = canvas.width / 2 + radius * Math.cos(Math.PI + angle);
      const ballY = canvas.height + radius * Math.sin(Math.PI + angle);
      context.beginPath();
      context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
      context.fillStyle = color;
      context.fill();

      // Draw the percentage text at the middle bottom of the canvas
      const percentageText = `${percentage}%`;
      context.font = '36px Courier New';
      context.fillStyle = color;
      context.textAlign = 'center';
      context.fillText(percentageText, canvas.width / 2, canvas.height);
    };
  }, [percentage]);

  return (
    <main style={{ position: 'relative', height: '100%' }}>
      <canvas ref={canvasRef} width={118} height={62} />
    </main>
  );
};

export default SemicircleGraph;
