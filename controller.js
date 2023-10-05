const {S3Client,PutObjectCommand,GetObjectCommand}=require('@aws-sdk/client-s3');
const fs=require('fs');
const {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    ASW_BUCKET_NAME,
    ASW_BUCKET_REGION  
}=require('./s3');
const client=new S3Client({
    region:ASW_BUCKET_REGION,
    accessKeyId:AWS_ACCESS_KEY_ID,
    secretAccessKey:AWS_SECRET_ACCESS_KEY

});
module.exports={
    uploadFile:async(file)=>{
        const stream=fs.createReadStream(file.tempFilePath);
        console.log(file.name)
        try {
            const uploadParams={
                Bucket:ASW_BUCKET_NAME,
                Key:file.name,
                Body:stream
            }
            const  command=new PutObjectCommand(uploadParams);
            return await client.send(command);
        } catch (error) {
            return error;
        }
    }
}