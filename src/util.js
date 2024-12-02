import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Santa's Coming!",
      cover:
        "https://musicvine.imgix.net/images/roo-walker-avatar-v1_6433453453952445.jpg?w=384&q=50&fit=max&auto=format%2Ccompress",
      artist: "Roo Walker",
      audio:
        "https://cdn.uppbeat.io/audio-files/b0012a431c371f6d67c58804353851a8/d9d3ff89899419225bfed9af8741cf5a/3a55f2742f961fb60d0866b0a290aab5/STREAMING-santa-s-coming-roo-walker-main-version-21349-02-41.mp3",
      color: ["#80ACD3", "#2F5D86"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Magical Christmas",
      cover:
        "https://imgix.uppbeat.io/images/Paul-Yudin_Avatar_6187338340585115.jpg?w=384&q=50&fit=max&auto=format%2Ccompress",
      artist: "Paul Yudin",
      audio:
        "https://cdn.uppbeat.io/audio-files/fabca43253b27cfd78217d5cd423028e/705d82aef2ce93dee56c87543c5bd404/b5b647a20aed7a9f5c62581798f388be/STREAMING-magical-christmas-paul-yudin-main-version-19227-01-40.mp3",
      color: ["#80646D", "#432130"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tis The Season",
      cover:
        "https://musicvine.imgix.net/images/all-good-folks-avatar-v1_4282299045668081.jpg?w=384&q=50&fit=max&auto=format%2Ccompress",
      artist: "All Good Folks",
      audio:
        "https://cdn.uppbeat.io/audio-output/161/1787/main-version/streaming-previews/STREAMING-tis-the-season-all-good-folks-main-version-01-51-6287.mp3",
      color: ["#FA5033", "#D32F0D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Deck The Halls",
      cover:
        "https://imgix.uppbeat.io/images/Kevin-MacLeod_Avatar__1__5408175682020003.jpg?w=384&q=50&fit=max&auto=format%2Ccompress",
      artist: "Kevin MacLeod",
      audio:
        "https://cdn.uppbeat.io/audio-files/74f6e1c9af9ef389939cf86b44c96030/f75a57f6552070b209cd7d816be70056/9a7fe9cb38a255362b648b7f879256a8/STREAMING-deck-the-halls-kevin-macleod-main-version-9985-04-25.mp3",
      color: ["#00DFFF", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "It's That Time Of Year",
      cover:
        "https://musicvine.imgix.net/images/pecan-pie-avatar-v1_7168535190190030.jpg?w=384&q=50&fit=max&auto=format%2Ccompress",
      artist: "Pecan Pie",
      audio:
        "https://cdn.uppbeat.io/audio-files/6fe37c64db62e03d698e462645fa35a7/a4aeb2b5ee464e21c7b4ec848f05b8b6/6ec62d2296e36f8e72932271c4942e1d/STREAMING-it-s-that-time-of-year-pecan-pie-main-version-6006-02-21.mp3",
      color: ["#A9A498", "#4B2D23"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Winter Morning",
      cover:
        "https://imgix.uppbeat.io/images/Soundroll_Avatar_6273087742847101.jpg?w=384&q=50&fit=max&auto=format%2Ccompress",
      artist: "Soundroll",
      audio:
        "https://cdn.uppbeat.io/audio-files/1eaed6f18d69074e114db529f2bd7e46/cb170079bbaeba32e38b32bd2923c2fd/19ed1b2aaac10fb2fdf2c5a01310ba5b/STREAMING-winter-morning-soundroll-main-version-9950-01-26.mp3",
      color: ["#FFE343", "#FFAE05"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "O Christmas Tree",
      cover:
        "https://imgix.uppbeat.io/images/The-Lakes_Avatar-Uppbeat_1945714789577893.jpg?w=384&q=50&fit=max&auto=format%2Ccompress",
      artist: "The Lakes",
      audio:
        "https://cdn.uppbeat.io/audio-files/c5b73870ffd3752d890450f20b9e075c/91b9c76349648c6863c0e677c70a0645/0af40fbfe81f6eaf65bef48513530c15/STREAMING-o-christmas-tree-the-lakes-main-version-23219-02-42.mp3",
      color: ["#4E4942", "#657158"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
