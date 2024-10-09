"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { SocialIcon } from "react-social-icons";
export function TypewriterEffectSmoothDemo() {
    const urls = [
        "https://chat.whatsapp.com/GIHMXk5p4ybIdswVWP6t5a",              // WhatsApp// LinkedIn   // Instagram
        "mailto:dscauce@gmail.com",
        "https://linkedin.com/company/gdsc-auce",
        "https://www.instagram.com/gdsc_auce/",
        "https://www.youtube.com/channel/UCw2vDOLYKTyNxA4m91QhMCQ",
    
        "https://www.facebook.com/people/DSC-AUCE/100064837297149/?modal=admin_todo_tour",
        "https://discord.com/invite/D8PFce7jUD"
                   // Gmail
      ];
  const words = [
    {
      text: "Connect ",
    },
    {
      text: "With",
    },
    {
      text: "GDGOC AUCE",
      className: "text-blue-500 dark:text-blue-500",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
      <TypewriterEffectSmooth words={words} />
      <div className=" flex-row md:flex-row  space-y-0 space-x-2 md:space-x-4">
        {
            urls.map((url,index)=><SocialIcon key={index} url={url} fgColor="#fff" bgColor="#000" style={{ height: 40, width: 40 }} />)
        }
      </div>
    </div>
  );
}
