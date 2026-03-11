# Style Guide - Solvin Digital

Dokumentasi sistem desain dan komponen UI yang digunakan dalam redesain Solvin Digital.

## **Sistem Desain (Design Tokens)**

Sistem desain ini dipusatkan di [theme.js](file:///D:/Solvin%20Digital/theme.js) dan menggunakan Tailwind CSS sebagai framework utama.

### **1. Palet Warna**
*   **Primary:** `#fd9c99` (Aksen utama untuk button, links, dan highlight).
*   **Dark Background:** `#0f172a` (Slate 900).
*   **Dark Card:** `#1e293b` (Slate 800).
*   **Success:** Emerald 500 (`#10b981`).
*   **Error:** Red 500 (`#ef4444`).
*   **Warning:** Amber 500 (`#f59e0b`).

### **2. Tipografi**
*   **Font Family:** 'Plus Jakarta Sans', sans-serif.
*   **Heading:** Font-black (900) atau font-extrabold (800) untuk visual hierarchy yang kuat.
*   **Body:** Font-medium (500) atau font-semibold (600) untuk keterbacaan optimal.

### **3. Efek Visual**
*   **Glassmorphism:** Digunakan pada kartu dan navigasi dengan `backdrop-blur-xl` dan border transparan.
*   **Shadow Soft:** Shadow halus untuk kedalaman visual tanpa kesan berat.
*   **Border Radius:** Konsisten menggunakan `2rem` (32px) atau `2.5rem` untuk tampilan modern yang "rounded".

---

## **Komponen Utama**

### **1. Glass Card**
Kartu dengan efek kaca yang responsif terhadap mode gelap/terang.
```html
<div class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-soft rounded-[2rem] p-8">
    <!-- Konten -->
</div>
```

### **2. Primary Button**
Tombol aksi utama dengan shadow berwarna primary.
```html
<button class="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
    Aksi Utama
</button>
```

### **3. Dashboard Chart**
Menggunakan library Chart.js dengan tema warna primary dan transisi smooth. Mendukung filter periode (7h, 14h, 30h, 60h, 180h, 1thn).

### **4. Navigation Bar**
Sidebar fixed di desktop dan drawer di mobile, dengan indikator aktif yang menggunakan background opacity primary.

---

## **Prinsip Pengembangan**
*   **Mobile-First:** Seluruh halaman dioptimalkan untuk perangkat mobile terlebih dahulu.
*   **Dark Mode Support:** Menggunakan class `dark` pada root element dan disimpan di `localStorage` dengan key `solvin_theme`.
*   **Stale-While-Revalidate:** Strategi caching menggunakan `localStorage` untuk memuat data global dan katalog produk secara instan sebelum sinkronisasi ke server.
*   **Lucide Icons:** Konsistensi icon menggunakan library Lucide.
