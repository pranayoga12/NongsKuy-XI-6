const restaurants = [
  {
    id: 1,
    name: "Ponda-C Coffee",
    image: "pondacoffee/ponda1.jpg", // Gambar placeholder untuk restoran
    hours: "10:00 - 02:00", // Jam operasional cafe
    rating: 4.8, // Nilai rating restoran (dari 5)
    distance: "1.4 km", // Jarak restoran dari lokasi pengguna
    mapsUrl:
      "https://www.google.com/maps/place/Ponda-C+Coffee/@-8.6937929,115.2222061,15.39z/data=!4m6!3m5!1s0x2dd241f24ad268e1:0xf1bfd439f5724b58!8m2!3d-8.6940652!4d115.2268733!16s%2Fg%2F11txy08xwk?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D", // URL Google Maps untuk restoran
    menus: [
      // Daftar menu yang tersedia di restoran ini
      {
        name: "Americano",
        price: "Rp12.000",
        image: "pondacoffee/americano.jpg", // Gambar menu
        description: "Americano mantap",
      },

      {
        name: "Cappucino",
        price: "Rp17.000",
        image: "pondacoffee/cappucino.jpg", // Gambar menu
        description: "Americano mantap",
      },

      {
        name: "Choco Hazelnut",
        price: "Rp17.000",
        image: "pondacoffee/Choco Hazelnut.jpg", // Gambar menu
        description: "Americano mantap",
      },

      {
        name: "Churros",
        price: "Rp16.000",
        image: "pondacoffee/Churros.jpg", // Gambar menu
        description: "Americano mantap",
      },

      {
        name: "Ice Coffee Latte",
        price: "Rp16.000",
        image: "pondacoffee/Ice Coffe Latte.jpg", // Gambar menu
        description: "Americano mantap",
      },

      {
        name: "Kopi Susu Ponda-C",
        price: "Rp15.000",
        image: "pondacoffee/Kopi Susu.jpg", // Gambar menu
        description: "Americano mantap",
      },

      {
        name: "Matcha",
        price: "Rp18.000",
        image: "pondacoffee/Matcha.jpg", // Gambar menu
        description: "Americano mantap",
      },

      {
        name: "Red Virgin",
        price: "Rp17.000",
        image: "pondacoffee/Red Virgi.jpg", // Gambar menu
        description: "Americano mantap",
      },

      {
        name: "Sandwich",
        price: "Rp25.000",
        image: "pondacoffee/Sandwich.jpg", // Gambar menu
        description: "Americano mantap",
      },

      {
        name: "Toast Blueberry, Chocolate, Strawberry",
        price: "Rp12.000",
        image: "pondacoffee/Toast.jpg", // Gambar menu
        description: "Americano mantap",
      },
    ],
  },

  {
    id: 2,
    name: "Satu Titik Kopi Dewata",
    image: "satutitikcoffee/satik2.jpg", // Gambar placeholder untuk restoran
    hours: "Buka 24 jam", // Jam operasional cafe
    rating: 4.6, // Nilai rating restoran (dari 5)
    distance: "1.5 km", // Jarak restoran dari lokasi pengguna
    mapsUrl:
      "https://www.google.com/maps/place/Satu+Titik+Kopi+Dewata/@-8.6961285,115.2235528,15.83z/data=!4m6!3m5!1s0x2dd24164c9664c9d:0x83e2ffb40bcc4970!8m2!3d-8.695667!4d115.2277351!16s%2Fg%2F11tmzbm9xw?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D", // URL Google Maps untuk restoran
    menus: [
      // Daftar menu yang tersedia di restoran ini
      {
        name: "Ice Coffee Caramel",
        price: "Rp15.000",
        image: "satutitikcoffee/Es Kopi Caramel_ 15K.jpg", // Gambar menu
        description: "Es Kopi dengan tambahan rasa manis caramel",
      },

      {
        name: "Ice Americano",
        price: "Rp20.000",
        image: "satutitikcoffee/Ice Americano_ 20K.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Ice Red Velvet",
        price: "Rp20.000",
        image: "satutitikcoffee/Ice Red Velvet_ 20K.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Lemon Tea",
        price: "Rp14.000",
        image: "satutitikcoffee/Lemon Tea_ 14K.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Ice Taro Latte",
        price: "Rp23.000",
        image: "satutitikcoffee/Ice Taro Latte_ 23K.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Lychee Tea",
        price: "Rp13.000",
        image: "satutitikcoffee/Lychee Tea_ 13K.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Mango Tea",
        price: "Rp18.000",
        image: "satutitikcoffee/Mango Tea_ 18K.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Chicken Black Pepper",
        price: "Rp25.000",
        image: "satutitikcoffee/Chicken Black Pepper_ 25K.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Spaghetti Bolognese",
        price: "Rp28.000",
        image: "satutitikcoffee/Spaghetti Bolognese_ Rp. 28.000.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Chicken Creamy Mushroom",
        price: "Rp25.000",
        image: "satutitikcoffee/Chicken Creamy Mushroom_ 25K.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },
    ],
  },

  {
    id: 3,
    name: "Tomoro Coffee",
    image: "tomorocoffee/tomorocard.jpg", // Gambar placeholder untuk restoran
    hours: "07:00 - 22:00", // Jam operasional cafe
    rating: 4.7, // Nilai rating restoran (dari 5)
    distance: "4.2 km", // Jarak restoran dari lokasi pengguna
    mapsUrl:
      "https://www.google.com/maps/place/TOMORO+COFFEE+-+Sesetan/@-8.6796547,115.2116124,15.83z/data=!4m6!3m5!1s0x2dd2419b879f2bd9:0x13aa3d0da3333020!8m2!3d-8.6793134!4d115.2150307!16s%2Fg%2F11vc1h_v81?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D", // URL Google Maps untuk restoran
    menus: [
      // Daftar menu yang tersedia di restoran ini
      {
        name: "Chocolate Frappe",
        price: "Rp27.000",
        image: "tomorocoffee/Chocolate Frappe Rp.27,000.png", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Choco Oat Latte",
        price: "Rp32.000",
        image: "tomorocoffee/Choco Oat Latte Rp.32,000.png", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Matcha Frappe",
        price: "Rp30.000",
        image: "tomorocoffee/Matcha Frappe Rp.30,000.png", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Matcha Latte",
        price: "Rp30.000",
        image: "tomorocoffee/Matcha Latte Rp.30,000.png", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Stawberry Coconut Frappe",
        price: "Rp30.000",
        image: "tomorocoffee/Stawberry Coconut Frappe RRp.30,000.png", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Strawberry Jasmine Tea",
        price: "Rp24.000",
        image: "tomorocoffee/Strawberry Jasmine Tea Rp.24,000.png", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "TOMORO Oat Latte",
        price: "Rp26.000",
        image: "tomorocoffee/TOMORO Oat Latte Rp.26,000.png", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Cinnamon Roll",
        price: "Rp22.000",
        image: "tomorocoffee/Cinnamon Roll Rp.22,000.png", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Butter Croissant Rp.18,000",
        price: "Rp18.000",
        image: "tomorocoffee/Butter Croissant Rp.18,000.png", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Chocolate Croissant Rp.12,000",
        price: "Rp12.000",
        image: "tomorocoffee/Chocolate Croissant Rp.12,000.png", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },
    ],
  },

  {
    id: 4,
    name: "Imadji Coffee",
    image: "imadjicoffee/imadji1.jpg", // Gambar placeholder untuk restoran
    hours: "06:00 - 23:00", // Jam operasional cafe
    rating: 4.7, // Nilai rating restoran (dari 5)
    distance: "7 km", // Jarak restoran dari lokasi pengguna
    mapsUrl:
      "https://www.google.com/maps/place/IMADJI+COFFEE/@-8.6540487,115.2218408,17z/data=!4m6!3m5!1s0x2dd24100641fb1d9:0xb5cf1320e865277d!8m2!3d-8.653866!4d115.223558!16s%2Fg%2F11vylvhb27?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D", // URL Google Maps untuk restoran
    menus: [
      // Daftar menu yang tersedia di restoran ini
      {
        name: "Tokyo",
        price: "Rp25.000",
        image: "imadjicoffee/Tokyo Rp.25,000.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Bangkok",
        price: "Rp23.000",
        image: "imadjicoffee/Bangkok Rp.23,000.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Beijing",
        price: "Rp19.000",
        image: "imadjicoffee/Beijing Rp.19,000.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Scotland",
        price: "Rp27.000",
        image: "imadjicoffee/Scotland Rp.27,000.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Klepons",
        price: "Rp23.000",
        image: "imadjicoffee/Klepons (Cold) Rp.23,000.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Burries",
        price: "Rp23.000",
        image: "imadjicoffee/Burries (Cold) Rp.23,000.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Long Black",
        price: "Rp18.000",
        image: "imadjicoffee/Long Black (Cold) Rp.18,000.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Chicken Sandwich",
        price: "Rp30.000",
        image: "imadjicoffee/Chicken Sandwich Rp.30,000.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "Spicy Chicken Popcorn",
        price: "Rp34.000",
        image: "imadjicoffee/Spicy Chicken Popcorn Rp.34,000.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },

      {
        name: "French Fries",
        price: "Rp23.000",
        image: "imadjicoffee/French Fries Rp.23,000.jpg", // Gambar menu
        description: "Tehnya Ditarik Sama Genio",
      },
    ],
  },

  {
    id: 5,
    name: "COMING SOON",
    image: "images/comingsoon.png", // Gambar placeholder untuk restoran
    hours: "-", // Jam operasional cafe
    rating: "-", // Nilai rating restoran (dari 5)
    distance: "-", // Jarak restoran dari lokasi pengguna
    mapsUrl: "", // URL Google Maps untuk restoran
    menus: [],
  },

  // Data restoran lainnya...
];

// Mengambil elemen-elemen DOM yang akan dimanipulasi
const landingPage = document.getElementById("landing-page"); // Halaman awal
const app = document.getElementById("app"); // Aplikasi utama
const exploreBtn = document.getElementById("explore-btn"); // Tombol "Cari Restoran Sekarang"
const navLinks = document.querySelectorAll(".nav-link"); // Link navigasi (Home, Favorit, Tentang)
const contentPages = document.querySelectorAll(".content-page"); // Halaman konten (home, favorit, about)
const searchInput = document.getElementById("search-input"); // Kotak pencarian
const restaurantList = document.getElementById("restaurant-list"); // Tempat menampilkan daftar restoran
const favoritesContainer = document.getElementById("favorites-container"); // Tempat menampilkan restoran favorit

// Mengambil data favorit dari localStorage atau membuat array kosong jika belum ada (let bisa berubah2, const tidak)
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Event Listener untuk tombol "Cari Restoran Sekarang"
exploreBtn.addEventListener("click", () => {
  landingPage.style.display = "none"; // Sembunyikan landing page
  app.style.display = "block"; // Tampilkan aplikasi utama
  displayRestaurants(restaurants); // Tampilkan daftar restoran
});

// Event Listener untuk navigasi (Home, Favorit, Tentang)
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah halaman di-refresh saat link diklik

    // Update link aktif (perubahan tampilan)
    navLinks.forEach((navLink) => navLink.classList.remove("active"));
    link.classList.add("active");

    // Menampilkan halaman yang sesuai dan menyembunyikan yang lain
    const pageName = link.getAttribute("data-page");
    contentPages.forEach((page) => {
      page.style.display = "none";
    });
    document.getElementById(`${pageName}-page`).style.display = "block";

    // Jika halaman favorit yang diklik, tampilkan data favorit
    if (pageName === "favorites") {
      displayFavorites();
    } else if (pageName === "home") {
      // Jika halaman home yang diklik, perbarui tampilan restoran
      // untuk memastikan status favorit terupdate
      displayRestaurants(restaurants);
    }

    // Tutup menu mobile setelah navigasi (jika pada tampilan mobile)
    const navLinksContainer = document.getElementById("nav-links");
    if (navLinksContainer.classList.contains("active")) {
      navLinksContainer.classList.remove("active");
    }
  });
});

// Fungsi pencarian - memfilter restoran berdasarkan input pengguna
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase(); // Mengubah input menjadi huruf kecil
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.name.toLowerCase().includes(searchTerm) // Filter restoran yang namanya mengandung kata yang dicari
  );
  displayRestaurants(filteredRestaurants); // Tampilkan hasil pencarian
});

// Fungsi untuk menampilkan daftar restoran
function displayRestaurants(restaurantsArray) {
  restaurantList.innerHTML = ""; // Kosongkan daftar restoran terlebih dahulu

  restaurantsArray.forEach((restaurant) => {
    const isFavorite = favorites.includes(restaurant.id); // Cek apakah restoran ini favorit

    // Membuat elemen kartu restoran
    const restaurantCard = document.createElement("div");
    restaurantCard.className = "restaurant-card";
    restaurantCard.innerHTML = `
      <img src="${restaurant.image}" alt="${
      restaurant.name
    }" class="restaurant-img">
      <div class="restaurant-info">
        <h3 class="restaurant-name">${restaurant.name}</h3>
        <div class="restaurant-hours">⏰ ${restaurant.hours}</div>
        <div class="restaurant-rating">⭐ ${restaurant.rating}</div>
        <div class="restaurant-distance">📍 ${restaurant.distance}</div>
        <button class="favorite-btn ${
          isFavorite ? "favorited" : ""
        }" data-id="${restaurant.id}">
          ${isFavorite ? "Favorit ❤️" : "Tambah ke Favorit ♡"}
        </button>
        <a href="${
          restaurant.mapsUrl
        }" target="_blank" class="maps-btn">Lokasi & Ulasan 🗺️</a>
      </div>
    `;

    // Menambahkan event click untuk menampilkan menu restoran
    restaurantCard.addEventListener("click", (e) => {
      // Jangan buka menu jika yang diklik adalah tombol favorit atau tombol maps
      if (
        e.target.classList.contains("favorite-btn") ||
        e.target.classList.contains("maps-btn")
      ) {
        return;
      }
      showRestaurantMenu(restaurant); // Tampilkan menu restoran
    });
    restaurantList.appendChild(restaurantCard); // Tambahkan kartu ke daftar restoran
  });

  // Tambahkan event listener untuk tombol favorit
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.addEventListener("click", toggleFavorite);
  });
}

// Fungsi untuk menambah/menghapus restoran dari favorit
function toggleFavorite(e) {
  const restaurantId = parseInt(e.target.getAttribute("data-id")); // ID restoran
  const index = favorites.indexOf(restaurantId); // Cek posisi ID dalam array favorit

  if (index === -1) {
    // Jika belum ada di favorit, tambahkan
    favorites.push(restaurantId);
    e.target.classList.add("favorited");
    e.target.textContent = "Favorit ❤️";
  } else {
    // Jika sudah ada di favorit, hapus
    favorites.splice(index, 1);
    e.target.classList.remove("favorited");
    e.target.textContent = "Tambah ke Favorit ♡";

    // Update semua tombol favorit dengan ID yang sama di seluruh halaman
    document
      .querySelectorAll(`.favorite-btn[data-id="${restaurantId}"]`)
      .forEach((button) => {
        button.classList.remove("favorited");
        button.textContent = "Tambah ke Favorit ♡";
      });
  }

  // Simpan perubahan ke localStorage agar data tidak hilang saat halaman di-refresh
  localStorage.setItem("favorites", JSON.stringify(favorites));

  // Update tampilan halaman favorit jika sedang dibuka
  if (document.getElementById("favorites-page").style.display === "block") {
    displayFavorites();
  }
}

// Fungsi untuk menampilkan restoran favorit
function displayFavorites() {
  favoritesContainer.innerHTML = ""; // Kosongkan container favorit

  // Jika tidak ada favorit, tampilkan pesan
  if (favorites.length === 0) {
    favoritesContainer.innerHTML = `
      <div class="no-favorites">
        <h3>Belum ada tempat favorit</h3>
        <p>Tandai tempat nongkrong favorit kamu untuk melihatnya di sini</p>
      </div>
    `;
    return;
  }

  // Filter restoran yang ada di daftar favorit
  const favoriteRestaurants = restaurants.filter((restaurant) =>
    favorites.includes(restaurant.id)
  );

  // Buat kartu untuk setiap restoran favorit
  favoriteRestaurants.forEach((restaurant) => {
    const restaurantCard = document.createElement("div");
    restaurantCard.className = "restaurant-card";
    restaurantCard.innerHTML = `
      <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-img">
      <div class="restaurant-info">
        <h3 class="restaurant-name">${restaurant.name}</h3>
        <div class="restaurant-hours">⏰ ${restaurant.hours}</div>
        <div class="restaurant-rating">⭐ ${restaurant.rating}</div>
        <div class="restaurant-distance">📍 ${restaurant.distance}</div>
        <button class="favorite-btn favorited" data-id="${restaurant.id}">Hapus dari Favorit ❌</button>
        <a href="${restaurant.mapsUrl}" target="_blank" class="maps-btn">Maps Location 🗺️</a>
      </div>
    `;

    // Menambahkan event click untuk menampilkan menu restoran
    restaurantCard.addEventListener("click", (e) => {
      // Jangan buka menu jika yang diklik adalah tombol favorit atau tombol maps
      if (
        e.target.classList.contains("favorite-btn") ||
        e.target.classList.contains("maps-btn")
      ) {
        return;
      }
      showRestaurantMenu(restaurant); // Tampilkan menu restoran
    });

    restaurantList.appendChild(restaurantCard); // Tambahkan kartu ke daftar restoran

    // Tambahkan event click untuk menampilkan menu
    restaurantCard.addEventListener("click", (e) => {
      if (e.target.classList.contains("favorite-btn")) {
        return;
      }
      showRestaurantMenu(restaurant);
    });

    favoritesContainer.appendChild(restaurantCard); // Tambahkan kartu ke container favorit
  });

  // Tambahkan event listener untuk tombol favorit
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.addEventListener("click", toggleFavorite);
  });
}

// Fungsi untuk menampilkan menu restoran dalam modal
function showRestaurantMenu(restaurant) {
  const menuModal = document.getElementById("menu-modal"); // Modal menu
  const modalRestaurantName = document.getElementById("modal-restaurant-name"); // Nama restoran di modal
  const menuContainer = document.getElementById("menu-container"); // Container menu

  modalRestaurantName.textContent = `Menu ${restaurant.name}`; // Set nama restoran
  menuContainer.innerHTML = ""; // Kosongkan container menu

  // Buat kartu untuk setiap menu
  restaurant.menus.forEach((menu) => {
    const menuCard = document.createElement("div");
    menuCard.className = "menu-card";
    menuCard.innerHTML = `
      <img src="${menu.image}" alt="${menu.name}" class="menu-img">
      <div class="menu-info">
        <h3 class="menu-name">${menu.name}</h3>
        <div class="menu-price">${menu.price}</div>
        <p class="menu-description">${menu.description}</p>
      </div>
    `;
    menuContainer.appendChild(menuCard); // Tambahkan kartu ke container menu
  });

  menuModal.style.display = "block"; // Tampilkan modal
}

// Slideshow functionality - SLIDESHOW JS
let slideIndex = 0;
let slideshowTimer;

// Fungsi untuk menampilkan slide
function showSlides() {
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  // Sembunyikan semua slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slideIndex
  slideIndex++;

  // Reset ke slide pertama jika sudah di akhir
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Hapus kelas active-dot dari semua dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  // Tampilkan slide yang aktif
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";

  // Jadwalkan slide berikutnya setelah 5 detik
  slideshowTimer = setTimeout(showSlides, 5000);
}

// Fungsi untuk mengubah slide secara manual
function currentSlide(n) {
  // Hentikan timer otomatis
  clearTimeout(slideshowTimer);

  // Set slideIndex ke slide yang diminta
  slideIndex = n - 1;
  showSlides();
}

// Fungsi inisialisasi aplikasi
function init() {
  // Tambahkan event listener untuk menutup modal
  const menuModal = document.getElementById("menu-modal");
  const closeModal = document.querySelector(".close-modal");

  // Tutup modal saat tombol close diklik
  closeModal.addEventListener("click", () => {
    menuModal.style.display = "none";
  });

  // Tutup modal saat klik di luar area modal
  window.addEventListener("click", (e) => {
    if (e.target == menuModal) {
      menuModal.style.display = "none";
    }
  });

  // Hamburger menu functionality
  const menuToggle = document.getElementById("menu-toggle");
  const navLinksContainer = document.getElementById("nav-links");
  const backBtn = document.getElementById("back-btn");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinksContainer.classList.toggle("active");
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      navLinksContainer.classList.remove("active");
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      navLinksContainer &&
      navLinksContainer.classList.contains("active") &&
      !e.target.closest(".nav-links") &&
      !e.target.closest(".menu-toggle")
    ) {
      navLinksContainer.classList.remove("active");
    }
  });

  // Jika langsung masuk ke halaman home (tanpa landing page)
  if (window.location.hash === "#home") {
    landingPage.style.display = "none";
    app.style.display = "block";
    displayRestaurants(restaurants);
  }
}
// showslides bekerja
showSlides();

// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    once: false, // Whether animation should happen only once - while scrolling down
    mirror: true, // Whether elements should animate out while scrolling past them
    easing: "ease-in-out", // Default easing for AOS animations
    duration: 800, // Default duration for animations
  });
});

// Jalankan fungsi inisialisasi saat website dimuat
init();
