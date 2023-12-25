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

        const image = await fs.promises.readFile(imagePath);

        const [result] = await client.textDetection(image);

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