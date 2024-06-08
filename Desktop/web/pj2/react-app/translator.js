import React, { useState } from 'react';
import translate from 'google-translate-api';

function DialectTranslator() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translateToDialect = async () => {
    try {
      // Using google-translate-api library to fetch translation
      const result = await translate(text, { to: 'ko', from: 'en' }); // Translate from English to Korean
      const translatedText = result.text;
      // Custom translation for dialect (사투리)
      const dialectTranslatedText = translateToDialectLogic(translatedText);
      setTranslatedText(dialectTranslatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  // Custom logic for translating to dialect (사투리)
  const translateToDialectLogic = (text) => {
    // Example: Add dialect translation logic here
    // This is a simple example, you can replace it with your own logic
    const dialectTranslations = {
      '안녕하세요': '안뇽',
      '감사합니다': '고마워'
      // Add more translations as needed
    };
    // Translate each word individually
    const words = text.split(' ');
    const translatedWords = words.map(word => dialectTranslations[word] || word);
    // Join translated words back into a sentence
    return translatedWords.join(' ');
  };

  return (
    <div>
      <h1>사투리 번역기</h1>
      <div>
        <label>번역할 텍스트:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button onClick={translateToDialect}>번역하기</button>
      <div>
        <h2>번역 결과:</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
}

export default DialectTranslator;
