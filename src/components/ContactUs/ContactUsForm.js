import React, {useRef} from 'react';
import {FormContact, InputWrapper,ContactUsFormWrapper,Title} from './ContactUsModal.styles';
import TextField from '@material-ui/core/TextField';
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
                <InputWrapper>
                    <TextField
                        label="Your full name"
                        id="outlined-size-small"
                        defaultValue=" "
                        variant="outlined"
                        name="fullName"
                        size="small"
                    />
                </InputWrapper>
                <InputWrapper>
                    <TextField
                        id="outlined-size-small"
                        variant="outlined"
                        label="Your phone number"
                        type="number"
                        name="phone"
                        size="small"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </InputWrapper>
                <InputWrapper>
                    <TextField
                        label="Your email"
                        id="outlined-size-small"
                        defaultValue=" "
                        variant="outlined"
                        size="small"
                        name="_replyto"
                    />
                </InputWrapper>
                <InputWrapper>
                    <TextField
                        id="outlined-multiline-static"
                        label="Your message to us"
                        multiline
                        rows={4}
                        defaultValue=" "
                        variant="outlined"
                        name="message"
                    />
                </InputWrapper>
                        <input type="submit" value="Send"/>
            </form>
        </ContactUsFormWrapper>
    )
    }
    export default ContactUsForm;