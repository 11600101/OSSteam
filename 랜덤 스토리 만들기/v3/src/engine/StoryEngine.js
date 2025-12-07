export function StoryEngine({topic, numChars=3, seed}) {
  function seeded(s){
    if(!s) return Math.random;
    let h = 2166136261;
    for(let i=0;i<s.length;i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
    return () => {
      h += 0x6d2b79f5;
      let t = Math.imul(h ^ (h>>>15), 1 | h);
      t = (t + Math.imul(t ^ (t>>>7), 61 | t)) ^ t;
      return ((t ^ (t>>>14)) >>> 0) / 4294967296;
    };
  }
  const rng = seeded(seed);
  const names = ['지민','서현','민준','하린','도윤','예린','성우','나연'];
  const roles = ['탐험가','마법사','발명가','수호자'];
  const settings = ['안개 낀 항구','폐허의 성','하늘의 섬','미래 도시'];

  const pick = arr => arr[Math.floor(rng()*arr.length)];
  const characters = Array.from({length:numChars},()=>`${pick(names)}(${pick(roles)})`);

  return `주제: ${topic}\n\n배경: ${pick(settings)}\n\n등장인물: ${characters.join(', ')}\n\n갈등: ${pick(['금지 문서','마력 폭주','기계 반란'])}`;
}
