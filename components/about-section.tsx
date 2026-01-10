export function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    About <span className="text-primary">Techzaz EDR</span>
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                    Techzaz EDR is a cloud-based Endpoint Detection and Response platform designed to help organizations monitor
                    endpoints, analyze network activity, detect threats, and respond to security incidents through a centralized
                    dashboard. Using lightweight endpoint agents and secure cloud-based analysis, the platform provides
                    visibility, control, and actionable security insights across organizational infrastructure.
                </p>
            </div>
        </section>
    )
}
