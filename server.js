// server.js
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const dataFile = path.join(__dirname, 'cars.json');
const uploadDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer config for multiple image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads'),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

function loadCars() {
  if (!fs.existsSync(dataFile)) return [];
  const data = fs.readFileSync(dataFile);
  return JSON.parse(data);
}

function saveCars(cars) {
  fs.writeFileSync(dataFile, JSON.stringify(cars, null, 2));
}

app.get('/api/cars', (req, res) => {
  const cars = loadCars();
  res.json(cars);
});

app.post('/api/cars', upload.array('images'), (req, res) => {
  const { title, description, price, brand, model, location } = req.body;
  const images = req.files ? req.files.map(f => `/uploads/${f.filename}`) : [];

  const cars = loadCars();
  const newCar = {
    id: Date.now(),
    title,
    description,
    price,
    brand,
    model,
    location,
    images,
    sold: false
  };

  cars.push(newCar);
  saveCars(cars);
  res.status(201).json(newCar);
});

app.post('/api/cars/:id/buy', (req, res) => {
  const id = parseInt(req.params.id);
  const { buyerName } = req.body;

  const cars = loadCars();
  const carIndex = cars.findIndex(c => c.id === id);
  if (carIndex === -1) return res.status(404).json({ message: 'Car not found' });

  cars[carIndex].sold = true;
  cars[carIndex].buyerName = buyerName || 'Anonymous';
  saveCars(cars);

  res.json({ message: 'Car marked as sold' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
