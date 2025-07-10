import React from 'react';

export default function Pricing() {
  return (
    <div className=" px-4 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* $500 Plan */}
        <div className="border  bg-[#111] rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold">$500<span className="text-base font-normal"> /MONTH</span></h2>
            <button className="text-xl font-bold text-white rounded-full w-8 h-8 flex items-center justify-center">+</button>
          </div>
          <h3 className="text-xl font-semibold mb-6 tracking-wide">SINGLE/MULTI LANDING PAGE DESIGN</h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> ONE-PAGE DESIGN IN FIGMA
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> MOBILE-FIRST & RESPONSIVE
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> UNLIMITED REVISIONS
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> CONVERSION-OPTIMIZED LAYOUT
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> 1 CONCEPT + UNLIMITED REVISIONS
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> DELIVERY IN 5-7 DAYS
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> EMAIL SUPPORT
            </li>
          </ul>
        </div>

        <div className="border  bg-gradient-to-b from-green-500 via-yellow-300 to-orange-500 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl text-background font-bold bebas">$500<span className=" text-background text-base font-normal bebas"> /MONTH</span></h2>
            <button className="text-xl font-bold text-background rounded-full w-8 h-8 flex items-center justify-center">+</button>
          </div>
          <h3 className="text-xl mb-6 tracking-wide text-background bebas uppercase">SINGLE/MULTI LANDING PAGE DESIGN</h3>

          <ul className="space-y-3 text-sm text-background">
            <li className="flex items-start gap-2">
              <span className="text-background">✓</span> ONE-PAGE DESIGN IN FIGMA
            </li>
            <li className="flex items-start gap-2">
              <span className="text-background">✓</span> MOBILE-FIRST & RESPONSIVE
            </li>
            <li className="flex items-start gap-2">
              <span className="text-background">✓</span> UNLIMITED REVISIONS
            </li>
            <li className="flex items-start gap-2">
              <span className="text-background">✓</span> CONVERSION-OPTIMIZED LAYOUT
            </li>
            <li className="flex items-start gap-2">
              <span className="text-background">✓</span> 1 CONCEPT + UNLIMITED REVISIONS
            </li>
            <li className="flex items-start gap-2">
              <span className="text-background">✓</span> DELIVERY IN 5-7 DAYS
            </li>
            <li className="flex items-start gap-2">
              <span className="text-background">✓</span> EMAIL SUPPORT
            </li>
          </ul>
        </div>

        {/* $800 Plan */}
        <div className="border bg-[#111] rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold">$800<span className="text-base font-normal"> /MONTH</span></h2>
            <button className="text-xl font-bold text-white  rounded-full w-8 h-8 flex items-center justify-center">+</button>
          </div>
          <h3 className="text-xl font-semibold mb-6 tracking-wide flex items-center gap-2">
            SINGLE PAGE DESIGN + CODE <span className="bg-white text-black px-2 py-1 text-xs rounded-full">PRO</span>
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> FIGMA DESIGN + FULL BUILD IN NEXT.JS, TAILWIND CSS, TYPESCRIPT
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> MOBILE RESPONSIVE
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> UNLIMITED REVISIONS
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> GITHUB REPO + DEPLOYED SITE
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> DELIVERY IN 7–10 DAYS
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> OPEN SOURCE DOCUMENTATION (1 PAGE)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> EMAIL SUPPORT
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
