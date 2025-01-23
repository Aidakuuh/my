document.getElementById("playAudio").addEventListener("click", function() {
    const audio = document.getElementById("backgroundAudio");
    audio.play();
});
function createLove() {
    const love = document.createElement('div');
    love.classList.add('love');

    // Posisi acak di halaman
    love.style.left = Math.random() * window.innerWidth + 'px';
    love.style.top = Math.random() * window.innerHeight + 'px';

    // Tambahkan elemen ke body
    document.body.appendChild(love);

    // Hapus elemen setelah beberapa waktu
    setTimeout(() => {
        love.remove();
    }, 3000); // Sesuaikan durasi dengan animasi (3s)
}

// Jalankan efek love secara berkala
setInterval(createLove, 500); // Setiap 500ms

// script.js
document.getElementById('surprisebutton').addEventListener('click', () => {
    // Pindah ke halaman kedua
    document.querySelector('.container').classList.remove('active');
    document.querySelector('.second-page').classList.add('active');
});

// Efek bintang
const starContainer = document.querySelector('.stars');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3 + 1; // Ukuran bintang
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.position = 'absolute';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite`;
    starContainer.appendChild(star);

    setTimeout(() => star.remove(), 8000);
}

// Tambahkan bintang secara terus-menerus
setInterval(createStar, 200);

// CSS untuk efek bintang
const style = document.createElement('style');
style.innerHTML = `
    .star {
        background: #fff;
        border-radius: 50%;
        opacity: 0.8;
        box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
    }

    @keyframes twinkle {
        0%, 100% { opacity: 0.8; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(1.2); }
    }
`;
document.head.appendChild(style);

// Ambil elemen tombol
const playMusicButton = document.getElementById("play-Audio");
const surprisebutton = document.getElementById("surprisebutton");

// Tambahkan event listener ke tombol "Putar Audio"
playAudio.addEventListener("click", function() {
    // Aktifkan tombol "Klik untuk Kejutan!"
    surprisebutton.disabled = false;

    // Tambahkan efek visual (opsional)
    surprisebutton.style.opacity = "1"; // Atur agar tombol terlihat aktif
    surprisebutton.style.cursor = "pointer"; // Ubah kursor menjadi pointer
});
