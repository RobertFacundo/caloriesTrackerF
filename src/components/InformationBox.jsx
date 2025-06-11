import { InfoBox, BoxSection, BoxSectionsContainer, BoxHighLight, Strong } from "../styled/components/InformationBoxStyled";

export const InformationBox = ({ dailyCalories }) => {
    const weeklyDeficit = 3850;
    const dailyDeficit = Math.round(weeklyDeficit / 7);
    const lowerIntake = dailyCalories - dailyDeficit;
    const upperIntake = lowerIntake + 50;

    return (
        <InfoBox>
            <BoxSectionsContainer>
                <BoxSection>
                    <p data-testid='info'><Strong>1 kg</Strong> of body fat ≈ <Strong>7,700 kcal</Strong></p>
                    <p data-testid='info2'><Strong>0.5 kg</Strong> of fat ≈ <Strong>3,850 kcal</Strong> weekly deficit</p>
                    <p data-testid='info3'>Daily goal: <Strong>3,850 ÷ 7</Strong> = <Strong>{dailyDeficit} kcal/day</Strong> deficit</p>
                </BoxSection>

                <BoxSection>
                    <p>Your maintenance level</p>
                    <BoxHighLight>{dailyCalories} kcal/day</BoxHighLight>
                    <p data-testid="recommended-intake">Recommended intake to lose <Strong>0.5 kg/week</Strong></p>
                    <BoxHighLight data-testid='calorie-range'>{lowerIntake} – {upperIntake} kcal/day</BoxHighLight>
                </BoxSection>
            </BoxSectionsContainer>
        </InfoBox>
    );
}