import {
    FolderDown,
    CalendarDays,
    ScrollText,
    ListFilter,
    Search,
} from "lucide-react";

const fakeData = [
    {
        room: "P101",
        checkInDate: "10-07-2023",
        checkOutDate: "12-07-2023",
        type: "Processing",
    },
    {
        room: "P101",
        checkInDate: "13-07-2023",
        checkOutDate: "15-07-2023",
        type: "Pending",
    },
    {
        room: "P101",
        checkInDate: "10-07-2023",
        checkOutDate: "11-07-2023",
        type: "Completed",
    },
    {
        room: "P101",
        checkInDate: "10-07-2023",
        checkOutDate: "11-07-2023",
        type: "Completed",
    },
];

export default function page() {
    return (
        <div className="flex items-center flex-col px-8">
            <div className="flex justify-between w-full">
                <p>
                    <span className="text-stone-400 text-xl cursor-pointer">
                        Analytics
                    </span>
                    <span className="text-xl mx-4">/</span>
                    <span className="text-sky-500 text-xl cursor-pointer">
                        Shop
                    </span>
                </p>
                <div className="flex rounded-full bg-bg0d6efd justify-center items-center pl-3 hover:bg-bg0a58ca">
                    <FolderDown className="text-white" />
                    <button className="btn rounded-full text-white active:border-none">
                        Download CSV
                    </button>
                </div>
            </div>
            <div className="flex justify-between w-full gap-2 mt-4">
                <div className="w-[280px] h-[128px] rounded-lg bg-bgebe9e9 flex justify-between items-center px-[24px]">
                    <div className="w-[80px] h-[80px] bg-bgcfe8ff flex justify-center items-center rounded-lg">
                        <CalendarDays className="text-0a58ca w-[36px] h-[36px]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold">1,074</span>
                        <span className="text-xl font-normal">Padid Order</span>
                    </div>
                </div>
                <div className="w-[280px] h-[128px] rounded-lg bg-bgebe9e9 flex justify-between items-center px-[24px]">
                    <div className="w-[80px] h-[80px] bg-bgcfe8ff flex justify-center items-center rounded-lg">
                        <CalendarDays className="text-0a58ca w-[36px] h-[36px]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold">1,074</span>
                        <span className="text-xl font-normal">Padid Order</span>
                    </div>
                </div>
                <div className="w-[280px] h-[128px] rounded-lg bg-bgebe9e9 flex justify-between items-center px-[24px]">
                    <div className="w-[80px] h-[80px] bg-bgcfe8ff flex justify-center items-center rounded-lg">
                        <CalendarDays className="text-0a58ca w-[36px] h-[36px]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold">1,074</span>
                        <span className="text-xl font-normal">Padid Order</span>
                    </div>
                </div>
                <div className="w-[280px] h-[128px] rounded-lg bg-bgebe9e9 flex justify-between items-center px-[24px]">
                    <div className="w-[80px] h-[80px] bg-bgcfe8ff flex justify-center items-center rounded-lg">
                        <CalendarDays className="text-0a58ca w-[36px] h-[36px]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold">1,074</span>
                        <span className="text-xl font-normal">Padid Order</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-4 mt-3">
                <div className="w-3/5 px-8 bg-bgebe9e9 rounded-lg">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center">
                            <ScrollText className="w-[28px] h-[28px] cursor-pointer" />
                            <span className="font-bold text-2xl ml-4">
                                Recent Orders
                            </span>
                        </div>
                        <div className="flex items-center">
                            <ListFilter className="w-[28px] h-[28px] cursor-pointer" />
                            <Search className="w-[28px] h-[28px] ml-4 cursor-pointer" />
                        </div>
                    </div>
                    <table className="w-full">
                        <thead className="border-b-[1px] border-red-200">
                            <tr className="font-bold">
                                <th className="py-3">Room</th>
                                <th className="py-3">Checkin Date</th>
                                <th className="py-3">Checkout Date</th>
                                <th className="py-3">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fakeData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="py-3">{item.room}</td>
                                        <td className="py-3">
                                            {item.checkInDate}
                                        </td>
                                        <td className="py-3">
                                            {item.checkOutDate}
                                        </td>
                                        <td className="py-3">
                                            {item.type !== "Completed" ? (
                                                item.type === "Pending" ? (
                                                    <button className="btn btn-warning rounded-full">
                                                        Pending
                                                    </button>
                                                ) : (
                                                    <button className="btn btn-primary rounded-full">
                                                        Processing
                                                    </button>
                                                )
                                            ) : (
                                                <button className="btn btn-success rounded-full">
                                                    Completed
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="w-2/5 bg-bgebe9e9 rounded-lg">
                    <div className="flex justify-between items-center"></div>
                </div>
            </div>
        </div>
    );
}
