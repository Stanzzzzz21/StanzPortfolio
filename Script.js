const c = document.getElementById('bg');
const ctx = c.getContext('2d');
let w, h, particles = [];

function resize() {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function createParticles(count = 60) {
    particles = [];
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 2 + 0.5,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4
        });
    }
}
createParticles();

function loop() {
    ctx.fillStyle = '#121820';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
    }

    requestAnimationFrame(loop);
}
loop();

