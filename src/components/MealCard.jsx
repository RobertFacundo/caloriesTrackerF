import { useIngredientManager } from "../hooks/useMealCard";

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
        error
    } = useIngredientManager(meal);

    return (
        <div>
            <h3>{meal.name}</h3>
            <ul>
                {ingredients.map((ing) => (
                    <li key={ing.id}>
                        <strong>{ing.name}</strong>
                        {`Cal: ${ing.calories} | Prot: ${ing.protein}g | Carb: ${ing.carbs}g | Fat: ${ing.fat}`}
                        <button onClick={() => handleDeleteIngredient(ing.id)}>🗑️</button>
                    </li>
                ))}
                {meal.total_nutrition ? (
                    <h4>
                        Total:
                        {` Cal: ${meal.total_nutrition.calories} | Prot: ${meal.total_nutrition.protein}g | Carb: ${meal.total_nutrition.carbs}g | Fat: ${meal.total_nutrition.fat}g`}
                    </h4>
                ) : (
                    <h4>Total: No nutrition data</h4>
                )}
            </ul>

            {showInput ? (
                <div>
                    <input
                        type="text"
                        value={ingredientName}
                        onChange={(e) => setIngredientName(e.target.value)}
                        placeHolder='add ingredient'
                    />
                    <input
                        type="number"
                        placeholder='Calories'
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Protein"
                        value={protein}
                        onChange={(e) => setProtein(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Carbs"
                        value={carbs}
                        onChange={(e) => setCarbs(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Fat"
                        value={fat}
                        onChange={(e) => setFat(e.target.value)}
                    />
                    <button onClick={handleAddIngredient}>Add</button>
                    <button onClick={() => setShowInput(false)}>Cancel</button>
                </div>
            ) : (
                <button onClick={() => setShowInput(true)}>Add ingredient</button>
            )}

            {error && <p>{error}</p>}
        </div>
    )
};

export default MealCard;