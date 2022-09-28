import styled from "styled-components";
import { StateListTask } from "../../hooks/useStateTask";

export const ContainerHeader = styled.header`
    background-color: #00bfff4d;
    min-height: 4rem;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 0 20px;
    }

    @media(max-width: 660px) {
        flex-direction: column;
        gap: 20px;
        
        width: 100vw;

        padding: 10px;
    }
`

export const ButtonToggleShowTask = styled.button<StateListTask>`
    max-width: 6rem;
    width: 100vw;
    height: 2.5rem;

    cursor: pointer;

    border: 1px solid #fff;
    border-radius: 5px;
    outline: none;

    color: #fff;
    background-color: transparent;

    background-color: ${ (props) => props.done && '#00FF00'};
    color: ${ (props) => props.done && '#000'};
    border-color: ${ (props) => props.done && 'transparent'};

    background-color: ${ (props) => props.toDo && '#FFFF00'};
    color: ${ (props) => props.toDo && '#000'};
    border-color: ${ (props) => props.toDo && 'transparent'};

    background-color: ${ (props) => props.forLater && '#79CDCD'};
    color: ${ (props) => props.forLater && '#000'};
    border-color: ${ (props) => props.forLater && 'transparent'};

    transition: all 0.5s;
    
    &:hover {
        background-color: #fff;
        color: #000;
    }
    
`