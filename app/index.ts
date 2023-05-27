import { LiquidsCalculator, LiquidsProductionRaport } from "./calculations/liquids-calculator";
import { ProductionCalculator } from "./calculations/production-calculator";
import { ItemName } from "./res/items";
import { blueSciencePackRecipes } from "./res/recipes-data";
import { Item } from "./types/item";
import { RecipeList } from "./types/recipe-list";



function done() {
    const recipes = new RecipeList(blueSciencePackRecipes);
    const calculator = new ProductionCalculator(recipes);
    const raport1 = calculator.createProductionRaport(new Item(ItemName.SciencePackRed, 1050));
    const raport2 = calculator.createProductionRaport(new Item(ItemName.SciencePackGreen, 1050));
    const raport3 = calculator.createProductionRaport(new Item(ItemName.SciencePackBlue, 539)); // 350? 525?
}

function blue() {
    const recipes = new RecipeList(blueSciencePackRecipes);
    const calculator = new ProductionCalculator(recipes);
    const raport = calculator.createProductionRaport(new Item(ItemName.SciencePackBlue, 525));
    console.log(raport.productionSteps);
    console.log(raport.toString());
}

function liquidsTest() {
    const raport = LiquidsCalculator.createLiquidRaportWithProductivity(0, 0, 7903.257456828887);
    console.log(raport);
    console.log('');
    console.log(new LiquidsProductionRaport(raport));
}

function main() {
    blue();
    //liquidsTest();
}

main();