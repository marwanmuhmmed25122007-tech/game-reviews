const GAMES_DATA = [
    {
        id: "ac-origins",
        title: "Assassin's Creed: Origins",
        category: "ACTION",
        platform: "PC (Windows), PS4, Xbox",
        status: "Played",
        rating: "9.2 / 10",
        year: "2017",
        developer: "Ubisoft Montreal",
        playtime: "68 Hours",
        shortDescription: "Journey into Ancient Egypt, the most mysterious place in history, during a crucial period that will shape the world.",
        descriptionP1: "Set in majestic Ancient Egypt, Assassin's Creed: Origins is a complete reimagining of the iconic franchise. Players take on the role of Bayek of Siwa, a Medjay protector whose personal tragedy sparks the creation of the Hidden Ones (the Brotherhood of Assassins). Explore towering pyramids, vast golden dunes, vibrant oases, and the sun-drenched Mediterranean port of Alexandria in a sprawling open world.",
        descriptionP2: "Featuring a renewed action-RPG combat system, deep skill progression trees, and rich weapon crafting, Origins seamlessly blends historical authenticity with thrilling mythic quests. Battle formidable warlords, tame wild predators, and unravel conspiracies that reach the very top of Ptolemaic Egyptian and Roman politics.",
        image: "asset/images/assassins creed.webp",
    },
    {
        id: "god-of-war",
        title: "God of War",
        category: "ACTION",
        platform: "PlayStation 5, PC (Windows)",
        status: "Played",
        rating: "9.8 / 10",
        year: "2018",
        developer: "Santa Monica Studio",
        playtime: "52 Hours",
        shortDescription: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters.",
        descriptionP1: "God of War delivers a masterclass in cinematic storytelling and visceral combat. Living as a mortal man in the unforgiving Norse wilds, Kratos must master the rage that has driven him for decades while raising his young son, Atreus. Together, they embark on a deeply emotional pilgrimage to the highest peak in all the nine realms to scatter the ashes of their beloved Faye.",
        descriptionP2: "Wielding the frost-imbued Leviathan Axe and iconic Blades of Chaos, combat is intimate, weighty, and endlessly satisfying. The seamless, single-shot continuous camera cinematography pulls you into an epic mythic universe populated by fearsome trolls, dark elves, valkyries, and the vengeful Aesir gods.",
        image: "asset/images/god of war.webp",
    },
    {
        id: "uncharted-lost-legacy",
        title: "Uncharted: The Lost Legacy",
        category: "ADVENTURE",
        platform: "PlayStation 5, PC (Windows)",
        status: "Played",
        rating: "9.0 / 10",
        year: "2017",
        developer: "Naughty Dog",
        playtime: "22 Hours",
        shortDescription: "To recover an ancient artifact and keep it out of the hands of a ruthless warmonger, Chloe Frazer must enlist renowned mercenary Nadine Ross.",
        descriptionP1: "Venturing deep into India's lush Western Ghats mountain range, Uncharted: The Lost Legacy puts fan-favorite treasure hunter Chloe Frazer in the spotlight. In search of the fabled Golden Tusk of Ganesh, Chloe forms an uneasy tactical alliance with former paramilitary leader Nadine Ross to outwit a ruthless insurgent leader.",
        descriptionP2: "The game features Naughty Dog's signature blend of heart-pounding set-piece action, exhilarating vehicular exploration, intricate environmental puzzles, and rich character chemistry. From ancient Hoysala temples to runaway trains, it delivers a thrilling standalone adventure.",
        image: "asset/images/Uncharted lost.webp",
    },
    {
        id: "uncharted-4",
        title: "Uncharted 4: A Thief's End",
        category: "ADVENTURE",
        platform: "PlayStation 5, PC (Windows)",
        status: "Played",
        rating: "9.7 / 10",
        year: "2016",
        developer: "Naughty Dog",
        playtime: "36 Hours",
        shortDescription: "Several years after his last adventure, retired fortune hunter Nathan Drake is forced back into the dangerous world of thieves.",
        descriptionP1: "Nathan Drake's legendary final adventure is an emotional and technological marvel. When his long-lost brother Sam suddenly resurfaces begging for his life, Drake must leave behind his quiet domestic life with Elena for one last high-stakes globe-trotting expedition to uncover Libertalia, the mythical pirate utopia founded by Captain Henry Avery.",
        descriptionP2: "Spanning snow-covered Scottish cathedrals, sunny Italian auction houses, Madagascar mud trails, and uncharted tropical islands, Uncharted 4 combines dynamic rope-swinging traversal, stealth, and pulse-pounding firefights with unmatched narrative depth.",
        image: "asset/images/Uncharted4.webp",
    },
    {
        id: "rocket-league",
        title: "Rocket League",
        category: "SPORTS",
        platform: "PC (Windows), PS5, Xbox, Switch",
        status: "Played",
        rating: "9.3 / 10",
        year: "2015",
        developer: "Psyonix",
        playtime: "420+ Hours",
        shortDescription: "A high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid physics-driven competition.",
        descriptionP1: "Rocket League is the globally acclaimed esports phenomenon that combines rocket-powered supersonic acrobatic vehicles with the beautiful game of soccer. Players hit the pitch in futuristic neon stadiums, executing jaw-dropping aerial shots, wall-drives, ceiling pinches, and clutch goal-line saves.",
        descriptionP2: "With pure physics-based mechanics, zero pay-to-win elements, and infinite skill ceiling, every goal scored feels genuinely earned. Features cross-platform multiplayer, ranked competitive seasons, and deep vehicle customization.",
        image: "asset/images/Rocket League.webp",
    },
    {
        id: "uncharted-collection",
        title: "Uncharted: The Nathan Drake Collection",
        category: "ADVENTURE",
        platform: "PlayStation 4, PlayStation 5",
        status: "Played",
        rating: "9.4 / 10",
        year: "2015",
        developer: "Bluepoint Games / Naughty Dog",
        playtime: "75 Hours",
        shortDescription: "Experience the story of the man who risked everything in pursuit of the world's most perilous treasures across three iconic remastered campaigns.",
        descriptionP1: "This definitive remastered trilogy bundles Uncharted: Drake's Fortune, Uncharted 2: Among Thieves, and Uncharted 3: Drake's Deception into one glorious 60FPS high-definition package. Trace Nathan Drake's humble beginnings searching for El Dorado to tracking the Cintamani Stone in Shambhala and uncovering the Iram of the Pillars in the Rub' al Khali desert.",
        descriptionP2: "Featuring overhauled lighting models, upgraded textures, refined shooting mechanics, photo mode, and speedrun challenges, it stands as the ultimate tribute to one of gaming's greatest cinematic trilogies.",
        image: "asset/images/Uncharted3.webp",
    },
    {
        id: "fifa-23",
        title: "FIFA 23",
        category: "SPORTS",
        platform: "PC (Windows), PS5, Xbox Series X",
        status: "Played",
        rating: "8.6 / 10",
        year: "2022",
        developer: "EA Sports",
        playtime: "180 Hours",
        shortDescription: "Experience The World's Game on the pitch, featuring HyperMotion2 Technology, both men's and women's FIFA World Cup tournaments, and cross-play.",
        descriptionP1: "FIFA 23 brings The World's Game to life with groundbreaking HyperMotion2 technology, capturing real-life match data from professional 11v11 clashes to deliver over 6,000 true-to-football animations. Features both men's and women's FIFA World Cup tournaments and women's club football for the first time.",
        descriptionP2: "Manage your dream club in Career Mode, construct your ultimate squad in FIFA Ultimate Team (FUT) with redesigned chemistry systems, or dominate with friends in Pro Clubs and VOLTA Football with smooth cross-play support across platforms.",
        image: "asset/images/fifa23.webp",
    },
    {
        id: "minecraft",
        title: "Minecraft",
        category: "SANDBOX",
        platform: "PC, Consoles, Mobile",
        status: "Played",
        rating: "9.9 / 10",
        year: "2011",
        developer: "Mojang Studios",
        playtime: "800+ Hours",
        shortDescription: "Explore infinite randomly generated worlds and build everything from the simplest of homes to the grandest of castles in creative or survival mode.",
        descriptionP1: "Minecraft is the best-selling video game of all time, offering an infinitely expandable sandbox of voxel creativity and survival exploration. Mine rare ores deep underground, farm crops, brew potions, construct automated redstone contraptions, and venture into the treacherous Nether and End dimensions to defeat the Ender Dragon.",
        descriptionP2: "Whether you play in peaceful Creative mode building breathtaking monuments and working computers or test your wits against creepers in Hardcore Survival, Minecraft provides unparalleled freedom that continues to captivate millions across generations.",
        image: "asset/images/minecraft.webp",
    },
    {
        id: "fortnite",
        title: "Fortnite",
        category: "ACTION",
        platform: "PC (Windows), PS5, Xbox, Switch",
        status: "Played",
        rating: "8.9 / 10",
        year: "2017",
        developer: "Epic Games",
        playtime: "310 Hours",
        shortDescription: "Drop into the island, gear up with weapons and gadgets, and battle to be the last player standing in Battle Royale and Zero Build modes.",
        descriptionP1: "Fortnite is a pop-culture juggernaut and dynamic battle royale experience powered by Unreal Engine 5. Drop from the Battle Bus onto an ever-evolving island, scavenge legendary weapons, drive high-speed sports cars, and outlast 99 other players in traditional Build battles or tactical Zero Build mode.",
        descriptionP2: "Beyond Battle Royale, Fortnite hosts expansive collaborative creative universes, LEGO Fortnite survival crafting, Rocket Racing, and live in-game concerts featuring global music superstars and iconic crossovers.",
        image: "asset/images/fortnite.webp",
    },
    {
        id: "gta-v",
        title: "Grand Theft Auto V",
        category: "SANDBOX",
        platform: "PC (Windows), PS5, Xbox Series X",
        status: "Played",
        rating: "9.9 / 10",
        year: "2013",
        developer: "Rockstar North",
        playtime: "550+ Hours",
        shortDescription: "When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves in trouble, they must pull off a series of dangerous heists.",
        descriptionP1: "Grand Theft Auto V takes players inside the sun-soaked metropolis of Los Santos and the rugged desert expanses of Blaine County. Experience the intertwined lives of three distinct protagonists—Michael, Franklin, and Trevor—as they navigate the criminal underworld, corporate espionage, and high-octane multi-stage bank heists.",
        descriptionP2: "Featuring unmatched open-world detail, satirical storytelling, incredible vehicle handling, and the vast, constantly updated GTA Online multiplayer ecosystem with underground businesses, custom stunt races, and collaborative cooperative heists.",
        image: "asset/images/gta-v.webp",
    }
];

// Procedural SVG fallback image for offline or failed image requests
const FALLBACK_IMAGE = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340"%3E%3Crect width="100%25" height="100%25" fill="%23222222"/%3E%3Ctext x="50%25" y="50%25" fill="%23888888" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle" dy=".3em"%3E🎮 GAME IMAGE%3C/text%3E%3C/svg%3E';

// Application State
let currentCategory = "ALL";
let searchQuery = "";
let activeGame = null;

// DOM Elements
const gamesGrid = document.getElementById("gamesGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("searchInput");
const visibleCountText = document.getElementById("visibleCountText");
const brandReset = document.getElementById("brandReset");

// Modal DOM Elements
const gameModal = document.getElementById("gameModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalCoverImg = document.getElementById("modalCoverImg");
const modalGameTitle = document.getElementById("modalGameTitle");
const modalCategoryBadge = document.getElementById("modalCategoryBadge");
const modalPlatformBadge = document.getElementById("modalPlatformBadge");
const modalStatusBadge = document.getElementById("modalStatusBadge");
const modalDescP1 = document.getElementById("modalDescP1");
const modalDescP2 = document.getElementById("modalDescP2");
const modalRating = document.getElementById("modalRating");
const modalYear = document.getElementById("modalYear");
const modalDeveloper = document.getElementById("modalDeveloper");
const modalPlaytime = document.getElementById("modalPlaytime");
const btnShowGame = document.getElementById("btnShowGame");
const btnTrailer = document.getElementById("btnTrailer");
const monoToast = document.getElementById("monoToast");
const toastMessage = document.getElementById("toastMessage");

//  Compute and set Category counts in Navbar

function updateCategoryCounts() {
    const counts = {
        ALL: GAMES_DATA.length,
        ACTION: 0,
        ADVENTURE: 0,
        SPORTS: 0,
        SANDBOX: 0
    };

    GAMES_DATA.forEach(game => {
        if (counts[game.category] !== undefined) {
            counts[game.category]++;
        }
    });

    document.getElementById("count-all").textContent = counts.ALL;
    document.getElementById("count-action").textContent = counts.ACTION;
    document.getElementById("count-adventure").textContent = counts.ADVENTURE;
    document.getElementById("count-sports").textContent = counts.SPORTS;
    document.getElementById("count-sandbox").textContent = counts.SANDBOX;
}

// Filter the games list
function getFilteredGames() {
    return GAMES_DATA.filter(game => {
        const matchesCategory = (currentCategory === "ALL") || (game.category === currentCategory);
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = !q || (
            game.title.toLowerCase().includes(q) ||
            game.category.toLowerCase().includes(q) ||
            game.platform.toLowerCase().includes(q) ||
            game.shortDescription.toLowerCase().includes(q) ||
            (game.developer && game.developer.toLowerCase().includes(q))
        );
        return matchesCategory && matchesSearch;
    });
}

// Render the Game Cards Grid
function renderGamesGrid() {
    const filtered = getFilteredGames();
    visibleCountText.textContent = filtered.length;

    if (filtered.length === 0) {
        gamesGrid.innerHTML = `
          <div class="empty-state">
            <div class="empty-icon">🎮</div>
            <h3>No Games Found</h3>
            <p>No games matched category "${escapeHtml(currentCategory)}" or search "${escapeHtml(searchQuery)}".</p>
          </div>
        `;

        const resetBtn = document.getElementById("btnResetFilters");
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                setCategory("ALL");
                searchInput.value = "";
                searchQuery = "";
                renderGamesGrid();
            });
        }
        return;
    }

    gamesGrid.innerHTML = filtered.map(game => {
        return `
          <article 
            class="game-card" 
            data-id="${game.id}" 
            tabindex="0" 
            role="button" 
            aria-label="View details for ${escapeHtml(game.title)}"
          >
            <div class="card-thumb-frame">
              <img 
                class="card-img" 
                src="${game.image}" 
                alt="${escapeHtml(game.title)} cover" 
                loading="lazy" 
                onerror="this.onerror=null; this.src='${FALLBACK_IMAGE}';"
              />
            </div>

            <div class="card-content">
              <div class="card-title-row">
                <h3 class="card-game-title" title="${escapeHtml(game.title)}">${escapeHtml(game.title)}</h3>
                <span class="played-badge">${game.status}</span>
              </div>

              <p class="card-desc-truncated">${escapeHtml(game.shortDescription)}</p>

              <div class="card-footer-meta">
                <span class="genre-label">${escapeHtml(game.category)}</span>
                <span class="platform-label" title="${escapeHtml(game.platform)}">${escapeHtml(game.platform)}</span>
              </div>
            </div>
          </article>
        `;
    }).join("");

    // Bind Click & Keyboard Listeners to Cards
    const cardElements = gamesGrid.querySelectorAll(".game-card");
    cardElements.forEach(card => {
        const gameId = card.getAttribute("data-id");
        const game = GAMES_DATA.find(g => g.id === gameId);

        card.addEventListener("click", () => openModal(game));
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(game);
            }
        });
    });
}

// Switch Active Category
function setCategory(category) {
    currentCategory = category;
    filterButtons.forEach(btn => {
        if (btn.getAttribute("data-category") === category) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    renderGamesGrid();
}

// Open Details Modal with Selected Game Data
function openModal(game) {
    if (!game) return;
    activeGame = game;

    modalCoverImg.src = game.image;
    modalCoverImg.alt = game.title + " Artwork";
    modalCoverImg.onerror = function () {
        this.onerror = null;
        this.src = FALLBACK_IMAGE;
    };

    modalGameTitle.textContent = `Title: ${game.title}`;
    modalCategoryBadge.textContent = game.category;
    modalPlatformBadge.textContent = game.platform.split(',')[0];
    modalStatusBadge.textContent = game.status;

    modalRating.textContent = game.rating;
    modalYear.textContent = game.year || "2020";
    modalDeveloper.textContent = game.developer || "Studio";
    modalPlaytime.textContent = game.playtime || "40+ Hours";

    modalDescP1.textContent = game.descriptionP1;
    modalDescP2.textContent = game.descriptionP2;

    gameModal.classList.add("active");
    document.body.style.overflow = "hidden";
    closeModalBtn.focus();
}

// Close Details Modal
function closeModal() {
    gameModal.classList.remove("active");
    document.body.style.overflow = "";
    activeGame = null;
}

// Show Toast Feedback
let toastTimeout = null;
function showToast(msg) {
    toastMessage.textContent = msg;
    monoToast.classList.add("show");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        monoToast.classList.remove("show");
    }, 3200);
}

// Utility: Escape HTML
function escapeHtml(str) {
    if (!str) return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// EVENT LISTENERS & INITIALIZATION

// Category button clicks
filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-category");
        setCategory(cat);
    });
});

// Reset when clicking logo
brandReset.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.value = "";
    searchQuery = "";
    setCategory("ALL");
});

// Search input
searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderGamesGrid();
});

// Modal Close
closeModalBtn.addEventListener("click", closeModal);

gameModal.addEventListener("click", (e) => {
    if (e.target === gameModal) {
        closeModal();
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && gameModal.classList.contains("active")) {
        closeModal();
    }
});


updateCategoryCounts();
renderGamesGrid();
