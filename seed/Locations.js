const db = require('../db');
const Place = require('../models/place');
const Location = require('../models/location')
const Review= require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

  const locations = [
    {
      state: 'New York',
      country: 'United States',
      url: 'https://i.pinimg.com/564x/ed/40/fd/ed40fd3338fe353632a8c9eb474ad906.jpg',
    },
    {
      
      state: 'Utah',
      country: 'United States',
      url:'https://i.pinimg.com/564x/18/00/c0/1800c00c97117a3c621f53a5bd87ed8e.jpg',
    },
      
    {
      state: 'Arizona',
      country: 'United States',
      url: 'https://i.pinimg.com/474x/1f/95/d9/1f95d96a5acc20cbc1b467960f70ae8a.jpg',
    },

    {
        state: 'Hawaii',
        country: 'United States',
        url: 'https://i.pinimg.com/564x/19/bd/37/19bd373db891264b5dc96e035fb8c2a1.jpg',
      },
   
  ];

  await Location.insertMany(locations);
  console.log('Created locations!');
};

const run = async () => {
  await main();
  db.close();
};

run();  


