import React from "react";
import {
    FieldWrapper,
    Label,
    Select,
    Input,
    Value,
} from "../styled/components/ProfileInfoStyled";

const FieldInput = ({ name, label, value, editing, handleInputChange }) => {
    return (
        <FieldWrapper>
            <Label>{label}</Label>
            {editing ? (
                name === "gender" ? (
                    <Select name={name} value={value} onChange={handleInputChange} required>
                        <option value="">Select</option>
                        <option value="male">Masculine</option>
                        <option value="femenine">Femenine</option>
                    </Select>
                ) : name === "activity_level" ? (
                    <Select name={name} value={value} onChange={handleInputChange} required>
                        <option value="">Select</option>
                        <option value="sedentary">Sedentary (almost no exercise)</option>
                        <option value="light">Light exercise (1–3 days/week)</option>
                        <option value="moderate">Moderate (3–5 days/week)</option>
                        <option value="active">Active (6 days/week)</option>
                        <option value="very_active">Very Active (daily training)</option>
                    </Select>
                ) : (
                    <Input
                        type={name === "age" ? "number" : "text"}
                        name={name}
                        value={value}
                        onChange={handleInputChange}
                    />
                )
            ) : (
                <Value>{value}</Value>
            )}
        </FieldWrapper>
    );
};

export default React.memo(FieldInput);
