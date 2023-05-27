import { ItemName } from "../res/items";
import { MachineType } from "./machine-type";

export class ProductionStep {
    public itemName: ItemName;
    public craftingSpeedNeeded: number;
    public machineType: MachineType;

    public constructor(itemName: ItemName, craftingSpeed: number, machineType: MachineType) {
        this.itemName = itemName;
        this.craftingSpeedNeeded = craftingSpeed;
        this.machineType = machineType;
    }
}