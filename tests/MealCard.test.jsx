import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import MealCard from '../src/components/MealCard';
import { ThemeProvider } from 'styled-components';
import { darkTheme, } from '../src/contexts/ThemeContext'

vi.mock('../src/services/ingredientServices', () => ({
    deleteIngredient: vi.fn(),
    addIngredient: vi.fn()
}));

vi.mock('../src/contexts/userContext', () => ({
    useUser: () => ({
        token: 'mock-token',
    })
}));

vi.mock('../src/contexts/DailyLogContext', () => ({
    useDailyLog: () => ({
        dailyLog: { id: 'log-id' },
        refreshDailyLog: vi.fn(),
    }),
}));

const mockHandleDeleteMeal = vi.fn();

vi.mock('../src/hooks/useMealCard', () => ({
    useIngredientManager: () => ({
        ingredients: [
            { id: '1', name: 'Tomato', calories: 20, protein: 1, carbs: 4, fat: 0 },
            { id: '2', name: 'Cheese', calories: 100, protein: 7, carbs: 1, fat: 8 },
        ],
        ingredientName: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
        setIngredientName: vi.fn(),
        setCalories: vi.fn(),
        setProtein: vi.fn(),
        setCarbs: vi.fn(),
        setFat: vi.fn(),
        showInput: false,
        setShowInput: vi.fn(),
        handleAddIngredient: vi.fn(),
        handleDeleteIngredient: vi.fn(),
        error: null,
        handleDeleteMeal: vi.fn(),
    }),
}));

describe('mealCard', () => {
    const meal = {
        id: 'meal',
        name: 'Lunch',
        total_nutrition: {
            calories: 120,
            protein: 8,
            carbs: 5,
            fat: 4,
        },
        ingredients: [],
    };

    it('renders meal name and nutrition', () => {
        render(
            <ThemeProvider theme={darkTheme}>
                <MealCard meal={meal} />
            </ThemeProvider>
        );

        expect(screen.getByText('Lunch')).toBeInTheDocument();
    });

    it('renders ingredient list', () => {
        render(
            <ThemeProvider theme={darkTheme}>
                <MealCard meal={meal} />
            </ThemeProvider>
        );
        expect(screen.getByText('Tomato')).toBeInTheDocument();
        expect(screen.getByText('Cheese')).toBeInTheDocument();
    });
})