"use client";
import RoomPage from "@/components/RoomPage/RoomPage";
import { getAllRoom } from "@/service/apiService";
import { useEffect, useState } from "react";

export default function Room() {
    const [listRoom, setListRoom] = useState([]);
    useEffect(() => {
        fetchAllRoom();
    }, []);

    const fetchAllRoom = async () => {
        const res = await getAllRoom();
        setListRoom(res);
    };
    return (
        <>
            {listRoom && listRoom.length > 0 ? (
                <div className="grid grid-cols-3 gap-4 ml-24 mt-10">
                    {listRoom.map((room, index) => {
                        return <RoomPage room={room} key={index} />;
                    })}
                </div>
            ) : (
                <div>No data...</div>
            )}
        </>
    );
}
