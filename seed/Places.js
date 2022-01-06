const db = require('../db');
const Location = require('../models/location');
const Place = require('../models/place');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const newYork= await Location.find({ city: 'New York' })
    const utah = await Location.find({ city: 'Utah' })
    const arizona= await Location.find({ city: 'Arizona' })
    const hawaii= await Location.find({ city: 'Hawaii' })
   
  const places = [
    {
      name: 'Hutton Brickyards',
      price: '$$$',
      address: '200 North St, Kingston, NY 12401',
      description: 'Craftsmanship at its finest 8-seat 200-year-old hinoki wood sushi bar, serve twice nightly at 6:00 pm and 9:00 pm',
      url: 'https://images.squarespace-cdn.com/content/v1/5fa2e9f4749a8a00a3de22f9/1625494438065-S2BWDJJXO1R094ZLKPLK/©Jane+Beiles+Hutton+Cabin+7069.jpg?format=2500w',
      petsallow: true,
      location: newYork[0].id,
    },

    {
        name: `Gurney's Montauk Resort`,
        price: '$$$$',
        address: '290 Old Montauk Hwy, Montauk, NY 11954',
        description: 'The resort has 158 rooms, suites, and beachfront cottages, each with panoramic ocean views and access to The Beach Club',
        url: 'https://assets.hospitalityonline.com/photos/employers/255708/783493_l.jpg',
        petsallow: true,
        location: newYork[0].id,
      },


    {
        name: `Amangiri`,
        price: '$$$$',
        address: '1 Kayenta Rd, Canyon Point, UT 84741',
        description: 'Perfect for adrenaline-fuelled adventure and peaceful desert retreats.',
        url: 'https://www.aman.com/sites/default/files/2021-02/210204_AmanHero_Landscape_Amangiri.jpg',
        petsallow: true,
        location: utah[0].id,
      },
    {
      name: 'Miraval Arizona Resort',
      price: '$$$$',
      address: '5000 East, E Vía Estancia Miraval, Tucson, AZ 85739',
      description: 'High-end branch of a Tokyo eatery offering omakase-only sushi in a pared-down yet warm setting.',
      url: 'https://www.fivestaralliance.com/files/fivestaralliance.com/field/image/nodes/2019/28586/1%20Miraval%20Arizona%20-%20villa%202.jpg',
      petsallow: true,
      location: arizona[0].id,
    },
    {
        name: 'Sensei Lanai',
        price: '$$$$',
        address: 'Lanai City, HI 96763',
        description: 'One of the most unique wellbeing retreats in the world.',
        url: 'https://www.travelandleisureindia.in/wp-content/uploads/2020/06/Feature-image-Wellness.jpg',
        petsallow: true,
        location: hawaii[0].id,
      },
    
  ];

  await Place.insertMany(places);
  console.log('Created places!');
};

const run = async () => {
  await main();
  db.close();
};

run();




