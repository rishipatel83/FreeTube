import { v2 as cloudinary} from "cloudinary";
import { log } from "console";
import fs from "fs";

// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET 
// });

//! new syntax trying if not working do uncomment above

cloudinary.config({
    secure:true
});

console.log(cloudinary.config());

const uploadCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //* upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //* file has been uploaded successfully 
        //* console.log("file has been uploaded on cloudinary", response.url)
        fs.unlink(localFilePath)
        return response;
    } catch (error) {
        fs.unlink(localFilePath)
        return null
    }
}

export {uploadCloudinary}