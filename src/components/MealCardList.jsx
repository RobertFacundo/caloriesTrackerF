import Loader from "./Loader";
import { useMealCardList } from "../hooks/useMealCardlList";
import { useDailyLog } from "../contexts/DailyLogContext";
import MealCard from "./MealCard";
import NutritionLegend from "./NutritionLegend";
import { HeaderWrapper, CenteredTitle, MealsContainer, AddMealInput, AddMealButton, AddMealNameInput, AddMealNameButton } from "../styled/components/MealCardListStyled";
import NutritionValues from "./NutritionValues";

const MealCardList = () => {
    const { dailyLog, loading, error: logError } = useDailyLog();
    const {
        error,
        mealName,
        showInput,
        handleShowInput,
        handleChange,
        handleAddMeal
    } = useMealCardList(dailyLog);

    const meals = dailyLog?.meals || [];
    const totalNutrition = dailyLog?.daily_total_nutrition || [];

    if (loading) return <Loader />
    if (logError) return <p>{logError}</p>
    if (!dailyLog) return <Loader />

    return (
        <div>
            <HeaderWrapper>
                <NutritionLegend />
                <CenteredTitle>Meals</CenteredTitle>
                <NutritionValues
                    calories={totalNutrition.calories}
                    protein={totalNutrition.protein}
                    carbs={totalNutrition.carbs}
                    fat={totalNutrition.fat}
                />
            </HeaderWrapper>

            <MealsContainer>
                {meals.map((meal) => (
                    <MealCard key={meal.id} meal={meal} />
                ))}
                <AddMealInput>
                    {showInput ? (
                        <>
                            <AddMealNameInput
                                type="text"
                                placeholder="Breakfast, lunch... dinner?"
                                value={mealName}
                                onChange={(e) => handleChange(e.target.value)}
                            />
                            <AddMealNameButton onClick={handleAddMeal}>Add Meal</AddMealNameButton>
                        </>
                    ) : (
                        <AddMealButton className="add-meal-button" onClick={handleShowInput}>+</AddMealButton>
                    )}
                </AddMealInput>
            </MealsContainer>
            {error && <p>{error}</p>}
        </div>
    )
};

export default MealCardList;