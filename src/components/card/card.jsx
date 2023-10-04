import React from "react";
import style from "./card.module.scss"
import { Modal } from "../ui/modal";
import { Form } from "../form";

export const Card = ({ firstName, lastName, id, setData }) => {
    const [open, setOpen] = React.useState(false)

    const deleteItem = () => {
        setData((p) => p.filter((item) => item.id !== id))
    }

    const openModal = () => {
        
        setOpen(true)
    }

    return (
        <>
            <div>
                <b><h3>{firstName}</h3></b>
                <h5>{lastName}</h5>
                <button onClick={deleteItem}>Delet</button>
                <button onClick={openModal}>Edit</button>
            </div>
            <Modal setOpen={setOpen} isOpen={open}>
                <Form edit id={id} close={setOpen} setData={setData} />
            </Modal>
        </>
    );
}