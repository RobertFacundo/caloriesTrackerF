import React from "react";
import { useProfile } from "../hooks/useProfile";
import {
    ProfileContainer,
    FieldWrapper,
    Label,
    Select,
    Input,
    Value,
    ActionButton,
    Title,
} from '../styled/components/ProfileInfoStyled'

const ProfileInfo = () => {
    const {
        userData,
        editing,
        setEditing,
        handleInputChange,
        handleUpdate,
        error,
        loading
    } = useProfile();

    if (!userData) return <p>Loading user data...</p>
    if (!userData) return <p>No user data available</p>

    const fields = [
        { name: "weight", label: "Weight" },
        { name: "height", label: "Height" },
        { name: "age", label: "Age" },
        { name: "gender", label: "Gender" },
        { name: "activity_level", label: "Activity Level" },
    ];

    return (
        <ProfileContainer className="profile-info">
            <Title> {userData.username}'s Profile</Title>
            {error && <p>{error}</p>}

            {fields.map(({ name, label }) => (
                <FieldWrapper key={name} >
                    <Label>{label}</Label>
                    {editing ? (
                        name === "gender" ? (
                            <Select name={name} value={userData[name]} onChange={handleInputChange} required>
                                <option value="">Select</option>
                                <option value="male">Masculine</option>
                                <option value="femenine">Femenine</option>
                            </Select>
                        ) : name === "activity_level" ? (
                            <Select name={name} value={userData[name]} onChange={handleInputChange} required>
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
                                value={userData[name]}
                                onChange={handleInputChange}
                            />
                        )
                    ) : (
                        <Value>{userData[name]}</Value>
                    )}
                </FieldWrapper>
            ))}

            <div>
                {editing ? (
                    <>
                        <ActionButton onClick={handleUpdate}>Save</ActionButton>
                        <ActionButton onClick={() => setEditing(false)}>Cancel</ActionButton>
                    </>
                ) : (
                    <ActionButton onClick={() => setEditing(true)}>Edit</ActionButton>
                )}
            </div>
        </ProfileContainer>
    );
};

export default ProfileInfo;