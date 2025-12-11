import {LIVEPRICEITEMS} from "./LivePriceItems.data";
import LivePriceItem from "@/components/widgets/livepriceswidget/LivePriceItem";


const LivePricesWidget = () => {
    return (
        <div className={`sticky top-38 rounded-xl overflow-hidden border transition-colors bg-white border-gray-200}`}>
            <div className={`px-4 py-3 border-b border-gray-200`}>
                <h3 className={`text-sm text-gray-900`}>Live Prices</h3>
            </div>
            <div className={"divide-y divide-gray-700"}></div>
                {LIVEPRICEITEMS.map((item) => (
                    <LivePriceItem key={item.symbol} symbol={item.symbol} name={item.name} price={item.price} change={item.change} icon={item.icon} />
                ))}



        </div>
    );
};

export default LivePricesWidget;