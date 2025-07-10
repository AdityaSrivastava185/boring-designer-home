"use client"

import React from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from 'react';

const words = "we embrace minimalism, silence, and precision to craft designs that dominate. We thrive in the shadows, where the overlooked transforms into the unforgettable.This is not just design. This is calculated impact."

const ContactUs = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <div className='my-52'>
            <div className=''>
                <h1 className='text-bebas font-bold text-7xl tracking-tighter text-center uppercase pb-10'>contact us</h1>
            </div>
            <Cal namespace="30min"
                calLink="boringdesigner/30min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ "layout": "month_view", "theme": "dark" }}


            />
            <div className='flex items-center justify-center mt-10 md:max-w-[70vw] mx-auto'>
                <p className='text-center text-bebas text-2xl uppercase font-bold'>{words}</p>
            </div>
        </div>
    )
}

export default ContactUs
