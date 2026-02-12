const games = [
  { title: "علاء الدين", size: 45, type: "2d", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=60" },
  { title: "قيصر الحرب", size: 80, type: "war", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=60" },
  { title: "سباق المدينة", size: 60, type: "cars", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=60" },
  { title: "مهمة الظلال", size: 90, type: "3d", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?auto=format&fit=crop&w=600&q=60" },
  { title: "أيام القصة", size: 30, type: "story", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=60" },
  { title: "معركة الصقور", size: 75, type: "war", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=60" },
  { title: "رجوع للماضي", size: 55, type: "story", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?auto=format&fit=crop&w=600&q=60" },
  { title: "تراث الأبطال", size: 42, type: "2d", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=60" },
  { title: "شوارع السرعة", size: 110, type: "cars", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=60" },
  { title: "أسطورة 3D", size: 95, type: "3d", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=60" },
  { title: "حكاية سوق", size: 38, type: "story", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?auto=format&fit=crop&w=600&q=60" },
  { title: "طريق القتال", size: 65, type: "war", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=60" },
  { title: "ذكريات XP", size: 28, type: "2d", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=60" },
  { title: "مدار السرعة", size: 72, type: "cars", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?auto=format&fit=crop&w=600&q=60" },
  { title: "الخطة الكبرى", size: 58, type: "3d", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=60" },
  { title: "رحلة الرمال", size: 49, type: "story", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=60" },
  { title: "رهان المدينة", size: 54, type: "cars", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=60" },
  { title: "بطل الحرب", size: 88, type: "war", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?auto=format&fit=crop&w=600&q=60" },
  { title: "ذاكرة السبع", size: 41, type: "2d", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=60" },
  { title: "نجم الحكاية", size: 36, type: "story", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=60" },
  { title: "ميدان الأبطال", size: 78, type: "war", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=60" },
  { title: "طريق الGT", size: 66, type: "cars", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?auto=format&fit=crop&w=600&q=60" },
  { title: "مغامرة البلور", size: 57, type: "3d", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=60" },
  { title: "رسائل 98", size: 34, type: "2d", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=60" },
  { title: "ليلة العبور", size: 52, type: "story", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=60" },
  { title: "خطر الجزيرة", size: 84, type: "3d", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?auto=format&fit=crop&w=600&q=60" },
  { title: "مضمار المجد", size: 62, type: "cars", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=60" },
  { title: "الكمين الأخير", size: 73, type: "war", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=60" },
  { title: "حكاية جرافيك", size: 47, type: "2d", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=60" },
  { title: "عالم الصحراء", size: 59, type: "3d", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?auto=format&fit=crop&w=600&q=60" },
  { title: "مهمة العودة", size: 44, type: "story", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=60" },
  { title: "سباق الغروب", size: 68, type: "cars", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=60" },
  { title: "وعد الميدان", size: 76, type: "war", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=60" },
  { title: "فضاء الطفولة", size: 33, type: "2d", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?auto=format&fit=crop&w=600&q=60" },
  { title: "كتلة المجرة", size: 83, type: "3d", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=60" },
  { title: "قصة الريف", size: 39, type: "story", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=60" },
  { title: "خط النهاية", size: 64, type: "cars", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=60" },
  { title: "حصار التل", size: 82, type: "war", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?auto=format&fit=crop&w=600&q=60" },
  { title: "خطوة أولى", size: 31, type: "2d", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=60" },
  { title: "سر الغابة", size: 53, type: "story", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=60" },
  { title: "الدفع الرباعي", size: 69, type: "cars", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=60" },
  { title: "برج النار", size: 86, type: "war", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?auto=format&fit=crop&w=600&q=60" },
  { title: "رعد ثلاثي", size: 74, type: "3d", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=60" },
  { title: "ممر الحلم", size: 43, type: "2d", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=60" },
  { title: "حدود الزمن", size: 56, type: "story", era: "7", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=60" },
  { title: "قوة السرعة", size: 71, type: "cars", era: "98", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?auto=format&fit=crop&w=600&q=60" },
  { title: "خيال العاصفة", size: 79, type: "3d", era: "xp", link: "https://speed.hetzner.de/1MB.bin", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=60" }
];

const filters = { type: "all", era: "all", sort: "default", page: 1 };
const perPage = 8;

const grid = document.getElementById("gamesGrid");
const pager = document.getElementById("pager");
const toast = document.getElementById("toastMsg");

function filteredGames() {
  let out = [...games];
  if (filters.type !== "all") out = out.filter((g) => g.type === filters.type);
  if (filters.era !== "all") out = out.filter((g) => g.era === filters.era);
  if (filters.sort === "alpha") out.sort((a, b) => a.title.localeCompare(b.title, "ar"));
  if (filters.sort === "size") out.sort((a, b) => a.size - b.size);
  return out;
}

function render() {
  const data = filteredGames();
  const pages = Math.max(1, Math.ceil(data.length / perPage));
  filters.page = Math.min(filters.page, pages);

  const start = (filters.page - 1) * perPage;
  const pageItems = data.slice(start, start + perPage);

  grid.innerHTML = pageItems
    .map(
      (g) => `
      <article class="game-card">
        <div class="poster-wrap">
          <img src="${g.image}" alt="${g.title}" loading="lazy" />
          <span class="size-chip">${g.size}m</span>
          <span class="game-title">${g.title}</span>
        </div>
        <button class="download-btn" data-link="${g.link}" data-title="${g.title}">تحميل↜</button>
      </article>`
    )
    .join("");

  pager.innerHTML = Array.from({ length: pages }, (_, i) => {
    const p = i + 1;
    return `<button class="page-btn ${p === filters.page ? "active" : ""}" data-page="${p}">${p}</button>`;
  }).join("");
}

function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove("show"), 4200);
}

document.querySelectorAll(".dropdown").forEach((d) => {
  const trigger = d.querySelector(".drop-trigger");
  trigger.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach((x) => x !== d && x.classList.remove("open"));
    d.classList.toggle("open");
  });

  d.querySelectorAll(".drop-menu button").forEach((btn) => {
    btn.addEventListener("click", () => {
      filters[d.dataset.filter] = btn.dataset.value;
      filters.page = 1;
      trigger.textContent = btn.textContent;
      d.classList.remove("open");
      render();
    });
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach((d) => d.classList.remove("open"));
  }

  if (e.target.matches(".download-btn")) {
    const a = document.createElement("a");
    a.href = e.target.dataset.link;
    a.download = `${e.target.dataset.title}.bin`;
    a.target = "_blank";
    a.click();
    showToast("شكراً لتحميلك، هيا لنرجع بالزمن. إن لم يتم التحميل اضغط مرة أخرى وانتظر ثواني.");
  }

  if (e.target.matches(".page-btn")) {
    filters.page = Number(e.target.dataset.page);
    render();
  }
});

const video = document.getElementById("heroVideo");
const togglePlay = document.getElementById("togglePlay");
const restartVideo = document.getElementById("restartVideo");
const restartIcon = document.getElementById("restartIcon");

function syncPlayLabel() {
  togglePlay.textContent = video.paused ? "تشغيل" : "إيقاف";
}

togglePlay.addEventListener("click", () => {
  if (video.paused) video.play();
  else video.pause();
  syncPlayLabel();
});

function restart() {
  video.currentTime = 0;
  video.pause();
  syncPlayLabel();
}

restartVideo.addEventListener("click", restart);
restartIcon.addEventListener("click", restart);
video.addEventListener("play", syncPlayLabel);
video.addEventListener("pause", syncPlayLabel);
syncPlayLabel();

const floatingEls = [...document.querySelectorAll(".floating")];
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  floatingEls.forEach((el, i) => {
    const drift = (i % 2 === 0 ? -1 : 1) * y * 0.04;
    el.style.transform = `translateY(${drift}px)`;
  });
});

render();
