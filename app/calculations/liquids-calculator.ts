import { ProductionRaport } from "../types/production-raport";
import { ProductionStep } from "../types/production-step";

export class LiquidsRaport {
    public createdHeavyOil: number = 0;
    public createdLightOil: number = 0;
    public createdPetroleumGas: number = 0;
    
    public crudeOilNeeded: number = 0;
    public heavyOilCracked: number = 0;
    public lightOilCracked: number = 0;

    public canBeProcessed(): boolean {
        return this.crudeOilNeeded >= 0 && this.heavyOilCracked >= 0 && this.lightOilCracked >= 0;
    }
}

export class LiquidsProductionRaport {
    public rafineriesCraftingSpeedNeeded: number;
    public HeavyCrackingCraftingSpeedNeeded: number;
    public LightCrackingCraftingSpeedNeeded: number;

    public constructor(liquidsPerMinute: LiquidsRaport) {
        this.rafineriesCraftingSpeedNeeded = liquidsPerMinute.crudeOilNeeded / 100.0 / 60.0 * 5.0;
        this.HeavyCrackingCraftingSpeedNeeded = liquidsPerMinute.heavyOilCracked / 40.0 / 60.0 * 2.0;
        this.LightCrackingCraftingSpeedNeeded = liquidsPerMinute.lightOilCracked / 30.0 / 60.0 * 2.0;
    }
}


export class LiquidsCalculator {
    public static createLiquidRaport(heavyOilNeeded: number, lightOilNeeded: number, petroleumGasNeeded: number): LiquidsRaport {
        let raport = new LiquidsRaport();
        raport.createdHeavyOil = heavyOilNeeded;
        raport.createdLightOil = lightOilNeeded;
        raport.createdPetroleumGas = petroleumGasNeeded;
        raport.crudeOilNeeded = this.getCrudeOilNeeded(heavyOilNeeded, lightOilNeeded, petroleumGasNeeded);
        raport.heavyOilCracked = this.getHeavyOilCracked(heavyOilNeeded, raport.crudeOilNeeded);
        raport.lightOilCracked = this.getLightOilCracked(heavyOilNeeded, lightOilNeeded, raport.crudeOilNeeded);
        return raport;
    }

    public static createLiquidRaportWithProductivity(heavyOilNeeded: number, lightOilNeeded: number, petroleumGasNeeded: number): LiquidsRaport {
        let raport = new LiquidsRaport();
        raport.createdHeavyOil = heavyOilNeeded;
        raport.createdLightOil = lightOilNeeded;
        raport.createdPetroleumGas = petroleumGasNeeded;
        raport.crudeOilNeeded = this.getCrudeOilNeededWithProductivity(heavyOilNeeded, lightOilNeeded, petroleumGasNeeded);
        raport.heavyOilCracked = this.getHeavyOilCrackedWithProductivity(heavyOilNeeded, raport.crudeOilNeeded);
        raport.lightOilCracked = this.getLightOilCrackedWithProductivity(heavyOilNeeded, lightOilNeeded, raport.crudeOilNeeded);
        return raport;
    }
    
    private static getCrudeOilNeeded(heavyOilNeeded: number, lightOilNeeded: number, petroleumGasNeeded: number): number {
        return (petroleumGasNeeded + 0.5 * heavyOilNeeded + 2.0 / 3.0 * lightOilNeeded) / 0.975;
    }

    private static getLightOilCracked(heavyOilNeeded: number, lightOilNeeded: number, crudeOilNeeded: number): number {
        return 0.6375 * crudeOilNeeded -  0.75 * heavyOilNeeded - lightOilNeeded;
    }

    private static getHeavyOilCracked(heavyOilNeeded: number, crudeOilNeeded: number): number {
        return crudeOilNeeded / 4.0 - heavyOilNeeded;
    }
    
    private static getCrudeOilNeededWithProductivity(heavyOilNeeded: number, lightOilNeeded: number, petroleumGasNeeded: number): number {
        return (petroleumGasNeeded + 0.845 * heavyOilNeeded + 13.0 / 15.0 * lightOilNeeded) / 1.496625;
    }

    private static getLightOilCrackedWithProductivity(heavyOilNeeded: number, lightOilNeeded: number, crudeOilNeeded: number): number {
        return 0.901875 * crudeOilNeeded -  0.975 * heavyOilNeeded - lightOilNeeded;
    }

    private static getHeavyOilCrackedWithProductivity(heavyOilNeeded: number, crudeOilNeeded: number): number {
        return 0.325 * crudeOilNeeded - heavyOilNeeded;
    }
}