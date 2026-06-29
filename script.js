// ---------- 3D tilt on the card ----------
const card = document.getElementById('box');
const tiltMax = 8;

document.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = (e.clientX - cx) / (window.innerWidth / 2);
    const dy = (e.clientY - cy) / (window.innerHeight / 2);
    card.style.transform = `perspective(900px) rotateY(${dx * tiltMax}deg) rotateX(${-dy * tiltMax}deg)`;
});
document.addEventListener('mouseleave', () => {
    card.style.transform = '';
});

// ---------- pfp click: bark + hearts + bubble line ----------
const pfp = document.getElementById('me');
const bubble = document.getElementById('bubble');
const reactions = [
    'awoo!', 'woof~', 'hi!!', 'sawatdee~', 'bork!', 'wag wag', 'collie life', '*tail wag*',
];
let reactIdx = 0;

pfp.addEventListener('click', (e) => {
    pfp.classList.remove('bark');
    void pfp.offsetWidth;
    pfp.classList.add('bark');

    bubble.textContent = reactions[reactIdx++ % reactions.length];

    const r = pfp.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    for (let i = 0; i < 6; i++) {
        const h = document.createElement('div');
        h.className = 'heart';
        h.textContent = ['❤', '💛', '💙', '💜', '🐾'][Math.floor(Math.random() * 5)];
        h.style.left = cx + 'px';
        h.style.top = cy + 'px';
        h.style.setProperty('--dx', (Math.random() * 120 - 60) + 'px');
        h.style.setProperty('--dy', (-60 - Math.random() * 80) + 'px');
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 1000);
    }
});

// ---------- social buttons: pop + paw stamp + open ----------
document.querySelectorAll('.contactleft').forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.remove('pop');
        void btn.offsetWidth;
        btn.classList.add('pop');

        const r = btn.getBoundingClientRect();
        stampPaw(r.left + r.width / 2, r.top + r.height / 2);

        const url = btn.dataset.url;
        setTimeout(() => window.open(url, '_blank', 'noopener'), 250);
    });
});

// ---------- paw cursor trail ----------
const pawLayer = document.getElementById('paw-layer');
let lastPaw = 0;
let pawSide = 1;

document.addEventListener('mousemove', (e) => {
    const now = performance.now();
    if (now - lastPaw < 90) return;
    lastPaw = now;
    pawSide *= -1;
    const offset = pawSide * 6;
    stampPaw(e.clientX + offset, e.clientY + offset, (Math.random() * 30 - 15));
});

function stampPaw(x, y, rotate = Math.random() * 60 - 30) {
    const p = document.createElement('div');
    p.className = 'paw';
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.setProperty('--r', rotate + 'deg');
    pawLayer.appendChild(p);
    setTimeout(() => p.remove(), 1000);
}

// ---------- sakura background ----------
const canvas = document.getElementById('sakura');
const ctx = canvas.getContext('2d');
let petals = [];
let W = 0, H = 0;

function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

function makePetal() {
    return {
        x: Math.random() * W,
        y: Math.random() * -H,
        size: 6 + Math.random() * 8,
        speed: 0.5 + Math.random() * 1.2,
        sway: Math.random() * 2 * Math.PI,
        swaySpeed: 0.01 + Math.random() * 0.02,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.04,
        color: ['#FFD1DC', '#FFB6C1', '#FFC0CB', '#FFE4E1'][Math.floor(Math.random() * 4)],
    };
}
for (let i = 0; i < 35; i++) petals.push(makePetal());

function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size * 0.55, p.size, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function tick() {
    ctx.clearRect(0, 0, W, H);
    for (const p of petals) {
        p.y += p.speed;
        p.sway += p.swaySpeed;
        p.x += Math.sin(p.sway) * 0.8;
        p.rot += p.rotSpeed;
        if (p.y > H + 20) {
            p.y = -20;
            p.x = Math.random() * W;
        }
        drawPetal(p);
    }
    requestAnimationFrame(tick);
}
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    tick();
}

// ---------- konami-ish: type "woof" for confetti ----------
let buf = '';
document.addEventListener('keydown', (e) => {
    buf = (buf + e.key.toLowerCase()).slice(-4);
    if (buf === 'woof') confetti();
});

function confetti() {
    const emojis = ['🐾', '🐶', '❤', '✨', '🌸', '🦴'];
    for (let i = 0; i < 60; i++) {
        const c = document.createElement('div');
        c.className = 'heart';
        c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        c.style.left = (Math.random() * window.innerWidth) + 'px';
        c.style.top = '-20px';
        c.style.setProperty('--dx', (Math.random() * 200 - 100) + 'px');
        c.style.setProperty('--dy', (window.innerHeight + 100) + 'px');
        c.style.animationDuration = (1.5 + Math.random()) + 's';
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 2500);
    }
}
