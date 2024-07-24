const express = require('express');
const mongojs = require("mongojs");
  
//If you use the shared mongodb server:
const db = mongojs(
  'mongodb+srv://Student:webdev2024student@cluster0.uqyflra.mongodb.net/webdev2024'
);

//Edit this line to point to your specific collection!
const reservations_coll = db.collection('final-itamar&ofir-Shoe-Store'); 

const app = express();
app.use(express.json()); // Middleware to parse JSON body

// Simple route to test server
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});


// POST route to handle reservation form submission
app.post('/api/reservations', (req, res) => {
    const newReservation = req.body;
  
    reservations_coll.insert(newReservation, (err, doc) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Register successfully!' });
      }
    });

  });

  

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
