require('dotenv').config()
const express=require('express');
const morgan=require('morgan');
const fileUpload=require('express-fileupload');
const cors=require('cors');
const photosRouter=require('./photos.routes');
const app=express();

app.use(morgan('dev')); 
app.use(cors());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : './src/assets'
}));
app.use('/api',photosRouter);
app.listen(3001,()=>{
    console.log("running in port 3001");
})