import React, { useState } from 'react';
import { StoryEngine } from '../v3/src/engine/StoryEngine.js';

export default function RandomStory() {
  const [topic, setTopic] = useState('우주 식민지');
  const [numChars, setNumChars] = useState(4);
  const [seed, setSeed] = useState('');
  const [story, setStory] = useState('');
  const [dark, setDark] = useState(false);

  function generate(){
    const s = StoryEngine({topic, numChars, seed});
    setStory(s);
  }

  function exportJSON(){
    const payload = {topic, numChars, seed, story};
    const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'story_export.json'; a.click(); URL.revokeObjectURL(url);
  }

  return (
    <div style={{padding:20, fontFamily:'sans-serif', background: dark? '#111':'#fff', color: dark? '#eee':'#000'}}>
      <h1>랜덤 스토리 - v5</h1>
      <label style={{marginRight:8}}>Dark Mode</label>
      <input type="checkbox" checked={dark} onChange={e=>setDark(e.target.checked)} />
      <div style={{marginTop:8}}>
        <input value={topic} onChange={e=>setTopic(e.target.value)} placeholder="주제" />
        <input value={seed} onChange={e=>setSeed(e.target.value)} placeholder="시드" style={{marginLeft:8}}/>
        <input type="number" value={numChars} onChange={e=>setNumChars(Number(e.target.value))} style={{marginLeft:8, width:80}} />
        <button onClick={generate} style={{marginLeft:8}}>생성</button>
        <button onClick={exportJSON} style={{marginLeft:8}}>Export</button>
      </div>
      <pre style={{whiteSpace:'pre-wrap', marginTop:16}}>{story}</pre>
    </div>
  );
}
