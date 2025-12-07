# OSS-team


## 📝 Random Story Generator
랜덤 주제를 선택하면 해당 주제에 맞는 스토리를 자동 생성하는 소프트웨어입니다.  
이 프로젝트는 **v1 → v5**까지 기능이 점진적으로 고도화되며, 팀원들이 GitHub에서 협업하는 과정을 보여주기 위해 설계되었습니다.

---

## 📂 프로젝트 구조
```
v1/
  src/RandomStoryGenerator.jsx
v2/
  src/RandomStoryGenerator.jsx
v3/
  src/RandomStoryGenerator.jsx
v4/
  src/RandomStoryGenerator.jsx
v5/
  src/RandomStoryGenerator.jsx
```

---

## 🚀 기능 요약
### **v1 – 최소 기능 구현**
- 기본 UI
- 주제 선택 후 랜덤 스토리 1개 출력

### **v2 – 스타일 및 UX 개선**
- Tailwind UI 개선
- 카드 레이아웃 적용

### **v3 – 모듈 분리 & 엔진 구조화**
- StoryEngine 분리
- Hook 기반 구조 개선

### **v4 – 스토리 다양성 향상**
- 랜덤 문장 조합 규칙 추가
- StoryEngine 알고리즘 향상

### **v5 – 완성도 강화**
- 더 다양한 장르 템플릿 지원
- UI 개선 및 코드 정리

---

## 🔧 설치 및 실행
### 1) 클론
```
git clone https://github.com/사용자명/random-story-project.git
cd random-story-project
```

### 2) 실행
```
npm install
npm run dev
```

---

## 🤝 협업 규칙
### 브랜치 전략
- `main`: 안정 버전
- `dev`: 개발 중
- `feature/*`: 기능별 구현



## 📌 개선 제안
- 스토리 프롬프트 파일을 JSON으로 분리
- UI/UX 추가 확장 (dark mode 등)
- AI 모델 연동해 고도화 스토리 생성

---

## 👥 팀 작업 예시 흐름
1. ChatGPT가 v1 생성 → GitHub 초기 커밋
2. 팀원 A: UI 개선 → v2
3. 팀원 B: Story Engine 구조화 → v3
4. 팀원 C: 알고리즘 고도화 → v4
5. 팀 전체 리뷰 후 v5 릴리즈

---
