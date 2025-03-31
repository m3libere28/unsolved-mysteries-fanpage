import React, { useEffect, useRef } from 'react';
import '../styles/SpookyBackground.css';

const SpookyBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const symbols = [
      // Zodiac symbols
      '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓',
      // Planetary symbols
      '☉', '☽', '☿', '♀', '♂', '♃', '♄', '♆', '♇',
      // Mystical symbols
      '☠', '✠', '⚔', '⚛', '☯',
      // Basic shapes
      '△', '▽', '◇', '○'
    ];
    
    class Drop {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.opacity = 1;
        this.speed = 0.5 + Math.random() * 0.5;
        // Higher chance of zodiac symbols
        const symbolType = Math.random();
        if (symbolType < 0.4) {
          // 40% chance of zodiac symbol
          this.symbol = symbols[Math.floor(Math.random() * 12)];
        } else if (symbolType < 0.7) {
          // 30% chance of planetary symbol
          this.symbol = symbols[12 + Math.floor(Math.random() * 9)];
        } else if (symbolType < 0.9) {
          // 20% chance of mystical symbol
          this.symbol = symbols[21 + Math.floor(Math.random() * 5)];
        } else {
          // 10% chance of basic shape
          this.symbol = symbols[26 + Math.floor(Math.random() * 4)];
        }
      }
      
      update() {
        this.y += this.speed;
        // Fade out as it falls, but more slowly
        if (this.y > canvas.height * 0.6) {
          this.opacity *= 0.98; // Slower fade out
        }
        return this.opacity > 0.01 && this.y < canvas.height;
      }
      
      draw() {
        // Increased opacity by 30%
        const baseOpacity = this.opacity * 1.3;
        
        // Special treatment for zodiac symbols (first 12 symbols)
        const isZodiac = symbols.indexOf(this.symbol) < 12;
        
        // Stronger glow for zodiac symbols
        if (isZodiac) {
          ctx.shadowColor = `rgba(255, 30, 30, ${baseOpacity * 0.5})`;
          ctx.shadowBlur = Math.ceil(baseOpacity * 8);
          ctx.font = `bold ${fontSize * 1.2}px monospace`; // 20% larger
        } else {
          ctx.shadowColor = `rgba(255, 0, 0, ${baseOpacity * 0.4})`;
          ctx.shadowBlur = Math.ceil(baseOpacity * 5);
          ctx.font = `bold ${fontSize}px monospace`;
        }
        
        ctx.fillStyle = `rgba(255, ${Math.floor(baseOpacity * 50)}, ${Math.floor(baseOpacity * 50)}, ${baseOpacity})`;
        ctx.fillText(this.symbol, this.x, this.y);
      }
    }
    
    let drops = [];
    const fontSize = 42;
    const spacing = fontSize * 1.5;
    
    const createDrop = () => {
      const x = Math.floor(Math.random() * (canvas.width / spacing)) * spacing;
      const drop = new Drop(x, -fontSize);
      drops.push(drop);
    };
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Randomly add new drops
      if (Math.random() > 0.9) {
        createDrop();
      }
      
      // Update and draw existing drops
      drops = drops.filter(drop => {
        if (drop.update()) {
          drop.draw();
          return true;
        }
        return false;
      });
      
      ctx.shadowBlur = 0;
    };

    const interval = setInterval(draw, 33); // Faster interval for smoother animation

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="spooky-background">
      <canvas ref={canvasRef} className="matrix-canvas"></canvas>
      <div className="vignette-overlay"></div>
    </div>
  );
};

export default SpookyBackground;
