import styled from "styled-components";

export const MainContainer = styled.div`
min-height:100vh;
max-width:100vw;
`

export const HeaderTextContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-text:center;
`
export const Heading = styled.h1`
    color:black;
    font-weight:700;
`
export const NewListButton = styled.button`
    background-color:blue;
    border:0px;
    padding: 12px 18px;
    border-radius:10px;
    color: white;
`

export const MainListsContainer = styled.ul`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;

`
export const EachListContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;  // Change from center to flex-start
    align-items: center;
    background-color: #d3e6f2;
    margin-right: 20px;
    height: 500px;
    overflow-y: scroll;
`;
export const Checkbox = styled.input`
    margin:4px;
`
export const ListHeadingContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
`