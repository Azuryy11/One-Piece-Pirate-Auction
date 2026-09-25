      const DEFAULT_CHARACTERS = [
        "Gol D. Roger",
        "Barbe Blanche",
        "Kaido",
        "Big Mom",
        "Shanks",
        "Barbe Noire",
        "Dragon",
        "Garp",
        "Rayleigh",
        "Sengoku",
        "Akainu",
        "Kizaru",
        "Aokiji",
        "Mihawk",
        "Im-sama",
        "Luffy",
        "Zoro",
        "Sanji",
        "Law",
        "Kid",
        "Boa Hancock",
        "Jinbe",
        "Rob Lucci",
        "Katakuri",
        "Marco",
        "Nami",
        "Usopp",
        "Robin",
        "Franky",
        "Brook",
        "Chopper",
        "Ace",
        "Smoker",
        "Tashigi",
        "Crocodile",
        "Doflamingo",
        "Vivi",
        "Bartolomeo",
        "Killer",
        "Hawkins",
        "Coby",
        "Helmeppo",
        "Buggy",
        "Spandam",
        "Absalom",
        "Wapol",
        "Foxy",
        "Bell-mère",
        "Duval",
        "Gan Fall",
      ];
      const AVATAR_EMOJI = {
        "gol d. roger": "👑",
        "barbe blanche": "🌊",
        kaido: "🐉",
        "big mom": "🍰",
        shanks: "⚓",
        "barbe noire": "🌑",
        dragon: "🌪️",
        garp: "👊",
        rayleigh: "🕶️",
        sengoku: "⚔️",
        akainu: "🌋",
        kizaru: "⚡",
        aokiji: "❄️",
        mihawk: "🦅",
        "im-sama": "👁️",
        luffy: "👒",
        zoro: "⚔️",
        sanji: "🍳",
        law: "💊",
        kid: "🧲",
        "boa hancock": "💗",
        jinbe: "🐟",
        "rob lucci": "🐆",
        katakuri: "🍩",
        marco: "🔥",
        nami: "🍊",
        usopp: "🎯",
        robin: "📖",
        franky: "🤖",
        brook: "💀",
        chopper: "🦌",
        ace: "🔥",
        smoker: "💨",
        tashigi: "🗡️",
        crocodile: "🐊",
        doflamingo: "🩸",
        vivi: "🏺",
        bartolomeo: "🛡️",
        killer: "🔪",
        hawkins: "🃏",
        coby: "😰",
        helmeppo: "🙃",
        buggy: "🤡",
        spandam: "🐶",
        absalom: "👻",
        wapol: "🐗",
        foxy: "🦊",
        "bell-mère": "🍊",
        duval: "🐎",
        "gan fall": "🕊️",
      };

      // Note /100 calibrée à la main selon les exploits canon (+ théories pour les cas non tranchés), pas une moyenne de sous-stats
      const CHARACTER_RATING = {
        "gol d. roger": {
          score: 100,
          note: "Seul homme à avoir atteint Laugh Tale. Le Haki le plus fort jamais décrit.",
        },
        "im-sama": {
          score: 100,
          note: "Dirige les Gorosei dans l'ombre depuis le Vide du Siècle. Puissance théorique maximale.",
        },
        "barbe blanche": {
          score: 98,
          note: "Homme le plus fort du monde pendant des décennies, tremblements capables de fissurer le monde.",
        },
        kaido: {
          score: 97,
          note: "'Créature la plus forte', a survécu à toutes les exécutions et chutes.",
        },
        "big mom": {
          score: 96,
          note: "Âme-fruit, alliance de flottes, a résisté à Kaido en duel direct.",
        },
        shanks: {
          score: 95,
          note: "A stoppé Kaido et Barbe Blanche d'un seul geste de Haki, un seul bras.",
        },
        mihawk: {
          score: 92,
          note: "Le plus grand épéiste du monde, invaincu au sabre pendant des années.",
        },
        "barbe noire": {
          score: 91,
          note: "Seul à posséder deux fruits du démon, a vaincu Ace puis Barbe Blanche.",
        },
        dragon: {
          score: 90,
          note: "Chef des Révolutionnaires, contrôle le climat ; force jamais montrée en entier (théorie).",
        },
        akainu: {
          score: 89,
          note: "Devenu Amiral en Chef, a vaincu Ace et Barbe Blanche à Marineford.",
        },
        garp: { score: 88, note: "A tenu tête à Roger et Kaido, Haki légendaire malgré son âge." },
        luffy: {
          score: 88,
          note: "Éveil du Gear 5 / Joy Boy, bat Kaido en duel — top mondial actuel.",
        },
        kizaru: {
          score: 87,
          note: "Amiral, vitesse lumière, a mis en difficulté Rayleigh et Marco combinés.",
        },
        aokiji: {
          score: 86,
          note: "Ex-Amiral, a combattu Akainu 10 jours d'affilée sans vainqueur clair.",
        },
        rayleigh: {
          score: 85,
          note: "Ex-bras droit de Roger, tient tête à Kizaru même affaibli par l'âge.",
        },
        zoro: {
          score: 84,
          note: "Nouveau plus grand épéiste, a coupé un dragon céleste (Kaido) en duel.",
        },
        sengoku: {
          score: 83,
          note: "Ex-Amiral en Chef, capable de rivaliser avec Barbe Blanche en Bouddha.",
        },
        marco: {
          score: 82,
          note: "1er commandant de Barbe Blanche, régénération quasi infinie du Phénix.",
        },
        katakuri: {
          score: 81,
          note: "Commandant des Sweet Commanders, a poussé Luffy à activer le Gear 4 Snakeman.",
        },
        ace: {
          score: 78,
          note: "2e commandant de Barbe Blanche, a tenu tête à Barbe Noire puis capturé par 3 Amiraux.",
        },
        doflamingo: {
          score: 76,
          note: "Ex-Shichibukai, a dominé Law et tenu Marine + Marines réunis à Dressrosa.",
        },
        sanji: {
          score: 74,
          note: "Raid Suit + Ifrit Jambe, combat à égalité avec des commandants Big Mom.",
        },
        "rob lucci": {
          score: 73,
          note: "Éveil de fruit + CP0, a mis Luffy en grande difficulté à Enies Lobby et Egghead.",
        },
        law: {
          score: 71,
          note: "Ex-Shichibukai, pouvoir Ope Ope capable de tuer un empereur en théorie.",
        },
        jinbe: {
          score: 69,
          note: "Ex-Shichibukai, Karateka-pêcheur, membre officiel de l'équipage de Luffy.",
        },
        kid: {
          score: 68,
          note: "Nouvel empereur autoproclamé après la chute de Kaido, fruit du magnétisme.",
        },
        "boa hancock": {
          score: 66,
          note: "Ex-Shichibukai, Pétrification par le regard, impératrice des Kuja.",
        },
        killer: {
          score: 58,
          note: "Bras droit de Kid, combats rapprochés à la faux, a affronté Big Mom.",
        },
        crocodile: {
          score: 60,
          note: "Ex-Shichibukai mais battu deux fois par Luffy à Alabasta — solide, pas top tier.",
        },
        hawkins: {
          score: 52,
          note: "Capacité de prédiction et de transfert de dégâts, ex-Supernova.",
        },
        bartolomeo: {
          score: 44,
          note: "Barrière incassable, mais surtout doué en défense, peu de victoires offensives.",
        },
        smoker: {
          score: 47,
          note: "Marine gradé, fruit de la fumée, a souvent été semé plus que vaincu ses cibles.",
        },
        absalom: {
          score: 33,
          note: "Fruit de l'invisibilité, vaincu assez facilement par Franky/Sanji à Thriller Bark.",
        },
        "gan fall": {
          score: 32,
          note: "Ex-chevalier du ciel, affaibli par l'âge mais expérimenté.",
        },
        franky: {
          score: 45,
          note: "Cyborg, upgrades constants, combat à niveau correct contre des officiers ennemis.",
        },
        brook: {
          score: 42,
          note: "Épéiste-squelette, Soul Solid, plus utile en soutien qu'en frappe pure.",
        },
        robin: {
          score: 40,
          note: "Fruit Hana Hana très polyvalent, mais profil peu axé combat direct.",
        },
        tashigi: {
          score: 26,
          note: "Marine compétente à l'épée mais nettement sous le niveau des grands noms.",
        },
        foxy: {
          score: 24,
          note: "Fruit comique (ralentissement), quasiment aucune victoire de combat sérieuse.",
        },
        duval: { score: 23, note: "Combattant correct mais anecdotique à l'échelle de la saga." },
        chopper: {
          score: 29,
          note: "Rumble Ball et transformations, davantage médecin que combattant lourd.",
        },
        usopp: {
          score: 22,
          note: "Sniper ingénieux, gagne en tactique ce qu'il n'a pas en force brute.",
        },
        buggy: {
          score: 20,
          note: "Devenu Empereur par les circonstances et son réseau, pas par sa force réelle.",
        },
        wapol: {
          score: 14,
          note: "Fruit qui avale des objets, mais lâche et vaincu très facilement.",
        },
        nami: {
          score: 19,
          note: "Navigatrice et Clima-Tact, profil support plutôt que combattante lourde.",
        },
        vivi: {
          score: 11,
          note: "Princesse stratège, aucune vocation ni aptitude au combat direct.",
        },
        "bell-mère": {
          score: 10,
          note: "Civile courageuse, aucune capacité de combat, héroïsme purement humain.",
        },
        coby: {
          score: 16,
          note: "S'entraîne sous Garp, progresse vite mais reste débutant face aux ténors.",
        },
        helmeppo: { score: 6, note: "Fils à papa sans talent martial notable, comic relief pur." },
        spandam: {
          score: 5,
          note: "Bureaucrate lâche et incompétent au combat, dépend toujours des autres.",
        },
      };

      function ratingFor(name) {
        const key = (name || "").trim().toLowerCase();
        if (CHARACTER_RATING[key]) return CHARACTER_RATING[key];
        let h = 0;
        for (let i = 0; i < key.length; i++) {
          h = key.charCodeAt(i) + ((h << 5) - h);
        }
        h = Math.abs(h);
        const score = 15 + (h % 76); // 15-90, personnage personnalisé
        return {
          score,
          note: "Personnage personnalisé — force estimée, ajuste-la toi-même si besoin.",
        };
      }

      function gradeInfo(score) {
        if (score >= 95) return { txt: "🔥 Légendaire", cls: "grade-s" };
        if (score >= 80) return { txt: "⭐ Élite", cls: "grade-a" };
        if (score >= 60) return { txt: "✅ Solide", cls: "grade-b" };
        if (score >= 35) return { txt: "➖ Moyen", cls: "grade-c" };
        return { txt: "💤 Faible", cls: "grade-d" };
      }

      function statsHtml(name) {
        const r = ratingFor(name);
        const g = gradeInfo(r.score);
        return `<div class="score-big">${r.score}<span class="score-max">/100</span></div>
    <div><span class="grade-badge ${g.cls}">${g.txt}</span></div>
    <div class="feat-note">${r.note}</div>`;
      }

      function teamPower(cards) {
        if (!cards.length) return "0";
        const avg = cards.reduce((sum, c) => sum + ratingFor(c.name).score, 0) / cards.length;
        return avg.toFixed(1);
      }

      function fmt(n) {
        return Number(n).toLocaleString("fr-FR") + " €";
      }

      function randId() {
        return Math.random().toString(36).slice(2, 8).toUpperCase();
      }

      function hueOf(s) {
        let h = 0;
        for (let i = 0; i < s.length; i++) {
          h = s.charCodeAt(i) + ((h << 5) - h);
        }
        return Math.abs(h) % 360;
      }

      function avatarHtml(name, size) {
        const key = (name || "").trim().toLowerCase();
        const hue = hueOf(key);
        const emoji = AVATAR_EMOJI[key];
        const content = emoji || name.trim().charAt(0).toUpperCase() || "?";
        const style = `background:hsl(${hue},70%,90%); border:2px solid hsl(${hue},60%,55%); color:hsl(${hue},55%,28%);`;
        return `<div class="avatar avatar-${size}" style="${style}">${content}</div>`;
      }

      function b64Encode(obj) {
        const json = JSON.stringify(obj);
        return btoa(unescape(encodeURIComponent(json)))
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=+$/, "");
      }

      function b64Decode(str) {
        str = str.replace(/-/g, "+").replace(/_/g, "/");
        while (str.length % 4) str += "=";
        return JSON.parse(decodeURIComponent(escape(atob(str))));
      }

      function readStateFromHash() {
        const m = location.hash.match(/s=([^&]+)/);
        if (!m) return null;
        try {
          return b64Decode(m[1]);
        } catch (e) {
          return null;
        }
      }

      function readGidFromHash() {
        const m = location.hash.match(/g=([^&]+)/);
        return m ? m[1] : null;
      }

      function pageUrl() {
        return location.origin + location.pathname;
      }

      function linkFor(st) {
        if (st && st.mode === "online") return pageUrl() + "#g=" + st.gid;
        return pageUrl() + "#s=" + b64Encode(st);
      }

      // Firebase Realtime Database : partage l'état de la partie en ligne entre tous les joueurs
      const firebaseConfig = {
        apiKey: "AIzaSyAU-npJRhgAYfbNsGLRqSoni87IGEPlvbg",
        authDomain: "one-piece-pirate-auction.firebaseapp.com",
        databaseURL: "https://one-piece-pirate-auction-default-rtdb.europe-west1.firebasedatabase.app/",
        projectId: "one-piece-pirate-auction",
        storageBucket: "one-piece-pirate-auction.firebasestorage.app",
        messagingSenderId: "97794235250",
        appId: "1:97794235250:web:3dd336051b11219f421beb",
      };
      firebase.initializeApp(firebaseConfig);
      const db = firebase.database();
      let onlineListenerGid = null;

      // Firebase supprime silencieusement les tableaux vides ([]) et les valeurs null en écriture :
      // on reconstruit ces champs par défaut à la lecture pour ne pas planter le rendu.
      function normalizeGameState(st) {
        if (!st) return null;
        const bidding = st.bidding
          ? {
              turnIdx: st.bidding.turnIdx,
              highestIdx: st.bidding.highestIdx === undefined ? null : st.bidding.highestIdx,
              highestAmount: st.bidding.highestAmount || 0,
              passed: st.bidding.passed || [],
              mandatory: !!st.bidding.mandatory,
              deadline: st.bidding.deadline || null,
            }
          : null;
        return {
          ...st,
          deck: st.deck || [],
          discard: st.discard || [],
          history: st.history || [],
          players: (st.players || []).map((p) => ({ ...p, cards: p.cards || [] })),
          bidding,
          lastResult: st.lastResult === undefined ? null : st.lastResult,
        };
      }

      function ensureOnlineListener(gid) {
        if (onlineListenerGid === gid) return;
        if (onlineListenerGid) db.ref("games/" + onlineListenerGid).off();
        onlineListenerGid = gid;
        db.ref("games/" + gid).on("value", (snap) => {
          onlineLoading = false;
          gameState = normalizeGameState(snap.val());
          render();
        });
      }

      function stopOnlineListener() {
        if (onlineListenerGid) db.ref("games/" + onlineListenerGid).off();
        onlineListenerGid = null;
        onlineLoading = false;
      }

      function lsKeyMe(gid) {
        return "bidgame_me_" + gid;
      }

      function getMyIdx(gid) {
        let v;
        try {
          v = localStorage.getItem(lsKeyMe(gid));
        } catch (e) {
          v = null;
        }
        return v === null || v === undefined ? null : Number(v);
      }

      function setMyIdx(gid, idx) {
        try {
          localStorage.setItem(lsKeyMe(gid), String(idx));
        } catch (e) {}
      }

      function secretKey(gid, round) {
        return "bidgame_secret_" + gid + "_" + round;
      }

      function saveSecret(gid, round, card) {
        try {
          localStorage.setItem(secretKey(gid, round), card);
        } catch (e) {}
      }

      function loadSecret(gid, round) {
        try {
          return localStorage.getItem(secretKey(gid, round));
        } catch (e) {
          return null;
        }
      }

      let onlineGid = readGidFromHash();
      let onlineLoading = !!onlineGid;
      let gameState = onlineGid ? null : readStateFromHash();
      let draft = {
        mode: null,
        players: [],
        budget: 500000000,
        bidStep: 10000000,
        maxCards: 6,
        deck: [...DEFAULT_CHARACTERS],
        newPlayerName: "",
        hostName: "",
      };
      let uiPhase = "idle"; // idle | drawing | revealed
      let pendingCard = null;
      let drawTimer = null;
      let bidCountdownTimer = null;
      let localGatePassed = null; // gate key already confirmed in local pass-and-play mode
      let historyOpen = false;
      let bidConfirm = null; // pending amount awaiting confirmation
      let confettiShown = false;
      let deckSuggestOpen = false; // affiche toutes les suggestions de personnages au lieu d'un aperçu réduit
      let lobbyJoinName = ""; // pseudo en cours de saisie en salle d'attente, préservé entre les re-renders (autre joueur qui rejoint)

      function updateState(newState) {
        gameState = newState;
        if (newState && newState.mode === "online") {
          history.replaceState(null, "", "#g=" + newState.gid);
          ensureOnlineListener(newState.gid);
          db.ref("games/" + newState.gid).set(newState);
        } else {
          history.replaceState(null, "", "#s=" + b64Encode(newState));
        }
        render();
      }

      function copyLink() {
        const link = linkFor(gameState);
        const finish = () => {
          const b = document.getElementById("copyBtn");
          if (b) {
            const old = b.textContent;
            b.textContent = "✅ Lien copié !";
            setTimeout(() => {
              b.textContent = old;
            }, 1600);
          }
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(link)
            .then(finish)
            .catch(() => {
              prompt("Copie ce lien :", link);
            });
        } else {
          prompt("Copie ce lien :", link);
        }
      }

      function findNextBidder(players, fromIdx, highestIdx, passed, maxCards) {
        const n = players.length;
        for (let step = 1; step <= n; step++) {
          const idx = (fromIdx + step) % n;
          if (idx === highestIdx) continue;
          if (passed.includes(idx)) continue;
          if (players[idx].cards.length >= maxCards) continue;
          return idx;
        }
        return -1;
      }

      function render() {
        // Vider app.innerHTML fait s'effondrer la hauteur de la page et le navigateur remet le scroll à 0 :
        // on mémorise la position et on la restaure une fois le contenu reconstruit.
        const scrollY = window.scrollY;
        renderInner();
        window.scrollTo(0, scrollY);
      }

      function renderInner() {
        const app = document.getElementById("app");
        app.innerHTML = "";
        app.classList.remove("fade-in");
        void app.offsetWidth;
        app.classList.add("fade-in");
        const hero = document.createElement("div");
        hero.className = "hero";
        hero.innerHTML = `<h1><img src="assets/logo.png" alt="Logo" class="hero-logo" /> Enchères à l'Aveugle</h1><div class="rope"></div><div class="sub">Tire une carte, mise à la hausse, remporte les personnages</div>`;
        app.appendChild(hero);

        if (onlineLoading) {
          const card = document.createElement("div");
          card.className = "card center";
          card.innerHTML = `<p class="muted" style="margin:0;">⏳ Connexion à la partie...</p>`;
          app.appendChild(card);
          return;
        }

        if (!gameState) {
          if (!draft.mode) renderHomeChoice(app);
          else if (draft.mode === "local") renderLocalSetup(app);
          else renderOnlineSetup(app);
          return;
        }

        if (gameState.phase !== "end") {
          const abandon = document.createElement("button");
          abandon.className = "backlink";
          abandon.textContent = "🏳️ Abandonner et revenir à l'accueil";
          abandon.onclick = () => {
            if (
              confirm(
                "Quitter cette partie ? Elle sera perdue pour toi si tu n'as pas gardé le lien.",
              )
            ) {
              confettiShown = false;
              stopOnlineListener();
              gameState = null;
              draft = {
                mode: null,
                players: [],
                budget: 500000000,
                bidStep: 10000000,
                maxCards: 6,
                deck: [...DEFAULT_CHARACTERS],
                newPlayerName: "",
                hostName: "",
              };
              history.replaceState(null, "", pageUrl());
              render();
            }
          };
          app.appendChild(abandon);
        }

        if (gameState.mode === "online") {
          const gid = gameState.gid;
          const myIdx = getMyIdx(gid);
          if (gameState.phase === "lobby") {
            renderOnlineLobby(app, myIdx);
            return;
          }
          if (myIdx === null) {
            renderPicker(app);
            return;
          }
          renderTopBanner(app);
          dispatchPhase(app, myIdx);
        } else {
          renderTopBanner(app);
          if (gameState.phase === "end") {
            dispatchPhase(app, null);
            return;
          }
          const activeIdx =
            gameState.phase === "bidding" ? gameState.bidding.turnIdx : gameState.drawerIdx;
          const gateKey = JSON.stringify({
            p: gameState.phase,
            i: activeIdx,
            r: gameState.round,
            h: gameState.bidding ? gameState.bidding.highestAmount : 0,
            pl: gameState.bidding ? gameState.bidding.passed.length : 0,
          });
          if (localGatePassed !== gateKey) {
            renderPassGate(app, activeIdx, gateKey);
            return;
          }
          dispatchPhase(app, activeIdx);
        }
      }

      function dispatchPhase(app, myIdx) {
        if (gameState.phase !== "bidding" && bidCountdownTimer) {
          clearInterval(bidCountdownTimer);
          bidCountdownTimer = null;
        }
        if (gameState.phase === "draw") renderDraw(app, myIdx);
        else if (gameState.phase === "bidding") renderBidding(app, myIdx);
        else if (gameState.phase === "reveal_pending") renderReveal(app, myIdx);
        else if (gameState.phase === "end") renderEnd(app);
      }

      function renderPassGate(app, activeIdx, gateKey) {
        const p = gameState.players[activeIdx];
        const card = document.createElement("div");
        card.className = "card gate center";
        card.innerHTML = `${avatarHtml(p.name, "lg")}<p class="muted" style="margin:0 0 6px;">Passe l'appareil à</p><div class="turn-header"><div class="who" style="margin:0;">${p.name}</div></div>`;
        const btn = document.createElement("button");
        btn.textContent = "📱 C'est bon, j'ai l'écran";
        btn.onclick = () => {
          localGatePassed = gateKey;
          render();
        };
        card.appendChild(btn);
        app.appendChild(card);
      }

      function renderHomeChoice(app) {
        const howto = document.createElement("div");
        howto.className = "howto";
        howto.innerHTML = `
    <div class="stepitem"><div class="ico">🎴</div><div class="lbl">Tirer</div></div>
    <div class="arrow">→</div>
    <div class="stepitem"><div class="ico">💰</div><div class="lbl">Miser</div></div>
    <div class="arrow">→</div>
    <div class="stepitem"><div class="ico">🏆</div><div class="lbl">Collectionner</div></div>`;
        app.appendChild(howto);

        const b1 = document.createElement("button");
        b1.className = "choice";
        b1.innerHTML = `<span class="emoji">🛋️</span><span class="txt"><div class="ttl">Partie en local</div><div class="dsc">Sur le même écran, chacun écrit son pseudo</div></span>`;
        b1.onclick = () => {
          draft.mode = "local";
          draft.players = [];
          render();
        };
        app.appendChild(b1);

        const b2 = document.createElement("button");
        b2.className = "choice";
        b2.style.background = "linear-gradient(135deg,var(--panel2),var(--panel))";
        b2.style.color = "var(--text)";
        b2.style.border = "1px solid var(--border)";
        b2.style.boxShadow = "var(--shadow)";
        b2.innerHTML = `<span class="emoji">🌐</span><span class="txt"><div class="ttl">Partie en ligne</div><div class="dsc">Chacun sur son PC, via un lien à partager</div></span>`;
        b2.onclick = () => {
          draft.mode = "online";
          draft.hostName = "";
          render();
        };
        app.appendChild(b2);
      }

      function renderSettingsFields(card) {
        const grid = document.createElement("div");
        grid.className = "settings-grid";
        grid.innerHTML = `
    <div class="full"><label>💰 Budget de départ</label></div>
    <div class="full" id="budgetSlot"></div>
    <div><label>📈 Palier de mise</label></div>
    <div><label>🃏 Max / joueur</label></div>
    <div id="stepSlot"></div>
    <div id="maxSlot"></div>
  `;
        card.appendChild(grid);
        const budgetInput = document.createElement("input");
        budgetInput.type = "number";
        budgetInput.value = draft.budget;
        budgetInput.oninput = (e) => (draft.budget = Number(e.target.value) || 0);
        grid.querySelector("#budgetSlot").appendChild(budgetInput);

        const stepInput = document.createElement("input");
        stepInput.type = "number";
        stepInput.value = draft.bidStep;
        stepInput.oninput = (e) => (draft.bidStep = Number(e.target.value) || 0);
        grid.querySelector("#stepSlot").appendChild(stepInput);

        const maxInput = document.createElement("input");
        maxInput.type = "number";
        maxInput.value = draft.maxCards;
        maxInput.oninput = (e) => (draft.maxCards = Number(e.target.value) || 1);
        grid.querySelector("#maxSlot").appendChild(maxInput);

        const stepNote = document.createElement("div");
        stepNote.className = "muted";
        stepNote.style.marginTop = "8px";
        stepNote.textContent =
          "Le tireur mise au moins ce montant, toute surenchère est un multiple de ce palier.";
        card.appendChild(stepNote);
      }

      function renderDeckEditor(app) {
        const card3 = document.createElement("div");
        card3.className = "card";
        card3.innerHTML = `<label>🎴 Personnages en jeu (${draft.deck.length})</label>`;
        const clist = document.createElement("div");
        draft.deck.forEach((c, i) => {
          const item = document.createElement("div");
          item.className = "list-item";
          const r = ratingFor(c);
          item.innerHTML = `<span style="display:flex;align-items:center;gap:8px;">${avatarHtml(c, "sm")}${c} <span class="pill">${r.score}/100</span></span>`;
          const del = document.createElement("button");
          del.textContent = "×";
          del.className = "small secondary";
          del.onclick = () => {
            draft.deck.splice(i, 1);
            render();
          };
          item.appendChild(del);
          clist.appendChild(item);
        });
        card3.appendChild(clist);

        const deckKeys = new Set(draft.deck.map((c) => c.trim().toLowerCase()));
        const suggestions = DEFAULT_CHARACTERS.filter((name) => !deckKeys.has(name.toLowerCase()));
        const PREVIEW_COUNT = 4;
        if (suggestions.length) {
          const suggWrap = document.createElement("div");
          suggWrap.style.marginTop = "12px";
          const suggLabel = document.createElement("div");
          suggLabel.className = "muted";
          suggLabel.style.fontSize = "0.8rem";
          suggLabel.style.marginBottom = "6px";
          suggLabel.textContent = `💡 Suggestions à ajouter (${suggestions.length}) :`;
          suggWrap.appendChild(suggLabel);
          const chipsRow = document.createElement("div");
          chipsRow.style.display = "flex";
          chipsRow.style.flexWrap = "wrap";
          chipsRow.style.gap = "6px";
          const shown = deckSuggestOpen ? suggestions : suggestions.slice(0, PREVIEW_COUNT);
          shown.forEach((name) => {
            const chip = document.createElement("button");
            chip.type = "button";
            chip.className = "small secondary";
            chip.innerHTML = `${avatarHtml(name, "sm")} ${name}`;
            chip.style.display = "flex";
            chip.style.alignItems = "center";
            chip.style.gap = "6px";
            chip.onclick = () => {
              draft.deck.push(name);
              render();
            };
            chipsRow.appendChild(chip);
          });
          suggWrap.appendChild(chipsRow);
          if (suggestions.length > PREVIEW_COUNT) {
            const toggle = document.createElement("button");
            toggle.type = "button";
            toggle.className = "ghost";
            toggle.textContent = deckSuggestOpen
              ? "▲ Réduire"
              : `▼ Voir les ${suggestions.length - PREVIEW_COUNT} autres`;
            toggle.onclick = () => {
              deckSuggestOpen = !deckSuggestOpen;
              render();
            };
            suggWrap.appendChild(toggle);
          }
          card3.appendChild(suggWrap);
        }

        app.appendChild(card3);
      }


      const PRESETS = {
        rapide: {
          label: "⚡ Partie rapide",
          budget: 200000000,
          bidStep: 20000000,
          maxCards: 3,
          deck: [
            "Luffy",
            "Zoro",
            "Nami",
            "Usopp",
            "Sanji",
            "Ace",
            "Shanks",
            "Crocodile",
            "Buggy",
            "Smoker",
            "Robin",
            "Chopper",
            "Law",
            "Kid",
            "Boa Hancock",
          ],
        },
        complete: {
          label: "🏆 Partie complète",
          budget: 500000000,
          bidStep: 10000000,
          maxCards: 6,
          deck: [...DEFAULT_CHARACTERS],
        },
        duel: {
          label: "🎯 Duel intense",
          budget: 800000000,
          bidStep: 25000000,
          maxCards: 4,
          deck: [
            "Gol D. Roger",
            "Barbe Blanche",
            "Kaido",
            "Big Mom",
            "Shanks",
            "Barbe Noire",
            "Mihawk",
            "Luffy",
            "Zoro",
            "Akainu",
            "Garp",
            "Rayleigh",
            "Dragon",
            "Katakuri",
          ],
        },
      };

      function renderPresetRow(app) {
        const wrap = document.createElement("div");
        wrap.className = "card";
        wrap.innerHTML = `<label style="margin-top:0;">⚙️ Préréglages rapides</label>`;
        const row = document.createElement("div");
        row.className = "grid3";
        Object.entries(PRESETS).forEach(([key, p]) => {
          const b = document.createElement("button");
          b.className = "secondary";
          b.style.fontSize = ".78rem";
          b.textContent = p.label;
          b.onclick = () => {
            draft.budget = p.budget;
            draft.bidStep = p.bidStep;
            draft.maxCards = p.maxCards;
            draft.deck = [...p.deck];
            render();
          };
          row.appendChild(b);
        });
        wrap.appendChild(row);
        const note = document.createElement("div");
        note.className = "muted";
        note.style.marginTop = "8px";
        note.textContent = "Applique un préréglage puis modifie librement les champs si besoin.";
        wrap.appendChild(note);
        app.appendChild(wrap);
      }

      function backButton(app) {
        const b = document.createElement("button");
        b.className = "backlink";
        b.textContent = "← Retour à l'accueil";
        b.onclick = () => {
          draft.mode = null;
          render();
        };
        app.appendChild(b);
      }

      function renderLocalSetup(app) {
        backButton(app);
        renderPresetRow(app);
        const card = document.createElement("div");
        card.className = "card";
        renderSettingsFields(card);
        app.appendChild(card);

        const card2 = document.createElement("div");
        card2.className = "card";
        card2.innerHTML = `<label>👥 Joueurs (le premier commence)</label>`;
        const plist = document.createElement("div");
        draft.players.forEach((p, i) => {
          const item = document.createElement("div");
          item.className = "list-item";
          item.innerHTML = `<span style="display:flex;align-items:center;gap:8px;">${avatarHtml(p, "sm")}${p}</span>`;
          const del = document.createElement("button");
          del.textContent = "Retirer";
          del.className = "small secondary";
          del.onclick = () => {
            draft.players.splice(i, 1);
            render();
          };
          item.appendChild(del);
          plist.appendChild(item);
        });
        card2.appendChild(plist);
        const row = document.createElement("div");
        row.className = "row";
        row.style.marginTop = "10px";
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "Pseudo du joueur";
        nameInput.value = draft.newPlayerName;
        nameInput.oninput = (e) => (draft.newPlayerName = e.target.value);
        nameInput.onkeydown = (e) => {
          if (e.key === "Enter") addPlayer();
        };
        const addBtn = document.createElement("button");
        addBtn.textContent = "+";
        addBtn.className = "small";
        addBtn.style.width = "46px";
        addBtn.onclick = addPlayer;
        row.appendChild(nameInput);
        row.appendChild(addBtn);
        card2.appendChild(row);
        app.appendChild(card2);

        function addPlayer() {
          const n = draft.newPlayerName.trim();
          if (!n) return;
          if (draft.players.some((p) => p.toLowerCase() === n.toLowerCase())) {
            alert("Ce pseudo est déjà pris dans cette partie.");
            return;
          }
          draft.players.push(n);
          draft.newPlayerName = "";
          render();
        }

        renderDeckEditor(app);

        const startBtn = document.createElement("button");
        startBtn.textContent = "🚀 Démarrer la partie";
        app.appendChild(startBtn);
        const warn = document.createElement("div");
        warn.className = "warn center";
        warn.style.marginTop = "8px";
        app.appendChild(warn);

        function checkValidity() {
          const missing = [];
          if (draft.players.length < 2) missing.push("au moins 2 joueurs");
          if (draft.deck.length < 1) missing.push("au moins 1 personnage");
          if (!(draft.budget > 0)) missing.push("un budget > 0");
          if (!(draft.bidStep > 0)) missing.push("un palier de mise > 0");
          startBtn.style.opacity = missing.length ? ".5" : "1";
          warn.textContent = missing.length ? "Il manque : " + missing.join(", ") + "." : "";
          return missing.length === 0;
        }
        const numberInputs = card.querySelectorAll("input[type=number]");
        numberInputs.forEach((inp) => {
          const prev = inp.oninput;
          inp.oninput = (e) => {
            prev(e);
            checkValidity();
          };
        });
        checkValidity();

        startBtn.onclick = () => {
          if (!checkValidity()) return;
          localGatePassed = null;
          const newState = {
            gid: randId(),
            mode: "local",
            settings: { budget: draft.budget, bidStep: draft.bidStep, maxCards: draft.maxCards },
            players: draft.players.map((n) => ({ name: n, budget: draft.budget, cards: [] })),
            deck: [...draft.deck],
            discard: [],
            drawerIdx: 0,
            round: 0,
            phase: "draw",
            bidding: null,
            lastResult: null,
            history: [],
          };
          updateState(newState);
        };
      }

      function renderOnlineSetup(app) {
        backButton(app);
        renderPresetRow(app);
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<label>🙋 Ton pseudo</label>`;
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "Ton pseudo";
        nameInput.value = draft.hostName;
        card.appendChild(nameInput);
        renderSettingsFields(card);
        app.appendChild(card);

        renderDeckEditor(app);

        const startBtn = document.createElement("button");
        startBtn.textContent = "🚀 Créer la partie et obtenir le lien";
        app.appendChild(startBtn);
        const warn = document.createElement("div");
        warn.className = "warn center";
        warn.style.marginTop = "8px";
        app.appendChild(warn);
        const note = document.createElement("div");
        note.className = "muted center";
        note.style.marginTop = "8px";
        note.textContent = "Tu recevras un lien à envoyer à ton ami pour qu'il rejoigne.";
        app.appendChild(note);

        function checkValidity() {
          const missing = [];
          if (!draft.hostName.trim()) missing.push("ton pseudo");
          if (draft.deck.length < 1) missing.push("au moins 1 personnage");
          if (!(draft.budget > 0)) missing.push("un budget > 0");
          if (!(draft.bidStep > 0)) missing.push("un palier de mise > 0");
          startBtn.style.opacity = missing.length ? ".5" : "1";
          warn.textContent = missing.length ? "Il manque : " + missing.join(", ") + "." : "";
          return missing.length === 0;
        }
        nameInput.oninput = (e) => {
          draft.hostName = e.target.value;
          checkValidity();
        };
        const numberInputs = card.querySelectorAll("input[type=number]");
        numberInputs.forEach((inp) => {
          const prev = inp.oninput;
          inp.oninput = (e) => {
            prev(e);
            checkValidity();
          };
        });
        checkValidity();

        startBtn.onclick = () => {
          if (!checkValidity()) return;
          const gid = randId();
          const newState = {
            gid,
            mode: "online",
            settings: { budget: draft.budget, bidStep: draft.bidStep, maxCards: draft.maxCards },
            players: [{ name: draft.hostName.trim(), budget: draft.budget, cards: [] }],
            deck: [...draft.deck],
            discard: [],
            drawerIdx: 0,
            round: 0,
            phase: "lobby",
            bidding: null,
            lastResult: null,
            history: [],
          };
          setMyIdx(gid, 0);
          updateState(newState);
        };
      }

      function renderOnlineLobby(app, myIdx) {
        const card = document.createElement("div");
        card.className = "card center";
        card.innerHTML = `<div class="pill">Salle d'attente</div>`;
        app.appendChild(card);

        const list = document.createElement("div");
        list.className = "card";
        list.innerHTML = `<label style="margin-top:0;">Joueurs dans la partie</label>`;
        gameState.players.forEach((p) => {
          const pr = document.createElement("div");
          pr.className = "player-row";
          pr.innerHTML = `${avatarHtml(p.name, "sm")}<div class="info"><div class="name">${p.name}</div></div>`;
          list.appendChild(pr);
        });
        app.appendChild(list);

        if (myIdx === null) {
          const joinCard = document.createElement("div");
          joinCard.className = "card";
          joinCard.innerHTML = `<label style="margin-top:0;">C'est toi parmi eux ?</label>`;
          gameState.players.forEach((p, i) => {
            const b = document.createElement("button");
            b.className = "secondary";
            b.innerHTML = `${avatarHtml(p.name, "sm")} <span style="margin-left:8px;">${p.name}</span>`;
            b.style.display = "flex";
            b.style.alignItems = "center";
            b.style.justifyContent = "center";
            b.onclick = () => {
              setMyIdx(gameState.gid, i);
              render();
            };
            joinCard.appendChild(b);
          });
          joinCard.innerHTML += `<label>Sinon, rejoins avec ton pseudo</label>`;
          const input = document.createElement("input");
          input.type = "text";
          input.placeholder = "Ton pseudo";
          input.value = lobbyJoinName;
          input.oninput = (e) => {
            lobbyJoinName = e.target.value;
          };
          joinCard.appendChild(input);
          const joinBtn = document.createElement("button");
          joinBtn.textContent = "✅ Rejoindre la partie";
          joinBtn.onclick = () => {
            const name = input.value.trim();
            if (!name) return;
            if (gameState.players.some((p) => p.name.toLowerCase() === name.toLowerCase())) {
              alert("Ce pseudo est déjà pris dans cette partie.");
              return;
            }
            const newPlayers = [
              ...gameState.players,
              { name, budget: gameState.settings.budget, cards: [] },
            ];
            const newIdx = newPlayers.length - 1;
            lobbyJoinName = "";
            setMyIdx(gameState.gid, newIdx);
            updateState({ ...gameState, players: newPlayers });
          };
          joinCard.appendChild(joinBtn);
          app.appendChild(joinCard);
          renderShareButton(app, "Copier le lien de la partie");
        } else if (myIdx === 0) {
          const startCard = document.createElement("div");
          startCard.className = "card center";
          const ok = gameState.players.length >= 2;
          const btn = document.createElement("button");
          btn.textContent = "🚀 Démarrer la partie";
          if (!ok) btn.style.opacity = ".5";
          btn.onclick = () => {
            if (ok) updateState({ ...gameState, phase: "draw" });
          };
          startCard.appendChild(btn);
          if (!ok) {
            const p = document.createElement("p");
            p.className = "muted";
            p.style.margin = "6px 0 0";
            p.textContent = "En attente d'au moins un autre joueur.";
            startCard.appendChild(p);
          }
          app.appendChild(startCard);
          renderShareButton(app, "Copier le lien à envoyer");
        } else {
          const p = document.createElement("div");
          p.className = "card center";
          p.innerHTML = `<p class="muted" style="margin:0;">Tu as rejoint ! En attente que l'hôte démarre la partie.</p>`;
          app.appendChild(p);
          renderShareButton(app, "Renvoyer le lien à l'hôte");
        }
      }

      function renderPicker(app) {
        const card = document.createElement("div");
        card.className = "card center";
        card.innerHTML = `<p style="margin-top:0;font-weight:600;">Tu es qui, dans cette partie ?</p>`;
        gameState.players.forEach((p, i) => {
          const btn = document.createElement("button");
          btn.className = "secondary";
          btn.innerHTML = `${avatarHtml(p.name, "sm")} <span style="margin-left:8px;">${p.name}</span>`;
          btn.style.display = "flex";
          btn.style.alignItems = "center";
          btn.style.justifyContent = "center";
          btn.onclick = () => {
            setMyIdx(gameState.gid, i);
            render();
          };
          card.appendChild(btn);
        });
        app.appendChild(card);
      }

      function renderTopBanner(app) {
        if (gameState.lastResult) {
          const r = gameState.lastResult;
          const b = document.createElement("div");
          b.className = "banner";
          const hasWinner = r.winnerIdx !== null && r.winnerIdx !== undefined;
          const g = gradeInfo(ratingFor(r.card).score);
          b.innerHTML = `${avatarHtml(r.card, "sm")}<span>${hasWinner ? `<b>${r.winnerName}</b> a remporté <b>${r.card}</b> pour ${fmt(r.amount)}` : `<b>${r.card}</b> n'a trouvé aucun acheteur`} <span class="grade-badge ${g.cls}" style="margin-top:0;">${g.txt}</span></span>`;
          app.appendChild(b);
        }
        if (gameState.autoFillNote) {
          const b2 = document.createElement("div");
          b2.className = "banner";
          b2.innerHTML = `<span>🎲 ${gameState.autoFillNote}</span>`;
          app.appendChild(b2);
        }
        renderHistory(app);
      }

      function renderHistory(app) {
        const hist = gameState.history || [];
        const toggle = document.createElement("button");
        toggle.className = "secondary";
        toggle.textContent = (historyOpen ? "▲ " : "▼ ") + `📜 Historique (${hist.length})`;
        toggle.onclick = () => {
          historyOpen = !historyOpen;
          render();
        };
        app.appendChild(toggle);
        if (historyOpen) {
          const card = document.createElement("div");
          card.className = "card";
          if (hist.length === 0) {
            const p = document.createElement("p");
            p.className = "muted center";
            p.style.margin = "0";
            p.textContent = "Aucun tour joué pour l'instant.";
            card.appendChild(p);
          } else {
            [...hist].reverse().forEach((h, i) => {
              const hasWinner = h.winnerIdx !== null && h.winnerIdx !== undefined;
              const g = gradeInfo(ratingFor(h.card).score);
              const row = document.createElement("div");
              row.className = "player-row";
              row.innerHTML = `${avatarHtml(h.card, "sm")}
          <div class="info">
            <div class="name">${h.card} <span class="grade-badge ${g.cls}" style="margin-top:0;">${g.txt}</span></div>
            <div class="cards" style="white-space:normal;">${hasWinner ? `Remporté par <b>${h.winnerName}</b> pour ${fmt(h.amount)}` : "Invendu"}</div>
          </div>`;
              card.appendChild(row);
            });
          }
          app.appendChild(card);
        }
      }

      function renderStandings(app) {
        gameState.players.forEach((p) => {
          const pr = document.createElement("div");
          pr.className = "player-row";
          pr.innerHTML = `${avatarHtml(p.name, "sm")}
      <div class="info">
        <div class="name">${p.name} <span class="pill">${p.cards.length}/${gameState.settings.maxCards}</span></div>
        <div class="budget">${fmt(p.budget)}</div>
        <div class="force-line">💪 Force moyenne : ${teamPower(p.cards)}</div>
        <div class="cards">${p.cards.length ? p.cards.map((c) => c.name).join(", ") : "Aucun personnage"}</div>
      </div>`;
          app.appendChild(pr);
        });
      }

      function renderBidStatus(app) {
        const b = gameState.bidding;
        const wrap = document.createElement("div");
        wrap.className = "card";
        wrap.innerHTML = `<label style="margin-top:0;">📊 État des mises</label>`;
        gameState.players.forEach((p, i) => {
          const row = document.createElement("div");
          row.className = "player-row";
          let tag;
          if (i === b.highestIdx) {
            tag = `<span class="pill" style="background:var(--accent);color:#1a1206;border-color:var(--accent);">👑 ${fmt(b.highestAmount)}</span>`;
          } else if (b.passed.includes(i)) {
            tag = `<span class="pill" style="opacity:.55;">🙅 Passé</span>`;
          } else if (i === b.turnIdx) {
            const secsLeft = b.deadline ? Math.max(0, Math.ceil((b.deadline - Date.now()) / 1000)) : null;
            tag = `<span class="pill" id="bidCountdownPill">⏳ En train de miser${secsLeft !== null ? ` (${secsLeft}s restants)` : ""}</span>`;
          } else {
            tag = `<span class="pill" style="opacity:.55;">En attente</span>`;
          }
          row.innerHTML = `${avatarHtml(p.name, "sm")}<div class="info"><div class="name">${p.name}</div></div>${tag}`;
          wrap.appendChild(row);
        });
        app.appendChild(wrap);
      }

      function renderShareButton(app, label) {
        const card = document.createElement("div");
        card.className = "card share-card";
        const btn = document.createElement("button");
        btn.id = "copyBtn";
        btn.className = "secondary";
        btn.textContent = "📋 " + (label || "Copier le lien");
        btn.onclick = copyLink;
        card.appendChild(btn);
        const details = document.createElement("details");
        details.style.marginTop = "8px";
        const summary = document.createElement("summary");
        summary.className = "muted";
        summary.style.cursor = "pointer";
        summary.style.fontSize = ".75rem";
        summary.textContent = "Afficher le lien en texte";
        details.appendChild(summary);
        const box = document.createElement("div");
        box.className = "linkbox";
        box.id = "linkTextBox";
        box.style.marginTop = "6px";
        box.textContent = linkFor(gameState);
        details.appendChild(box);
        card.appendChild(details);
        app.appendChild(card);
      }

      function renderDraw(app, myIdx) {
        const drawer = gameState.players[gameState.drawerIdx];
        const header = document.createElement("div");
        header.className = "turn-header";
        header.innerHTML = `${avatarHtml(drawer.name, "lg")}<div class="what">Tour de tirage</div><div class="who">${drawer.name}</div>`;
        app.appendChild(header);

        const totalCards =
          gameState.deck.length +
          gameState.discard.length +
          gameState.players.reduce((s, p) => s + p.cards.length, 0);
        const drawnCount = totalCards - gameState.deck.length;
        const step = document.createElement("div");
        step.className = "step";
        step.textContent = `${gameState.deck.length} personnage(s) restant(s) dans la pioche`;
        app.appendChild(step);
        const progWrap = document.createElement("div");
        progWrap.className = "progress-wrap";
        const progBar = document.createElement("div");
        progBar.className = "progress-bar";
        progBar.style.width =
          totalCards > 0 ? `${Math.round((100 * drawnCount) / totalCards)}%` : "0%";
        progWrap.appendChild(progBar);
        app.appendChild(progWrap);

        const card = document.createElement("div");
        card.className = "card center";
        if (myIdx === gameState.drawerIdx) {
          if (uiPhase === "idle") {
            const p = document.createElement("p");
            p.className = "muted";
            p.style.margin = "0 0 4px";
            p.textContent = "C'est ton tour ! Tire une carte, toi seul(e) la verras.";
            card.appendChild(p);
            const btn = document.createElement("button");
            btn.textContent = "🎴 Tirer une carte";
            btn.onclick = onDrawClick;
            card.appendChild(btn);
          } else if (uiPhase === "drawing") {
            const flip = document.createElement("div");
            flip.className = "flip-card shuffling";
            flip.id = "flipCardEl";
            const inner = document.createElement("div");
            inner.className = "flip-card-inner";
            const front = document.createElement("div");
            front.className = "flip-face flip-front";
            front.id = "flipFront";
            front.innerHTML = `<div style="font-size:32px;">🂠</div><div>...</div>`;
            const back = document.createElement("div");
            back.className = "flip-face flip-back";
            inner.appendChild(front);
            inner.appendChild(back);
            flip.appendChild(inner);
            card.appendChild(flip);
            const p = document.createElement("p");
            p.className = "muted";
            p.style.margin = "0";
            p.textContent = "Mélange en cours...";
            card.appendChild(p);
          } else if (uiPhase === "revealed") {
            const score = ratingFor(pendingCard).score;
            if (score >= 95) {
              const b = document.createElement("div");
              b.className = "legend-banner leg";
              b.textContent = "🎉 PERSONNAGE LÉGENDAIRE !";
              card.appendChild(b);
            } else if (score >= 80) {
              const b = document.createElement("div");
              b.className = "legend-banner eli";
              b.textContent = "⭐ Personnage Élite !";
              card.appendChild(b);
            }
            const flip = document.createElement("div");
            flip.className =
              "flip-card" + (score >= 95 ? " legendary" : score >= 80 ? " elite" : "");
            flip.id = "flipCardEl";
            const inner = document.createElement("div");
            inner.className = "flip-card-inner";
            const front = document.createElement("div");
            front.className = "flip-face flip-front";
            front.innerHTML = `<div style="font-size:32px;">🂠</div>`;
            const back = document.createElement("div");
            back.className = "flip-face flip-back";
            back.innerHTML = `${avatarHtml(pendingCard, "lg")}<div>${pendingCard}</div>${statsHtml(pendingCard)}`;
            inner.appendChild(front);
            inner.appendChild(back);
            flip.appendChild(inner);
            card.appendChild(flip);
            const p = document.createElement("p");
            p.className = "muted";
            p.style.margin = "0 0 4px";
            p.textContent = "Carte tirée ! Toi seul(e) la vois.";
            card.appendChild(p);
            const btn = document.createElement("button");
            btn.textContent = "⚔️ Lancer les enchères";
            btn.onclick = onConfirmDraw;
            card.appendChild(btn);
            setTimeout(() => {
              const el = document.getElementById("flipCardEl");
              if (el) el.classList.add("flipped");
            }, 60);
          }
        } else {
          const p = document.createElement("p");
          p.className = "muted";
          p.style.margin = "0";
          p.textContent = `En attente que ${drawer.name} tire une carte.`;
          card.appendChild(p);
        }
        app.appendChild(card);
        renderStandings(app);
        if (gameState.mode === "online") renderShareButton(app);
      }

      function onDrawClick() {
        const deck = gameState.deck;
        const finalCard = deck[Math.floor(Math.random() * deck.length)];
        pendingCard = finalCard;
        uiPhase = "drawing";
        render();
        let ticks = 0;
        const maxTicks = 14;
        drawTimer = setInterval(() => {
          ticks++;
          const el = document.getElementById("flipFront");
          if (el) {
            const randomName = deck[Math.floor(Math.random() * deck.length)];
            el.innerHTML = `${avatarHtml(randomName, "sm")}<div>${randomName}</div>`;
          }
          if (ticks >= maxTicks) {
            clearInterval(drawTimer);
            drawTimer = null;
            uiPhase = "revealed";
            render();
          }
        }, 90);
      }

      function onConfirmDraw() {
        const card = pendingCard;
        const newDeck = gameState.deck.slice();
        const i = newDeck.indexOf(card);
        if (i >= 0) newDeck.splice(i, 1);
        const round = gameState.round + 1;
        saveSecret(gameState.gid, round, card);
        const players = gameState.players;
        const maxCards = gameState.settings.maxCards;
        const drawerIdx = gameState.drawerIdx;
        const drawerEligible = players[drawerIdx].cards.length < maxCards;
        let bidding, phase;
        if (drawerEligible) {
          bidding = {
            turnIdx: drawerIdx,
            highestIdx: null,
            highestAmount: 0,
            passed: [],
            mandatory: true,
            deadline: Date.now() + 20000,
          };
          phase = "bidding";
        } else {
          const nextIdx = findNextBidder(players, drawerIdx, null, [], maxCards);
          if (nextIdx === -1) {
            bidding = null;
            phase = "reveal_pending";
          } else {
            bidding = {
              turnIdx: nextIdx,
              highestIdx: null,
              highestAmount: 0,
              passed: [],
              mandatory: false,
              deadline: Date.now() + 20000,
            };
            phase = "bidding";
          }
        }
        updateState({ ...gameState, deck: newDeck, round, phase, bidding });
        uiPhase = "idle";
        pendingCard = null;
      }

      function renderBidding(app, myIdx) {
        const b = gameState.bidding;
        if (!bidCountdownTimer) {
          bidCountdownTimer = setInterval(() => {
            if (!gameState || gameState.phase !== "bidding") {
              clearInterval(bidCountdownTimer);
              bidCountdownTimer = null;
              return;
            }
            const curr = gameState.bidding;
            if (curr && !curr.deadline) {
              // ancien état sans deadline (partie reprise avant l'ajout du timer) : on s'en donne un
              updateState({ ...gameState, bidding: { ...curr, deadline: Date.now() + 20000 } });
              return;
            }
            if (onBidTimeout()) return;
            const pill = document.getElementById("bidCountdownPill");
            if (pill && curr && curr.deadline) {
              const secsLeft = Math.max(0, Math.ceil((curr.deadline - Date.now()) / 1000));
              pill.textContent = `⏳ En train de miser (${secsLeft}s restants)`;
            }
          }, 1000);
        }
        if (bidConfirm !== null && myIdx !== b.turnIdx) {
          bidConfirm = null;
        }
        const actor = gameState.players[b.turnIdx];
        const floor =
          b.highestIdx === null
            ? gameState.settings.bidStep
            : b.highestAmount + gameState.settings.bidStep;
        const step = gameState.settings.bidStep;

        const header = document.createElement("div");
        header.className = "turn-header";
        header.innerHTML = `${avatarHtml(actor.name, "lg")}<div class="what">${b.mandatory ? "Mise obligatoire" : "Surenchère"}</div><div class="who">${actor.name}</div>`;
        app.appendChild(header);

        if (myIdx === gameState.drawerIdx) {
          const mySecret = loadSecret(gameState.gid, gameState.round);
          if (mySecret) {
            const secretBox = document.createElement("div");
            secretBox.className = "card center";
            secretBox.innerHTML = `<p class="muted" style="margin:0 0 6px;">Rappel, toi seul(e) le sais :</p>${avatarHtml(mySecret, "sm")}<div style="font-weight:700;margin-top:4px;">${mySecret}</div>${statsHtml(mySecret)}`;
            app.appendChild(secretBox);
          }
        }

        const card = document.createElement("div");
        card.className = "card center";
        card.innerHTML = `<p class="muted" style="margin-top:0;">${b.highestIdx === null ? `Aucune mise encore — minimum ${fmt(step)}` : `Mise la plus haute : <b>${gameState.players[b.highestIdx].name}</b> — ${fmt(b.highestAmount)}`}</p>`;

        if (myIdx === b.turnIdx) {
          const me = gameState.players[myIdx];

          if (bidConfirm !== null) {
            const confirmBox = document.createElement("div");
            confirmBox.style.marginTop = "8px";
            const q = document.createElement("p");
            q.style.margin = "0 0 4px";
            q.innerHTML = `Tu confirmes miser <b>${fmt(bidConfirm)}</b> sur ce personnage ?`;
            confirmBox.appendChild(q);
            const yes = document.createElement("button");
            yes.textContent = "✅ Confirmer la mise";
            yes.onclick = () => {
              const amt = bidConfirm;
              bidConfirm = null;
              onBid(myIdx, amt);
            };
            const no = document.createElement("button");
            no.className = "secondary";
            no.textContent = "↩️ Annuler";
            no.onclick = () => {
              bidConfirm = null;
              render();
            };
            confirmBox.appendChild(yes);
            confirmBox.appendChild(no);
            card.appendChild(confirmBox);
            app.appendChild(card);
            renderBidStatus(app);
            renderStandings(app);
            if (gameState.mode === "online") renderShareButton(app);
            return;
          }

          const err = document.createElement("div");
          err.className = "warn";
          err.style.display = "none";

          function tryBid(amt) {
            if (!amt || amt < floor) {
              err.textContent = `Minimum ${fmt(floor)}.`;
              err.style.display = "block";
              return;
            }
            if (amt % step !== 0) {
              err.textContent = `Doit être un multiple de ${fmt(step)}.`;
              err.style.display = "block";
              return;
            }
            if (amt > me.budget) {
              err.textContent = `Budget insuffisant (max ${fmt(me.budget)}).`;
              err.style.display = "block";
              return;
            }
            bidConfirm = amt;
            render();
          }

          const grid = document.createElement("div");
          grid.className = "grid3";
          [floor, floor + step, floor + 2 * step].forEach((amt) => {
            const b2 = document.createElement("button");
            b2.textContent = fmt(amt).replace(" €", "€");
            b2.disabled = amt > me.budget;
            if (b2.disabled) b2.style.opacity = ".4";
            b2.onclick = () => tryBid(amt);
            grid.appendChild(b2);
          });
          card.appendChild(grid);

          const toggle = document.createElement("button");
          toggle.className = "ghost";
          toggle.textContent = "Saisir un autre montant";
          const customRow = document.createElement("div");
          customRow.style.display = "none";
          customRow.style.marginTop = "8px";
          const input = document.createElement("input");
          input.type = "number";
          input.min = floor;
          input.step = step;
          input.max = me.budget;
          input.placeholder = `Multiple de ${fmt(step)}, min ${fmt(floor)}`;
          const customBtn = document.createElement("button");
          customBtn.textContent = "Valider cette mise";
          customBtn.onclick = () => tryBid(Number(input.value));
          customRow.appendChild(input);
          customRow.appendChild(customBtn);
          toggle.onclick = () => {
            customRow.style.display = customRow.style.display === "none" ? "block" : "none";
          };
          card.appendChild(toggle);
          card.appendChild(customRow);
          card.appendChild(err);

          if (!b.mandatory) {
            const passBtn = document.createElement("button");
            passBtn.textContent = "🙅 Passer";
            passBtn.className = "secondary";
            passBtn.onclick = () => onPass(myIdx);
            card.appendChild(passBtn);
          }
        } else {
          const p = document.createElement("p");
          p.className = "muted";
          p.style.margin = "0";
          p.textContent = `En attente de ${actor.name}.`;
          card.appendChild(p);
        }
        app.appendChild(card);
        renderBidStatus(app);
        renderStandings(app);
        if (gameState.mode === "online") renderShareButton(app);
      }

      function onBid(myIdx, amount) {
        const b = gameState.bidding;
        const players = gameState.players;
        const maxCards = gameState.settings.maxCards;
        const nextIdx = findNextBidder(players, b.turnIdx, myIdx, b.passed, maxCards);
        const newBidding = {
          ...b,
          highestIdx: myIdx,
          highestAmount: amount,
          turnIdx: nextIdx === -1 ? null : nextIdx,
          mandatory: false,
          deadline: Date.now() + 20000,
        };
        const phase = nextIdx === -1 ? "reveal_pending" : "bidding";
        updateState({ ...gameState, bidding: newBidding, phase });
      }

      function onPass(myIdx) {
        const b = gameState.bidding;
        const newPassed = [...b.passed, myIdx];
        const nextIdx = findNextBidder(
          gameState.players,
          b.turnIdx,
          b.highestIdx,
          newPassed,
          gameState.settings.maxCards,
        );
        const newBidding = { ...b, passed: newPassed, turnIdx: nextIdx === -1 ? null : nextIdx, deadline: nextIdx === -1 ? null : Date.now() + 20000 };
        const phase = nextIdx === -1 ? "reveal_pending" : "bidding";
        updateState({ ...gameState, bidding: newBidding, phase });
      }

      // Auto-passe (ou mise le minimum si mise obligatoire) quand le temps est écoulé; renvoie true si une action a été prise.
      function onBidTimeout() {
        const b = gameState.bidding;
        if (!b || !b.deadline || Date.now() < b.deadline) return false;
        if (b.mandatory) {
          const floor =
            b.highestIdx === null
              ? gameState.settings.bidStep
              : b.highestAmount + gameState.settings.bidStep;
          const me = gameState.players[b.turnIdx];
          if (floor <= me.budget) onBid(b.turnIdx, floor);
          else onPass(b.turnIdx);
        } else {
          onPass(b.turnIdx);
        }
        return true;
      }

      function renderReveal(app, myIdx) {
        const drawer = gameState.players[gameState.drawerIdx];
        const header = document.createElement("div");
        header.className = "turn-header";
        header.innerHTML = `<div class="what">Révélation</div><div class="who">${drawer.name}</div>`;
        app.appendChild(header);
        const card = document.createElement("div");
        card.className = "card center";
        if (myIdx === gameState.drawerIdx) {
          const p = document.createElement("p");
          p.className = "muted";
          p.style.marginTop = "0";
          p.textContent =
            "Toi seul(e) vois quel personnage a été tiré. Révèle-le pour attribuer le lot.";
          card.appendChild(p);
          const btn = document.createElement("button");
          btn.textContent = "✨ Révéler et attribuer";
          btn.onclick = onReveal;
          card.appendChild(btn);
        } else {
          const p = document.createElement("p");
          p.className = "muted";
          p.style.margin = "0";
          p.textContent = `En attente que ${drawer.name} révèle la carte.`;
          card.appendChild(p);
        }
        app.appendChild(card);
        renderStandings(app);
        if (gameState.mode === "online")
          renderShareButton(app, `Copier le lien pour ${drawer.name}`);
      }

      function onReveal() {
        const card = loadSecret(gameState.gid, gameState.round) || "Carte inconnue";
        const b = gameState.bidding;
        const winnerIdx = b ? b.highestIdx : null;
        const amount = b ? b.highestAmount : 0;
        let newPlayers = gameState.players.map((p) => ({ ...p, cards: [...p.cards] }));
        let newDiscard = [...gameState.discard];
        if (winnerIdx !== null && winnerIdx !== undefined) {
          newPlayers[winnerIdx].budget -= amount;
          newPlayers[winnerIdx].cards.push({ name: card, price: amount });
        } else {
          newDiscard.push(card);
        }

        const maxCards = gameState.settings.maxCards;
        let remainingDeck = [...gameState.deck];
        const nextDrawer = (gameState.drawerIdx + 1) % newPlayers.length;
        const underCap = newPlayers
          .map((p, i) => i)
          .filter((i) => newPlayers[i].cards.length < maxCards);
        let ended = false;
        let autoFillNote = null;

        if (underCap.length === 0) {
          ended = true;
        } else if (underCap.length === 1 && remainingDeck.length > 0) {
          const idx = underCap[0];
          let given = 0;
          while (remainingDeck.length > 0 && newPlayers[idx].cards.length < maxCards) {
            const ri = Math.floor(Math.random() * remainingDeck.length);
            const c = remainingDeck.splice(ri, 1)[0];
            newPlayers[idx].cards.push({ name: c, price: 0 });
            given++;
          }
          if (given > 0) {
            autoFillNote = `${given} personnage(s) restant(s) tiré(s) au sort et ajouté(s) à la collection de ${newPlayers[idx].name} pour compléter son objectif.`;
          }
          ended = true;
        } else if (remainingDeck.length === 0) {
          ended = true;
        }

        const lastResult = {
          card,
          winnerIdx: winnerIdx === undefined ? null : winnerIdx,
          winnerName:
            winnerIdx !== null && winnerIdx !== undefined
              ? gameState.players[winnerIdx].name
              : null,
          amount,
        };
        const newHistory = [...(gameState.history || []), lastResult];
        updateState({
          ...gameState,
          players: newPlayers,
          discard: newDiscard,
          deck: remainingDeck,
          bidding: null,
          lastResult,
          autoFillNote,
          history: newHistory,
          phase: ended ? "end" : "draw",
          drawerIdx: nextDrawer,
        });
      }

      function spawnConfetti() {
        const emojis = ["🪙", "⭐", "🏴‍☠️", "💰", "✨"];
        for (let i = 0; i < 24; i++) {
          const el = document.createElement("div");
          el.className = "confetti";
          el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          el.style.left = Math.random() * 100 + "vw";
          el.style.animationDuration = 2.5 + Math.random() * 2 + "s";
          el.style.fontSize = 1 + Math.random() * 0.8 + "rem";
          document.body.appendChild(el);
          setTimeout(() => {
            el.remove();
          }, 5000);
        }
      }

      function renderEnd(app) {
        const withPower = gameState.players.map((p) => ({
          ...p,
          power: Number(teamPower(p.cards)),
        }));
        const ranked = withPower.sort(
          (a, b) => b.power - a.power || b.cards.length - a.cards.length || b.budget - a.budget,
        );
        const winner = ranked[0];
        const header = document.createElement("div");
        header.className = "turn-header";
        header.innerHTML = `<span class="crown-bounce" style="font-size:2.2rem;">👑</span>${avatarHtml(winner.name, "lg")}<div class="what">Partie terminée 🏁</div><div class="who">${winner.name} gagne !</div>`;
        app.appendChild(header);
        if (!confettiShown) {
          confettiShown = true;
          spawnConfetti();
        }

        const purchases = [];
        gameState.players.forEach((p) => {
          p.cards.forEach((c) => {
            if (c.price > 0) {
              const score = ratingFor(c.name).score;
              purchases.push({
                name: c.name,
                price: c.price,
                playerName: p.name,
                score,
                ratio: score / (c.price / 1000000),
              });
            }
          });
        });
        if (purchases.length) {
          const best = [...purchases].sort((a, b) => b.ratio - a.ratio)[0];
          const worst = [...purchases].sort((a, b) => a.ratio - b.ratio)[0];
          const highlight = document.createElement("div");
          highlight.className = "card";
          highlight.innerHTML = `<label style="margin-top:0;">🏅 Faits marquants</label>`;
          const bestRow = document.createElement("div");
          bestRow.className = "player-row";
          bestRow.innerHTML = `${avatarHtml(best.name, "sm")}
      <div class="info">
        <div class="name">🏅 Meilleure affaire</div>
        <div class="cards" style="white-space:normal;"><b>${best.playerName}</b> a eu <b>${best.name}</b> (${ratingFor(best.name).score}/100) pour seulement ${fmt(best.price)}</div>
      </div>`;
          highlight.appendChild(bestRow);
          if (worst.name !== best.name || worst.playerName !== best.playerName) {
            const worstRow = document.createElement("div");
            worstRow.className = "player-row";
            worstRow.innerHTML = `${avatarHtml(worst.name, "sm")}
        <div class="info">
          <div class="name">💸 Pire achat</div>
          <div class="cards" style="white-space:normal;"><b>${worst.playerName}</b> a payé ${fmt(worst.price)} pour <b>${worst.name}</b> (seulement ${ratingFor(worst.name).score}/100)</div>
        </div>`;
            highlight.appendChild(worstRow);
          }
          app.appendChild(highlight);
        }

        const card = document.createElement("div");
        card.className = "card";
        ranked.forEach((p, i) => {
          const pr = document.createElement("div");
          pr.className = "player-row";
          pr.innerHTML = `<span class="pill">#${i + 1}</span>${avatarHtml(p.name, "sm")}
      <div class="info">
        <div class="name">${p.name}</div>
        <div class="budget">${fmt(p.budget)} restants</div>
        <div class="force-line">💪 Force moyenne : ${p.power}</div>
        <div class="cards">${p.cards.length} perso(s) : ${p.cards.map((c) => c.name).join(", ") || "—"}</div>
      </div>`;
          card.appendChild(pr);
        });
        app.appendChild(card);
        if (gameState.mode === "online") renderShareButton(app, "Copier le lien du résultat final");
        const homeBtn = document.createElement("button");
        homeBtn.className = "secondary";
        homeBtn.textContent = "🏠 Retour à l'accueil";
        homeBtn.onclick = () => {
          confettiShown = false;
          stopOnlineListener();
          gameState = null;
          draft = {
            mode: null,
            players: [],
            budget: 500000000,
            bidStep: 10000000,
            maxCards: 6,
            deck: [...DEFAULT_CHARACTERS],
            newPlayerName: "",
            hostName: "",
          };
          history.replaceState(null, "", pageUrl());
          render();
        };
        app.appendChild(homeBtn);
      }

      window.addEventListener("hashchange", () => {
        const gid = readGidFromHash();
        if (gid) {
          onlineLoading = true;
          ensureOnlineListener(gid);
        } else {
          stopOnlineListener();
          gameState = readStateFromHash();
        }
        render();
      });

      if (onlineGid) ensureOnlineListener(onlineGid);
      render();
