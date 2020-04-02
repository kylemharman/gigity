import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid ${props => props.theme.color.grey};
    padding: 3rem;
    margin-top: 2rem;
    width: 400px;
    border-radius: 3px;

    h4 {
        font-weight: 300;
        font-size: ${props => props.theme.fontSize.l};
        margin: 0;
        text-align: left;
        padding: 5px;
        background-color: ${props => props.theme.color.light};
        position: absolute;
        top: -30px;
        left: 40px;
        z-index: 10px;
    }

    a {
        color: ${props => props.theme.color.primary};
    }

    @media (max-width: 425px) {
        width: 300px;
        padding: 2rem;
    }
`;
