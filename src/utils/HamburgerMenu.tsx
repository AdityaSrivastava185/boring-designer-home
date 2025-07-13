"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import Link from "next/link"
import React from "react"
import { useState } from "react"

export function HamburgerMenu() {
  const [goal, setGoal] = useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline"> <Menu /> </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="bebas text-4xl uppercase  font-bold ">boringdesigner</DrawerTitle>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex items-center justify-center flex-col gap-4">
              <Link href="#" className="font-medium bebas uppercase text-xs">
                about us
              </Link>
              <Link href="#" className="font-medium bebas uppercase text-xs">
                manifesto
              </Link>
              <Link href="#" className="font-medium bebas uppercase text-xs">
                portfolio companies
              </Link>
              <Link href="#" className="font-medium bebas uppercase text-xs">
                vault
              </Link>
              <Link href="#" className="font-medium bebas uppercase text-xs">
                pricing
              </Link>
              <Link href="#" className="font-medium bebas uppercase text-xs">
                community programs
              </Link>
            </div>

          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}