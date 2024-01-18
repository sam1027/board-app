import styled from "styled-components";

const Div = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: pink;
`;

export default function BoardHeader () {
    return (
        <Div>
            <span>제목</span>
            <span>작성자</span>
        </Div>
    );
}