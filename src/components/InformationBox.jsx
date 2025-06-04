
export const InformationBox = ({ dailyCalories }) => {
    const weeklyDeficit = 3850;
    const dailyDeficit = Math.round(weeklyDeficit / 7);
    const lowerIntake = dailyCalories - dailyDeficit;
    const upperIntake = lowerIntake + 50;

    return (
        <div>
            <p>🔥 1 kg of body fat ≈ 7,700 kcal</p>
            <p>Therefore:</p>
            <p>➗ 0.5 kg of fat ≈ 3,850 kcal weekly deficit</p>
            <p>✅ What would that be per day?</p>
            <p>3,850 kcal ÷ 7 days = ~550 kcal daily deficit</p>
            <p>
                So, if your maintenance calories are <strong>{dailyCalories} kcal/day</strong>, to lose 0.5 kg per week you should consume:
            </p>
            <p>
                Approximately <strong>{lowerIntake} – {upperIntake} kcal</strong> per day
            </p>
        </div>
    )
}