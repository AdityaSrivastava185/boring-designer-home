const items = [
    {
        body: "Minimal. Tactical. Unforgettable.",
    },
    {
        body: "We make it look legendary.",
    },
    {
        body: "One studio. Zero noise.",
    },
    {

        body: "Design is your edge. We sharpen it. ",
    },
    {

        body: "Welcome to Boring Designer.",
    },
]

export default function MarqueeFooter() {
    return (
        <div className="relative flex items-center rounded-sm overflow-hidden">
            <div className="relative flex max-w-[100vw] overflow-hidden">
                <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
                    {[...items, ...items].map((item, index) => (
                        <div key={index} className="h-full mx-2">
                            <div className="relative h-full w-[20rem] rounded-2xl border border-border bg-background py-2">
                                <div className=" font-medium bebas uppercase text-foreground text-center">{item.body}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
