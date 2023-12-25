// const vision = require('@google-cloud/vision');

// const CREDENTIALS = {
//     "type": "service_account",
//     "project_id": "resonant-ward-384309",
//     "private_key_id": "883b4112be564e3295d978db3416594c600d4ebf",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDE4Hio7kYoIADc\nIYSpHgKDmQG8SZs3vZXUURIrNM0O7748E9FAWWItyoHeiKnkECxoKHbVS4pK9Nxj\n3UqQopFd0sMtIt6u7iOjKaPhDyKjYNZnG7uyQNTWgcrSz0EGiao0ShwCBIF/TFEY\nCBbDOz0Ja+g6bjqIfNSS9QQ6MI4cjssvqKjA1Bxr+7lUFmfGef8E/NfXOTvzRHwQ\nT2mCftoECuhyzYDUSBelxGTcFyCfdrLIbnhJJ+hWLK897beQOJGwS6RrsPosgdoJ\npBQG7CuerwmVaxIt9FpBiGEZM7v8JqnkdcLLoBaRD5O5U0LVsuwzGefhMHoiisuk\ny8CLDk/5AgMBAAECggEABrr/oP3RVUM/0vFh5sKtVmigt1pDAEveygenUdBlVLtZ\nMxZV2bJx5uvErBIFuykFjZ4u2XydQBIA0U4CGTGiO4ADrGC5a7ydfbEuxoLvvcBc\ndWFXNbaImC3kfE0PID03UyriltE8M0OthN9CQPR0Mho3vJH4C2JiGtqIZWwIxbIu\n0dc1/VRU4KoHI+0x71S/OyUnH82l3CY64j+YnpnZp+k3V3zFqLDnd3XfemC4wFkM\n1lNoCaU16HxFFCS02rMDHXpGBlGlLLwt82UXrMiKi4Btmy/v6zmOZiGD3aQ8x+NW\nQM97TZ5NuvqyGS8/qdEqgeF8x0toPij8M7GZ9iwYYQKBgQDjwPKSkSFwkkaBRpWk\n9BumTXHyBddIsrpgkaEja9fEjlGIqbzciajWD+ZiJwEIGjsmp2v2c79pS2klBdAi\nPEzPycWL9yxb0upERWnvsc8sayx4isOykZj/yoMPIgxLZ4DM53DXT9nljej/Dmqx\nL3vTRJfxQBV/dlxgPiii+M7Q2QKBgQDdSzNlC+lSeVVpzNb7p55P5JvIVDXg76j3\n/ruoVhmsg20pLs6vp8DCiBpIDhQf0NXGj0rvv4ITTIBf+dHMkLzvksDwu9E/F7jm\nWxYn1OfATyZ6VAxRH7ChnVxhAaFu5mYPZjfuBOfEvrdMpMZa8EzumgVStPJfqwR1\nSvEGUPIEIQKBgQCt/EsSvn3uMkBcJ6DPx4+LxqPiQKYKqkaI2RdhKNRHGnWc0hYt\n35e0F6dmmedG2ksPp1xphFjYRjyHhN5QGQKQxdH8r5EagJBoISLhclMS2ri5SUBg\nnKtl1L20BM2hmOsjHTbttNl/bJ5uogPNYbnVVhRAvzTtD21YNIP0o9/SWQKBgCDf\nFdBRt6PnoBdqNRkGqg6GD9nvIF28W+YSsb9sor2sfB+c81jGW2zKGNVROg4L0GWB\nTYlVcjX5rCwViOORMG+J5h0cWRW9KVsWdrEOACrh1v5e08GNKoinPlyuiFNX6Bsr\nfO1fTyo7hjDdXRWPEm5y9I13kXVCixP9QNZGWdzhAoGBAJU5LqTU5USFO1hR4DLs\neTQsQXd8vpK9O3Ro2Y/KIUH+fITw6JBhkZ6mx2n1otNDXKROqwLjn2g1e+I8F3RN\nwNIryRAOEddP5OKz7bjepp5hRJR7IE2BvNjxIxUpwexd3L6C/5yTdC80hoGy+Nm/\nqEqDETne9hcCAqgKE2BjDQAW\n-----END PRIVATE KEY-----\n",
//     "client_email": "cloudvision@resonant-ward-384309.iam.gserviceaccount.com",
//     "client_id": "100619527518153395661",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/cloudvision%40resonant-ward-384309.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
//   };

// const CONFIG = {
//     credentials: {
//         private_key: CREDENTIALS.private_key,
//         client_email: CREDENTIALS.client_email
//     }
// };

// const client = new vision.ImageAnnotatorClient(CONFIG);

// const convertToDate = (dateString) => {

//     try{

//         if (dateString === null) return '';

//         const parts = dateString.split(' ');

//         const monthIndex = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'].indexOf(parts[1]) + 1;

//         const month = monthIndex.toString().padStart(2, '0');

//         return `${parts[2]}-${month}-${parts[0].toString().padStart(2, '0')}`;

//     }catch (error) {

//         console.log('error while converting to Date', error);
//         return '';
//     }
// };

// const detectText = async (file_path) => {
//     let [result] = await client.textDetection(file_path);
//     const text=result.fullTextAnnotation.text;
//     // console.log(text);

//     const idNumberMatch = text.match(/(\d{1,4}\s\d{4}\s\d{5}\s\d{2}\s\d{1})/);
//         const identification_number = idNumberMatch ? idNumberMatch[0] : null;

//         // Extract Name
//         const nameMatch = text.match(/Name (.+?)\n/);
//         const name = nameMatch ? nameMatch[1] : null;

//         // Extract Last Name
//         const lastNameMatch = text.match(/Last name (.+?)\n/);
//         const last_name = lastNameMatch ? lastNameMatch[1] : null;

//         // Extract Dates
//         const dateMatches = text.match(/(\d{1,2} [A-Za-z]+\.* \d{4})/g);

//         if (dateMatches === null || dateMatches.length !== 3) {
//             return {
//                 status: 'FAILURE',
//                 identification_number,
//                 name,
//                 last_name,
//                 date_of_birth: '',
//                 date_of_issue: '',
//                 date_of_expiry: ''
//             };
//         }

//         const date_of_birth = dateMatches ? convertToDate(dateMatches[0]) : null;
//         const date_of_issue = dateMatches ? convertToDate(dateMatches[1]) : null;
//         const date_of_expiry = dateMatches ? convertToDate(dateMatches[2]) : null;

//         const record1 = {
//             identification_number,
//             name,
//             last_name,
//             date_of_birth,
//             date_of_issue,
//             date_of_expiry
//     }

//     if (
//         identification_number !== null &&
//         name !== null &&
//         last_name !== null &&
//         date_of_birth != null &&
//         date_of_issue !== null &&
//         date_of_expiry !== null) {
//         record.status = 'Valid';
//     }

//     console.log(record1);
// };

// detectText('id.jpg');













// // const detectText = async (file_path) => {
// //     try {
// //         let [result] = await client.textDetection(file_path);

// //         const fullText = result.fullTextAnnotation.text;

// //         // Extract ID number using a regular expression
// //         const idNumberMatch = fullText.match(/เลขประจำตัวประชาชน([\s\S]*?)ชื่อตัวและชื่อสกุล/);
// //         const idNumber = idNumberMatch ? idNumberMatch[1].trim() : '';

// //         // Extract name, last name, and date of birth using regex
// //         const nameMatch = fullText.match(/ชื่อตัวและชื่อสกุล([\s\S]*?)เกิดวันที่/);
// //         const nameInfo = nameMatch ? nameMatch[1].trim() : '';
// //         const [name, lastName] = nameInfo.split(' ');

// //         const dobMatch = fullText.match(/เกิดวันที่([\s\S]*?)ศาสนา/);
// //         const dob = dobMatch ? dobMatch[1].trim() : '';

// //         // Extract date of issue and date of expiry using regex
// //         const issueMatch = fullText.match(/วันออกบัตร([\s\S]*?)Date of Issue/);
// //         const issueDate = issueMatch ? issueMatch[1].trim() : '';

// //         const expiryMatch = fullText.match(/วันบัตรหมดอายุ([\s\S]*?)Date of Expiry/);
// //         const expiryDate = expiryMatch ? expiryMatch[1].trim() : '';

// //         // Log the extracted information
// //         console.log('ID Number:', idNumber);
// //         console.log('Name:', name);
// //         console.log('Last Name:', lastName);
// //         console.log('Date of Birth:', dob);
// //         console.log('Date of Issue:', issueDate);
// //         console.log('Date of Expiry:', expiryDate);
// //     } catch (error) {
// //         console.error('Error:', error.message || error);
// //     }
// // };

// // detectText('id.jpg');















// // const vision = require('@google-cloud/vision');

// // const CREDENTIALS = {
// //     "type": "service_account",
// //     "project_id": "resonant-ward-384309",
// //     "private_key_id": "883b4112be564e3295d978db3416594c600d4ebf",
// //     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDE4Hio7kYoIADc\nIYSpHgKDmQG8SZs3vZXUURIrNM0O7748E9FAWWItyoHeiKnkECxoKHbVS4pK9Nxj\n3UqQopFd0sMtIt6u7iOjKaPhDyKjYNZnG7uyQNTWgcrSz0EGiao0ShwCBIF/TFEY\nCBbDOz0Ja+g6bjqIfNSS9QQ6MI4cjssvqKjA1Bxr+7lUFmfGef8E/NfXOTvzRHwQ\nT2mCftoECuhyzYDUSBelxGTcFyCfdrLIbnhJJ+hWLK897beQOJGwS6RrsPosgdoJ\npBQG7CuerwmVaxIt9FpBiGEZM7v8JqnkdcLLoBaRD5O5U0LVsuwzGefhMHoiisuk\ny8CLDk/5AgMBAAECggEABrr/oP3RVUM/0vFh5sKtVmigt1pDAEveygenUdBlVLtZ\nMxZV2bJx5uvErBIFuykFjZ4u2XydQBIA0U4CGTGiO4ADrGC5a7ydfbEuxoLvvcBc\ndWFXNbaImC3kfE0PID03UyriltE8M0OthN9CQPR0Mho3vJH4C2JiGtqIZWwIxbIu\n0dc1/VRU4KoHI+0x71S/OyUnH82l3CY64j+YnpnZp+k3V3zFqLDnd3XfemC4wFkM\n1lNoCaU16HxFFCS02rMDHXpGBlGlLLwt82UXrMiKi4Btmy/v6zmOZiGD3aQ8x+NW\nQM97TZ5NuvqyGS8/qdEqgeF8x0toPij8M7GZ9iwYYQKBgQDjwPKSkSFwkkaBRpWk\n9BumTXHyBddIsrpgkaEja9fEjlGIqbzciajWD+ZiJwEIGjsmp2v2c79pS2klBdAi\nPEzPycWL9yxb0upERWnvsc8sayx4isOykZj/yoMPIgxLZ4DM53DXT9nljej/Dmqx\nL3vTRJfxQBV/dlxgPiii+M7Q2QKBgQDdSzNlC+lSeVVpzNb7p55P5JvIVDXg76j3\n/ruoVhmsg20pLs6vp8DCiBpIDhQf0NXGj0rvv4ITTIBf+dHMkLzvksDwu9E/F7jm\nWxYn1OfATyZ6VAxRH7ChnVxhAaFu5mYPZjfuBOfEvrdMpMZa8EzumgVStPJfqwR1\nSvEGUPIEIQKBgQCt/EsSvn3uMkBcJ6DPx4+LxqPiQKYKqkaI2RdhKNRHGnWc0hYt\n35e0F6dmmedG2ksPp1xphFjYRjyHhN5QGQKQxdH8r5EagJBoISLhclMS2ri5SUBg\nnKtl1L20BM2hmOsjHTbttNl/bJ5uogPNYbnVVhRAvzTtD21YNIP0o9/SWQKBgCDf\nFdBRt6PnoBdqNRkGqg6GD9nvIF28W+YSsb9sor2sfB+c81jGW2zKGNVROg4L0GWB\nTYlVcjX5rCwViOORMG+J5h0cWRW9KVsWdrEOACrh1v5e08GNKoinPlyuiFNX6Bsr\nfO1fTyo7hjDdXRWPEm5y9I13kXVCixP9QNZGWdzhAoGBAJU5LqTU5USFO1hR4DLs\neTQsQXd8vpK9O3Ro2Y/KIUH+fITw6JBhkZ6mx2n1otNDXKROqwLjn2g1e+I8F3RN\nwNIryRAOEddP5OKz7bjepp5hRJR7IE2BvNjxIxUpwexd3L6C/5yTdC80hoGy+Nm/\nqEqDETne9hcCAqgKE2BjDQAW\n-----END PRIVATE KEY-----\n",
// //     "client_email": "cloudvision@resonant-ward-384309.iam.gserviceaccount.com",
// //     "client_id": "100619527518153395661",
// //     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
// //     "token_uri": "https://oauth2.googleapis.com/token",
// //     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
// //     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/cloudvision%40resonant-ward-384309.iam.gserviceaccount.com",
// //     "universe_domain": "googleapis.com"
// //   };

// // const CONFIG = {
// //     credentials: {
// //         private_key: CREDENTIALS.private_key,
// //         client_email: CREDENTIALS.client_email
// //     }
// // };

// // const client = new vision.ImageAnnotatorClient(CONFIG);

// // const detectText = async () => {

// //     const [result] = await client.textDetection('id.jpg');
// // const detections = result.textAnnotations;
// // console.log('Text:');
// // detections.forEach(text => console.log(text.description));
// // };

// // detectText();