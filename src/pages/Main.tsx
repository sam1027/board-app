import Button from "../components/Button";
import ListObject from "../components/ListObject";
import styled from "styled-components";
import BoardHeader from "../components/BoardHeader";
import { useState } from "react";

const MainDiv = styled.div`
    width: 80%;
    margin: auto;
`;

const BoardDiv = styled.div`
    border: 3px solid lightGray;
    padding: 5px;
`;

const ButtonDiv = styled.div`
    float: right;
    margin-top: 10px;
`;

export interface BoardProps{
    id?: number,
    title: string,
    content: string,
    regId: string,
}

export default function Main () {
    const [list, setList] = useState([
        {
            id: 0, 
            title: "제목 입니다.",
            content: "내용 입니다.",
            regId: "뽀로롱",
        },
        {
            id: 1, 
            title: "제목 입니다222.",
            content: "내용 입니다222.",
            regId: "텀블러",
        },
        {
            id: 2, 
            title: "제목 입니다333.",
            content: "내용 입니다333.",
            regId: "냉장고",
        }
    ]);

    const nextId = list.length + 1;

    // 저장
    function handleSave(data: BoardProps){

    }

    return (
        <MainDiv>
            <div>
                <h3>[목록]</h3>
            </div>
            <BoardDiv>
                <BoardHeader />
                {list.map(item => (
                    <ListObject key={item.id} info={{...item}} />
                ))}
            </BoardDiv>
            <ButtonDiv>
                <Button text={"글쓰기"} link={"/write/new"}/>
            </ButtonDiv>
        </MainDiv>
    );
}