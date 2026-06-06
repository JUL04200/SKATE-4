// ===== BACKGROUND PARTICLE CANVAS =====
(function() {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let W, H, particles = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.8 ? "#e63946" : Math.random() > 0.5 ? "#f72585" : "#ffffff"
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: 120 }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  init();
  draw();
})();

// ===== NAVBAR SCROLL =====
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = "1";
      e.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".glitch-card, .bug-card, .gloss-item").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(el);
});

// ===== BAR FILL ANIMATION =====
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const fill = e.target.querySelector(".bar-fill");
      if (fill) {
        const target = fill.style.width;
        fill.style.width = "0";
        setTimeout(() => { fill.style.width = target; }, 100);
      }
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".difficulty-bar").forEach(el => barObserver.observe(el));

// ===== SMOOTH ANCHOR SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ===== GLITCH TEXT EFFECT ON TITLE =====
const title = document.querySelector(".hero-title");
if (title) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let glitching = false;

  function glitchText(el, original, duration) {
    if (glitching) return;
    glitching = true;
    let start = null;
    const originalText = original;

    function step(ts) {
      if (!start) start = ts;
      const progress = (ts - start) / duration;
      if (progress < 1) {
        el.innerHTML = originalText.split("").map((c, i) => {
          if (c === "<" || c.trim() === "" || c === "/" || c === ">" || originalText.slice(0, i).includes("<")) return c;
          return Math.random() > progress ? chars[Math.floor(Math.random() * chars.length)] : c;
        }).join("");
        requestAnimationFrame(step);
      } else {
        el.innerHTML = originalText;
        glitching = false;
      }
    }
    requestAnimationFrame(step);
  }

  const originalHTML = title.innerHTML;
  setInterval(() => glitchText(title, originalHTML, 600), 6000);
}
