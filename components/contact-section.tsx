"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CheckIcon, AlertCircleIcon } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full" />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Have a question or want to work together? Feel free to reach out to me through the contact form or directly
            via email or phone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MailIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:bhuvaneswar981@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      bhuvaneswar981@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <PhoneIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+919361419835" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 9361419835
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPinIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="pt-6 flex justify-center">
                  <div className="w-48 h-48 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MailIcon className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message here..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md text-destructive"
                    >
                      <AlertCircleIcon className="h-4 w-4" />
                      <span className="text-sm">{error}</span>
                    </motion.div>
                  )}

                  {/* Success Message */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400"
                    >
                      <CheckIcon className="h-4 w-4" />
                      <span className="text-sm">Thank you! Your message has been sent successfully.</span>
                    </motion.div>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting || isSubmitted}>
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">
                          <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        </span>
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckIcon className="h-5 w-5 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <SendIcon className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. Your information will be kept private and secure.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Alternative Contact Methods */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-4">Prefer a more direct approach? You can also reach me at:</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="outline" asChild>
              <a href="mailto:bhuvaneswar981@gmail.com" className="flex items-center gap-2">
                <MailIcon className="h-4 w-4" />
                bhuvaneswar981@gmail.com
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+919361419835" className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" />
                +91 9361419835
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
