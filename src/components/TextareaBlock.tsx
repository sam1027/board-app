import styled from "styled-components";

const ErrorMsg = styled.p`
    color: red;
`;

interface TextareaBlockProps{
    label: string,
    formObj: object,
    errMsg?: string,
}

export default function TextareaBlock ({label, formObj, errMsg}: TextareaBlockProps) {
    return (
        <div>
            <label>{label}</label>
            <textarea 
                {...formObj}
            />
            <ErrorMsg>{errMsg}</ErrorMsg>
        </div>
    );
}