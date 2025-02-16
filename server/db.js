var mysql = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'pharmacy'
});

db.connect(err => {
    if(err) {
        console.error("Database connection error:", err);
        return;
    }
    
    console.log("Connected to database");
    
    // Verify customer table exists
    db.query(`
        SELECT * FROM information_schema.tables 
        WHERE table_schema = 'pharmacy' 
        AND table_name = 'customer'
    `, (err, results) => {
        if (err) {
            console.error("Error checking customer table:", err);
            return;
        }
        
        if (results.length === 0) {
            console.error("Customer table does not exist. Creating table...");
            // Create the customer table if it doesn't exist
            db.query(`
                CREATE TABLE IF NOT EXISTS customer (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    username VARCHAR(255) NOT NULL UNIQUE,
                    password VARCHAR(255) NOT NULL,
                    fname VARCHAR(255),
                    lname VARCHAR(255),
                    age INT,
                    pincode VARCHAR(10),
                    email VARCHAR(255)
                )
            `, (err) => {
                if (err) {
                    console.error("Error creating customer table:", err);
                } else {
                    console.log("Customer table created successfully");
                }
            });
        } else {
            console.log("Customer table exists");
            // Verify table structure
            db.query('DESCRIBE customer', (err, fields) => {
                if (err) {
                    console.error("Error checking customer table structure:", err);
                } else {
                    console.log("Customer table structure:", fields);
                }
            });
        }
    });
});

module.exports = db;