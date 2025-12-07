"use client"

import { useState } from "react"
import { Sparkles, BookOpen } from "lucide-react"

const topics = [
  { name: "모험", icon: "🗺️", color: "from-orange-400 to-red-500" },
  { name: "판타지", icon: "✨", color: "from-purple-400 to-pink-500" },
  { name: "SF", icon: "🚀", color: "from-blue-400 to-cyan-500" },
  { name: "로맨스", icon: "💕", color: "from-pink-400 to-rose-500" },
  { name: "스릴러", icon: "⚡", color: "from-slate-600 to-slate-900" },
]

const templates = {
  모험: ["용감한 주인공이 미지의 섬에서 고대 유적을 발견한다.", "예상치 못한 폭풍 속에서 새로운 동료를 만난다."],
  판타지: ["마법사가 잊힌 왕국의 봉인을 해제한다.", "드래곤과 인간 사이의 오래된 계약이 깨어난다."],
  SF: ["우주 정거장에서 원인불명의 시간이 뒤틀린다.", "AI가 선택한 단 한 명의 생존자."],
  로맨스: ["첫눈 내리던 날, 두 사람의 우연이 시작된다.", "서로를 오해했던 두 사람이 진심을 깨닫는다."],
  스릴러: ["밀폐된 공간에서 벌어진 기억 조작 사건.", "사라진 단서를 되짚어 진범을 추적한다."],
}

export default function RandomStoryGenerator() {
  const [selectedTopic, setSelectedTopic] = useState<string>("")
  const [story, setStory] = useState<string>("")
  const [isGenerating, setIsGenerating] = useState(false)

  const generateStory = () => {
    if (!selectedTopic) return

    setIsGenerating(true)
    setTimeout(() => {
      const arr = templates[selectedTopic as keyof typeof templates]
      const pick = arr[Math.floor(Math.random() * arr.length)]
      setStory(pick)
      setIsGenerating(false)
    }, 600)
  }

  const selectedTopicData = topics.find((t) => t.name === selectedTopic)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b border-slate-200/50 backdrop-blur-sm bg-white/80">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-indigo-600" />
          <div>
            <h1 className="text-2xl font-bold text-slate-900">스토리 생성기</h1>
            <p className="text-sm text-slate-500">무한한 이야기의 시작</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Topic Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold text-slate-900">주제를 선택하세요</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {topics.map((topic) => (
                <button
                  key={topic.name}
                  onClick={() => {
                    setSelectedTopic(topic.name)
                    setStory("")
                  }}
                  className={`group relative overflow-hidden rounded-xl p-4 text-center transition-all duration-300 transform ${
                    selectedTopic === topic.name
                      ? `bg-gradient-to-br ${topic.color} text-white shadow-lg scale-105`
                      : "bg-white text-slate-700 border-2 border-slate-200 hover:border-indigo-300 hover:shadow-md"
                  }`}
                >
                  <div className="text-2xl mb-2">{topic.icon}</div>
                  <div className="text-sm font-semibold">{topic.name}</div>
                  {selectedTopic === topic.name && <div className="absolute inset-0 bg-white/10 animate-pulse" />}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <div className="flex justify-center">
            <button
              onClick={generateStory}
              disabled={!selectedTopic || isGenerating}
              className={`relative px-8 py-3 rounded-full font-semibold transition-all duration-300 transform ${
                selectedTopic && !isGenerating
                  ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  생성 중...
                </span>
              ) : (
                "스토리 생성하기"
              )}
            </button>
          </div>

          {/* Story Display */}
          {story && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div
                className={`relative rounded-2xl overflow-hidden border-2 border-indigo-200 bg-gradient-to-br ${selectedTopicData?.color || "from-indigo-500 to-blue-600"} p-8 text-white shadow-2xl`}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{selectedTopicData?.icon}</span>
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                      {selectedTopic}
                    </span>
                  </div>
                  <p className="text-xl leading-relaxed font-medium text-balance">{story}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 justify-center mt-6">
                <button
                  onClick={generateStory}
                  className="px-6 py-2 rounded-full bg-white text-indigo-600 font-semibold hover:shadow-md transition-all hover:scale-105"
                >
                  다시 생성
                </button>
                <button
                  onClick={() => {
                    const text = `${selectedTopic}: ${story}`
                    navigator.clipboard.writeText(text)
                  }}
                  className="px-6 py-2 rounded-full border-2 border-slate-300 text-slate-700 font-semibold hover:bg-white transition-all hover:scale-105"
                >
                  복사하기
                </button>
              </div>
            </div>
          )}

          {/* Empty state */}
          {!story && selectedTopic && !isGenerating && (
            <div className="text-center py-12 text-slate-500">
              <p>스토리를 생성하려면 버튼을 클릭하세요</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 backdrop-blur-sm bg-white/80 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-slate-600">
          <p>✨ 무한한 상상력으로 새로운 이야기를 만들어보세요</p>
        </div>
      </footer>
    </div>
  )
}
