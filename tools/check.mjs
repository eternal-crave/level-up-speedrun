// Status + coverage audit for the Level Up course modules.
// Usage: node tools/check.mjs [--strict]
//   default : one status line per module
//   --strict: also lists every book section title that the notes don't seem to cover
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = "C:/Users/user/AppData/Local/Temp/claude/C--Projects-Learn/7b15e540-c2a3-4869-ba62-55fe75a31337/scratchpad/book/full.txt";
const strict = process.argv.includes("--strict");

// Book sections per module (from the table of contents) + the line where the chapter's
// "Universal Truths and Clever Ideas" list starts in the text extract, and where the chapter ends.
const MODULES = [
  { id: "L00", sections: ["Foreword", "About the Author", "Press Start", "Everything I Learned about Writing a Book"] },
  { id: "L01", truths: [1744, 1760], sections: ["A Brief History of Video Games", "Game Genres", "Who Makes this Stuff", "Programmer", "Artist", "Designer", "Producer", "Tester", "Composer", "Sound Designer", "Writer", "Have You Thought about Publishing", "Product Manager", "Creative Manager", "Art Director", "Technical Director", "And the Rest"] },
  { id: "L02", truths: [2198, 2215], sections: ["Where to Get Them and Where to Stick Them", "What do Gamers Want", "Why I Hate Fun", "Brainstorming", "Breaking Writer's Block"] },
  { id: "L03", truths: [2904, 2925], sections: ["Triangle of Weirdness", "Time to Wrap It Up", "Creating Characters", "Writing for Kids", "Writing for Licenses"] },
  { id: "L04", truths: [3951, 3985], sections: ["One-Sheet", "ESRB Ratings", "Ten-Pager", "Rule of Threes", "Ten-Pager Outline", "Game Design Document", "Gameplay Progression", "Beat Chart", "Don't Be a Schmuck"] },
  { id: "L05", truths: [5345, 5370], sections: ["Do We Really Need Another Badass", "Let's Get Personal", "Finally, We Talk about Gameplay", "Why Walk When You Can Run", "The Art of Doing Nothing", "Might as Well Jump", "Hoists and Teeters", "What Goes Up, Must Fall Down", "Me and My Shadow", "The Water's Fine", "Four-Legged Friends", "Using All of the Parts", "We Are Not Alone", "People in Your Neighborhood"] },
  { id: "L06", truths: [6324, 6355], sections: ["Camera Views", "First Person Camera", "Third Person Camera", "Giving Up Control", "Two and a Half D", "Isometric Camera", "Top-Down Camera", "Special Case Cameras", "Tunnel Vision", "Camera Shot Guide", "Camera Angle Guide", "Camera Movement Guide", "Other Camera Notes", "Point the Camera to the Objective", "Never Let the Character Get Out of the Camera's Sight", "Multiple Player Cameras"] },
  { id: "L07", truths: [6825, 6860], sections: ["Dance, Monkey, Dance", "Character or Camera Relative", "Shake, Rattle and Roll"] },
  { id: "L08", truths: [7862, 7920], sections: ["Health Bar", "Targeting", "Ammo Gauge", "Inventory", "Score", "Radar", "Context-Sensitive Prompt", "The Clean Screen", "Icon Has Cheezburger", "Don't Get QTE", "Where to Stick", "Other Screens Than the HUD", "The Pause that Refreshes", "A Final Word on Fonts"] },
  { id: "L09", truths: [9163, 9225], sections: ["Top 10 Cliché Video Game Themes", "The Name Game", "Learned from Disneyland", "Beat Chart", "Re-using Re-use", "Gary Gygax", "Arneson", "Wrapping Up Mapping", "Illusional Narrative", "Gray Matters", "Leave the Training Level for Last"] },
  { id: "L10", truths: [10696, 10735], sections: ["400 Quatloos on the Newcomer", "Now You have to Kiss Me", "On Moving", "On Guarding", "State of the Art Bang Bang", "The Best Gun for You", "Run and Gun", "Not Just Shooting", "Where Doesn't It Hurt", "Death: What is It Good For"] },
  { id: "L11", truths: [12267, 12295], sections: ["Bring on the Bad Guys", "I Love Designing Enemies", "I Hate You to Pieces", "Non-Enemy Enemies", "World's Greatest Boss Battle", "Who's the Boss", "Size Matters", "Location, Location, Location", "Why Not to Create the World's Greatest Boss Battle"] },
  { id: "L12", truths: [13089, 13155], sections: ["Holy Death Trap", "Time to Die", "The Music of Mechanics", "A Nice Little Calm Spot", "Riddle Me This", "Minigames and Microgames"] },
  { id: "L13", truths: [14087, 14145], sections: ["Love Thy Player", "More Wealth Than You Can Imagine"] },
  { id: "L14", truths: [14540, 14565], sections: ["How Many is the Right Number", "MMORPGs", "Hell is Other People"] },
  { id: "L15", truths: [15018, 15050], sections: ["Sounds Like a Game to Me"] },
  { id: "L16", truths: [15446, 15480], sections: ["How to Write a Screenplay in Eight Easy Steps"] },
  { id: "L17", truths: [15839, 15900], sections: ["No One Cares about Your Stupid Little World", "Video Games is a Haaaard Business", "What to Do for an Encore", "Continue", "Exactly Like Making Chili"] },
  { id: "BX", sections: ["One-Sheet", "Ten-Page", "Game Design Document Template", "Story Themes", "Environments", "Mechanics and Hazards", "Enemy Design Template", "Boss Design Template", "Pitch Presentation"] },
  { id: "F2P1", sections: [] },
  { id: "F2P2", sections: [] },
];

const REQUIRED = ["id", "order", "kind", "label", "title", "bookPages", "emoji", "tagline", "f2pRelevance", "f2pWhy", "minutes", "tldr", "sections", "truths", "mnemonics", "flashcards", "quiz", "sideQuests", "mainQuests", "playLabs", "retrieval", "feynman", "links"];

const src = fs.existsSync(SRC) ? fs.readFileSync(SRC, "latin1").split(/\r?\n/) : [];
const norm = (s) => s.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();
const STOP = new Set(["the", "and", "for", "you", "your", "with", "from", "that", "this", "what", "when", "are", "can", "about", "have", "them", "where", "then", "into", "than", "not"]);

function countSourceTruths([from, to]) {
  // bullets are 0xB7 in the latin1 extract; a wrapped bullet continues on lines without one
  let n = 0;
  for (let i = from; i < Math.min(to, src.length); i++) {
    if (i > from && /^\s*Leve[lI]\s+\d+\s*$|Continue\?|Time To Level Up/.test(src[i])) break; // next chapter's title page
    if (/^\s*\u00b7\s/.test(src[i])) n++;
  }
  return n;
}

function sectionCovered(title, notesNorm) {
  const t = norm(title);
  if (notesNorm.includes(t)) return true;
  const words = t.split(" ").filter((w) => w.length >= 4 && !STOP.has(w));
  if (!words.length) return notesNorm.includes(t);
  const hit = words.filter((w) => notesNorm.includes(w)).length;
  return hit / words.length >= 0.75;
}

const notesDir = path.join(ROOT, "notes");
const dataDir = path.join(ROOT, "data");
const noteFiles = fs.existsSync(notesDir) ? fs.readdirSync(notesDir) : [];
let done = 0;
const rows = [];
for (const m of MODULES) {
  const nf = noteFiles.find((f) => f.startsWith(m.id + "-"));
  const notes = nf ? fs.readFileSync(path.join(notesDir, nf), "utf8") : "";
  const notesNorm = norm(notes);
  const hasFeynman = /feynman/i.test(notes.slice(-6000));
  let json = null, jsonErr = "";
  const jf = path.join(dataDir, m.id + ".json");
  if (fs.existsSync(jf)) {
    try { json = JSON.parse(fs.readFileSync(jf, "utf8")); } catch (e) { jsonErr = "JSON PARSE ERROR: " + e.message.slice(0, 80); }
  }
  const missingKeys = json ? REQUIRED.filter((k) => !(k in json)) : [];
  const bites = json?.sections?.reduce((a, s) => a + (s.bites?.length || 0), 0) ?? 0;
  const srcTruths = m.truths ? countSourceTruths(m.truths) : null;
  const missSections = m.sections.filter((s) => !sectionCovered(s, notesNorm));
  const ok = notes.length > 8000 && hasFeynman && json && !missingKeys.length;
  if (ok) done++;
  const status = ok ? "DONE " : !notes && !json ? "TODO " : "PART ";
  let line = `${status} ${m.id.padEnd(5)} notes ${String(Math.round(notes.length / 1024)).padStart(3)}KB${hasFeynman ? "" : " (no end)"}`;
  line += json ? ` | json ok: ${json.sections?.length ?? 0} sec, ${bites} bites, ${json.flashcards?.length ?? 0} cards, ${json.quiz?.length ?? 0} quiz, ${json.truths?.length ?? 0} truths` : jsonErr ? ` | ${jsonErr}` : " | no json";
  if (missingKeys.length) line += ` | MISSING KEYS: ${missingKeys.join(",")}`;
  if (srcTruths !== null) line += ` | src truths ${srcTruths}`;
  if (notes && missSections.length) line += ` | ${missSections.length}/${m.sections.length} sections unmatched`;
  rows.push(line);
  if (strict && notes && missSections.length) rows.push("        unmatched: " + missSections.join(" · "));
}
console.log(rows.join("\n"));
console.log(`\n${done}/${MODULES.length} modules done`);
