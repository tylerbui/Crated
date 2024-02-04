require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Product = require('./models/product');

(async function() {
    await Category.deleteMany({});
    const categories = await Category.create([
      {name: 'Home', sortOrder: 10},
      {name: 'Tech', sortOrder: 20},
      {name: 'Clothes', sortOrder: 30},
      {name: 'Food', sortOrder: 40},
      {name: 'Sports', sortOrder: 50},
    ]);


    await Product.deleteMany({});
    const products = await Product.create([
      {name: 'Pans', description: "Cookware", category: categories[0], price: 25.95},
      {name: 'Pots', description: "Cookware", category: categories[0], price: 35.95},
      {name: 'Fridgerator', description: "Insulated Compartment", category: categories[0], price: 2050.95},
      {name: 'Lamps', description: "Device for Light", category: categories[0], price: 84.95},
      {name: 'Chairs', description: "Seat", category: categories[0], price: 50.95},
      {name: 'Beds', description: "Sleep", category: categories[0], price: 1025.95},
      {name: 'Computers', description: "Electronics", category: categories[1], price: 3300.95},
      {name: 'Phones', description:"Electronics", category: categories[1], price: 1300.95},
      {name: 'Speakers', description: "SoundBox", category: categories[1], price: 120.95},
      {name: 'Laptops', description: "Electronics", category: categories[1], price: 2000.95},
      {name: 'TVs', description: "Electronics", category: categories[1], price: 700.95},
      {name: 'Headsets', description: "Electronics", category: categories[1], price: 140.95},
      {name: 'Shoes', description: "Clothes", category: categories[2], price: 150.95},
      {name: 'Shirts', description: "Clothes", category: categories[2], price: 20.95},
      {name: 'Pants', description: "Clothes", category: categories[2], price: 40.95},
      {name: 'Watches', description: "Jewlery", category: categories[2], price: 900.95},
      {name: 'Rings', description: "Jewlery", category: categories[2], price: 600.95},
      {name: 'Milk', description: "Drinks", category: categories[3], price: 5.95},
      {name: 'Coffee', description: "Drinks", category: categories[3], price: 25.95},
      {name: 'Vegtables', description: "Food", category: categories[3], price: 8.95},
      {name: 'Meat', description: "Food", category: categories[3], price: 45.95},
      {name: 'Volleyball', description: "Sports", category: categories[4], price: 80.95},
      {name: 'Basketball', description: "Sports", category: categories[4], price: 60.95},
      {name: 'Bowling', description: "Sports", category: categories[4], price: 215.95},
      {name: 'Football', description: "Sports", category: categories[4], price: 40.95},
      {name: 'Pickleball', description: "Sports", category: categories[4], price: 100.95},
      {name: 'Soccer', description: "Sports", category: categories[4], price: 28.95},
      {name: 'Badmitton', description: "Sports", category: categories[4], price: 20.95},
      {name: 'Golf', description: "Sports", category: categories[4], price: 200.95},
      {name: 'Swimming', description: "Sports", category: categories[4], price: 7.95},
      {name: 'Snowboard', description: "Sports", category: categories[4], price: 450.95},
      {name: 'Hockey', description: "Sports", category: categories[4], price: 250.95},
      {name: 'Baseball', description: "Sports", category: categories[4], price: 150.95},
      {name: 'Nascar', description: "Sports", category: categories[4], price: 120.95},
    ]);

    console.log(products)

    process.exit();
  
})();
  