const isTouch = matchMedia('(hover: none)').matches;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- pfp click: bark + hearts + bubble line ----------
const pfp = document.getElementById('me');
const bubble = document.getElementById('bubble');
const reactions = [
    'awoo!', 'woof~', 'hi!!', 'sawatdee~', 'bork!', 'wag wag',
    'collie life', '*tail wag*', 'hewwo', 'arf!',
];
let reactIdx = 0;

pfp.addEventListener('click', () => {
    pfp.classList.remove('bark');
    void pfp.offsetWidth;
    pfp.classList.add('bark');

    bubble.textContent = reactions[reactIdx++ % reactions.length];

    const r = pfp.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const emojis = ['❤', '💛', '💙', '💜', '🐾', '✨'];
    for (let i = 0; i < 7; i++) {
        const h = document.createElement('div');
        h.className = 'heart';
        h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        h.style.left = cx + 'px';
        h.style.top = cy + 'px';
        h.style.setProperty('--dx', (Math.random() * 140 - 70) + 'px');
        h.style.setProperty('--dy', (-70 - Math.random() * 80) + 'px');
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 1000);
    }
});

// ---------- social buttons: pop + paw stamp + open ----------
document.querySelectorAll('.pill').forEach((btn) => {
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

// ---------- paw cursor trail (desktop only) ----------
const pawLayer = document.getElementById('paw-layer');
let lastPaw = 0;
let pawSide = 1;

if (!isTouch) {
    document.addEventListener('mousemove', (e) => {
        const now = performance.now();
        if (now - lastPaw < 90) return;
        lastPaw = now;
        pawSide *= -1;
        const offset = pawSide * 6;
        stampPaw(e.clientX + offset, e.clientY + offset, Math.random() * 30 - 15);
    });
}

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
let dpr = Math.min(window.devicePixelRatio || 1, 2);

function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resize();
window.addEventListener('resize', resize);

function makePetal() {
    return {
        x: Math.random() * W,
        y: Math.random() * -H,
        size: 5 + Math.random() * 7,
        speed: 0.4 + Math.random() * 1.0,
        sway: Math.random() * 2 * Math.PI,
        swaySpeed: 0.01 + Math.random() * 0.02,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.04,
        color: ['#FFD1DC', '#FFB6C1', '#FFC0CB', '#FFE4E1'][Math.floor(Math.random() * 4)],
    };
}

const petalCount = isTouch ? 22 : 35;
for (let i = 0; i < petalCount; i++) petals.push(makePetal());

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
        p.x += Math.sin(p.sway) * 0.7;
        p.rot += p.rotSpeed;
        if (p.y > H + 20) {
            p.y = -20;
            p.x = Math.random() * W;
        }
        drawPetal(p);
    }
    requestAnimationFrame(tick);
}
if (!reducedMotion) tick();

// ---------- "woof" easter egg: type for confetti, or shake on mobile ----------
let buf = '';
document.addEventListener('keydown', (e) => {
    buf = (buf + e.key.toLowerCase()).slice(-4);
    if (buf === 'woof') confetti();
});

// Mobile: shake the device to trigger confetti
if (window.DeviceMotionEvent && isTouch) {
    let lastShake = 0;
    let lastX = 0, lastY = 0, lastZ = 0;
    window.addEventListener('devicemotion', (e) => {
        const a = e.accelerationIncludingGravity;
        if (!a) return;
        const dx = Math.abs((a.x || 0) - lastX);
        const dy = Math.abs((a.y || 0) - lastY);
        const dz = Math.abs((a.z || 0) - lastZ);
        if (dx + dy + dz > 30) {
            const now = performance.now();
            if (now - lastShake > 1500) {
                lastShake = now;
                confetti();
            }
        }
        lastX = a.x || 0;
        lastY = a.y || 0;
        lastZ = a.z || 0;
    });
}

function confetti() {
    const emojis = ['🐾', '🐶', '❤', '✨', '🌸', '🦴'];
    for (let i = 0; i < 50; i++) {
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
