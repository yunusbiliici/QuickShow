import mongoose from 'mongoose';

const connectWithRetry = async (uri: string, retries = 5, delay = 5000) => {
  for (let i = 0; i < retries; i++) {
    try {
      await mongoose.connect(uri);
      console.log('MongoDB connected successfully.');
      return; // Başarılı olursa fonksiyondan çık
    } catch (err) {
      console.error(`MongoDB connection attempt ${i + 1} failed: ${(err as Error).message}`);
      if (i < retries - 1) {
        console.log(`Retrying in ${delay / 1000} seconds...`);
        await new Promise(res => setTimeout(res, delay));
      } else {
        console.error('All MongoDB connection attempts failed.');
        throw err; // Tüm denemeler başarısız olursa son hatayı fırlat
      }
    }
  }
};

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI, .env dosyasında tanımlı değil.');
  }
  await connectWithRetry(uri);
}; 
