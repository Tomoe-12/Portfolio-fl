'use client'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Badge } from '../ui/badge'

interface Certificate {
  image?: string;
  issuer: string;
  title: string;
  verifyUrl: string;
  date: string;
  credentialId: string;
  skills: string[];
}

interface CertificatesProps {
  certificates: Certificate[];
  visibleSections: Set<string>;
  currentLanguage: string;
}

const Certificates = ({
    certificates,
    visibleSections,
    currentLanguage,
}: CertificatesProps) => {
  return (
     <section
        id="certificates"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              visibleSections.has("certificates")
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {currentLanguage === "en" ? "Certifications" : "လက်မှတ်များ"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              {currentLanguage === "en"
                ? "Professional certifications that validate my expertise and commitment to continuous learning."
                : "ကျွန်တော့်ရဲ့ ကျွမ်းကျင်မှုနှင့် စဉ်ဆက်မပြတ် သင်ယူမှုအပေါ် ကတိကဝတ်ကို အတည်ပြုသော ပရော်ဖက်ရှင်နယ် လက်မှတ်များဖြစ်ပါသည်။"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover-lift transition-all duration-1000 group ${
                  visibleSections.has("certificates")
                    ? "animate-scale-in"
                    : "opacity-0 scale-90"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={`${cert.issuer} logo`}
                        width={100}
                        height={100}
                        className="rounded-xl border-2 border-primary/20 hover-scale transition-transform duration-300"
                      />
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 animate-pulse-slow -z-10"></div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-3 flex items-center justify-between group-hover:text-primary transition-colors duration-300">
                        <span>{cert.title}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="hover-scale"
                        >
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      </CardTitle>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="font-medium text-base">{cert.issuer}</p>
                        <p>
                          {currentLanguage === "en"
                            ? "Issued:"
                            : "ထုတ်ပေးသည့်ခုနှစ်:"}{" "}
                          {cert.date}
                        </p>
                        <p className="font-mono text-xs bg-muted px-2 py-1 rounded">
                          ID: {cert.credentialId}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs hover-scale transition-all duration-300 rounded-full"
                        style={{ transitionDelay: `${skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Certifications Note */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-500 ${
              visibleSections.has("certificates")
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-muted-foreground mb-6 text-lg">
              {currentLanguage === "en"
                ? "Continuously expanding my knowledge through professional development"
                : "ပရော်ဖက်ရှင်နယ် ဖွံ့ဖြိုးတိုးတက်မှုများမှတစ်ဆင့် ကျွန်တော့်အသိပညာကို စဉ်ဆက်မပြတ် တိုးချဲ့နေပါသည်"}
            </p>
            <Button
              variant="outline"
              size="lg"
              className="hover-lift rounded-full"
            >
              {currentLanguage === "en"
                ? "View All Certifications"
                : "လက်မှတ်အားလုံးကြည့်ရန်"}
            </Button>
          </div>
        </div>
      </section>
  )
}

export default Certificates