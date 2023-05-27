import { ItemName } from "../res/items";

export class Item {
    name: ItemName;
    count: number;

    public constructor(name: ItemName, count: number) {
        this.name = name;
        this.count = count;
    }

    public static fromString(itemString: string): Item {
        const itemName = itemString.split(" ")[1];
        if(!Item.isValidName(itemName)) throw `Invalid item name: "${itemName}"`;
        return new Item(itemName, parseFloat(itemString.split(" ")[0]));
    }

    public multiply(multiplier: number): Item {
        return new Item(this.name, this.count * multiplier);
    }

    public divide(divisor: number): Item {
        return new Item(this.name, this.count / divisor);
    }

    private static isValidName(itemName: string | ItemName): itemName is ItemName {
        return Object.entries(ItemName).some(entry => entry.some(value => value === itemName));
    }
}
