import express from 'express';
import pool from './db'; // Assuming a database connection module

const router = express.Router();
/*
//User/new [POST]
//User/list [GET]
//User/:id  [DELETE]

router.get('/User/list', async (req, res) => {
    const User =
    try {
      // Type inference for response data
      const users: User[] = await pool.query('SELECT * FROM users');
  
      // Check for errors during query execution
      if (users.rows.length === 0) {
        res.status(404).json({ message: 'No users found' });
        return;
      }
  
      // Handle potential errors in response data
      const formattedUsers = users.rows.map((userRow) => {
        // Assuming `User` is an interface or type with appropriate properties
        const user: User = {
          id: userRow.id, // Ensure correct column name and type conversion
          // ... other user properties
        };
  
        // Additional data processing or validation (optional)
  
        return user;
      });
  
      res.json(formattedUsers);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Internal server error' }); // Handle errors gracefully
    }
  });
  
*/
// Your route definitions and logic here

export default router;
