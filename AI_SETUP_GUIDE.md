# 🤖 AI Chatbot Setup Guide

Your portfolio now includes a powerful AI chatbot that can answer ANY question naturally! Here's how to set it up:

## 🚀 Quick Setup

### Option 1: OpenAI (Recommended)
1. Go to [OpenAI API](https://platform.openai.com/api-keys)
2. Create an account and get your API key
3. Add to `.env.local`: `OPENAI_API_KEY=sk-your-key-here`

### Option 2: Anthropic Claude
1. Go to [Anthropic Console](https://console.anthropic.com/)
2. Get your API key
3. Add to `.env.local`: `ANTHROPIC_API_KEY=sk-ant-your-key-here`

### Option 3: Google Gemini
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Get your API key
3. Add to `.env.local`: `GOOGLE_GENERATIVE_AI_API_KEY=your-key-here`

## 💰 Cost Estimates

- **OpenAI GPT-4o-mini**: ~$0.15 per 1M input tokens, $0.60 per 1M output tokens
- **Claude Haiku**: ~$0.25 per 1M input tokens, $1.25 per 1M output tokens  
- **Gemini Flash**: Free tier available, then ~$0.075 per 1M tokens

## 🎯 What Your AI Can Do

### Portfolio-Specific Knowledge:
- ✅ Answer questions about your skills and projects
- ✅ Provide GitHub and demo links
- ✅ Share contact information
- ✅ Discuss your experience and certifications
- ✅ Talk about availability for work

### General Conversations:
- ✅ Answer programming questions
- ✅ Explain technical concepts
- ✅ Provide career advice
- ✅ Discuss technology trends
- ✅ Help with coding problems
- ✅ Chat about anything!

## 🔧 Features Included

- **Real-time streaming responses**
- **Conversation memory within session**
- **Error handling and retry functionality**
- **Suggested questions for better UX**
- **Professional context about your portfolio**
- **Mobile-responsive chat interface**
- **Clear conversation button**

## 🛡️ Security & Privacy

- API keys are server-side only
- No conversation data is stored permanently
- Each session is independent
- Rate limiting and error handling included

## 🎨 Customization

The AI has been trained with your specific portfolio context including:
- Your skills and proficiency levels
- Project details and links
- Contact information
- Personality and approach
- Professional background

You can modify the `portfolioContext` in `/app/api/chat/route.ts` to update the AI's knowledge about you.

## 🚀 Deployment

When deploying to Vercel:
1. Add your chosen API key to Vercel environment variables
2. The chatbot will automatically work in production
3. Monitor usage in your AI provider's dashboard

## 💡 Tips for Best Results

1. **Start with OpenAI** - Most reliable and cost-effective
2. **Monitor usage** - Set up billing alerts
3. **Test thoroughly** - Try various question types
4. **Update context** - Keep your portfolio info current in the AI prompt

Your visitors can now have natural conversations with an AI that knows everything about your portfolio! 🎉
