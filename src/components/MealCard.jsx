import {
    StyledMealCard, HeaderRow, TotalNutritionRow, IngredientItem, IngredientList, InputRow, 
    IngredientNameRow, IngredientNutritionRow, AddIngredientButton, InputGroup, ErrorText, StyledInput, AddIngredientInformationButton
} from '../styled/components/MealCardStyled'
import { useIngredientManager } from "../hooks/useMealCard";
import NutritionValues from './NutritionValues';

const MealCard = ({ meal }) => {
    const {
        ingredients,
        ingredientName,
        calories,
        protein,
        carbs,
        fat,
        setIngredientName,
        setCalories,
        setProtein,
        setCarbs,
        setFat,
        showInput,
        setShowInput,
        handleAddIngredient,
        handleDeleteIngredient,
        error,
        handleDeleteMeal
    } = useIngredientManager(meal);

    return (
        <StyledMealCard>
            <HeaderRow>
                <h3>{meal.name}</h3>
                <div  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    {meal.total_nutrition ? (
                        <TotalNutritionRow>
                            <NutritionValues
                                calories={meal.total_nutrition.calories}
                                protein={meal.total_nutrition.protein}
                                carbs={meal.total_nutrition.carbs}
                                fat={meal.total_nutrition.fat}
                            />
                        </TotalNutritionRow>
                    ) : (
                        <span>Total: No nutrition data</span>
                    )}
                    <button style={{background: 'none', border: 'none', cursor: 'pointer'}} onClick={handleDeleteMeal}>🗑️</button>
                </div>
            </HeaderRow>
            <IngredientList>
                {ingredients.map((ing) => (
                    <IngredientItem key={ing.id}>
                        <IngredientNameRow>
                            <strong>{ing.name}</strong>
                            <button onClick={() => handleDeleteIngredient(ing.id)} title="Delete">🗑️</button>
                        </IngredientNameRow>
                        <IngredientNutritionRow>
                            <NutritionValues
                                calories={ing.calories}
                                protein={ing.protein}
                                carbs={ing.carbs}
                                fat={ing.fat}
                            />
                        </IngredientNutritionRow>
                    </IngredientItem>
                ))}
            </IngredientList>

            {showInput ? (
                <InputGroup>
                    <InputRow>
                        <label htmlFor="ingredientName">Ingredient:</label>
                        <StyledInput
                            type="text"
                            value={ingredientName}
                            onChange={(e) => setIngredientName(e.target.value)}
                            placeHolder='add ingredient'
                        />
                    </InputRow>
                    {ingredientName.trim() !== '' && (
                        <InputRow>
                            <label htmlFor="calories">Calories:</label>
                            <StyledInput
                                type="number"
                                placeholder='Calories'
                                value={calories}
                                onChange={(e) => setCalories(e.target.value)}
                            />
                        </InputRow>
                    )}
                    {calories.trim() !== '' && (
                        <InputRow>
                            <label htmlFor="protein">Protein:</label>
                            <StyledInput
                                id="protein"
                                type="number"
                                value={protein}
                                onChange={(e) => setProtein(e.target.value)}
                                placeholder="Protein"
                            />
                        </InputRow>
                    )}

                    {protein.trim() !== '' && (
                        <InputRow>
                            <label htmlFor="carbs">Carbs:</label>
                            <StyledInput
                                id="carbs"
                                type="number"
                                value={carbs}
                                onChange={(e) => setCarbs(e.target.value)}
                                placeholder="Carbs"
                            />
                        </InputRow>
                    )}

                    {carbs.trim() !== '' && (
                        <InputRow>
                            <label htmlFor="fat">Fat:</label>
                            <StyledInput
                                id="fat"
                                type="number"
                                value={fat}
                                onChange={(e) => setFat(e.target.value)}
                                placeholder="Fat"
                            />
                        </InputRow>
                    )}

                    {fat.trim() !== '' && (
                        <div>
                            <AddIngredientInformationButton onClick={handleAddIngredient}>Add</AddIngredientInformationButton>
                            <AddIngredientInformationButton onClick={() => setShowInput(false)}>Cancel</AddIngredientInformationButton>
                        </div>
                    )}
                </InputGroup>
            ) : (
                <AddIngredientButton onClick={() => setShowInput(true)}>Add ingredient</AddIngredientButton>
            )}
            {error && <p>{error}</p>}
        </StyledMealCard>
    )
};

export default MealCard;