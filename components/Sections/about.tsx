'use client'

import React from 'react'
import { Badge } from '../ui/badge';

interface AboutProps {
  currentLanguage: string;
  visibleSections: Set<string>;
}

const About: React.FC<AboutProps> = ({
    currentLanguage,
    visibleSections,
}) => {
  return (
       <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
              visibleSections.has("about") ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {currentLanguage === "en" ? "About Me" : "ကျွန်တော့်အကြောင်း"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              {currentLanguage === "en"
                ? "I'm a passionate full-stack developer with 5+ years of experience building web applications. I love turning complex problems into simple, beautiful, and intuitive solutions."
                : "ကျွန်တော်သည် ၅ နှစ်ကျော် အတွေ့အကြုံရှိသော စိတ်အားထက်သန်သည့် full-stack developer တစ်ယောက်ဖြစ်ပါသည်။ ရှုပ်ထွေးသော ပြဿနာများကို ရိုးရှင်းပြီး လှပသော ဖြေရှင်းချက်များအဖြစ် ပြောင်းလဲပေးရာတွင် နှစ်သက်ပါသည်။"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div
              className={`transition-all duration-1000 delay-200 ${
                visibleSections.has("about") ? "animate-fade-in-left" : "opacity-0 -translate-x-8"
              }`}
            >
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
                {currentLanguage === "en" ? "My Journey" : "ကျွန်တော့်ခရီးစဉ်"}
              </h3>
              <div className="space-y-6">
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  {currentLanguage === "en"
                    ? "Started my journey in computer science and fell in love with web development. I've worked with startups and established companies, helping them build scalable and user-friendly applications."
                    : "ကွန်ပျူတာသိပ္ပံပညာမှ စတင်ခဲ့ပြီး web development ကို နှစ်သက်လာခဲ့ပါသည်။ startup များနှင့် တည်ထောင်ပြီးသား ကုမ္ပဏီများနှင့် အလုပ်လုပ်ကိုင်ခဲ့ပြီး scalable နှင့် အသုံးပြုရလွယ်ကူသော application များ တည်ဆောက်ရာတွင် ကူညီခဲ့ပါသည်။"}
                </p>
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                  {currentLanguage === "en"
                    ? "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities."
                    : "ကုဒ်မရေးနေချိန်တွင် နည်းပညာအသစ်များကို လေ့လာခြင်း၊ open-source project များတွင် ပါဝင်ကူညီခြင်း သို့မဟုတ် ပြင်ပလှုပ်ရှားမှုများကို ပျော်ရွှင်နေတတ်ပါသည်။"}
                </p>
              </div>

              {/* Experience Highlights */}
              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-semibold text-primary">
                  {currentLanguage === "en" ? "Experience Highlights" : "အတွေ့အကြုံ အဓိကများ"}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">
                      {currentLanguage === "en" ? "Years Experience" : "နှစ် အတွေ့အကြုံ"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">
                      {currentLanguage === "en" ? "Projects Completed" : "ပရောဂျက် ပြီးစီး"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-400 ${
                visibleSections.has("about") ? "animate-fade-in-right" : "opacity-0 translate-x-8"
              }`}
            >
              <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
                {currentLanguage === "en" ? "Skills & Technologies" : "ကျွမ်းကျင်မှုများနှင့် နည်းပညာများ"}
              </h3>

              {/* All Skills */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "HTML5",
                    "CSS3",
                    "Node.js",
                    "Python",
                    "Express.js",
                    "FastAPI",
                    "REST APIs",
                    "GraphQL",
                    "MongoDB",
                    "PostgreSQL",
                    "MySQL",
                    "AWS",
                    "Docker",
                    "Kubernetes",
                    "Redis",
                  ].map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`text-sm py-3 px-4 hover-scale transition-all duration-300 cursor-pointer hover:shadow-lg rounded-full ${
                        visibleSections.has("about") ? "animate-fade-in-up" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                    >
                      <span className="relative">
                        {skill}
                        <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </span>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Skill Level Indicators */}
              <div
                className={`mt-8 transition-all duration-1000 delay-1000 ${
                  visibleSections.has("about") ? "animate-fade-in-up" : "opacity-0 translate-y-4"
                }`}
              >
                <h4 className="text-lg font-medium mb-4 text-primary">
                  {currentLanguage === "en" ? "Proficiency Levels" : "ကျွမ်းကျင်မှုအဆင့်များ"}
                </h4>
                <div className="space-y-3">
                  {[
                    { skill: "React/Next.js", level: 95 },
                    { skill: "TypeScript/JavaScript", level: 90 },
                    { skill: "Node.js/Python", level: 85 },
                    { skill: "AWS/Cloud Services", level: 80 },
                    { skill: "Database Design", level: 85 },
                  ].map((item, index) => (
                    <div key={item.skill} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{item.skill}</span>
                        <span className="text-sm text-muted-foreground font-bold">{item.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full transition-all duration-1500 ease-out"
                          style={{
                            width: visibleSections.has("about") ? `${item.level}%` : "0%",
                            transitionDelay: `${1.2 + index * 0.2}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About