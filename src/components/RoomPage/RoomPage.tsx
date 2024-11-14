"use client";
import { Calendar, User, CheckCircle, Check, Clock, X } from "lucide-react";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function RoomPage(props: any) {
    const router = useRouter();
    const { room } = props;
    console.log(Boolean(room.status));

    return (
        <div
            className="h-[186px] w-[270px] bg-e2dcdc rounded mt-3 p- cursor-pointer"
            style={{
                padding: "12px 12px 4px 12px",
            }}
            onClick={() => router.push(`/admin/room/${room.idRoom}`)}
        >
            <div
                className={clsx("rounded p-2", {
                    ["bg-bg52ab62"]: room.status,
                    ["bg-bg978e8e"]: !room.status,
                })}
            >
                <div className="flex justify-between items-center pb-8">
                    <h4 className="font-semibold">{room.roomName}</h4>
                    <span>{room.roomType}</span>
                </div>
                <div
                    className="flex justify-between items-center"
                    style={{
                        margin: "0 -2px 0 -4px",
                    }}
                >
                    {!room.status ? (
                        <>
                            <CheckCircle className="w-[40px] h-[40px]" />
                            <span>Phòng trống</span>
                        </>
                    ) : (
                        <>
                            <User className="w-[40px] h-[40px] text-white" />
                            <span>Phòng đã đặt</span>
                        </>
                    )}
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                    <Calendar />
                    <span className="ml-1">... ngày</span>
                </div>
                <div className="flex items-center">
                    {room.cleaned ? (
                        <>
                            <Check />
                            <span>Đã dọn dẹp</span>
                        </>
                    ) : (
                        <>
                            <X />
                            <span>Chưa dọn dẹp</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
