// import styled from "styled-components";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
height: 60px;
    padding-right: 15px;
    padding-left: 15px;
    border-bottom: 1px solid black;

    display: flex;
    align-items: center;
`;

export const StyledLink = styled(NavLink)`
width: 70px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    background-color: rgb(240,240,240);
    border-radius: 4px;
    border: 1px solid black;
    
    text-decoration: none;
    text-align: center;
    color: black;

    &:not(:last-child){
        margin-right: 15px;
    }

    &:hover{
        background-color: grey;
    }

    &.active {
        color: black;
        background-color: lightGrey;
    }
`;