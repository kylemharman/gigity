import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "../styles/GlobalStyles";

const Landing = () => {
    useEffect(() => {
        axios
            .get("") // ticket master api here.
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
    }, []);

    return (
        <Container>
            <h1>Landing</h1>
        </Container>
    );
};

export default Landing;
