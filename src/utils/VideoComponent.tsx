import React from "react";

export const HeroVideo = () => {
    return (
        <>
            <div className="rounded-xl overflow-hidden h-[130vh] w-auto mx-auto">
                <video
                    src="/welcome.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[100vw] h-auto object-cover object-top"
                />
            </div>
        </>
    )
}