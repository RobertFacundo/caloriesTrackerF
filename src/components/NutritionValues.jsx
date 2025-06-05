import styled, { useTheme } from "styled-components";

const ValueContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const NutrientValue = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  color: ${({ color }) => color};
`;

const NutritionValues = ({ calories, protein, carbs, fat }) => {
  const theme = useTheme()
  return (
    <ValueContainer>
      <NutrientValue title="Calories" color={theme.nutrition.calories}>{calories}</NutrientValue>
      <NutrientValue title="Protein" color={theme.nutrition.protein}>{protein}</NutrientValue>
      <NutrientValue title="Carbs" color={theme.nutrition.carbs}>{carbs}</NutrientValue>
      <NutrientValue title="Fat" color={theme.nutrition.fat}>{fat}</NutrientValue>
    </ValueContainer>
  );
};

export default NutritionValues;