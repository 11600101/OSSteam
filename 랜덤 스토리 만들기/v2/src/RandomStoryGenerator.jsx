import React, { useState } from 'react';

export default function RandomStory() {
  const [topic, setTopic] = useState('하늘섬의 모험');
  const [genre, setGenre] = useState('fantasy');
  const [story, setStory] = useState('');

  const presets = {
    fantasy: '고대 마법과 드래곤의 세계',
    horror: '버려진 병원의 공포',
    romance: '캠퍼스의 첫사랑',
    sf: '우주 식민지 시대'
  };

  function generate(){
    const pick = arr => arr[Math.floor(Math.random()*arr.length)];
    const s = `주제: ${topic} (${presets[genre]})\n이야기: ${pick(['모험','위기','발견'])}`;
    setStory(s);
  }

  return (
    <div style={{padding:20, fontFamily:'sans-serif'}}>
      <h1>랜덤 스토리 - v2</h1>
      <div style={{marginBottom:8}}>
        <select value={genre} onChange={e=>setGenre(e.target.value)}>
          <option value="fantasy">판타지</option>
          <option value="horror">공포</option>
          <option value="romance">로맨스</option>
          <option value="sf">SF</option>
        </select>
        <button onClick={()=>setTopic(presets[genre])} style={{marginLeft:8}}>프리셋 적용</button>
      </div>
      <input value={topic} onChange={e=>setTopic(e.target.value)} />
      <button onClick={generate} style={{marginLeft:8}}>생성</button>
      <pre style={{whiteSpace:'pre-wrap', marginTop:16}}>{story}</pre>
    </div>
  );
}
