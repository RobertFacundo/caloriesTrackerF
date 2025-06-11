import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

vi.mock('../src/hooks/useHomeStats', () => ({
    default: vi.fn(),
}));

import useHomeStats from '../src/hooks/useHomeStats';
import HomeStats from '../src/components/HomeStats';

describe('HomeStats component', () => {
    it('Shows Loader when loading', () => {
        useHomeStats.mockReturnValue({
            loading: true,
            error: false,
            dailyNutrition: null,
            calorieDeficit: null,
            dailyCalories: null,
            trainingDay: false,
            toggleTrainingDay: () => { },
            updating: false,
        });

        render(<HomeStats />);
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    it('Shows error message when error', () => {
        useHomeStats.mockReturnValue({
            loading: false,
            error: true,
            dailyNutrition: null,
            calorieDeficit: null,
            dailyCalories: null,
            trainingDay: false,
            toggleTrainingDay: () => { },
            updating: false,
        });

        render(<HomeStats />);
        expect(screen.getByText(/error/i)).toBeInTheDocument();
    });

    it('renders stats info and toggle switch', () => {
        const toggleTrainingDayMock = vi.fn();

        useHomeStats.mockReturnValue({
            loading: false,
            error: false,
            dailyNutrition: { calories: 1500 },
            calorieDeficit: 200,
            dailyCalories: 2500,
            trainingDay: true,
            toggleTrainingDay: toggleTrainingDayMock,
            updating: false,
        });

        render(<HomeStats />);

        expect(screen.getByTestId('toggleText')).toBeInTheDocument();
        expect(screen.getByText(/max daily intake/i)).toBeInTheDocument();
        expect(screen.getByText(/you've consumed/i)).toBeInTheDocument();
        expect(screen.getByText(/current deficit/i)).toBeInTheDocument();

        const checkbox = screen.getByRole("checkbox");
        expect(checkbox.checked).toBe(true);

        fireEvent.click(checkbox);
        expect(toggleTrainingDayMock).toHaveBeenCalled();
    });

    it('disables toggle when updating', () => {
        useHomeStats.mockReturnValue({
            loading: false,
            error: false,
            dailyNutrition: { calories: 1500 },
            calorieDeficit: 0,
            dailyCalories: 2000,
            trainingDay: false,
            toggleTrainingDay: () => { },
            updating: true,
        });

        render(<HomeStats />);
        expect(screen.getByRole("checkbox")).toBeDisabled();
    });

    it('Shows message when no dailyNutrition', () => {
        useHomeStats.mockReturnValue({
            loading: false,
            error: false,
            dailyNutrition: null,
            calorieDeficit: null,
            dailyCalories: null,
            trainingDay: false,
            toggleTrainingDay: () => { },
            updating: false,
        });

        render(<HomeStats />);
        expect(screen.getByText(/no daily log data/i)).toBeInTheDocument();
    })
})