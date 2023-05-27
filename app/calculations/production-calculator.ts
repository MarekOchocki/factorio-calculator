import { ItemName } from "../res/items";
import { Item } from "../types/item";
import { ProductionRaport } from "../types/production-raport";
import { ProductionStep } from "../types/production-step";
import { RecipeList } from "../types/recipe-list";

type CraftingSpeed = number;

export class ProductionCalculator {
    private recipes: RecipeList;
    private itemsToCraftingSpeedNeeded = new Map<ItemName, CraftingSpeed>();
    private basicResourceNeededPerMinute: Item[] = [];

    public constructor(recipeList: RecipeList) {
        this.recipes = recipeList;
    }

    public createProductionRaport(itemsPerMinute: Item): ProductionRaport {
        this.addCraftingSpeedForItem(itemsPerMinute);
        const result: ProductionStep[] = [];
        this.itemsToCraftingSpeedNeeded.forEach((value, key) => {
            const recipe = this.recipes.getRecipeForItem(key);
            if(recipe !== undefined)
                result.push(new ProductionStep(key, value, recipe.machine));
        })
        return new ProductionRaport(result, this.basicResourceNeededPerMinute);
    }

    private addCraftingSpeedForItem(itemsPerMinute: Item): void {
        const recipe = this.recipes.getRecipeForItem(itemsPerMinute.name);
        if(recipe === undefined) { this.storeBasicResourceNeeded(itemsPerMinute); return; }
        const productivityModifier = recipe.maxProductivityModifier;
        const itemProducedByOneCraftingSpeedPerMinute = recipe.output.count / recipe.craftingTime * productivityModifier * 60.0;
        const requiredCraftingSpeed = itemsPerMinute.count / itemProducedByOneCraftingSpeedPerMinute;

        const requiredCurrent = this.getCraftingSpeedNeededForItem(itemsPerMinute);
        this.itemsToCraftingSpeedNeeded.set(itemsPerMinute.name, requiredCurrent + requiredCraftingSpeed);

        const inputsRequiredPerMinute = recipe.input.map(input => input.divide(recipe.craftingTime / 60.0).multiply(itemsPerMinute.count / itemProducedByOneCraftingSpeedPerMinute));
        inputsRequiredPerMinute.forEach(input => this.addCraftingSpeedForItem(input));
    }

    private getCraftingSpeedNeededForItem(item: Item): number {
        if(this.itemsToCraftingSpeedNeeded.has(item.name))
            return this.itemsToCraftingSpeedNeeded.get(item.name) as number;
        return 0;
    }

    private storeBasicResourceNeeded(itemPerMinute: Item): void {
        this.basicResourceNeededPerMinute.push(itemPerMinute);
    }
}