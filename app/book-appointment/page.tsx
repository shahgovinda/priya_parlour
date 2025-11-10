"use client"
import { BlurFade } from '@/components/magicui/blur-fade'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import { services } from '@/data/services'
import React, { useRef } from 'react';
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowUpRight, CalendarIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useForm, ValidationError } from '@formspree/react';
import { Confetti, ConfettiRef } from '@/components/magicui/confetti'
import Link from 'next/link'

const flattenServices = services.flatMap(cat =>
    cat.services.map(srv => ({
        label: `${cat.category} - ${srv.name}`,
        value: `${cat.category}__${srv.name}`,
    }))
);

export default function Page() {
    const [selected, setSelected] = React.useState<string[]>([]);
    const [current, setCurrent] = React.useState<string | undefined>(undefined);
    const [date, setDate] = React.useState<Date>();
    const [time, setTime] = React.useState<string>("10:30");
    const [location, setLocation] = React.useState<string>("");
    const [state, handleSubmit] = useForm("myzdvgzb");
    const confettiRef = useRef<ConfettiRef>(null);

    function handleSelect(value: string) {
        if (value && !selected.includes(value)) {
            setSelected([...selected, value]);
            setCurrent(undefined);
        }
    }

    function removeService(val: string) {
        setSelected(selected.filter(s => s !== val));
    }

    // Show confirmation message in place of form
    if (state.succeeded) {
        return (
            <main className="container h-svh lg:px-20 lg:py-20 px-5  mx-auto ">
                <div className="relative flex flex-col items-center justify-center gap-5 h-full">
                    <p className="text-2xl font-bold text-pink-600 instrument-font">
                        Your Appointment has been Booked.
                    </p>
                    <div className='flex gap-5 z-10'>
                        <Link href="/" className='flex p-1 items-center justify-center'>
                            <Button variant={"ghost"}>Home<ArrowUpRight /></Button>
                        </Link>
                        {/* <Link href="/" className='text-base  border border-foreground instrument-font rounded-full px-3 cursor-pointer py-2'>HomePage</Link> */}
                    </div>
                </div>
                <Confetti
                    ref={confettiRef}
                    className="absolute left-0 top-0 z-0 size-full"
                    onMouseEnter={() => {
                        confettiRef.current?.fire({});
                    }}

                />
            </main>
        );
    }

    return (
        <main className="container   lg:px-20 lg:py-20  py-5 mx-auto ">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className=''>
                    <BlurFade delay={1} className='relative' blur="15px" inView>
                        <img
                            className=" w-full h-68 md:h-full object-cover"
                            src={'/appointment.jpg'}
                        />
                        <h1 className='absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl md:4xl lg:text-8xl font-bold instrument-font uppercase   text-pink-500'>Book an Appointment</h1>
                    </BlurFade>
                </div>
                <div className=" p-10 h-full ">
                    <form onSubmit={handleSubmit} className=' flex flex-col justify-between h-full gap-5 md:gap-0'>
                        <div className='flex gap-5'>
                            <Input 
                                type="text" 
                                name="name" 
                                id="name" 
                                placeholder='Enter your Name' 
                                pattern="[A-Za-z ]+" 
                                title="Please enter letters only"
                                onKeyPress={(e) => {
                                    if (!/[A-Za-z ]/.test(e.key)) {
                                        e.preventDefault();
                                    }
                                }}
                                required 
                            />
                        </div>
                        <div className='flex gap-5'>
                            <Input 
                                type="tel" 
                                name="phone" 
                                id="phone" 
                                placeholder='Enter your Phone Number' 
                                pattern="[0-9]{10}" 
                                maxLength={10}
                                title="Please enter a valid 10-digit phone number"
                                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                    if (!/[0-9]/.test(e.key) || (e.target as HTMLInputElement).value.length >= 10) {
                                        e.preventDefault();
                                    }
                                }}
                                required 
                            />
                        </div>
                        <div className='flex gap-5'>
                            <Input type="email" name="email" id="email" placeholder='Enter your Email' required />
                        </div>
                        <div className='flex lg:flex-row flex-col justify-between gap-5'>
                            <div className='flex-1 gap-5'>
                                {/* Location select */}
                                <Select value={location} onValueChange={setLocation}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Your Location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="borivali">Borivali</SelectItem>
                                        <SelectItem value="kandivali">Kandivali</SelectItem>
                                        <SelectItem value="malad">Malad</SelectItem>
                                        <SelectItem value="usa">USA</SelectItem>
                                    </SelectContent>
                                </Select>
                                {/* Hidden input for location */}
                                <input type="hidden" name="location" value={location} />
                            </div>
                            <div className='flex-1 gap-5'>
                                {/* Multi-select for services */}
                                <Select value={current} onValueChange={handleSelect}>
                                    <SelectTrigger className="instrument-font border-input flex h-9 w-full min-w-0 border-b bg-transparent px-3 py-1 text-xl">
                                        <SelectValue placeholder="Select Your Service(s)" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {flattenServices.map(opt => (
                                            <SelectItem
                                                key={opt.value}
                                                value={opt.value}
                                                disabled={selected.includes(opt.value)}
                                            >
                                                {opt.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {/* Hidden inputs for services */}
                                {selected.map(val => (
                                    <input key={val} type="hidden" name="services[]" value={val} />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 ">
                            {selected.map(val => {
                                const label = flattenServices.find(opt => opt.value === val)?.label || val;
                                return (
                                    <span key={val} className="bg-pink-100 text-pink-700 px-2 py-1 rounded flex items-center gap-1 text-sm">
                                        {label}
                                        <button type="button" onClick={() => removeService(val)} className="ml-1 text-pink-500 hover:text-pink-800">&times;</button>
                                    </span>
                                );
                            })}
                        </div>
                        <div className='flex gap-5'>
                            {/* Date picker */}
                            <Popover>
                                <PopoverTrigger asChild className='flex-1 border-b rounded-none'>
                                    <Button
                                        variant="ghost"
                                        data-empty={!date}
                                        className="data-[empty=true]:text-muted-foreground  justify-start text-left font-normal"
                                    >
                                        <CalendarIcon />
                                        {date ? format(date, "PPP") : <span>Pick a Date For Appointment</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar 
                                        mode="single" 
                                        selected={date} 
                                        onSelect={setDate}
                                        disabled={(date) => date <= new Date()} 
                                    />
                                </PopoverContent>
                            </Popover>
                            {/* Time input */}

                        </div>
                        <div className="flex gap-5">
                            <Input
                                type="time"
                                name="time"
                                id="time-picker"
                                step="1"
                                value={time}
                                onChange={e => setTime(e.target.value)}
                                className=" appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none flex-1"
                                required
                            />
                        </div>
                        {/* Hidden input for date */}
                        <input type="hidden" name="date" value={date ? format(date, "yyyy-MM-dd") : ""} />
                        <div className="flex gap-5">
                            <Textarea name="message" className='' id="message" placeholder='Enter your Message' />
                        </div>
                        <div className="flex gap-5">
                            <Button type="submit" className='flex-1'>Book Appointment</Button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}