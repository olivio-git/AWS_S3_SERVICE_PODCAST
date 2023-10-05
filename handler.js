const { uploadFile } = require('./controller');
const fs=require('fs');

module.exports={
    s3:async(req,res)=>{ 
        console.log(req.files)
        try { 
            const filePath=req.files.photo;
            const result=await uploadFile(filePath);
            fs.unlink(filePath.tempFilePath, err => {
                if (err) console.error(`Error deleting temp file ${filePath.tempFilePath}:`, err);
            }); 
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({error:error.message});
        }
    }
}