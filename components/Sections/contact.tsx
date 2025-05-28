"use client";
import React from "react";
import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

interface ContactProps {
  visibleSections: Set<string>;
  currentLanguage: string;
}

const Contact = ({ visibleSections, currentLanguage }: ContactProps) => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div
        className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${
          visibleSections.has("contact")
            ? "animate-fade-in-up"
            : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {currentLanguage === "en"
            ? "Let's Work Together"
            : "အတူတကွ လုပ်ကိုင်ကြရအောင်"}
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          {currentLanguage === "en"
            ? "I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can bring your ideas to life."
            : "ကျွန်တော်သည် အခွင့်အလမ်းအသစ်များနှင့် စိတ်လှုပ်ရှားဖွယ် ပရောဂျက်များကို အမြဲတမ်း စိတ်ဝင်စားပါသည်။ ဆက်သွယ်ပြီး သင့်အိုင်ဒီယာများကို အသက်ဝင်စေရန် မည်သို့လုပ်ဆောင်နိုင်မည်ကို ဆွေးနွေးကြရအောင်။"}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          {[
            {
              icon: Mail,
              text: currentLanguage === "en" ? "Email Me" : "အီးမေးလ်ပို့ရန်",
              href: "mailto:li8993han@gmail.com",
            },
            {
              icon: Linkedin,
              text: "LinkedIn",
              href: "https://linkedin.com",
            },
            {
              icon: Github,
              text: "GitHub",
              href: "https://github.com/Tomoe-12",
            },
          ].map((item, index) => (
            <Button
              key={item.text}
              size="lg"
              variant={index === 0 ? "default" : "outline"}
              asChild
              className={`hover-lift transition-all duration-1000 text-lg px-8 py-6 rounded-full ${
                visibleSections.has("contact")
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <a
                href={item.href}
                target={index > 0 ? "_blank" : undefined}
                rel={index > 0 ? "noopener noreferrer" : undefined}
              >
                <item.icon className="mr-3 h-6 w-6" />
                {item.text}
              </a>
            </Button>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Contact;
