"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { XIcon, SendIcon, BotIcon, UserIcon, SparklesIcon, RefreshCwIcon } from "lucide-react"

interface AIAssistantProps {
  isOpen: boolean
  onClose: () => void
}

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  createdAt?: Date
}

export default function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi there! 👋 I'm Bhuvaneswar's AI assistant. I can answer any questions about his portfolio, skills, projects, or anything else you'd like to know! What would you like to chat about?",
      createdAt: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Suggested questions for better UX
  const suggestedQuestions = [
    "What are Bhuvaneswar's main technical skills?",
    "Tell me about his most impressive projects",
    "What's his experience with AI and machine learning?",
    "How can I contact him for work opportunities?",
    "What programming languages does he know?",
    "Show me his GitHub and portfolio links",
    "What certifications does he have?",
    "Is he available for internships?",
  ]

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isLoading])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      createdAt: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) {
        throw new Error("No response body")
      }

      let assistantContent = ""
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
        createdAt: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split("\n")

        for (const line of lines) {
          if (line.startsWith("0:")) {
            try {
              const jsonStr = line.slice(2)
              const data = JSON.parse(jsonStr)
              if (data.content) {
                assistantContent += data.content
                setMessages((prev) =>
                  prev.map((msg) => (msg.id === assistantMessage.id ? { ...msg, content: assistantContent } : msg)),
                )
              }
            } catch (parseError) {
              // Ignore parsing errors for streaming data
            }
          }
        }
      }
    } catch (err) {
      console.error("Chat error:", err)
      setError(err instanceof Error ? err.message : "Failed to send message")
      // Remove the user message if there was an error
      setMessages((prev) => prev.filter((msg) => msg.id !== userMessage.id))
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    if (error) setError(null)
  }

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
    // Trigger form submission
    setTimeout(() => {
      const form = document.querySelector("form") as HTMLFormElement
      if (form) {
        form.requestSubmit()
      }
    }, 0)
  }

  const clearConversation = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hi there! 👋 I'm Bhuvaneswar's AI assistant. I can answer any questions about his portfolio, skills, projects, or anything else you'd like to know! What would you like to chat about?",
        createdAt: new Date(),
      },
    ])
    setError(null)
  }

  const retry = () => {
    if (messages.length > 1) {
      const lastUserMessage = messages[messages.length - 1]
      if (lastUserMessage.role === "user") {
        setInput(lastUserMessage.content)
        setMessages((prev) => prev.slice(0, -1))
      }
    }
    setError(null)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-full max-w-md h-[600px] flex flex-col"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <Card className="border-primary/20 shadow-2xl h-full flex flex-col">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b flex-shrink-0">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="AI Assistant" />
                      <AvatarFallback className="bg-primary/10">
                        <BotIcon className="h-5 w-5 text-primary" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        AI Assistant
                        <SparklesIcon className="h-4 w-4 text-primary animate-pulse" />
                      </CardTitle>
                      <p className="text-xs text-muted-foreground">Powered by advanced AI</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={clearConversation}
                      className="hover:bg-primary/10 h-8 w-8"
                      title="Clear conversation"
                    >
                      <RefreshCwIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-destructive/10 h-8 w-8">
                      <XIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-hidden p-0">
                <div className="h-full overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex gap-3 max-w-[85%] ${
                          message.role === "user" ? "flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <Avatar className="h-8 w-8 mt-1 flex-shrink-0">
                          <AvatarFallback className={message.role === "user" ? "bg-primary/10" : "bg-muted"}>
                            {message.role === "user" ? (
                              <UserIcon className="h-4 w-4" />
                            ) : (
                              <BotIcon className="h-4 w-4" />
                            )}
                          </AvatarFallback>
                        </Avatar>

                        <div
                          className={`rounded-2xl p-3 ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted border border-border"
                          }`}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                          <p
                            className={`text-xs mt-1 opacity-70 ${
                              message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                            }`}
                          >
                            {message.createdAt?.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex gap-3 max-w-[85%]">
                        <Avatar className="h-8 w-8 mt-1">
                          <AvatarFallback className="bg-muted">
                            <BotIcon className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>

                        <div className="rounded-2xl p-3 bg-muted border border-border">
                          <div className="flex space-x-1">
                            <div
                              className="w-2 h-2 bg-primary rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-primary rounded-full animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-primary rounded-full animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Error message */}
                  {error && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                        <p className="text-sm text-destructive mb-2">{error}</p>
                        <Button variant="outline" size="sm" onClick={retry} className="text-xs bg-transparent">
                          Try Again
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Suggested questions (show only if minimal conversation) */}
                  {messages.length <= 2 && !isLoading && !error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-2"
                    >
                      <p className="text-xs text-muted-foreground text-center">💡 Try asking:</p>
                      <div className="grid grid-cols-1 gap-2">
                        {suggestedQuestions.slice(0, 4).map((question, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs h-auto py-2 px-3 text-left justify-start hover:bg-primary/5 bg-transparent"
                            onClick={() => handleSuggestedQuestion(question)}
                            disabled={isLoading}
                          >
                            {question}
                          </Button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              <CardFooter className="p-4 border-t flex-shrink-0">
                <form onSubmit={handleSubmit} className="flex w-full gap-2">
                  <Input
                    placeholder="Ask me anything..."
                    value={input}
                    onChange={handleInputChange}
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="flex-shrink-0">
                    <SendIcon className="h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-2 text-center w-full">
                  Powered by AI • Can answer any question
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
