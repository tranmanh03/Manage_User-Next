import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addNewUser, updateUser } from "@/service/apiService";
import { toast } from "@/hooks/use-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface IProps {
    isFormAddUser: boolean;
    setIsFormAddUser: (v: boolean) => void;
    fetchAllUsers: () => void;
    isFormUpdateUser: boolean;
    setIsFormUpdateUser: (v: boolean) => void;
    dataUpdate: TypeUser;
    setDataUserUpdate: (v: TypeUser) => void;
}

function Modals(props: IProps) {
    const {
        isFormAddUser,
        setIsFormAddUser,
        fetchAllUsers,
        isFormUpdateUser,
        setIsFormUpdateUser,
        dataUpdate,
        setDataUserUpdate,
    } = props;

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("USER");

    const [isShowPass, setIsShowPass] = useState(false);

    useEffect(() => {
        setEmail(dataUpdate.email);
        setName(dataUpdate.name);
        setPassword(dataUpdate.password);
        setRole(dataUpdate.role);
    }, [dataUpdate]);

    const handleClose = () => {
        setEmail("");
        setName("");
        setPassword("");
        setRole("");
        setIsFormAddUser(false);
        if (isFormUpdateUser) {
            setIsFormUpdateUser(false);
            setDataUserUpdate({});
        }
    };

    const handleAddUser = async () => {
        if(!email) {
            toast({
                description: "Not empty email!",
                className: "bg-red-500",
            })
            return
        }
        if(!name) {
            toast({
                description: "Not not username!",
                className: "bg-red-500",
            })
            return 
        }
        if(!password) {
            toast({
                description: "Not empty password!",
                className: "bg-red-500",
            })
            return 
        }
        const res = await addNewUser(email, name, password, role);
        if (res && res.statusCode === 200) {
            setEmail("");
            setName("");
            setPassword("");
            setRole("");
            toast({
                description: res.message,
                className: "bg-blue-500",
            });
            setIsFormAddUser(false);
            fetchAllUsers();
        }
    };
    const handleUpdateUser = async () => {
        if(!email) {
            toast({
                description: "Not empty email!",
                className: "bg-red-500",
            })
            return
        }
        if(!name) {
            toast({
                description: "Not not username!",
                className: "bg-red-500",
            })
            return 
        }
        if(!password) {
            toast({
                description: "Not empty password!",
                className: "bg-red-500",
            })
            return 
        }
        const res = await updateUser(
            dataUpdate.id,
            email,
            name,
            password,
            role
        );
        if (res && res.statusCode === 200) {
            toast({
                description: res.message,
                className: "bg-emerald-500",
            });
            setIsFormUpdateUser(false);
            setDataUserUpdate({});
            fetchAllUsers();
        }
    };

    if (isFormUpdateUser) {
        return (
            <>
                <Modal show={isFormUpdateUser} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update User</Modal.Title>
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
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                {!isShowPass ? (
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
                                )}
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
                            onClick={() => handleUpdateUser()}
                        >
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    return (
        <>
            <Modal show={isFormAddUser} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
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
                                ))
                            }
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
                    <Button variant="primary" onClick={() => handleAddUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Modals;
