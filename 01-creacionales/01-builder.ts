/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public storage: string = 'storage - not defined';
    public gpu?: string;

    displayConfiguration() {
        console.log(`Configuracion de la computadora:
            CPU: ${this.cpu}
            RAM: ${this.ram}
            STORAGE: ${this.storage}
            GPU: ${this.gpu}
        `);
    }
}

class ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }
    
    setCpu(cpu: string) {
        this.computer.cpu = cpu;
        return this;
    }

    setRam(ram: string) {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string) {
        this.computer.storage = storage;
        return this;
    }

    setGpu(gpu: string) {
        this.computer.gpu = gpu ?? 'No tiene GPU';
        return this;
    }

    build() {
        return this.computer;
    }
}


function main(){
    const computerBuilder = new ComputerBuilder();
    const superComputer = computerBuilder
        .setCpu('Intel Core i9')
        .setRam('32GB')
        .setStorage('2TB')
        .setGpu('NVIDIA GeForce RTX 3090')
        .build();


    console.log('%cSuper Computadora creada: ', COLORS.blue)
    superComputer.displayConfiguration();

    const regularComputer = new ComputerBuilder()
        .setCpu('Intel Core i5')
        .setRam('8GB')
        .setStorage('512GB')
        .setGpu('No tiene GPU')
        .build();

    console.log('%cComputadora regular creada: ', COLORS.green)
    regularComputer.displayConfiguration();
}

main();