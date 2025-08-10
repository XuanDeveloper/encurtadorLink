import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import shortid from 'shortid';

dotenv.config({ path: 'C:/Users/Juan/Desktop/sem net/encurtadorLink/backend/.env' });
const app = express();

app.use(cors());
app.use(express.json());

const mongourl = process.env.MONGO_URL;
console.log('MONGO_URL:', mongourl);

await mongoose.connect(mongourl)

const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortUrl: { type: String, required: true, unique: true }
})

const Url = mongoose.model('Url', urlSchema);


app.post('/api/shorten', async (req, res) => {
    const { originalUrl } = req.body;
    const shortUrl = shortid.generate();
    const newUrl = new Url({ originalUrl, shortUrl });
    await newUrl.save();
    res.status(201).json({ originalUrl, shortUrl });
});

app.get('/api/:shortUrl', async (req, res) => {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ shortUrl });
    if (!url) {
        return res.status(404).json({ error: 'URL not found' });
    }
    res.redirect(url.originalUrl);
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});