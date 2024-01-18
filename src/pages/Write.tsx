import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import Button from '../components/Button';
import InputBlock from '../components/InputBlock';
import TextareaBlock from '../components/TextareaBlock';

const MainDiv = styled.div`
    width: 80%;
    margin: auto;
`;

export default function Write () {
    const { contentId } = useParams();
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        defaultValues: {
            title: "",
            content: "",
            regId: "",
        }
    });

    // console.log('errors: ' + JSON.stringify(errors));
    // console.log('watch: ' + JSON.stringify(watch()));
    // const titleWatched = watch("title");

    return (
        <MainDiv>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <InputBlock label='제목' formObj={{...register("title", {required: "제목을 입력해주세요."})}} errMsg={errors.title?.message}/>
                {/* <p>titleWatched: {titleWatched}</p> */}

                <TextareaBlock
                    label='내용' 
                    formObj={{...register("content", {maxLength:{
                        value: 200,
                        message: "내용은 200자 이하로 입력해주세요."
                    }})}} 
                    errMsg={errors.content?.message}
                />

                <InputBlock label='작성자' formObj={{...register("regId", {required: "작성자를 입력해주세요."})}} errMsg={errors.regId?.message}/>

                <Button type="submit" text="저장" />
            </form>
        </MainDiv>
    );
}