import React, { useState } from 'react';

export default function RandomStory() {
  const [topic, setTopic] = useState('마법의 숲');
  const [story, setStory] = useState('');

  const names = ['지민','서현','민준','하린','도윤','예린'];

  function generate(){
    const pick = arr => arr[Math.floor(Math.random()*arr.length)];
    const s = `주제: ${topic}\n등장인물: ${pick(names)}\n이야기: ${pick(['모험이 시작된다.','비밀이 드러난다.','우정이 깊어진다.'])}`;
    setStory(s);
  }

  return (
    <div style={{padding:20, fontFamily:'sans-serif'}}>
      <h1>랜덤 스토리 - v1</h1>
      <input value={topic} onChange={e=>setTopic(e.target.value)} />
      <button onClick={generate} style={{marginLeft:8}}>생성</button>
      <pre style={{whiteSpace:'pre-wrap', marginTop:16}}>{story}</pre>
    </div>
  );
}
