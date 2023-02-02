import styled from "styled-components";

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 12px;
`;
const Form = styled.form`
    max-width: 400px;
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Button = styled.button`
    background-color: #380c85;
    padding: 12px 20px;
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
`;
const Label = styled.label`
    font-weight: 600;
    font-size: 20px;
`;

const Input = styled.input`
    padding: 12px 8px;
    min-width: 150px;
    margin-left: 12px;
`;

export const SearchCityForm = ({ city, onSubmit, onCityChange }) => {
    return <FormContainer><Form onSubmit={onSubmit}>
        <div>
            <Label htmlFor="city">City:</Label>
            <Input type="text" value={city} onChange={e => { onCityChange(e.target.value) }} name="city" />
        </div>
        <Button type="submit">Fetch weather</Button>
    </Form></FormContainer>
}