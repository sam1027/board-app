import styled from "styled-components";
import { BoardProps } from "../pages/Main";
import { Link } from "react-router-dom";

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;

interface ListObjectProps{
    info: BoardProps,
}

export default function ListObject ({info}: ListObjectProps) {
    return (
        <Div>
            <span><Link to={`write/` + info.id}>{info.title}</Link></span>
            <span>{info.regId}</span>
        </Div>
    );
}