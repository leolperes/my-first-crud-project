import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display:flex;
    align-items: center;
    gap:10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;
const InputArea = styled.div`
    display:flex;
    flex-direction:column;
`;

const Input = styled.div`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`

const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

const Form = ({ onEdit }) => {
    const ref = useRef();

    return(
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Name</Label>
                <Input name="name"/>
            </InputArea>
            <InputArea>
                <Label>Email</Label>
                <Input name="email" type="email"/>
            </InputArea>
            <InputArea>
                <Label>Phone</Label>
                <Input name="phone"/>
            </InputArea>
            <InputArea>
                <Label>Birthday</Label>
                <Input name="birthday" type="date"/>
            </InputArea>

            <Button type="submit">Submit</Button>
        </FormContainer>
    )
}

export default Form