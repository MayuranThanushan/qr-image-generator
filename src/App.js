import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const size = 300;
  const bgColor = "ffffff";
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    if (word) {
      setQrCode(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(word)}&size=${size}x${size}&bgcolor=${bgColor}`);
    }
  }, [word, size, bgColor]);

  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="App">
      <h1>QR Image Generator</h1>
      <div className="input-box">
        <div className="gen">
          <input
            type="url"
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Enter URL to encode"
            value={temp}
          />
          <button className="button" onClick={handleClick}>
            Generate
          </button>
        </div>
      </div>

      <div className="output-box">
        {qrCode && (
          <>
            <img src={qrCode} alt="QR Code" />
            <a href={qrCode} download="QRImage">
              <button type="button">Download</button>
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
