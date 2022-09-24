import styled from "styled-components";

interface Done {
    done: boolean
}

export const List = styled.ul`
    margin: auto;
    width: 100%;  
`

export const ItemList = styled.li<Done>`
    height: 4rem;
    max-width: 75%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.25rem;
    margin: 1rem auto;

    font-weight: 400;
    font-size: 1.2rem;

    border: ${(props) => props.done
            ? '1px solid #00FF7F' : '1px solid 	#FFFF00'};
    border-radius: 3px;

    transition: all 0.5s;

    color: ${(props) => props.done
            ? '#00FF7F' : '#fff'};

    background-color: ${(props) => props.done
            ? '#fff' : 'transparent'};

    text-decoration: ${(props) => props.done
            ? 'line-through' : 'none'};


    &:hover {
        filter: brightness(0.9);

        color: ${(props) => props.done
            ? '#00FF7F' : '#000'};

        background-color: ${(props) => props.done
            ? '#FFFAFA' : '#F5F5F5'};

        select {
            color: #000;
            text-decoration: none;
        }
    }

    img {
        cursor: pointer;
    }

    div {
        display: flex;
        align-items: center;

        gap: 0 20px;
    }

`

export const Select = styled.select`
    height: 1.5rem;
    width: 7rem;

    border-radius: 6px;
    border: 1px solid white;

    padding: 0 3px;

    outline: none;
    font-family: inherit;
    color: white;
    background: transparent;
`

export const ContainerTask = styled.span`

    @media(max-width: 970px) {
        padding: 10px;
    }
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;

`