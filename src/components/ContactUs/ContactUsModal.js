import React,{useEffect, useState, useImperativeHandle} from 'react';
import ContactUsForm from './ContactUsForm';
import {Backdrop, Modal, ModalContentWrapper,LogoWrapper} from './ContactUsModal.styles.js';

export const ContactUsModal = ({defaultOpened=false, showModal, closeModal}, ref) => {
    const [isOpen, setIsOpen] = useState(defaultOpened);
    const [contactUsModal, setContactUsModal] = useState(false);

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