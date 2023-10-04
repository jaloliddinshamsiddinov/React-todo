import React from "react";
import "./modal.scss"

export const Modal = ({ children, isOpen, setOpen }) => {
    const closeModal = () => {
        setOpen(false)
    }

    if (!isOpen) {
        return null;
    }
    return (
        <>
            <div className="modal">
                <div className="modal_content">
                    <button onClick={closeModal}>x</button>
                    {children}
                </div>
            </div>
        </>
    );
}