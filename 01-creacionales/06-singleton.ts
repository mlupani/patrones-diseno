import { COLORS } from '../helpers/colors.ts';
/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBalls {
    private static instance: DragonBalls;
    private ballsCollected: number;

    private constructor() {
        this.ballsCollected = 0;
    }

    static getInstance(): DragonBalls {
        if(!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
            console.log('%cDragon Balls creadas', COLORS.orange);
        }
        return DragonBalls.instance;
    }

    collectBall(): void {
        if(this.ballsCollected < 7) {
            this.ballsCollected++;
            console.log(`%cDragon Ball recogida, total: ${this.ballsCollected}`, COLORS.green);
        } else {
            console.log('%cNo se pueden recoger más Dragon Balls, llama a shenLong', COLORS.red);
        }
    }

    callShenLong(): void {
        if(this.ballsCollected === 7) {
            console.log('%cShen Long apareció, pide tu deseo!', COLORS.yellow);
            this.ballsCollected = 0;
            console.log('%cDragon Balls restablecidas', COLORS.green);
        } else {
            console.log(`%cNo se pueden llamar a Shen Long, coge más Dragon Balls, solo te faltan ${7 - this.ballsCollected} Dragon Balls`, COLORS.red);
        }
    }
}

function main() {
    const goku = DragonBalls.getInstance();
    const vegeta = DragonBalls.getInstance();

    goku.collectBall();
    goku.collectBall();
    goku.collectBall();

    goku.callShenLong();

    vegeta.collectBall();
    vegeta.collectBall();
    vegeta.collectBall();
    vegeta.collectBall();

    goku.callShenLong();

    vegeta.callShenLong();
}

main();