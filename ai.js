// ===== SKATE. GLITCH AI — LOCAL KNOWLEDGE BASE =====
const KB = [
  {
    id: "spread-eagle",
    keys: ["spread eagle","speed glitch","vitesse","rapide","accélérer","hippy","r1","speed","boost","vite"],
    answer: `<p>⚡ <strong>Speed Glitch — Spread Eagle</strong></p>
<p><strong>Mécanisme :</strong> Le moteur physique calcule une force d'impulsion anormale lors de la transition Spread Eagle → remontée sur le board. Chaque cycle amplifie cette force. Pas de cap de vitesse connu.</p>
<p><strong>Séquence complète :</strong><br>
① Pente + élan initial<br>
② <kbd class="ps-x">X</kbd> + <kbd class="ps-sq">□</kbd> = Hippy Jump (stick ↑)<br>
③ Au pic : <kbd class="ps-r1">R1</kbd> + <kbd class="ps-x">X</kbd> = Spread Eagle <em>(hors board !!!)</em><br>
④ Lâcher <kbd class="ps-sq">□</kbd> → <kbd class="ps-tri">△</kbd> avant atterrissage<br>
⑤ 🔁 Répéter — chaque loop = +vitesse</p>
<p>⚠️ <strong>Erreur #1 :</strong> Spread Eagle <em>sur le board</em> = juste un "no foot air". La pose DOIT être exécutée hors du board.</p>`
  },
  {
    id: "skate3",
    keys: ["skate 3","skate3","différence","comparaison","vs","one shot","one-shot"],
    answer: `<p>🆚 <strong>Skate. vs Skate 3</strong></p>
<p><strong>Skate 3 :</strong> Boost <em>one-shot</em> — un trigger, vitesse max instantanée. Simple, peu de skill requis.</p>
<p><strong>Skate. :</strong> Vitesse <em>progressive par accumulation</em>. Avantages :</p>
<ul>
  <li>✓ Contrôle granulaire sur la vitesse finale</li>
  <li>✓ S'adapte à la topographie (pentes = meilleur gain)</li>
  <li>✓ Plus technique et satisfaisant à maîtriser</li>
</ul>
<p>La mécanique de base est similaire (exploit physique sur pose aérienne), mais skate. impose la répétition au lieu d'un boost instantané.</p>`
  },
  {
    id: "scaffold",
    keys: ["scaffold","launch","catapulte","manual pod","pod","lancement","propulser","voler","scaff"],
    answer: `<p>🚀 <strong>Launch Glitch — Scaffold</strong></p>
<p><strong>Bug :</strong> Collision mal calculée entre le board en porte-à-faux et la hitbox du joueur en mouvement. Le physics engine génère une force anormalement élevée.</p>
<p><strong>Setup :</strong><br>
① Déployer un <strong>Scaffold</strong> (n'importe où)<br>
② Poser un <strong>Manual Pod</strong> sur le dessus au bord<br>
③ Laisser le board dépasser dans le vide<br>
④ Run → <kbd class="ps-x">✕ SAUT</kbd> ~2-3 frames avant le contact</p>
<p>💡 <strong>Tip :</strong> Frame window précis mais learnable vite. Pré-placer avant un challenge pour traverser la map instantanément.</p>`
  },
  {
    id: "double-grind",
    keys: ["double grind","double grinds","grind","rail","officiel","full circle","0.30.5","update","feature"],
    answer: `<p>🔀 <strong>Double Grinds — De Glitch à Feature</strong></p>
<p>Découvert par accident : inputs rapides sur un rail déclenchent 2 tricks simultanément. La communauté a immédiatement exploité le potentiel stylistique.</p>
<p><strong>Pourquoi Full Circle l'a gardé ?</strong> Ils suivent activement la communauté. L'engouement autour des double grinds était tel qu'ils ont décidé de <em>"codifier proprement le comportement"</em> plutôt que le patcher.</p>
<p><strong>Technique :</strong> <kbd class="ps-r2">R2</kbd>+<kbd class="ps-dir">←</kbd> → immédiatement → <kbd class="ps-r2">R2</kbd>+<kbd class="ps-dir">→</kbd></p>
<p>✅ Non-bannable · Score ×2+ · Intégration officielle en <strong>v0.30.5</strong></p>`
  },
  {
    id: "bugs",
    keys: ["bug","bugs","saison 4","switch","fakie","voiture","invisible","écran noir","black screen","ps4","world traffic","trafic"],
    answer: `<p>🐛 <strong>Bugs actifs — Saison 4</strong></p>
<p><strong>1. Player Model (Switch/Fakie)</strong> — PS4/PS5<br>
Déformation visuelle du modèle en Switch ou Fakie. Bug cosmétique uniquement.</p>
<p><strong>2. Voitures Invisibles</strong> — PS4/PS5<br>
Toggle "World Traffic" → certains véhicules disparaissent visuellement mais gardent leur collision.<br>
Fix : re-toggle World Traffic deux fois.</p>
<p><strong>3. Écran Noir Challenge</strong> — PS4 only<br>
Freeze complet au lancement d'un challenge. Fix unique : reboot du jeu (PS → Quitter → Relancer).</p>`
  },
  {
    id: "debuter",
    keys: ["conseil","astuce","débuter","débutant","commencer","apprendre","facile","ordre"],
    answer: `<p>💡 <strong>Par où commencer ?</strong></p>
<p><strong>Ordre recommandé :</strong></p>
<ol>
  <li><strong>Scaffold Launch</strong> — timing simple, résultat spectaculaire immédiat</li>
  <li><strong>Double Grinds</strong> — rythmique, s'améliore rapidement</li>
  <li><strong>Spread Eagle Speed</strong> — demande coordination + élan, mais le plus puissant</li>
</ol>
<p>💡 Pour le Spread Eagle : entraîne-toi d'abord sur une longue descente douce. Ça te donne le temps d'exécuter chaque step sans pression d'espace.</p>
<p>⚠️ Early Access = patches possibles. Seuls les Double Grinds sont officiellement safe (intégrés en 0.30.5).</p>`
  },
  {
    id: "patch",
    keys: ["patch","patcher","ban","bannable","interdit","risque","update","version","officiel"],
    answer: `<p>⚠️ <strong>Risques de patch</strong></p>
<p>Jeu en Early Access → Full Circle peut modifier à tout moment.</p>
<p><strong>Statut actuel :</strong></p>
<ul>
  <li>🔀 <strong>Double Grinds</strong> : <span style="color:#2dc653">SAFE</span> — officiellement conservés, v0.30.5</li>
  <li>⚡ <strong>Spread Eagle</strong> : <span style="color:#ff9f1c">NON COMMENTÉ</span> par Full Circle</li>
  <li>🚀 <strong>Scaffold Launch</strong> : <span style="color:#ff9f1c">BUG NON PATCHÉ</span> pour l'instant</li>
</ul>
<p>Full Circle a prouvé qu'ils écoutent la communauté. Les glitchs populaires ont moins de risque d'être supprimés brutalement.</p>`
  }
];

function findAnswer(q) {
  const norm = q.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
  for (const e of KB) {
    if (e.keys.some(k => norm.includes(k.normalize("NFD").replace(/[̀-ͯ]/g,"")))) return e.answer;
  }
  return `<p>🤔 Je n'ai pas de données précises sur ça.</p><p>Essaie : <strong>Spread Eagle</strong>, <strong>Scaffold</strong>, <strong>Double Grinds</strong>, <strong>Bugs S4</strong>, <strong>vs Skate 3</strong>, ou <strong>conseils débutant</strong>.</p>`;
}

function askQ(q) {
  document.getElementById("ai-input").value = q;
  sendMsg();
}

function sendMsg() {
  const inp = document.getElementById("ai-input");
  const q = inp.value.trim();
  if (!q) return;
  const area = document.getElementById("chat-area");

  // User bubble
  const uDiv = document.createElement("div");
  uDiv.className = "ai-msg user msg-in";
  uDiv.innerHTML = `<div class="aim-content"><div class="aim-text">${esc(q)}</div></div>`;
  area.appendChild(uDiv);
  inp.value = "";
  area.scrollTop = area.scrollHeight;

  // Typing
  const tDiv = document.createElement("div");
  tDiv.className = "ai-msg bot msg-in";
  tDiv.innerHTML = `<div class="aim-avatar"><svg viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="6" fill="rgba(230,57,70,0.15)" stroke="rgba(230,57,70,0.4)" stroke-width="1"/><rect x="8" y="8" width="16" height="12" rx="2" fill="none" stroke="#e63946" stroke-width="1.5"/><circle cx="12" cy="14" r="2" fill="#e63946"/><circle cx="20" cy="14" r="2" fill="#e63946"/><line x1="10" y1="24" x2="14" y2="20" stroke="#e63946" stroke-width="1.5"/><line x1="22" y1="24" x2="18" y2="20" stroke="#e63946" stroke-width="1.5"/></svg></div><div class="aim-content"><div class="aim-name">GLITCH_AI</div><div class="aim-text"><span class="t-dot"></span><span class="t-dot"></span><span class="t-dot"></span></div></div>`;
  area.appendChild(tDiv);
  area.scrollTop = area.scrollHeight;

  setTimeout(() => {
    tDiv.remove();
    const bDiv = document.createElement("div");
    bDiv.className = "ai-msg bot msg-in";
    bDiv.innerHTML = `<div class="aim-avatar"><svg viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="6" fill="rgba(230,57,70,0.15)" stroke="rgba(230,57,70,0.4)" stroke-width="1"/><rect x="8" y="8" width="16" height="12" rx="2" fill="none" stroke="#e63946" stroke-width="1.5"/><circle cx="12" cy="14" r="2" fill="#e63946"/><circle cx="20" cy="14" r="2" fill="#e63946"/><line x1="10" y1="24" x2="14" y2="20" stroke="#e63946" stroke-width="1.5"/><line x1="22" y1="24" x2="18" y2="20" stroke="#e63946" stroke-width="1.5"/></svg></div><div class="aim-content"><div class="aim-name">GLITCH_AI</div><div class="aim-text">${findAnswer(q)}</div></div>`;
    area.appendChild(bDiv);
    area.scrollTop = area.scrollHeight;
  }, 800 + Math.random()*500);
}

function esc(s) { return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
