"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLinkClick = (href: string) => {
    setIsOpen(false) // close drawer
    router.push(href)
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="bebas text-4xl uppercase font-bold">
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
            </DrawerTitle>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex flex-col gap-4 px-3">
              <button onClick={() => handleLinkClick("/#aboutus")} className="font-medium bebas uppercase text-xs text-left">
                about us
              </button>
              <button onClick={() => handleLinkClick("/#manifesto")} className="font-medium bebas uppercase text-xs text-left">
                manifesto
              </button>
              <button onClick={() => handleLinkClick("")} className="font-medium bebas uppercase text-xs text-left">
                portfolio companies
                <span className="mx-2 rounded-full px-2 py-1 text-xs bebas uppercase text-foreground border border-foreground animate-pulse">
                  launching soon
                </span>
              </button>
              <button onClick={() => handleLinkClick("")} className="font-medium bebas uppercase text-xs text-left">
                vault
                <span className="mx-2 rounded-full px-2 py-1 text-xs bebas uppercase text-foreground border border-foreground animate-pulse">
                  launching soon
                </span>
              </button>
              <button onClick={() => handleLinkClick("/#pricing")} className="font-medium bebas uppercase text-xs text-left">
                pricing
              </button>
              <button onClick={() => handleLinkClick("")} className="font-medium bebas uppercase text-xs text-left">
                community programs <span className="mx-2 rounded-full px-2 py-1 text-xs bebas uppercase text-foreground border border-foreground animate-pulse">
                  launching soon
                </span>
              </button>
            </div>

            <div className="mt-6 mb-3 flex flex-col md:flex-row justify-start gap-3 md:gap-7 item-start md:items-start md:justify-start w-full md:w-auto">
              <Button
                onClick={() => handleLinkClick("/#contactus")}
                className="font-semibold cursor-pointer bebas rounded-xl px-7 py-5 bg-foreground text-background uppercase"
              >
                Initiate project
              </Button>
              <Button
                onClick={() => handleLinkClick("/#vault")}
                className="font-semibold cursor-pointer hover:bg-sidebar-accent hover:text-muted-foreground bebas transition-color duration-300 rounded-xl px-7 py-5 bg-muted text-foreground uppercase"
              >
                Explore the vault
              </Button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
