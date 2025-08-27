import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "ScreenGrab AI Annotator",
    "one_liner": "Transform your screenshots into organized notes with AI-powered annotations.",
    "why_now": "With the rise in remote work and digital collaboration, effective note-taking from visual content is paramount.",
    "novel_mechanism": "Utilizes a combination of OCR and NLP to automatically categorize and summarize text from screenshots.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Students extracting key points from lecture slides",
      "Professionals summarizing important sections from documents"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Screenshot upload",
        "Text extraction",
        "Auto-summary generation"
      ],
      "tools": [
        "React",
        "Firebase",
        "OpenAI API"
      ],
      "data_bootstrap": [
        "public dataset Y for training on text categories",
        "synthetic data via LLM for testing"
      ],
      "risk": [
        "Technical limitations in accurate text extraction",
        "User adoption challenges"
      ],
      "mitigation": [
        "Limit initial scope to simple text extraction",
        "Create engaging onboarding tutorials"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Demonstrating efficiency in reducing note-taking time",
        "Real-time comparisons of traditional note-taking vs. AI annotations"
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Tech forums"
      ],
      "pricing": {
        "free": "Basic text extraction",
        "pro": "Advanced summarization features",
        "business": "Team collaboration tools"
      }
    },
    "moat": [
      "Integration with popular note-taking apps",
      "User-generated content creating a feedback loop for efficiency improvement"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 8,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 29,
    "reasoning": "Unlike traditional OCR tools, this product offers a unique value proposition by turning visual content into actionable insights, which is more than just text extraction."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}