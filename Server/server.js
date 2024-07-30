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
app.post('/reservations', (req, res) => {
    const newReservation = {
      first_name: req.body.first_name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      delivery: req.body.delivery,
      totalPrice: req.body.totalPrice,
      cartItems: req.body.cartItems,
    }
  
    reservations_coll.insert(newReservation, (err, doc) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(201).json({ message: 'Reservation successfully created!', orderId: doc._id }); // take the mongo _id and sent it back to cleint side !
      }
    });

  });

  

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
