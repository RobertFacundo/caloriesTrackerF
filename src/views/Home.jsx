import { NavBar } from "../components/NavBar";
import HomeStats from "../components/HomeStats";
import MealCardList from "../components/MealCardList";
import { JoyRideController } from "../components/JoyRideController";

export const Home = () => {
    return (
        <div>
            <NavBar />
            <JoyRideController />
            <HomeStats />
            <MealCardList />
        </div>
    )
}