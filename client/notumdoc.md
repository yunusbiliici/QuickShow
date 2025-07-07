# Quick Show Projesi - Vite + React + Tailwind

## 1. Hafta

### 🚀 Proje Başlangıcı

1. `npm create vite@latest` komutu ile **Quick Show** projesini başlattım.  
   *(Vite: modern ve hızlı bir frontend build aracıdır.)*
2. `cd` komutu ile klasöre geçtim.
3. `npm i` ile proje bağımlılıklarını (`node_modules`) kurdum.
4. **Dependencies nedir?**  
   Projenin çalışması için production ortamında da gerekli olan kütüphaneleri tanımlar.
5. `npm run dev` komutu ile local host üzerinde projeyi başlattım.
6. **Component Structure:**  
   Projenin dosya ve klasör yapısı düzenlenmeye başlandı.
7. `rafce` kullanabilmek için React eklentisi kuruldu.
8. `index.html` dosyasındaki başlık (`<title>`) değiştirildi.
9. Görseller `assets/` klasöründen `src/` klasörüne aktarıldı.
10. Favicon (arka plan simgesi) `index.html` içinde tanımlandı.
11. `src` klasörü altına `components` ve `pages` klasörleri oluşturuldu.
12. `components` klasörüne `Navbar`, `Footer` gibi yapılar eklendi.
13. `navbar.jsx` dosyasına `<div><h1>Navbar</h1></div>` yapısı kuruldu.
14. `main.jsx` dosyasında React Router kurulumu yapıldı.
15. `BrowserRouter` ile sayfa yönlendirme sistemi başlatıldı.
16. `App.jsx` dosyasına `Navbar` ve `Routes` bileşenleri eklendi.
17. Ana yönlendirme `App.jsx` içinde `Home` sayfasına yapıldı.
18. Route işlemleri `path` parametresi ile yapılandırıldı.
19. Tüm sayfa yolları import edilerek yönetildi.
20. **Toaster (Toast Notification):**  
    Küçük pop-up mesajlar, örn: `"Kayıt başarıyla tamamlandı ✅"`
21. Tailwind CSS kuruldu.
22. `index.css` dosyasına Tailwind import edildi.
23. Google Fonts'tan "Outfit" fontu indirilip ilk satıra import edildi.
24. `Navbar` için logo ve sayfa geçiş bağlantıları tasarlandı.
25. Görseller `assets` klasöründen import edilerek kullanıldı.
26. `Navbar.jsx` içinde Link yapıları tanımlandı.
27. `npm i --force` ile bazı uyumsuz bağımlılıklar kuruldu.
28. `Navbar` butonlarına fonksiyonlar eklendi (örneğin "MyBookings").
29. **Clerk** üzerinden kullanıcı oturumu eklendi.
30. Logoya tıklanınca ana sayfaya yönlendirme işlemi tanımlandı.
31. Çoklu kullanıcı desteği için Clerk’te `multiple` session ayarlandı.
32. **Session** (oturum) sistemi cookie’den farklıdır: site kapatılsa bile oturum devam eder.

---

## 2. Hafta

### 1. Gün - Yeni Bileşenler & Kart Yapıları

- Yeni component: `HeroSection` (rafce ile oluşturuldu)
- Yapı:
  - Arka plan `className="bg..."` ile tanımlandı.
  - Görsel (`<img>`) ve başlık eklendi, `<br>` ile satır ayrımı yapıldı.
  - Altına tarih seçimi yapılacak yapı kuruldu.
  - `CalendarIcon` ve `ClockIcon` eklendi ve import edildi.
- `Home.jsx` içerisine `HeroSection` eklendi (import hatası çözüldü).
- GitHub için:
  - `git add .`
  - `git commit -m "..."` (değişiklik açıklaması)
  - `git status`
  - `git push origin main`

> Proje GitHub’a eklendi ve yedeklenmiş hale getirildi.

### Devam Eden İşlemler:

- `<p>` etiketleri ile ikon altına yazılar eklendi.
- Tailwind class’ları ile font, genişlik gibi stiller ayarlandı.
- Buton eklendi (`Daha Fazla Bilgi`), `ArrowRight` ikonu ile birlikte.
- Butonlar `navigate` ile yönlendirme işlevi kazandı.
- Yeni sayfa: `MoviesPage` oluşturuldu.

---

### 🎬 Kart Yapıları

- Yeni component: `FeaturedSection` (`rafce` ile)
  - "Şu anda gösteriliyor" başlığı ve "Tümünü görüntüle" butonu eklendi.
  - `navigate` ile yönlendirme yapısı kuruldu.
  - `Home.jsx` içerisinde `HeroSection` altına yerleştirildi.
- Kaydırılabilir kart alanı tanımlandı, arka plan rengi oluşturuldu.
- `ShowMore` butonu eklendi.
- **MovieCard Component**:
  - Filmlerin gösterileceği kart yapısı
  - Her karta "Bilet Al" butonu eklendi.
  - `assets.js` dosyasına film bilgileri girildi.
  - Saat/dakika formatı için `lib/timeFormat.js` dosyası yazıldı.

---

### 🎥 Trailer Section

- Yeni component: `TrailerSection`
  - `rafce` ile temel structure oluşturuldu.
  - Bu kısımda filmlerin fragmanları yer alacak şekilde planlandı.

---

İlerleyen günlerde:
- Kullanıcı giriş-çıkış işlemleri (Clerk)
- Detay sayfaları ve form işlemleri
- Admin paneli yapısı 
- Backend bağlantısı (Node.js + MySQL gibi) 

---

> Bu döküman, proje ilerlemesini takip etmek veya GitHub README olarak kullanmak için uygundur.
