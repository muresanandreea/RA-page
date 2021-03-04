import React,{useEffect, useState} from 'react';
//import ContactUs from './ContactUs';
import {Backdrop, Modal, ModalContentWrapper,ContactUsButton} from './ContactUsModal.styles.js';

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
                            {/*<ContactUs text={text}/>*/}
                            <ContactUsButton onClick={closeModal}>X
                            </ContactUsButton>
                        </ModalContentWrapper>
                    </Modal>
                </Backdrop>
            )}
        </>)};