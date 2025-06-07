import React from "react";
import { useOnBoarding } from "../hooks/useOnBoarding";
import {
    FormCard,
    Title,
    StyledForm,
    Input,
    Select,
    Label,
    Button,
    ErrorMsg,
} from '../styled/components/LoginSignUpStyled';

export const OnBoarding = () => {
    const {
        details,
        handleChange,
        handleSubmit,
        loading,
        error,
    } = useOnBoarding();

    return (
        <FormCard>
            <Title>Welcome! 👋</Title>
            <StyledForm onSubmit={handleSubmit}>
                <Label>How much do you weight?
                    <Input
                        type="text"
                        name='weight'
                        value={details.weight}
                        onChange={handleChange}
                        required
                    />
                </Label>

                <Label>
                    ...and how tall are you in cms?
                    <Input
                        type="number"
                        name='height'
                        value={details.height}
                        onChange={handleChange}
                        required
                    />
                </Label>
                <Label>
                    ...age?
                    <Input
                        type="number"
                        name="age"
                        value={details.age}
                        onChange={handleChange}
                        required
                    >
                    </Input>
                </Label>
                <Label>
                    ...and your body is...?
                    <Select
                        name="gender"
                        value={details.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="male">Masculine</option>
                        <option value="femenine">Femenine</option>
                    </Select>
                </Label>
                <Label>
                    ...and for last but not least, how often do you excercise?
                    <Select
                        name="activity_level"
                        value={details.activity_level}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="sedentary">Sedentary(almost no excercise)</option>
                        <option value="light">Light excercise, maybe 1 or 3 day a week</option>
                        <option value="moderate">Moderate (3 to 5 days a week)</option>
                        <option value='active'>Active... 6 days a week</option>
                        <option value="very_active">Intense training throught out the whole week</option>
                    </Select>
                </Label>

                <Button type="submit" disabled={loading}>
                    {loading ? 'Saving details' : 'Update details'}
                </Button>
                {error && <p>{error}</p>}
            </StyledForm>
        </FormCard>
    );
};