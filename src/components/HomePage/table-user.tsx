import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { deleteUser } from "@/service/apiService";
import { toast } from "@/hooks/use-toast";

interface Iprops {
    data: TypeUser[];
    fetchAllUsers : () => void,
    setIsFormUpdateUser: (v: boolean) => void,
    setDataUserUpdate: (v: TypeUser) => void,

}
export default function TableUser(props: Iprops) {
    const { data, fetchAllUsers, setIsFormUpdateUser, setDataUserUpdate } = props;
    const handleDeleteuser = async (userId:number) => {
        if(confirm("Are you sure you want to delete?") == true) {
            const res = await deleteUser(userId)
            if(res && res.statusCode===200) {
                toast({
                    description: res.message,
                    className: 'bg-rose-600'
                })
                fetchAllUsers()
            }            
        }
        
    }
    const handleClickBtnUpdate = (user: TypeUser) =>{
        setIsFormUpdateUser(true)
        setDataUserUpdate(user)
    }
    return (
        <Table>
            <TableCaption className="text-center">A list of your recent user.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Password</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-center">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((user, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.password}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell className="text-center">
                            <Button className="bg-cyan-500 hover:bg-cyan-400 mr-2" onClick={() => handleClickBtnUpdate(user)}>
                                Update
                            </Button>
                            <Button variant={"destructive"} onClick={() => handleDeleteuser(user.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
