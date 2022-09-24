import styled from "styled-components";

export const List = styled.ul`
    margin: auto;
    width: 100%;

    li {
        height: 4rem;
        max-width: 75%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 1.25rem;
        margin: 1rem auto;
        
        font-weight: 400;
        font-size: 1.2rem;

        border: 1px solid #fff;
        border-radius: 3px;

        transition: all 0.5s;

        &:hover {
            filter: brightness(0.9);
            background-color: #F5F5F5;
            color: #000;
        }

        img {
            cursor: pointer;
        }
    }
`