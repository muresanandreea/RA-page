import React, {useRef} from 'react';
import {FormContact, InputWrapper,ContactUsFormWrapper,Title} from './ContactUsModal.styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import {
    Icon,
    PortofolioMobileBox,
    SeeMoreButton,
    SeeMoreText
} from "../../Homepage/PortofolioSection/PortofolioSection.style";

const ContactUsForm = ({showModal}) =>  {
    const fullNameRef=useRef(null);
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
    }

    return (
        <ContactUsFormWrapper>
            <Title>Let's get in touch !</Title>
            <FormContact
                action=""
                method="post"
                enctype = "multipart/form-data"
                onSubmit = {e => handleSubmitContactUs(e)}>
                <InputWrapper>
                    <TextField
                        label="Your full name"
                        id="outlined-size-small"
                        defaultValue=" "
                        variant="outlined"
                        name="fullName"
                        size="small"
                        ref={fullNameRef}
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
                        ref={phoneRef}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </InputWrapper>
                <InputWrapper>
                    <TextField
                        label="Your full name"
                        id="outlined-size-small"
                        defaultValue=" "
                        variant="outlined"
                        name="email"
                        ref={emailRef}
                        size="small"
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
                        ref={messageRef}
                    />
                </InputWrapper>
            </FormContact>
            <SeeMoreButton>
                <SeeMoreText>Submit
                    <Icon>
                        <i className="fas fa-chevron-right"/>
                    </Icon>
                </SeeMoreText>
            </SeeMoreButton>
        </ContactUsFormWrapper>
    )
    }

    export default ContactUsForm;