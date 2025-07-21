import app from './app';
import dotenv from 'dotenv';
import { connectDB } from './config/database';

dotenv.config();

const PORT = process.env.PORT || 8080;

/**
 * Retry sistemli sunucu başlatma fonksiyonu
 */
const startServer = async () => {
  const MAX_RETRIES = 10;
  const RETRY_DELAY = 5000; // 5 saniye
  let attempt = 0;

  while (attempt < MAX_RETRIES) {
    try {
      console.log(`MongoDB bağlantısı deneniyor (${attempt + 1}/${MAX_RETRIES})...`);
      await connectDB(); // connectDB içinde mongoose.connect vardır
      console.log('MongoDB bağlantısı başarılı.');

      app.listen(PORT, () => {
        console.log(`Sunucu http://localhost:${PORT} adresinde başlatıldı.`);
      });
      break; // bağlantı başarılı → döngüden çık
    } catch (error) {
      console.error(`MongoDB bağlantı hatası: ${error}`);
      attempt++;

      if (attempt < MAX_RETRIES) {
        console.log(`${RETRY_DELAY / 1000} saniye sonra tekrar denenecek...`);
        await new Promise((res) => setTimeout(res, RETRY_DELAY));
      } else {
        console.error('Maksimum tekrar denemesi aşıldı. Sunucu kapatılıyor.');
        process.exit(1);
      }
    }
  }
};

startServer();
