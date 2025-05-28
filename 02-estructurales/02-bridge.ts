/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

interface IAbility {
  use(): void;
}

class SwordAttack implements IAbility {
  use(): void {
    console.log("Sword attack");
  }
}

class AxeAttack implements IAbility {
  use(): void {
    console.log("Axe attack");
  }
}

class MagicSpell implements IAbility {
  use(): void {
    console.log("Magic spell");
  }
}

class FireBallSpell implements IAbility {
    use(): void {
    console.log("Fire ball spell");
  }
}

abstract class Character {
  public ability: IAbility;

  constructor(ability: IAbility) {
    this.ability = ability;
  }

  setAbility(ability: IAbility): void {
    this.ability = ability;
  }

  abstract performAbility(): void;
}

class Warrior extends Character {
  override performAbility(): void {
    console.log("Warrior is ready to attack");
    this.ability.use();
  }
}

class Mage extends Character {
  override performAbility(): void {
    console.log("Mage is ready to cast a spell");
    this.ability.use();
  }
}

const warrior = new Warrior(new SwordAttack());
const mage = new Mage(new MagicSpell());

warrior.performAbility();
mage.performAbility();

warrior.setAbility(new AxeAttack());
warrior.performAbility();

mage.setAbility(new FireBallSpell());
mage.performAbility();