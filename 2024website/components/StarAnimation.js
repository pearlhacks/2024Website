import React, { useEffect, useRef, useState } from 'react';

const StarAnimation = () => {
  const canvasRef = useRef(null);
  const rint = 50;

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const context = canvas.getContext('2d');
    let stars = [];

    for (let i = 0; i < rint; i++) {
      const star = new Circle(canvas.width, canvas.height);
      star.reset();
      stars.push(star);
    }

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        star.fade();
        star.move();
        star.draw(context);
      });
    };

    const intervalId = setInterval(draw, rint);

    return () => clearInterval(intervalId);
  }, []); // Dependency array is empty to run only once
  class Circle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.s = {
        ttl: 8000,
        xmax: 5,
        ymax: 2,
        rmax: 10,
        rt: 1,
        xdef: 960,
        ydef: 540,
        xdrift: 4,
        ydrift: 4,
        random: true,
        blink: true
      };
      // Other methods...
    }
    reset() {
      this.x = (this.s.random ? this.width * Math.random() : this.s.xdef);
      this.y = (this.s.random ? this.height * Math.random() : this.s.ydef);
      this.r = ((this.s.rmax - 1) * Math.random()) + 1;
      this.dx = (Math.random() * this.s.xmax) * (Math.random() < 0.5 ? -1 : 1);
      this.dy = (Math.random() * this.s.ymax) * (Math.random() < 0.5 ? -1 : 1);
      this.hl = (this.s.ttl / rint) * (this.r / this.s.rmax);
      this.rt = Math.random() * this.hl;
      this.s.rt = Math.random() + 1;
      this.stop = Math.random() * 0.2 + 0.4;
      this.s.xdrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
      this.s.ydrift *= Math.random() * (Math.random() < 0.5 ? -1 : 1);
    };
  
    fade() {
      this.rt += this.s.rt;
    };
  
    draw(context) {
      if (this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) {
        this.s.rt = this.s.rt * -1;
      } else if (this.rt >= this.hl) {
        this.reset();
      }
      let newo = 1 - (this.rt / this.hl);
      context.beginPath();
      context.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
      context.closePath();
      let cr = this.r * newo;
      let gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
      gradient.addColorStop(0.0, 'rgba(255, 255, 224,' + newo + ')');
      gradient.addColorStop(this.stop, 'rgba(255, 255, 224,' + (newo * 0.2) + ')');
      gradient.addColorStop(1.0, 'rgba(255, 255, 224,0)');
      context.fillStyle = gradient;
      context.fill();
    };
  
    move() {
      this.x += (this.rt / this.hl) * this.dx;
      this.y += (this.rt / this.hl) * this.dy;
      if (this.x > this.width || this.x < 0) {
        this.dx *= -1;
      }
      if (this.y > this.height || this.y < 0) {
        this.dy *= -1;
      }
    };
  
    getX() { return this.x; };
    getY() { return this.y; };
    // Methods (reset, fade, draw, move)...
  }
  return <canvas ref={canvasRef} style={{
    width: "100%", height: "100%", zIndex: 2, position: "absolute",
    top: 0
  }} />;
};




export default StarAnimation;
