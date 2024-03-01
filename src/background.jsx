import React, { useEffect } from 'react';
import './background.css';

function AnimatedBackground() {
  useEffect(() => {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particleArray;
    let sizeArray;

    const particles = [
        {
            red: 238,
            green: 181,
            blue: 149,
            alpha: 0.4
        },
        {
            red: 226,
            green: 156,
            blue: 180,
            alpha: 0.4
        },
        {
            red: 197,
            green: 95,
            blue: 255,
            alpha: 0.4
        },
        {
            red: 72,
            green: 157,
            blue: 241,
            alpha: 0.4
        },
        {
            red: 0,
            green: 180,
            blue: 251,
            alpha: 0.4
        },
        {
            red: 0,
            green: 241,
            blue: 249,
            alpha: 0.40
        },
        {
          red: 229,
          green: 126,
          blue: 255,
          alpha: 0.40
        }
      ];

    function Particle(x, y, directionX, directionY, size, red, green, blue, alpha) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.red = red;
      this.green = green;
      this.blue = blue;
      this.alpha = alpha;
    }

    Particle.prototype.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha}`;
      ctx.fill();
    }

    Particle.prototype.update = function() {
      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
      }
      if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
      }
      this.x += this.directionX;
      this.y += this.directionY;
      this.draw();
    }

    function init() {
        particleArray = [];
        sizeArray = [1160, 1325, 740, 768, 740, 1160, 1325];

        for (let i = 0; i < 7; i++) {
          let size = sizeArray[i] / 6;
          let x = Math.random() * (window.innerWidth - size * 2);
          let y = Math.random() * (window.innerHeight - size * 2);
          let directionX = 0.5 - Math.random() * 0.1;
          let directionY = 0.5 - Math.random() * 0.1;
          let { red, green, blue, alpha } = particles[i];
          particleArray.push(new Particle(x, y, directionX, directionY, size, red, green, blue, alpha));       
        }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
      }
    }

    init();
    animate();

    window.addEventListener('resize', function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    // Clean up function
    return () => {
      window.removeEventListener('resize', () => { });
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="animated-background">
      <canvas id="canvas1"></canvas>
    </div>
  );
}

export default AnimatedBackground;