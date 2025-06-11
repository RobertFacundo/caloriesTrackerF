import Loader from "./Loader";
import { useMealCardList } from "../hooks/useMealCardlList";
import { useDailyLog } from "../contexts/DailyLogContext";
import MealCard from "./MealCard";
import { MealsContainer } from "../styled/components/MealCardListStyled";
import MealCardHeader from "./MealCardListHeader";
import AddMealInputSection from "./AddMealInputSection";

const MealCardList = () => {
    const { dailyLog, loading, error: logError } = useDailyLog();
    const {
        error,
        mealName,
        showInput,
        handleShowInput,
        handleChange,
        handleAddMeal,
        adding
    } = useMealCardList();

    const meals = dailyLog?.meals || [];
    const totalNutrition = dailyLog?.daily_total_nutrition || [];

    if (loading || !dailyLog) return <Loader />;
    if (logError) return <p>{logError}</p>;

    return (
        <div>
            <MealCardHeader totalNutrition={totalNutrition} />
            <MealsContainer>
                {meals.map((meal) => (
                    <MealCard key={meal.id} meal={meal} />
                ))}
                <AddMealInputSection
                    showInput={showInput}
                    mealName={mealName}
                    handleChange={handleChange}
                    handleAddMeal={handleAddMeal}
                    handleShowInput={handleShowInput}
                    adding={adding}
                />
            </MealsContainer>
            {error && <p>{error}</p>}
        </div>
    )
};

export default MealCardList;