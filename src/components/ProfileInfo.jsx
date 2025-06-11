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
import Loader from "./Loader";
import FieldInput from './ProfileInfoInput'

const ProfileInfo = React.memo(() => {
    const {
        userData,
        editing,
        setEditing,
        handleInputChange,
        handleUpdate,
        error,
        loading,
        updating
    } = useProfile();

    if (loading) return <Loader />;
    if (!userData) return <p>No user data available</p>;

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
                <FieldInput
                    key={name}
                    name={name}
                    label={label}
                    value={userData[name]}
                    editing={editing}
                    handleInputChange={handleInputChange}
                />
            ))}

            <div>
                {editing ? (
                    <>
                        <ActionButton onClick={handleUpdate} disabled={updating}>{updating ? 'Saving...' : 'Save'}</ActionButton>
                        <ActionButton onClick={() => setEditing(false)} disabled={updating}>Cancel</ActionButton>
                    </>
                ) : (
                    <ActionButton onClick={() => setEditing(true)}>Edit</ActionButton>
                )}
            </div>
        </ProfileContainer>
    );
});

export default ProfileInfo;