import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFileCloudinary = async (localPath) => {
  try {
    if (!localPath) return null;
    // upload file on cloudinary
    const response = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
    });
    // after file uploaded on cloudinary
    console.log("File uploaded successfully: ", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localPath); // remove locally based temporary file when operation get failed!
    return null;
  }
};

export { uploadFileCloudinary };
