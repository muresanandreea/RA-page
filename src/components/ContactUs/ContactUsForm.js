import React, {useRef} from 'react';
import {FormContact, InputWrapper,ContactUsFormWrapper,Title} from './ContactUsModal.styles';
/*import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import {
    Icon,
    PortofolioMobileBox,
    SeeMoreButton,
    SeeMoreText
} from "../../Homepage/PortofolioSection/PortofolioSection.style";*/

const ContactUsForm = ({showModal}) =>  {
/*    const fullNameRef=useRef(null);
    const phoneRef=useRef(null);
    const emailRef=useRef(null);
    const messageRef=useRef(null);

    const handleSubmitContactUs = (e) => {
        let formValues = {
            fullName: fullNameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            message: messageRef.current.value
        }
    }*/


    return (
        <ContactUsFormWrapper>
            <Title>Let's get in touch !</Title>
            <form action="https://formspree.io/f/xwkwgbnq" method="POST">
                <input type="text" name="name"/>
                    <input type="email" name="_replyto"/>
                        <input type="submit" value="Send"/>
            </form>
        </ContactUsFormWrapper>
    )
    }

    export default ContactUsForm;