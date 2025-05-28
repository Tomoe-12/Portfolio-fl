"use client";

import React from "react";
import { Badge } from "../ui/badge";
import {skills,Proficiency_Levels} from "@/data/personal"

interface AboutProps {
  currentLanguage: string;
  visibleSections: Set<string>;
}

const About: React.FC<AboutProps> = ({ currentLanguage, visibleSections }) => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${
            visibleSections.has("about")
              ? "animate-fade-in-up"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {currentLanguage === "en" ? "About Me" : "ကျွန်တော့်အကြောင်း"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            {currentLanguage === "en"
              ? "I’m Khun Thi Han, a fourth-year Computer Science student, passionate Full-Stack Developer, and cybersecurity learner from Myanmar. I enjoy building modern web apps with React, Next.js, and MongoDB, while exploring the world of web security and ethical hacking."
              : "ကျွန်တော်သည် မြန်မာနိုင်ငံက စတုတ္ထနှစ် ကွန်ပျူတာသိပ္ပံကျောင်းသား၊ Full-Stack Developer တစ်ယောက်ဖြစ်သလို ဆိုက်ဘာလုံခြုံရေးကို စိတ်ဝင်တစားလေ့လာနေသူ ခွန်သီဟန်ပါ။ React, Next.js, MongoDB တို့နဲ့ ခေတ်မီတဲ့ web app တွေ ရေးရတာကို ကြိုက်ပြီး web security နဲ့ ethical hacking ပိုင်းကိုလည်း လေ့လာဆန်းစစ်နေပါတယ်။"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div
            className={`transition-all duration-1000 delay-200 ${
              visibleSections.has("about")
                ? "animate-fade-in-left"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
              {currentLanguage === "en" ? "My Journey" : "ကျွန်တော့်ခရီးစဉ်"}
            </h3>
            <div className="space-y-6">
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                {currentLanguage === "en"
                  ? "I started my tech journey as a Computer Science student, curious about how websites and apps work behind the scenes. Over time, I taught myself Full-Stack Development with React, Next.js, and MongoDB, building projects that sharpened both my frontend and backend skills."
                  : "ကျွန်တော့်ရဲ့ နည်းပညာခရီးလမ်းက ကွန်ပျူတာသိပ္ပံကျောင်းသားဘဝကနေ စခဲ့တာပါ။ website တွေနဲ့ app တွေ ဘယ်လိုအလုပ်လုပ်လဲဆိုတာကို စူးစမ်းချင်စိတ်နဲ့ စခဲ့တာပေါ့။ အချိန်ကြာလာတော့ React, Next.js, MongoDB တို့နဲ့ Full-Stack Development ကို ကိုယ့်ဘာသာကိုယ် သင်ယူခဲ့ပြီး frontend နဲ့ backend skill တွေကို မြှင့်တင်ပေးခဲ့တဲ့ project တွေကို ရေးခဲ့ပါတယ်။"}
              </p>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                {currentLanguage === "en"
                  ? "Lately, I’ve been diving into cybersecurity, learning about web security, ethical hacking, and how to build safer, smarter applications. This path has fueled my passion for creating useful, secure, and modern web experiences — and I’m just getting started."
                  : "မကြာသေးခင်ကတော့ cybersecurity ထဲကို ဝင်ရောက်လေ့လာနေပြီး web security, ethical hacking နဲ့ ပိုပြီးလုံခြုံ၊ ပိုပြီး smart ကျတဲ့ application တွေကို ဘယ်လိုတည်ဆောက်ရမလဲဆိုတာကို သင်ယူနေပါတယ်။ ဒီလမ်းကြောင်းက အသုံးဝင်တဲ့၊ လုံခြုံတဲ့၊ ခေတ်မီတဲ့ web experience တွေကို ဖန်တီးဖို့ ကျွန်တော့်ရဲ့စိတ်အားထက်သန်မှုကို ပိုပြီး ရှင်သန်စေခဲ့တာပဲ — ဒါက ကျွန်တော်ခုမှ စနေတုန်းပဲ ရှိသေးတာ။"}
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-semibold text-primary">
                {currentLanguage === "en"
                  ? "Experience Highlights"
                  : "အတွေ့အကြုံ အဓိကများ"}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">
                    {currentLanguage === "en"
                      ? "3+ Years of Learning & Building"
                      : "၃ နှစ်ကျော်ကြာ သင်ယူ တည်ဆောက်ခဲ့မှု"}
                  </div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">
                    {currentLanguage === "en"
                      ? "20+ Personal & Team Projects"
                      : "၂၀ ကျော်  ကိုယ်ရေးကိုယ်တာ & အသင်းပရောဂျက်များ"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              visibleSections.has("about")
                ? "animate-fade-in-right"
                : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
              {currentLanguage === "en"
                ? "Skills & Technologies"
                : "ကျွမ်းကျင်မှုများနှင့် နည်းပညာများ"}
            </h3>

            {/* All Skills */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`text-sm py-3 px-4 hover-scale transition-all duration-300 cursor-pointer hover:shadow-lg rounded-full ${
                      visibleSections.has("about")
                        ? "animate-fade-in-up"
                        : "opacity-0"
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
                visibleSections.has("about")
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <h4 className="text-lg font-medium mb-4 text-primary">
                {currentLanguage === "en"
                  ? "Proficiency Levels"
                  : "ကျွမ်းကျင်မှုအဆင့်များ"}
              </h4>
              <div className="space-y-3">
                {Proficiency_Levels.map((item, index) => (
                  <div key={item.skill} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{item.skill}</span>
                      <span className="text-sm text-muted-foreground font-bold">
                        {item.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full transition-all duration-1500 ease-out"
                        style={{
                          width: visibleSections.has("about")
                            ? `${item.level}%`
                            : "0%",
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
  );
};

export default About;
