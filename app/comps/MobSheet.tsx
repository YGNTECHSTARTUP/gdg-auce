import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const MobSheet = () => {
    const pathname = usePathname();
  return (
    <div>
        <Sheet>
<SheetTrigger>
    <HamburgerMenuIcon/>
</SheetTrigger>
<SheetContent>
    <div className="p-4 bg-white">
        <div className='justify-center flex'><Link href="/" className="flex items-center gap-2 font-semibold" prefetch={false}>
        <Image src={"/logo.png"} alt='logo' height={40} width={60}/>
          <span className="dark:hover:text-blue-500 hover:text-blue-900 hover:underline -ml-2"> GDGOC AUCE</span>
        </Link></div>
        <ul className="mt-4 space-y-2 text-2xl">
            <li>
                <Link href="/" className={`${pathname == "/"?"text-blue-500 font-extrabold text-xl":"text-primary"}text-xl font-medium "`} prefetch={false}>
                    Home
                </Link>
            </li>
            <li>
                <Link href="/Events" className={`${pathname == "/Events"?"text-blue-500 font-extrabold text-xl":"text-primary"}text-xl font-medium "`} prefetch={false}>
                    Events
                </Link>
            </li>
            <li>
                <Link href="/Teams" className={`${pathname == "/Teams"?"text-blue-500 font-extrabold text-xl":"text-primary"}text-xl font-medium "`} prefetch={false}>
                    Teams
                </Link>
            </li>
            <li>
                <Link href="/Achievements" className={`${pathname == "/Achievements"?"text-blue-500 font-extrabold text-xl":"text-primary"}text-xl font-medium "`} prefetch={false}>
                    Achievements
                </Link>
                </li>
        </ul>
    </div>
</SheetContent>
        </Sheet>
    </div>
  )
}

export default MobSheet