"use client";

import { getDataRoom } from "@/service/apiService";
import { Sparkle, DollarSign, PencilLine } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Form from "react-bootstrap/Form";
import { useImmer } from "use-immer";

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const router = useRouter();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const initService = [
        { service: "Ăn sáng", quantity: 2, price: 10 },
        { service: "Ăn tối", quantity: 2, price: 20 },
        { service: "Để xe", quantity: 1, price: 5 },
    ];

    const [data, setData] = useState([]);
    const [items, setItems] = useImmer(initService);

    useEffect(() => {
        fetchDataDetailRoom();
    }, []);

    const fetchDataDetailRoom = async () => {
        const res = await getDataRoom(id);
        setData(res.data);
    };

    const handleInputChange = (e: any, index: number, field: any) => {
        const newItems: any = [...items];
        newItems[index][field] = e.target.value;
        setItems(newItems);
    };

    const totalCoin = useMemo(() => {
        const result = initService.reduce((a, b) => a + b.price, 0);
        return result;
    }, [initService]);

    return (
        <div
            className="w-[800px] h-[400px] rounded"
            style={{
                border: "1px solid #ccc",
                padding: "0 24px 24px",
            }}
        >
            <h1 className="text-center text-3xl text-blue-600 font-bold my-2">
                {data?.roomName ?? "P000"}
            </h1>
            <div className="bg-slate-300 rounded p-3">
                <div className="flex items-center justify-around gap-8">
                    <div className="flex items-center">
                        <Sparkle className="w-[32px] h-[32px]" />
                        <span>{data?.roomType}</span>
                    </div>
                    <div className="flex items-center">
                        <PencilLine className="w-[32px] h-[32px]" />
                        <span>{data?.description}</span>
                    </div>
                    <div className="flex items-center">
                        <DollarSign className="w-[32px] h-[32px]" />
                        <span>{data?.price}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-[400px] h-[200px] bg-white rounded mt-4 relative">
                        <div className="container mx-auto">
                            <div className="flex flex-col">
                                <div className="flex w-full">
                                    <div className="w-3/6 font-bold">
                                        Dịch vụ
                                    </div>
                                    <div className="w-1/6 font-bold">SL</div>
                                    <div className="w-2/6 font-bold">
                                        Thành tiền
                                    </div>
                                </div>
                                {items.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex w-full py-1 border-b-2 border-slate-500"
                                    >
                                        <input
                                            type="text"
                                            className="w-3/6 border-none focus:outline-none"
                                            value={item.service}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    index,
                                                    "service"
                                                )
                                            }
                                        />
                                        <input
                                            type="number"
                                            className="w-1/6 border-none focus:outline-none"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    index,
                                                    "quantity"
                                                )
                                            }
                                        />
                                        <input
                                            type="text"
                                            className="w-2/6 border-none focus:outline-none"
                                            value={`${item.price}$`}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    e,
                                                    index,
                                                    "price"
                                                )
                                            }
                                        />
                                    </div>
                                ))}
                                <div className="absolute bottom-3 right-3 flex flex-row">
                                    <span className="font-bold mr-2">Tổng</span>
                                    <span>{`${totalCoin}$`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[200px] bg-white rounded p-2 flex justify-center items-center">
                        <Form className="mt-3">
                            <Form.Group className="mb-3">
                                <Form.Label className="text-xs text-blue-700">
                                    Cập nhật tình trạng phòng
                                </Form.Label>
                                {data.status ? (
                                    <Form.Control
                                        type="text"
                                        value={"Phòng đã đặt"}
                                        className="text-xs w-65% ml-auto"
                                    />
                                ) : (
                                    <Form.Select className="text-xs w-65% ml-auto">
                                        <option value="0">Phòng trống</option>
                                        <option value="1">Phòng đã đặt</option>
                                    </Form.Select>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-xs text-blue-700">
                                    Cập nhật tình trạng dọn dẹp phòng
                                </Form.Label>
                                <Form.Select className="text-xs w-65% ml-auto">
                                    <option value="true">Đã dọn dẹp</option>
                                    <option value="false">Chưa dọn dẹp</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-10 mt-[10px] items-center">
                <button className="btn btn-success min-w-120">
                    Nhận phòng
                </button>
                <button className="btn btn-danger min-w-120">Lưu</button>
                <button
                    className="btn btn-warning min-w-120"
                    onClick={() => router.push("/admin/room")}
                >
                    Thoát
                </button>
            </div>
        </div>
    );
}
