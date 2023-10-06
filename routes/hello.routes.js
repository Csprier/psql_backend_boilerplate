  // ================================================================================
  // Get Greeting message from Server
//   app.get('/greeting', async (req, res) => {
//     try {
//       const greeting = await db.any('SELECT * FROM greeting');
//       res.json(greeting);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

// const greetingRouter = require('express').Router();
// const pool = require('');

// const getGreeting = async () => {
//     greetingRouter.get('/greeting', (req, res) => {
//         let greeting;
//         pool.query('SELECT * FROM greeting', (data) => {
//             greeting = res.json(data);
//             return greeting
//         })
//         .catch(err => console.error(err));
//     });
// };

// module.exports = getGreeting;

