const questions = [
    {
        question: "Kontrol mana yang menegakkan hak istimewa terkecil (least privilege) untuk admin SaaS baru?",
        options: ["Peran yang dicakup dengan elevasi just-in-time", "Admin global dengan tinjauan triwulanan", "Akses penuh dilindungi hanya oleh MFA", "Mengandalkan penegakan ACL jaringan"],
        answer: "Peran yang dicakup dengan elevasi just-in-time",
        explanation: "Hak istimewa terkecil paling baik ditegakkan dengan memberikan peran sementara dan terbatas hanya ketika dibutuhkan (just-in-time)."
    },
    {
        question: "Bank harus mendeteksi setiap perubahan dalam catatan transaksi. Properti keamanan mana yang menjadi utama?",
        options: ["Ketersediaan sistem dan data", "Jaminan non-penyangkalan (Non-repudiation)", "Integritas untuk mencegah modifikasi yang tidak terdeteksi", "Kerahasiaan konten transaksi"],
        answer: "Integritas untuk mencegah modifikasi yang tidak terdeteksi",
        explanation: "Integritas memastikan data akurat, lengkap, dan tidak diubah, yang sangat penting untuk catatan transaksi."
    },
    {
        question: "Pengaturan router mana yang paling baik mencegah pemalsuan IP (IP spoofing) dari host internal?",
        options: ["Terapkan uRPF pada antarmuka edge", "Implementasikan validasi alamat sumber", "Aktifkan DNS sinkholing secara internal", "Gunakan tabel ARP statis di semua switch"],
        answer: "Implementasikan validasi alamat sumber",
        explanation: "Validasi alamat sumber (seperti yang dilakukan oleh uRPF atau firewall) memastikan bahwa paket yang berasal dari antarmuka berasal dari sumber yang diharapkan, mencegah spoofing internal."
    },
    {
        question: "Cuti wajib dan rotasi pekerjaan untuk staf SOC terutama mengurangi risiko apa?",
        options: ["Mengurangi kemungkinan insiden DDoS", "Mengurangi peluang penipuan orang dalam (insider fraud) dan silo satu orang", "Mengurangi penipuan orang dalam dengan mengekspos aktivitas berbahaya", "Mengekspos dan mencegah penipuan orang dalam melalui rotasi"],
        answer: "Mengurangi peluang penipuan orang dalam (insider fraud) dan silo satu orang",
        explanation: "Rotasi pekerjaan mencegah karyawan menyembunyikan aktivitas jahat untuk waktu yang lama dan memastikan tidak ada satu orang pun yang menjadi satu-satunya pemegang pengetahuan (silo)."
    },
    {
        question: "Mekanisme mana yang menyediakan integritas dan otentikasi asal (origin authentication) untuk sesi BGP?",
        options: ["Transport IPsec melindungi BGP", "Menggunakan TLS pada port 443 untuk BGP", "Mengandalkan reflektor rute saja", "MD5 di SNMPv2"],
        answer: "Transport IPsec melindungi BGP",
        explanation: "IPsec (protokol keamanan jaringan) dapat digunakan untuk mengamankan komunikasi BGP dengan menyediakan integritas dan otentikasi (melalui ESP/AH)."
    },
    {
        question: "Pengaturan pemisahan tugas mana yang paling baik mendukung keamanan CI/CD?",
        options: ["Pemilik kode menyetujui penggabungan (merge), manajer rilis melakukan deployment", "Satu pengembang melakukan merge dan deploy", "Membutuhkan persetujuan terpisah untuk merge dan deployment", "Menggunakan akun admin pipeline bersama"],
        answer: "Membutuhkan persetujuan terpisah untuk merge dan deployment",
        explanation: "Memisahkan persetujuan kode (review) dari persetujuan deployment mencegah satu orang memasukkan dan menerapkan kode berbahaya tanpa pengawasan."
    },
    {
        question: "Apa tujuan utama pemodelan ancaman (threat modeling) selama desain?",
        options: ["Mengoptimalkan metrik kinerja", "Menggantikan kebutuhan akan tinjauan kode", "Mengidentifikasi dan memprioritaskan skenario serangan dan mitigasi", "Memastikan konsistensi UI"],
        answer: "Mengidentifikasi dan memprioritaskan skenario serangan dan mitigasi",
        explanation: "Pemodelan ancaman adalah proses terstruktur untuk mengidentifikasi potensi ancaman dan kerentanan sejak awal siklus hidup pengembangan."
    },
    {
        question: "Pendekatan mana yang memberikan akses auditable just-in-time ke database produksi?",
        options: ["Kredensial ephemeral berumur pendek yang dikeluarkan melalui broker", "Kredensial statis yang dirotasi setiap triwulan", "Akun OS lokal dengan sudo", "Akses VPN bersama ke jump host"],
        answer: "Kredensial ephemeral berumur pendek yang dikeluarkan melalui broker",
        explanation: "Kredensial efemeral (sementara) dan terpusat (broker) memastikan akses hanya diberikan saat dibutuhkan dan semua aktivitas dicatat."
    },
    {
        question: "Kontrol mana yang paling langsung mencegah serangan keracunan LLMNR/NBT-NS?",
        options: ["Rotasi kata sandi akun layanan setiap bulan", "Memastikan EDR yang kuat di endpoint", "Meningkatkan ambang batas penguncian akun", "Nonaktifkan LLMNR/NBT-NS dan perkuat DNS"],
        answer: "Nonaktifkan LLMNR/NBT-NS dan perkuat DNS",
        explanation: "LLMNR/NBT-NS adalah protokol warisan yang rentan terhadap spoofing; menonaktifkannya adalah mitigasi paling langsung."
    },
    {
        question: "Kontrol cloud mana yang paling mengurangi radius ledakan (blast radius) jika kunci akses terekspos?",
        options: ["Gunakan token berumur pendek dan tercakup melalui peran IAM", "Kunci berumur panjang dengan cakupan sempit", "Peran instans berumur pendek dan kebijakan tercakup", "Buka grup keamanan secara luas"],
        answer: "Peran instans berumur pendek dan kebijakan tercakup",
        explanation: "Peran IAM instans yang berumur pendek dan dicakup (scoped) secara ketat membatasi apa yang dapat dilakukan oleh penyerang, bahkan jika mereka mencuri kunci instans."
    },
    {
        question: "Apa manfaat utama memetakan deteksi ke MITRE ATT&CK di SOC?",
        options: ["Pandangan standar tentang cakupan dan celah deteksi", "Menghilangkan kebutuhan akan SIEM", "Menjamin tidak ada positif palsu", "Menggantikan buku pedoman respons insiden"],
        answer: "Pandangan standar tentang cakupan dan celah deteksi",
        explanation: "Pemetaan ke ATT&CK memberikan bahasa umum untuk mengevaluasi efektivitas pertahanan dan mengidentifikasi area buta (detection gaps)."
    },
    {
        question: "Praktik mana yang paling mengurangi risiko SSRF di layanan cloud-native?",
        options: ["Nonaktifkan TLS", "Izinkan semua pengalihan", "Blokir akses ke metadata dan alamat link-local", "Meningkatkan batas CPU instans"],
        answer: "Blokir akses ke metadata dan alamat link-local",
        explanation: "Banyak serangan SSRF menargetkan titik akhir metadata cloud (misalnya, 169.254.169.254); memblokir akses ke alamat ini memitigasi risiko besar."
    },
    {
        question: "Pendekatan pencadangan mana yang memberikan bukti bahwa cadangan tidak dapat dimodifikasi oleh ransomware?",
        options: ["Cadangan immutable, air-gapped, atau WORM-capable dengan pengujian pemulihan", "Cadangan pada domain yang sama dengan akses admin", "Enkripsi cadangan tanpa kekekalan (immutability)", "Mengandalkan RAID dan snapshot"],
        answer: "Cadangan immutable, air-gapped, atau WORM-capable dengan pengujian pemulihan",
        explanation: "Immutable (tidak dapat diubah) atau air-gapped memastikan ransomware tidak dapat mencapai atau mengubah data cadangan."
    },
    {
        question: "Konsep IAM mana yang memberikan akses hanya ketika postur dan konteks perangkat cocok?",
        options: ["Akses yang sadar konteks (berbasis risiko)", "Peran RBAC permanen", "Model kepercayaan jaringan terbuka", "Elevasi admin yang selalu aktif"],
        answer: "Akses yang sadar konteks (berbasis risiko)",
        explanation: "Akses sadar konteks (Context-aware access) menggunakan faktor dinamis seperti lokasi, waktu, dan kesehatan perangkat untuk menentukan otorisasi."
    },
    {
        question: "Kapan pemberantasan (eradication) harus dimulai selama respons insiden?",
        options: ["Segera sebelum penahanan (containment)", "Setelah penahanan dan penentuan ruang lingkup (scoping)", "Hanya setelah pemulihan penuh", "Setelah bukti dihapus"],
        answer: "Setelah penahanan dan penentuan ruang lingkup (scoping)",
        explanation: "Eradication (menghapus ancaman) harus dimulai setelah ancaman berhasil ditahan, dan tim telah sepenuhnya memahami ruang lingkup pelanggaran."
    },
    {
        question: "Mana yang paling baik mendefinisikan kontrol kompensasi?",
        options: ["Tindakan sementara yang menawarkan pengurangan risiko yang sebanding", "Pengamanan yang setara ketika kontrol utama tidak dapat dilakukan", "Catatan kepatuhan dekoratif", "Hanya pengecualian yang didokumentasikan"],
        answer: "Pengamanan yang setara ketika kontrol utama tidak dapat dilakukan",
        explanation: "Kontrol kompensasi adalah kontrol alternatif yang mempertahankan tingkat keamanan yang diperlukan ketika kontrol standar tidak dapat diterapkan karena alasan operasional."
    },
    {
        question: "DevOps stores rahasia dalam kode. Praktik mana yang paling efektif memperbaikinya?",
        options: ["Pindahkan rahasia ke manajer rahasia dengan TTL pendek", "Enkode Base64 rahasia di repo", "Simpan di komentar dan cabang pribadi", "Hanya mengandalkan .gitignore"],
        answer: "Pindahkan rahasia ke manajer rahasia dengan TTL pendek",
        explanation: "Manajer rahasia (Secrets Manager) dirancang untuk menyimpan rahasia secara terpusat, mengenkripsinya, dan mengeluarkannya secara dinamis (dengan TTL pendek)."
    },
    {
        question: "Tumpukan pertahanan berlapis mana yang paling baik mengurangi phishing email?",
        options: ["DMARC/DKIM/SPF, sandboxing, penulisan ulang URL, dan pelaporan", "Pelatihan pengguna saja", "Blokir semua lampiran secara langsung", "Mengandalkan antivirus lama"],
        answer: "DMARC/DKIM/SPF, sandboxing, penulisan ulang URL, dan pelaporan",
        explanation: "Pertahanan yang efektif melawan phishing memerlukan pertahanan di berbagai lapisan: pencegahan spoofing (DMARC/DKIM/SPF), perlindungan payload (sandboxing/rewriting), dan faktor manusia (pelaporan)."
    },
    {
        question: "Dalam kepercayaan nol (Zero Trust), bagaimana akses diperlakukan?",
        options: ["Percayai sekali per perangkat dan jangan pernah dievaluasi ulang", "Verifikasi berkelanjutan menggunakan identitas dan konteks", "Firewall perimeter cukup untuk kepercayaan", "Lokasi jaringan semata-mata menentukan kepercayaan"],
        answer: "Verifikasi berkelanjutan menggunakan identitas dan konteks",
        explanation: "Prinsip inti Zero Trust adalah 'Jangan pernah percaya, selalu verifikasi.' Akses divalidasi terus menerus berdasarkan faktor dinamis."
    },
    {
        question: "Kontrol mana yang paling efektif mencegah Pass-the-Hash (PtH) di AD?",
        options: ["Terapkan perlindungan Credential Guard/LSA dan batasi logon admin", "Nonaktifkan penandatanganan SMB", "Gunakan telnet untuk tugas admin", "Gunakan kembali kata sandi admin lokal"],
        answer: "Terapkan perlindungan Credential Guard/LSA dan batasi logon admin",
        explanation: "Credential Guard melindungi hash kredensial di memori. Membatasi logon admin mencegah hash bernilai tinggi tersebar di jaringan."
    },
    {
        question: "Pengaturan pencatatan mana yang paling meningkatkan kesiapan forensik?",
        options: ["Hapus log setiap bulan", "Gunakan log teks lokal dan rotasi sering", "Sentralisasikan log ke penyimpanan yang aman dan immutable dengan sinkronisasi waktu", "Nonaktifkan log audit untuk kinerja"],
        answer: "Sentralisasikan log ke penyimpanan yang aman dan immutable dengan sinkronisasi waktu",
        explanation: "Log yang aman dan tidak dapat diubah (immutable) dengan stempel waktu yang akurat (time sync) sangat penting untuk bukti forensik yang kredibel."
    },
    {
        question: "Penanganan token mana yang paling baik mencegah pemutaran ulang JWT?",
        options: ["Ikat token ke saluran atau gunakan DPoP dengan TTL pendek dan pencabutan", "Gunakan masa hidup yang panjang", "Gunakan kunci HS256 yang sama di mana-mana", "Nonaktifkan kedaluwarsa"],
        answer: "Ikat token ke saluran atau gunakan DPoP dengan TTL pendek dan pencabutan",
        explanation: "Mengikat token ke saluran klien (DPoP) dan menggunakan masa hidup yang sangat pendek mencegah penyerang menggunakan kembali token yang dicuri."
    },
    {
        question: "Pendekatan mana yang paling baik memutus rantai pembunuhan selama pergerakan lateral?",
        options: ["Blokir C2 DNS saja", "Nonaktifkan cadangan secara global", "Mikrosegmentasi jaringan dan kebersihan kredensial", "Hapus log untuk menghalangi penyerang"],
        answer: "Mikrosegmentasi jaringan dan kebersihan kredensial",
        explanation: "Mikrosegmentasi membatasi jalur yang dapat digunakan penyerang untuk bergerak. Kebersihan kredensial (misalnya, LAPS) menghilangkan target PtH."
    },
    {
        question: "Bagaimana organisasi harus mengurangi risiko dari perpustakaan pihak ketiga?",
        options: ["Abaikan dependensi transien", "Pin versi selamanya tanpa tinjauan", "Gunakan analisis komposisi perangkat lunak, SBOM, dan patching cepat", "Hanya gunakan perpustakaan populer tanpa tinjauan"],
        answer: "Gunakan analisis komposisi perangkat lunak, SBOM, dan patching cepat",
        explanation: "SCA mengidentifikasi kerentanan dan lisensi, SBOM memberikan inventaris lengkap, dan patching cepat diperlukan untuk mitigasi."
    },
    {
        question: "Aktivitas mana yang termasuk dalam fase 'Persiapan' IR?",
        options: ["Latihan meja (tabletop exercises) dan validasi buku pedoman", "Isolasi host selama insiden aktif", "Pemberantasan malware", "Pencitraan bukti (Evidence imaging)"],
        answer: "Latihan meja (tabletop exercises) dan validasi buku pedoman",
        explanation: "Fase persiapan adalah semua tentang pelatihan, perencanaan, dan memastikan alat dan proses sudah ada sebelum insiden terjadi."
    },
    {
        question: "Jika kontainer lolos melalui bug kernel, kontrol mana yang membatasi dampaknya?",
        options: ["Jalankan semua kontainer sebagai root", "Gunakan seccomp/AppArmor dan node hak istimewa terkecil", "Ekspos daemon docker melalui TCP", "Nonaktifkan audit untuk kinerja"],
        answer: "Gunakan seccomp/AppArmor dan node hak istimewa terkecil",
        explanation: "Seccomp/AppArmor membatasi panggilan sistem yang dapat dilakukan kontainer, sementara node hak istimewa terkecil membatasi apa yang dapat dicapai setelah lolos."
    },
    {
        question: "Metode kriptografi mana yang menyediakan kerahasiaan ke depan (forward secrecy)?",
        options: ["Pertukaran kunci efemeral ECDHE", "Pertukaran kunci RSA statis", "Tanda tangan berbasis MD5", "Kunci simetris pra-bagi saja"],
        answer: "Pertukaran kunci efemeral ECDHE",
        explanation: "ECDHE menghasilkan kunci sesi unik, memastikan data yang lalu tidak dapat didekripsi bahkan jika kunci master dikompromikan (forward secrecy)."
    },
    {
        question: "Apa tujuan utama kebijakan klasifikasi data?",
        options: ["Menentukan penanganan dan perlindungan berdasarkan sensitivitas", "Meningkatkan penggunaan penyimpanan", "Meningkatkan jangkauan pemasaran", "Mewajibkan cadangan pita"],
        answer: "Menentukan penanganan dan perlindungan berdasarkan sensitivitas",
        explanation: "Klasifikasi data menetapkan tingkat sensitivitas (publik, rahasia, dsb.) dan mengikat kontrol keamanan ke tingkat tersebut."
    },
    {
        question: "Metode pengujian mana yang paling akurat mensimulasikan musuh eksternal yang termotivasi dengan intel terbatas?",
        options: ["Pengujian white-box dengan detail lengkap", "Pengujian penetrasi black-box dengan cakupan berbasis tujuan", "Pengujian unit saja", "Analisis kode statis saja"],
        answer: "Pengujian penetrasi black-box dengan cakupan berbasis tujuan",
        explanation: "Black-box mensimulasikan penyerang luar (tidak ada pengetahuan internal), dan cakupan berbasis tujuan mencerminkan insiden nyata (misalnya, 'mencuri PII')."
    },
    {
        question: "DLP memunculkan bendera unggahan ke cloud pribadi. Tindakan segera terbaik?",
        options: ["Abaikan peringatan jika prioritas rendah", "Blokir semua akses internet", "Segera pecat karyawan", "Karantina transfer dan selidiki konteks"],
        answer: "Karantina transfer dan selidiki konteks",
        explanation: "Tindakan pertama adalah menahan potensi kebocoran (karantina); setelah itu, penyelidikan dilakukan untuk memahami niatnya."
    },
    {
        question: "Skenario mana yang paling membutuhkan Penilaian Dampak Privasi (PIA)?",
        options: ["Meluncurkan platform analitik baru yang memproses PII", "Meningkatkan RAM server", "Mengganti perabotan kantor", "Patching OS secara teratur"],
        answer: "Meluncurkan platform analitik baru yang memproses PII",
        explanation: "PIA diperlukan setiap kali proyek baru melibatkan pemrosesan atau penggunaan informasi identitas pribadi (PII) secara substansial."
    },
    {
        question: "Desain jaringan mana yang paling membatasi badai siaran dan pergerakan lateral?",
        options: ["Jaringan L2 datar", "Segmentasi VLAN dengan ACL dan firewall antar zona", "DMZ tunggal untuk semua layanan", "Menonaktifkan STP pada switch"],
        answer: "Segmentasi VLAN dengan ACL dan firewall antar zona",
        explanation: "VLAN membagi domain siaran. ACL dan firewall memaksa pemeriksaan pada semua lalu lintas antar segmen, membatasi pergerakan lateral."
    },
    {
        question: "Pengembang kadang-kadang membutuhkan akses DB produksi. Kontrol terbaik?",
        options: ["Akses baca break-glass, terikat waktu, dengan persetujuan", "Akses baca-tulis permanen untuk pengembang", "Kata sandi admin DB bersama", "Tidak ada akses pengembang kapan pun"],
        answer: "Akses baca break-glass, terikat waktu, dengan persetujuan",
        explanation: "Akses harus terbatas, membutuhkan otorisasi eksplisit (persetujuan), dan hanya berlaku untuk durasi yang singkat (terikat waktu)."
    },
    {
        question: "Kontrol pencatatan cloud mana yang membantu mendeteksi perubahan grup keamanan yang tidak sah?",
        options: ["Log audit control-plane cloud dengan peringatan pada perubahan IAM/SG", "Hanya log alur VPC", "Hanya log akses penyimpanan objek", "Menonaktifkan log untuk kinerja"],
        answer: "Log audit control-plane cloud dengan peringatan pada perubahan IAM/SG",
        explanation: "Perubahan pada grup keamanan (Security Groups) adalah perubahan control-plane yang dicatat dalam log audit cloud (misalnya, CloudTrail, Audit Logs)."
    },
    {
        question: "Risiko dinilai kemungkinan tinggi tetapi dampak rendah. Perawatan terbaik?",
        options: ["Hindari dengan menutup unit", "Transfer tanpa pemantauan", "Terima dengan pemantauan dan kontrol minimal", "Abaikan tanpa dokumentasi"],
        answer: "Terima dengan pemantauan dan kontrol minimal",
        explanation: "Untuk risiko berdampak rendah, penerimaan (acceptance) seringkali merupakan respons yang paling hemat biaya, asalkan dimonitor (monitored)."
    },
    {
        question: "Tindakan mana yang paling baik mengurangi penjejalan kredensial (credential stuffing)?",
        options: ["Penguncian akun setelah satu kegagalan", "Implementasikan MFA", "Nonaktifkan HTTPS", "Hanya memerlukan kata sandi yang kompleks"],
        answer: "Implementasikan MFA",
        explanation: "MFA (Multi-Factor Authentication) membuat kata sandi yang dicuri tidak berguna, karena penyerang tidak memiliki faktor kedua."
    },
    {
        question: "Untuk mengurangi akses SaaS yang terlantar (orphaned), mana yang terbaik?",
        options: ["JML otomatis dengan SCIM dan sertifikasi berkala", "Spreadsheet manual", "Berikan akses seumur hidup"],
        answer: "JML otomatis dengan SCIM dan sertifikasi berkala",
        explanation: "SCIM (Identity Management) mengotomatisasi penonaktifan akun, sementara sertifikasi berkala memastikan peninjauan ulang hak akses yang tersisa."
    },
    {
        question: "Apa tujuan utama latihan tim merah (Red Team)?",
        options: ["Menggantikan pemindaian kerentanan", "Hanya untuk melewati pemeriksaan kepatuhan", "Meniru musuh yang realistis untuk menguji deteksi dan respons", "Sengaja merusak sistem produksi"],
        answer: "Meniru musuh yang realistis untuk menguji deteksi dan respons",
        explanation: "Red Team menguji kemampuan pertahanan (Blue Team) dengan mensimulasikan taktik dan teknik penyerang dunia nyata."
    },
    {
        question: "Kapan ABAC lebih disukai daripada RBAC?",
        options: ["Keputusan akses bergantung pada atribut seperti perangkat, lokasi, dan sensitivitas data", "Peran pekerjaan statis tidak pernah berubah", "Tim kecil dengan peran tetap", "Aplikasi single-tenant lama"],
        answer: "Keputusan akses bergantung pada atribut seperti perangkat, lokasi, dan sensitivitas data",
        explanation: "ABAC (Attribute-Based Access Control) unggul ketika keputusan akses harus dinamis dan berbasis konteks, yang tidak dapat ditangani oleh peran statis RBAC."
    },
    {
        question: "Kontrol mana yang paling mengurangi peningkatan hak istimewa Windows melalui driver yang rentan?",
        options: ["Aktifkan aturan blok driver dan kontrol aplikasi (WDAC)", "Izinkan driver yang tidak ditandatangani untuk kompatibilitas", "Nonaktifkan Pembaruan Windows", "Berikan admin lokal kepada semua pengguna"],
        answer: "Aktifkan aturan blok driver dan kontrol aplikasi (WDAC)",
        explanation: "WDAC (Windows Defender Application Control) memungkinkan whitelisting driver tepercaya dan memblokir driver pihak ketiga yang rentan."
    },
    {
        question: "Properti mana yang mencegah pengirim kemudian menyangkal bahwa mereka telah mengirim pesan?",
        options: ["Integritas", "Kerahasiaan", "Non-penyangkalan (Non-repudiation)", "Ketersediaan"],
        answer: "Non-penyangkalan (Non-repudiation)",
        explanation: "Non-repudiation memastikan tindakan atau komunikasi tidak dapat disangkal oleh pihak yang melakukannya, biasanya dicapai melalui tanda tangan digital."
    },
    {
        question: "Perburuan Kerberoasting harus memprioritaskan telemetri yang mana?",
        options: ["Perubahan izin NTFS", "Hanya login VPN yang gagal", "Hanya log proxy web", "AS-REQ/TGS-REQ yang berlebihan untuk SPN dan aktivitas ekstraksi hash yang tidak biasa"],
        answer: "AS-REQ/TGS-REQ yang berlebihan untuk SPN dan aktivitas ekstraksi hash yang tidak biasa",
        explanation: "Kerberoasting menggunakan permintaan TGS-REQ yang berlebihan untuk mendapatkan hash yang dapat dipecahkan secara offline."
    },
    {
        question: "Metrik mana yang mengukur jumlah kehilangan data yang dapat diterima dalam waktu?",
        options: ["MTBF (Mean Time Between Failures)", "RTO (Recovery Time Objective)", "RPO (Recovery Point Objective)", "MTTR (Mean Time To Repair)"],
        answer: "RPO (Recovery Point Objective)",
        explanation: "RPO adalah titik waktu maksimum yang dapat diterima di masa lalu tempat data dapat dipulihkan."
    },
    {
        question: "Pola mana yang terbaik untuk melindungi kunci API yang digunakan oleh SPA (Single-Page Application)?",
        options: ["Sembunyikan kunci di komentar", "Sematkan kunci di JavaScript sisi klien", "Simpan kunci di localStorage", "Pindahkan rahasia ke proxy backend dan terbitkan token cakupan pengguna"],
        answer: "Pindahkan rahasia ke proxy backend dan terbitkan token cakupan pengguna",
        explanation: "Kunci rahasia tidak boleh diekspos di sisi klien. Proxy backend menyembunyikan kunci API asli dan mengeluarkan token terbatas."
    },
    {
        question: "Tujuan utama tinjauan arsitektur aman?",
        options: ["Meningkatkan estetika UI", "Mengidentifikasi risiko desain sistemik sejak dini dan menentukan kontrol", "Menggantikan standar pengkodean", "Menghindari dokumentasi"],
        answer: "Mengidentifikasi risiko desain sistemik sejak dini dan menentukan kontrol",
        explanation: "Tinjauan arsitektur 'shift left' untuk menemukan dan memperbaiki kelemahan desain yang mendasar sebelum diimplementasikan."
    },
    {
        question: "Konfigurasi penyimpanan cloud mana yang paling mengurangi eksposur publik?",
        options: ["Blokir akses publik di tingkat organisasi, terapkan hak istimewa terkecil dan log akses", "Bucket publik secara default dengan nama yang tidak jelas", "Nonaktifkan enkripsi untuk kesederhanaan", "Mengandalkan kerahasiaan nama objek"],
        answer: "Blokir akses publik di tingkat organisasi, terapkan hak istimewa terkecil dan log akses",
        explanation: "Kebijakan tingkat organisasi mencegah konfigurasi yang salah, dan hak istimewa terkecil membatasi siapa yang dapat mengakses objek tersebut."
    },
    {
        question: "Proses apa yang biasanya menjadi sasaran pembuangan kredensial (credential dumps) di Windows? (Lihat diagram EDR)",
        options: ["explorer.exe", "NisSrv.exe", "MsMpEng.exe", "lsass.exe"],
        answer: "lsass.exe",
        explanation: "lsass.exe (Local Security Authority Subsystem Service) adalah proses yang menyimpan hash kata sandi dan tiket Kerberos di memori, menjadikannya target utama bagi penyerang.",
        imagePath: "images/image_90a16e.jpg" 
    },
    {
        question: "Apa hasil utama dari latihan tim ungu (purple team)?",
        options: ["Peningkatan kolaboratif deteksi dan kontrol berdasarkan serangan simulasi", "Penegakan ketat pemisahan antara merah dan biru", "Menghilangkan analis SOC", "Menghukum pengembang untuk cacat"],
        answer: "Peningkatan kolaboratif deteksi dan kontrol berdasarkan serangan simulasi",
        explanation: "Purple Team adalah kolaborasi real-time antara Red Team (serangan) dan Blue Team (pertahanan) untuk menyempurnakan deteksi."
    },
    {
        question: "Metode otentikasi mana yang paling tahan terhadap phishing?",
        options: ["Token aplikasi seluler TOTP", "Tautan satu kali berbasis email", "Kunci keamanan perangkat keras FIDO2/WebAuthn", "SMS OTP"],
        answer: "Kunci keamanan perangkat keras FIDO2/WebAuthn",
        explanation: "FIDO2/WebAuthn menggunakan kriptografi kunci publik dan secara otomatis mengikat otentikasi ke asal (origin) situs, mencegah serangan AiTM/phishing proxy."
    },
    {
        question: "Mitigasi terbaik untuk mengurangi risiko rantai pasokan di CI/CD?",
        options: ["Cache rahasia di log build untuk kecepatan", "Izinkan runner yang di-host sendiri dari PR", "Tegakkan artefak yang ditandatangani (SLSA), isolasi runner, dan token hak istimewa terkecil", "Nonaktifkan perlindungan cabang"],
        answer: "Tegakkan artefak yang ditandatangani (SLSA), isolasi runner, dan token hak istimewa terkecil",
        explanation: "Tanda tangan memastikan integritas, isolasi mencegah penyebaran malware, dan hak istimewa terkecil membatasi kerusakan jika runner dikompromikan."
    },
    {
        question: "Buku pedoman asumsi pelanggaran (assume-breach runbooks) terutama memberikan manfaat apa?",
        options: ["Mereka mempercepat penahanan dengan memprioritaskan isolasi dan penentuan ruang lingkup", "Mereka menghilangkan positif palsu", "Mereka menghilangkan kebutuhan untuk perburuan ancaman", "Mereka memungkinkan melewati notifikasi"],
        answer: "Mereka mempercepat penahanan dengan memprioritaskan isolasi dan penentuan ruang lingkup",
        explanation: "Buku pedoman ini mengasumsikan pelanggaran telah terjadi, melewati langkah-langkah verifikasi awal untuk langsung fokus pada containment."
    },
    {
        question: "Pertahanan terbaik terhadap domain fronting saat egress?",
        options: ["Blokir DNS sepenuhnya", "Izinkan semua CDN", "Inspeksi TLS dengan SNI dan penegakan kebijakan header Host", "Mengandalkan pelatihan pengguna saja"],
        answer: "Inspeksi TLS dengan SNI dan penegakan kebijakan header Host",
        explanation: "Inspeksi TLS diperlukan untuk melihat header Host, yang sering digunakan oleh domain fronting untuk menyembunyikan tujuan sebenarnya."
    },
    {
        question: "Kontrol mana yang paling membatasi eksfiltrasi melalui tunneling DNS?",
        options: ["Gunakan FTP untuk transfer DNS", "Nonaktifkan DHCP di jaringan", "Meningkatkan DNS TTL", "Firewall DNS dengan analisis panjang kueri dan entropi"],
        answer: "Firewall DNS dengan analisis panjang kueri dan entropi",
        explanation: "Tunneling DNS menyandikan data dalam kueri DNS yang panjang dan acak; menganalisis panjang dan keacakan (entropi) adalah kunci deteksi."
    },
    {
        question: "Untuk deployment IoT besar, mana yang terbaik untuk identitas dan kepercayaan perangkat?",
        options: ["Endpoint MQTT yang tidak diautentikasi", "Kata sandi default bersama per vendor", "Sertifikat X.509 per perangkat dari CA pribadi dan boot aman", "Telemetri HTTP biasa"],
        answer: "Sertifikat X.509 per perangkat dari CA pribadi dan boot aman",
        explanation: "Sertifikat memberikan identitas yang kuat, dan boot aman memastikan integritas perangkat lunak dasar sebelum terhubung."
    },
    {
        question: "Kerentanan mana yang paling mungkin terjadi ketika masukan pengguna digabungkan ke SQL tanpa parameterisasi?",
        options: ["Injeksi SQL", "Cross-Site Scripting (XSS)", "Cross-Site Request Forgery (CSRF)", "Clickjacking"],
        answer: "Injeksi SQL",
        explanation: "Menggabungkan input pengguna langsung ke kueri SQL memungkinkan penyerang menyuntikkan perintah SQL berbahaya."
    },
    {
        question: "Menurut informasi sertifikat, mengapa situs web ini dianggap tidak aman? (Lihat gambar)",
        options: ["Sertifikat menggunakan algoritma tanda tangan yang tidak didukung.", "Sertifikat telah kedaluwarsa melampaui rentang tanggal berlakunya.", "Sertifikat dikeluarkan oleh otoritas yang tidak tepercaya.", "Panjang kunci publik terlalu pendek."],
        answer: "Sertifikat telah kedaluwarsa melampaui rentang tanggal berlakunya.",
        explanation: "Kotak dialog di sertifikat secara eksplisit menunjukkan 'The certificate has expired.'",
        imagePath: "images/image_90aca9.jpg" 
    },
    {
        question: "Berdasarkan tab Detail, algoritma tanda tangan mana yang digunakan untuk sertifikat ini?",
        options: ["sha256RSA", "sha1RSA", "md5RSA", "sha512RSA"],
        answer: "sha256RSA",
        explanation: "Tab Detail menunjukkan 'Signature Algorithm: sha256RSA'."
    },
    {
        question: "Satu kata: Proses pembuktian identitas sebelum otorisasi diberikan.",
        options: ["Otentikasi", "Otorisasi", "Akuntabilitas", "Audit"],
        answer: "Otentikasi",
        explanation: "Otentikasi (Authentication) adalah proses memverifikasi bahwa pengguna adalah orang yang mereka klaim."
    },
    {
        question: "Satu kata: Elemen triad CIA yang memastikan data akurat dan tidak diubah.",
        options: ["Integritas", "Kerahasiaan", "Ketersediaan", "Privasi"],
        answer: "Integritas",
        explanation: "Integritas (Integrity) berfokus pada keakuratan dan keutuhan data."
    },
    {
        question: "Satu kata: Elemen triad CIA yang berfokus pada waktu kerja (uptime) dan ketahanan.",
        options: ["Ketersediaan", "Integritas", "Kerahasiaan", "Keandalan"],
        answer: "Ketersediaan",
        explanation: "Ketersediaan (Availability) memastikan sistem dan data dapat diakses saat dibutuhkan."
    },
    {
        question: "Satu kata: Teknik serangan yang menipu pengguna agar menjalankan kode atau membocorkan rahasia.",
        options: ["Phishing", "Spoofing", "Malware", "Smishing"],
        answer: "Phishing",
        explanation: "Phishing adalah upaya menipu untuk mendapatkan informasi sensitif."
    },
    {
        question: "Satu kata: Proses mengubah plaintext menjadi ciphertext.",
        options: ["Enkripsi", "Dekripsi", "Hashing", "Encoding"],
        answer: "Enkripsi",
        explanation: "Enkripsi (Encryption) adalah proses mengamankan data dengan mengubahnya menjadi bentuk yang tidak dapat dibaca."
    },
    {
        question: "Satu kata: Model akses yang memberikan izin minimum yang diperlukan.",
        options: ["Least Privilege", "Full Access", "RBAC", "ABAC"],
        answer: "Least Privilege",
        explanation: "Hak istimewa terkecil (Least Privilege) adalah prinsip keamanan inti."
    },
    {
        question: "Satu kata: Malware yang mengenkripsi file dan menuntut pembayaran.",
        options: ["Ransomware", "Trojan", "Spyware", "Adware"],
        answer: "Ransomware",
        explanation: "Ransomware adalah perangkat lunak berbahaya yang mengenkripsi data dan menuntut tebusan."
    },
    {
        question: "Satu kata: Catatan peristiwa terkait keamanan yang digunakan untuk penyelidikan.",
        options: ["Log", "Laporan", "Metrik", "File"],
        answer: "Log",
        explanation: "Log adalah catatan kronologis aktivitas sistem."
    },
    {
        question: "Satu kata (akronim): Kerangka kerja yang memetakan taktik dan teknik musuh.",
        options: ["MITRE ATT&CK", "CIS", "NIST", "OWASP"],
        answer: "MITRE ATT&CK",
        explanation: "MITRE ATT&CK adalah basis pengetahuan global tentang taktik dan teknik musuh."
    },
    {
        question: "Satu kata: Model keamanan yang mengasumsikan tidak ada kepercayaan implisit berdasarkan lokasi jaringan.",
        options: ["Zero Trust", "Perimeter", "Firewall", "VPN"],
        answer: "Zero Trust",
        explanation: "Zero Trust (Kepercayaan Nol) adalah model yang 'tidak pernah percaya, selalu verifikasi'."
    },
    {
        question: "Kontrol mana yang paling membatasi pergerakan lateral dari laptop pengembang yang disusupi?",
        options: ["Mikrosegmentasi jaringan dengan pemeriksaan postur perangkat", "VLAN datar dengan konektivitas penuh", "Akun admin bersama untuk kenyamanan", "Pencerminan port hanya untuk pemantauan"],
        answer: "Mikrosegmentasi jaringan dengan pemeriksaan postur perangkat",
        explanation: "Mikrosegmentasi membatasi koneksi dari perangkat yang terinfeksi, dan pemeriksaan postur mencegah akses jika perangkat tidak sehat."
    },
    {
        question: "Bagaimana cara memverifikasi citra kontainer belum dirusak?",
        options: ["Nonaktifkan registri", "Penandatanganan citra dan penegakan kebijakan (misalnya, Sigstore)", "Tarik citra yang tidak ditandatangani melalui HTTP", "Hanya mengandalkan tag citra"],
        answer: "Penandatanganan citra dan penegakan kebijakan (misalnya, Sigstore)",
        explanation: "Tanda tangan kriptografi memastikan integritas dan asal citra sejak build."
    },
    {
        question: "Mitigasi terbaik untuk kerentanan deserialisasi yang tidak aman?",
        options: ["Meningkatkan core CPU server", "Terima semua kelas untuk kenyamanan", "Gunakan HTTP alih-alih HTTPS", "Daftar putih jenis (whitelist types), hindari deserialisasi yang tidak aman, dan tandatangani objek"],
        answer: "Daftar putih jenis (whitelist types), hindari deserialisasi yang tidak aman, dan tandatangani objek",
        explanation: "Deserialisasi yang tidak aman terjadi ketika kode memproses data yang tidak tepercaya. Pembatasan jenis data yang diterima dan tanda tangan adalah mitigasi utama."
    },
    {
        question: "Membeli asuransi siber adalah contoh perlakuan risiko apa?",
        options: ["Mitigasi dengan mengurangi probabilitas", "Penerimaan risiko tanpa transfer", "Transfer risiko ke perusahaan asuransi", "Penghindaran dengan menghilangkan aset"],
        answer: "Transfer risiko ke perusahaan asuransi",
        explanation: "Transfer risiko (Risk Transfer) adalah memindahkan beban keuangan dari risiko kepada pihak ketiga (insurer)."
    },
    {
        question: "Fitur pencatatan mana yang paling penting untuk non-penyangkalan tindakan admin?",
        options: ["Ikat tindakan ke identitas unik dan penyimpanan bukti perusakan", "Aktifkan pencatatan anonim untuk menjaga privasi", "Rotasi log setiap jam dan buang", "Nonaktifkan NTP dan sinkronisasi waktu"],
        answer: "Ikat tindakan ke identitas unik dan penyimpanan bukti perusakan",
        explanation: "Non-repudiation membutuhkan identitas yang jelas dan jaminan bahwa catatan (log) tidak diubah (tamper-evident)."
    },
    {
        question: "WAF harus disetel untuk utamanya bertahan melawan:",
        options: ["Eksploitasi web umum seperti SQLi dan XSS", "Loop switching Layer 2", "Kegagalan daya", "Pembajakan rute BGP"],
        answer: "Eksploitasi web umum seperti SQLi dan XSS",
        explanation: "WAF (Web Application Firewall) dirancang khusus untuk melindungi dari serangan Layer 7 (aplikasi) seperti Injeksi SQL dan XSS."
    },
    {
        question: "Konfigurasi mana yang paling baik mencegah pengambilalihan objek untuk situs statis yang di-host cloud?",
        options: ["Bucket pribadi, kebijakan akses asal, dan URL pembaruan yang ditandatangani", "Izin tulis publik pada bucket", "Mengandalkan TTL cache yang panjang", "Nonaktifkan versi objek"],
        answer: "Bucket pribadi, kebijakan akses asal, dan URL pembaruan yang ditandatangani",
        explanation: "Membatasi izin tulis ke akses asal (Origin Access Control/Policy) dan menjaga bucket tetap pribadi mencegah pihak yang tidak berwenang mengunggah file. URL yang ditandatangani memungkinkan pembaruan aman."
    },
    {
        question: "Praktik mana yang paling memajukan temuan AppSec dini?",
        options: ["Hanya mengandalkan hadiah bug (bug bounty)", "Pentest setelah rilis saja", "Shift-left dengan SAST/DAST/SCA di CI dan pelatihan pengembang", "Nonaktifkan tinjauan kode"],
        answer: "Shift-left dengan SAST/DAST/SCA di CI dan pelatihan pengembang",
        explanation: "Shift-left berarti membawa alat keamanan (SAST/DAST/SCA) ke awal siklus pengembangan (CI) untuk menemukan bug lebih awal dan lebih murah."
    },
    {
        question: "Kerentanan dari gambar pertama berhubungan dengan...?",
        options: ["LFI", "XSS", "CSRF", "SSRF"],
        answer: "SSRF",
        explanation: "Gambar tersebut menunjukkan aplikasi web dipaksa mengirim permintaan ke server internal (Server-Side Request Forgery).",
        imagePath: "images/image_9115ac.jpg" 
    },
    {
        question: "Kerentanan dari gambar kedua berhubungan dengan...?",
        options: ["LFU", "IDOR", "XSS", "Injeksi SQL"],
        answer: "IDOR",
        explanation: "Gambar tersebut menunjukkan penyerang memintas kontrol akses untuk mendapatkan data sensitif (Insecure Direct Object Reference).",
        imagePath: "images/image_911661.jpg" 
    },
    {
        question: "Pernyataan mana tentang pertahanan CSRF yang paling akurat?",
        options: ["SameSite cookies dan anti-CSRF token memitigasi permintaan pengubah status", "CSRF dapat sepenuhnya dicegah dengan validasi input saja", "Permintaan GET harus mengubah status", "HTTPS menghilangkan risiko CSRF"],
        answer: "SameSite cookies dan anti-CSRF token memitigasi permintaan pengubah status",
        explanation: "SameSite cookies dan token sinkronis adalah mekanisme pertahanan utama CSRF."
    },
    {
        question: "Mana yang paling meningkatkan deteksi eksfiltrasi HTTPS orang dalam?",
        options: ["Inspeksi TLS dikombinasikan dengan DLP dan UEBA", "Blokir semua lalu lintas HTTPS", "Nonaktifkan pencatatan untuk privasi", "Audit manual bulanan saja"],
        answer: "Inspeksi TLS dikombinasikan dengan DLP dan UEBA",
        explanation: "Inspeksi TLS memungkinkan DLP melihat payload terenkripsi, dan UEBA dapat mendeteksi perilaku eksfiltrasi yang tidak normal."
    },
    {
        question: "Tindakan mana yang paling baik mencegah eksposur kunci API di repositori publik?",
        options: ["Simpan kunci di file konfigurasi yang di-commit ke VCS", "Sematkan kunci dalam kode dengan Base64 encoding", "Gunakan pemindaian rahasia di CI dan rotasi kunci yang dikompromikan", "Mengandalkan nama file yang tidak jelas"],
        answer: "Gunakan pemindaian rahasia di CI dan rotasi kunci yang dikompromikan",
        explanation: "Pemindaian rahasia mendeteksi kebocoran sebelum kode digabungkan. Jika bocor, kunci harus dirotasi segera."
    },
    {
        question: "Dalam alur serangan yang digambarkan, apa mekanisme utama musuh mendapatkan akses ke sesi terotentikasi korban?",
        options: ["Mereka mencuri kata sandi pengguna dan menggunakannya kembali di situs target.", "Mereka mencegat kode otentikasi multi-faktor (MFA) dan masuk secara langsung.", "Mereka mem-proxy kredensial dan sesi pengguna melalui situs phishing, lalu memperoleh cookie sesi.", "Mereka menipu pengguna agar memasang malware yang menangkap penekanan tombol."],
        answer: "Mereka mem-proxy kredensial dan sesi pengguna melalui situs phishing, lalu memperoleh cookie sesi.",
        explanation: "Situs phishing AiTM bertindak sebagai perantara real-time, mencuri cookie sesi yang sah, melewati MFA.",
        imagePath: "images/image_911d0a.png" 
    },
    {
        question: "Dalam model ZTNA, bagaimana Layanan ZTNA memutuskan apakah akan memberikan akses kepada pengguna? (Lihat diagram)",
        options: ["Ia memercayai semua pengguna internal secara default.", "Ia memverifikasi identitas pengguna, postur perangkat, dan kepatuhan kebijakan sebelum mengizinkan akses.", "Ia memberikan akses hanya berdasarkan alamat IP dan lokasi jaringan.", "Ia mengizinkan semua pengguna yang diautentikasi akses penuh ke jaringan."],
        answer: "Ia memverifikasi identitas pengguna, postur perangkat, dan kepatuhan kebijakan sebelum mengizinkan akses.",
        explanation: "ZTNA adalah tentang verifikasi berkelanjutan berdasarkan identitas, kesehatan perangkat (postur), dan konteks (kebijakan).",
        imagePath: "images/image_911da4.jpg" 
    },
    {
        question: "Apa satu keuntungan utama penerapan ZTNA dibandingkan dengan VPN tradisional?",
        options: ["Pengguna dapat mengakses server apa pun tanpa otentikasi.", "ZTNA menghilangkan overhead enkripsi sepenuhnya.", "ZTNA menyediakan kontrol akses tingkat aplikasi alih-alih akses jaringan penuh.", "ZTNA membutuhkan kedekatan fisik ke pusat data untuk akses aman."],
        answer: "ZTNA menyediakan kontrol akses tingkat aplikasi alih-alih akses jaringan penuh.",
        explanation: "VPN memberikan akses jaringan, berpotensi memberikan terlalu banyak akses. ZTNA memberikan akses granular hanya ke aplikasi tertentu, membatasi pergerakan lateral."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answeredStates = Array(questions.length).fill(false); 
let selectedAnswers = Array(questions.length).fill(null); 
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results');
const scoreDetailsContainer = document.getElementById('score-details');
const chartContainer = document.getElementById('chart-container');
const prevButton = document.getElementById('prev-button');
const nextButtonMain = document.getElementById('next-button-main');
const navButtonsContainer = document.getElementById('nav-buttons-container');

document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi awal (jika Anda memiliki elemen skor lama, hilangkan)
    // document.getElementById('score-display').textContent = ''; 
    
    renderNavButtons();
    goToQuestion(0);
});

// Fungsi untuk navigasi langsung atau maju/mundur
function goToQuestion(index) {
    if (index >= 0 && index < questions.length) {
        currentQuestionIndex = index;
        loadQuestion(currentQuestionIndex);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Fungsi untuk membuat tombol navigasi cepat
function renderNavButtons() {
    navButtonsContainer.innerHTML = '';
    questions.forEach((q, index) => {
        const button = document.createElement('button');
        button.className = 'nav-button';
        button.textContent = index + 1;
        button.onclick = () => goToQuestion(index);
        
        // Tandai sebagai sudah dijawab
        if (answeredStates[index]) {
            // Gunakan warna status jawaban (hijau atau merah)
            const answer = selectedAnswers[index];
            const cleanCorrectAnswer = q.answer.replace(/\\'/g, "'");

            if (answer === cleanCorrectAnswer) {
                button.style.backgroundColor = '#d4edda'; // Hijau muda (Benar)
            } else {
                button.style.backgroundColor = '#f8d7da'; // Merah muda (Salah)
            }
            button.style.color = '#333';
        }
        
        // Tandai sebagai soal saat ini
        if (index === currentQuestionIndex) {
            button.classList.add('current');
        } else {
            button.classList.remove('current');
        }
        
        navButtonsContainer.appendChild(button);
    });
}


function loadQuestion(index) {
    if (index >= questions.length) {
        showResults();
        return;
    }

    const q = questions[index];
    quizContainer.innerHTML = '';
    
    // Perbarui status navigasi utama
    prevButton.disabled = index === 0; 
    
    // Logika untuk tombol Lanjut/Lihat Hasil
    if (index === questions.length - 1) {
        nextButtonMain.textContent = 'Lihat Hasil →';
        nextButtonMain.onclick = showResults;
        nextButtonMain.disabled = !answeredStates[index]; // Harus dijawab sebelum melihat hasil
    } else {
        nextButtonMain.textContent = 'Soal Selanjutnya →';
        nextButtonMain.onclick = () => goToQuestion(index + 1);
        
        // Nonaktifkan tombol Lanjut jika belum dijawab
        nextButtonMain.disabled = !answeredStates[index]; 
    }
    
    // Perbarui tombol navigasi cepat
    renderNavButtons();

    // --- LOGIKA GAMBAR ---
    let imageHtml = '';
    if (q.imagePath) {
        imageHtml = `<img src="${q.imagePath}" alt="Diagram Pertanyaan" class="question-image">`;
    }
    
    const questionCard = document.createElement('div');
    questionCard.className = 'question-card';
    
    // Opsi Jawaban
    const optionsHtml = q.options.map((option) => {
        let classes = 'option';
        const isSelected = selectedAnswers[index] === option;
        const cleanCorrectAnswer = q.answer.replace(/\\'/g, "'");
        
        if (answeredStates[index]) {
            if (option === cleanCorrectAnswer) {
                classes += ' correct';
            } else if (isSelected) {
                classes += ' incorrect';
            }
        } else if (isSelected) {
            classes += ' selected';
        }

        const disabledAttribute = answeredStates[index] ? 'style="cursor: default;"' : '';
        const onClickHandler = answeredStates[index] ? '' : `onclick="selectAnswer(this, '${q.answer.replace(/'/g, "\\'")}', ${index})"`;
        
        return `<div class="${classes}" data-answer="${option}" ${onClickHandler} ${disabledAttribute}>${option}</div>`;
    }).join('');

    // Penjelasan
    const explanationStyle = answeredStates[index] ? 'display: block;' : 'display: none;';

    questionCard.innerHTML = `
        <h3>Pertanyaan ${index + 1} dari ${questions.length}</h3>
        
        ${imageHtml}
        
        <p><strong>${q.question}</strong></p>
        <div class="options-container">
            ${optionsHtml}
        </div>
        
        <div class="explanation" style="${explanationStyle}" id="explanation-${index}">
            <strong>✅ Jawaban Benar: ${q.answer}</strong><br>
            <strong>Penjelasan:</strong> ${q.explanation}
        </div>
    `;
    quizContainer.appendChild(questionCard);
}

function selectAnswer(selectedElement, correctAnswer, index) {
    if (answeredStates[index]) return;

    answeredStates[index] = true;
    const selectedAnswer = selectedElement.getAttribute('data-answer');
    selectedAnswers[index] = selectedAnswer; 

    const cleanCorrectAnswer = correctAnswer.replace(/\\'/g, "'");

    // Perbarui status jawaban dan skor
    const options = selectedElement.parentNode.querySelectorAll('.option');
    options.forEach(opt => {
        opt.style.cursor = 'default';
        if (opt.getAttribute('data-answer') === cleanCorrectAnswer) {
            opt.classList.add('correct');
        } else if (opt.getAttribute('data-answer') === selectedAnswer) {
            opt.classList.add('incorrect');
        }
    });

    // Tampilkan penjelasan
    document.getElementById(`explanation-${index}`).style.display = 'block';
    
    // Perbarui tombol navigasi
    renderNavButtons();
    
    // Aktifkan tombol Lanjut
    if (index < questions.length) {
        nextButtonMain.disabled = false;
    }
}


function calculateFinalScore() {
    let finalScore = 0;
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        // Pastikan format jawaban konsisten (hapus escape quotes jika ada)
        const cleanCorrectAnswer = q.answer.replace(/\\'/g, "'");
        if (selectedAnswers[i] === cleanCorrectAnswer) {
            finalScore++;
        }
    }
    return finalScore;
}


function showResults() {
    // Sembunyikan navigasi dan kuis
    document.getElementById('main-nav-buttons').classList.add('hidden');
    document.getElementById('question-navigator').classList.add('hidden');
    quizContainer.classList.add('hidden');
    
    // Tampilkan hasil
    resultsContainer.classList.remove('hidden');

    const finalScore = calculateFinalScore();
    const totalQuestions = questions.length;
    const incorrectAnswers = totalQuestions - finalScore;
    const percentage = ((finalScore / totalQuestions) * 100).toFixed(2);
    
    // Variabel CSS untuk diagram lingkaran
    const correctPercentCSS = `${percentage}%`;

    // 1. Tampilkan Detail Skor
    scoreDetailsContainer.innerHTML = `
        <h3>Persentase Nilai Anda: ${percentage}%</h3>
        <p>Anda menjawab benar **${finalScore}** dari ${totalQuestions} pertanyaan.</p>
        <p style="color: #28a745; font-weight: bold;">Jawaban Benar: ${finalScore}</p>
        <p style="color: #dc3545; font-weight: bold;">Jawaban Salah/Kosong: ${incorrectAnswers}</p>
        <p style="margin-top: 15px;">Nilai Anda dikonversi menjadi persentase untuk kemudahan evaluasi.</p>
    `;

    // 2. Buat Diagram Lingkaran (Pie Chart)
    chartContainer.innerHTML = `
        <div class="pie-chart" style="--correct-percent: ${correctPercentCSS};">
            <div class="pie-chart-label">
                ${percentage}%<br><span style="font-size: 0.7em; color: #555;">BENAR</span>
            </div>
        </div>
        <ul class="legend">
            <li><span class="legend-color" style="background-color: #28a745;"></span> Jawaban Benar (${finalScore})</li>
            <li><span class="legend-color" style="background-color: #dc3545;"></span> Jawaban Salah/Kosong (${incorrectAnswers})</li>
        </ul>
    `;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}