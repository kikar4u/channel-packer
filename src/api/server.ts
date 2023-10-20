// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import processImage from '../main/processImage';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/processimage', async (req, res) => {
  const { inputPath, outputPath } = req.body;

  try {
    // Example Axios GET request to an external API
    const response = await processImage(inputPath, outputPath);
    if (response.success) {
      res
        .status(200)
        .json({ success: response.success, message: response.message });
    } else {
      res
        .status(200)
        .json({ success: response.success, message: response.message });
    }
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
