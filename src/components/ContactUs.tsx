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
        <div className='md:py-17'>
            <div className='w-full'>
                <p className="text-muted-background jetbrains-mono uppercase text-sm md:text-center">[ Contact us ]</p>
                <h1 className='text-left text-foreground md:text-5xl capitalize font-bold tracking-tight bebas text-3xl bebas md:tracking-tighter max-w-[70%] md:min-w-full pb-7 md:text-center'>Let us know and drop <br />a meeting or mail to us</h1>
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
