import styled from "styled-components";
// import { ShowListStiuation } from "../TaskList";

export const ContainerHeader = styled.header`
    background-color: #00bfff4d;
    height: 4rem;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 0 20px;
    }
`

export const ButtonToggleShowTask = styled.button`
    max-width: 6rem;
    width: 100vw;
    height: 2.5rem;

    border: 1px solid #fff;
    border-radius: 5px;
    outline: none;

    color: #fff;
    background-color: transparent;
    
`