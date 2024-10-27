// import express from 'express';
// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// // הגדרת שימוש ב-JSON עבור בקשות POST בלבד
// app.use(express.json());

// // נקודת קצה ראשונה: חיפוש ראשוני לפי דומיין (POST)
// app.post('/search', async (req, res) => {
//     const { domain } = req.body;

//     if (!domain) {
//         return res.status(400).json({ error: 'Domain is required in the request body' });
//     }

//     const url = `${process.env.INTELX_BASE_URL}intelligent/search`;

//     try {
//         const response = await axios.post(url, {
//             term: domain,
//             buckets: [],            // ניתן להשאיר ריק לקבלת תוצאות מכל המקורות
//             lookuplevel: 0,         // דרגת חיפוש ברירת מחדל
//             maxresults: 10,         // מספר תוצאות מרבי
//             timeout: 0,             // הזמן המבוקש לחיפוש, 0 לברירת מחדל
//             datefrom: "",           // ניתן להגדיר תאריך התחלה, נשאיר ריק לעת עתה
//             dateto: "",             // ניתן להגדיר תאריך סיום, נשאיר ריק לעת עתה
//             sort: 2,                // מיון לפי רלוונטיות גבוהה לנמוכה
//             media: 0,               // ללא סינון לפי סוג מדיה
//             terminate: []           // אם יש חיפושים קודמים לסיים
//         }, {
//             headers: { 
//                 'x-key': process.env.INTELX_API_KEY,
//                 'Content-Type': 'application/json'
//             }
//         });

//         // מחזיר את ה-ID שהתקבל בתגובה
//         res.json({
//             message: 'Search initiated',
//             id: response.data.id
//         });
//     } catch (error) {
//         console.error('Error during search:', error.message);

//         if (error.response) {
//             console.error('Response data:', error.response.data);
//             console.error('Response status:', error.response.status);
//             console.error('Response headers:', error.response.headers);
            
//             return res.status(error.response.status).json({
//                 error: error.response.data
//             });
//         } else {
//             console.error('Error details:', error);
//         }

//         res.status(500).json({ error: 'Error during search' });
//     }
// });

// // נקודת קצה שנייה: קבלת תוצאה מלאה לפי ID באמצעות GET
// app.get('/search/result', async (req, res) => {
//     const { id } = req.query;  // קבלת ה-ID מה-URL

//     if (!id) {
//         return res.status(400).json({ error: 'ID is required as a query parameter' });
//     }

//     const url = `${process.env.INTELX_BASE_URL}intelligent/search/result?id=${id}`;

//     try {
//         const response = await axios.get(url, {
//             headers: {
//                 'x-key': process.env.INTELX_API_KEY
//             }
//         });

//         // מחזיר את התוצאה המלאה
//         res.json({
//             message: 'Full result retrieved',
//             data: response.data
//         });
//     } catch (error) {
//         console.error('Error retrieving result:', error.message);

//         if (error.response) {
//             console.error('Response data:', error.response.data);
//             console.error('Response status:', error.response.status);
//             console.error('Response headers:', error.response.headers);
            
//             return res.status(error.response.status).json({
//                 error: error.response.data
//             });
//         } else {
//             console.error('Error details:', error);
//         }

//         res.status(500).json({ error: 'Error retrieving result' });
//     }
// });

// // הפעלת השרת
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
import express from 'express';
import dotenv from 'dotenv';
import searchRoutes from './routes/searchRoutes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// הגדרת JSON middleware
app.use(express.json());

// שימוש בקובץ routes לנתיבי חיפוש
app.use('/search', searchRoutes);

// הפעלת השרת
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
