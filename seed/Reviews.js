const db = require('../db');
const Place = require('../models/place');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const huttonBrickyards = await Place.find({ name: 'Hutton Brickyards' })
    const gurneysMontaukResort= await Place.find({ name: `Gurney's Montauk Resort` })
    const amangiri = await Place.find({ name: 'Amangiri' })
    const miravelArizonaResort= await Place.find({ name: 'Miraval Arizona Resort' })
    const senseiLanai = await Place.find({ name: 'Sensei Lanai' })
 


  const reviews = [
    {
      name: 'Mila',
      comments: 'such a pretty historical place i ever stayed',
      ratings: 5,
      place: huttonBrickyards[0].id,
    
    },
    {
      name: 'John',
      comments: 'so expensive',
      ratings: 3,
      place: miravelArizonaResort[0].id,
    
      
    },
    {
      name: 'Leila',
      comments: 'the best placce to meditate mind and body, feel so youthful staying here',
      ratings: 4,
      place: senseiLanai[0].id,
    
    },
    {
        name: 'Justin',
        comments: 'luxuyry hidden getaway like an oasis in desert',
        ratings: 5,
        place: amangiri[0].id,
      
      },
      {
        name: 'Alvin',
        comments: 'Pricy but worth it to go when it sales!',
        ratings: 5,
        place: gurneysMontaukResort[0].id,
      
      },
    

    
  ];

  await Review.insertMany(reviews);
  console.log('Created reviews!');
};

const run = async () => {
  await main();
  db.close();
};

run();




