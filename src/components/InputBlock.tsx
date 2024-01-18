import styled from "styled-components";

const ErrorMsg = styled.p`
    color: red;
`;

interface InputBlockProps{
    label: string,
    formObj: object,
    errMsg?: string,
}

export default function InputBlock ({label, formObj, errMsg}: InputBlockProps) {
    return (
        <div>
            <label>{label}</label>
            <input 
                {...formObj}
            />
            <ErrorMsg>{errMsg}</ErrorMsg>
        </div>
    );
}