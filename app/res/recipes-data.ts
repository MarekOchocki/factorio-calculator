import { Recipe } from "../types/recipe";

/*
const recipesLogistics: Recipe[] = [
    new Recipe("[A] [0.5] 2 wood -> 1 wooden-chest"),
    new Recipe("[A] [0.5] 8 iron-plate -> 1 iron-chest"),
    new Recipe("[A] [0.5] 8 steel-plate -> 1 steel-chest"),
    new Recipe("[A] [3] 20 iron-plate + 5 iron-plate -> 1 iron-chest"),
    new Recipe("[A] [0.5] 1 iron-gear-wheel + 1 iron-plate -> 2 transport-belt"),
    new Recipe("[A] [0.5] 5 iron-gear-wheel + 1 transport-belt  -> 1 fast-transport-belt"),
    new Recipe("[A] [0.5] 1 fast-transport-belt + 10 iron-gear-wheel + 20 lubricant -> 1 express-transport-belt"),
    new Recipe("[A] [1] 10 iron-plate + 5 transport-belt -> 2 underground-belt"),
    new Recipe("[A] [2] 40 iron-gear-wheel + 2 underground-belt -> 2 fast-underground-belt"),
    new Recipe("[A] [2] 2 fast-underground-belt + 80 iron-gear-wheel + 40 lubricant -> 2 express-underground-belt"),
    new Recipe("[A] [1] 5 electronic-circuit + 5 iron-plate + 4 transport-belt -> 1 splitter"),
    new Recipe("[A] [2] 10 electronic-circuit + 10 iron-gear-wheel + 1 splitter -> fast-splitter"),
    new Recipe("[A] [2] 10 advanced-circuit + 1 fast-splitter + 10 iron-gear-wheel + 80 lubricant -> 1 express-splitter"),
    new Recipe("[A] [0.5] 1 iron-gear-wheel + 1 iron-plate -> 1 burner-inserter"),
    new Recipe("[A] [0.5] 1 electronic-circuit + 1 iron-gear-wheel + 1 iron-plate -> 1 inserter"),
    new Recipe("[A] [0.5] 1 inserter + 1 iron-gear-wheel + 1 iron-plate -> 1 long-handed-inserter"),
    new Recipe("[A] [0.5] 2 electronic-circuit + 1 inserter + 2 iron-plate -> 1 fast-inserter"),
    new Recipe("[A] [0.5] 4 electronic-circuit + 1 fast-inserter -> 1 filter-inserter"),
    new Recipe("[A] [0.5] 1 advanced-circuit + 15 electronic-circuit + 1 fast-inserter + 15 iron-gear-wheel -> 1 stack-inserter"),
    new Recipe("[A] [0.5] 5 electronic-circuit + 1 stack-inserter -> stack-filter-inserter"),
    new Recipe("[A] [0.5] 2 copper-cable + 1 wood -> 2 small-electric-pole"),
    new Recipe("[A] [0.5] 2 copper-plate + 4 iron-stick + 2 steel-plate -> 1 medium-electric-pole"),
    new Recipe("[A] [0.5] 5 copper-plate + 8 iron-stick + 5 steel-plate -> 1 big-electric-pole"),
    new Recipe("[A] [0.5] 5 advanced-circuit + 5 copper-plate + 10 steel-plate -> 1 substation"),
    new Recipe("[A] [0.5] 1 iron-plate -> 1 pipe"),
    new Recipe("[A] [0.5] 5 iron-plate + 10 pipe -> 2 pipe-to-ground"),
    new Recipe("[A] [2] 1 engine-unit + 1 pipe + 1 steel-plate -> 1 pump"),
    new Recipe("[A] [0.5] 1 iron-stick + 1 steel-plate + 1 stone -> 2 rail"),
    new Recipe("[A] [0.5] 5 electronic-circuit + 6 iron-plate + 6 iron-stick + 3 steel-plate -> 1 train-stop"),
    new Recipe("[A] [0.5] 1 electronic-circuit + 5 iron-plate -> 1 rail-signal"),
    new Recipe("[A] [0.5] 1 electronic-circuit + 5 iron-plate -> 1 rail-chain-signal"),
    new Recipe("[A] [4] 10 electronic-circuit + 20 engine-unit + 30 steel-plate -> 1 locomotive"),
    new Recipe("[A] [1] 10 iron-gear-wheel + 20 iron-plate + 20 steel-plate -> 1 cargo-wagon"),
    new Recipe("[A] [1.5] 10 iron-gear-wheel + 8 pipe + 16 steel-plate + 1 storage-tank -> 1 fluid-wagon"),
    new Recipe("[A] [4] 20 advanced-circuit + 64 engine-unit + 10 iron-gear-wheel + 16 pipe + 40 steel-plate -> 1 artillery-wagon"),
    new Recipe("[A] [2] 8 engine-unit + 20 iron-plate + 5 steel-plate -> 1 car"),
    new Recipe("[A] [6] 10 advanced-circuit + 32 engine-unit + 15 iron-gear-wheel + 50 steel-plate -> 1 tank"),
    new Recipe("[A] [] "),
];
*/

export const redSciencePackRecipes: Recipe[] = [
    new Recipe("[A] [Y] [5] 1 copper-plate + 1 iron-gear-wheel -> 1 automation-science-pack"),
    new Recipe("[F] [Y] [3.2] 1 copper-ore -> 1 copper-plate"),
    new Recipe("[A] [Y] [0.5] 2 iron-plate -> 1 iron-gear-wheel"),
    new Recipe("[F] [Y] [3.2] 1 iron-ore -> 1 iron-plate"),
];

export const greenSciencePackRecipes: Recipe[] = [
    new Recipe("[A] [Y] [6] 1 inserter + 1 transport-belt -> 1 logistic-science-pack"),
    new Recipe("[A] [N] [0.5] 1 iron-gear-wheel + 1 iron-plate -> 2 transport-belt"),
    new Recipe("[A] [N] [0.5] 1 electronic-circuit + 1 iron-gear-wheel + 1 iron-plate -> 1 inserter"),
    new Recipe("[A] [Y] [0.5] 3 copper-cable + 1 iron-plate -> 1 electronic-circuit"),
    new Recipe("[A] [Y] [0.5] 1 copper-plate -> 2 copper-cable"),
    new Recipe("[F] [Y] [3.2] 1 copper-ore -> 1 copper-plate"),
    new Recipe("[A] [Y] [0.5] 2 iron-plate -> 1 iron-gear-wheel"),
    new Recipe("[F] [Y] [3.2] 1 iron-ore -> 1 iron-plate"),
];

export const blackSciencePackRecipes: Recipe[] = [
    new Recipe("[A] [Y] [10] 1 grenade + 1 piercing-rounds-magazine + 2 wall -> 2 military-science-pack"),
    new Recipe("[A] [N] [8] 10 coal + 5 iron-plate -> 1 grenade"),
    new Recipe("[A] [N] [3] 5 copper-plate + 1 firearm-magazine + 1 steel-plate -> 1 piercing-rounds-magazine"),
    new Recipe("[A] [N] [1] 4 iron-plate -> 1 firearm-magazine"),
    new Recipe("[F] [Y] [16] 5 iron-plate -> 1 steel-plate"),
    new Recipe("[A] [N] [0.5] 5 stone-brick -> 1 wall"),
    new Recipe("[F] [Y] [3.2] 2 stone -> 1 stone-brick"),
    new Recipe("[A] [Y] [6] 1 inserter + 1 transport-belt -> 1 logistic-science-pack"),
    new Recipe("[A] [Y] [5] 1 copper-plate + 1 iron-gear-wheel -> 1 automation-science-pack"),
    new Recipe("[A] [N] [0.5] 1 iron-gear-wheel + 1 iron-plate -> 2 transport-belt"),
    new Recipe("[A] [N] [0.5] 1 electronic-circuit + 1 iron-gear-wheel + 1 iron-plate -> 1 inserter"),
    new Recipe("[A] [Y] [0.5] 3 copper-cable + 1 iron-plate -> 1 electronic-circuit"),
    new Recipe("[A] [Y] [0.5] 1 copper-plate -> 2 copper-cable"),
    new Recipe("[F] [Y] [3.2] 1 copper-ore -> 1 copper-plate"),
    new Recipe("[A] [Y] [0.5] 2 iron-plate -> 1 iron-gear-wheel"),
    new Recipe("[F] [Y] [3.2] 1 iron-ore -> 1 iron-plate"),
];

export const blueSciencePackRecipes: Recipe[] = [
    new Recipe("[A] [Y] [24] 3 advanced-circuit + 2 engine + 1 sulfur -> 2 chemical-science-pack"),
    new Recipe("[C] [Y] [1] 30 petroleum-gas + 30 water -> 2 sulfur"),
    new Recipe("[A] [Y] [10] 1 iron-gear-wheel + 2 pipe + 1 steel-plate -> 1 engine"),
    new Recipe("[A] [N] [0.5] 1 iron-plate -> 1 pipe"),
    new Recipe("[A] [Y] [6] 4 copper-cable + 2 electronic-circuit + 2 plastic-bar -> 1 advanced-circuit"),
    new Recipe("[A] [Y] [1] 1 coal + 20 petroleum-gas -> 2 plastic-bar"),

    new Recipe("[A] [Y] [10] 1 grenade + 1 piercing-rounds-magazine + 2 wall -> 2 military-science-pack"),
    new Recipe("[A] [N] [8] 10 coal + 5 iron-plate -> 1 grenade"),
    new Recipe("[A] [N] [3] 5 copper-plate + 1 firearm-magazine + 1 steel-plate -> 1 piercing-rounds-magazine"),
    new Recipe("[A] [N] [1] 4 iron-plate -> 1 firearm-magazine"),
    new Recipe("[F] [Y] [16] 5 iron-plate -> 1 steel-plate"),
    new Recipe("[A] [N] [0.5] 5 stone-brick -> 1 wall"),
    new Recipe("[F] [Y] [3.2] 2 stone -> 1 stone-brick"),

    new Recipe("[A] [Y] [6] 1 inserter + 1 transport-belt -> 1 logistic-science-pack"),
    new Recipe("[A] [N] [0.5] 1 iron-gear-wheel + 1 iron-plate -> 2 transport-belt"),
    new Recipe("[A] [N] [0.5] 1 electronic-circuit + 1 iron-gear-wheel + 1 iron-plate -> 1 inserter"),
    new Recipe("[A] [Y] [0.5] 3 copper-cable + 1 iron-plate -> 1 electronic-circuit"),
    new Recipe("[A] [Y] [0.5] 1 copper-plate -> 2 copper-cable"),

    new Recipe("[A] [Y] [5] 1 copper-plate + 1 iron-gear-wheel -> 1 automation-science-pack"),
    new Recipe("[F] [Y] [3.2] 1 copper-ore -> 1 copper-plate"),
    new Recipe("[A] [Y] [0.5] 2 iron-plate -> 1 iron-gear-wheel"),
    new Recipe("[F] [Y] [3.2] 1 iron-ore -> 1 iron-plate"),
];
