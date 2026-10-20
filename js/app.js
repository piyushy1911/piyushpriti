// Wedding invitation controller extracted from the original file.
    (function() {
      // 1. THEME DEFINITIONS (11 PALETTES)
      const THEMES = [
        {
          id: "royal-black",
          name: "Royal Black & Antique Gold",
          mood: "Imperial obsidian luxury with raw 24k bullion gold accents",
          isDark: true,
          swatchPrimary: "#0e0c0a",
          swatchSecondary: "#d4af37",
          vars: {
            "--bg-base": "#0e0c0a",
            "--card-bg": "#181513",
            "--card-surface": "#231f1c",
            "--card-highlight": "#2e2924",
            "--accent-gold": "#d4af37",
            "--accent-subtle": "#917625",
            "--text-primary": "#f5ecd5",
            "--text-secondary": "#cfc3aa",
            "--text-muted": "#8d826c",
            "--border-color": "rgba(212, 175, 55, 0.3)"
          }
        },
        {
          id: "ivory-champagne",
          name: "Ivory & Champagne Gold",
          mood: "Soft imperial cream silk with light champagne gilding",
          isDark: false,
          swatchPrimary: "#fcf9f2",
          swatchSecondary: "#c5a059",
          vars: {
            "--bg-base": "#fcf9f2",
            "--card-bg": "#ffffff",
            "--card-surface": "#f5f0e6",
            "--card-highlight": "#eae1d2",
            "--accent-gold": "#b0883d",
            "--accent-subtle": "#806024",
            "--text-primary": "#2b2520",
            "--text-secondary": "#574d44",
            "--text-muted": "#8a7e72",
            "--border-color": "rgba(197, 160, 89, 0.35)"
          }
        },
        {
          id: "maroon-gold",
          name: "Traditional Maroon & Gold",
          mood: "Deep royal Rajputana vermilion with sacred Kundan gold",
          isDark: true,
          swatchPrimary: "#30080f",
          swatchSecondary: "#e6b85c",
          vars: {
            "--bg-base": "#24040a",
            "--card-bg": "#360a12",
            "--card-surface": "#480e1a",
            "--card-highlight": "#571321",
            "--accent-gold": "#e6b85c",
            "--accent-subtle": "#b38934",
            "--text-primary": "#fdf4e3",
            "--text-secondary": "#e3cfb3",
            "--text-muted": "#a88e72",
            "--border-color": "rgba(230, 184, 92, 0.35)"
          }
        },
        {
          id: "emerald-gold",
          name: "Emerald Green & Gold",
          mood: "Heritage Panna gemstone velvet with warm temple gold",
          isDark: true,
          swatchPrimary: "#08231a",
          swatchSecondary: "#d4af37",
          vars: {
            "--bg-base": "#061b14",
            "--card-bg": "#0c2e22",
            "--card-surface": "#123d2f",
            "--card-highlight": "#194d3c",
            "--accent-gold": "#e0be53",
            "--accent-subtle": "#a3842c",
            "--text-primary": "#eaf5ef",
            "--text-secondary": "#bed8c9",
            "--text-muted": "#7a9e8a",
            "--border-color": "rgba(212, 175, 55, 0.35)"
          }
        },
        {
          id: "blush-rose",
          name: "Blush Pink & Rose Gold",
          mood: "Romantic palace terrace dusk with shimmering rose gold foil",
          isDark: false,
          swatchPrimary: "#fff2f4",
          swatchSecondary: "#c97573",
          vars: {
            "--bg-base": "#fff1f3",
            "--card-bg": "#ffffff",
            "--card-surface": "#ffe4e8",
            "--card-highlight": "#ffd6dc",
            "--accent-gold": "#c25e68",
            "--accent-subtle": "#943f49",
            "--text-primary": "#381c22",
            "--text-secondary": "#633c44",
            "--text-muted": "#996b74",
            "--border-color": "rgba(201, 117, 115, 0.35)"
          }
        },
        {
          id: "royal-blue-silver",
          name: "Royal Blue & Silver",
          mood: "Nocturnal Udaipur lake navy with pure sterling foil sheen",
          isDark: true,
          swatchPrimary: "#09152b",
          swatchSecondary: "#cbd5e1",
          vars: {
            "--bg-base": "#060f21",
            "--card-bg": "#0c1d3b",
            "--card-surface": "#13284f",
            "--card-highlight": "#193466",
            "--accent-gold": "#cbd5e1",
            "--accent-subtle": "#94a3b8",
            "--text-primary": "#f8fafc",
            "--text-secondary": "#cbd5e1",
            "--text-muted": "#64748b",
            "--border-color": "rgba(203, 213, 225, 0.35)"
          }
        },
        {
          id: "pastel-floral",
          name: "Pastel Floral Garden",
          mood: "Delicate Kashmiri jasmine petals with warm morning gold",
          isDark: false,
          swatchPrimary: "#fcfaf7",
          swatchSecondary: "#b8860b",
          vars: {
            "--bg-base": "#fcfaf7",
            "--card-bg": "#ffffff",
            "--card-surface": "#f5f0e9",
            "--card-highlight": "#eae2d5",
            "--accent-gold": "#b8860b",
            "--accent-subtle": "#7d5b06",
            "--text-primary": "#332c28",
            "--text-secondary": "#5e524b",
            "--text-muted": "#8f827a",
            "--border-color": "rgba(184, 134, 11, 0.3)"
          }
        },
        {
          id: "indian-red-gold",
          name: "Traditional Indian Red & Gold",
          mood: "Sacred Sindoori vermilion & holy bridal Alta with Kundan accents",
          isDark: true,
          swatchPrimary: "#400609",
          swatchSecondary: "#e5b94f",
          vars: {
            "--bg-base": "#2b0306",
            "--card-bg": "#45090d",
            "--card-surface": "#5e0f14",
            "--card-highlight": "#73151b",
            "--accent-gold": "#e5b94f",
            "--accent-subtle": "#b0882e",
            "--text-primary": "#fff5ea",
            "--text-secondary": "#edd4b4",
            "--text-muted": "#b8946e",
            "--border-color": "rgba(229, 185, 79, 0.35)"
          }
        },
        {
          id: "modern-minimal-white",
          name: "Modern Minimal White",
          mood: "Architectural gallery white with micro-gold hairline precision",
          isDark: false,
          swatchPrimary: "#fafafa",
          swatchSecondary: "#a38237",
          vars: {
            "--bg-base": "#f7f7f8",
            "--card-bg": "#ffffff",
            "--card-surface": "#eeeeef",
            "--card-highlight": "#e2e2e5",
            "--accent-gold": "#96752c",
            "--accent-subtle": "#634d1c",
            "--text-primary": "#171717",
            "--text-secondary": "#404040",
            "--text-muted": "#737373",
            "--border-color": "rgba(150, 117, 44, 0.25)"
          }
        },
        {
          id: "royal-purple",
          name: "Royal Purple & Gold",
          mood: "Majestic imperial Jamun velvet with opulent polished gold",
          isDark: true,
          swatchPrimary: "#1f0e2b",
          swatchSecondary: "#d4af37",
          vars: {
            "--bg-base": "#170921",
            "--card-bg": "#281238",
            "--card-surface": "#37194d",
            "--card-highlight": "#482163",
            "--accent-gold": "#e0be53",
            "--accent-subtle": "#9e812b",
            "--text-primary": "#f8f0fc",
            "--text-secondary": "#dabfe6",
            "--text-muted": "#9679a6",
            "--border-color": "rgba(212, 175, 55, 0.35)"
          }
        },
        {
          id: "sage-green-ivory",
          name: "Sage Green & Warm Ivory",
          mood: "Royal Mehendi botanical sage with antique brass luster",
          isDark: true,
          swatchPrimary: "#13211c",
          swatchSecondary: "#d1b26f",
          vars: {
            "--bg-base": "#0e1a16",
            "--card-bg": "#192c25",
            "--card-surface": "#223b32",
            "--card-highlight": "#2d4c41",
            "--accent-gold": "#d1b26f",
            "--accent-subtle": "#9c8044",
            "--text-primary": "#f3eedd",
            "--text-secondary": "#c8c1ad",
            "--text-muted": "#827c6b",
            "--border-color": "rgba(209, 178, 111, 0.32)"
          }
        }
      ];

      // Active state
      let activeThemeId = "royal-black";
      let activeStyleId = "classic-royal";

      // Elements
      const body = document.body;
      const themeLabel = document.getElementById("active-theme-label");
      const themeSwatch = document.getElementById("active-theme-swatch");
      const paletteContainer = document.getElementById("palette-selection-container");
      const styleButtons = document.querySelectorAll(".style-choice-btn");

      // Populate Palette Swatch List
      function renderPalettes() {
        if (!paletteContainer) return;
        paletteContainer.innerHTML = "";

        THEMES.forEach(t => {
          const isSelected = t.id === activeThemeId;
          const card = document.createElement("button");
          card.className = `p-2.5 rounded-xl border flex items-center justify-between transition-all text-left ${isSelected ? 'ring-2 ring-amber-400 theme-surface font-semibold' : 'theme-surface/60 border-transparent hover:border-amber-400/40'}`;
          card.onclick = () => selectPalette(t.id);

          card.innerHTML = `
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-full flex overflow-hidden border border-white/20 shrink-0 shadow-sm">
                <div class="w-1/2 h-full" style="background-color: ${t.swatchPrimary}"></div>
                <div class="w-1/2 h-full" style="background-color: ${t.swatchSecondary}"></div>
              </div>
              <div class="flex flex-col">
                <span class="text-xs font-semibold theme-text-primary leading-snug">${t.name}</span>
                <span class="text-[9px] theme-text-muted leading-tight">${t.mood}</span>
              </div>
            </div>
            ${isSelected ? '<span class="material-symbols-outlined text-sm theme-gold-text">check_circle</span>' : ''}
          `;
          paletteContainer.appendChild(card);
        });
      }

      function updateActiveVisuals() {
        const t = THEMES.find(item => item.id === activeThemeId);
        if (!t) return;

        // Apply CSS Variables
        for (const [key, val] of Object.entries(t.vars)) {
          document.documentElement.style.setProperty(key, val);
        }

        // Apply Data Attributes
        body.setAttribute("data-theme-id", activeThemeId);
        body.setAttribute("data-visual-style", activeStyleId);

        // Update indicators
        const styleName = activeStyleId === 'classic-royal' ? 'Classic Royal' : (activeStyleId === 'modern-editorial' ? 'Modern Editorial' : 'Romantic Floral');
        if (themeLabel) themeLabel.innerText = `${t.name} • ${styleName}`;
        if (themeSwatch) themeSwatch.style.backgroundColor = t.swatchSecondary;

        // Update style selection buttons in drawer
        styleButtons.forEach(btn => {
          const sId = btn.getAttribute("data-style-id");
          if (sId === activeStyleId) {
            btn.classList.add("ring-2", "ring-amber-400", "theme-surface");
            btn.classList.remove("opacity-70");
          } else {
            btn.classList.remove("ring-2", "ring-amber-400", "theme-surface");
            btn.classList.add("opacity-70");
          }
        });

        renderPalettes();
      }

      function selectPalette(id) {
        activeThemeId = id;
        updateActiveVisuals();
      }

      function selectStyle(id) {
        activeStyleId = id;
        updateActiveVisuals();
      }

      styleButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          const sId = btn.getAttribute("data-style-id");
          if (sId) selectStyle(sId);
        });
      });

      // 2. STUDIO DRAWER TOGGLES
      const drawer = document.getElementById("theme-studio-drawer");
      const backdrop = document.getElementById("theme-studio-backdrop");
      const openBtn1 = document.getElementById("open-studio-drawer-btn");
      const openBtn2 = document.getElementById("floating-customizer-btn");
      const openBtn3 = document.getElementById("open-studio-bottom-btn");
      const closeBtn = document.getElementById("close-studio-btn");
      const dragHandle = document.getElementById("drawer-drag-handle");
      const applyBtn = document.getElementById("apply-studio-btn");
      const resetBtn = document.getElementById("reset-default-btn");
      const shareThemeBtn = document.getElementById("copy-theme-code-btn");

      function openDrawer() {
        if (!drawer || !backdrop) return;
        backdrop.classList.remove("opacity-0", "pointer-events-none");
        drawer.classList.remove("translate-y-full");
      }

      function closeDrawer() {
        if (!drawer || !backdrop) return;
        drawer.classList.add("translate-y-full");
        backdrop.classList.add("opacity-0", "pointer-events-none");
      }

      [openBtn1, openBtn2, openBtn3].forEach(b => b?.addEventListener("click", openDrawer));
      [closeBtn, backdrop, dragHandle].forEach(b => b?.addEventListener("click", closeDrawer));

      applyBtn?.addEventListener("click", () => {
        closeDrawer();
        showToast("✨ Applied custom Theme & Style preset!");
      });

      resetBtn?.addEventListener("click", () => {
        activeThemeId = "royal-black";
        activeStyleId = "classic-royal";
        updateActiveVisuals();
        showToast("✨ Restored to Royal Black & Antique Gold");
      });

      shareThemeBtn?.addEventListener("click", () => {
        const theme = THEMES.find(t => t.id === activeThemeId);
        const styleName = activeStyleId === 'classic-royal' ? 'Classic Royal' : (activeStyleId === 'modern-editorial' ? 'Modern Editorial' : 'Romantic Floral');
        const text = `Royal Invitation Theme Preset: ${theme?.name} (${styleName})`;
        navigator.clipboard?.writeText(text);
        showToast(`✨ Preset Copied: ${text}`);
      });

      // Toast feedback helper
      function showToast(msg) {
        const toast = document.getElementById("general-toast");
        if (toast) {
          toast.innerText = msg;
          toast.classList.remove("hidden");
          setTimeout(() => toast.classList.add("hidden"), 3000);
        }
      }

      // 3. COVER UNSEAL INTERACTION
      const openCoverBtn = document.getElementById('open-invitation-btn');
      const cover = document.getElementById('invitation-cover');
      if (openCoverBtn && cover) {
        openCoverBtn.addEventListener('click', function() {
          openCoverBtn.classList.add('scale-90', 'opacity-70');
          setTimeout(() => {
            cover.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 350);
        });
      }

      // 4. AUDIO TOGGLE (SHEHNAI SIMULATION)
      let isPlaying = true;
      const coverAudioBtn = document.getElementById('cover-audio-btn');
      const innerAudioBtn = document.getElementById('inner-audio-toggle');
      function toggleAudio() {
        isPlaying = !isPlaying;
        const iconSpan = innerAudioBtn?.querySelector('.material-symbols-outlined');
        if (iconSpan) iconSpan.innerText = isPlaying ? 'volume_up' : 'volume_off';
        showToast(isPlaying ? "Shehnai melody resumed" : "Audio muted");
      }
      coverAudioBtn?.addEventListener('click', toggleAudio);
      innerAudioBtn?.addEventListener('click', toggleAudio);

      // 5. LANGUAGE SWITCHER
      const langEn = document.getElementById('lang-en-cover');
      const langHi = document.getElementById('lang-hi-cover');
      const langInner = document.getElementById('lang-switch-inner');

      const i18n = {
        en: {
          mantra: "॥ श्री गणेशाय नमः ॥",
          eyebrow: "Royal Wedding Invitation",
          btnText: "Open Invitation",
          venue: "Deoria, Uttar Pradesh, India",
          inviteMsg: "The families cordially solicit your august presence and heartfelt blessings on the auspicious union and matrimonial solemnization of their beloved children.",
          quote: "“Two souls, one sacred journey woven in the timeless tapestry of devotion, laughter, and eternal love.”",
          countdown: "Auspicious Mahurat Countdown",
          days: "Days", hours: "Hours", mins: "Mins", secs: "Secs",
          rsvp: "RSVP via WhatsApp"
        },
        hi: {
          mantra: "॥ ॐ श्री गणेशाय नमः ॥",
          eyebrow: "शुभ विवाह आमंत्रण",
          btnText: "आमंत्रण पत्र खोलें",
          venue: "देवरिया, उत्तर प्रदेश, भारत",
          inviteMsg: "परम पिता परमात्मा की असीम अनुकंपा से हमारे सुपुत्र एवं सुपुत्री के पावन परिणय संस्कार के इस मांगलिक अवसर पर आप सादर आमंत्रित हैं।",
          quote: "“दो आत्माओं का एक पवित्र संगम, जो स्नेह, समर्पण और अनंत प्रेम के सूत्र में बंधा है।”",
          countdown: "शुभ विवाह मुहूर्त समय",
          days: "दिन", hours: "घंटे", mins: "मिनट", secs: "सेकंड",
          rsvp: "व्हाट्सएप द्वारा उत्तर दें"
        }
      };

      function setLang(lang) {
        const d = i18n[lang];
        document.getElementById('cover-ganesh-mantra').innerText = d.mantra;
        document.getElementById('cover-eyebrow').innerText = d.eyebrow;
        document.getElementById('cover-btn-text').innerText = d.btnText;
        document.getElementById('cover-venue').innerText = d.venue;
        document.getElementById('inner-invitation-message').innerText = d.inviteMsg;
        document.getElementById('inner-quote').innerText = d.quote;
        document.getElementById('countdown-label').innerText = d.countdown;
        document.getElementById('label-days').innerText = d.days;
        document.getElementById('label-hours').innerText = d.hours;
        document.getElementById('label-minutes').innerText = d.mins;
        document.getElementById('label-seconds').innerText = d.secs;
        document.getElementById('rsvp-btn-text').innerText = d.rsvp;

        if (lang === 'en') {
          langEn?.classList.add('bg-amber-400', 'text-black');
          langHi?.classList.remove('bg-amber-400', 'text-black');
          if (langInner) langInner.innerText = 'हिन्दी';
        } else {
          langHi?.classList.add('bg-amber-400', 'text-black');
          langEn?.classList.remove('bg-amber-400', 'text-black');
          if (langInner) langInner.innerText = 'English';
        }
      }

      langEn?.addEventListener('click', () => setLang('en'));
      langHi?.addEventListener('click', () => setLang('hi'));
      langInner?.addEventListener('click', () => {
        const cur = langInner.innerText === 'हिन्दी' ? 'hi' : 'en';
        setLang(cur);
      });

      // 6. LIVE COUNTDOWN TIMER (25 Nov 2026)
      const targetDate = new Date('2026-11-25T19:00:00+05:30').getTime();
      function updateTimer() {
        const diff = targetDate - new Date().getTime();
        if (diff > 0) {
          const d = Math.floor(diff / (1000 * 60 * 60 * 24));
          const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const s = Math.floor((diff % (1000 * 60)) / 1000);
          document.getElementById('timer-days').innerText = d < 10 ? '0' + d : d;
          document.getElementById('timer-hours').innerText = h < 10 ? '0' + h : h;
          document.getElementById('timer-minutes').innerText = m < 10 ? '0' + m : m;
          document.getElementById('timer-seconds').innerText = s < 10 ? '0' + s : s;
        }
      }
      updateTimer();
      setInterval(updateTimer, 1000);

      // 7. CEREMONIES DATA & MODAL (ALL 6 RITUALS)
      const ceremonies = {
        sagai: {
          title: "Sagai & Engagement",
          datetime: "Monday, 23 Nov 2026 • 6:00 PM onwards",
          venue: "Darbar Hall, Deoria Palace Grounds",
          dress: "Elegant Pastels & Royal Jodhpuri Coats",
          notes: "Sacred exchange of rings blessed by elders, followed by traditional Bhojpuri welcome songs and royal banquet.",
          icon: "favorite",
          start: "20261123T180000", end: "20261123T220000"
        },
        tilak: {
          title: "Tilak",
          datetime: "Tuesday, 24 Nov 2026 • 11:00 AM",
          venue: "Ajaypura Marwat, Pakadi, Deoria",
          dress: "Traditional Silk Kurta & Dhoti / Nehru Jackets",
          notes: "Auspicious Tilak ceremony invoking Lord Ganesha's blessings with sandalwood paste, sweets, and gift presentations.",
          icon: "verified",
          start: "20261124T110000", end: "20261124T140000"
        },
        mehendi: {
          title: "Mehendi & Sangeet",
          datetime: "Tuesday, 24 Nov 2026 • 5:30 PM",
          venue: "Indira Nagar CC Road, Deoria",
          dress: "Floral Lehengas & Festive Kurtas (Green / Floral shades)",
          notes: "Intricate Rajasthani & Arabic henna artistry, live Dholak beats, traditional wedding geet, and folk dance.",
          icon: "palette",
          start: "20261124T153000", end: "20261124T183000"
        },
        sangeet: {
          title: "Sangeet & Musical Night",
          datetime: "Tuesday, 24 Nov 2026 • 7:30 PM onwards",
          venue: "Royal Ballroom & Grand Lawns",
          dress: "Glitz, Glamour & Royal Bandhgala",
          notes: "Celebratory choreography by families, live Shehnai-Sufi band lineup, followed by grand feast.",
          icon: "nightlife",
          start: "20261124T193000", end: "20261124T235900"
        },
        haldi: {
          title: "Haldi",
          datetime: "Wednesday, 25 Nov 2026 • 10:30 AM",
          venue: "Indira Nagar CC Road, Deoria",
          dress: "Shades of Saffron & Mustard Yellow",
          notes: "Sacred turmeric and sandalwood paste application with marigold showers, traditional songs, and morning brunch.",
          icon: "flare",
          start: "20261125T093000", end: "20261125T123000"
        },
        vivah: {
          title: "Shubh Vivah",
          datetime: "Wednesday, 25 Nov 2026 • 7:00 PM (Pheras: Midnight)",
          venue: "Annapurna Marriage Lawn, CC Road, Deoria",
          dress: "Regal Royal Indian Finery & Heirloom Silks",
          notes: "Grand Baraat welcome, Varmala under the starry canopy, sacred Vedic Vivah Sanskar around Agni, and Vidai.",
          icon: "temple_hindu",
          start: "20261125T190000", end: "20261126T020000"
        }
      };

      const modal = document.getElementById('ceremony-modal');
      const modalBox = document.getElementById('ceremony-modal-box');
      let currentCeremonyKey = 'sagai';

      function openModal(key) {
        const item = ceremonies[key];
        if (!item) return;
        currentCeremonyKey = key;
        document.getElementById('modal-title').innerText = item.title;
        document.getElementById('modal-datetime').innerText = item.datetime;
        document.getElementById('modal-venue').innerText = item.venue;
        document.getElementById('modal-dress').innerText = item.dress;
        document.getElementById('modal-notes').innerText = item.notes;
        document.getElementById('modal-icon').innerText = item.icon;

        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalBox.classList.remove('scale-95');
        modalBox.classList.add('scale-100');
      }

      function closeModal() {
        modalBox.classList.remove('scale-100');
        modalBox.classList.add('scale-95');
        modal.classList.add('opacity-0', 'pointer-events-none');
      }

      document.querySelectorAll('.open-modal-btn').forEach(b => {
        b.addEventListener('click', (e) => {
          e.stopPropagation();
          openModal(b.getAttribute('data-ceremony'));
        });
      });

      document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);
      document.getElementById('modal-dismiss-btn')?.addEventListener('click', closeModal);
      modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

      document.getElementById('modal-calendar-btn')?.addEventListener('click', () => {
        const item = ceremonies[currentCeremonyKey];
        if (!item) return;
        const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Piyush & Priti: ' + item.title)}&dates=${item.start}/${item.end}&details=${encodeURIComponent(item.notes)}&location=${encodeURIComponent(item.venue + ', Deoria, UP')}`;
        window.open(gcalUrl, '_blank');
      });

      // 8. SHARE HELPERS
      document.getElementById('share-card-btn')?.addEventListener('click', () => {
        if (navigator.share) {
          navigator.share({
            title: "Piyush & Priti Wedding Invitation",
            text: "You are cordially invited to the royal wedding celebrations of Piyush & Priti on 25 November 2026 at Deoria, Uttar Pradesh.",
            url: window.location.href
          });
        } else {
          navigator.clipboard?.writeText(window.location.href);
          showToast("✨ Invitation URL copied to clipboard!");
        }
      });

      document.getElementById('venue-share-btn')?.addEventListener('click', () => {
        const venueInfo = "Rajputana Heritage Mandir & Deoria Palace Grounds, Civil Lines Estate, Deoria, Uttar Pradesh 274001";
        if (navigator.share) {
          navigator.share({ title: "Wedding Venue Location", text: venueInfo, url: "https://maps.google.com/?q=Deoria+Uttar+Pradesh" });
        } else {
          navigator.clipboard?.writeText(venueInfo);
          showToast("✨ Venue address copied!");
        }
      });

      // Initialize
      updateActiveVisuals();
    })();
