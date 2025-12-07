import React, { useState } from 'react';
import { StoryEngine } from './engine/StoryEngine.js';

export default function RandomStory() {
  const [topic, setTopic] = useState('시간의 전시장');
  const [seed, setSeed] = useState('');
  const [story, setStory] = useState('');

  function generate(){
    const s = StoryEngine({topic, numChars:3, seed});
    setStory(s);
  }

  return (
    <div style={{padding:20, fontFamily:'sans-serif'}}>
      <h1>랜덤 스토리 - v3</h1>
      <input value={topic} onChange={e=>setTopic(e.target.value)} placeholder="주제" />
      <input value={seed} onChange={e=>setSeed(e.target.value)} placeholder="시드(선택)" style={{marginLeft:8}}/>
      <button onClick={generate} style={{marginLeft:8}}>생성</button>
      <pre style={{whiteSpace:'pre-wrap', marginTop:16}}>{story}</pre>
    </div>
  );
}
