// ============================================================
// FoodPack J.L. — animaciones (heading animado, fade-ins, scroll reveals)
// ============================================================

var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- Animated heading (char-by-char, con las mismas palabras destacadas del original) ----
var headingEl = document.getElementById('hero-heading');
var lines = [
  [ {t:'Sabor sin '}, {t:'huella', c:'#C0DD97'}, {t:'.'} ],
  [ {t:'Empaque sin '}, {t:'culpa', c:'#97C459'}, {t:'.'} ]
];
var charDelay = 30;
var initialDelay = 200;
var line0Length = lines[0].reduce(function(n, s){ return n + s.t.length; }, 0);
var spans = [];

lines.forEach(function(segments, lineIndex) {
  var lineDiv = document.createElement('div');
  var charIndex = 0;
  segments.forEach(function(seg) {
    for (var i = 0; i < seg.t.length; i++) {
      var ch = seg.t[i];
      var span = document.createElement('span');
      span.className = 'char-span';
      span.textContent = ch === ' ' ? '\u00A0' : ch;
      if (seg.c) span.style.color = seg.c;
      var delay = (lineIndex * line0Length * charDelay) + (charIndex * charDelay);
      span.dataset.delay = delay;
      lineDiv.appendChild(span);
      spans.push(span);
      charIndex++;
    }
  });
  headingEl.appendChild(lineDiv);
});

function revealHeading() {
  spans.forEach(function(span) {
    if (prefersReduced) { span.classList.add('visible'); return; }
    var delay = parseInt(span.dataset.delay, 10);
    setTimeout(function(){ span.classList.add('visible'); }, delay);
  });
}
setTimeout(revealHeading, prefersReduced ? 0 : initialDelay);

// ---- Hero fade-ins ----
function fadeInAt(id, delay) {
  var el = document.getElementById(id);
  if (!el) return;
  if (prefersReduced) { el.classList.add('visible'); return; }
  setTimeout(function(){ el.classList.add('visible'); }, delay);
}
fadeInAt('hero-badge', 400);
fadeInAt('hero-sub', 800);
fadeInAt('hero-buttons', 1200);
fadeInAt('hero-tag', 1400);

// ---- Scroll-triggered reveals ----
var revealEls = document.querySelectorAll('.reveal');
if (prefersReduced) {
  revealEls.forEach(function(el){ el.classList.add('visible'); });
} else if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function(el){ io.observe(el); });
} else {
  revealEls.forEach(function(el){ el.classList.add('visible'); });
}
