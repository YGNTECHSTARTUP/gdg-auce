"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { teams } from "../constant";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={teams} />
    </div>
  );
}