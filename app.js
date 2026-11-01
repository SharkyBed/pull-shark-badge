const fallbackSharks = [
  {
    username: "darkkustom459-collab",
    name: "Captain Shark",
    sharkType: "Great White Shark 🦈",
    quote: "Berenang di samudra pull request tanpa takut conflict!",
    avatar: "https://avatars.githubusercontent.com/u/260207327?v=4",
    badgeLevel: "Maintainer",
    links: {
      github: "https://github.com/darkkustom459-collab"
    }
  },
  {
    username: "contoh-hiu",
    name: "Baby Shark Hunter",
    sharkType: "Hammerhead Shark 🔨🦈",
    quote: "Satu PR menuju achievement Pull Shark pertama!",
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=sharkhunter",
    badgeLevel: "Bronze",
    links: {
      github: "https://github.com/SharkyBed"
    }
  }
];

let allSharks = [];

const gridEl = document.getElementById('sharks-grid');
const countEl = document.getElementById('sharks-count');
const searchInput = document.getElementById('search-input');

const modal = document.getElementById('guide-modal');
const guideBtn = document.getElementById('guide-btn');
const startBtn = document.getElementById('start-btn');
const closeBtn = document.getElementById('close-modal');
const okBtn = document.getElementById('ok-btn');

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function loadSharks() {
  try {
    const res = await fetch('data/sharks.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    allSharks = await res.json();
  } catch (err) {
    console.warn("Fallback to local sharks data:", err);
    allSharks = fallbackSharks;
  }

  if (countEl) countEl.textContent = allSharks.length;
  renderSharks();
}

function renderSharks() {
  const q = (searchInput?.value || '').trim().toLowerCase();

  const filtered = allSharks.filter(s => {
    return (
      (s.name && s.name.toLowerCase().includes(q)) ||
      (s.username && s.username.toLowerCase().includes(q)) ||
      (s.sharkType && s.sharkType.toLowerCase().includes(q)) ||
      (s.quote && s.quote.toLowerCase().includes(q))
    );
  });

  gridEl.innerHTML = '';

  if (filtered.length === 0) {
    gridEl.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 2rem;">
      🔍 Tidak ada hiu pemburu yang cocok dengan pencarian.
    </div>`;
    return;
  }

  filtered.forEach(s => {
    const card = document.createElement('div');
    card.className = 'shark-card';

    const avatar = s.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(s.username || 'shark')}`;
    const ghLink = s.links?.github || `https://github.com/${encodeURIComponent(s.username || '')}`;

    card.innerHTML = `
      <div class="shark-card-head">
        <img class="shark-avatar" src="${escapeHTML(avatar)}" alt="${escapeHTML(s.name)}" onerror="this.src='https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(s.username || 'shark')}'" />
        <div class="shark-title">
          <h4>${escapeHTML(s.name || s.username)}</h4>
          <span class="shark-user">@${escapeHTML(s.username)}</span>
        </div>
      </div>
      <span class="shark-type-pill">${escapeHTML(s.sharkType || 'Baby Shark 🦈')}</span>
      <p class="shark-quote">"${escapeHTML(s.quote || 'Ready for Pull Shark badge!')}"</p>
      <div class="shark-card-foot">
        <span class="shark-badge-tag">🏅 ${escapeHTML(s.badgeLevel || 'Hunter')}</span>
        <a class="shark-gh-btn" href="${escapeHTML(ghLink)}" target="_blank" rel="noopener noreferrer">Profil GitHub ↗</a>
      </div>
    `;

    gridEl.appendChild(card);
  });
}

searchInput?.addEventListener('input', renderSharks);

function openModal(e) {
  if (e) e.preventDefault();
  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
}

guideBtn?.addEventListener('click', openModal);
startBtn?.addEventListener('click', openModal);
closeBtn?.addEventListener('click', closeModal);
okBtn?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

document.addEventListener('DOMContentLoaded', loadSharks);
