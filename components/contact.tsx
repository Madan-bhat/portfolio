import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, ShieldCheck, Github } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "imadanbhat@gmail.com",
      link: "mailto:imadanbhat@gmail.com",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "Udupi, Karnataka, India",
      link: "https://maps.google.com/?q=Udupi,Karnataka,India",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-950/40 border-t border-white/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="section-heading">
            <p>Secure Channel</p>
            <h2>Inquiry_Portal</h2>
            <p className="uppercase tracking-widest text-xs font-bold text-primary/80">
              Establishing Encrypted Connection...
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
            <div className="lg:col-span-7">
              <div className="bg-zinc-900/40 border border-zinc-800 p-8 relative">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <ShieldCheck className="h-12 w-12 text-primary" />
                </div>

                <form
                  action="https://formspree.io/f/xanoenzo"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                        Investigator_Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="IDENTIFY YOURSELF"
                        className="rounded-none border-zinc-800 bg-black/50 focus:border-primary/50 text-xs uppercase tracking-widest h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                        Return_Signal (Email)
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ADDRESS@SECURE.COM"
                        className="rounded-none border-zinc-800 bg-black/50 focus:border-primary/50 text-xs uppercase tracking-widest h-12"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                      Case_Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="NATURE OF INQUIRY"
                      className="rounded-none border-zinc-800 bg-black/50 focus:border-primary/50 text-xs uppercase tracking-widest h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                      Encrypted_Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="TRANSMIT YOUR DATA HERE..."
                      className="min-h-[150px] rounded-none border-zinc-800 bg-black/50 focus:border-primary/50 text-xs uppercase tracking-widest p-4 leading-relaxed"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-none uppercase tracking-[0.3em] bg-primary hover:bg-primary/90 text-white h-14 font-black italic">
                    <Send className="mr-2 h-4 w-4" /> Transmit_Data
                  </Button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-900/40 border border-zinc-800 p-8 space-y-8">
                <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">Contact_Information</h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="border border-primary/30 bg-primary/5 p-3 group-hover:bg-primary/10 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-xs text-white hover:text-primary transition-colors uppercase tracking-widest"
                            target={info.title === "Location" ? "_blank" : undefined}
                            rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-xs text-white uppercase tracking-widest">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-[1px] w-full bg-white/5" />

                <div className="space-y-4">
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Digital_Footprint</h4>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" asChild className="rounded-none border-zinc-800 hover:border-primary/50 hover:bg-primary/5 h-10 w-10">
                      <a href="https://github.com/Madan-bhat" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="rounded-none border-zinc-800 hover:border-primary/50 hover:bg-primary/5 h-10 w-10">
                      <a href="https://linkedin.com/in/madan-bhat-b1539a336" target="_blank" rel="noopener noreferrer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border border-primary/20 p-6 bg-primary/5 italic">
                <p className="text-[10px] text-zinc-400 leading-relaxed uppercase tracking-widest">
                  Note: All transmissions are logged. Average response time: 24-48 Earth hours. Secure encryption enabled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
