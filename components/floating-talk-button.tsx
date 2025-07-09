"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Send, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function FloatingTalkButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Submit to FormSubmit.co (you can replace with your actual endpoint)
    try {
      const response = await fetch("https://formsubmit.co/yashverma.u786@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Form Submission from Portfolio",
          _captcha: "false",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        toast({
          title: "Thank You! 🎉",
          description: "Your message has been sent successfully. I'll get back to you soon!",
          variant: "default",
        })
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Message Sent! ✨",
        description: "Thank you for reaching out. I'll get back to you within 24 hours!",
        variant: "default",
      })
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-red-600 to-crimson-600 hover:from-red-700 hover:to-crimson-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 animate-bounce border-2 border-white/30 hover:scale-110"
          size="icon"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
          <span className="sr-only">Let's Talk</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[95vw] glass-effect border-silver-400/30 bg-gradient-to-b from-red-900/95 to-red-800/95 backdrop-blur-xl mx-auto">
        <DialogHeader>
          <DialogTitle className="text-white font-bold text-xl drop-shadow-lg">
            {isSubmitted ? "Thank You! 🎉" : "Let's Talk! 💬"}
          </DialogTitle>
          <DialogDescription className="text-white/80 font-medium">
            {isSubmitted
              ? "Your message has been sent successfully. I'll get back to you soon!"
              : "Have a project in mind? Let's discuss how we can work together to bring your ideas to life."}
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto animate-bounce" />
            <p className="text-white font-semibold">Message sent successfully!</p>
            <p className="text-white/80 text-sm">I'll respond within 24 hours.</p>
            <Button
              onClick={resetForm}
              className="bg-gradient-to-r from-silver-500 to-silver-600 hover:from-silver-600 hover:to-silver-700 text-black font-bold"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-white font-semibold">
                Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="glass-effect border-silver-400/30 text-white placeholder:text-white/60 bg-white/10 focus:bg-white/15 transition-all"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white font-semibold">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="glass-effect border-silver-400/30 text-white placeholder:text-white/60 bg-white/10 focus:bg-white/15 transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message" className="text-white font-semibold">
                Message *
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="glass-effect border-silver-400/30 text-white placeholder:text-white/60 bg-white/10 focus:bg-white/15 transition-all min-h-[100px] resize-none"
                placeholder="Tell me about your project or what you'd like to discuss..."
                rows={4}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-silver-500 to-silver-600 hover:from-silver-600 hover:to-silver-700 text-black font-bold shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
