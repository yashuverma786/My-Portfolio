"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to work together? Feel free to contact me through the form or directly via the
              details below.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col items-center text-center p-6 animate-fade-in-up delay-100">
            <CardHeader>
              <Mail className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">yashverma.u786@gmail.com</p>
              <Link href="mailto:yashverma.u786@gmail.com">
                <Button variant="link" className="mt-2">
                  Send Email
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center text-center p-6 animate-fade-in-up delay-200">
            <CardHeader>
              <Phone className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">+91-8766343405</p>
              <Link href="tel:+918766343405">
                <Button variant="link" className="mt-2">
                  Call Me
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center text-center p-6 animate-fade-in-up delay-300">
            <CardHeader>
              <MapPin className="h-10 w-10 text-primary mb-4" />
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Delhi, India</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-8 animate-fade-in-up delay-400">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">Open Contact Form</Button>
            </DialogTrigger>
            <ContactForm />
          </Dialog>
        </div>
      </div>
      <style jsx>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
            .animate-fade-in-up.delay-100 { animation-delay: 0.1s; }
            .animate-fade-in-up.delay-200 { animation-delay: 0.2s; }
            .animate-fade-in-up.delay-300 { animation-delay: 0.3s; }
            .animate-fade-in-up.delay-400 { animation-delay: 0.4s; }
          `}</style>
    </section>
  )
}
