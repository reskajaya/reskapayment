
// Toggle Dark Mode
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
// Gambar berganti otomatis
const imagePaths = [
  "image/bca.png",
  "image/mandiri.png",
  "image/dana.png",
  "image/gopay.png",
  "image/bri.png",
  "image/ovopay.png",
  "image/reskapay.png"
];

let currentImageIndex = 0;
const banner = document.getElementById("hero-banner");

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
  banner.src = imagePaths[currentImageIndex];
}, 3000); // setiap 3 detik
// Service Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const serviceContents = document.querySelectorAll('.service-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    serviceContents.forEach(content => content.classList.remove('active'));

    // Add active to clicked button and corresponding content
    button.classList.add('active');
    const target = button.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});

   const dataPulsa = {
    telkomsel: [5000, 10000, 20000, 50000, 100000],
    xl: [5000, 10000, 25000, 50000],
    axis: [5000, 10000, 15000, 30000],
    indosat: [5000, 12000, 25000, 50000]
  };
let selectedOperator = "";
  let selectedNominal = 0;

  function showPulsaOptions(operator) {
    selectedOperator = operator;
    selectedNominal = 0;

    const nominalList = [5000, 10000, 20000, 25000, 50000, 100000];
    const gridContainer = document.getElementById("nominal-grid");
    const title = document.getElementById("operator-title");

    // Tampilkan bagian pilihan
    document.getElementById("pulsa-options").style.display = "block";

    // Judul operator
    title.textContent = "Pilih Nominal Pulsa - " + operator.charAt(0).toUpperCase() + operator.slice(1);

    // Kosongkan isi grid sebelumnya
    gridContainer.innerHTML = "";

    // Buat tombol-tombol nominal
    nominalList.forEach(nominal => {
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = "Rp " + nominal.toLocaleString();
      link.style.display = "inline-block";
      link.style.padding = "8px 12px";
      link.style.backgroundColor = "#f4f4f4";
      link.style.borderRadius = "5px";
      link.style.textAlign = "center";
      link.style.textDecoration = "none";
      link.style.color = "#333";
      link.onclick = function () {
        selectedNominal = nominal;
        highlightSelection(this);
        return false;
      };
      gridContainer.appendChild(link);
    });
  }

  function highlightSelection(selectedEl) {
    const links = document.querySelectorAll("#nominal-grid a");
    links.forEach(link => link.style.backgroundColor = "#f4f4f4");
    selectedEl.style.backgroundColor = "#c8e6c9"; // warna hijau sebagai tanda aktif
  }

  function submitPayment() {
    const phone = document.getElementById("phone-number").value.trim();

    if (!phone || !selectedOperator || !selectedNominal) {
      alert("Mohon isi nomor telepon dan pilih nominal pulsa.");
      return;
    }

    // Redirect ke halaman pembayaran (simulasi)
    const url = `checkout.html?operator=${selectedOperator}&nominal=${selectedNominal}&phone=${encodeURIComponent(phone)}`;
    window.location.href = url;
  }


// Cek Tagihan Simulasi
const checkBillBtn = document.getElementById('checkBillBtn');
const billNumberInput = document.getElementById('billNumber');
const billResult = document.getElementById('billResult');

checkBillBtn.addEventListener('click', () => {
  const billNumber = billNumberInput.value.trim();
  billResult.innerHTML = '';

  if (billNumber.length < 5) {
    billResult.innerHTML = `<p style="color: var(--danger);">Nomor tagihan tidak valid.</p>`;
    return;
  }

  // Tampilkan loading
  billResult.innerHTML = '<p>Memuat data tagihan...</p>';

  // Simulasi delay API
  setTimeout(() => {
    // Contoh data simulasi
    const dataSimulasi = {
      nama: "Budi Santoso",
      tagihan: 150000,
      layanan: "Listrik"
    };

    billResult.innerHTML = `
      <h4>Detail Tagihan</h4>
      <p><strong>Nama:</strong> ${dataSimulasi.nama}</p>
      <p><strong>Layanan:</strong> ${dataSimulasi.layanan}</p>
      <p><strong>Tagihan:</strong> Rp${dataSimulasi.tagihan.toLocaleString('id-ID')}</p>
      <button class="cta-primary small" onclick="alert('Fitur bayar belum tersedia')">Bayar Sekarang</button>
    `;
  }, 1500);
});
let count = 1243;

  // Fungsi untuk update counter
  function updateTransactionCount() {
    count += Math.floor(Math.random() * 3) + 1; // Menambahkan 1-3 transaksi acak
    document.getElementById('transaction-count').textContent = count.toLocaleString("id-ID");
  }
function showOptions(id) {
    // Sembunyikan semua opsi data lainnya
    document.querySelectorAll('.data-options').forEach(option => {
      if (option.id !== id) {
        option.style.display = 'none';
      }
    });

    // Toggle tampil/sembunyi untuk kolom yang dipilih
    const target = document.getElementById(id);
    target.style.display = target.style.display === 'block' ? 'none' : 'block';
  }
  // Jalankan update setiap 5 detik
  setInterval(updateTransactionCount, 5000);