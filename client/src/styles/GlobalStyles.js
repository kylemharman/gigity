import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.center && "center"};
    margin: 3rem;
`;
