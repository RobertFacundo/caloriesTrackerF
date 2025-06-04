import React from "react";
import { NavBar } from "../components/NavBar";
import ProfileInfo from "../components/ProfileInfo";
import ProfileStats from "../components/ProfileStats";

export const Profile = () => {
    return (
        <div>
            <NavBar />
            <ProfileInfo />
            <ProfileStats />
        </div>
    )
}