const items = [
    {
        body: "I've been in the design game",
    },
    {
        body: "I'm a newbie designer",
    },
    {
        body: "This design kit is a game changer",
    },
    {
      
        body: "I'm a newbie designer and this kit ",
    },
    {
      
        body: "I'm a newbie designer and this kit ",
    },
]

export default function MarqueeFooter() {
    return (
        <div className="relative flex items-center bg-foreground rounded-sm overflow-hidden">
            <div className="relative flex max-w-[100vw] overflow-hidden">
                <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
                    {[...items, ...items].map((item, index) => (
                        <div key={index} className="h-full">
                            <div className="relative h-full w-[20rem] rounded-2xl border border-border bg-foreground py-2">
                                <div className=" font-medium bebas uppercase text-background ">{item.body}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
