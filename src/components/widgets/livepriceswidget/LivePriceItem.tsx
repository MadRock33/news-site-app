import {ILivePriceItem} from "@/components/widgets/livepriceswidget/LivePriceItems.data";
import {TrendingDown, TrendingUp} from "lucide-react";

const LivePriceItem = ({symbol, name, price, change, icon}: ILivePriceItem) => {
    return (
        <div className={'divide-y divide-gray-100'}>

            <div key={symbol} className={`px-4 py-3 transition-colors cursor-pointer hover:bg-gray-50`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm">
                            {icon}
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span
                                    className={`text-sm  text-gray-900`}>{name}</span>
                            </div>
                            <div
                                className={`text-xs text-gray-500`}>{symbol}</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className={`text-sm text-gray-900`}>{price}</div>
                        <div
                            className={`flex items-center gap-1 text-xs ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {change >= 0 ? (
                                <TrendingUp className="w-3 h-3"/>
                            ) : (
                                <TrendingDown className="w-3 h-3"/>
                            )}
                            <span>
                      {change >= 0 ? '+' : ''}{change}%
                    </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LivePriceItem;