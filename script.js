// ============================================================
// Birthday Surprise Website Configuration
// Edit this section to personalize the whole page.
// ============================================================
const birthdayConfig = {
  girlfriendName: "KHUSHI PARWEEN",
  yourName: "IRFAN ANSARI",
  birthdayDate: "2005-09-23",
  heroPhoto: "assets/photos/hero.jpg",
  music: "assets/music/our-song.mp3",
  finalSurpriseMessage:
    "No matter how many birthdays come and go,\nI hope I get to celebrate every one of them with you. ❤️",
  romanticLetter:
    "My love,\n\nEvery day with you feels like a quiet miracle. You are the reason my world feels warmer, softer, and more beautiful. Your smile has a way of making ordinary moments feel magical.\n\nI love the way you listen, the way you care, the way you make me feel seen in ways I never knew I needed. You have become my favorite person, my comfort, my joy, and the home I never want to leave.\n\nOn your birthday, I want you to know how deeply you are loved. You deserve every bit of happiness, peace, and beauty this life can offer. I hope this year brings you laughter, adventure, and countless memories that make your heart feel full.\n\nHappy birthday, my love. I will keep choosing you, loving you, and celebrating you every day. ❤️",
};

// ------------------------------------------------------------
// Add your own photos here by replacing the image paths.
// Example: "assets/photos/photo1.jpg"
// ------------------------------------------------------------
const photos = [
  { src: "assets/photos/photo1.jpg", caption: "Our favorite little adventure" },
  { src: "assets/photos/photo2.jpg", caption: "A smile worth chasing forever" },
  { src: "assets/photos/photo3.jpg", caption: "The moments I never want to lose" },
];

// ------------------------------------------------------------
// Add or edit your unique memories here.
// ------------------------------------------------------------
const memories = [
  {
    date: " 1 January 2025",
    title: "Where It All Started",
    note: "Our first conversation felt like the beginning of something beautiful.",
    location: "Our favorite little corner",
    image: "assets/photos/h2.jpg",
    description: "From the very beginning, it felt like we were already writing a story together.",
  },
  {
    date: "July 2023",
    title: "Our First Conversation (Remaining)",
    note: "We talked for hours and it felt like time had slowed down.",
    location: "A coffee date",
    image: "assets/photos/h3.jpg",
    description: "Every word felt easy, and every moment felt full of promise.",
  },
  {
    date: "September 2023",
    title: "The Day We Met",
    note: "The day my world suddenly felt brighter and softer.",
    location: "The place where it all began",
    image: "assets/photos/h4.jpg",
    description: "I still smile thinking about that first time we met.",
  },
  {
    date: "December 2023",
    title: "Our Favorite Memory",
    note: "Whenever you present, you make every moment memorable.",
    location: "Under the lights",
    image: "assets/photos/h5.jpg",
    description: "It was one of those moments I knew I wanted to keep forever.",
  },
  {
    date: "Today ❤️",
    title: "And Now Here We Are",
    note: "Still falling for you, still choosing you, still grateful for us.",
    location: "Everyday life, but more beautiful with you",
    image: "assets/photos/h6.jpg",
    description: "Today is just another chapter in the love story I never want to end.",
  },
];

// ------------------------------------------------------------
// Add or edit personal notes here.
// ------------------------------------------------------------
const notes = [
  {
    title: "Your smile",
    text: "The kind that makes even my hardest days feel softer.",
  },
  {
    title: "Your kindness",
    text: "You make the world feel gentler just by being in it.",
  },
  {
    title: "Your laughter",
    text: "The sound I never get tired of hearing.",
  },
  {
    title: "The way you love",
    text: "With warmth, patience, and a heart that feels like home.",
  },
  {
    title: "The way you understand me",
    text: "Like you always know what my heart is trying to say.",
  },
  {
    title: "Our future",
    text: "My favorite chapter is still being written, and you are in every page.",
  },
];

// ------------------------------------------------------------
// Add or edit Shayari here. Hindi/Urdu text is supported.
// ------------------------------------------------------------
const shayaris = [
  "कुछ सोचता हूं तो तेरा ख्याल आ जाता है, \n कुछ बोलता हूं तो तेरा नाम आ जाता है, \n कब तक छुपा के रखूं दिल की बात को \n तेरी हर अदा पर मुझे प्यार आ जाता है ! ❤️",
  "बैठे रहो सामने, दिल को क़रार आएगा, \n जितना देखोगी तुम, उतना ही प्यार आएगा, \n तेरी एक झलक दिल को छू जाएगी, \n हर पल तेरा ही ख़याल आएगा। 💫",
  "तुम्हारे बिना हर पल अधूरा है, \n तुम्हारे साथ हर पल पूरा है, \n तुम हो तो बस यही काफ़ी है, \n तुम हो तो हर दुनिया मेरी है। ❤️",
];

// ------------------------------------------------------------
// Add your videos here. Replace the file paths with your own.
// Example: "assets/videos/video1.mp4"
// ------------------------------------------------------------
const videos = [
  { src: "assets/videos/v1.mp4", caption: "Little happy moments" },
  { src: "assets/videos/v2.mp4", caption: "A memory we will always keep" },
  { src: "assets/videos/v3.mp4", caption: "The kind of moments that make life beautiful" },
];

const galleryImages = [
  { src: "assets/photos/h7.jpg", caption: "The beginning of our beautiful story" },
  { src: "assets/photos/h8.jpg", caption: "Your smile is my forever favorite view" },
  { src: "assets/photos/h9.jpg", caption: "The joy of being with you" },
  { src: "assets/photos/h10.jpg", caption: "The person who makes my world brighter" },
  { src: "assets/photos/h11.jpg", caption: "Every little moment with you matters" },
  { src: "assets/photos/h12.jpg", caption: "A memory worth treasuring forever" },
];

const storyTimeline = document.getElementById("storyTimeline");
const galleryGrid = document.getElementById("galleryGrid");
const videoGallery = document.getElementById("videoGallery");
const notesContainer = document.getElementById("notesContainer");
const shayariText = document.getElementById("shayariText");
const letterContent = document.getElementById("letterContent");
const letterModalContent = document.getElementById("letterModalContent");
const surpriseText = document.getElementById("surpriseText");
const introOverlay = document.getElementById("introOverlay");
const openSurpriseBtn = document.getElementById("openSurpriseBtn");
const musicPlayer = document.getElementById("musicPlayer");
const toggleMusicBtn = document.getElementById("toggleMusicBtn");
const playPauseBtn = document.getElementById("playPauseBtn");
const closeMusicBtn = document.getElementById("closeMusicBtn");
const backgroundMusic = document.getElementById("backgroundMusic");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const progressBar = document.getElementById("progressBar");
const volumeControl = document.getElementById("volumeControl");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxClose = document.getElementById("lightboxClose");
const letterModal = document.getElementById("letterModal");
const letterModalClose = document.getElementById("letterModalClose");
const readLetterBtn = document.getElementById("readLetterBtn");
const surpriseOverlay = document.getElementById("surpriseOverlay");
const finalSurpriseBtn = document.getElementById("finalSurpriseBtn");
const heroName = document.getElementById("heroName");
const birthdayDateLabel = document.getElementById("birthdayDateLabel");
const yourName = document.getElementById("yourName");
const heroPhoto = document.getElementById("heroPhoto");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const nextShayariBtn = document.getElementById("nextShayari");
const prevShayariBtn = document.getElementById("prevShayari");

let shayariIndex = 0;
let currentLightboxIndex = 0;
let musicInitialized = false;

function initConfig() {
  heroName.textContent = birthdayConfig.girlfriendName;
  yourName.textContent = birthdayConfig.yourName;
  birthdayDateLabel.textContent = birthdayConfig.birthdayDate;
  heroPhoto.src = birthdayConfig.heroPhoto;
  surpriseText.textContent = birthdayConfig.finalSurpriseMessage;
  letterContent.textContent = birthdayConfig.romanticLetter;
  letterModalContent.textContent = birthdayConfig.romanticLetter;
  backgroundMusic.src = birthdayConfig.music;
  songTitle.textContent = "Our Song";
  songArtist.textContent = "A little love story";
}

function renderStory() {
  storyTimeline.innerHTML = memories
    .map(
      (memory) => `
      <article class="story-item reveal">
        <span class="story-date">${memory.date}</span>
        <h4>${memory.title}</h4>
        <div class="story-location">${memory.location}</div>
        <img src="${memory.image}" alt="${memory.title}" />
        <p class="story-content">${memory.note}</p>
        <p class="story-content">${memory.description}</p>
      </article>
      `
    )
    .join("");

  observeRevealElements();
}

function renderGallery() {
  galleryGrid.innerHTML = galleryImages
    .map(
      (item, index) => `
      <figure class="gallery-item reveal" data-index="${index}" tabindex="0" aria-label="Open memory photo ${index + 1}">
        <img src="${item.src}" alt="${item.caption}" />
        <figcaption>${item.caption}</figcaption>
      </figure>
      `
    )
    .join("");

  galleryGrid.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => openLightbox(Number(item.dataset.index)));
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(Number(item.dataset.index));
      }
    });
  });

  observeRevealElements();
}

function renderVideos() {
  videoGallery.innerHTML = videos
    .map(
      (video, index) => `
      <article class="video-card reveal">
        <video controls preload="metadata" playsinline poster="assets/photos/hero.jpg" aria-label="Video memory ${index + 1}">
          <source src="${video.src}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p class="video-caption">${video.caption}</p>
      </article>
      `
    )
    .join("");

  observeRevealElements();
}

function renderNotes() {
  notesContainer.innerHTML = notes
    .map(
      (note) => `
      <article class="note-card reveal">
        <h4>${note.title}</h4>
        <p>“${note.text}”</p>
      </article>
      `
    )
    .join("");

  observeRevealElements();
}

function renderShayari() {
  shayariText.textContent = shayaris[shayariIndex];
}

function showNextShayari() {
  shayariIndex = (shayariIndex + 1) % shayaris.length;
  renderShayari();
}

function showPrevShayari() {
  shayariIndex = (shayariIndex - 1 + shayaris.length) % shayaris.length;
  renderShayari();
}

function observeRevealElements() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => observer.observe(element));
}

function updateCountdown() {
  const targetDate = new Date(birthdayConfig.birthdayDate + "T00:00:00");
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  const countdownEl = document.getElementById("countdownTimer");

  if (diff <= 0) {
    countdownEl.innerHTML = `<div class="countdown-card" style="grid-column: 1 / -1; padding: 2rem 1rem;"><span class="countdown-number" style="font-size: clamp(1.7rem, 5vw, 2.8rem);">Today is your day! 🎂❤️</span></div>`;
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

function formatTime(time) {
  if (Number.isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function updateMetadata() {
  if (!backgroundMusic.duration || Number.isNaN(backgroundMusic.duration)) {
    totalTime.textContent = "0:00";
    return;
  }
  totalTime.textContent = formatTime(backgroundMusic.duration);
}

function updateProgress() {
  if (!backgroundMusic.duration) return;
  const percent = (backgroundMusic.currentTime / backgroundMusic.duration) * 100;
  progressBar.value = percent;
  currentTime.textContent = formatTime(backgroundMusic.currentTime);
}

function toggleMusic() {
  if (!backgroundMusic.src) return;

  if (backgroundMusic.paused) {
    backgroundMusic.play().catch(() => {
      musicPlayer.classList.add("visible");
    });
    playPauseBtn.textContent = "Pause";
    toggleMusicBtn.textContent = "❚❚";
    musicPlayer.classList.add("visible");
  } else {
    backgroundMusic.pause();
    playPauseBtn.textContent = "Play";
    toggleMusicBtn.textContent = "♫";
  }
}

function openSurpriseOverlay() {
  introOverlay.classList.add("hidden");
  document.body.classList.add("surprise-open");
  createFloatingHearts(18);
  if (!musicInitialized) {
    musicInitialized = true;
    toggleMusic();
  }
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const item = galleryImages[index];
  if (!item) return;
  lightboxImage.src = item.src;
  lightboxImage.alt = item.caption;
  lightboxCaption.textContent = item.caption;
  lightbox.classList.add("show");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
  openLightbox(currentLightboxIndex);
}

function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
  openLightbox(currentLightboxIndex);
}

function openLetterModal() {
  letterModal.classList.add("show");
  letterModal.setAttribute("aria-hidden", "false");
  letterContent.parentElement.classList.add("revealed");
  createFloatingHearts(10);
}

function closeLetterModal() {
  letterModal.classList.remove("show");
  letterModal.setAttribute("aria-hidden", "true");
}

function showFinalSurprise() {
  surpriseOverlay.classList.add("show");
  surpriseOverlay.setAttribute("aria-hidden", "false");
  createFloatingHearts(30);
  playToneSequence();
  setTimeout(() => {
    surpriseOverlay.classList.remove("show");
    surpriseOverlay.setAttribute("aria-hidden", "true");
  }, 4200);
}

function playToneSequence() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  const context = new AudioCtx();
  const notes = [440, 554.37, 659.25, 783.99];
  notes.forEach((freq, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = freq;
    gain.gain.value = 0.0001;
    oscillator.connect(gain);
    gain.connect(context.destination);
    const start = context.currentTime + index * 0.18;
    gain.gain.exponentialRampToValueAtTime(0.08, start + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.28);
    oscillator.start(start);
    oscillator.stop(start + 0.3);
  });
}

function createFloatingHearts(count) {
  const container = document.querySelector(".background-hearts");
  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-particle";
    heart.textContent = ["❤", "♥", "♡"][Math.floor(Math.random() * 3)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * 1.4 + 0.8}rem`;
    heart.style.setProperty("--drift-x", `${(Math.random() - 0.5) * 160}px`);
    heart.style.animationDuration = `${Math.random() * 10 + 10}s`;
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 11000);
  }
}

function initializeMusicControls() {
  backgroundMusic.src = birthdayConfig.music;
  backgroundMusic.volume = Number(volumeControl.value);
  backgroundMusic.addEventListener("timeupdate", updateProgress);
  backgroundMusic.addEventListener("loadedmetadata", updateMetadata);
  backgroundMusic.addEventListener("ended", () => {
    playPauseBtn.textContent = "Play";
    toggleMusicBtn.textContent = "♫";
  });

  playPauseBtn.addEventListener("click", toggleMusic);
  toggleMusicBtn.addEventListener("click", toggleMusic);
  closeMusicBtn.addEventListener("click", () => {
    musicPlayer.classList.remove("visible");
    backgroundMusic.pause();
    playPauseBtn.textContent = "Play";
    toggleMusicBtn.textContent = "♫";
  });

  volumeControl.addEventListener("input", (event) => {
    backgroundMusic.volume = Number(event.target.value);
  });

  progressBar.addEventListener("input", (event) => {
    if (!backgroundMusic.duration) return;
    const target = (Number(event.target.value) / 100) * backgroundMusic.duration;
    backgroundMusic.currentTime = target;
  });
}

function initializeNavigation() {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initializeEvents() {
  openSurpriseBtn.addEventListener("click", openSurpriseOverlay);
  readLetterBtn.addEventListener("click", openLetterModal);
  finalSurpriseBtn.addEventListener("click", showFinalSurprise);
  letterModalClose.addEventListener("click", closeLetterModal);
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", prevLightbox);
  lightboxNext.addEventListener("click", nextLightbox);
  nextShayariBtn.addEventListener("click", showNextShayari);
  prevShayariBtn.addEventListener("click", showPrevShayari);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
      closeLetterModal();
      surpriseOverlay.classList.remove("show");
    }
    if (event.key === "ArrowRight" && lightbox.classList.contains("show")) {
      nextLightbox();
    }
    if (event.key === "ArrowLeft" && lightbox.classList.contains("show")) {
      prevLightbox();
    }
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  letterModal.addEventListener("click", (event) => {
    if (event.target === letterModal) {
      closeLetterModal();
    }
  });

  surpriseOverlay.addEventListener("click", (event) => {
    if (event.target === surpriseOverlay) {
      surpriseOverlay.classList.remove("show");
    }
  });
}

function init() {
  initConfig();
  renderStory();
  renderGallery();
  renderVideos();
  renderNotes();
  renderShayari();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  initializeNavigation();
  initializeEvents();
  initializeMusicControls();
  observeRevealElements();
}

init();
