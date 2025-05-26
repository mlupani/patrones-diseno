/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */


class Document {
    title: string
    content: string
    author: string

    constructor(title: string, content: string, author: string) {
        this.title = title
        this.content = content
        this.author = author
    }

    displayInfo(): void {
        console.log(`%c${this.title}`, "color: blue;")
        console.log(`%c${this.content}`, "color: green;")
        console.log(`%c${this.author}`, "color: red;")
    }

    // ! Método para clonar el objeto
    clone(): Document {
        return new Document(this.title, this.content, this.author)
    }
}

function main() {
    const document = new Document("Document", "Content", "Author")
    console.log({document})
    document.displayInfo()

    // ESTAS FORMAR DE CLONAR NO SIRVEN PARA EL PATRON PROTOTYPE
    //const document2 = structuredClone(document)
    //const document2 = {...document}

    // ! Método para clonar el objeto
    const document2 = document.clone()
    console.log({document2})
    document2.displayInfo()
}

main()