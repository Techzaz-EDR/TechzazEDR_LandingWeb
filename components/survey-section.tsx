"use client"

import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SurveySection() {
    return (
        <section className="py-20 bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
                        <MessageSquare className="h-8 w-8 text-primary" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Help Us Build Better</h2>

                    <p className="text-muted-foreground mb-8 text-pretty">
                        We want Techzaz EDR to be the perfect security solution for you. Take our short survey and tell us what
                        features you want most.
                    </p>

                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
                        Take the Quick Survey
                    </Button>
                </div>
            </div>
        </section>
    )
}
