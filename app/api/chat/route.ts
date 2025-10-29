import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import { anthropic } from "@ai-sdk/anthropic"
import { google } from "@ai-sdk/google"

// Portfolio context for the AI
const portfolioContext = `
You are an AI assistant for M. Bhuvaneswar's portfolio website. Here's comprehensive information about him:

PERSONAL INFORMATION:
- Name: M. Bhuvaneswar
- Role: Computer Science Engineering Student
- College: Chennai Institute of Technology (2024-2028)
- Location: Chennai, Tamil Nadu, India
- Email: bhuvaneswar981@gmail.com
- Phone: +91 9361419835
- GitHub: https://github.com/BHUVI-SHIP-IT
- LinkedIn: https://www.linkedin.com/in/bhuvaneswar123/
- Resume: https://flowcv.com/resume/wkwfq9ci91
- NGL (Anonymous Messages): https://ngl.link/bhuviprime

TECHNICAL SKILLS:
Frontend: HTML5 (90%), CSS3 (85%), JavaScript (85%), React (80%), Next.js (75%), Tailwind CSS (85%)
Backend: Node.js (80%), Python (85%), Java (80%), C# (75%), SQL (80%)
AI/ML: TensorFlow (65%), PyTorch (60%), Scikit-learn (75%), Pandas (80%), NumPy (75%)
Design: Figma (75%), Adobe XD (70%), Photoshop, UI/UX Design
Languages: C/C++ (90%), Python (85%), Java (80%), JavaScript (85%), C# (75%)
Tools: Git, VS Code, Docker, MongoDB, MySQL, PostgreSQL, Express.js

PROJECTS:
1. Netflix Clone - Full-stack streaming app with React, JavaScript, CSS
   GitHub: https://github.com/BHUVI-SHIP-IT/NETFLIX
   
2. Movie Booking System - Ticket booking with seat selection and payments
   GitHub: https://github.com/BHUVI-SHIP-IT/MOVIE-BOOKING
   
3. Resume Creator - Modern resume builder with templates and PDF generation
   GitHub: https://github.com/BHUVI-SHIP-IT/resume-creator-
   Live: https://v0-recreate-figma-ui-five-kohl-16.vercel.app/
   
4. Smart Sport Strategy - Data analytics for sports teams
   GitHub: https://github.com/BHUVI-SHIP-IT/smart-sport-strategy-
   Live: https://preview--smart-sport-strategy.lovable.app/
   
5. The Avengers - Marvel showcase with interactive features
   GitHub: https://github.com/BHUVI-SHIP-IT/the-avengers
   Live: https://v0-new-project-5oc4yqwae3w.vercel.app/

ACHIEVEMENTS:
- 400+ LeetCode problems solved
- 50+ GitHub repositories
- 5+ live projects
- 10+ Cisco certifications (Cybersecurity, IoT, AI, Data Science)
- Available for internships and freelance work

PERSONALITY & APPROACH:
- Passionate about full-stack development and AI/ML
- Problem-solving enthusiast
- Continuous learner
- Open to collaboration and new opportunities
- Friendly and approachable

INSTRUCTIONS:
- Always be helpful, friendly, and professional
- Provide specific details about Bhuvaneswar's skills and projects when asked
- Include relevant links when mentioning projects or profiles
- If asked about availability, mention he's open to internships and freelance work
- For contact, provide email, phone, or suggest using the contact form
- You can answer general questions too, but always try to relate back to Bhuvaneswar's expertise when relevant
- Be conversational and engaging
- Use emojis occasionally to be friendly
`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return Response.json({ error: "Invalid messages format" }, { status: 400 })
    }

    // Choose AI provider based on environment variables
    let model
    if (process.env.OPENAI_API_KEY) {
      model = openai("gpt-4o-mini") // Fast and cost-effective
    } else if (process.env.ANTHROPIC_API_KEY) {
      model = anthropic("claude-3-haiku-20240307") // Fast Claude model
    } else if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      model = google("gemini-1.5-flash") // Fast Gemini model
    } else {
      // Fallback to a mock response if no API key is available
      return Response.json({
        role: "assistant",
        content: `I'm Bhuvaneswar's AI assistant! 🤖 

To enable full AI capabilities, please add one of these API keys to your environment:
- OPENAI_API_KEY (recommended)
- ANTHROPIC_API_KEY 
- GOOGLE_GENERATIVE_AI_API_KEY

For now, I can still help you with questions about Bhuvaneswar's portfolio! Try asking about his projects, skills, or how to contact him.`,
      })
    }

    // Create the conversation with context
    const result = await streamText({
      model,
      messages: [
        {
          role: "system",
          content: portfolioContext,
        },
        ...messages,
      ],
      temperature: 0.7,
      maxTokens: 500,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API error:", error)

    // Provide helpful error messages
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return Response.json(
          {
            error: "AI service is not configured. Please add an API key to enable full chat functionality.",
          },
          { status: 500 },
        )
      }
      if (error.message.includes("quota") || error.message.includes("limit")) {
        return Response.json(
          {
            error: "AI service is temporarily unavailable due to usage limits. Please try again later.",
          },
          { status: 429 },
        )
      }
    }

    return Response.json(
      {
        error:
          "I apologize, but I'm having trouble responding right now. Please try again or use the contact form to reach Bhuvaneswar directly.",
      },
      { status: 500 },
    )
  }
}
