import styled from "styled-components";

export const Container = styled.div`

    max-width: 30rem;
    width: 100%;
    
    margin: 3rem auto;

    display: flex;
    flex-wrap: wrap;
    gap: 20px 0;
    justify-content: center;

`

export const Button = styled.button`
    background-color: #00BFFF;
    color: white;
    border: none;

    font-weight: bolder;
    font-size: 1rem;
    line-height: 1.5rem;

    margin: auto 1rem;

    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    cursor: pointer;

`

export const Input = styled.input`
    max-width: 25rem;
    width: 100%;
    height: 3rem;

    border: none;
    outline: none;
    border-radius: 5px;

    padding: 0 1rem;
`