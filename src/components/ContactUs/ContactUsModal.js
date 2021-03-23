import React,{useEffect, useState} from 'react';
import ContactUsForm from './ContactUsForm';
import {Backdrop, Modal, ModalContentWrapper,LogoWrapper} from './ContactUsModal.styles.js';

export const ContactUsModal = ({defaultOpened=false, showModal, closeModal}) => {
    const [isOpen, setIsOpen] = useState(defaultOpened);

    const onAnimationEnd = () => {
        if (!showModal) {
            setIsOpen(false);
        }
    };

    useEffect( () => {
        if (showModal){
            setIsOpen(true);
        }
    }, [showModal]);

    return (
        <>
            {isOpen && (
                <Backdrop showBackdrop={showModal}>
                    <Modal showModal={showModal} onAnimatedEnd={onAnimationEnd} onClose={closeModal}>
                        <ModalContentWrapper>
                            <ContactUsForm/>
                            <LogoWrapper/>
                            <div onClick={closeModal} className="closeButton">X</div>
                        </ModalContentWrapper>
                    </Modal>
                </Backdrop>
            )}
        </>)};