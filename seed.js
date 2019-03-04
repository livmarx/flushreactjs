const { db, User, Toilet, Review } = require('./server/db');
db.sync({ force: true }).then(() => {
  console.log('Database synced!!!');
  return User.bulkCreate([
    {
      name: 'Claire',
      email: 'claire@gmail.com',
      // password: '1234',
      // isAdmin: false,
    },
    {
      name: 'Sarai',
      email: 'sarai@gmail.com',
      // password: '567',
      // isAdmin: false,
    },
    {
      name: 'Sydney',
      email: 'syd@gmail.com',
      // password: '567',
      // isAdmin: false,
    },
    {
      name: 'Victoria',
      email: 'vic@gmail.com',
      // password: '567',
      // isAdmin: false,
    },
    {
      name: 'Mary',
      email: 'mary@gmail.com',
      // password: '567',
      // isAdmin: false,
    },

    {
      name: 'Steve',
      email: 'steve@gmail.com',
      // password: '567',
      // isAdmin: false,
    },
    {
      name: 'Maggie',
      email: 'mags@gmail.com',
      // password: '1010',
      // isAdmin: true,
    },
    {
      name: 'Uma',
      email: 'ums@gmail.com',
      // password: '2020',
      // isAdmin: true,
    },
    {
      name: 'Maria',
      email: 'mars@gmail.com',
      // password: '3030',
      // isAdmin: true,
    },
  ])
    .then(
      Toilet.bulkCreate([
        {
          name: '171 School Street',
          type: 'in-home',
          address: '171 School Street, Roxbury, MA 02119',
          longitude: -71.1012,
          latitude: 42.31714,
          rating: '4',
        },
        {
          name: '180 Montague Street',
          type: 'in-home',
          address: '180 Montague Street, Brooklyn, NY 11201',
          longitude: -73.99189,
          latitude: 40.693981,
          rating: '4',
        },
        {
          name: '5 Hanover Square',
          type: 'in-store',
          address: '5 Hanover Square, New York, NY 10004',
          longitude: -74.009468,
          latitude: 40.70454,
          rating: '4',
        },
        {
          name: '79 Carlton Ave',
          type: 'in-home',
          address: '79 Carlton Ave, Brooklyn, NY 11205',
          longitude: -73.97298,
          latitude: 40.69543,
          rating: '4',
        },
        {
          name: '1000 5th Ave',
          type: 'in-store',
          address: '1000 5th Ave, New York, NY 10028',
          longitude: -73.962578,
          latitude: 40.779079,
          rating: '4',
        },
        {
          name: '315 7th Ave',
          type: 'in-store',
          address: '315 7th Ave, New York, NY 10001',
          longitude: -73.99323,
          latitude: 40.74697,
          rating: '4',
        },
      ])
    )
    .then(
      Review.bulkCreate([
        {
          rating: 3,
          // userId: 2,
        },
        {
          rating: 4,
          // userId: 4,
        },
        {
          rating: 5,
          // userId: 6,
        },
        {
          rating: 5,
          // userId: 6,
        },
        {
          rating: 1,
          // userId: 6,
        },
        {
          rating: 2,
          // userId: 6,
        },
      ])
    )
    .finally(() => {
      db.close();
    })
    .catch(err => {
      console.log(`Oh no! We have an error: ${err}!!!`);
    });
});
