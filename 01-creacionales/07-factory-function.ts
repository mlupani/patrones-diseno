/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

type language = 'es' | 'en' | 'fr';

function createGreeter(language: language) {
   return function(name: string) {
    if(language === 'es') {
        return `Hola ${name}`;
    } else if(language === 'en') {
        return `Hello ${name}`;
    } else if(language === 'fr') {
        return `Bonjour ${name}`;
    }
   }
}

const greeterEs = createGreeter('es');
const greeterEn = createGreeter('en');
const greeterFr = createGreeter('fr');

console.log(greeterEs('Juan'));
console.log(greeterEn('Juan'));
console.log(greeterFr('Juan'));


