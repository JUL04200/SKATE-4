// ===== PRELOADER =====
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
  }, 2000);
});

// ===== CANVAS GRID + PARTICLES =====
(function() {
  const canvas = document.getElementById("grid-canvas");
  const ctx = canvas.getContext("2d");
  let W, H, mouseX = 0, mouseY = 0;
  const GRID = 60;
  const particles = [];
  const PCOUNT = 80;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r = Math.random() * 1.2 + 0.3;
      this.alpha = Math.random() * 0.4 + 0.05;
      const roll = Math.random();
      this.color = roll > 0.85 ? "#e63946" : roll > 0.7 ? "#f72585" : roll > 0.55 ? "#00b4d8" : "#ffffff";
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      // Mouse repulsion
      const dx = this.x - mouseX, dy = this.y - mouseY;
      const dist = Math.sqrt(dx*dx+dy*dy);
      if (dist < 120) {
        const force = (120-dist)/120 * 0.8;
        this.vx += (dx/dist)*force;
        this.vy += (dy/dist)*force;
      }
      // Dampen
      this.vx *= 0.99; this.vy *= 0.99;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.fill();
    }
  }

  function init() {
    resize();
    for (let i = 0; i < PCOUNT; i++) particles.push(new Particle());
  }

  let t = 0;
  function drawGrid() {
    t += 0.002;
    // Animated perspective grid
    ctx.clearRect(0, 0, W, H);

    // Horizontal grid lines (perspective)
    const horizon = H * 0.45;
    ctx.strokeStyle = "rgba(230,57,70,0.04)";
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 20; i++) {
      const y = horizon + Math.pow(i/20, 1.8) * (H - horizon);
      ctx.beginPath();
      ctx.moveTo(0, y); ctx.lineTo(W, y);
      ctx.stroke();
    }
    // Vertical grid lines (converging to vanishing point)
    const vp = { x: W/2 + Math.sin(t*0.3)*W*0.05, y: horizon };
    for (let i = -10; i <= 10; i++) {
      const x = W/2 + i * (W/12);
      ctx.beginPath();
      ctx.moveTo(vp.x, vp.y);
      ctx.lineTo(x, H);
      ctx.strokeStyle = `rgba(230,57,70,${0.03 + Math.abs(Math.sin(t + i*0.3))*0.02})`;
      ctx.stroke();
    }

    // Top flat grid
    ctx.strokeStyle = "rgba(0,180,216,0.03)";
    ctx.lineWidth = 0.5;
    for (let x = 0; x < W; x += GRID) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, horizon); ctx.stroke();
    }
    for (let y = 0; y < horizon; y += GRID) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Mouse glow
    const grd = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200);
    grd.addColorStop(0, "rgba(230,57,70,0.04)");
    grd.addColorStop(1, "transparent");
    ctx.fillStyle = grd;
    ctx.globalAlpha = 1;
    ctx.fillRect(0, 0, W, H);

    // Particles
    particles.forEach(p => { p.update(); p.draw(); });
    ctx.globalAlpha = 1;
  }

  // Connections between close particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i+1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx*dx+dy*dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(230,57,70,${(1-d/100)*0.08})`;
          ctx.lineWidth = 0.5;
          ctx.globalAlpha = 1;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    drawGrid();
    drawConnections();
    requestAnimationFrame(loop);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", e => { mouseX = e.clientX; mouseY = e.clientY; });
  init();
  loop();
})();

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const dur = 1800;
  const start = performance.now();
  function step(now) {
    const p = Math.min((now-start)/dur, 1);
    const ease = 1 - Math.pow(1-p, 3);
    el.textContent = Math.floor(ease*target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll(".hc-num").forEach(el => counterObs.observe(el));

// ===== SCROLL REVEAL =====
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.08 });
document.querySelectorAll(".glitch-card, .bug-card, .gi, .section-header").forEach(el => {
  el.classList.add("reveal");
  revealObs.observe(el);
});

// ===== DIFFICULTY BAR ANIMATION =====
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const fill = e.target.querySelector(".dr-fill");
      if (fill) {
        const w = fill.style.getPropertyValue("--w");
        fill.style.setProperty("--w", "0%");
        setTimeout(() => fill.style.setProperty("--w", w), 100);
      }
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll(".diff-row").forEach(el => barObs.observe(el));

// ===== SMOOTH ANCHOR =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute("href"));
    if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ===== GLITCH CARDS 3D TILT =====
document.querySelectorAll(".glitch-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x*3}deg) rotateX(${-y*2}deg) translateZ(4px)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// ===== HERO TITLE GLITCH =====
const heroLines = document.querySelectorAll(".ht-line1, .ht-line2");
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
heroLines.forEach(el => {
  const original = el.textContent;
  setInterval(() => {
    let i = 0;
    const iv = setInterval(() => {
      el.textContent = original.split("").map((c, idx) =>
        idx < i ? c : chars[Math.floor(Math.random()*chars.length)]
      ).join("");
      i++;
      if (i > original.length) { el.textContent = original; clearInterval(iv); }
    }, 30);
  }, 5000 + Math.random()*3000);
});

// ===== SVG SPREAD EAGLE — animate on scroll =====
const svgObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      // Animate the trajectory
      const path = document.getElementById("traj-main");
      if (path) {
        path.style.animation = "none";
        void path.offsetWidth;
        path.style.animation = "";
      }
    }
  });
}, { threshold: 0.3 });
const svgEl = document.getElementById("svg-spread");
if (svgEl) svgObs.observe(svgEl);
