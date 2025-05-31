import React from "react";
import { NavBar } from "../components/NavBar";
import HomeStats from "../components/HomeStats";
import MealCard from "../components/MealCard";

export const Home = () => {
    return (
        <div>
            <NavBar />
            <HomeStats />
            <MealCard />
        </div>
    )
}