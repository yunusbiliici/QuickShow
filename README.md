🎬 Sinema Bilet Otomasyon Sistemi
Bu proje, kullanıcıların güncel filmleri listeleyebileceği, film detaylarını inceleyebileceği ve koltuk seçerek bilet rezervasyonu yapabileceği modern ve tam donanımlı bir Full-Stack web uygulamasıdır.

Proje, React ile geliştirilmiş dinamik, kullanıcı dostu bir ön yüze (Client) ve Node.js, Express, MongoDB kullanılarak oluşturulmuş güvenli ve performanslı bir REST API arka ucuna (Backend) sahiptir.

✨ Temel Özellikler
Frontend (Kullanıcı Arayüzü)
Modern Arayüz: Tailwind CSS ile şık, responsive ve modern bir tasarım.
Film Listeleme: Gösterimdeki ve gelecek filmlerin kart yapısında listelenmesi.
Detay Sayfası: Her film için oyuncular, yönetmen, puan, süre ve fragman gibi detaylı bilgilerin sunulması.
Koltuk Seçimi: Salon planı üzerinden interaktif koltuk seçimi ve rezervasyon yapma.
Kullanıcı Profili: Kullanıcıların geçmiş rezervasyonlarını görüntüleyebilmesi.
Authentication: Güvenli kullanıcı girişi ve kayıt olma işlemleri.
Responsive Tasarım: Mobil, tablet ve masaüstü cihazlarla tam uyumluluk.
Backend (Sunucu)
RESTful API: Frontend ile tam uyumlu, standartlara uygun API endpoint'leri.
JWT Authentication: Kullanıcı oturumlarının JSON Web Token ile güvenli bir şekilde yönetilmesi.
Veritabanı Modelleme: Mongoose ile filmler, kullanıcılar, seanslar ve rezervasyonlar için yapılandırılmış veri modelleri.
İş Mantığı Servisleri: Veritabanı işlemlerini ve iş mantığını ayıran modüler servis katmanı.
Middleware Yönetimi: Güvenlik, hata yönetimi (error handling) ve veri doğrulama (validation) için ara katmanlar.
Ortam Değişkenleri: .env dosyası ile hassas verilerin ve yapılandırma ayarlarının güvenli yönetimi.
🏛️ Mimari
Proje, birbirinden bağımsız çalışabilen Client ve Server olmak üzere iki ana bölümden oluşur. Bu yapı, geliştirmeyi ve bakımı kolaylaştırır.

Client (Frontend): create-react-app ile oluşturulmuş, React ve React Router üzerine kurulu tek sayfa uygulamasıdır (SPA). Arayüz, Tailwind CSS ile stillendirilmiştir. Backend API'si ile HTTP istekleri üzerinden haberleşir.
Backend (Server): Node.js ve Express çatısı üzerine kurulmuş, TypeScript ile geliştirilmiş bir REST API sunucusudur. Veri kalıcılığı için MongoDB veritabanı ve Mongoose ODM'i kullanır.
🛠️ Kullanılan Teknolojiler
Frontend:

React
React Router DOM
Tailwind CSS
Clerk (Kullanıcı Yönetimi için)
Lucide React (İkonlar)
Backend:

Node.js
Express.js
TypeScript
MongoDB (Veritabanı)
Mongoose (ODM)
JSON Web Token (JWT)
Dotenv
CORS
📂 Proje Yapısı
Proje, client ve backend olmak üzere iki ana klasörden oluşur. Her iki klasör de kendi içinde modüler bir yapıya sahiptir.

plaintext
cinema-booking-system/
├── backend/
│   ├── src/
│   │   ├── config/              # Uygulama ayarları (db, CORS, vs.)
│   │   ├── controllers/         # Route handler fonksiyonları (iş mantığı)
│   │   ├── middlewares/         # Auth, error handler, validator vs.
│   │   ├── models/              # Mongoose şemaları ve modelleri
│   │   ├── routes/              # API endpoint tanımları
│   │   ├── services/            # Veritabanı ve iş mantığı servisleri
│   │   ├── types/               # TypeScript interface ve type tanımları
│   │   ├── utils/               # Yardımcı fonksiyonlar (JWT, hashing)
│   │   ├── app.ts               # Express uygulaması tanımı
│   │   └── server.ts            # Sunucu başlatma dosyası
│   ├── .env.example             # Örnek ortam değişkenleri
│   └── ...
└── client/
    ├── src/
    │   ├── assets/              # Statik dosyalar ve veriler
    │   ├── components/          # Tekrar kullanılabilir React bileşenleri
    │   ├── pages/               # Sayfa bileşenleri
    │   ├── context/             # React Context API'leri
    │   ├── hooks/               # Özel hook'lar
    │   ├── App.jsx              # Ana uygulama bileşeni
    │   └── main.jsx             # Uygulama giriş noktası
    ├── .env.local               # Frontend ortam değişkenleri
    └── ...
🚀 Kurulum ve Çalıştırma
Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

Gereksinimler
Node.js (v18+ önerilir)
MongoDB (veya MongoDB Atlas hesabı)
1. Projeyi Klonlayın
bash
git clone https://github.com/KULLANICI_ADIN/REPO_ADI.git
cd REPO_ADI
2. Backend Kurulumu
bash
 Show full code block 
# Backend klasörüne gidin
cd backend

# Bağımlılıkları yükleyin
npm install

# .env.example dosyasını .env olarak kopyalayın
cp .env.example .env
Oluşturduğunuz .env dosyasını kendi MongoDB bağlantı bilgileriniz ve JWT anahtarınız ile güncelleyin.

ini
# .env dosyası
MONGODB_URI="mongodb://localhost:27017/cinemaDB"
JWT_SECRET="COK_GIZLI_BIR_ANAHTAR"
PORT=8080
3. Frontend Kurulumu
bash
# Ana dizine dönüp client klasörüne gidin
cd ../client

# Bağımlılıkları yükleyin
npm install
Client tarafında Clerk gibi bir servis kullanılıyorsa, ilgili .env.local dosyasını oluşturup anahtarlarınızı eklemeniz gerekebilir.

4. Uygulamayı Çalıştırma
Her iki terminalde de ilgili komutları çalıştırarak hem backend'i hem de frontend'i başlatın.

Terminal 1: Backend Sunucusunu Başlatma

bash
cd backend
npm run dev
Sunucu varsayılan olarak http://localhost:8080 adresinde çalışacaktır.

Terminal 2: Frontend Uygulamasını Başlatma

bash
cd client
npm start
React uygulaması varsayılan olarak http://localhost:3000 adresinde açılacaktır.

📝 API Endpoint'leri
Backend sunucusu aşağıdaki ana endpoint gruplarını sunar:

Method	Endpoint	Açıklama	Yetkilendirme
POST	/api/auth/register	Yeni kullanıcı kaydı oluşturur.	Herkese Açık
POST	/api/auth/login	Kullanıcı girişi yapar ve JWT token döndürür.	Herkese Açık
GET	/api/movies	Tüm filmleri listeler.	Herkese Açık
GET	/api/movies/:id	Belirtilen ID'ye sahip filmin detayını getirir.	Herkese Açık
POST	/api/movies	Yeni bir film ekler.	Admin
GET	/api/showtimes/:movieId	Bir filme ait seansları listeler.	Herkese Açık
POST	/api/reservations	Yeni bir bilet rezervasyonu oluşturur.	Kullanıcı
GET	/api/reservations/me	Giriş yapmış kullanıcının rezervasyonlarını listeler.	Kullanıcı
🤝 Katkıda Bulunma
Projeye katkıda bulunmak isterseniz, lütfen aşağıdaki adımları izleyin:

Bu repoyu fork'layın.
Yeni bir branch oluşturun (git checkout -b ozellik/yeni-bir-ozellik).
Değişikliklerinizi commit'leyin (git commit -m 'Yeni bir özellik eklendi').
Branch'inizi push'layın (git push origin ozellik/yeni-bir-ozellik).
Bir Pull Request açın.
📄 Lisans
Bu proje MIT Lisansı ile lisanslanmıştır. Detaylar için LICENSE dosyasına göz atabilirsiniz.
