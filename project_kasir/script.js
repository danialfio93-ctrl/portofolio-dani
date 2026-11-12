// Fungsi untuk mengisi harga otomatis saat dropdown akun dipilih
function updateHargaAuto() {
    const select = document.getElementById('pilihanAkun');
    const selectedOption = select.options[select.selectedIndex];
    const harga = selectedOption.getAttribute('data-harga');
    
    document.getElementById('hargaBarang').value = harga ? harga : '';
}

function hitungTotal() {
    // 1. Ambil nilai dari input menggunakan DOM (getElementById)
    const namaPembeli = document.getElementById('namaPembeli').value.trim();
    const namaBarang = document.getElementById('pilihanAkun').value;
    const hargaBarang = parseFloat(document.getElementById('hargaBarang').value);
    const jumlahBarang = parseInt(document.getElementById('jumlahBarang').value);

    // Validasi input kosong
    if (!namaPembeli || !namaBarang || isNaN(hargaBarang) || isNaN(jumlahBarang)) {
        alert("Mohon isi nama pembeli dan pilih akun game terlebih dahulu!");
        return;
    }

    if (jumlahBarang <= 0) {
        alert("Jumlah akun harus lebih besar dari 0!");
        return;
    }

    // 2. Hitung subtotal (harga x jumlah)
    let subtotal = hargaBarang * jumlahBarang;
    let diskonPersen = 0;
    let nilaiDiskon = 0;

    // 3. Ketentuan diskon menggunakan percabangan (if..else)
    // subtotal >= 500.000 -> diskon 10%
    // subtotal >= 250.000 -> diskon 5%
    // selain itu -> tidak ada diskon
    if (subtotal >= 500000) {
        diskonPersen = 10;
        nilaiDiskon = subtotal * 0.10;
    } else if (subtotal >= 250000) {
        diskonPersen = 5;
        nilaiDiskon = subtotal * 0.05;
    } else {
        diskonPersen = 0;
        nilaiDiskon = 0;
    }

    // 4. Hitung total pembayaran akhir
    let totalBayar = subtotal - nilaiDiskon;

    // 5. Tampilkan hasil ke DOM
    document.getElementById('outNamaPembeli').innerText = namaPembeli;
    document.getElementById('outNamaBarang').innerText = `${namaBarang} (x${jumlahBarang})`;
    document.getElementById('outSubtotal').innerText = formatRupiah(subtotal);
    document.getElementById('outDiskon').innerText = `${formatRupiah(nilaiDiskon)} (${diskonPersen}%)`;
    document.getElementById('outTotalBayar').innerText = formatRupiah(totalBayar);

    // Tampilkan kotak output
    document.getElementById('output').style.display = 'block';
}

// Fungsi pembantu format nilai uang Rupiah
function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString('id-ID');
}