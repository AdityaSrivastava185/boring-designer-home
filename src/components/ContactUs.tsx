"use client"

import React from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from 'react';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

const words = "Boring -Designer is always here for every vision -and obvisouly not for boring stuff we embrace minimalism, silence, and precision to craft designs that dominate. We thrive in the shadows, where the overlooked transforms into the unforgettable.This is not just design. This is calculated impact."

const ContactUs = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <div className='md:pb-14 ' id='contactus'>
            <div className='w-full flex flex-col  md:items-center md:justify-center'>
                <p className="text-muted-background jetbrains-mono uppercase text-sm md:text-center py-2 md:py-7">[ Contact us ]</p>
                <h1 className='text-foreground md:text-5xl uppercase font-bold tracking-tight bebas text-2xl bebas md:tracking-tighter max-w-[80%] md:max-w-[50%]  pb-14 md:text-center'>Let us know and drop a meeting or mail to us</h1>
            </div>
            <Cal namespace="30min"
                calLink="boringdesigner/30min"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ "layout": "month_view", "theme": "dark" }}


            />
            <div className='flex items-center justify-center mt-10 md:max-w-[70vw] mx-auto pb-7 md:pb-0'>
                <p className='text-center text-bebas text-lg md:text-2xl uppercase font-bold '>{words}</p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between md:max-w-[50%] mx-auto pb-7 md:mt-7'>
                <Link href={"https://www.linkedin.com/in/aditya-srivastava-92396a235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target='_blank' className='cursor-pointer flex flex-row items-center justify-center'><p className='text-xl font-bold uppercase '>Linkedin</p><MoveRight className="h-3" /></Link>
                <Link href={"https://x.com/AdityaS02057616?t=aCl8kvsH7jUt8sk5u3SyMg&s=09"}  target='_blank' className='cursor-pointer flex flex-row items-center justify-center'><p className='text-xl font-bold uppercase '>Twitter</p><MoveRight className="h-3" /></Link>
                <Link href={"https://peerlist.io/aditya0"}  target='_blank' className='cursor-pointer flex flex-row items-center justify-center'><p className='text-xl font-bold uppercase '>Peerlist</p><MoveRight className="h-3" /></Link>
                <Link href={"mailto:connect@boring-designer.com"} className='cursor-pointer flex flex-row items-center justify-center'><p className='text-xl font-bold uppercase '>Email</p><MoveRight className="h-3"/></Link>
            </div>
        </div>


    )
}

export default ContactUs
