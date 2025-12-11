import Link from "next/link";
import {ISideBarItem} from "@/components/sidebar/SideBarItems.data";


const SidebarItem = ({title, icon:Icon, href, isActive}:ISideBarItem) => {
    return (
        <Link className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg 
        transition-colors ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`
        } href={href}>
            <Icon/>
            <span>{title}</span>
        </Link>


    );
};

export default SidebarItem;