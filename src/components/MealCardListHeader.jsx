import NutritionLegend from "./NutritionLegend";
import NutritionValues from "./NutritionValues";
import { HeaderWrapper, CenteredTitle } from "../styled/components/MealCardListStyled";

const MealCardHeader = ({ totalNutrition }) => (
    <HeaderWrapper>
        <NutritionLegend />
        <CenteredTitle>Meals</CenteredTitle>
        <NutritionValues
            calories={totalNutrition.calories}
            protein={totalNutrition.protein}
            carbs={totalNutrition.carbs}
            fat={totalNutrition.fat}
        />
    </HeaderWrapper>
);

export default MealCardHeader;