"use client";
import TableUser from "@/components/HomePage/table-user";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getAllUser } from "@/service/apiService";
import Modals from "@/components/HomePage/model";

export default function ManageUserPage() {
    const [listUser, setListUser] = useState([]);
    const [isFormAddUser, setIsFormAddUser] = useState(false);
    const [isFormUpdateUser, setIsFormUpdateUser] = useState(false);

    const [dataUserUpdate, setDataUserUpdate] = useState({});

    useEffect(() => {
        fetchAllUsers();
    }, []);

    const fetchAllUsers = async () => {
        const res = await getAllUser();

        if (res && res.statusCode === 200) {
            setListUser(res.usersList);
        }
    };

    return (
        <div className="flex justify-center items-center flex-col mt-28">
            <div className="w-1250 flex justify-between">
                <h1 className="text-4xl font-medium">Manage User</h1>
                <Button
                    variant="outline"
                    className="hover:bg-sky-400"
                    onClick={() => setIsFormAddUser(true)}
                >
                    Add User
                </Button>
            </div>
            <div className="w-1250 mt-12">
                <TableUser
                    data={listUser}
                    fetchAllUsers={fetchAllUsers}
                    setIsFormUpdateUser={setIsFormUpdateUser}
                    setDataUserUpdate={setDataUserUpdate}
                />
            </div>
            <Modals
                isFormAddUser={isFormAddUser}
                setIsFormAddUser={setIsFormAddUser}
                fetchAllUsers={fetchAllUsers}
                isFormUpdateUser={isFormUpdateUser}
                setIsFormUpdateUser={setIsFormUpdateUser}
                dataUpdate={dataUserUpdate}
                setDataUserUpdate={setDataUserUpdate}
            />
        </div>
    );
}
