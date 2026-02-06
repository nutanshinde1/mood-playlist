// --- Import Playlist Data ---
const moodData = { 
  happy: [
    { title: "Happy - Pharrell Williams", link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
    { title: "Can't Stop the Feeling - Justin Timberlake", link: "https://www.youtube.com/watch?v=ru0K8uYEZWw" },
    { title: "Sugar - Maroon 5", link: "https://www.youtube.com/watch?v=09R8_2nJtjg" },
    { title: "Shake It Off - Taylor Swift", link: "https://www.youtube.com/watch?v=nfWlot6h_JM" },
    { title: "Viva La Vida - Coldplay", link: "https://www.youtube.com/watch?v=dvgZkm1xWPE" },
    { title: "Dance Monkey - Tones and I", link: "https://www.youtube.com/watch?v=q0hyYWKXF0Q" }
  ],

  sad: [
    { title: "Someone Like You - Adele", link: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
    { title: "Let Her Go - Passenger", link: "https://www.youtube.com/watch?v=RBumgq5yVrA" },
    { title: "Fix You - Coldplay", link: "https://www.youtube.com/watch?v=k4V3Mo61fJM" },
    { title: "Stay With Me - Sam Smith", link: "https://www.youtube.com/watch?v=pB-5XG-DbAA" },
    { title: "All I Want - Kodaline", link: "https://www.youtube.com/watch?v=mtf7hC17IBM" },
    { title: "Let Me Down Slowly - Alec Benjamin", link: "https://www.youtube.com/watch?v=50VNCymT-Cs" }
  ],

  energetic: [
    { title: "Eye of the Tiger - Survivor", link: "https://www.youtube.com/watch?v=btPJPFnesV4" },
    { title: "Uptown Funk - Bruno Mars", link: "https://www.youtube.com/watch?v=OPf0YbXqDm0" },
    { title: "Believer - Imagine Dragons", link: "https://www.youtube.com/watch?v=7wtfhZwyrcc" },
    { title: "Levitating - Dua Lipa", link: "https://www.youtube.com/watch?v=TUVcZfQe-Kw" },
    { title: "Wake Me Up - Avicii", link: "https://www.youtube.com/watch?v=IcrbM1l_BoI" },
    { title: "Can’t Hold Us - Macklemore", link: "https://www.youtube.com/watch?v=2zNSgSzhBfM" }
  ],

  relaxed: [
    { title: "Weightless - Marconi Union", link: "https://www.youtube.com/watch?v=UfcAVejslrU" },
    { title: "Lovely Day - Bill Withers", link: "https://www.youtube.com/watch?v=bEeaS6fuUoA" },
    { title: "Better Together - Jack Johnson", link: "https://www.youtube.com/watch?v=u57d4_b_YgI" },
    { title: "River Flows in You - Yiruma", link: "https://www.youtube.com/watch?v=7maJOI3QMu0" },
    { title: "Sunset Lover - Petit Biscuit", link: "https://www.youtube.com/watch?v=GRz7xN6p0bY" }
  ],

  bollywood: [
    { title: "Kesariya - Brahmāstra", link: "https://www.youtube.com/watch?v=BddP6PYo2gs" },
    { title: "Apna Bana Le - Bhediya", link: "https://www.youtube.com/watch?v=O9Cj2XlxGwk" },
    { title: "Tum Se Hi - Jab We Met", link: "https://www.youtube.com/watch?v=Z6f_Es3_-zM" },
    { title: "Raatan Lambiyan - Shershaah", link: "https://www.youtube.com/watch?v=gvyUuxdRdR4" },
    { title: "Gallan Goodiyan - Dil Dhadakne Do", link: "https://www.youtube.com/watch?v=H07zYvkNYL8" }
  ],

  marathi: [
    { title: "Zingaat - Sairat", link: "https://www.youtube.com/watch?v=4m1EFMoRFvY" },
    { title: "Mann Udhaan Varyache - Agga Bai Arechya", link: "https://www.youtube.com/watch?v=1_LQvDJuJb8" },
    { title: "Tik Tik Vajate Dokyat - Duniyadari", link: "https://www.youtube.com/watch?v=yD0x1RmwOaA" },
    { title: "Wajle Ki Bara - Natarang", link: "https://www.youtube.com/watch?v=biqwbB8ZDoY" }
  ],

  navratri: [
    { title: "Dholi Taro Dhol Baaje", link: "https://www.youtube.com/watch?v=Zp18wO6shDg" },
    { title: "Nagada Sang Dhol", link: "https://www.youtube.com/watch?v=H18ER3VCJY0" },
    { title: "Kamariya - Mitron", link: "https://www.youtube.com/watch?v=yaqFYtuK4Kc" },
    { title: "Chogada - Loveyatri", link: "https://www.youtube.com/watch?v=9mPDViJFZ9Y" }
  ],

  diwali: [
    { title: "Aaj Ki Party - Bajrangi Bhaijaan", link: "https://www.youtube.com/watch?v=QuoKNZjr8_U" },
    { title: "Swag Se Swagat", link: "https://www.youtube.com/watch?v=xjDjIWPwcPU" },
    { title: "Kala Chashma", link: "https://www.youtube.com/watch?v=k4yXQkG2s1E" },
    { title: "London Thumakda", link: "https://www.youtube.com/watch?v=UDbmGApMCFw" }
  ],

  devotional: [
    { title: "Hanuman Chalisa", link: "https://www.youtube.com/watch?v=6OT43pvUyfY" },
    { title: "Om Jai Jagdish Hare", link: "https://www.youtube.com/watch?v=fxC_oALoNfU" },
    { title: "Ganesh Aarti", link: "https://www.youtube.com/watch?v=6rFqcHuK8Xk" },
    { title: "Shiv Tandav Stotram", link: "https://www.youtube.com/watch?v=sn1H3uB7Bi4" }
  ]
};

// --- Populate dropdown automatically ---
const moodSelect = document.getElementById('mood');
Object.keys(moodData).forEach(mood => {
  const option = document.createElement('option');
  option.value = mood;
  option.textContent = mood.charAt(0).toUpperCase() + mood.slice(1);
  moodSelect.appendChild(option);
});

// --- Generate Playlist ---
function getPlaylist() {
  const mood = moodSelect.value;
  const playlistDiv = document.getElementById('playlist');
  const player = document.getElementById('player');

  playlistDiv.innerHTML = '';
  player.style.display = 'none';

  if (!mood) return alert('Please select a mood or festival!');

  let songs = [...moodData[mood]];
  songs.sort(() => 0.5 - Math.random()); // Shuffle

  songs.forEach(song => {
    const div = document.createElement('div');
    div.classList.add('song');
    div.innerHTML = `<a href="${song.link}" target="_blank">🎵 ${song.title}</a>`;
    playlistDiv.appendChild(div);
  });
}

// --- Play All (first song embed) ---
function playAll() {
  const mood = moodSelect.value;
  if (!mood) return alert('Please select a mood first!');
  const player = document.getElementById('player');
  const firstSong = moodData[mood][0].link.replace('watch?v=', 'embed/');
  player.src = firstSong + '?autoplay=1';
  player.style.display = 'block';
}

// --- Dark/Light Mode Toggle ---
const toggleBtn = document.getElementById('toggle-theme');
let darkMode = true;

toggleBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.style.background = darkMode ? '#121212' : '#f1f1f1';
  document.body.style.color = darkMode ? '#fff' : '#000';
  toggleBtn.textContent = darkMode ? '🌙' : '☀️';
});
