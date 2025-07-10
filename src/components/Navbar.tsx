"use client"

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter()
    return (
        <nav className="w-full mb-2 sm:mb-10 sticky top-0 z-50 bg-background px-4 py-5 rounded-full shadow-2xl">
            <div className='flex items-center justify-between max-w-7xl mx-auto'>
                <div className='flex items-center space-x-4'>
                    <div className='uppercase md:pr-10 font-extrabold'>boringdesigner.</div>
                    <div className='hidden md:block'>
                        <ul className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8 uppercase text-sm text-muted-foreground transition-colors duration-300'>
                            <Link href="/" className='font-medium hover:text-foreground'>explore</Link>
                            <Link href="/manifesto" className='font-medium hover:text-foreground transition-colors duration-300'>manifesto</Link>
                            <Link href="/portfolio-companies" className='font-medium hover:text-foreground transition-colors duration-300'>portfolio companies</Link>
                            <Link href="/pricing" className='font-medium hover:text-foreground transition-colors duration-300'>pricing</Link>
                            <Link href="/services" className='font-medium hover:text-foreground transition-colors duration-300'>connect</Link>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-4 '>
                    <div onClick={() => router.push("/pricing")}>
                        <Button className='uppercase cursor-pointer font-medium bg-lime-300 hover:bg-lime-400 transition-colors duration-300'>
                            be pro
                        </Button>
                    </div>
                    <div onClick={() => router.push("/vault")}>
                        <Button className='uppercase cursor-pointer font-medium bg-secondary text-foreground border-1 border-border hover:bg-foreground hover:text-background transition-colors duration-300'>
                            the vault
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
