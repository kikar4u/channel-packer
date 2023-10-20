import sharp = require('sharp');

async function processImage(
  inputPath: string,
  outputPath: string,
): Promise<{ success: boolean; message: string }> {
  try {
    await sharp(inputPath)
      .modulate({
        brightness: 2, // Increase brightness
        saturation: 0.5, // Decrease saturation
        hue: 120, // Change hue (greenish)
      })
      .toFile(outputPath);
    console.log('Image processed successfully!');
    return { success: true, message: 'Image processed successfully!' };
  } catch (err) {
    console.error(err, 'Failed to write image');
    throw err; // Re-throw the error for handling in the calling code, if necessary
  }
}

export default processImage;
