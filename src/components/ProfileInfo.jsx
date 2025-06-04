import React from "react";
import { useProfile } from "../hooks/useProfile";

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

    return (
        <div>
            <h2>Profile</h2>
            {error && <p>{error}</p>}
            <div>
                <label>Username:</label>
                <span>{userData.username}</span>
            </div>

            {["weight", "height", "age", "gender", "activity_level", "daily_calories_goal"].map((field) => (
                <div key={field}>
                    <label>{field.replace("_", "")}:</label>
                    {editing ? (
                        <input
                            type={field === "daily_calories_goal" || field === "age" ? "number" : "text"}
                            name={field}
                            value={userData[field]}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <span>{userData[field]}</span>
                    )}
                </div>
            ))}

            {editing ? (
                <div>
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                </div>
            ) : (
                <button onClick={() => setEditing(true)}>Edit</button>
            )}
        </div>
    );
};

export default ProfileInfo;