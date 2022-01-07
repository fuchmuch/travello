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
      description: 'Hudson Valley luxury has a new home in Kingston: Introducing Hutton Brickyards, a rambling and imaginative retreat for getaways, experiences and events. Genuine relaxation and deep connections to nature abound through luxury cabins, elevated cuisine, spa, outdoor activities and uninterrupted waterfront vistas.',
      image: 'https://images.squarespace-cdn.com/content/v1/5fa2e9f4749a8a00a3de22f9/1625494438065-S2BWDJJXO1R094ZLKPLK/©Jane+Beiles+Hutton+Cabin+7069.jpg?format=2500w',
      petsallow: true,
      location: newYork[0].id,
    },

    {
        name: `Gurney's Montauk Resort`,
        price: '$$$$',
        address: '290 Old Montauk Hwy, Montauk, NY 11954',
        description: 'The resort has 158 rooms, suites, and beachfront cottages, each with panoramic ocean views and access to The Beach Club',
        image: 'https://assets.hospitalityonline.com/photos/employers/255708/783493_l.jpg',
        petsallow: true,
        location: newYork[0].id,
      },


    {
        name: `Amangiri`,
        price: '$$$$',
        address: '1 Kayenta Rd, Canyon Point, UT 84741',
        description: 'Perfect for adrenaline-fuelled adventure and peaceful desert retreats.',
        image:'https://www.aman.com/sites/default/files/2021-02/210204_AmanHero_Landscape_Amangiri.jpg',
        petsallow: true,
        location: utah[0].id,
      },
    {
      name: 'Miraval Arizona Resort',
      price: '$$$$',
      address: '5000 East, E Vía Estancia Miraval, Tucson, AZ 85739',
      description: 'For over 25 years, Miraval supports individuals on their journey to creating a life in balance. Miraval Resorts and Spas are private, luxury resorts & spa destinations that provide custom wellness experiences based on your intentions.Whether that is nourishing your body, enhancing your mental wellbeing, or fostering spiritual resilience, Miraval provides an integrative approach of caring for the mind, body, and soul, led by a compassionate team of wellness experts',
      image: 'https://www.fivestaralliance.com/files/fivestaralliance.com/field/image/nodes/2019/28586/1%20Miraval%20Arizona%20-%20villa%202.jpg',
      petsallow: true,
      location: arizona[0].id,
    },
    {
        name: 'Sensei Lanai',
        price: '$$$$',
        address: 'Lanai City, HI 96763',
        description: 'One of the most unique wellbeing retreats in the world.',
        image: 'https://www.travelandleisureindia.in/wp-content/uploads/2020/06/Feature-image-Wellness.jpg',
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




