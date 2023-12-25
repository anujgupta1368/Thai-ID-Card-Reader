require('dotenv').config();
const vision = require('@google-cloud/vision');
const fs = require('fs');

async function getData(imagePath) {
    try {
        const CREDENTIALS = YOUR_CREDENTIALS;
            
            const CONFIG = {
                credentials: {
                    private_key: CREDENTIALS.private_key,
                    client_email: CREDENTIALS.client_email
                }
            };
            
            const client = new vision.ImageAnnotatorClient(CONFIG);

        // Read the image file
        const image = await fs.promises.readFile(imagePath);

        // Perform OCR on the image
        const [result] = await client.textDetection(image);

        // Extract relevant information
        const textAnnotations = result.textAnnotations;

        if (textAnnotations && textAnnotations.length > 0) {
            return textAnnotations[0].description;
        } else {
            return '';
        }
    } catch (error) {
        console.log(error);
        return '';
    }
}

module.exports = {
    getData,
}