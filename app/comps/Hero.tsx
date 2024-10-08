"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Link from "next/link";

export function ImagesSliderDemo() {
  const images = ["./hero.png"];
  return (
    <ImagesSlider className="h-[40rem] 2xl:min-h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Google Developer Groups On Campus <br />  Andhra University College of Engineering.
        </motion.p>
        <div className="flex">
            <Link href="https://gdg.community.dev/gdg-on-campus-andhra-university-college-of-engineering-visakhapatnam-india/">
            <button className="px-2 py-1 md:px-4 md:py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join Our Chapter →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
            </Link>
        &nbsp;
        <Link href={"https://forms.gle/qS4pwnkNDrjWdaks6"}>
        <button className="px-2 py-1 md:px-4 md:py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Gen Ai Study Jam →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        </Link>
        
        </div>
       
      </motion.div>
    </ImagesSlider>
  );
}
