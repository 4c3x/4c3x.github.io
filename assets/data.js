// Single source of truth for DagusOS (desktop, phone home screen and the CV page).

export const PROFILE = {
  name: "Dagus Ansi",
  role: "Security-focused software engineer",
  email: "dagusansi21@gmail.com",
  linkedin: "https://www.linkedin.com/in/dagusansi",
  github: "https://github.com/4c3x",
  location: "Nigeria",
  timezone: "WAT (UTC+1)",
  availability: "Open to remote roles and freelance work",
  intro:
    "I build mobile apps, web platforms and the backends behind them, and I ship them to the App Store and Google Play. " +
    "I started out in cybersecurity, so I build with an attacker's view: who can read this table, and what happens if someone fakes this request.",
  stack: ["Flutter", "React", "Next.js", "TypeScript", "Supabase", "Node.js", "Python", "Firebase"],
};

const ios = (id) => `https://apps.apple.com/gb/app/id${id}`;
const play = (id) => `https://play.google.com/store/apps/details?id=${id}`;

export const APPS = [
  { id: "var66", name: "VAR66", tag: "Football prediction game", ios: ios(6757132037), android: play("com.vr.var6"),
    about: "A free-to-play game where football fans predict match results and compete on leaderboards.",
    stack: ["Flutter", "Supabase", "PawaPay"] },
  { id: "ukaccoms", name: "UK Accoms", tag: "Vetted UK housing", ios: ios(6818482994), android: play("com.uk.ukaccoms"),
    about: "Helps students, workers and new arrivals find somewhere to live in the UK. Every property is checked before it is listed.",
    stack: ["Flutter", "Supabase", "Stripe"] },
  { id: "zaroba", name: "Zaroba", tag: "Buy and sell marketplace", ios: ios(6794011088), android: play("com.brussellakeparagon.zaroba"),
    about: "A marketplace for selling things you no longer need and finding deals nearby, with in-app messaging between buyers and sellers." },
  { id: "pathly", name: "Pathly Journey", tag: "Life skills for young people", ios: ios(6761062541), android: play("com.pathlyyoungster.app"),
    about: "Helps young people in supported housing build independence: sessions, goals, progress tracking and messages with their support network.",
    stack: ["Flutter", "NestJS", "Prisma", "Supabase"] },
  { id: "kickoff", name: "KickOff Padel", tag: "Padel for football fans", ios: ios(6755429786), android: play("com.rivalrally.kickoffpadel"),
    about: "Football fans find nearby padel courts, match with rival supporters and settle it on court before the game." },
  { id: "diasporahub", name: "Diaspora Hub", tag: "Invest and trade in Africa", ios: ios(6743369761), android: play("com.thediasporahub.diasporahub"),
    about: "Connects Africans abroad with verified investment, trade, tourism and healthcare opportunities across Africa.",
    stack: ["Flutter", "Supabase"] },
  { id: "frontrow", name: "Front Row", tag: "Salon client app", android: play("digital.frontrow.client"),
    about: "A salon's clients keep their hair prescriptions, beauty routines and rewards in one app.",
    stack: ["Flutter", "Supabase"] },
  { id: "frontrowstylist", name: "Front Row Stylist", tag: "Tools for stylists", android: play("digital.frontrow.stylist"),
    about: "Stylists manage clients, hair prescriptions and product recommendations in one place.",
    stack: ["Flutter", "Supabase"] },
  { id: "anm", name: "A.N.M. Money", tag: "Books and personal growth", ios: ios(6759561399), android: play("com.anm.anmoney"),
    about: "Books, quizzes and personal-growth tools from author Bobby E. Olamide.",
    stack: ["Flutter", "Supabase", "Firebase"] },
  { id: "achut", name: "Achut", tag: "Waste removal booking", ios: ios(6779344251), android: play("com.achutapp.achut"),
    about: "Book waste collections and clearances, track each job and get updates from your phone.",
    stack: ["Flutter", "Supabase"] },
  { id: "tip", name: "TIP", tag: "Group savings", ios: ios(6761170289), android: play("com.tip.tipapp"),
    about: "Runs rotating group savings plans with a clear schedule, so every member knows who pays and who collects." },
  { id: "squaddi", name: "Squaddi", tag: "Live events and voting", ios: ios(6759611949),
    about: "Discover events, buy tickets, watch live streams and vote for performers in real time." },
  { id: "topbantz", name: "TopBantz", tag: "Football fan social", ios: ios(6756184611),
    about: "Live team lobbies and battle rooms where fans chat with their club's supporters and take on rivals." },
  { id: "kichacha", name: "Kichacha Dance", tag: "Dance matching and events", ios: ios(6767593498),
    about: "Dancers match with partners and find dance events nearby, from salsa and bachata to afrobeats." },
  { id: "gblaze", name: "Gblaze", tag: "Studio bookings and merch", ios: ios(6758238517),
    about: "The official G Blaze Productions app: design collections, merch and studio session bookings." },
  { id: "diggerbyday", name: "Digger by Day", tag: "Excavator hire", ios: ios(6757637507),
    about: "Builders and contractors rent excavators by the day or week from verified owners nearby." },
  { id: "pathlyworker", name: "Pathly Worker", tag: "For support workers", ios: ios(6761655998),
    about: "Support staff track goals, run key-working sessions and stay in touch with the young people they support.",
    stack: ["Flutter", "NestJS", "Supabase"] },
  { id: "afriroute", name: "Afri-Routa", tag: "African food and fashion, UK", android: play("com.afri.routa"),
    about: "Authentic African food, drinks and clothing, delivered across the UK." },
  { id: "gatepass", name: "GatePass", tag: "Smart gate access", android: play("com.gatepass.app"),
    about: "Gate and barrier access control for residents and property managers." },
  { id: "hsa", name: "Health Service Africa", tag: "Book a doctor online", android: play("com.healthserviceafrica.hsa"),
    about: "Book doctors, chat privately and manage your health, with care available across Africa." },
];

export const SITES = [
  { id: "pbtc", name: "Powered By The Culture", url: "https://poweredbytheculture.com",
    about: "A news and culture publication with its own newsroom CMS." },
  { id: "manyrooms", name: "Many Rooms", url: "https://manyrooms.co",
    about: "A marketplace for booking photo, video and podcast studios across the UK." },
  { id: "salabed", name: "Salabed", url: "https://salabed.com",
    about: "A cargo and logistics company site with a real-time CMS and enquiry inbox." },
  { id: "kickoffweb", name: "KickOff Padel", url: "https://kickoffpadel.club",
    about: "The web side of the padel app." },
];

export const BUILDING = [
  { name: "Front Row", url: "https://front-row-app.vercel.app",
    about: "A salon platform. The client and stylist apps are on Google Play; iOS, push notifications and the in-salon display come next." },
  { name: "Emergency Tyres UK", url: "https://uk-emergency-tyres.vercel.app",
    about: "Roadside tyre help, from request to fitter. The web app is live and the mobile apps are on their way to the stores." },
  { name: "Zaroba", about: "Rebuilding the live marketplace app in Flutter." },
  { name: "Anansi Connect", about: "A trade, talent and advisory platform connecting African and Caribbean businesses." },
];

export const CASES = [
  { icon: "siren", title: "Incident response",
    text: "I found a production web server running a crypto miner with a root backdoor. I traced how the attackers kept getting back in (an unauthenticated login bypass in a WordPress plugin), blocked it, deleted 156 attacker-created admin accounts and rebuilt every site and mailbox on a clean, hardened server. The switchover took under 30 minutes." },
  { icon: "credit-card", title: "Payments",
    text: "On a live app taking mobile-money payments, the webhook trusted whatever status was posted to it, so anyone could have marked a payment as completed. I rewrote it to confirm every payment with the provider's API before crediting anything." },
  { icon: "database", title: "Data access",
    text: "Row-level security goes on every table in the same migration that creates it, and anything the public API key could read gets locked down. The Supabase security advisor is clean before launch." },
  { icon: "lightning", title: "Load testing",
    text: "I load-test before launch day. The most recent run: 800 simulated users over five minutes, zero errors." },
];

// TODO(linkedin): replace with the exact timeline and certificates from the LinkedIn PDF.
export const EXPERIENCE = [
  { role: "Senior Software Engineer", org: "Brussel Lake Paragon", when: "Now" },
  { role: "Head of ICT", org: "Africa Diaspora Corporation", when: "Now" },
  { role: "Cyber Security Intern", org: "National Defence College, Abuja", when: "Feb 2022 to Aug 2022" },
];

export const EDUCATION = [
  { title: "B.Tech, Cyber Security Science", org: "Federal University of Technology, Minna" },
];

export const CERTS = [
  { title: "IBM Cybersecurity Analyst", org: "IBM, via Coursera" },
  { title: "Google Cybersecurity Professional", org: "Google, via Coursera" },
  { title: "Ethical Hacker", org: "Cisco" },
  { title: "Cyber Diplomacy", org: "United Nations" },
];
