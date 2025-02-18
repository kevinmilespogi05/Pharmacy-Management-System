const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const forgotpasswordRoute = require('./routes/forgotpassword');
const adminUpdateRoute = require('./routes/adminUpdate');
const searchcustomerRoute = require('./routes/Searchcustomer');
const medicineRoute = require('./routes/medicines.js');
const transactionRoute = require('./routes/transaction.js');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

app.use('/register',registerRoute )
app.use('/signin',loginRoute )
app.use('/forgotpassword',forgotpasswordRoute )
app.use('/adminUpdate',adminUpdateRoute)
app.use('/searchcustomer',searchcustomerRoute)
app.use('/medicines',medicineRoute)
app.use("/transaction",transactionRoute);
app.use('/user', authRoutes);
app.use('/user', profileRoutes);

const port = process.env.PORT || 1300;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${port} is busy, trying ${port + 1}`);
    app.listen(port + 1);
  } else {
    console.error(err);
  }
});