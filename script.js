// 👀 Observer untuk efek fade-in saat scroll
document.addEventListener('DOMContentLoaded', () => {
  const fadeEl = document.querySelector('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  observer.observe(fadeEl);
});

// ⏱️ Sembunyikan loading setelah 3 detik
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
  }, 3000);
  var popup = document.getElementById("myPopup");
    var img = document.getElementById("foto");
    var popupImg = document.getElementById("popupImg");
    var downloadLink = document.getElementById("downloadLink");
    var closeBtn = document.getElementsByClassName("close")[0];

    // Saat gambar diklik → tampilkan popup
    img.onclick = function() {
        popup.style.display = "block";
        popupImg.src = this.src;
        downloadLink.href = this.src; // set link download
    }

    // Saat klik tombol close
    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    // Klik di luar gambar untuk tutup
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});
