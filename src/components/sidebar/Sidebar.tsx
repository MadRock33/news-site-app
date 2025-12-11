import SidebarItem from "./SidebarItem";
import {SIDEBARMENUITEMS} from "@/components/sidebar/SideBarItems.data";
import Logo from "@/components/Logo";








export default function Sidebar() {

    return (
        <div className={`sticky top-0 h-screen w-64 px-4 py-6 flex flex-col border-r bg-white border-gray-200`}>
            <div className="mb-6 px-3">
                <div className="flex items-center gap-3">
                    <Logo/>
                    <span className={`text-lg 'text-gray-900'}`}>CryptoNet</span>
                </div>
            </div>
            <nav className="sidebar flex-1 space-y-1">
                {
                    SIDEBARMENUITEMS.map((item) =>  <SidebarItem key={item.title} title={item.title} icon={item.icon} href={item.href} isActive={item.isActive}/>)
                }
            </nav>
        </div>
    )
}