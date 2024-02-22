import React, { useEffect } from 'react';
import './background.css'; // Import the CSS for the animated background

function AnimatedBackground() {
  useEffect(() => {
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particleArray;
    let sizeArray;
    // let blob;

    const particles = [
        {
            red: 46,
            green: 75,
            blue: 212,
            alpha: 0.40
        },
        {
            red: 109,
            green: 172,
            blue: 238,
            alpha: 0.72
        },
        {
            red: 238,
            green: 181,
            blue: 149,
            alpha: 0.50
        },
        {
            red: 98,
            green: 245,
            blue: 166,
            alpha: 0.40
        },
        {
            red: 238,
            green: 181,
            blue: 149,
            alpha: 0.50
        },
        {
            red: 46,
            green: 75,
            blue: 212,
            alpha: 0.40
        },
        {
            red: 46,
            green: 75,
            blue: 212,
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

    // Particle.prototype.draw = function() {
    //     ctx.save(); // Save the current drawing state
    //     ctx.beginPath();
    //     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    //     ctx.fillStyle = 'transparent'; // Set the fill color to transparent
    //     ctx.fill();
    //     ctx.filter = 'blur(200px)'; // Apply the blur filter
    //     ctx.clip(); // Clip the drawing area
    //     const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height); // Create a linear gradient
    //     gradient.addColorStop(0, `rgba(46, 75, 212, 0.40)`); // Add color stops to the gradient
    //     gradient.addColorStop(1, `rgba(198, 115, 252, 0.40)`);
    //     ctx.fillStyle = gradient; // Set the fill style to the gradient
    //     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    //     ctx.fill(); // Fill the shape with the gradient
    //     ctx.restore(); // Restore the saved drawing state
    // }

    Particle.prototype.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha}`;
      ctx.fill();
    }

    // Particle.prototype.draw = function() {
    //   const img = new Image();
    //   img.src = this.svgPath;
    //   img.onload = function() {
    //     ctx.drawImage(img, this.x, this.y, this.size, this.size);
    //   }.bind(this);
    // }

    // Particle.prototype.draw = function() {
    //     ctx.save(); // Save the current drawing state
    //     ctx.filter = 'blur(200px)'; // Apply the blur filter
    //     ctx.beginPath();
    //     ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    //     ctx.fillStyle = `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    //     ctx.fill();
    //     ctx.restore(); // Restore the saved drawing state
    //   }

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
        sizeArray = [1160, 1325, 740, 768, 740, 1160, 1160, 1325];
        // blob = ['./blueBlob.svg', './purpleBlob1.svg', './purpleBlob2.svg', './greenBlob.svg', './purpleBlob3.svg', './purpleBlob4.svg', './purpleBlob5.svg'];

        for (let i = 0; i < 8; i++) {
          let size = sizeArray[i] / 5;
          let x = Math.random() * (window.innerWidth - size * 2);
          let y = Math.random() * (window.innerHeight - size * 2);
          let directionX = 0.5 - Math.random() * 0.2;
          let directionY = 0.5 - Math.random() * 0.2;
          let { red, green, blue, alpha } = particles[i];
          // let svgPath = blob[i];
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