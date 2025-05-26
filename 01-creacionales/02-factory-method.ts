/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburger {
    prepare(): void
}

class ChickenBurger implements Hamburger {
    prepare(): void {
        console.log("Preparando %cChickenBurger", "color: yellow;");
    }
}

class BeefBurger implements Hamburger {
    prepare(): void {
        console.log("Preparando %cBeefBurger", "color: brown;");
    }
}

class BeanBurger implements Hamburger {
    prepare(): void {
        console.log("Preparando %cBeanBurger", "color: green;");
    }
}

abstract class Restaurant {
    protected abstract createHamburger(): Hamburger

    orderHamburger(): void {
        const hamburger = this.createHamburger()
        hamburger.prepare()
    }
}

class ChickenRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new ChickenBurger()
    }
}

class BeefRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new BeefBurger()
    }
}

class BeanRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new BeanBurger()
    }
}

function main(){

    let restaurant: Restaurant

    const burgerType = prompt("¿Qué tipo de hamburguesa desea? (chicken/beef/bean)")

    if (burgerType === "chicken") {
        restaurant = new ChickenRestaurant()
    } else if (burgerType === "beef") {
        restaurant = new BeefRestaurant()
    } else if (burgerType === 'bean'){
        restaurant = new BeanRestaurant()
    } else {
        console.log("Tipo de hamburguesa inválido")
        return
    }

    restaurant.orderHamburger()
}

main()