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
import Image from "next/image"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    
    if (!href || href === '#') {
      // Close the drawer without navigation for empty or '#' hrefs
      setIsOpen(false)
      return
    }

    // Close the drawer first
    setIsOpen(false)

    // Use setTimeout to ensure the drawer is closed before navigation
    setTimeout(() => {
      if (href.startsWith("#")) {
        const id = href.replace("#", "")
        if (id) {
          const el = document.getElementById(id)
          if (el) {
            el.scrollIntoView({ behavior: "smooth" })
            window.history.pushState(null, "", `#${id}`)
          }
        }
      } else if (href.startsWith("/")) {
        if (href.includes("#")) {
          // Handle internal page anchors
          const [path, hash] = href.split("#")
          if (path === window.location.pathname) {
            // Same page anchor
            const el = document.getElementById(hash)
            if (el) {
              el.scrollIntoView({ behavior: "smooth" })
              window.history.pushState(null, "", `#${hash}`)
            }
          } else {
            // Different page with anchor
            router.push(href)
          }
        } else {
          // Regular navigation
          router.push(href)
        }
      }
    }, 150) // Slightly longer delay to ensure drawer is fully closed
  }

  return (
    <Drawer open={isOpen} onOpenChange={(open) => {
      if (!open) {
        // Only update state when closing to prevent unwanted re-renders
        setIsOpen(false)
      }
    }}>
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
              <button onClick={(e) => handleLinkClick(e, "#aboutus")} className="font-medium bebas uppercase text-xs text-left w-full">
                about us
              </button>
              <button onClick={(e) => handleLinkClick(e, "#manifesto")} className="font-medium bebas uppercase text-xs text-left w-full">
                manifesto
              </button>
              <button onClick={(e) => handleLinkClick(e, "")} className="font-medium bebas uppercase text-xs text-left w-full">
                portfolio companies
                <span className="mx-2 rounded-full px-2 py-1 text-xs bebas uppercase text-foreground border border-foreground animate-pulse">
                  launching soon
                </span>
              </button>
              <button onClick={(e) => handleLinkClick(e, "/vault/waitlist")} className="font-medium bebas uppercase text-xs text-left w-full">
                vault
                <span className="mx-2 rounded-full px-2 py-1 text-xs bebas uppercase text-foreground border border-foreground animate-pulse">
                  launching soon
                </span>
              </button>
              <button onClick={(e) => handleLinkClick(e, "#pricing")} className="font-medium bebas uppercase text-xs text-left w-full">
                pricing
              </button>
              <button onClick={(e) => handleLinkClick(e, "")} className="font-medium bebas uppercase text-xs text-left w-full">
                community programs <span className="mx-2 rounded-full px-2 py-1 text-xs bebas uppercase text-foreground border border-foreground animate-pulse">
                  launching soon
                </span>
              </button>
            </div>

            <div className="mt-6 mb-3 flex flex-col gap-3 w-full">
              <button
                onClick={(e) => handleLinkClick(e, "#contactus")}
                className="font-semibold cursor-pointer bebas rounded-xl px-7 py-3 bg-foreground text-background uppercase w-full text-center"
              >
                Apply Now
              </button>
              <button
                onClick={(e) => handleLinkClick(e, "/vault/waitlist")}
                className="font-semibold cursor-pointer hover:bg-sidebar-accent hover:text-muted-foreground bebas transition-color duration-300 rounded-xl px-7 py-3 bg-muted text-foreground uppercase w-full text-center"
              >
                Join the Vault
              </button>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
