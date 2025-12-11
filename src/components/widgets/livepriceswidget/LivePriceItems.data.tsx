import {LucideIcon} from "lucide-react";
import {Home, Hash, TrendingUp} from "lucide-react"
import {PAGES} from "@/config/pages.config";


export interface ILivePriceItem {
    symbol: string;
    name: string;
    price: string;
    change: number;
    icon: string;
}

export const LIVEPRICEITEMS:ILivePriceItem[] = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$45,234.56', change: 5.67, icon: '₿' },
    { symbol: 'ETH', name: 'Ethereum', price: '$2,987.34', change: 3.45, icon: 'Ξ' },
    { symbol: 'SOL', name: 'Solana', price: '$98.76', change: -1.23, icon: '◎' },
    { symbol: 'BNB', name: 'Binance', price: '$312.45', change: 2.34, icon: '◆' },
    { symbol: 'ADA', name: 'Cardano', price: '$0.58', change: 4.12, icon: '₳' },
    { symbol: 'XRP', name: 'Ripple', price: '$0.62', change: -0.87, icon: '✕' },
    { symbol: 'DOGE', name: 'Dogecoin', price: '$0.09', change: 8.45, icon: 'Ð' },
    { symbol: 'AVAX', name: 'Avalanche', price: '$37.23', change: 6.78, icon: '▲' },

];