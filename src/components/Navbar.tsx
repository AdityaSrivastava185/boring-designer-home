"use client"

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HamburgerMenu } from '@/utils/HamburgerMenu';
import Image from 'next/image';

const Navbar = () => {
    const router = useRouter()
    return (
        <nav className="w-full md:mb-14 px-4 py-2 rounded-full shadow-2xl">
            <div className='flex items-center justify-between max-w-7xl mx-auto'>
                <div className='flex items-center space-x-4'>
                    <div className="w-28 h-auto">
                        <Image
                            src="/logo.png"
                            alt="Boring Designer Logo"
                            width={112}
                            height={32}
                            className="object-contain w-full h-auto"
                            priority
                        />
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8 uppercase text-sm text-muted-foreground transition-colors duration-300'>
                            <Link href="/#manifesto" className='font-medium hover:text-foreground transition-colors duration-300'>manifesto</Link>
                            <Link href="/" className='font-medium hover:text-foreground transition-colors duration-300'>portfolio companies</Link>
                            <Link href="/#pricing" className='font-medium hover:text-foreground transition-colors duration-300'>pricing</Link>
                            <Link href="/#contactus" className='font-medium hover:text-foreground transition-colors duration-300'>connect</Link>
                        </ul>
                    </div>
                </div>
                <div className='hidden md:flex items-center justify-center space-x-4 '>
                    <div onClick={() => router.push("/#pricing")}>
                        <Button className='uppercase cursor-pointer font-medium bg-foreground transition-colors duration-300'>
                            Apply Now
                        </Button>
                    </div>
                    <div onClick={() => router.push("/vault/waitlist")}>
                        <Button className='uppercase cursor-pointer font-medium bg-secondary text-foreground border-1 border-border hover:bg-foreground hover:text-background transition-colors duration-300'>
                            join the vault
                        </Button>
                    </div>
                </div>
                {/* <div className='md:hidden block'>
                    <HamburgerMenu />
                </div> */}
                <div className='md:hidden block'>
                    <Button onClick={() => router.push("/vault/waitlist")} className='uppercase cursor-pointer font-medium bg-foreground text-background border-1 border-border hover:bg-foreground text-xs hover:text-background transition-colors  duration-300'>
                        join the vault
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
