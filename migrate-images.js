const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'cars.json');
const cars = JSON.parse(fs.readFileSync(dataFile));

// Convert any car with `image` (string) into `images` (array)
const migrated = cars.map(car => {
  if (car.image && !car.images) {
    car.images = [car.image];
    delete car.image;
  }
  return car;
});

fs.writeFileSync(dataFile, JSON.stringify(migrated, null, 2));
console.log("✅ Migration complete! All cars now use 'images' array format.");
