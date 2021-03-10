import React,{useEffect, useState} from 'react';
import ContactUsForm from './ContactUsForm';
import {Backdrop, Modal, ModalContentWrapper,LogoWrapper} from './ContactUsModal.styles.js';

export const ContactUsModal = ({text, showModal, closeModal}) => {
    const [shouldRender, setShouldRender] = useState(showModal);
    const [contactUsModal, setContactUsModal] = useState(false);

    const onAnimationEnd = () => {
        if (!showModal) {
            setShouldRender(false);
        }
    };

    useEffect( () => {
        if (showModal){
            setShouldRender(true);
        }
    }, [showModal]);

    return (
        <>
            {shouldRender && (
                <Backdrop showBackdrop={showModal}>
                    <Modal showModal={showModal} onAnimatedEnd={onAnimationEnd}>
                        <ModalContentWrapper>
                            <ContactUsForm showModal={showModal}/>
                            <LogoWrapper/>
                        </ModalContentWrapper>
                    </Modal>
                </Backdrop>
            )}
        </>)};