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
    const product = await Product.create([
      {name: 'Pans', description: "Cookware", category: categories[0], price: 25.95, image:"https://imgur.com/fGik3lc"},
      {name: 'Pots', description: "Cookware", category: categories[0], price: 35.95, image:"https://imgur.com/FFvRXJI"},
      {name: 'Fridgerator', description: "Insulated Compartment", category: categories[0], price: 2050.95, image:"https://imgur.com/IDxMsQ6"},
      {name: 'Lamps', description: "Device for Light", category: categories[0], price: 84.95, image:"https://imgur.com/IWZuI4z"},
      {name: 'Chairs', description: "Seat", category: categories[0], price: 50.95, image:"https://imgur.com/gM75EIx"},
      {name: 'Beds', description: "Sleep", category: categories[0], price: 1025.95, image:"https://imgur.com/CrPBEk9"},
      {name: 'Computers', description: "Electronics", category: categories[1], price: 3300.95, image:"https://imgur.com/zNiOMWv"},
      {name: 'Phones', description:"Electronics", category: categories[1], price: 1300.95, image:"https://imgur.com/iyWmYdi"},
      {name: 'Speakers', description: "SoundBox", category: categories[1], price: 120.95, image:"https://imgur.com/HcSm5ds"},
      {name: 'Laptops', description: "Electronics", category: categories[1], price: 2000.95, image:"https://imgur.com/pSnN2Pa"},
      {name: 'TVs', description: "Electronics", category: categories[1], price: 700.95, image:"https://imgur.com/q5NysgZ"},
      {name: 'Headsets', description: "Electronics", category: categories[1], price: 140.95, image:"https://imgur.com/XTpT6uA"},
      {name: 'Shoes', description: "Clothes", category: categories[2], price: 150.95, image:"https://imgur.com/undefined"},
      {name: 'Shirts', description: "Clothes", category: categories[2], price: 20.95, image:"https://imgur.com/undefined"},
      {name: 'Pants', description: "Clothes", category: categories[2], price: 40.95, image:"https://imgur.com/QDMGbVl"},
      {name: 'Watches', description: "Jewlery", category: categories[2], price: 900.95, image:"https://imgur.com/nKhfxr1"},
      {name: 'Rings', description: "Jewlery", category: categories[2], price: 600.95, image:"https://imgur.com/4BU6nG9"},
      {name: 'Milk', description: "Drinks", category: categories[3], price: 5.95, image:"https://imgur.com/undefined"},
      {name: 'Coffee', description: "Drinks", category: categories[3], price: 25.95, image:"https://imgur.com/undefined"},
      {name: 'Vegtables', description: "Food", category: categories[3], price: 8.95, image:"https://imgur.com/7m11gES"},
      {name: 'Meat', description: "Food", category: categories[3], price: 45.95, image:"https://imgur.com/saEOuTG"},
      {name: 'Volleyball', description: "Sports", category: categories[4], price: 80.95, image:"https://imgur.com/n8tWQ6B"},
      {name: 'Basketball', description: "Sports", category: categories[4], price: 60.95, image:"https://imgur.com/oqrr0ry"},
      {name: 'Bowling', description: "Sports", category: categories[4], price: 215.95, image:"https://imgur.com/YaeFSv7"},
      {name: 'Football', description: "Sports", category: categories[4], price: 40.95, image:"https://imgur.com/xxqSTwZ"},
      {name: 'Pickleball', description: "Sports", category: categories[4], price: 100.95, image:"https://imgur.com/tMXrCwo"},
      {name: 'Soccer', description: "Sports", category: categories[4], price: 28.95, image:"https://imgur.com/MTwLHqI"},
      {name: 'Badmitton', description: "Sports", category: categories[4], price: 20.95, image:"https://imgur.com/kaMDEGG"},
      {name: 'Golf', description: "Sports", category: categories[4], price: 200.95, image:"https://imgur.com/J9O3mA4"},
      {name: 'Swimming', description: "Sports", category: categories[4], price: 7.95, image:"https://imgur.com/BTJWZqz"},
      {name: 'Snowboard', description: "Sports", category: categories[4], price: 450.95, image:"https://imgur.com/bhLtA7z"},
      {name: 'Hockey', description: "Sports", category: categories[4], price: 250.95, image:"https://imgur.com/RUc4ffn"},
      {name: 'Baseball', description: "Sports", category: categories[4], price: 150.95, image:"https://imgur.com/CrowuUW"},
      {name: 'Nascar', description: "Sports", category: categories[4], price: 120.95, image:"https://imgur.com/wbatxaG"},
    ]);

    console.log(product)

    process.exit();
  
})();
  