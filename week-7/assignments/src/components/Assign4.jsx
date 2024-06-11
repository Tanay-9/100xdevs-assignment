import React, { useState } from 'react';

const Assign4 = () => {
  const [paragraph, setParagraph] = useState('');
  const [wordLengths, setWordLengths] = useState('');
  const [numWords, setNumWords] = useState(0);

  const generateParagraph = () => {
    const wordLengthsArray = wordLengths.split(',').map(length => parseInt(length.trim(), 10));
    let generatedParagraph = '';
    for (let i = 0; i < numWords; i++) {
      const wordLength = wordLengthsArray[Math.floor(Math.random() * wordLengthsArray.length)];
      let word = '';
      for (let j = 0; j < wordLength; j++) {
        word += String.fromCharCode(97 + Math.floor(Math.random() * 26)); 
      }
      generatedParagraph += word + ' ';
    }
    setParagraph(generatedParagraph.trim());
  };

  return (
    <div>
      <label>
        Word Lengths (comma-separated):
        <input type="text" value={wordLengths} onChange={(e) => setWordLengths(e.target.value)} />
      </label>
      <br />
      <label>
        Number of Words:
        <input type="number" value={numWords} onChange={(e) => setNumWords(parseInt(e.target.value, 10))} />
      </label>
      <br />
      <button onClick={generateParagraph}>Generate Paragraph</button>
      <br />
      <p>{paragraph}</p>
    </div>
  );
};

export default Assign4;
