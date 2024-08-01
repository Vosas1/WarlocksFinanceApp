import React from 'react';
import { Container, Box } from '@mui/material';
import '../Styles/ContactUsPage.css';
 
// ContactUsPage component: A form for users to contact
const ContactUsPage = () => {
    return (
        <Container component="main" maxWidth="sm" className="ContactUsPage">
            <Box className="container">
               
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdjDZhuCHmtuVAD5EYPwjJCbtoBo2XQGv_DUh1k_RYvxAyaLw/viewform?embedded=true"
                    width="100%"
                    height="824"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0">
                    Loading…
                </iframe>
            </Box>
        </Container>
    );
};
 
export default ContactUsPage;