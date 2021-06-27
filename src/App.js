import React, { Component, useState } from 'react';
import { Container } from 'reactstrap';
import { getTokenOrRefresh } from './token_util';
import './App.css'



function App() {

  const [stt, setStt] = useState(('webkitSpeechRecognition' in window) ? true : false);
  const webApi = new webkitSpeechRecognition();

  return (
    <Container className="app-container">
      <h1 className="display-4 mb-3">Speech sample app</h1>

      <div className="row main-container">
        <div className="col-6">
          <i className="fas fa-microphone fa-lg mr-2" onClick={() => this.sttFromMic()}></i>
                        Convert speech to text from your mic.

                        <div className="mt-2">
            <label htmlFor="audio-file"><i className="fas fa-file-audio fa-lg mr-2"></i></label>
            <input
              type="file"
              id="audio-file"
              onChange={(e) => this.fileChange(e)}
              style={{ display: "none" }}
            />
                            Convert speech to text from an audio file.
                        </div>
        </div>
        <div className="col-6 output-display rounded">
          <code>{stt ? 'INITIALIZED: ready to test speech...' :
            <>
              Your Browser isn't compatible. <a href="https://caniuse.com/speech-recognition" target="_blank" rel="noreferrer">click here</a> to check compatablity.
            </>
          }</code>
        </div>
      </div>
    </Container>
  )
}

export default App
