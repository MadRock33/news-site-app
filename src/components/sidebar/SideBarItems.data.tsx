import {LucideIcon} from "lucide-react";
import {Home, Hash, TrendingUp} from "lucide-react"
import {PAGES} from "@/config/pages.config";


export interface ISideBarItem {
    title: string;
    icon: LucideIcon;
    href: string;
    isActive: boolean;
}

export const SIDEBARMENUITEMS:ISideBarItem[] = [
    {
        title: "Home",
        icon: Home,
        href: PAGES.HOME,
        isActive: true,
    },
    {
        title: "Explore",
        icon: Hash,
        href: PAGES.HOME,
        isActive: false,
    },
    {
        title: "Trending",
        icon: TrendingUp,
        href: PAGES.HOME,
        isActive: false,
    },

]