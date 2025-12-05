// ---- SONG DATABASE WITH YOUR SNIPPETS ----
// Search works on lyrics, song title, and artist.

const songsDatabase = [
  {
    title: "Invisible Scars",
    artist: "Rod Wave",
    lyrics: "she say, come save me"
  },
  {
    title: "A Couple Minutes",
    artist: "Olivia Dean",
    lyrics: "only have a couple minutes and we'er going back to real life"
  },
  {
    title: "Never Find",
    artist: "Jah Cure",
    lyrics: "no one in this lifetime to love you like i do"
  },
  {
    title: "Adorn",
    artist: "Miguel",
    lyrics: "and these eyes yeah they can't wait to see your grin"
  },
  {
    title: "Burn, Burn, Burn",
    artist: "Zach Bryan",
    lyrics: "a kind kind lady and a place to take her"
  },
  {
    title: "Is It a Crime",
    artist: "Mariah the Scientist & Kali Uchis",
    lyrics: "i think i lost my patience and now i can't contain it"
  },
  {
    title: "WITCHYA",
    artist: "Justin Bieber",
    lyrics: "i get frustrated when my mind goes"
  },
  {
    title: "Praise Jah In the Moonlight",
    artist: "YG Marley",
    lyrics: "these roads of flames are catching a fire"
  },
  {
    title: "Charlene",
    artist: "Anthony Hamilton",
    lyrics: "she must have told me a thousand times or more"
  },
  {
    title: "If I Ain't Got You",
    artist: "Alicia Keys",
    lyrics: "some people live just for the fame"
  }
];

const lyricsInput = document.getElementById("lyricsInput");
const searchBtn = document.getElementById("searchBtn");
const statusEl = document.getElementById("status");
const resultsContainer = document.getElementById("resultsContainer");

function clearResults() {
  resultsContainer.innerHTML = "";
}

function showStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.classList.toggle("error", isError);
}

function renderResults(matches) {
  clearResults();

  if (matches.length === 0) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.textContent = "No songs found. Try different lyrics, title, or artist.";
    resultsContainer.appendChild(noResults);
    return;
  }

  matches.forEach(song => {
    const item = document.createElement("div");
    item.className = "result-item";

    const header = document.createElement("div");
    header.className = "result-header";

    const titleEl = document.createElement("div");
    titleEl.className = "song-title";
    titleEl.textContent = song.title;

    const artistEl = document.createElement("div");
    artistEl.className = "song-artist";
    artistEl.textContent = song.artist;

    header.appendChild(titleEl);
    header.appendChild(artistEl);

    const lyricsEl = document.createElement("div");
    lyricsEl.className = "song-lyrics";
    lyricsEl.textContent = `Snippet: "${song.lyrics}"`;

    item.appendChild(header);
    item.appendChild(lyricsEl);

    resultsContainer.appendChild(item);
  });
}

function handleSearch() {
  const query = lyricsInput.value.trim();

  if (query === "") {
    showStatus("Please type at least a few words.", true);
    clearResults();
    return;
  }

  const lowerQuery = query.toLowerCase();
  showStatus(`Searching for: "${query}"`, false);

  const matches = songsDatabase.filter(song => {
    return (
      song.lyrics.toLowerCase().includes(lowerQuery) ||
      song.title.toLowerCase().includes(lowerQuery) ||
      song.artist.toLowerCase().includes(lowerQuery)
    );
  });

  renderResults(matches);
}

searchBtn.addEventListener("click", handleSearch);

lyricsInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    handleSearch();
  }
});
