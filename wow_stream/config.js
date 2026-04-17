/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║          WoW STREAM OVERLAY — FICHIER DE CONFIG          ║
 * ║   Modifie uniquement ce fichier pour tout personnaliser  ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  // ── IDENTITÉ ────────────────────────────────────────────────
  streamer: {
    pseudo:       "TonPseudo",
    guilde:       "",                   // Ex: "Les Gardiens d'Azeroth" — laisser vide pour masquer
    serveur:      "Ysondre — EU",
    classe:       "Démoniste",          // Classe WoW affichée
    faction:      "horde",              // "horde" ou "alliance"
    contenu:      "Mythic+ / PvP",      // Contenu du jour
  },

  // ── RÉSEAUX SOCIAUX ─────────────────────────────────────────
  socials: {
    twitch:   "twitch.tv/tonpseudo",
    discord:  "discord.gg/tonserveur",
    twitter:  "@tonpseudo",
    youtube:  "youtube.com/@tonpseudo",
    tiktok:   "",                       // Laisser vide pour masquer
  },

  // ── TEXTES DES OVERLAYS ─────────────────────────────────────
  overlays: {

    debut: {
      titre:      "LE LIVE COMMENCE",
      sousTitre:  "Prépare-toi au combat",
      tagline:    "Azeroth Chronicles • Stream",
      badge:      "EN DIRECT",
    },

    enjeu: {
      objectifTitre:  "Objectif",
      objectifLigne1: "Mythic+ niveau 15",
      objectifLigne2: "Donjon : Le Nid de Vipères",
      commandes: ["!build", "!discord", "!social", "!commandes"],
    },

    pause: {
      titre:      "PAUSE",
      sousTitre:  "De retour dans un instant…",
      message:    "Prends un verre, on revient vite !",
      contenuCarte: "Mythic+",
    },

    fin: {
      titre:      "À BIENTÔT",
      sousTitre:  "Merci d'avoir regardé le live",
      message:    "Gloire aux braves d'Azeroth",
      cta:        "Suivez pour ne rien manquer !",
    },

  },

  // ── THÈME VISUEL ────────────────────────────────────────────
  theme: {
    // Couleurs principales
    gold:         "#ffd700",
    goldDark:     "#c8920a",
    goldDim:      "#7a5500",
    accent:       "#9060ff",            // Couleur d'accent (violet par défaut)
    
    // Couleurs de faction
    hordeColor:   "#cc2200",
    allianceColor:"#0055cc",

    // Particules
    particles:    true,                 // Activer les particules flottantes
    particleCount: 45,
  },

};

// Export pour les overlays
if (typeof module !== 'undefined') module.exports = CONFIG;
