"use client"
import Image from "next/image"
import Link from "next/link"



import { usePathname } from "next/navigation"

export default function NavContent() {
  const pathname = usePathname()

  return (
    <header className="fixed border-primary border-b-2 top-0 left-0 z-50 w-full bg-background/80 backdrop-blur-md transition-all duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold" prefetch={false}>
        <Image src={"/logo.png"} alt='logo' height={40} width={60}/>
          <span className="dark:hover:text-blue-500 hover:text-blue-900 hover:underline -ml-2"> GDGOC AUCE</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-4 md:flex ">
            <Link href="/" className={`${pathname == "/"?"text-blue-500 font-extrabold text-xl":"text-primary"}text-sm font-medium "`} prefetch={false}>
              Home
            </Link>
            <Link href="/Events" className={`${pathname == "/Events"?"text-blue-500 font-extrabold text-xl":"text-primary"}text-sm font-medium "`} prefetch={false}>
              Events
            </Link>
            <Link href="/Domains" className={`${pathname == "/Domains"?"text-blue-500 font-extrabold text-xl":"text-primary"}text-sm font-medium "`} prefetch={false}>
            Domains
            </Link>
            <Link href="/Achievements" className={`${pathname == "/Achievements"?"text-blue-500 font-extrabold text-xl":"text-primary"}text-sm font-medium "`} prefetch={false}>
            Achievements
            </Link>
          </nav>
          

           
        </div>
        
      </div>
    
    </header>
  )
}