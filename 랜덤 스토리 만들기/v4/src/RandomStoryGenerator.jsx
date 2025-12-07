import React, { useState } from 'react';
import { StoryEngine } from '../v3/src/engine/StoryEngine.js';

export default function RandomStory() {
  const [topic, setTopic] = useState('작은 어촌 마을');
  const [story, setStory] = useState('');
  const [history, setHistory] = useState([]);

  function generate(){
    const s = StoryEngine({topic, numChars:3, seed:''});
    setStory(s);
    setHistory([s, ...history].slice(0,20));
    try{ localStorage.setItem('stories', JSON.stringify([s, ...history])); }catch(e){}
  }

  return (
    <div style={{padding:20, fontFamily:'sans-serif'}}>
      <h1>랜덤 스토리 - v4</h1>
      <input value={topic} onChange={e=>setTopic(e.target.value)} />
      <button onClick={generate} style={{marginLeft:8}}>생성 & 저장</button>
      <pre style={{whiteSpace:'pre-wrap', marginTop:16}}>{story}</pre>
      <h3>History</h3>
      <pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(history, null, 2)}</pre>
    </div>
  );
}
