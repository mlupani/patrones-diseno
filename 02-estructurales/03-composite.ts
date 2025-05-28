/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 *
 */

interface FileSystemComponent {
    showDetails(indent?: string): string;
}

class File_ implements FileSystemComponent {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    showDetails(indent = ''): string {
        return `${indent}- Archivo: ${this.name} \n`;
    }
}

class Folder implements FileSystemComponent {
    private name: string;
    private contents: FileSystemComponent[] = [];

    constructor(name: string) {
        this.name = name;
    }

    add(component: FileSystemComponent): void {
        this.contents.push(component);
    }

    showDetails(indent = ''): string {
        let details = `${indent}+ Carpeta: ${this.name}\n`;
        this.contents.forEach(component => {
            details += component.showDetails(indent + ' ');
        });
        return details;
    }

}


function main(){

    const file1 = new File_('archivo1.txt');
    const file2 = new File_('archivo2.txt');
    const file3 = new File_('archivo3.txt');
    const file4 = new File_('archivo4.txt');

    const folder1 = new Folder('carpeta 1');
    folder1.add(file1);
    folder1.add(file2);

    const folder2 = new Folder('carpeta 2');
    folder2.add(file3);
    folder2.add(file4);

    const folder3 = new Folder('carpeta 3');
    folder3.add(file4);

    folder2.add(folder3);

    const root = new Folder('root');
    root.add(folder1);
    root.add(folder2);
    root.add(folder3);

    console.log(root.showDetails());
}

main();