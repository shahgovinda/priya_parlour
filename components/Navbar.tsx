"use client"
import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Facebook, Instagram, Twitter, X, Youtube } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./ThemeToggle"
import { Button } from "./ui/button"
import { motion, AnimatePresence } from "motion/react"
import { IconBrandGoogle, IconBrandYoutubeFilled } from "@tabler/icons-react"

export function Navbar() {
    const [open, setOpen] = React.useState(false);

     React.useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
        return () => document.body.classList.remove("overflow-hidden")
    }, [open])
    
    return (
        <header className="sticky top-0 z-40 w-full  bg-transparent backdrop-blur-3xl ">
            <div className=" flex justify-between container mx-auto py-4 px-7 lg:p-4">
                <div className="flex  items-center gap-2">
                    <span className="flex lg:hidden gap-1 flex-col px-2 py-3 " onClick={() => setOpen(!open)}>
                        <div className="h-1 w-6 rounded-full bg-foreground"></div>
                        <div className="h-1 w-3 rounded-full bg-foreground"></div>
                    </span>
                    <Link href="/" className="text-4xl lg:text-5xl carattere-font font-bold ">Priya.</Link>
                </div>
                <NavigationMenu viewport={true} className="hidden lg:flex">
                    <NavigationMenuList className="instrument-font text-lg ">

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/services">Services</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/beauticians">Beauticians</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/look-book">Look Book</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/bridal">Bridal</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/blog">Blogs</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/about">About</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>

                </NavigationMenu>
                <div className="hidden lg:flex items-center gap-2">
                    <ModeToggle />
                    <Link href={"/book-appointment"}>
                        <Button  >Book Now</Button>
                    </Link>
                </div>
                <div className="lg:hidden flex items-center gap-2">
                    <ModeToggle />
                    <Link href={"/book-appointment"}>
                        <Button size={"sm"}>Book Now</Button>
                    </Link>
                </div>
            </div>

            <AnimatePresence>
                {open &&
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="fixed top-0 left-0 h-screen w-screen flex flex-col  bg-background z-10 overflow-hidden" onClick={(e) => e.stopPropagation()} >

                        <div className="flex items-center gap-2 py-2 px-7 ">
                            <span className="flex lg:hidden gap-1 flex-col px-2 py-3" role="button" aria-label="Open menu" tabIndex={0} onClick={() => setOpen(false)}>
                                <X className="size-9 stroke-2" />
                            </span>
                            <Link href="/" className="text-4xl lg:text-5xl carattere-font font-bold">Priya.</Link>
                        </div>

                        <div className="flex flex-col gap-8 instrument-font text-4xl items-center justify-center h-full ">

                            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
                            <Link href="/beauticians" onClick={() => setOpen(false)}>Beauticians</Link>
                            <Link href="/look-book" onClick={() => setOpen(false)}>Look Book</Link>
                            <Link href="/blog" onClick={() => setOpen(false)}>Blogs</Link>
                            <Link href="/bridal" onClick={() => setOpen(false)}>Bridal</Link>
                            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
                            <Link href="/book-appointment" className="w-full flex items-center justify-center" onClick={() => setOpen(false)}>
                                <Button size={"lg"} className="w-3/4" onClick={() => setOpen(false)}>Book Now</Button>
                            </Link>
                        </div>
                        <div>
                            <div className="h-20 flex items-center justify-center gap-4 ">
                                <Link href="https://www.instagram.com/Numa_parlour28?igsh=dm84OHh2NHZqZGFp" target='_blank'>
                                    <Instagram className="size-5" />
                                </Link>
                                <Link href="https://share.google/AKV00srM8tpfOrYXI" target='_blank' >
                                    <IconBrandGoogle className="size-5" />
                                </Link>
                                <Youtube className="size-5" />
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </header>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
