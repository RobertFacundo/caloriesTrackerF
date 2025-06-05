import styled, { useTheme } from "styled-components";

const LegendContainer = styled.div`
  display:flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  padding-right: 1rem;
`;

const Dot = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-right: 0.5rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
`;

const NutritionLegend = () => {
  const theme = useTheme();
  return (
    <LegendContainer>
      <LegendItem><Dot color={theme.nutrition.calories} />Calories</LegendItem>
      <LegendItem><Dot color={theme.nutrition.protein} />Proteins</LegendItem>
      <LegendItem><Dot color={theme.nutrition.carbs} />Carbs</LegendItem>
      <LegendItem><Dot color={theme.nutrition.fat} />Fat</LegendItem>
    </LegendContainer>
  )
};

export default NutritionLegend;