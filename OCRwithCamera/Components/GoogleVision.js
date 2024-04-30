const API_KEY = ''; // insert your API key here
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

// Also try DOCUMENT_TEXT_DETECTION instead of TEXT_DETECTION as per https://cloud.google.com/vision/docs/ocr
function generateBody(image) {
    // Log the image length to confirm we have data
    console.log(image ? "Image data is present" : "Image data is missing");
    console.log("Image length:", image.length);
  
    const body = {
      requests: [
        {
          image: {
            content: image,
          },
          features: [
            {
              type: 'DOCUMENT_TEXT_DETECTION', // Start with a simple request
              maxResults: 10, // Lower maxResults to a more typical number
            },
          ],
        },
      ],
    };
  
    // Log the full body to inspect before sending
    console.log("Request Body:", JSON.stringify(body));
    return body;
  }

  
  
  async function callGoogleVisionAsync(image) {
    return new Promise(async (resolve, reject) => {
      const body = generateBody(image);
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      const data = await response.json();
      if (response.ok) {
        resolve(data);
      } else {
        console.error('API Error:', data);
        reject(data.error || 'Unknown error');
      }
    });
  }
  
  export default callGoogleVisionAsync;