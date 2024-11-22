import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BookOpen, Code, Globe, Server } from "lucide-react";
import Link from "next/link";

export default function TestHomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <BookOpen className="h-6 w-6" />
                    <span className="sr-only">TechEd Hub</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="#"
                    >
                        Courses
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="#"
                    >
                        About
                    </Link>
                    <Link
                        className="text-sm font-medium hover:underline underline-offset-4"
                        href="#"
                    >
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Welcome to TechEd Hub
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Empower your tech journey with cutting-edge
                                    courses in web development and technical
                                    skills.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button>Explore Courses</Button>
                                <Button variant="outline">Learn More</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                            Featured Courses
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Modern Web Development
                                    </CardTitle>
                                    <CardDescription>
                                        Master the latest web technologies and
                                        frameworks
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Learn React, Next.js, and modern
                                        frontend practices.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Full-Stack JavaScript</CardTitle>
                                    <CardDescription>
                                        Become a versatile full-stack developer
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Cover Node.js, Express, and database
                                        integration.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Cloud Computing Essentials
                                    </CardTitle>
                                    <CardDescription>
                                        Harness the power of cloud platforms
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        Explore AWS, Azure, and cloud
                                        architecture principles.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                            Skills You'll Master
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                                <Code className="h-12 w-12 text-primary" />
                                <h3 className="text-xl font-bold">
                                    Frontend Development
                                </h3>
                                <p className="text-center text-gray-500 dark:text-gray-400">
                                    HTML, CSS, JavaScript, and modern frameworks
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                                <Server className="h-12 w-12 text-primary" />
                                <h3 className="text-xl font-bold">
                                    Backend Technologies
                                </h3>
                                <p className="text-center text-gray-500 dark:text-gray-400">
                                    Server-side programming and API development
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                                <Globe className="h-12 w-12 text-primary" />
                                <h3 className="text-xl font-bold">
                                    Web Performance
                                </h3>
                                <p className="text-center text-gray-500 dark:text-gray-400">
                                    Optimization techniques for faster websites
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Ready to Level Up Your Tech Skills?
                                </h2>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Join our community of learners and start
                                    your journey to becoming a web development
                                    expert.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button size="lg">Get Started</Button>
                                <Button size="lg" variant="outline">
                                    View All Courses
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 TechEd Hub. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="#"
                    >
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
