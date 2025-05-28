"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";
import Image from "next/image";
import { Profile_image } from "@/data/personal";
interface HeroProps {
  currentLanguage: string;
  typedText: string;
}

const Hero = ({ currentLanguage, typedText = " " }: HeroProps) => {
  const [showContactForm, setShowContactForm] = useState(false);
  const handleDownloadResume = async () => {
    window.location.href = "/api/download_resume";
  };
  return (
    <>
      <section
        id="home"
        className="pt-30 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center">
            <div className="mb-8 animate-scale-in">
              <div className="relative inline-block">
                <div className="w-52 h-52 rounded-full overflow-hidden mx-auto border-4 border-primary/20 hover-scale animate-float">
                  <Image
                    src={
                      Profile_image
                        ? Profile_image
                        : "/placeholder.svg?height=200&width=200"
                    }
                    alt="Profile"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="absolute object-cover -inset-2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-pulse-slow -z-10"></div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up stagger-2 leading-normal ">
              {currentLanguage === "en" ? (
                <>
                  Hi, I'm{" "}
                  <span className="text-primary typing-cursor">
                    {typedText}
                  </span>
                </>
              ) : (
                <>
                  မင်္ဂလာပါ၊ ကျွန်တော်{" "}
                  <span className="text-primary typing-cursor">
                    {typedText}
                  </span>{" "}
                  ပါ
                </>
              )}
            </h1>

            <p className="text-xl md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fade-in-up stagger-3">
              {currentLanguage === "en"
                ? "Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences."
                : "လှပပြီး အသုံးဝင်သော ဒစ်ဂျစ်တယ် အတွေ့အကြုံများ ဖန်တီးရာတွင် စိတ်အားထက်သန်သော Full Stack Developer တစ်ယောက်ဖြစ်ပါသည်။"}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up stagger-4">
              <Button
                size="lg"
                className="text-base lg:text-lg px-10 py-6 hover-lift rounded-full"
                onClick={() => handleDownloadResume()}
              >
                <Download className="mr-3 h-6 w-6" />
                {currentLanguage === "en"
                  ? "Download Resume"
                  : "Resume ဒေါင်းလုဒ်လုပ်ရန်"}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base lg:text-lg px-10 py-6 hover-lift rounded-full"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Mail className="mr-3 h-6 w-6" />
                {currentLanguage === "en" ? "Contact Me" : "ဆက်သွယ်ရန်"}
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
              <ChevronDown className="h-8 w-8 text-muted-foreground animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
