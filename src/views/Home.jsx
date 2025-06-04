import { NavBar } from "../components/NavBar";
import HomeStats from "../components/HomeStats";
import MealCardList from "../components/MealCardList";

export const Home = () => {
    return (
        <div>
            <NavBar />
            <HomeStats />
            <MealCardList />
        </div>
    )
}