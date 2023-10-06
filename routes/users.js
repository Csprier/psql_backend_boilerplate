// ================================================================================
// Create a new user
// app.post('/users', async (req, res) => {
//     try {
//       const { username, email } = req.body;
//       const newUser = await db.one(
//         'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *',
//         [username, email]
//       );
//       res.json(newUser);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  
  // ================================================================================
  // Get all users
  // app.get('/users', async (req, res) => {
  //   try {
  //     const users = await db.any('SELECT * FROM users');
  //     res.json(users);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });
  
  // ================================================================================
  // Update a user by ID
  // app.put('/users/:id', async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { username, email } = req.body;
  //     const updatedUser = await db.oneOrNone(
  //       'UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *',
  //       [username, email, id]
  //     );
  
  //     if (updatedUser) {
  //       res.json(updatedUser);
  //     } else {
  //       res.status(404).json({ error: 'User not found' });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });
  
  // ================================================================================
  // Delete a user by ID
  // app.delete('/users/:id', async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const deletedUser = await db.oneOrNone('DELETE FROM users WHERE id = $1 RETURNING *', id);
  
  //     if (deletedUser) {
  //       res.json(deletedUser);
  //     } else {
  //       res.status(404).json({ error: 'User not found' });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // });