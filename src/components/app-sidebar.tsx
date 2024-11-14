import { Calendar, Home, BookCheck, StickyNote, User } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
    {
        title: "Room",
        url: "/admin/room",
        icon: Home,
    },
    {
        title: "Staff",
        url: "/admin/staff",
        icon: User,
    },
    {
        title: "Service",
        url: "/admin/service",
        icon: Calendar,
    },
    {
        title: "Booking",
        url: "/admin/booking",
        icon: BookCheck,
    },
    {
        title: "Invoice",
        url: "/admin/invoice",
        icon: StickyNote,
    },
];

export function AppSidebar() {
    return (
        <Sidebar className="top-[62px]">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
