import React from "react";

export const HeroVideo = () => {
    return (
        <>
            <div className="">
                <div className="rounded-xl overflow-hidden w-auto mx-auto">
                    <video
                        src="/welcome.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className=" h-auto object-contain object-top"
                    />
                </div>
            </div>
        </>
    )
}