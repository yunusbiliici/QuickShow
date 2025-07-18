backend/
├── src/
│   ├── config/              # Uygulama ayarları (env, db, CORS, vs.)
│   │   └── database.ts
│   ├── controllers/         # Route handler fonksiyonları (iş mantığı)
│   │   ├── authController.ts
│   │   ├── movieController.ts
│   │   ├── reservationController.ts
│   │   └── showtimeController.ts
│   ├── middlewares/         # Auth, error handler, logger, validator vs.
│   │   ├── authMiddleware.ts
│   │   ├── errorMiddleware.ts
│   │   └── validateMiddleware.ts
│   ├── models/              # MongoDB/Mongoose veya ORM modelleri
│   │   ├── Movie.ts
│   │   └── Reservation.ts
│   │   ├── Showtime.ts
│   │   └── User.ts
│   ├── routes/              # API endpoint tanımları
│   │   ├── authRoutes.ts
│   │   ├── movieRoutes.ts
│   │   └── reservationRoutes.ts
│   ├── services/            # DB işlemleri, dış API'ler, iş mantığı
│   │   ├── movie.service.ts
│   │   └── reservation.service.ts
│   │   ├── showtime.service.ts
│   │   └── user.service.ts
│   ├── types/               # TypeScript interface ve type tanımları
│   │   └── index.d.ts
│   ├── utils/               # Yardımcı fonksiyonlar (hashing, JWT, vs.)
│   │   ├── hash.ts
│   │   └── jwt.ts
│   ├── app.ts               # Express uygulaması tanımı
│   └── server.ts            # Sunucu başlatma dosyası
├── .env                     # Ortam değişkenleri
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
