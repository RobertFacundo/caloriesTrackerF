import { render, screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import { InformationBox } from '../src/components/InformationBox';

describe('InformationBox', ()=>{
  it('renders correctly with dailyCalories prop', ()=>{
    const dailyCalories = 2000;

    render(<InformationBox dailyCalories={dailyCalories}/>)

    expect(screen.getByTestId("info")).toBeTruthy();
    expect(screen.getByTestId("info2")).toBeTruthy();
    expect(screen.getByTestId("info3")).toBeTruthy();

    expect(screen.getByText('Your maintenance level')).toBeTruthy();
    expect(screen.getByText(`${dailyCalories} kcal/day`)).toBeTruthy();

    const lowerIntake = dailyCalories - 550;
    const upperIntake = lowerIntake + 50;

    expect(screen.getByTestId('calorie-range')).toHaveTextContent(`${lowerIntake} – ${upperIntake} kcal/day`);
    expect(screen.getByTestId("recommended-intake")).toBeTruthy();
  })
})