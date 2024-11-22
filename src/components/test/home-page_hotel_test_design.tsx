/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import logo1 from "../../../public/images/logo1.png";
import {
    CalendarIcon,
    Utensils,
    Wifi,
    Car,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import Image from "next/image";

// Mock data for rooms and services
const rooms = [
    {
        id: 1,
        name: "Deluxe Room",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/89/f5/50/golden-lotus-luxury-hotel.jpg?w=700&h=-1&s=1",
        price: 150,
    },
    {
        id: 2,
        name: "Suite",
        image: "https://www.visa.mq/dam/VCOM/regional/lac/SPA/Default/affluent/VHLC/marquee-visa-luxury-hotel-collection-1600x900.jpg",
        price: 250,
    },
    {
        id: 3,
        name: "Family Room",
        image: "https://digital.ihg.com/is/image/ihg/six-senses-la-sagesse-9019094661-16x5?ts=1727471812828&dpr=off",
        price: 200,
    },
];

const services = [
    {
        id: 1,
        name: "24/7 Room Service",
        icon: <Utensils className="h-6 w-6" />,
    },
    { id: 2, name: "Free Wi-Fi", icon: <Wifi className="h-6 w-6" /> },
    { id: 3, name: "Parking", icon: <Car className="h-6 w-6" /> },
];

export default function HomePage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/89/f5/50/golden-lotus-luxury-hotel.jpg?w=700&h=-1&s=1",
        "https://www.visa.mq/dam/VCOM/regional/lac/SPA/Default/affluent/VHLC/marquee-visa-luxury-hotel-collection-1600x900.jpg",
        "https://digital.ihg.com/is/image/ihg/six-senses-la-sagesse-9019094661-16x5?ts=1727471812828&dpr=off",
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
        );
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Navigation */}
            <header className="bg-white shadow-sm h-[75px] flex justify-center items-center">
                <nav className="container mx-auto px-4 py-4">
                    <ul className="flex justify-between items-center">
                        <li className="flex items-center">
                            <a
                                href="#"
                                className="text-2xl font-bold text-primary"
                            >
                                {/* <img src={logo1} alt="logo1" /> */}
                                <Image
                                    src={logo1}
                                    width={210}
                                    height={70}
                                    alt="logo"
                                />
                            </a>
                        </li>
                        <li className="flex space-x-4">
                            <a
                                href="#"
                                className="text-sm font-medium text-gray-600 hover:text-primary"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-sm font-medium text-gray-600 hover:text-primary"
                            >
                                Rooms
                            </a>
                            <a
                                href="#"
                                className="text-sm font-medium text-gray-600 hover:text-primary"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="text-sm font-medium text-gray-600 hover:text-primary"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="flex-grow">
                <div className="container mx-auto px-4">
                    {/* Hero Section with Slideshow */}
                    <section className="relative h-[600px] overflow-hidden rounded-xl my-8">
                        {slides.map((slide, index) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                key={index}
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                    index === currentSlide
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                        ))}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
                                Welcome to LuxeStay
                            </h1>
                        </div>
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="h-6 w-6 text-primary" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="h-6 w-6 text-primary" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full ${
                                        index === currentSlide
                                            ? "bg-primary"
                                            : "bg-white bg-opacity-50"
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </section>

                    {/* Search Form */}
                    <section className="my-12">
                        <Card>
                            <CardHeader>
                                <CardTitle>Find Your Perfect Room</CardTitle>
                                <CardDescription>
                                    Enter your details to search for available
                                    rooms.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="checkin">
                                            Check-in Date
                                        </Label>
                                        <div className="flex">
                                            <CalendarIcon className="w-4 h-4 mr-2 opacity-50" />
                                            <Input id="checkin" type="date" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="checkout">
                                            Check-out Date
                                        </Label>
                                        <div className="flex">
                                            <CalendarIcon className="w-4 h-4 mr-2 opacity-50" />
                                            <Input id="checkout" type="date" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="roomtype">
                                            Room Type
                                        </Label>
                                        <Select>
                                            <SelectTrigger id="roomtype">
                                                <SelectValue placeholder="Select room type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="any">
                                                    Any
                                                </SelectItem>
                                                <SelectItem value="standard">
                                                    Standard
                                                </SelectItem>
                                                <SelectItem value="deluxe">
                                                    Deluxe
                                                </SelectItem>
                                                <SelectItem value="suite">
                                                    Suite
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex items-end">
                                        <Button className="w-full">
                                            Search Rooms
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </section>

                    {/* Featured Rooms */}
                    <section className="my-12">
                        <h2 className="text-3xl font-bold mb-6">
                            Featured Rooms
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {rooms.map((room) => (
                                <Card key={room.id}>
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <CardHeader>
                                        <CardTitle>{room.name}</CardTitle>
                                        <CardDescription>
                                            Starting from ${room.price} per
                                            night
                                        </CardDescription>
                                    </CardHeader>
                                    <CardFooter>
                                        <Button className="w-full">
                                            Book Now
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Services */}
                    <section className="my-12">
                        <h2 className="text-3xl font-bold mb-6">
                            Our Services
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {services.map((service) => (
                                <Card key={service.id}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            {service.icon}
                                            {service.name}
                                        </CardTitle>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="bg-gray-100 mt-12">
                <div className="container mx-auto px-4 py-8">
                    <p className="text-center text-gray-600">
                        &copy; 2024 LuxeStay. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
