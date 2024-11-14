"use client";
import ModalInfoUser from "@/components/HomePage/ModalInfoUser";
import { useAppSelector } from "@/store/store";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Profile() {
    const account = useAppSelector((state: any) => state.auth.account);
    const [show, setShow] = useState(false);
    return (
        <>
            <Card className="text-center mt-48">
                <Card.Header>UserId: -----{account?.id}-----</Card.Header>
                <Card.Body>
                    <Card.Text>{account?.name}</Card.Text>
                    <Card.Title>{account?.email}</Card.Title>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Button variant="primary" onClick={() => setShow(true)}>
                        Update
                    </Button>
                </Card.Footer>
            </Card>
            <ModalInfoUser dataUpdate={account} show={show} setShow={setShow} />
        </>
    );
}
