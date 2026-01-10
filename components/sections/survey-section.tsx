"use client"

import { MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SurveySection() {
    return (
        <section className="relative py-20 bg-white/5 overflow-hidden">
            {/* Glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
                        <MessageSquare className="h-8 w-8 text-primary" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Help Us <span className="text-primary">Build Better</span>
                    </h2>

                    <p className="text-muted-foreground mb-8 text-pretty">
                        We want Techzaz EDR to be the perfect security solution for you. Take our short survey and tell us what
                        features you want most.
                    </p>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSei59VJ9_XEy9tgioYoLG8OGTVBd_sn-BQmCVuvdgKgOBr1lw/viewform?usp=preview"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(94,27,181,0.5)] group cursor-pointer">
                            Take the Quick Survey
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}
