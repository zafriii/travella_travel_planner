// const mongoose = require("mongoose")

// const URI = process.env.MONGODB_URI;

// const connectDB = async () => {
//     try {
//         await mongoose.connect(URI)    
//         console.log("MongoDB Connected...");
        
//     } catch (err) {
//         console.error(err.message, "Failed");
//         process.exit(0)
//     }
// }


// module.exports = connectDB; 


require('dotenv').config();
const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

console.log("MONGODB_URI:", URI); 

const connectDB = async () => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });    
        console.log("MongoDB Connected...");
    } catch (err) {
        console.error(err.message, "Failed");
        process.exit(1);
    }
}

module.exports = connectDB;

