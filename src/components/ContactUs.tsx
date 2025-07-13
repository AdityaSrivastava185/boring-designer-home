"use client"

import React from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from 'react';

const words = ""

const ContactUs = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <div className='md:pb-14'>
            <div className='w-full flex flex-col items-center justify-center'>
                <p className="text-muted-background jetbrains-mono uppercase text-sm text-center">[ Contact us ]</p>
                <h1 className='text-foreground md:text-5xl uppercase font-bold tracking-tight bebas text-2xl bebas md:tracking-tighter max-w-[80%] md:max-w-[50%]  pb-14 text-center'>Let us know and drop a meeting or mail to us</h1>
            </div>
            <Cal namespace="30min"
                calLink="boringdesigner/30min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ "layout": "month_view", "theme": "dark" }}


            />
            <div className='flex items-center justify-center mt-10 md:max-w-[70vw] mx-auto pb-7 md:pb-0'>
                <p className='text-left md:text-center text-bebas text-lg md:text-2xl uppercase md:font-bold font-medium'>{words}</p>
            </div>
        </div>
    )
}

export default ContactUs
