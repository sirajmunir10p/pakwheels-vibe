const request = require('supertest');
const app = require('../server'); // Import your Express app

describe('PakWheels API Tests', () => {
  
  it('should fetch all cars', async () => {
    const res = await request(app).get('/api/cars');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should add a new car', async () => {
    const newCar = {
      title: 'Honda Civic 2022',
      brand: 'Honda',
      model: 'Civic',
      price: 5000000,
      location: 'Karachi',
      description: 'Well maintained car',
      images: ['https://example.com/car.jpg']
    };

    const res = await request(app).post('/api/cars').send(newCar);
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe(newCar.title);
  });

  it('should mark a car as sold', async () => {
    const carId = 1; // Use a valid car ID
    const res = await request(app).put(`/api/cars/${carId}/buy`);
    expect(res.statusCode).toBe(200);
    expect(res.body.sold).toBe(true);
  });

});
