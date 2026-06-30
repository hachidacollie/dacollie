const isTouch = matchMedia('(hover: none)').matches;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fx = document.getElementById('fx');

// ---------- boot splash cleanup ----------
const boot = document.getElementById('boot');
if (reducedMotion) {
    boot.remove();
} else {
    setTimeout(() => boot.remove(), 1700);
}

// ---------- taskbar clock ----------
const clock = document.getElementById('clock');
function tick() {
    const d = new Date();
    const h = String(d.getHours()).padStart(2, '0');
    const m = String(d.getMinutes()).padStart(2, '0');
    clock.textContent = `${h}:${m}`;
}
tick();
setInterval(tick, 1000 * 15);

// ---------- pixel sparkle helper ----------
const glyphs = ['★', '✦', '✧', '+', '·'];
function sparkle(x, y, n = 1, spread = 18) {
    if (reducedMotion) return;
    for (let i = 0; i < n; i++) {
        const s = document.createElement('div');
        s.className = 'sparkle';
        s.textContent = glyphs[(Math.random() * glyphs.length) | 0];
        s.style.left = x + 'px';
        s.style.top = y + 'px';
        s.style.setProperty('--s', (9 + Math.random() * 8) + 'px');
        s.style.setProperty('--dx', (Math.random() * 2 - 1) * spread + 'px');
        s.style.setProperty('--dy', (-18 - Math.random() * spread) + 'px');
        fx.appendChild(s);
        setTimeout(() => s.remove(), 800);
    }
}

// ---------- photo: balloon bark ----------
const photo = document.getElementById('me');
const balloon = document.getElementById('balloon');
const barks = ['woof!', 'awoo~', 'hi!!', 'sawatdee!', 'bork!', '*wag wag*', 'arf!', 'hewwo'];
let barkIdx = 0;
let balloonTimer;

photo.addEventListener('click', () => {
    balloon.hidden = false;
    balloon.textContent = barks[barkIdx++ % barks.length];
    balloon.classList.remove('show');
    void balloon.offsetWidth;
    balloon.classList.add('show');
    clearTimeout(balloonTimer);
    balloonTimer = setTimeout(() => { balloon.hidden = true; }, 1900);

    const r = photo.getBoundingClientRect();
    sparkle(r.left + r.width / 2, r.top + r.height / 2, 6, 26);
});

// ---------- social shortcuts: press + open ----------
document.querySelectorAll('.shortcut').forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.remove('pop');
        void btn.offsetWidth;
        btn.classList.add('pop');

        const r = btn.getBoundingClientRect();
        sparkle(r.left + r.width / 2, r.top + r.height / 2 - 8, 8, 30);

        const url = btn.dataset.url;
        setTimeout(() => window.open(url, '_blank', 'noopener'), 240);
    });
});

// ---------- window controls (the gel buttons actually do things) ----------
const win = document.getElementById('win');

document.querySelectorAll('.gel').forEach((g) => {
    g.addEventListener('click', (e) => {
        e.stopPropagation();
        const act = g.dataset.act;
        if (act === 'min') {
            win.classList.toggle('collapsed');
        } else if (act === 'zoom') {
            win.classList.remove('zoom');
            void win.offsetWidth;
            win.classList.add('zoom');
        } else if (act === 'close') {
            win.classList.remove('shake');
            void win.offsetWidth;
            win.classList.add('shake');
            balloon.hidden = false;
            balloon.textContent = "can't close me :3";
            balloon.classList.remove('show');
            void balloon.offsetWidth;
            balloon.classList.add('show');
            clearTimeout(balloonTimer);
            balloonTimer = setTimeout(() => { balloon.hidden = true; }, 1600);
        }
    });
});

// ---------- draggable window (by title bar) ----------
const winbar = document.getElementById('winbar');
let drag = null;
let tx = 0, ty = 0;

winbar.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.gel')) return;
    drag = { sx: e.clientX, sy: e.clientY, ox: tx, oy: ty };
    win.classList.add('dragging');
    winbar.setPointerCapture(e.pointerId);
});
winbar.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const maxX = 70, maxY = 90;
    tx = Math.max(-maxX, Math.min(maxX, drag.ox + (e.clientX - drag.sx)));
    ty = Math.max(-maxY, Math.min(maxY, drag.oy + (e.clientY - drag.sy)));
    win.style.setProperty('--tx', tx + 'px');
    win.style.setProperty('--ty', ty + 'px');
});
function endDrag(e) {
    if (!drag) return;
    drag = null;
    try { winbar.releasePointerCapture(e.pointerId); } catch (_) {}
}
winbar.addEventListener('pointerup', endDrag);
winbar.addEventListener('pointercancel', endDrag);

// ---------- start button flourish ----------
const start = document.getElementById('start');
start.addEventListener('click', () => {
    start.classList.remove('spin');
    void start.offsetWidth;
    start.classList.add('spin');
    const r = start.getBoundingClientRect();
    sparkle(r.left + r.width / 2, r.top, 5, 24);
});

// ---------- sparkle cursor trail (desktop only) ----------
if (!isTouch && !reducedMotion) {
    let last = 0;
    document.addEventListener('pointermove', (e) => {
        const now = performance.now();
        if (now - last < 80) return;
        last = now;
        sparkle(e.clientX, e.clientY, 1, 10);
    });
}

// ---------- easter eggs: type "woof" or shake the phone ----------
let buf = '';
document.addEventListener('keydown', (e) => {
    buf = (buf + e.key.toLowerCase()).slice(-4);
    if (buf === 'woof') burst();
});

if (window.DeviceMotionEvent && isTouch) {
    let lastShake = 0, lx = 0, ly = 0, lz = 0;
    window.addEventListener('devicemotion', (e) => {
        const a = e.accelerationIncludingGravity;
        if (!a) return;
        const delta = Math.abs((a.x || 0) - lx) + Math.abs((a.y || 0) - ly) + Math.abs((a.z || 0) - lz);
        if (delta > 30 && performance.now() - lastShake > 1500) {
            lastShake = performance.now();
            burst();
        }
        lx = a.x || 0; ly = a.y || 0; lz = a.z || 0;
    });
}

function burst() {
    if (reducedMotion) return;
    const icons = ['★', '✦', '💿', '🐾', '✨'];
    for (let i = 0; i < 36; i++) {
        const c = document.createElement('div');
        c.textContent = icons[(Math.random() * icons.length) | 0];
        c.style.cssText = `position:fixed;left:${Math.random() * innerWidth}px;top:-24px;font-size:${16 + Math.random() * 12}px;pointer-events:none;z-index:70;`;
        c.animate(
            [
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${innerHeight + 80}px) rotate(${Math.random() * 540 - 270}deg)`, opacity: 0 },
            ],
            { duration: 1600 + Math.random() * 900, easing: 'cubic-bezier(0.4, 0, 1, 1)' }
        );
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 2600);
    }
}

// ---------- spawn twinkling pixel stars ----------
if (!reducedMotion) {
    const stars = document.getElementById('stars');
    const frag = document.createDocumentFragment();
    const n = isTouch ? 16 : 26;
    for (let i = 0; i < n; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        s.textContent = Math.random() < 0.5 ? '★' : '+';
        s.style.left = Math.random() * 100 + 'vw';
        s.style.top = Math.random() * 100 + 'vh';
        s.style.setProperty('--sz', (7 + Math.random() * 8) + 'px');
        s.style.setProperty('--dur', (3 + Math.random() * 4) + 's');
        s.style.setProperty('--delay', (Math.random() * 4) + 's');
        frag.appendChild(s);
    }
    stars.appendChild(frag);
}
