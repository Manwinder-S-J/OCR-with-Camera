# OCR-with-Camera

This app leverages the Google Vision API to perform Optical Character Recognition (OCR) and the Google Translation API to translate text into 11 different languages. It also features a built-in camera that allows users to take photos and save them directly to their device's gallery.

## Features

- **OCR Functionality**: Extract text from images using Google Vision API.
- **Translation**: Translate the extracted text into one of 11 languages: English, Spanish, French, German, Italian, Chinese, Portuguese, Russian, Japanese, Hindi, and Arabic.
- **Camera Integration**: Use the built-in camera to take photos and save them to the gallery for OCR.

<p align="center">
    <img src="https://github.com/Manwinder-S-J/OCR-with-Camera/blob/main/images/CropImageText.png" alt="CropImageText" width="200" />&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://github.com/Manwinder-S-J/OCR-with-Camera/blob/main/images/OcrOutput.png" alt="OcrOutput" width="200" />&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://github.com/Manwinder-S-J/OCR-with-Camera/blob/main/images/Camera.png" alt="Camera" width="200" />
</p>


## Getting Started

### Prerequisites
- Node.js
- npm or Yarn
- Expo CLI
- Google api key, enabled for Google Vision and Translation

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Manwinder-S-J/OCR-with-Camera.git
    cd .\OCR-with-Camera\OCRwithCamera\
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```
3. Setup API Keys</br>
    Create .env file in the root directory and add this line in it with your google api key:
    ```bash
    GOOGLE_API_KEY=yourApiKey
    ```
4. Run Expo
    ```bash
    npx expo start
    ```
    On your device use the Expo Go App to scan the QR code generated in the terminal to run the app(Remember to be on the same network!!)

## Usage

- **Select Language**: Choose the target language for translation from the dropdown menu.
- **Select an Image**: Tap on 'Select an Image' to choose an image from your device's gallery.
- **Take a Photo**: Use the 'Camera' button to activate the camera, take a photo, and save it to the gallery.
- **Extract and Translate Text**: After selecting an image, the app will extract text and display the translated version in the selected language.

# Contributing

Contributions are welcome! Please feel free to submit pull requests, create issues, or provide feedback.

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



