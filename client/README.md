# React Movie App

## İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Özellikler](#özellikler)
- [Kullanılan Teknolojiler ve Kütüphaneler](#kullanılan-teknolojiler-ve-kütüphaneler)
- [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)
- [Proje Yapısı](#proje-yapısı)
- [Bileşenler](#bileşenler)
  - [FeaturedSection](#featuredsection)
  - [MovieCard](#moviecard)
  - [BlurCircle](#blurcircle)
- [Veri Yapısı](#veri-yapısı)
- [Routing (Yönlendirme)](#routing-yönlendirme)
- [Stil ve Tasarım](#stil-ve-tasarım)
- [Geliştirme ve Katkı Sağlama](#geliştirme-ve-katkı-sağlama)
- [Sıkça Sorulan Sorular](#sıkça-sorulan-sorular)
- [Lisans](#lisans)

---

## Proje Hakkında

**React Movie App**, modern ve kullanıcı dostu bir arayüzle film listeleme, detay görüntüleme ve bilet alma işlevlerini sunan bir React uygulamasıdır. Proje, örnek film verileriyle çalışır ve tamamen front-end odaklıdır. Amaç, film uygulamalarında kullanılan kart yapısı, responsive tasarım ve modern UI/UX pratiklerini göstermektir.

---

## Özellikler

- **Ana Sayfa:** Şu an gösterimde olan filmler kartlar halinde listelenir.
- **Film Kartları:** Her film için başlık, yıl, süre, puan ve görsel içeren kartlar.
- **Detay Sayfası:** Film kartına tıklanınca detay sayfasına yönlendirme (yapı hazır, örnek veriyle çalışır).
- **Tüm Filmleri Gör:** "View All" ve "Show more" butonları ile tüm filmler sayfasına geçiş.
- **Bilet Satın Al:** Her film kartında "Buy Tickets" butonu.
- **Responsive Tasarım:** Mobil, tablet ve masaüstü uyumlu arayüz.
- **Modern UI:** Tailwind CSS ile şık ve modern görünüm.
- **Bulanık Arka Plan Efekti:** BlurCircle bileşeni ile dekoratif efektler.
- **Kolay Genişletilebilirlik:** Yeni film eklemek veya bileşenleri özelleştirmek çok kolaydır.

---

## Kullanılan Teknolojiler ve Kütüphaneler

- [React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (ikonlar için)
- [Node.js](https://nodejs.org/) & [npm](https://www.npmjs.com/) (bağımlılık yönetimi)

---

## Kurulum ve Çalıştırma

### 1. Depoyu Klonlayın

```bash
git clone https://github.com/KULLANICI_ADIN/REPO_ADI.git
cd REPO_ADI/client
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Uygulamayı Başlatın

```bash
npm start
```

Uygulama, varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

---

## Proje Yapısı

```
client/
├── src/
│   ├── assets/
│   │   └── assets.js         # Dummy film verileri
│   ├── components/
│   │   ├── BlurCircle.jsx    # Bulanık arka plan efekti
│   │   ├── FeaturedSection.jsx # Ana film listesi bölümü
│   │   └── MovieCard.jsx     # Tekil film kartı
│   ├── App.js                # Ana uygulama bileşeni
│   ├── index.js              # Giriş noktası
│   └── ...                   # Diğer dosyalar
├── public/
│   └── ...
├── package.json
└── README.md
```

---

## Bileşenler

### FeaturedSection

- **Amaç:** Ana sayfada öne çıkan filmleri gösterir.
- **Kullanımı:** 
  - `dummyShowsData` dizisinden ilk 4 filmi alır ve `MovieCard` ile render eder.
  - "View All" ve "Show more" butonları ile `/movies` rotasına yönlendirir.
  - BlurCircle ile arka plan efekti ekler.

### MovieCard

- **Amaç:** Tek bir filmi kart şeklinde gösterir.
- **Özellikler:**
  - Film görseli, başlığı, yılı, süresi ve puanı gösterilir.
  - Görsele veya "Buy Tickets" butonuna tıklanınca detay sayfasına yönlendirir.
  - Kırmızı, yuvarlak köşeli, gölgeli butonlar (Tailwind ile).
- **Props:** 
  - `movie`: Film objesi (bkz. [Veri Yapısı](#veri-yapısı))

### BlurCircle

- **Amaç:** Dekoratif bulanık daire efekti.
- **Props:**
  - `top`, `left`, `right`, `bottom`: Pozisyonlandırma için opsiyonel props.
- **Kullanımı:** 
  - `className="absolute z-0 w-60 h-60 rounded-full bg-red-500/30 blur-3xl"`

---

## Veri Yapısı

Film verileri, `src/assets/assets.js` dosyasındaki `dummyShowsData` dizisinde tutulur. Örnek bir film objesi:

```js
{
  _id: "1",
  title: "Inception",
  year: 2010,
  duration: "2h 28m",
  rating: 8.8,
  image: "https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
}
```

**Alanlar:**
- `_id`: String, benzersiz film ID’si
- `title`: String, film adı
- `year`: Number, çıkış yılı
- `duration`: String, film süresi
- `rating`: Number, IMDb puanı
- `image`: String, film afişi URL’si

---

## Routing (Yönlendirme)

- **Ana Sayfa (`/`)**: FeaturedSection ve öne çıkan filmler.
- **Tüm Filmler (`/movies`)**: Tüm filmlerin listelendiği sayfa (yapı hazır, içerik geliştirilebilir).
- **Film Detayı (`/movies/:id`)**: Seçilen filmin detay sayfası (yapı hazır, içerik geliştirilebilir).

Yönlendirme için `useNavigate` ve `react-router-dom` kullanılır.

---

## Stil ve Tasarım

- **Tailwind CSS** ile tamamen responsive ve modern bir arayüz.
- **Kırmızı ve koyu tonlar** ağırlıklı renk paleti.
- **Yuvarlak köşeler**, **gölge efektleri** ve **bulanık arka plan** ile modern görünüm.
- **Butonlar:** 
  - "Show more" ve "Buy Tickets" butonları kırmızı, beyaz yazılı, yuvarlak ve gölgeli.
- **Kartlar:** 
  - Film görseli, başlık, yıl, süre ve puan ile sade ve şık bir görünüm.

---

## Geliştirme ve Katkı Sağlama

1. Fork’layın ve kendi branch’inizde çalışın.
2. Kodunuzu ekleyin ve commit’leyin.
3. Pull request açın.

**Kod Standartları:**
- Bileşen isimleri PascalCase.
- Dosya ve klasör isimleri küçük harf ve tireli.
- Tailwind ile stillendirme, ekstra CSS dosyası yok.

---

## Sıkça Sorulan Sorular

**S: Film verilerini nereden değiştirebilirim?**  
C: `src/assets/assets.js` dosyasındaki `dummyShowsData` dizisini düzenleyebilirsiniz.

**S: Gerçek API ile çalışabilir miyim?**  
C: Evet, veri çekme işlemini bir API ile değiştirmek için ilgili bileşenlerde fetch/axios kullanabilirsiniz.

**S: Tasarımı özelleştirebilir miyim?**  
C: Evet, Tailwind sınıflarını değiştirerek veya yeni bileşenler ekleyerek kolayca özelleştirebilirsiniz.

**S: Proje neden sadece front-end?**  
C: Bu proje, front-end geliştirme ve modern UI/UX pratiklerini göstermek için hazırlanmıştır.

---

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır.

---

Her türlü soru ve katkı için
