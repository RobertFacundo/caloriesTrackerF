import { useState } from 'react';
import { addIngredient, deleteIngredient } from '../services/ingredientServices';
import { useDailyLog } from '../contexts/DailyLogContext';
import { useUser } from '../contexts/userContext';
import { deleteMeal } from '../services/mealServices';

export const useIngredientManager = (meal) => {
    const {token} = useUser()
    const { dailyLog, refreshDailyLog } = useDailyLog();
    const [ingredients, setIngredients] = useState(meal.ingredients || []);
    const [ingredientName, setIngredientName] = useState('');
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fat, setFat] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [error, setError] = useState(null);

    console.log(dailyLog, 'LOG DEL USERMEALCARD HOOOK')
    console.log(meal, 'log delusemealcard')

    const handleAddIngredient = async () => {
        if (!ingredientName.trim()) return;

        const ingredientData = {
            name: ingredientName,
            calories: Number(calories),
            protein: Number(protein),
            carbs: Number(carbs),
            fat: Number(fat),
        }

        try {
            const newIngredient = await addIngredient(dailyLog.id, meal.id, ingredientData, token);
            setIngredients((prev) => [...prev, newIngredient]);

            await refreshDailyLog()

            setIngredientName('');
            setCalories('');
            setProtein('');
            setCarbs('');
            setFat('');

            setShowInput(false);
            setError(null);
        } catch (error) {
            setError(error.message || 'error adding ingredient')
        }
    };

    const handleDeleteIngredient = async(ingredientId) =>{
        try{
            await deleteIngredient(ingredientId, meal.id, dailyLog.id, token);
            setIngredients((prev)=> prev.filter((ing)=> ing.id !== ingredientId));
            await refreshDailyLog();
        }catch(error){
            console.error('Error deleting ingredient', error)
            setError('Error delting ingredient')
        }
    }

    const handleDeleteMeal = async()=>{
        try{
            await deleteMeal(dailyLog.id, meal.id, token);
            await refreshDailyLog();
        }catch(error){
            console.error(error, 'error deleting meal');
            setError('Error deleting meal')
        }
    }

    return {
        ingredients,
        ingredientName,
        setIngredientName,
        calories,
        setCalories,
        protein,
        setProtein,
        carbs,
        setCarbs,
        fat,
        setFat,
        showInput,
        setShowInput,
        handleAddIngredient,
        handleDeleteIngredient,
        error,
        handleDeleteMeal
    }
}