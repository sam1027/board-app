
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonStyle = styled.button`
    position: relative;
    border: none;
    display: inline-block;
    padding: 15px 30px;
    border-radius: 15px;
    font-family: "paybooc-Light", sans-serif;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    font-weight: 600;
    transition: 0.25s;
    background-color: #77af9c;
    color: #d7fff1;
    cursor: pointer;
`;

interface ButtonProps {
    type?: 'submit'|'button'|'reset',
    text: string,
    link?: string,
}

export default function Button ({type, text, link}:ButtonProps) {
    return (
        <ButtonStyle type={type ? type : 'button'}>
            {link ? 
                <Link to={link}>{text}</Link> : text
            }
        </ButtonStyle>
    );
}