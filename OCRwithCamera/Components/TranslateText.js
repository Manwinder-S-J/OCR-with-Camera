const API_KEY = ''; // insert your API key here

export const translateText = async (text, targetLang = 'en') => {
    const translationUrl = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    try {
        const response = await fetch(translationUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                q: text,
                target: targetLang,
            }),
        });
        const responseJson = await response.json();
        if (response.ok) {
            return responseJson.data.translations[0].translatedText;
        } else {
            console.error('Translation API Error:', responseJson);
            return null;
        }
    } catch (error) {
        console.error('Translation Error:', error);
        return null;
    }
};
