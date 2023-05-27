import { ItemName } from "../res/items";
import { Recipe } from "./recipe";

export class RecipeList {

    private productToRecipe: Map<ItemName, Recipe> = new Map();

    public constructor(recipes: Recipe[]) {
        recipes.forEach(recipe => {
            this.productToRecipe.set(recipe.output.name, recipe)
        });
    }

    public getRecipeForItem(itemName: ItemName): Recipe | undefined {
        return this.productToRecipe.get(itemName);
    }
}
