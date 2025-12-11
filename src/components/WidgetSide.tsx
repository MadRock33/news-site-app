import TotalMarketCap from "./widgets/TotalMarketCap"
import LivePricesWidget from "./widgets/livepriceswidget/LivePricesWidget";
const WidgetSide = () => {
    return (
        <div className="widgetSide w-80 px-6 py-6 space-y-4 bg-gray-50 ">
            <TotalMarketCap/>
            <LivePricesWidget/>
        </div>
    );
};

export default WidgetSide;