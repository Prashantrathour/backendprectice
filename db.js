const express = require('express');
const app = express();
const mongoose = require('mongoose');

    const connection= mongoose.connect(`mongodb://127.0.0.1:27017/test`)
   
 
   
   

  module.exports = {connection} 