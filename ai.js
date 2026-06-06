// ===== SKATE. GLITCH AI — KNOWLEDGE BASE COMPLÈTE v3.0 =====
// Sources: EA, Full Circle, GameSpot, Game Rant, Reddit, Operation Sports, PowerUp Gaming

const KB = [

  // ══════════════════════════════════════════
  // GLITCHES DE VITESSE
  // ══════════════════════════════════════════
  {
    id: "spread-eagle",
    keys: ["spread eagle","speed glitch","vitesse","accélérer","hippy","r1","speed","boost","vite","rapide","plus vite"],
    title: "⚡ Speed Glitch — Spread Eagle",
    answer: `
<p>⚡ <strong>Speed Glitch — Spread Eagle</strong> — méthode principale</p>
<p><strong>Mécanisme :</strong> Le moteur physique calcule une force d'impulsion anormale lors de la transition Spread Eagle (hors board) → remontée. Chaque cycle amplifie la force. Pas de cap connu — tu peux dépasser la vitesse des voitures.</p>
<p><strong>Séquence :</strong><br>
① Pente + quelques pushes pour l'inertie<br>
② <kbd class="ps-x">X</kbd> + <kbd class="ps-sq">□</kbd> — Hippy Jump, stick gauche ↑<br>
③ Sommet du saut : <kbd class="ps-r1">R1</kbd> + <kbd class="ps-x">X</kbd> — Spread Eagle <em>(HORS du board !)</em><br>
④ Lâcher <kbd class="ps-sq">□</kbd> → <kbd class="ps-tri">△</kbd> juste avant atterrissage<br>
⑤ 🔁 Répéter en boucle — chaque cycle = +vitesse</p>
<p>⚠️ Spread Eagle <em>sur</em> le board = juste un "no foot air". Doit être exécuté hors du board.</p>`
  },

  {
    id: "double-grab-speed",
    keys: ["double grab","double trigger","l2 r2","lt rt","grab speed","spin boost","180 speed","boost 180"],
    title: "🎯 Double Grab Speed Boost",
    answer: `
<p>🎯 <strong>Double Grab Speed Boost</strong></p>
<p>Méthode alternative de boost de vitesse, plus facile à exécuter que le Spread Eagle.</p>
<p><strong>Étapes :</strong><br>
① Push ou descente pour prendre de la vitesse<br>
② Faire un <strong>180°</strong> spin<br>
③ Attraper les deux triggers <kbd class="ps-r1">L2</kbd> + <kbd class="ps-r1">R2</kbd> simultanément en l'air<br>
④ Lâcher <strong>immédiatement</strong> à l'atterrissage → boost massif</p>
<p>💡 Moins de cycles requis que le Spread Eagle mais boost ponctuel. Idéal pour un lancement rapide.</p>`
  },

  {
    id: "teleport-speed",
    keys: ["teleport","clip","phase","traverser mur","passer mur","out of bounds","clipper","mur"],
    title: "🌀 Teleport / Clip Glitch",
    answer: `
<p>🌀 <strong>Teleport / Clip Glitch</strong></p>
<p>Exploit physique permettant de passer à travers certaines surfaces et d'obtenir un burst de vitesse.</p>
<p><strong>Méthode :</strong><br>
① Rouler vers un mur ou une arête à vitesse modérée<br>
② Spammer le mode manuel tout en popant vers un one-foot grab<br>
③ Incliner vers l'avant pour clipper à travers la surface<br>
④ Résultat : burst de vitesse + possibilité de passer les barrières</p>
<p>⚠️ Peut causer un softlock (stuck underground). Utile pour l'exploration mais risqué en challenge.</p>`
  },

  // ══════════════════════════════════════════
  // LAUNCH / CATAPULTE GLITCHES
  // ══════════════════════════════════════════
  {
    id: "scaffold-launch",
    keys: ["scaffold","launch","catapulte","manual pod","pod","lancement","propulser","voler","scaff","s'envoler"],
    title: "🚀 Launch Glitch — Scaffold",
    answer: `
<p>🚀 <strong>Launch Glitch — Scaffold</strong></p>
<p><strong>Bug :</strong> Hitbox mal calculée quand le board pend dans le vide sur un Manual Pod. La collision génère une force anormale.</p>
<p><strong>Setup :</strong><br>
① Déployer un <strong>Scaffold</strong> n'importe où<br>
② Poser un <strong>Manual Pod</strong> sur le dessus, au bord<br>
③ Board qui dépasse dans le vide (ne pas remonter dessus)<br>
④ Courir → <kbd class="ps-x">✕ SAUT</kbd> ~2-3 frames avant le contact</p>
<p>🗺️ Utilisable partout sur la map. Pre-placer avant un challenge pour traverser San Vansterdam instantanément.</p>`
  },

  {
    id: "handplant-launch",
    keys: ["handplant launch","handplant glitch","voler handplant","lancer handplant","plant launch"],
    title: "🤸 Handplant Launch Glitch",
    answer: `
<p>🤸 <strong>Handplant Launch Glitch</strong></p>
<p>En tentant certains <strong>handplants</strong> sur des arêtes spécifiques, le skateur peut être projeté à travers des sections de la map avec des trajectoires imprévisibles.</p>
<p>Résulte parfois en un vol court ou en un passage à travers le décor. Comportement non intentionnel lié au système de handplant revu en v0.29.1.</p>
<p>💡 Difficile à reproduire de façon consistante — très spot-dépendant.</p>`
  },

  {
    id: "season1-launch",
    keys: ["saison 1 launch","s1 launch","tpose","t pose","emote launch","old launch","hedgemont launch","barre jaune"],
    title: "📜 Launch Glitch Saison 1 (patché)",
    answer: `
<p>📜 <strong>Launch Glitch — Saison 1</strong> (historique — patché)</p>
<p><strong>Méthode originale :</strong> Manual trick → board au sol → right stick down → T-pose activée → utiliser un emote = propulsion vers le ciel. <strong>Patché après Season 1.</strong></p>
<p><strong>Méthode alternative (Hedgemont) :</strong><br>
① Aller à l'espace Hedgemont sur la map<br>
② Changer la taille du personnage à <strong>hauteur 3</strong> dans le menu apparence<br>
③ Trouver la barre jaune entre deux rampes<br>
④ Grimper la petite zone avant la rambarde<br>
⑤ Poser le board sur le bord répétitivement jusqu'à ce que 2 roues se coincent<br>
⑥ Descendre, s'approcher du board → <kbd class="ps-tri">△</kbd> → le board se libère et propulse !</p>
<p>Statut : partiellement disponible selon la version.</p>`
  },

  // ══════════════════════════════════════════
  // AUTRES GLITCHES
  // ══════════════════════════════════════════
  {
    id: "clap-glitch",
    keys: ["clap","emote glitch","voler emote","gravité","gravity","flotter","planer","clapping","applaudir"],
    title: "👏 Clap Glitch — Défi la gravité",
    answer: `
<p>👏 <strong>Clap Glitch (Gravity Defying)</strong></p>
<p>L'un des glitchs les plus fun de skate. — exploite le système d'émotes pour ignorer la gravité.</p>
<p><strong>Comment faire :</strong><br>
① Bail (wipeout) intentionnel<br>
② Appuyer sur le bouton <strong>Emote</strong> pendant la chute → slow-fall<br>
③ Maintenir l'émote pour une descente ultra lente<br>
④ Stick gauche vers les genoux pour encore plus lent<br>
⑤ Utiliser le bouton épaule droite avec l'émote → effets "vol"</p>
<p>✅ Full Circle a déclaré vouloir <em>garder</em> ce glitch car la communauté apprécie. Citations : "we enjoy watching the videos of you having fun with some glitches"</p>`
  },

  {
    id: "pop-glitch",
    keys: ["pop glitch","spinning ground","spin ground","sol spin","hippy spin"],
    title: "🌀 Pop Glitch (Ground Spin)",
    answer: `
<p>🌀 <strong>Pop Glitch</strong></p>
<p>Créé un effet de spin bizarre au niveau du sol.</p>
<p><strong>Méthode :</strong><br>
① Initier un Hippy Jump<br>
② Tenir la diagonale avant + spin<br>
③ Appuyer <kbd class="ps-r1">R1</kbd><br>
④ Dès que le bouton est pressé, le personnage atteint le sol en tournant</p>
<p>Résultat : rotation étrange au ras du sol. Glitch cosmétique principalement.</p>`
  },

  {
    id: "handplant-score",
    keys: ["handplant score","32k","points handplant","bug points","score infini","score bug","rip score bug","duplication"],
    title: "🏆 Handplant Score Glitch (32k+)",
    answer: `
<p>🏆 <strong>Handplant Score Bug</strong></p>
<p>Les handplants génèrent <strong>32 000+ points par handplant</strong> — comportement anormalement élevé connu depuis Season 1.</p>
<p>Connexe : <strong>Rip Score Bug</strong> — ouvrir une boîte de loot puis attendre ~2 secondes affiche un score de 150 000/12 500 et l'item apparaît deux fois avec un score massif (27k contre 6 250 requis).</p>
<p>Statut : Connu par Full Circle, pas encore patché en S4. Exploitable pour monter les niveaux rapidement.</p>`
  },

  {
    id: "out-of-bounds",
    keys: ["out of bounds","sous map","underground","softlock","coincé","stuck","bloqué","progresser","blocage","hors limites"],
    title: "🔻 Out of Bounds / Softlock",
    answer: `
<p>🔻 <strong>Out of Bounds & Softlock</strong></p>
<p>Plusieurs zones de San Vansterdam permettent de passer sous la map :</p>
<ul>
<li>Zones près du food truck à la glace</li>
<li>Certaines collisions de bords de map après un clip glitch</li>
</ul>
<p>⚠️ Résulte en un <strong>softlock semi-permanent</strong> — même le fast travel ou reset du marker ne fonctionne pas toujours.</p>
<p><strong>Fix :</strong> Menu → Réinitialiser le skateur depuis les options, ou reboot du jeu si persistant.</p>
<p>Full Circle a identifié ce bug comme <strong>priorité top</strong> avec une approche 3 étapes : identifier, batch fix, fix long terme.</p>`
  },

  {
    id: "popless-grind",
    keys: ["popless","grind exit","sortie grind","grind sans pop","sortie rail","rail exit"],
    title: "🛤️ Popless Grind Exit (patché v0.30.2)",
    answer: `
<p>🛤️ <strong>Popless Grind Exit</strong> — patché en v0.30.2</p>
<p>Permettait de quitter un grind <em>sans popper</em> le skateboard, créant des transitions inhabituelles et des combos impossibles.</p>
<p>Le v0.30.2 a également corrigé :<br>
— Low pop height (hauteur de pop trop basse)<br>
— Grind assist issues (assistance de grind bugguée)</p>
<p>Certains joueurs estiment que le fix a rendu les grinds <em>moins fluides</em> qu'avant.</p>`
  },

  // ══════════════════════════════════════════
  // DOUBLE GRINDS
  // ══════════════════════════════════════════
  {
    id: "double-grind",
    keys: ["double grind","double grinds","grind double","grind rapide","deux grinds","full circle","0.30.5","0305","feature"],
    title: "🔀 Double Grinds — Feature Officielle",
    answer: `
<p>🔀 <strong>Double Grinds</strong> — de glitch à feature</p>
<p>Découvert par accident : inputs rapides sur un rail déclenchent 2 tricks de grind en succession ultra-rapide. La communauté a immédiatement adoré le potentiel stylistique.</p>
<p><strong>Full Circle officiel :</strong> "To reiterate our stance on glitches, if they're not game-breaking and don't impact game performance, we're not going after them." → intégration v0.30.5.</p>
<p><strong>Technique :</strong> <kbd class="ps-r2">R2</kbd>+<kbd class="ps-dir">←</kbd> → immédiatement → <kbd class="ps-r2">R2</kbd>+<kbd class="ps-dir">→</kbd></p>
<p>✅ Non-bannable · Score ×2+ · <strong>OFFICIEL depuis v0.30.5</strong></p>`
  },

  // ══════════════════════════════════════════
  // CONTRÔLES PS
  // ══════════════════════════════════════════
  {
    id: "controls-ps",
    keys: ["contrôles","boutons","inputs","touches","comment faire","comment jouer","manette","ps5","ps4","commandes","controls"],
    title: "🎮 Contrôles PlayStation",
    answer: `
<p>🎮 <strong>Contrôles PlayStation — skate.</strong></p>
<p><strong>3 profils disponibles :</strong> Streamlined (débutant) · Classic (original) · Experienced (avancé)</p>
<p><strong>Moves de base :</strong><br>
— Stick gauche : diriger<br>
— Stick droit flick ↑ : Ollie<br>
— Stick droit flick ↓ puis ↑ : Pop (mode Classic)<br>
— Flicks variés stick droit : flip tricks<br>
— <kbd class="ps-r1">R2</kbd> : grab main droite · <kbd class="ps-r1">L2</kbd> : grab main gauche<br>
— <kbd class="ps-r1">R2</kbd>+<kbd class="ps-x">□</kbd> : One-Foot Grab (regular) · <kbd class="ps-r1">L2</kbd>+<kbd class="ps-x">□</kbd> (goofy)<br>
— <kbd class="ps-r1">L2</kbd>+<kbd class="ps-tri">○</kbd> : No-Foot Air<br>
— <kbd class="ps-x">X</kbd>+<kbd class="ps-sq">□</kbd> : Hippy Jump<br>
— <kbd class="ps-r1">R1</kbd>+<kbd class="ps-x">X</kbd> (en l'air, hors board) : Spread Eagle</p>
<p>💡 Le Flick-It Sensitivity est réglable dans les paramètres avancés (Preferences).</p>`
  },

  {
    id: "tricks-list",
    keys: ["tricks","liste tricks","flip tricks","kickflip","heelflip","360","hardflip","laserflip","tous les tricks","liste","skatepedia"],
    title: "🛹 Liste de Tricks",
    answer: `
<p>🛹 <strong>Liste complète de tricks (100+)</strong></p>
<p><strong>Flip Tricks :</strong> Kickflip · Heelflip · Pop Shuvit · Varial Kickflip · Hardflip · Inward Heelflip · 360 Flip · Laserflip · Darkslide · Impossible</p>
<p><strong>Nouveaux (S3+) :</strong> Finger Flips · Dark Tricks · Boneless améliorés (maintenant exécutables en ANY flip trick)</p>
<p><strong>Stances :</strong> Chaque trick peut être fait en 4 stances : Natural · Fakie · Switch · Nollie</p>
<p><strong>Direction :</strong> Tous les flip tricks peuvent être Frontside ou Backside</p>
<p><strong>Grabs :</strong> One-Foot Grab · No-Foot Air · Spread Eagle · + variantes L2/R2</p>
<p>💡 Consulte la <strong>Skatepedia</strong> in-game pour la liste complète avec inputs.</p>`
  },

  {
    id: "grinds",
    keys: ["grind","grinds","50-50","nosegrind","5-0","feeble","crooked","crooks","rail grind","types grinds"],
    title: "⚙️ Système de Grinds",
    answer: `
<p>⚙️ <strong>Système de Grinds</strong></p>
<p>Les deux trucks doivent se verrouiller sur le rail au bon moment.</p>
<p><strong>Types principaux :</strong><br>
— <strong>50-50</strong> : Les deux trucks sur le rail (entre les trucks)<br>
— <strong>Nosegrind</strong> : Truck avant grind, truck arrière suspendu<br>
— <strong>5-0 (Five-Oh)</strong> : Truck arrière grind, avant suspendu<br>
— <strong>Feeble Grind</strong> : Truck arrière sur le rail, avant de l'autre côté<br>
— <strong>Crooked (Crooks)</strong> : Comme nosegrind mais nose angled away + edge du deck frotte</p>
<p><strong>Facteurs :</strong> Angle d'approche · position des pieds · équilibre · timing</p>
<p><strong>Grind sur coping :</strong> Possible sur le coping (bord métal/plastique en haut des rampes)</p>`
  },

  // ══════════════════════════════════════════
  // SCORING
  // ══════════════════════════════════════════
  {
    id: "scoring",
    keys: ["score","points","multiplicateur","combo","system scoring","rip score","sequence","combo system","marquer points"],
    title: "🏆 Système de Score",
    answer: `
<p>🏆 <strong>Système de Score & Combos</strong></p>
<p><strong>Multiplicateur :</strong><br>
— Chaque move unique dans la séquence monte le multiplicateur jusqu'à <strong>×4</strong><br>
— ×4 boost massivement le score total<br>
— Gap entre tricks → multiplicateur redescend à ×1.5<br>
— Les spins et gaps overcomés ajoutent aussi au multiplicateur</p>
<p><strong>Pour maximiser :</strong><br>
— Mixer des types de tricks variés (flip, grind, grab, manual)<br>
— Répéter le même trick diminue sa valeur dans la séquence<br>
— Enchaîner sans contact board = multiplier effect<br>
— Les distances sur les tricks affectent le score</p>
<p><strong>Rip Score :</strong> Système de niveaux pour débloquer récompenses et cosmétiques.</p>`
  },

  // ══════════════════════════════════════════
  // GAME MODES
  // ══════════════════════════════════════════
  {
    id: "game-modes",
    keys: ["modes","mode de jeu","throwdown","quick drop","own the lot","session marker","speedlines","x games","spot battles","challenge"],
    title: "🕹️ Modes de Jeu",
    answer: `
<p>🕹️ <strong>Modes de Jeu — skate.</strong></p>
<p><strong>Throwdown :</strong> Battle en temps limité — score le plus haut dans une zone définie. Drop flag, paramètre la zone, skate.</p>
<p><strong>Quick Drop :</strong> Édit collaboratif en temps réel — stack objets, crée des spots avec d'autres joueurs. Cercle vert = zone éditaable.</p>
<p><strong>Own the Lot</strong> (S2) : Mode co-op 2-4 joueurs — max de requests en temps imparti. Retour de Skate 3.</p>
<p><strong>Speedlines</strong> (S3) : Critère de temps ajouté aux line challenges. Technique + vitesse.</p>
<p><strong>X Games Spot Battles</strong> (S4 mid-season, v0.31.5, 21 juillet 2026) : Compétitions multi-rounds, turn-based. Variante des Throwdowns.</p>
<p><strong>Session Marker :</strong> Sauvegarde en position Lip Mount pour drop-ins satisfaisants.</p>`
  },

  // ══════════════════════════════════════════
  // CARTE / LIEUX
  // ══════════════════════════════════════════
  {
    id: "map",
    keys: ["map","carte","ville","san vansterdam","quartier","hedgemont","market mile","gullcrest","brickswich","lieu","spot","où"],
    title: "🗺️ San Vansterdam — Carte & Quartiers",
    answer: `
<p>🗺️ <strong>San Vansterdam — Quartiers</strong></p>
<p><strong>Hedgemont</strong> (plus grand) :<br>
Bonski Skatepark · Tri-Towers · Hartcore Plaza · Blue Light Beach · Welcome Center · Isle of Grom (S3, version agrandie avec spillway classic)</p>
<p><strong>Market Mile :</strong><br>
Promenades surélevées · pentes pour vitesse · parcs communautaires · skatepark traditionnel</p>
<p><strong>Gullcrest Village :</strong><br>
Rolling Reverence (église avec skatepark intérieur) · garage avec mini-mega ramp sur le toit</p>
<p><strong>Brickswich</strong> :<br>
Lucre Financial Stadium "The Chum Bucket" (S4) · San Van Open venue · toits avec empty pools · bâtiments hauts</p>
<p>+ Casper Hotel Rooftop, Road Tunnel, Eelside Tunnels (S2)</p>`
  },

  // ══════════════════════════════════════════
  // HALL OF MEAT
  // ══════════════════════════════════════════
  {
    id: "hall-of-meat",
    keys: ["hall of meat","bail","chute","ragdoll","wipeout","os","squelette","crash","fall","fall damage"],
    title: "💀 Hall of Meat — Bails",
    answer: `
<p>💀 <strong>Hall of Meat</strong></p>
<p>Le système de wipeout ragdoll est de retour de Skate 3 — amélioré avec physique moderne.</p>
<p><strong>Score de bail basé sur :</strong><br>
— Distance parcourue en ragdoll<br>
— Nombre de fractures<br>
— Impacts spécifiques (head smash, roll, rebond)<br>
— Utilisation créative du terrain</p>
<p><strong>Squelette interactif :</strong> Diagramme qui met en évidence les os cassés en temps réel.</p>
<p><strong>Astuce scoring :</strong> Les chutes sur les escaliers en diagonal ou off de grandes hauteurs maximisent les points. Contrôle du stick pendant le ragdoll pour orienter les impacts.</p>
<p>💡 Le Clap Glitch (émote pendant la chute) interfère avec le Hall of Meat et peut annuler les points.</p>`
  },

  // ══════════════════════════════════════════
  // BUGS SAISON 4
  // ══════════════════════════════════════════
  {
    id: "bugs-s4",
    keys: ["bug","bugs","saison 4","switch","fakie","voiture","invisible","écran noir","black screen","ps4","world traffic","trafic","bug connu","known issues"],
    title: "🐛 Bugs Saison 4",
    answer: `
<p>🐛 <strong>Bugs actifs — Saison 4</strong></p>
<p><strong>1. Player Model Switch/Fakie</strong> (PS4/PS5)<br>
Déformation visuelle en stance Switch ou Fakie. Cosmétique uniquement. Workaround : changer de stance rapidement.</p>
<p><strong>2. Voitures Invisibles</strong> (PS4/PS5)<br>
Toggle "World Traffic" → véhicules disparus visuellement mais collision active. Workaround : re-toggle deux fois.</p>
<p><strong>3. Écran Noir Challenge</strong> (PS4 only)<br>
Freeze complet au lancement. Fix : Bouton PS → Quitter → Relancer.</p>
<p><strong>4. Rip Score Bug</strong> (toutes plateformes)<br>
Loot box + 2s → score affiché 150 000/12 500, item dupliqué. Pas corrigé en S4.</p>
<p><strong>5. Manual Detection</strong><br>
Certains manuels ne se détectent pas correctement dans les missions. Varie selon la vitesse d'approche.</p>`
  },

  // ══════════════════════════════════════════
  // SAISONS & VERSIONS
  // ══════════════════════════════════════════
  {
    id: "versions",
    keys: ["version","patch","update","0.28","0.29","0.30","0.31","changelog","historique","saison 1","saison 2","saison 3","patch notes","mise à jour"],
    title: "📅 Historique des Versions",
    answer: `
<p>📅 <strong>Historique des versions</strong></p>
<p><strong>v0.28.0</strong> (7 oct. 2025) : Stabilité, gameplay, customisation, UI, quickdrop/throwdown fixes</p>
<p><strong>v0.28.5</strong> (23 oct. 2025) : Fix crash majeur + valeurs Rip Chips/XP incorrectes</p>
<p><strong>v0.29.1</strong> (2 déc. 2025) : <strong>Saison 2</strong> — Impossibles, handplants, Own the Lot, nouvelles zones, thème 80s, Replay Editor, voice chat</p>
<p><strong>v0.30.1</strong> (10 mars 2026) : <strong>Saison 3</strong> — Dark Tricks, Boneless améliorés, Isle of Grom, Speedlines, tattoos, thème 70s</p>
<p><strong>v0.30.2</strong> (24 mars 2026) : Fix grinds (popless grind exit, low pop height, grind assist)</p>
<p><strong>v0.30.5</strong> (14 avril 2026) : Double Grinds officiels + balance</p>
<p><strong>v0.31.1</strong> (S4 launch, 2 juin 2026) : Finger Flips, Lucre Financial Stadium, X Games partnership, session markers</p>
<p><strong>v0.31.5</strong> (21 juillet 2026) : X Games Spot Battles mid-season</p>`
  },

  {
    id: "season4",
    keys: ["saison 4","season 4","s4","finger flip","x games","san van open","stade","chum bucket","nouveautés s4","juin 2026"],
    title: "🆕 Saison 4 — Contenu Complet",
    answer: `
<p>🆕 <strong>Saison 4 — 2 juin → 25 août 2026</strong></p>
<p><strong>Nouveau lieu :</strong> Lucre Financial Stadium ("The Chum Bucket") à Brickswich — venue du San Van Open</p>
<p><strong>Nouveaux tricks :</strong> Finger Flips (grand retour) avec plusieurs variantes</p>
<p><strong>Nouveau mode</strong> (21 juillet) : X Games Spot Battles — multi-rounds, turn-based</p>
<p><strong>Améliorations gameplay :</strong><br>
— Session markers sur Lip Mounts<br>
— Meilleures animations Air Coffin<br>
— Meilleur steering on-board<br>
— Transitions ground-to-air coffin</p>
<p><strong>Skate.Pass :</strong> 110 tiers (free + premium) · jusqu'à 1 500 San Van Bucks gagnables</p>
<p><strong>Partenariats :</strong> X Games · Nike SB · Go Skate Weekend · San Van Open Finals</p>`
  },

  // ══════════════════════════════════════════
  // CUSTOMISATION
  // ══════════════════════════════════════════
  {
    id: "customization",
    keys: ["custom","personnalisation","vêtements","board","deck","trucks","roues","apparence","cosmétiques","marques","brands","shop"],
    title: "👕 Customisation",
    answer: `
<p>👕 <strong>Système de Customisation</strong></p>
<p><strong>Skateur :</strong> Apparence complète · taille (1-3) · traits du visage · tattoos (52+, S3)</p>
<p><strong>Vêtements :</strong> Tops · bottoms · shoes · headwear · eyewear · socks · sets complets (170 options S3+)</p>
<p><strong>Board :</strong> Deck · grip tape · trucks · wheels · stickers · presets (140 options S3+)</p>
<p><strong>Marques :</strong> Vans · Girl · Chocolate · Dime · Thrasher · Royal Trucks · Dickies · Santa Cruz · Creature · Independent · Nike SB (S3+)</p>
<p><strong>Acquisition :</strong> Shop rotatif (San Van Bucks) · Level-up boxes · challenges · Skate.Pass free/premium</p>
<p><strong>Bonus S3 :</strong> 3 Skater Presets (slots supplémentaires = 250 San Van Bucks)</p>`
  },

  // ══════════════════════════════════════════
  // COMPARAISON SKATE 1/2/3
  // ══════════════════════════════════════════
  {
    id: "skate3-comparison",
    keys: ["skate 3","skate3","différence","comparaison","vs skate 3","vs skate3","one shot","old game","ancien jeu","skate 1","skate 2"],
    title: "🆚 Skate. vs Skate 1/2/3",
    answer: `
<p>🆚 <strong>Skate. vs les anciens</strong></p>
<p><strong>Skate 1 :</strong> Révolution Flick-It · pas de course à pied · local multi seulement · atmosphère réaliste/grunge · débuts du joueur</p>
<p><strong>Skate 2 :</strong> Introduit la course à pied · physique "la plus réaliste" selon les puristes · plus punitif · maps réalistes · favoris des connaisseurs</p>
<p><strong>Skate 3 :</strong> Plus coloré et arcade · tricks moins précis mais plus fun · Create-A-Park · multijoueur massif · Hall of Meat · Own the Lot · Speed glitch one-shot</p>
<p><strong>Skate. (actuel) :</strong> Free-to-play · live-service · 100+ tricks · physique moderne · Dark Tricks / Finger Flips / Boneless améliorés · Quick Drop · customisation massive · partenariats marques · Speed glitch accumulatif (pas one-shot)</p>
<p>🔑 Différence clé speed glitch : Skate 3 = 1 cycle → vitesse max. Skate. = accumulation progressive.</p>`
  },

  // ══════════════════════════════════════════
  // DÉCLARATIONS FULL CIRCLE
  // ══════════════════════════════════════════
  {
    id: "full-circle",
    keys: ["full circle","développeur","dev","ea","avis dev","stance glitch","politique glitch","20 millions","compensation","tix","san van bucks"],
    title: "💬 Full Circle — Positions Officielles",
    answer: `
<p>💬 <strong>Full Circle — Déclarations officielles</strong></p>
<p><strong>Sur les glitchs :</strong><br>
"To reiterate our stance on glitches, if they're not game-breaking and don't impact game performance, we're not going after them. Trust us, we enjoy watching the videos of you having fun with some glitches."</p>
<p><strong>Sur le lancement (20 millions de joueurs) :</strong><br>
"Things have not gone as smoothly for some of you as we would have liked. A lot more players joined us [...] than we expected."<br>
→ Compensation accordée : <strong>2 000 Tix + 500 San Van Bucks</strong> pour tous les joueurs connectés avant S2.</p>
<p><strong>Sur les softlocks :</strong> Approche 3 étapes → identifier, batch fix, fix long terme. Priorité top.</p>
<p><strong>Résumé :</strong> Full Circle écoute activement la communauté (ex. Double Grinds conservés). Glitchs non game-breaking = tolérés officiellement.</p>`
  },

  // ══════════════════════════════════════════
  // GLOSSAIRE
  // ══════════════════════════════════════════
  {
    id: "glossaire",
    keys: ["glossaire","terme","définition","vocabulaire","slang","jargon","bust","coping","transition","snake","line","spot","ledge","coping","bowl"],
    title: "📖 Glossaire Skate",
    answer: `
<p>📖 <strong>Glossaire — Termes clés</strong></p>
<p><strong>Spot :</strong> Lieu avec éléments skatable · <strong>Bust :</strong> Spot où tu te fais virer (éviter)<br>
<strong>Bowl :</strong> Structure en béton avec fond plat et coping · <strong>Box :</strong> Structure rectangulaire grindable<br>
<strong>Ledge :</strong> Muret ou bordure pour slides/grinds · <strong>Rail :</strong> Barre métallique sur escaliers/rampes<br>
<strong>Coping :</strong> Bord métal/plastique en haut des transitions · <strong>Transition :</strong> Partie inclinée d'une rampe<br>
<strong>Line :</strong> Séquence de tricks chaînés OU chemin planifié dans un spot<br>
<strong>Snake :</strong> Quelqu'un qui te coupe ta ligne · <strong>Combo :</strong> Tricks chaînés en continuité<br>
<strong>Pop :</strong> Saut du board · <strong>Grab :</strong> Tenir le board en l'air<br>
<strong>Fakie :</strong> Rouler en arrière dans sa stance normale · <strong>Switch :</strong> Stance opposée à la normale<br>
<strong>Nollie :</strong> Ollie depuis le nose · <strong>Manual :</strong> Wheelie sur 2 roues</p>`
  },

  // ══════════════════════════════════════════
  // CONSEILS DÉBUTANT
  // ══════════════════════════════════════════
  {
    id: "debuter",
    keys: ["conseil","astuce","débuter","débutant","commencer","apprendre","facile","ordre","tips","aide","help","progresser"],
    title: "💡 Conseils Débutant",
    answer: `
<p>💡 <strong>Par où commencer ?</strong></p>
<p><strong>Ordre recommandé pour les glitchs :</strong><br>
① <strong>Scaffold Launch</strong> — timing simple, résultat spectaculaire immédiat<br>
② <strong>Double Grinds</strong> — rythmique, safe (officiel), s'améliore vite<br>
③ <strong>Spread Eagle Speed</strong> — le plus puissant mais demande coordination</p>
<p><strong>Pour le Spread Eagle :</strong> Commence sur la longue descente de Hedgemont. Plus de temps pour chaque step sans pression d'espace.</p>
<p><strong>Paramètre recommandé :</strong> Mode "Streamlined" pour débuter → passe en "Classic" ou "Experienced" une fois à l'aise.</p>
<p><strong>Score :</strong> Mix tricks variés (flip + grind + grab + manual) pour maintenir le ×4 multiplicateur.</p>
<p>⚠️ Early Access : patches possibles. Seuls les Double Grinds sont <strong>100% safe</strong> (intégrés v0.30.5).</p>`
  },

  {
    id: "patch-risk",
    keys: ["patch","patcher","ban","bannable","risque","interdit","sera patché","future patch","safe ou pas"],
    title: "⚠️ Risques de Patch",
    answer: `
<p>⚠️ <strong>Risques de patch</strong></p>
<p><strong>Statut actuel (S4, juin 2026) :</strong></p>
<p>✅ <strong>Double Grinds</strong> : SAFE — officiellement intégrés v0.30.5</p>
<p>🟡 <strong>Spread Eagle Speed</strong> : Non commenté par Full Circle. Popular = moins de risque.</p>
<p>🟡 <strong>Scaffold Launch</strong> : Bug de physique non patché. Probabilité faible de patch immédiat.</p>
<p>🟡 <strong>Clap Glitch</strong> : Full Circle a déclaré apprécier les vidéos. Probablement conservé.</p>
<p>🔴 <strong>Popless Grind Exit</strong> : PATCHÉ en v0.30.2</p>
<p>🔴 <strong>Season 1 T-pose Launch</strong> : PATCHÉ</p>
<p><strong>Politique officielle Full Circle :</strong> "Glitchs non game-breaking → on ne les patch pas."</p>`
  }

];

// ══════════════════════════════════════════
// ENGINE DE RECHERCHE
// ══════════════════════════════════════════
function findAnswer(question) {
  const q = question.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/['']/g, "'");

  // Score each KB entry
  let best = null, bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const kw of entry.keys) {
      const k = kw.normalize("NFD").replace(/[̀-ͯ]/g, "");
      if (q.includes(k)) score += k.length; // longer keyword match = higher score
    }
    if (score > bestScore) { bestScore = score; best = entry; }
  }

  if (best && bestScore > 0) return best.answer;

  return `<p>🤔 Je n'ai pas d'info précise sur ça dans ma base de données.</p>
<p>Essaie des mots-clés comme : <strong>Spread Eagle · Scaffold · Double Grinds · Hall of Meat · Saison 4 · Contrôles PS · Score · Grinds · Map · Bugs · Versions · Finger Flips · Clap Glitch · Full Circle</strong></p>`;
}

// ══════════════════════════════════════════
// CHAT UI
// ══════════════════════════════════════════
function askQ(q) {
  document.getElementById("ai-input").value = q;
  sendMsg();
}

function sendMsg() {
  const inp = document.getElementById("ai-input");
  const q = inp.value.trim();
  if (!q) return;
  const area = document.getElementById("chat-area");

  const BOT_SVG = `<svg viewBox="0 0 32 32" width="32" height="32"><rect width="32" height="32" rx="6" fill="rgba(230,57,70,0.15)" stroke="rgba(230,57,70,0.4)" stroke-width="1"/><rect x="8" y="8" width="16" height="12" rx="2" fill="none" stroke="#e63946" stroke-width="1.5"/><circle cx="12" cy="14" r="2" fill="#e63946"/><circle cx="20" cy="14" r="2" fill="#e63946"/><line x1="10" y1="24" x2="14" y2="20" stroke="#e63946" stroke-width="1.5"/><line x1="22" y1="24" x2="18" y2="20" stroke="#e63946" stroke-width="1.5"/></svg>`;

  // user
  const u = document.createElement("div");
  u.className = "ai-msg user msg-in";
  u.innerHTML = `<div class="aim-content"><div class="aim-text">${esc(q)}</div></div>`;
  area.appendChild(u);
  inp.value = "";
  area.scrollTop = area.scrollHeight;

  // typing
  const t = document.createElement("div");
  t.className = "ai-msg bot msg-in";
  t.innerHTML = `<div class="aim-avatar">${BOT_SVG}</div><div class="aim-content"><div class="aim-name">GLITCH_AI</div><div class="aim-text"><span class="t-dot"></span><span class="t-dot"></span><span class="t-dot"></span></div></div>`;
  area.appendChild(t);
  area.scrollTop = area.scrollHeight;

  const delay = 700 + Math.random() * 600;
  setTimeout(() => {
    t.remove();
    const b = document.createElement("div");
    b.className = "ai-msg bot msg-in";
    b.innerHTML = `<div class="aim-avatar">${BOT_SVG}</div><div class="aim-content"><div class="aim-name">GLITCH_AI</div><div class="aim-text">${findAnswer(q)}</div></div>`;
    area.appendChild(b);
    area.scrollTop = area.scrollHeight;
  }, delay);
}

function esc(s) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
