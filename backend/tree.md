backend/
├── src/
│   ├── config/              # Uygulama ayarları (env, db, CORS, vs.)
│   │   └── database.ts
│   ├── controllers/         # Route handler fonksiyonları (iş mantığı)
│   │   ├── auth.controller.ts
│   │   ├── movie.controller.ts
│   │   └── reservation.controller.ts
│   ├── middlewares/         # Auth, error handler, logger, validator vs.
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validate.middleware.ts
│   ├── models/              # MongoDB/Mongoose veya ORM modelleri
│   │   ├── User.ts
│   │   ├── Movie.ts
│   │   └── Reservation.ts
│   ├── routes/              # API endpoint tanımları
│   │   ├── auth.routes.ts
│   │   ├── movie.routes.ts
│   │   └── reservation.routes.ts
│   ├── services/            # DB işlemleri, dış API'ler, iş mantığı
│   │   ├── user.service.ts
│   │   ├── movie.service.ts
│   │   └── reservation.service.ts
│   ├── types/               # TypeScript interface ve type tanımları
│   │   └── index.d.ts
│   ├── utils/               # Yardımcı fonksiyonlar (hashing, JWT, vs.)
│   │   ├── jwt.ts
│   │   └── hash.ts
│   ├── app.ts               # Express uygulaması tanımı
│   └── server.ts            # Sunucu başlatma dosyası
├── .env                     # Ortam değişkenleri
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
