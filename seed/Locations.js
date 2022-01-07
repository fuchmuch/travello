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
      url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg',
    },
    {
      
      state: 'Utah',
      country: 'United States',
      url:'https://peakvisor.com/img/news/Utah-mountains.jpg',
    },
      
    {
      state: 'Arizona',
      country: 'United States',
      url: 'https://www.ourescapeclause.com/wp-content/uploads/2021/03/shutterstock_691184395-scaled.jpg',
    },

    {
        state: 'Hawaii',
        country: 'United States',
        url: 'https://portal.ehawaii.gov/assets/webp/page/government/counties/honolulu.webp',
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


