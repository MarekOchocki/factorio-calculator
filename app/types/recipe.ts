import { Item } from "./item";
import { MachineType } from "./machine-type";

type seconds = number;

export class Recipe {
    input: Item[];
    output: Item;
    machine: MachineType;
    craftingTime: seconds;
    maxProductivityModifier: number;

    public constructor(recipeString: string) {
        this.input = this.getInput(recipeString);
        this.output = this.getOutput(recipeString);
        this.machine = this.getMachineType(recipeString);
        this.craftingTime = this.getCraftingTime(recipeString);
        this.maxProductivityModifier = this.getMaxProductivityModifier(recipeString, this.machine);
    }

    private getMachineType(recipeString: string): MachineType {
        const machineCode = recipeString.substr(0, 3);
        if (machineCode === "[A]") return MachineType.AssembyMachine;
        if (machineCode === "[F]") return MachineType.Furnace;
        if (machineCode === "[O]") return MachineType.OilRafinery;
        if (machineCode === "[C]") return MachineType.ChemicalPlant;
        throw "undefined machine type";
    }

    private getCraftingTime(recipeString: string): number {
        const timeString = recipeString.split("[")[3].split("]")[0];
        return parseFloat(timeString);
    }

    private getInput(recipeString: string): Item[] {
        const inputs = recipeString.split("] ")[3].split(" -> ")[0].split(" + ");
        return inputs.map(inputString => Item.fromString(inputString));
    }

    private getOutput(recipeString: string): Item {
        const outputs = recipeString.split("] ")[3].split(" -> ")[1].split(" + ");
        if(outputs.length > 1) throw "More than 1 product in recipe: " + recipeString;
        return Item.fromString(outputs[0]);
    }

    private getMaxProductivityModifier(recipeString: string, machine: MachineType): number {
        const canUseProductivityModules = recipeString.split("[")[2].substr(0, 1) === "Y";
        if (canUseProductivityModules) {
            if(machine === MachineType.AssembyMachine) return 1.4;
            if(machine === MachineType.Furnace) return 1.2;
            return 1.3;
        }
        return 1.0;
    }
}