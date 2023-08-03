'use client'
import React, { useEffect, useRef } from 'react';

const SemicircleGraph = ({ percentage, color }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const angle = ((percentage / 100) * Math.PI)+0.3;
    context.clearRect(0, 0, canvas.width, canvas.height);

    const padding = 30;
    const radius = canvas.height - padding;

    const image = new Image();
    image.src = '/frame5.svg';
    image.onload = () => {
      // Draw the gray semicircle
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height/1.4, radius, 90, Math.PI/3, false);
      context.strokeStyle = '#e0e0e0';
      context.lineWidth = 14;
      context.stroke();

      // Draw the colored semicircle based on the percentage
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height/1.4, radius, 90, Math.PI + angle, false);
      context.strokeStyle = color;
      context.lineWidth = 15;
      context.stroke();

      // Draw the image on the canvas
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      // Draw the ball at the end of the colored semicircle
      const ballRadius = 10;
      const ballX = canvas.width / 2 + radius * Math.cos(Math.PI + angle);
      const ballY = canvas.height/1.4 + radius * Math.sin(Math.PI + angle);
      context.beginPath();
      context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
      context.fillStyle = color;
      context.fill();

      // Draw the percentage text at the middle bottom of the canvas
      const percentageText = `${percentage}%`;
      context.fillStyle = color;
      context.font = '34px "Akshar", "Convergence", sans-serif';
      context.textAlign = 'center';
      context.fillText(percentageText, canvas.width / 2, canvas.height);
    };
  }, [percentage, color]);

  return (
    <main style={{ position: 'relative'}}>
      <canvas ref={canvasRef} width={118} height={80}  />
    </main>
  );
};

export default SemicircleGraph;
