// components/AddMealInputSection.jsx
import { AddMealInput, AddMealNameInput, AddMealNameButton, AddMealButton } from "../styled/components/MealCardListStyled";

const AddMealInputSection = ({ showInput, mealName, handleChange, handleAddMeal, handleShowInput, adding }) => (
    <AddMealInput>
        {showInput ? (
            <>
                <AddMealNameInput
                    type="text"
                    placeholder="Breakfast, lunch... dinner?"
                    value={mealName}
                    onChange={(e) => handleChange(e.target.value)}
                    disabled={adding}
                />
                <AddMealNameButton onClick={handleAddMeal}  disabled={adding || mealName.trim() === ''}>{adding ? 'Adding': 'Add meal'}</AddMealNameButton>
            </>
        ) : (
            <AddMealButton className="add-meal-button" onClick={handleShowInput}>+</AddMealButton>
        )}
    </AddMealInput>
);

export default AddMealInputSection;