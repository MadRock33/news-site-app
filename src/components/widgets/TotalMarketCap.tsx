import {TrendingUp} from "lucide-react";


const TotalMarketCap = () => {
    return (
        <div className="sticky top-0 pt-2">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-5 text-white">
                <h3 className="text-sm mb-1 opacity-90">Total Market Cap</h3>
                <div className="text-3xl mb-2">$2.1T</div>
                <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+3.5% (24h)</span>
                </div>
            </div>
        </div>
    )
};

export default TotalMarketCap;