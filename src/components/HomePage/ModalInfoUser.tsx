import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "@/hooks/use-toast";
import { updateUser } from "@/service/apiService";
import { useImmer } from "use-immer";
import { useAppDispatch } from "@/store/store";
import { doUpdateUserInfor } from "@/store/authSlice";

function ModalInfoUser(props: any) {
    const { dataUpdate, show, setShow } = props;

    const dispatch = useAppDispatch();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [data, setData] = useImmer(dataUpdate);

    const [isShowPass, setIsShowPass] = useState(false);

    useEffect(() => {
        setEmail(dataUpdate?.email);
        setName(dataUpdate?.name);
        setPassword(dataUpdate?.password);
        setRole(dataUpdate?.role);
    }, [data]);

    const handleClose = () => {
        setEmail("");
        setName("");
        setPassword("");
        setRole("");
        setShow(false);
        setData({});
    };

    const handleUpdateUserInfor = async () => {
        if (!email) {
            toast({
                description: "Not empty email!",
                className: "bg-red-500",
            });
            return;
        }
        if (!name) {
            toast({
                description: "Not not username!",
                className: "bg-red-500",
            });
            return;
        }
        if (!password) {
            toast({
                description: "Not empty password!",
                className: "bg-red-500",
            });
            return;
        }
        const res = await updateUser(
            dataUpdate.id,
            email,
            name,
            password,
            role
        );
        if (res && res.statusCode === 200) {
            dispatch(doUpdateUserInfor({ email, name, password, role }));
            toast({
                description: res.message,
                className: "bg-emerald-500",
            });
            setData({});
            setShow(false);
        }
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update User Infor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 relative">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type={isShowPass ? "text" : "password"}
                                placeholder="Enter password..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {password &&
                                (!isShowPass ? (
                                    <span
                                        onClick={() => setIsShowPass(true)}
                                        className="absolute bottom-2 right-3 text-xl"
                                    >
                                        <IoMdEye />
                                    </span>
                                ) : (
                                    <span
                                        onClick={() => setIsShowPass(false)}
                                        className="absolute bottom-2 right-3 text-xl"
                                    >
                                        <IoMdEyeOff />
                                    </span>
                                ))}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Role</Form.Label>
                            <Form.Select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleUpdateUserInfor()}
                    >
                        Save changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalInfoUser;
