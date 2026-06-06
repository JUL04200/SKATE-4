// ===== KNOWLEDGE BASE — SKATE. GLITCH ASSISTANT =====

const KB = {
  "spread eagle": {
    keywords: ["spread eagle", "speed glitch", "vitesse", "rapide", "accélérer", "hippy jump", "hippy", "r1", "glitch vitesse", "speed"],
    answer: `
<p>⚡ <strong>Le Spread Eagle Speed Glitch</strong> est le principal exploit de vitesse dans <strong>skate.</strong></p>
<p><strong>Pourquoi ça marche ?</strong> Le moteur physique du jeu interprète mal la transition entre la pose Spread Eagle (hors du board) et le remontage sur le board. À chaque cycle, le jeu calcule une force d'impulsion incorrecte qui s'accumule.</p>
<p><strong>Séquence complète :</strong><br>
① Prends de l'élan sur une pente<br>
② <kbd>X</kbd> + <kbd>□</kbd> = Hippy Jump (stick gauche ↑)<br>
③ Au sommet : <kbd>R1</kbd> + <kbd>X</kbd> = Spread Eagle<br>
④ Lâcher <kbd>□</kbd> puis <kbd>△</kbd> avant l'atterrissage<br>
⑤ 🔁 <strong>Répéter</strong> — chaque cycle = +vitesse</p>
<p>⚠️ <strong>Erreur classique :</strong> faire le Spread Eagle sur le board = juste un "no foot air", pas de boost vitesse.</p>
<p>💡 Contrairement à Skate 3 (boost one-shot), ici la vitesse s'accumule cycle après cycle — plus tu répètes, plus vite tu vas !</p>
`
  },

  "skate3": {
    keywords: ["skate 3", "skate3", "différence", "comparaison", "vs skate 3", "one shot", "one-shot", "boost"],
    answer: `
<p>🆚 <strong>Skate. vs Skate 3 — Speed Glitch</strong></p>
<p><strong>Skate 3 :</strong> Le speed glitch était un boost <em>one-shot</em> — un seul trigger et tu atteignais une vitesse maximale instantanément. Simple mais peu contrôlable.</p>
<p><strong>Skate. (actuel) :</strong> La vitesse s'<em>accumule progressivement</em> à chaque cycle Spread Eagle. Avantages :</p>
<ul>
  <li>✓ Plus de contrôle sur la vitesse finale</li>
  <li>✓ Peut être combiné avec la topographie de la map</li>
  <li>✓ Technique plus skill-based</li>
</ul>
<p>Le principe reste similaire (exploit physique sur une pose aérienne), mais le jeu impose une mécanique de répétition au lieu d'un boost immédiat.</p>
`
  },

  "scaffold": {
    keywords: ["scaffold", "launch", "catapulte", "manual pod", "pod", "lancement", "propulser", "voler"],
    answer: `
<p>🚀 <strong>Launch Glitch au Scaffold</strong></p>
<p><strong>Mécanisme :</strong> L'exploit exploite un bug de calcul de collision entre le bord d'un Manual Pod et la hitbox du personnage en mouvement. Le moteur physique génère une force anormalement élevée.</p>
<p><strong>Setup :</strong><br>
① Déployer un <strong>Scaffold</strong> n'importe où<br>
② Placer un <strong>Manual Pod</strong> sur le dessus<br>
③ Positionner le board au bord (qui doit pendre dans le vide)<br>
④ Courir vers lui + <strong>Saut juste avant le contact</strong></p>
<p>⏱️ <strong>Timing :</strong> Le frame window est assez précis. Trop tôt = rien. Trop tard = chute normale. Il faut appuyer sur saut environ 2-3 frames avant de toucher le board.</p>
<p>💡 <strong>Pro tip :</strong> Utilisable <em>n'importe où</em> sur la map. Idéal pour traverser rapidement de longues distances ou atteindre des spots en hauteur.</p>
`
  },

  "double grind": {
    keywords: ["double grind", "double grinds", "grind", "rail", "officiel", "full circle", "0.30.5", "update"],
    answer: `
<p>🔀 <strong>Double Grinds — De Glitch à Feature</strong></p>
<p>À l'origine, les double grinds étaient un bug : certains inputs rapides sur un rail déclenchaient <em>deux tricks de grind simultanément</em>. La communauté a vite réalisé le potentiel stylistique et les clips ont explosé.</p>
<p><strong>Pourquoi Full Circle les a gardés ?</strong> L'équipe surveille activement la communauté. Voyant l'engouement, ils ont décidé de <em>"coder proprement" le comportement</em> plutôt que de le patcher. Résultat : officiellement intégrés en update <strong>0.30.5</strong>.</p>
<p><strong>Technique de base :</strong><br>
<kbd>R2</kbd>+<kbd>←</kbd> → grind 1 → immédiatement → <kbd>R2</kbd>+<kbd>→</kbd> = DOUBLE</p>
<p>✅ Non-bannable · Donne un score multiplié · Ajoute du style</p>
`
  },

  "bugs": {
    keywords: ["bug", "bugs", "saison 4", "season 4", "switch", "fakie", "voiture", "invisible", "écran noir", "black screen", "ps4", "trafic", "world traffic"],
    answer: `
<p>🐛 <strong>Bugs Actifs — Saison 4</strong></p>
<p><strong>1. Player Model (Switch/Fakie)</strong><br>
Le modèle du joueur se déforme visuellement en stance Switch ou Fakie. Bug purement visuel — le gameplay n'est pas affecté. Aucun fix connu sauf changer temporairement de stance.</p>
<p><strong>2. Voitures Invisibles</strong><br>
Après avoir toggleé "World Traffic" dans les settings, certaines voitures deviennent invisibles mais gardent leur collision. <em>Fix :</em> Toggle le setting deux fois pour forcer le rechargement.</p>
<p><strong>3. Écran Noir au Challenge (PS4 only)</strong><br>
Au lancement d'un challenge, écran noir complet. <em>Fix :</em> Seul le reboot complet du jeu fonctionne (bouton PS → Quitter → Relancer).</p>
`
  },

  "conseil": {
    keywords: ["conseil", "astuce", "tip", "comment", "débuter", "débutant", "commencer", "apprendre"],
    answer: `
<p>🛹 <strong>Conseils pour débuter avec les glitchs</strong></p>
<p><strong>Ordre recommandé :</strong></p>
<ol>
  <li><strong>Scaffold Launch</strong> d'abord — le plus simple, un seul timing à maîtriser</li>
  <li><strong>Double Grinds</strong> ensuite — inputs rythmiques, s'améliorent avec la pratique</li>
  <li><strong>Spread Eagle Speed</strong> en dernier — demande coordination + bonne prise d'élan</li>
</ol>
<p>💡 Pour le Spread Eagle : commence sur une longue descente douce pour avoir le temps de bien exécuter chaque étape sans te préoccuper de l'espace.</p>
<p>⚠️ Rappel : les exploits fonctionnent en <strong>Early Access</strong> — Full Circle peut patcher à tout moment (sauf les Double Grinds qui seront officiels en 0.30.5).</p>
`
  },

  "patch": {
    keywords: ["patch", "patcher", "bannable", "interdit", "risque", "ban", "update", "officiel", "version"],
    answer: `
<p>⚠️ <strong>Risques de patch — état actuel</strong></p>
<p>Le jeu est en <strong>Early Access</strong>, donc l'équipe peut modifier le comportement à tout moment.</p>
<p><strong>Statut actuel :</strong></p>
<ul>
  <li>🔀 <strong>Double Grinds :</strong> Officiellement conservés, intégrés en 0.30.5 ✅</li>
  <li>⚡ <strong>Spread Eagle Speed :</strong> Toujours actif, non commenté par Full Circle</li>
  <li>🚀 <strong>Scaffold Launch :</strong> Toujours actif, considéré comme bug de physique</li>
</ul>
<p>Full Circle a montré qu'ils écoutent la communauté (exemple Double Grinds), donc les glitchs appréciés ont moins de risque d'être patchés brutalement.</p>
`
  },

  "default": {
    answer: `
<p>🤔 Je n'ai pas d'info précise sur ça dans ma base de connaissance.</p>
<p>Essaie de reformuler avec des mots-clés comme : <strong>Spread Eagle</strong>, <strong>Scaffold</strong>, <strong>Double Grinds</strong>, <strong>Bugs S4</strong>, ou <strong>vs Skate 3</strong>.</p>
<p>Tu peux aussi cliquer sur les boutons de raccourci pour des réponses directes ! 👆</p>
`
  }
};

function findAnswer(question) {
  const q = question.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  for (const [key, entry] of Object.entries(KB)) {
    if (key === "default") continue;
    if (entry.keywords.some(kw => q.includes(kw.normalize("NFD").replace(/[̀-ͯ]/g, "")))) {
      return entry.answer;
    }
  }
  return KB.default.answer;
}

function askQuestion(q) {
  document.getElementById("ai-input").value = q;
  sendMessage();
}

function handleEnter(e) {
  if (e.key === "Enter") sendMessage();
}

function sendMessage() {
  const input = document.getElementById("ai-input");
  const q = input.value.trim();
  if (!q) return;

  const chatArea = document.getElementById("chat-area");

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "ai-message user-message msg-anim";
  userMsg.innerHTML = `<div class="msg-bubble">${escapeHtml(q)}</div>`;
  chatArea.appendChild(userMsg);
  input.value = "";

  // Typing indicator
  const typing = document.createElement("div");
  typing.className = "ai-message bot-message msg-anim";
  typing.innerHTML = `
    <div class="bot-avatar">🤖</div>
    <div class="msg-bubble">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>`;
  chatArea.appendChild(typing);
  chatArea.scrollTop = chatArea.scrollHeight;

  setTimeout(() => {
    typing.remove();
    const botMsg = document.createElement("div");
    botMsg.className = "ai-message bot-message msg-anim";
    botMsg.innerHTML = `<div class="bot-avatar">🤖</div><div class="msg-bubble">${findAnswer(q)}</div>`;
    chatArea.appendChild(botMsg);
    chatArea.scrollTop = chatArea.scrollHeight;
  }, 900 + Math.random() * 400);

  chatArea.scrollTop = chatArea.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
