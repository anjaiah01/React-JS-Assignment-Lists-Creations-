import styled from "styled-components";

export const ListItemContainer = styled.li`
    width: 200px;
    list-style-type:none;
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    padding:10px;
    margin-bottom:10px;
    border-radius:5px;
    line-height:1.8rem;
    border: 1px solid rgb(199, 202, 202);
`
export const Name = styled.p`
    font-weight:500;
    margin:0px;

`
export const Description = styled.p`
    font-weight:300;
    margin:0px;
`