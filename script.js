/* ============================================================
   Happy Girlfriend Day — script.js
   ============================================================
   ⭐️  EDIT EVERYTHING IN THE CONFIG BLOCK BELOW  ⭐️
   Names, dates, letter, photos, timeline, reasons, promises,
   secret notes, memory-book pages and the final message are all
   here. You don't need to touch anything under the config block.
   ============================================================ */

const CONFIG = {

  /* --- names (used in headings, letter & ending) --- */
  herName: "My Love",          // 👈 her name
  yourName: "Me",              // 👈 your name

  /* --- relationship start date (powers the live counter) --- */
  // Format: YYYY, MM(0-11!), DD, HH, MM.  January = 0, December = 11.
  startDate: new Date(2026, 0, 14, 12, 0),   // 👈 CHANGE THIS

  /* --- background music --- */
  // Drop an .mp3 in assets/music/ and put its path here.
  musicSrc: "assets/music/song.mp3",
  musicVolume: 0.6,
  videoSrc: "assets/videos/memory.mp4",

  /* --- love letter (types out on screen) --- */
  letter: `From the very first day, you turned ordinary moments into memories I never want to forget.

Thank you for your patience, your laughter, and the way you make even the quiet days feel like something special. You see me, you cheer for me, and you make me want to be better.

Whatever the future holds — new cities, new adventures, lazy mornings and everything in between — I want all of it, as long as it's with you.

You are my favorite hello and my hardest goodbye.`,

  /* --- gallery photos ---
     Replace src with your own images in assets/images/.
     Add as many as you like — layout adapts automatically. */
  gallery: [
    { src: "assets/images/photo1.jpg", cap: "us ♥" },
    { src: "assets/images/photo2.jpg", cap: "playtime" },
    { src: "assets/images/ph1.jpg", cap: "memory" },
    { src: "assets/images/ph2.jpg", cap: "adventures" },
    { src: "assets/images/ph3.jpg", cap: "date night" },
    { src: "assets/images/ph4.jpg", cap: "silly us" },
    { src: "assets/images/ph5.jpg", cap: "golden hour" },
    { src: "assets/images/ph6.jpg", cap: "forever" },
    { src: "assets/images/ph7.jpg", cap: "sunsets" },
    { src: "assets/images/ph8.jpg", cap: "little trips" },
    { src: "assets/images/photo1.jpg", cap: "my person" },
    { src: "assets/images/photo2.jpg", cap: "good times" },
    { src: "assets/images/ph1.jpg", cap: "cozy days" },
    { src: "assets/images/ph2.jpg", cap: "us again" },
    { src: "assets/images/ph3.jpg", cap: "laughing" },
    { src: "assets/images/ph4.jpg", cap: "dreaming" },
    { src: "assets/images/ph5.jpg", cap: "you & me" },
    { src: "assets/images/ph6.jpg", cap: "always" },
    { src: "assets/images/ph7.jpg", cap: "smile" },
    { src: "assets/images/ph8.jpg", cap: "home" },
  ],

  /* --- journey timeline --- */
  timeline: [
    { emoji: "❤️", title: "We Met",            desc: "The day everything quietly changed." },
    { emoji: "💕", title: "First Date",        desc: "Nervous smiles and endless talking." },
    { emoji: "🌸", title: "First Gift",         desc: "Small thing, huge meaning." },
    { emoji: "🎂", title: "Birthdays Together", desc: "Cake, candles, and you." },
    { emoji: "✈️", title: "Trips Together",     desc: "New places, same favorite person." },
    { emoji: "💍", title: "Future Together",    desc: "The best chapters are still ahead." },
  ],

  /* --- reasons I love you (front → back on flip) --- */
  reasons: [
    ["Your smile", "It lights up my whole day."],
    ["Your kindness", "You care so effortlessly."],
    ["Your laugh", "My favorite sound in the world."],
    ["Your support", "You believe in me always."],
    ["Your hugs", "Home isn't a place, it's you."],
    ["Your eyes", "I get lost in them every time."],
    ["Your mind", "You're so wonderfully clever."],
    ["Your heart", "The kindest one I know."],
    ["Your patience", "You never give up on me."],
    ["Your voice", "It calms every storm."],
    ["Your quirks", "Every little one is perfect."],
    ["Your strength", "You inspire me daily."],
    ["Your honesty", "I always know where I stand."],
    ["Your cooking", "Okay, and the snacks too. 😋"],
    ["Your texts", "They make boring days better."],
    ["Your dreams", "I want to chase them with you."],
    ["Your warmth", "You make everyone feel safe."],
    ["Your humor", "You get my weird jokes."],
    ["Your loyalty", "Ride or die, always."],
    ["Everything", "Every single thing about you."],
  ],

  /* --- promise cards (front emoji → promise on flip) --- */
  promises: [
    { emoji: "🤝", text: "I'll always support you." },
    { emoji: "😊", text: "I'll always make you smile." },
    { emoji: "💝", text: "I'll always choose you." },
    { emoji: "♾️", text: "I'll never stop loving you." },
    { emoji: "👂", text: "I'll always listen to you." },
    { emoji: "🌧️", text: "I'll stay through every storm." },
  ],

  /* --- hidden secret notes (envelopes scattered on the page) --- */
  secrets: [
    "You found one! 💌 Just a reminder that I love you.",
    "Psst… you're the best thing that's ever happened to me.",
    "If you're reading this, smile — I'm thinking of you right now. 😘",
    "Secret note: you look beautiful today. And every day.",
    "I'd choose you in every lifetime. 💕",
  ],

  /* --- memory book pages --- */
  book: [
    { title: "Chapter One", text: "Where our story began…", img: "assets/images/998BCA48-13F2-425C-97EE-7D8A55DF962D_1_105_c.jpeg" },
    { title: "The Little Things", text: "Inside jokes, late-night talks, and everything between.", img: "assets/images/DA9312FC-14F5-4743-8998-FE5AE14D63EC_1_105_c.jpeg" },
    { title: "Our Adventures", text: "Every place is better with you in it.", img: "assets/images/photo1.jpg" },
    { title: "To Be Continued…", text: "The best pages haven't been written yet.", img: "assets/images/44742D88-1ADA-4A78-A614-E6A4B842C1CB_1_105_c.jpeg" },
  ],

  /* --- gift box reveal & ending --- */
  reveal: {
    line1: "I Love You ❤️",
    line2: "Happy Girlfriend Day",
    line3: "You are my favorite person in the entire universe.",
  },
};

/* ============================================================
   From here down: the engine. No need to edit.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const savedContent = loadAdminContent();
  if (savedContent) {
    applyAdminContent(savedContent);
  }
  applyNames();
  buildGallery();
  buildTimeline();
  buildReasons();
  buildPromises();
  buildBook();
  buildSecrets();
  initLoader();
  initHeroButton();
  initMusic();
  initScrollProgress();
  initPetals();
  initHeartCanvas();
  initLightbox();
  initGift();
  initEnding();
  startCounter();
  initAOS();
  initScrollAnims();
  initAdmin();
});

/* ---------- names ---------- */
function applyNames() {
  const her = CONFIG.herName, you = CONFIG.yourName;
  const heroTitleText = document.getElementById("heroTitleText");
  if (heroTitleText) heroTitleText.textContent = "Happy Girlfriend Day";
  const greet = document.getElementById("letterGreeting");
  if (greet) greet.textContent = `Dear ${her},`;
  const sign = document.getElementById("letterSign");
  if (sign) sign.textContent = `— Yours, ${you}`;
  document.title = `Happy Girlfriend Day, ${her} ❤️`;
}

/* ---------- admin editor ---------- */
const ADMIN_PASSWORD = "gfday2026";
let adminUnlocked = false;

function getDefaultAdminContent() {
  return {
    herName: CONFIG.herName,
    yourName: CONFIG.yourName,
    gallery: CONFIG.gallery.map((item) => ({ ...item })),
    musicSrc: CONFIG.musicSrc,
    musicVolume: CONFIG.musicVolume,
    videoSrc: CONFIG.videoSrc,
    startDate: toDateInputValue(CONFIG.startDate),
    heroTitle: "Happy Girlfriend Day",
    heroKicker: "for the one I adore",
    heroSub: "I made something special just for you.",
    letterGreeting: `Dear ${CONFIG.herName},`,
    letterBody: CONFIG.letter,
    letterSign: `— Yours, ${CONFIG.yourName}`,
    reveal1: "I Love You ❤️",
    reveal2: "Happy Girlfriend Day",
    reveal3: "You are my favorite person in the entire universe.",
  };
}
function toDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function loadAdminContent() {
  try {
    const raw = localStorage.getItem("gf-day-admin-content");
    if (!raw) return getDefaultAdminContent();
    const parsed = JSON.parse(raw);
    return { ...getDefaultAdminContent(), ...parsed };
  } catch {
    return getDefaultAdminContent();
  }
}
function renderGalleryPreview(content = loadAdminContent()) {
  const preview = document.getElementById("adminGalleryPreview");
  if (!preview) return;
  const items = (content && content.gallery && content.gallery.length) ? content.gallery : CONFIG.gallery;
  preview.innerHTML = "";
  items.slice(0, 8).forEach((item) => {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.cap || "gallery";
    preview.appendChild(img);
  });
}
function populateAdminForm(content = loadAdminContent()) {
  document.getElementById("adminHerName").value = content.herName || "";
  document.getElementById("adminYourName").value = content.yourName || "";
  document.getElementById("adminStartDate").value = content.startDate || toDateInputValue(CONFIG.startDate);
  document.getElementById("adminHeroTitle").value = content.heroTitle || "Happy Girlfriend Day";
  document.getElementById("adminHeroKicker").value = content.heroKicker || "for the one I adore";
  document.getElementById("adminHeroSub").value = content.heroSub || "I made something special just for you.";
  document.getElementById("adminLetterGreeting").value = content.letterGreeting || `Dear ${CONFIG.herName},`;
  document.getElementById("adminLetterBody").value = content.letterBody || CONFIG.letter;
  document.getElementById("adminLetterSign").value = content.letterSign || `— Yours, ${CONFIG.yourName}`;
  document.getElementById("adminReveal1").value = content.reveal1 || "I Love You ❤️";
  document.getElementById("adminReveal2").value = content.reveal2 || "Happy Girlfriend Day";
  document.getElementById("adminReveal3").value = content.reveal3 || "You are my favorite person in the entire universe.";
}
function applyAdminContent(content = loadAdminContent()) {
  const data = { ...getDefaultAdminContent(), ...content };
  CONFIG.herName = data.herName || CONFIG.herName;
  CONFIG.yourName = data.yourName || CONFIG.yourName;
  const parsedDate = new Date(data.startDate || toDateInputValue(CONFIG.startDate));
  if (!Number.isNaN(parsedDate.getTime())) CONFIG.startDate = parsedDate;
  CONFIG.letter = data.letterBody || CONFIG.letter;
  if (data.gallery) CONFIG.gallery = data.gallery;
  if (data.musicSrc) CONFIG.musicSrc = data.musicSrc;
  if (typeof data.musicVolume === "number") CONFIG.musicVolume = data.musicVolume;
  if (data.videoSrc) CONFIG.videoSrc = data.videoSrc;

  const heroTitleText = document.getElementById("heroTitleText");
  if (heroTitleText) heroTitleText.textContent = data.heroTitle || "Happy Girlfriend Day";
  const heroKicker = document.querySelector(".hero-kicker");
  if (heroKicker) heroKicker.textContent = data.heroKicker || "for the one I adore";
  const heroSub = document.querySelector(".hero-sub");
  if (heroSub) heroSub.textContent = data.heroSub || "I made something special just for you.";
  const greet = document.getElementById("letterGreeting");
  if (greet) greet.textContent = data.letterGreeting || `Dear ${CONFIG.herName},`;
  const sign = document.getElementById("letterSign");
  if (sign) sign.textContent = data.letterSign || `— Yours, ${CONFIG.yourName}`;
  const reveal1 = document.getElementById("revealLine1");
  if (reveal1) reveal1.textContent = data.reveal1 || "I Love You ❤️";
  const reveal2 = document.getElementById("revealLine2");
  if (reveal2) reveal2.textContent = data.reveal2 || "Happy Girlfriend Day";
  const reveal3 = document.getElementById("revealLine3");
  if (reveal3) reveal3.textContent = data.reveal3 || "You are my favorite person in the entire universe.";

  document.title = `Happy Girlfriend Day, ${CONFIG.herName} ❤️`;
  const since = document.getElementById("counterSince");
  if (since) {
    since.textContent = "since " + CONFIG.startDate.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  }

  const typed = document.getElementById("typed");
  if (typed) {
    typed.innerHTML = CONFIG.letter.replace(/\n/g, "<br>");
    letterTyped = true;
    const cursor = document.querySelector(".cursor");
    if (cursor) cursor.style.display = "none";
  }

  const audio = document.getElementById("audio");
  if (audio) {
    audio.src = CONFIG.musicSrc;
    audio.volume = CONFIG.musicVolume;
  }

  const video = document.getElementById("memoryVideo");
  if (video) {
    const source = video.querySelector("source");
    if (source) source.src = CONFIG.videoSrc;
    video.load();
  }
}
async function saveAdminContent() {
  const musicInput = document.getElementById("adminMusicUpload");
  const videoInput = document.getElementById("adminVideoUpload");
  const galleryInput = document.getElementById("adminGalleryFiles");
  const galleryCaptions = document.getElementById("adminGalleryCaptions").value.split(/\n/).map((p) => p.trim()).filter(Boolean);

  const readFileAsDataUrl = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

  let musicSrc = CONFIG.musicSrc;
  if (musicInput && musicInput.files && musicInput.files[0]) {
    musicSrc = await readFileAsDataUrl(musicInput.files[0]);
  }

  let videoSrc = CONFIG.videoSrc;
  if (videoInput && videoInput.files && videoInput.files[0]) {
    videoSrc = await readFileAsDataUrl(videoInput.files[0]);
  }

  let gallery = CONFIG.gallery.map((item) => ({ ...item }));
  if (galleryInput && galleryInput.files && galleryInput.files.length) {
    const uploaded = [];
    for (let i = 0; i < galleryInput.files.length; i++) {
      const file = galleryInput.files[i];
      const src = await readFileAsDataUrl(file);
      uploaded.push({ src, cap: galleryCaptions[i] || file.name || `Photo ${i + 1}` });
    }
    gallery = uploaded;
  }

  const content = {
    herName: document.getElementById("adminHerName").value.trim() || CONFIG.herName,
    yourName: document.getElementById("adminYourName").value.trim() || CONFIG.yourName,
    startDate: document.getElementById("adminStartDate").value || toDateInputValue(CONFIG.startDate),
    heroTitle: document.getElementById("adminHeroTitle").value.trim() || "Happy Girlfriend Day",
    heroKicker: document.getElementById("adminHeroKicker").value.trim() || "for the one I adore",
    heroSub: document.getElementById("adminHeroSub").value.trim() || "I made something special just for you.",
    letterGreeting: document.getElementById("adminLetterGreeting").value.trim() || `Dear ${CONFIG.herName},`,
    letterBody: document.getElementById("adminLetterBody").value,
    letterSign: document.getElementById("adminLetterSign").value.trim() || `— Yours, ${CONFIG.yourName}`,
    reveal1: document.getElementById("adminReveal1").value.trim() || "I Love You ❤️",
    reveal2: document.getElementById("adminReveal2").value.trim() || "Happy Girlfriend Day",
    reveal3: document.getElementById("adminReveal3").value.trim() || "You are my favorite person in the entire universe.",
    gallery,
    musicSrc,
    musicVolume: CONFIG.musicVolume,
    videoSrc,
  };
  localStorage.setItem("gf-day-admin-content", JSON.stringify(content));
  renderGalleryPreview(content);
  applyAdminContent(content);
}
function resetAdminContent() {
  localStorage.removeItem("gf-day-admin-content");
  const defaults = getDefaultAdminContent();
  populateAdminForm(defaults);
  applyAdminContent(defaults);
}
function initAdmin() {
  const formReady = document.getElementById("adminHerName") &&
    document.getElementById("adminYourName") &&
    document.getElementById("adminStartDate") &&
    document.getElementById("adminHeroTitle") &&
    document.getElementById("adminHeroKicker") &&
    document.getElementById("adminHeroSub") &&
    document.getElementById("adminLetterGreeting") &&
    document.getElementById("adminLetterBody") &&
    document.getElementById("adminLetterSign") &&
    document.getElementById("adminReveal1") &&
    document.getElementById("adminReveal2") &&
    document.getElementById("adminReveal3") &&
    document.getElementById("adminSave") &&
    document.getElementById("adminReset");

  if (!formReady) return;

  const saveBtn = document.getElementById("adminSave");
  const resetBtn = document.getElementById("adminReset");
  const content = loadAdminContent();
  populateAdminForm(content);
  renderGalleryPreview(content);
  applyAdminContent(content);

  saveBtn.addEventListener("click", () => {
    saveAdminContent();
    const status = document.getElementById("adminStatus");
    if (status) {
      status.textContent = "Saved successfully.";
    }
  });
  resetBtn.addEventListener("click", () => {
    resetAdminContent();
    const status = document.getElementById("adminStatus");
    if (status) {
      status.textContent = "Reset to defaults.";
    }
  });
}

/* ---------- loader ---------- */
function initLoader() {
  const box = document.getElementById("loaderParticles");
  for (let i = 0; i < 26; i++) {
    const s = document.createElement("span");
    s.textContent = "❤";
    s.style.left = Math.random() * 100 + "%";
    s.style.fontSize = 10 + Math.random() * 20 + "px";
    s.style.animationDuration = 4 + Math.random() * 5 + "s";
    s.style.animationDelay = Math.random() * 4 + "s";
    box.appendChild(s);
  }
  const hide = () => {
    const l = document.getElementById("loader");
    l.classList.add("hidden");
    setTimeout(() => (l.style.display = "none"), 900);
  };
  window.addEventListener("load", () => setTimeout(hide, 1600));
  // failsafe
  setTimeout(hide, 4500);
}

/* ---------- hero button ---------- */
function initHeroButton() {
  const btn = document.getElementById("openBtn");
  btn.addEventListener("click", (e) => {
    // ripple
    const rip = document.createElement("span");
    rip.className = "rip";
    const r = btn.getBoundingClientRect();
    const size = Math.max(r.width, r.height);
    rip.style.width = rip.style.height = size + "px";
    rip.style.left = e.clientX - r.left - size / 2 + "px";
    rip.style.top = e.clientY - r.top - size / 2 + "px";
    btn.appendChild(rip);
    setTimeout(() => rip.remove(), 600);
    // confetti + scroll
    burstConfetti();
    document.getElementById("counter").scrollIntoView({ behavior: "smooth" });
  });
}

/* ---------- music ---------- */
function initMusic() {
  const audio = document.getElementById("audio");
  const toggle = document.getElementById("musicToggle");
  const label = document.getElementById("musicLabel");
  const vol = document.getElementById("volume");
  audio.src = CONFIG.musicSrc;
  audio.volume = CONFIG.musicVolume;
  vol.value = CONFIG.musicVolume;

  let playing = false;
  toggle.addEventListener("click", async () => {
    try {
      if (playing) {
        audio.pause();
        toggle.classList.remove("playing");
        label.textContent = "Play our song";
      } else {
        await audio.play();
        toggle.classList.add("playing");
        label.textContent = "Now playing ♥";
      }
      playing = !playing;
    } catch (err) {
      label.textContent = "Add a song file";
      console.warn("Music not available:", err);
    }
  });
  vol.addEventListener("input", () => (audio.volume = parseFloat(vol.value)));
  window._gfAudio = audio; // used by gift box
}

/* ---------- scroll progress ---------- */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = p + "%";
  });
}

/* ---------- gallery ---------- */
function buildGallery() {
  const grid = document.getElementById("galleryGrid");
  CONFIG.gallery.forEach((g, i) => {
    const card = document.createElement("div");
    card.className = "polaroid";
    card.style.setProperty("--rot", (Math.random() * 6 - 3).toFixed(1) + "deg");
    card.dataset.index = i;
    card.setAttribute("data-aos", "fade-up");
    card.innerHTML = `<img loading="lazy" src="${g.src}" alt="${g.cap || "memory"}"><div class="cap">${g.cap || ""}</div>`;
    card.addEventListener("click", () => openLightbox(i));
    grid.appendChild(card);
  });
}

/* ---------- timeline ---------- */
function buildTimeline() {
  const wrap = document.getElementById("timelineWrap");
  CONFIG.timeline.forEach((t, i) => {
    const item = document.createElement("div");
    item.className = "tl-item";
    item.setAttribute("data-aos", i % 2 ? "fade-left" : "fade-right");
    item.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-card glass">
        <div class="tl-emoji">${t.emoji}</div>
        <div class="tl-title">${t.title}</div>
        <div class="tl-desc">${t.desc}</div>
      </div>`;
    wrap.appendChild(item);
  });
}

/* ---------- reasons ---------- */
function buildReasons() {
  const grid = document.getElementById("reasonsGrid");
  CONFIG.reasons.forEach(([front, back], i) => {
    const card = document.createElement("div");
    card.className = "flip";
    card.setAttribute("data-aos", "zoom-in");
    card.setAttribute("data-aos-delay", (i % 5) * 60);
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-face flip-front">${front}</div>
        <div class="flip-face flip-back">${back}</div>
      </div>`;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    grid.appendChild(card);
  });
}

/* ---------- promises ---------- */
function buildPromises() {
  const grid = document.getElementById("promiseGrid");
  CONFIG.promises.forEach((p) => {
    const card = document.createElement("div");
    card.className = "promise";
    card.setAttribute("data-aos", "flip-up");
    card.innerHTML = `
      <div class="promise-inner">
        <div class="promise-face promise-front">
          <div class="p-emoji">${p.emoji}</div>
          <div class="p-hint">tap to reveal</div>
        </div>
        <div class="promise-face promise-back">${p.text}</div>
      </div>`;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    grid.appendChild(card);
  });
}

/* ---------- memory book ---------- */
let bookIndex = 0;
function buildBook() {
  renderBookPage();
  document.getElementById("bookPrev").addEventListener("click", () => turnPage(-1));
  document.getElementById("bookNext").addEventListener("click", () => turnPage(1));
}
function renderBookPage() {
  const p = CONFIG.book[bookIndex];
  const content = document.getElementById("bookContent");
  content.innerHTML = `<h3>${p.title}</h3><p>${p.text}</p>${p.img ? `<img src="${p.img}" alt="">` : ""}`;
  document.getElementById("bookIndicator").textContent = `${bookIndex + 1} / ${CONFIG.book.length}`;
}
function turnPage(dir) {
  const next = bookIndex + dir;
  if (next < 0 || next >= CONFIG.book.length) return;
  const page = document.getElementById("bookPage");
  page.classList.add("flipping");
  setTimeout(() => {
    bookIndex = next;
    renderBookPage();
    page.classList.remove("flipping");
  }, 350);
}

/* ---------- secret envelopes ---------- */
function buildSecrets() {
  const layer = document.getElementById("secretLayer");
  layer.style.position = "absolute";
  layer.style.inset = "0";
  layer.style.pointerEvents = "none";
  // Anchor envelopes into a few sections
  const anchors = ["gallery", "letter", "reasons", "book", "promises"];
  CONFIG.secrets.forEach((msg, i) => {
    const sec = document.getElementById(anchors[i % anchors.length]);
    if (!sec) return;
    const env = document.createElement("div");
    env.className = "secret-env";
    env.textContent = "✉️";
    env.style.pointerEvents = "auto";
    env.style.position = "absolute";
    env.style.top = 40 + Math.random() * 60 + "%";
    env.style.left = (i % 2 ? 82 : 6) + Math.random() * 8 + "%";
    env.addEventListener("click", () => openNote(msg));
    sec.style.position = "relative";
    sec.appendChild(env);
  });
}
function openNote(text) {
  document.getElementById("noteText").textContent = text;
  document.getElementById("noteModal").classList.add("open");
  smallHearts();
}
document.addEventListener("click", (e) => {
  if (e.target.id === "noteClose" || e.target.id === "noteModal") {
    document.getElementById("noteModal").classList.remove("open");
  }
});

/* ---------- lightbox ---------- */
let lbIndex = 0;
function initLightbox() {
  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", () => stepLightbox(-1));
  document.getElementById("lbNext").addEventListener("click", () => stepLightbox(1));
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("lightbox").classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") stepLightbox(1);
    if (e.key === "ArrowLeft") stepLightbox(-1);
  });
}
function openLightbox(i) {
  lbIndex = i;
  document.getElementById("lbImg").src = CONFIG.gallery[i].src;
  document.getElementById("lightbox").classList.add("open");
}
function stepLightbox(dir) {
  lbIndex = (lbIndex + dir + CONFIG.gallery.length) % CONFIG.gallery.length;
  document.getElementById("lbImg").src = CONFIG.gallery[lbIndex].src;
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

/* ---------- love counter ---------- */
function startCounter() {
  const since = document.getElementById("counterSince");
  since.textContent = "since " + CONFIG.startDate.toLocaleDateString(undefined, {
    year: "numeric", month: "long", day: "numeric",
  });
  const tick = () => {
    let diff = Math.max(0, Date.now() - CONFIG.startDate.getTime());
    const d = Math.floor(diff / 86400000); diff -= d * 86400000;
    const h = Math.floor(diff / 3600000); diff -= h * 3600000;
    const m = Math.floor(diff / 60000); diff -= m * 60000;
    const s = Math.floor(diff / 1000);
    document.getElementById("cDays").textContent = d.toLocaleString();
    document.getElementById("cHours").textContent = String(h).padStart(2, "0");
    document.getElementById("cMins").textContent = String(m).padStart(2, "0");
    document.getElementById("cSecs").textContent = String(s).padStart(2, "0");
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------- love letter typing (triggered on scroll) ---------- */
let letterTyped = false;
function typeLetter() {
  if (letterTyped) return;
  letterTyped = true;
  const html = CONFIG.letter.replace(/\n/g, "<br>");
  if (typeof Typed === "function") {
    new Typed("#typed", {
      strings: [html],
      typeSpeed: 22,
      showCursor: false,
      onComplete: () => { const c = document.querySelector(".cursor"); if (c) c.style.display = "none"; },
    });
  } else {
    // fallback: reveal the letter without the typing library
    document.getElementById("typed").innerHTML = html;
    const c = document.querySelector(".cursor"); if (c) c.style.display = "none";
  }
}

/* ---------- petals + fireflies background ---------- */
function initPetals() {
  const c = document.getElementById("petalCanvas");
  const ctx = c.getContext("2d");
  let W, H, petals = [];
  const resize = () => { W = c.width = innerWidth; H = c.height = innerHeight; };
  resize(); addEventListener("resize", resize);
  const COLORS = ["#ffb6c9", "#f7cac9", "#e6b8a2", "#c9b6e4", "#ffd1dc"];
  for (let i = 0; i < 34; i++) {
    petals.push({
      x: Math.random() * W, y: Math.random() * H,
      r: 6 + Math.random() * 8, s: .4 + Math.random() * 1,
      a: Math.random() * Math.PI * 2, sw: .01 + Math.random() * .03,
      color: COLORS[(Math.random() * COLORS.length) | 0],
    });
  }
  (function loop() {
    ctx.clearRect(0, 0, W, H);
    petals.forEach((p) => {
      p.y += p.s; p.a += p.sw; p.x += Math.sin(p.a) * .6;
      if (p.y > H + 20) { p.y = -20; p.x = Math.random() * W; }
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a);
      ctx.fillStyle = p.color; ctx.globalAlpha = .75;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r, p.r / 2, 0, 0, Math.PI * 2);
      ctx.fill(); ctx.restore();
    });
    requestAnimationFrame(loop);
  })();
}

/* ---------- interactive heart canvas ---------- */
let heartParticles = [];
function initHeartCanvas() {
  const c = document.getElementById("heartCanvas");
  const ctx = c.getContext("2d");
  let W, H;
  const resize = () => { W = c.width = innerWidth; H = c.height = innerHeight; };
  resize(); addEventListener("resize", resize);

  let lastMove = 0;
  addEventListener("pointermove", (e) => {
    const now = Date.now();
    if (now - lastMove < 40) return;
    lastMove = now;
    spawnHeart(e.clientX, e.clientY, 1);
  });
  addEventListener("pointerdown", (e) => {
    for (let i = 0; i < 18; i++) spawnHeart(e.clientX, e.clientY, 5);
  });

  function draw(p) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.translate(p.x, p.y);
    ctx.scale(p.size, p.size);
    if (p.star) {
      ctx.fillStyle = p.color;
      ctx.font = "14px serif";
      ctx.fillText("✨", 0, 0);
    } else {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-5, -5, -10, 2, 0, 9);
      ctx.bezierCurveTo(10, 2, 5, -5, 0, 0);
      ctx.fill();
    }
    ctx.restore();
  }
  (function loop() {
    ctx.clearRect(0, 0, W, H);
    heartParticles = heartParticles.filter((p) => p.life > 0);
    heartParticles.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.04; p.life -= 0.012;
      draw(p);
    });
    requestAnimationFrame(loop);
  })();
}
function spawnHeart(x, y, spread) {
  const colors = ["#ff8fb1", "#ff5c8a", "#c9b6e4", "#f7cac9", "#9d7fd6"];
  heartParticles.push({
    x, y,
    vx: (Math.random() - 0.5) * spread,
    vy: (Math.random() - 0.5) * spread - 0.6,
    life: 1, size: 0.6 + Math.random() * 0.9,
    color: colors[(Math.random() * colors.length) | 0],
    star: Math.random() > 0.7,
  });
}
function smallHearts() {
  const cx = innerWidth / 2, cy = innerHeight / 2;
  for (let i = 0; i < 20; i++) spawnHeart(cx, cy, 6);
}

/* ---------- gift box ---------- */
function initGift() {
  const box = document.getElementById("giftBox");
  const reveal = document.getElementById("giftReveal");
  let opened = false;
  box.addEventListener("click", () => {
    if (opened) return;
    opened = true;
    box.classList.add("opening");
    setTimeout(() => box.classList.add("opened"), 500);
    setTimeout(() => {
      reveal.classList.add("show");
      if (window.gsap) {
        gsap.to(".reveal-line", { opacity: 1, y: 0, stagger: 0.35, duration: 0.8, ease: "back.out(1.7)" });
      } else {
        document.querySelectorAll(".reveal-line").forEach((el, i) => {
          setTimeout(() => { el.style.opacity = 1; el.style.transform = "translateY(0)"; }, i * 350);
        });
      }
      celebrate();
      // music swell if available
      const a = window._gfAudio;
      if (a && !a.paused) gsap.to(a, { volume: Math.min(1, CONFIG.musicVolume + 0.3), duration: 2 });
    }, 900);
  });
}
function celebrate() {
  burstConfetti();
  // fireworks
  const end = Date.now() + 2500;
  (function frame() {
    confetti({ particleCount: 6, angle: 60, spread: 70, origin: { x: 0 }, colors: ["#ff8fb1", "#c9b6e4", "#9d7fd6"] });
    confetti({ particleCount: 6, angle: 120, spread: 70, origin: { x: 1 }, colors: ["#ff8fb1", "#f7cac9", "#ffd1dc"] });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
  smallHearts();
}
function burstConfetti() {
  if (typeof confetti !== "function") return;
  confetti({ particleCount: 140, spread: 90, origin: { y: 0.6 }, colors: ["#ff8fb1", "#c9b6e4", "#9d7fd6", "#f7cac9", "#ffd1dc"] });
}

/* ---------- ending scene: stars + lanterns ---------- */
function initEnding() {
  buildLanterns();
  const c = document.getElementById("starCanvas");
  const ctx = c.getContext("2d");
  const sec = document.getElementById("ending");
  let W, H, stars = [], shooters = [];
  const resize = () => { W = c.width = sec.offsetWidth; H = c.height = sec.offsetHeight; };
  resize(); addEventListener("resize", resize);
  for (let i = 0; i < 140; i++) {
    stars.push({ x: Math.random() * W, y: Math.random() * H * 0.85, r: Math.random() * 1.6, t: Math.random() * Math.PI * 2, sp: 0.02 + Math.random() * 0.05 });
  }
  function shoot() {
    shooters.push({ x: Math.random() * W * 0.6, y: Math.random() * H * 0.3, len: 120 + Math.random() * 80, life: 1, vx: 6 + Math.random() * 4, vy: 3 + Math.random() * 2 });
    setTimeout(shoot, 2600 + Math.random() * 3500);
  }
  setTimeout(shoot, 2000);
  (function loop() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach((s) => {
      s.t += s.sp;
      ctx.globalAlpha = 0.5 + Math.sin(s.t) * 0.5;
      ctx.fillStyle = "#fff";
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
    });
    ctx.globalAlpha = 1;
    shooters = shooters.filter((s) => s.life > 0);
    shooters.forEach((s) => {
      s.x += s.vx; s.y += s.vy; s.life -= 0.02;
      const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.len, s.y - s.len * 0.5);
      grad.addColorStop(0, "rgba(255,255,255," + s.life + ")");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.strokeStyle = grad; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.len, s.y - s.len * 0.5); ctx.stroke();
    });
    requestAnimationFrame(loop);
  })();
}
function buildLanterns() {
  const wrap = document.getElementById("lanterns");
  for (let i = 0; i < 12; i++) {
    const l = document.createElement("div");
    l.className = "lantern";
    l.style.left = Math.random() * 100 + "%";
    l.style.setProperty("--sway", (Math.random() * 60 - 30) + "px");
    l.style.animationDuration = 10 + Math.random() * 12 + "s";
    l.style.animationDelay = Math.random() * 10 + "s";
    wrap.appendChild(l);
  }
}

/* ---------- AOS + GSAP scroll ---------- */
function initAOS() {
  if (window.AOS) AOS.init({ duration: 900, once: true, offset: 80 });
}
function initScrollAnims() {
  // CDN-independent fallback: trigger the letter typing via IntersectionObserver
  const letterSec = document.getElementById("letter");
  if (letterSec && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { typeLetter(); io.disconnect(); } });
    }, { threshold: 0.3 });
    io.observe(letterSec);
  }

  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  // trigger letter typing when it enters view
  ScrollTrigger.create({
    trigger: "#letter",
    start: "top 70%",
    once: true,
    onEnter: typeLetter,
  });
  // section titles subtle rise
  gsap.utils.toArray(".section-title").forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 85%" },
      y: 30, opacity: 0, duration: 0.8, ease: "power2.out",
    });
  });
}
