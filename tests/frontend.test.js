/**
 * @jest-environment jsdom
 */

const { loadCars } = require('../public/script.js'); // Adjust path if needed

describe('Frontend UI Tests', () => {

  document.body.innerHTML = `
    <div id="carList"></div>
  `;

  test('should render car listings correctly', () => {
    const dummyCars = [
      { title: "Toyota Corolla", price: 4000000, location: "Lahore", description: "Good condition" },
      { title: "Honda Civic", price: 5000000, location: "Karachi", description: "Low mileage" }
    ];

    loadCars(dummyCars);

    expect(document.querySelectorAll('.car').length).toBe(dummyCars.length);
    expect(document.body.innerHTML).toContain("Toyota Corolla");
    expect(document.body.innerHTML).toContain("Honda Civic");
  });

});
