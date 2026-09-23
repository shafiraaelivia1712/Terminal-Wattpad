const userInput = document.getElementById('user-input');
const commandHistory = document.getElementById('command-history');
const terminalBody = document.getElementById('terminal-body');

// Fokus otomatis ke input
terminalBody.addEventListener('click', () => userInput.focus());

// --- DATABASE KARAKTER WATTPAD ANDA ---
const characterDB = {
    // --- BATCH 1 ---
    "rachel": `[ FILE: STUDENT-01 ]
> NAMA ASLI   : Abigail Cassia Rachel Cornelio
> ALIAS       : "Queen Bee"
> STATUS      : <span class="error-text">Siswi SMA Jayapura Indah</span>
> FRAKSI      : Anggota OSIS
> KEAHLIAN    : Social Engineering, Manipulasi Informasi Publik
> BIO SINGKAT : 
Di balik senyum manisnya sebagai anggota OSIS, Rachel adalah dalang di balik jaringan rumor sekolah. Ia bisa menghancurkan reputasi siapa saja dalam semalam hanya berbekal satu informasi palsu yang dirancang sempurna.`,

    "adeline": `[ FILE: STUDENT-02 ]
> NAMA ASLI   : Adeline Angelina Wijaya
> ALIAS       : "The Prefect"
> STATUS      : AKTIF - DIAWASI
> FRAKSI      : Komite Kedisiplinan Sekolah
> KEAHLIAN    : Akses CCTV Tersembunyi, Interogasi Psikologis
> BIO SINGKAT : 
Adeline terlihat seperti siswi teladan yang kaku pada aturan. Namun, ia diam-diam memegang kunci akses ke ruang arsip lama sekolah. Rumor mengatakan ia tahu siapa dalang di balik insiden angkatan tahun lalu.`,

    "aisa": `[ FILE: STUDENT-03 ]
> NAMA ASLI   : Aisa Maharani Vanisa
> ALIAS       : "Broadcaster"
> STATUS      : AKTIF 
> FRAKSI      : Klub Jurnalistik & Radio Sekolah
> KEAHLIAN    : Menyadap Interkom, Manipulasi Frekuensi Audio
> BIO SINGKAT : 
Bersembunyi di balik ruang siaran radio, Aisa mendengar semuanya. Jangan pernah membicarakan rahasia di dekat speaker kelas, karena Aisa selalu menyadapnya untuk buletin bawah tanah.`,

    "aurhel": `[ FILE: STUDENT-04 ]
> NAMA ASLI   : Aurhel Alana Salsabila
> ALIAS       : "Socialite"
> STATUS      : AKTIF
> FRAKSI      : Elite Circle
> KEAHLIAN    : Pengumpulan Data via Jaringan Sosial
> BIO SINGKAT : 
Gadis paling populer yang selalu tahu letak pesta terbaik. Namun, pesta hanyalah kedoknya untuk mengumpulkan rahasia dari murid-murid yang mabuk atau lengah. Ia menjual informasi tersebut kepada penawar tertinggi.`,

    // --- BATCH 2 ---
    "catherina": `[ FILE: STUDENT-05 ]
> NAMA ASLI   : Catherina Vallencia Kencana
> ALIAS       : "Gold-Tier"
> STATUS      : <span class="warning">TIDAK BISA DISENTUH HUKUM SEKOLAH</span>
> FRAKSI      : Anak Donatur Utama Yayasan
> KEAHLIAN    : Blackmail, Bypass Aturan Sekolah
> BIO SINGKAT : 
Hukum dan tata tertib sekolah seolah tidak berlaku untuknya. Jika ada murid atau guru yang tiba-tiba "dikeluarkan" secara misterius, biasanya Catherina berada di baliknya.`,

    "fritzy": `[ FILE: STUDENT-06 ]
> NAMA ASLI   : Fritzy Rosmerian Jaya Wardhana
> ALIAS       : "Smuggler"
> STATUS      : AKTIF - BURONAN GURU BK
> FRAKSI      : Jalur Belakang Sekolah
> KEAHLIAN    : Penyelundupan Gadget, Bypass Firewall Wi-Fi
> BIO SINGKAT : 
Butuh ponsel saat razia? Butuh router sinyal di ruang ujian? Fritzy adalah orangnya. Ia mengelola pasar gelap sekolah di balik loker gym yang tidak pernah dipakai.`,

    "hillary": `[ FILE: STUDENT-07 ]
> NAMA ASLI   : Hillary Putri Abigail
> ALIAS       : "The Librarian"
> STATUS      : AKTIF
> FRAKSI      : Penjaga Perpustakaan
> KEAHLIAN    : Enkripsi Pesan dalam Buku, Steganografi
> BIO SINGKAT : 
Pendiam dan selalu membaca. Namun, buku-buku yang ia pinjamkan kepada murid tertentu berisi kode steganografi untuk mengoordinasikan pergerakan pemberontakan melawan sistem sekolah.`,

    "jazzlyn": `[ FILE: STUDENT-08 ]
> NAMA ASLI   : Jazzlyn Trisha Kathrina
> ALIAS       : "Phantom"
> STATUS      : AKTIF - SERING BOLOS
> FRAKSI      : Klub Seni (Underground)
> KEAHLIAN    : Pemalsuan Dokumen, Manipulasi Tanda Tangan
> BIO SINGKAT : 
Butuh surat izin sakit palsu dengan tanda tangan dokter dan stempel basah? Jazzlyn bisa membuatnya dalam lima menit. Ia adalah seniman pemalsu terbaik di angkatannya.`,

    "letycia": `[ FILE: STUDENT-09 ]
> NAMA ASLI   : Letycia Moreen Aurelia
> ALIAS       : "Vanguard"
> STATUS      : AKTIF
> FRAKSI      : Kapten Tim Olahraga
> KEAHLIAN    : Intimidasi Fisik, Penjagaan Area Restricted
> BIO SINGKAT : 
Bukan hanya atlet berprestasi, Letycia adalah 'otot' dari sindikat bawah tanah sekolah. Tidak ada yang berani melewati koridor utara jika Letycia sedang berjaga di sana.`,

    "michelle": `[ FILE: STUDENT-10 ]
> NAMA ASLI   : Michelle Levian Shania
> ALIAS       : "Ace"
> STATUS      : AKTIF - KANDIDAT VALEDICTORIAN
> FRAKSI      : Siswi Independen
> KEAHLIAN    : Dekripsi Data Akademik, Pemalsuan Nilai Ujian
> BIO SINGKAT : 
Pemegang peringkat satu berturut-turut. Tidak ada yang tahu bahwa Michelle berhasil meretas database server akademik. Ia diam-diam mengubah nilai teman-temannya yang mau membayar mahal.`,

    "nayla": `[ FILE: STUDENT-11 ]
> NAMA ASLI   : Nayla Aurellia Suji
> ALIAS       : "Cipher"
> STATUS      : AKTIF
> FRAKSI      : Klub Komputer
> KEAHLIAN    : Coding Cepat, Hacking Jaringan Lokal
> BIO SINGKAT : 
Gadis lugu yang sering disuruh guru memperbaiki proyektor. Kenyataannya, setiap kali ia menyentuh komputer guru, ia menanamkan *spyware* untuk menyalin seluruh soal ujian semester.`,

    "nina": `[ FILE: STUDENT-12 ]
> NAMA ASLI   : Nina Alifiya Tutachia Ellaria
> ALIAS       : "Chameleon"
> STATUS      : AKTIF
> FRAKSI      : Teater Sekolah
> KEAHLIAN    : Menyamar, Menirukan Suara Guru
> BIO SINGKAT : 
Ketua klub teater yang bisa menirukan suara Kepala Sekolah dengan sempurna. Ia sering menggunakan interkom untuk membatalkan kelas atau mengalihkan perhatian penjaga sekolah.`,

    // --- BATCH 3 ---
    "oline": `[ FILE: STUDENT-13 ]
> NAMA ASLI   : Oline Clara Manuel
> ALIAS       : "Proxy"
> STATUS      : AKTIF
> FRAKSI      : Jaringan Kantin
> KEAHLIAN    : Pencucian Uang Saku, Transaksi Rahasia
> BIO SINGKAT : 
Oline mengelola 'Bank Bayangan' sekolah. Jika murid ingin menyogok penjaga keamanan atau membeli jawaban ujian tanpa terlacak, transaksinya harus melewati rekening Oline.`,

    "regina": `[ FILE: STUDENT-14 ]
> NAMA ASLI   : Regina William Andriani
> ALIAS       : "Nemesis"
> STATUS      : AKTIF
> FRAKSI      : Oposisi Elite
> KEAHLIAN    : Perang Urat Saraf, Pelacakan Aset
> BIO SINGKAT : 
Satu-satunya siswi yang berani menentang hegemoni Catherina. Regina menggunakan kekayaan keluarganya untuk mendanai kelompok peretas sekolah demi menjatuhkan reputasi musuh-musuhnya.`,

    "ribka": `[ FILE: STUDENT-15 ]
> NAMA ASLI   : Ribka Cahya Vanisa
> ALIAS       : "Tracer"
> STATUS      : AKTIF
> FRAKSI      : Intelijen Siswa
> KEAHLIAN    : Melacak Alamat IP, GPS Spoofing
> BIO SINGKAT : 
Jika Anda mengunggah sesuatu secara anonim di forum sekolah, Ribka bisa menemukan lokasi persis Anda dalam hitungan detik. Keahliannya sangat dicari oleh faksi-faksi yang bertikai.`,

    "shabilqis": `[ FILE: STUDENT-16 ]
> NAMA ASLI   : Shabilqis Naila Antasari
> ALIAS       : "Oracle"
> STATUS      : AKTIF
> FRAKSI      : Klub Misteri
> KEAHLIAN    : Analisis Pola Perilaku, Profiling
> BIO SINGKAT : 
Banyak yang mengira ia cenayang, padahal Shabilqis adalah seorang profiler psikologis tingkat jenius. Ia bisa memprediksi gerakan guru dan murid hanya dari pola kebiasaan mereka sehari-hari.`,

    "victoria": `[ FILE: STUDENT-17 ]
> NAMA ASLI   : Victoria Angelina Kimberly
> ALIAS       : "Paparazzi"
> STATUS      : AKTIF - DALAM PENGINTAIAN
> FRAKSI      : Fotografer Buku Tahunan
> KEAHLIAN    : Mengintai, Fotografi Jarak Jauh
> BIO SINGKAT : 
Alibinya adalah mencari foto untuk buku tahunan, namun memori kamera Victoria penuh dengan foto-foto pertemuan rahasia guru dan murid di belakang sekolah. Lensa zoom-nya adalah senjata mematikan.`,

    "astrella": `[ FILE: STUDENT-18 ]
> NAMA ASLI   : Astrella Mandira Virgiananda
> ALIAS       : "Stargazer"
> STATUS      : AKTIF
> FRAKSI      : Klub Astronomi
> KEAHLIAN    : Kriptografi, Pemecahan Sandi
> BIO SINGKAT : 
Kode-kode rahasia pemberontakan sering kali disembunyikan dalam peta konstelasi bintang di mading sekolah. Hanya Astrella yang tahu cara menerjemahkan titik-titik tersebut menjadi sebuah pesan.`,

    "christian": `[ FILE: STUDENT-19 ]
> NAMA ASLI   : Christian Auwia Kathrina
> ALIAS       : "Rogue"
> STATUS      : <span class="error-text">TERANCAM DO (DROP OUT)</span>
> FRAKSI      : Outsider
> KEAHLIAN    : Sabotase Perangkat Keras, Lockpicking
> BIO SINGKAT : 
Tidak ada pintu terkunci yang tidak bisa dibuka olehnya. Ia sering disewa untuk membobol ruang penyimpanan soal ujian atau menyabotase sistem kelistrikan saat ujian berlangsung.`,

    "aprillia": `[ FILE: STUDENT-20 ]
> NAMA ASLI   : Aprillia Cantika
> ALIAS       : "Sweet Trap"
> STATUS      : AKTIF
> FRAKSI      : Palang Merah Remaja (PMR)
> KEAHLIAN    : Toksikologi Ringan, Manipulasi Kepanikan
> BIO SINGKAT : 
Siswi manis dari PMR yang selalu sedia obat-obatan. Tidak ada yang menyadari bahwa teh yang ia racik di ruang kesehatan mengandung zat yang membuat targetnya menceritakan rahasia terdalam mereka.`,

    // --- BATCH 4 ---
    "hagia": `[ FILE: STUDENT-21 ]
> NAMA ASLI   : Hagia Septriana
> ALIAS       : "Archivist"
> STATUS      : AKTIF
> FRAKSI      : Ekskul Sejarah
> KEAHLIAN    : Penelusuran Dokumen Kuno Sekolah
> BIO SINGKAT : 
Sekolah ini didirikan di atas tanah sengketa 50 tahun lalu. Hagia memegang *blueprint* asli gedung sekolah, mengetahui setiap lorong rahasia dan ruang bawah tanah yang tidak ada di peta modern.`,

    "humaira": `[ FILE: STUDENT-22 ]
> NAMA ASLI   : Humaira Catherina Manuel
> ALIAS       : "Alchemist"
> STATUS      : AKTIF
> FRAKSI      : Lab Kimia
> KEAHLIAN    : Sintesis Bahan Kimia, Pembuatan Asap Pengalih
> BIO SINGKAT : 
Sering "tidak sengaja" menyebabkan ledakan kecil di lab kimia. Ledakan itu sebenarnya adalah taktik pengalih perhatian agar tim lain bisa meretas server dari ruang Tata Usaha.`,

    "jacqueline": `[ FILE: STUDENT-23 ]
> NAMA ASLI   : Jacqueline Cahya Immanuela
> ALIAS       : "Mirage"
> STATUS      : AKTIF
> FRAKSI      : Fashion Club
> KEAHLIAN    : Rekayasa Pakaian Taktis
> BIO SINGKAT : 
Tas desainer dan jepit rambutnya bukan sekadar aksesori. Jacqueline mendesain seragam yang dimodifikasi untuk menyembunyikan flashdisk, alat sadap mini, dan kunci *master* sekolah.`,

    "jemima": `[ FILE: STUDENT-24 ]
> NAMA ASLI   : Jemima Adeline Evodie
> ALIAS       : "The Orator"
> STATUS      : AKTIF
> FRAKSI      : Tim Debat Sekolah
> KEAHLIAN    : Gaslighting, Distorsi Fakta
> BIO SINGKAT : 
Kapten debat yang tidak pernah kalah. Jika seseorang tertangkap basah melanggar aturan, Jemima bisa memutarbalikkan fakta hingga guru-guru percaya bahwa pelakunya adalah korban.`,

    "mikaela": `[ FILE: STUDENT-25 ]
> NAMA ASLI   : Mikaela Chyntia Yaputra
> ALIAS       : "Siren"
> STATUS      : AKTIF
> FRAKSI      : Paduan Suara
> KEAHLIAN    : Komunikasi Sandi Morse via Nada
> BIO SINGKAT : 
Saat tim paduan suara berlatih, mereka tidak sedang bernyanyi secara acak. Mikaela mengatur tempo dan nada tertentu yang sebenarnya merupakan sandi morse rahasia yang disiarkan ke seluruh penjuru sekolah.`,

    "intan": `[ FILE: STUDENT-26 ]
> NAMA ASLI   : Intan Cassia Shania
> ALIAS       : "The Keymaster"
> STATUS      : AKTIF
> FRAKSI      : Asisten Tata Usaha
> KEAHLIAN    : Duplikasi Kunci, Pencurian Data Fisik
> BIO SINGKAT : 
Siswi pendiam yang dipercaya guru untuk membantu merapikan ruang staf. Berbekal lilin mainan dan kejeliannya, Intan memiliki cetakan duplikat dari setiap pintu ruangan penting di sekolah ini.`,

    // --- ADMIN SYSTEM ---
    "admin": `[ FILE: CLASSIFIED ]
<span class="warning">DOKUMEN TERENKRIPSI TINGKAT KEPALA SEKOLAH.</span>
> NAMA        : ??? (Hanya dikenal sebagai ADMIN_X)
> STATUS      : TIDAK TERLACAK
> BIO SINGKAT : 
Seseorang yang memantau ke-26 siswa di atas. Mengetahui seluruh skandal, kebohongan, dan aliansi di Jayapura Indah. 
*Permainan baru saja dimulai.*`
};

const storySynopsis = `[ DATABASE: SINOPSIS CERITA ]
Judul Cerita: "Kilau dan Debu Series"
Sebelum ada kilau yang menyilaukan mata, sebelum debu menutupi setiap jejak kebahagiaan, dulu ada masa yang tenang, yang hanya dihiasi cahaya rema dan keheningan yang terasa damai.

Baca cerita lengkapnya di Wattpad: https://www.wattpad.com/story/394525898-kilau-dan-debu-s1-end`;

// Logic Command
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const inputVal = userInput.value.trim().toLowerCase();
        if (!inputVal) return; // Mencegah proses jika input kosong

        // Pemisahan spasi yang lebih aman
        const args = inputVal.split(/\s+/);
        const command = args[0];
        
        // Cetak riwayat input
        const historyLine = document.createElement('div');
        historyLine.innerHTML = `<br><span class="prompt">root@database:~$</span> ${userInput.value}`;
        commandHistory.appendChild(historyLine);

        const responseLine = document.createElement('div');
        responseLine.classList.add('output-result');

        // Pengecekan Command
        if (command === 'clear') {
            commandHistory.innerHTML = '';
            document.querySelector('.output').style.display = 'none';
        } 
        else if (command === 'start' || command === 'help') {
            responseLine.innerHTML = `COMMANDS TERSEDIA:
> <span class="highlight">synopsis</span>     : Menampilkan sinopsis cerita
> <span class="highlight">list-chars</span>   : Menampilkan daftar file karakter yang bisa diakses
> <span class="highlight">open [nama]</span>  : Membuka file rahasia karakter (Contoh: open rachel)
> <span class="highlight">clear</span>        : Membersihkan layar terminal`;
            commandHistory.appendChild(responseLine);
        }
        else if (command === 'synopsis') {
            responseLine.innerHTML = storySynopsis;
            commandHistory.appendChild(responseLine);
        }
        else if (command === 'list-chars') {
            responseLine.innerHTML = `MENGAKSES DIREKTORI KARAKTER...
Ditemukan 27 file:
- rachel
- adeline
- aisa 
- aurhel
- catherina
- fritzy
- hillary
- jazzlyn
- letycia
- michelle
- nayla
- nina
- oline
- regina
- ribka
- shabilqis
- victoria
- astrella
- aprillia
- hagia
- humaira
- jacqueline
- jemima
- mikaela
- intan
- christian
- admin (ENCRYPTED)

Ketik 'open [nama_file]' tanpa .dat untuk membaca.`;
            commandHistory.appendChild(responseLine);
        }
        else if (command === 'open') {
            const charName = args[1];
            if (!charName) {
                responseLine.innerHTML = `<span class="error-text">ERROR: Anda harus memasukkan nama karakter. (Contoh: open rachel)</span>`;
            } else if (characterDB[charName]) {
                // Menampilkan gambar dan memunculkan teks merah jika nama file tidak cocok
                responseLine.innerHTML = `Mendekripsi data untuk [${charName}]...<br><br>
                <img src="${charName}.jpg" class="hacker-avatar" alt="[ERROR: File ${charName}.jpg tidak ditemukan di folder Anda!]"><br>
                ${characterDB[charName]}`;
            } else {
                responseLine.innerHTML = `<span class="error-text">ERROR: File '${charName}' tidak ditemukan dalam database.</span>`;
            }
            commandHistory.appendChild(responseLine);
        }
        else {
            responseLine.innerHTML = `<span class="error-text">Command tidak dikenali: '${command}'. Ketik 'start' untuk daftar command.</span>`;
            commandHistory.appendChild(responseLine);
        }

        userInput.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});