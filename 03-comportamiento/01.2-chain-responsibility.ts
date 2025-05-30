/**
 * ! Patron Chain of Responsibility
 * Es un patrón de diseño de comportamiento que te permite pasar solicitudes
 * a lo largo de una cadena de manejadores.
 *
 * * Es útil cuando se necesita procesar datos de diferentes maneras, pero no
 * * se sabe de antemano qué tipo de procesamiento se necesita o en qué orden
 * * pero se sabe que se necesita procesar en una secuencia.
 */

import { COLORS } from '../helpers/colors.ts';

// 1. Interfaz Approver
interface Approver {
  setNext(approver: Approver): Approver;
  approveRequest(amount: number): void;
}

// 2. Clase Abstracta BaseApprover para manejar la cadena
abstract class BaseApprover implements Approver {
  private nextApprover: Approver | null = null;

  setNext(approver: Approver): Approver {
    this.nextApprover = approver;
    return approver;
  }

  abstract approveRequest(amount: number): void;

  protected next(amount: number): void {
    if (this.nextApprover) {
      this.nextApprover.approveRequest(amount);
      return;
    } 
    
    
    console.log('Solicitud no pudo ser aprobada.');
    
  }
}

// 3. Clases Concretas de Aprobadores

class Supervisor extends BaseApprover {
  override approveRequest(amount: number): void {
    if(amount <= 1000){
      console.log(
        `Supervisor: %cAprobando monto de ${amount}`,
        COLORS.yellow
      );
      return;
    }

    super.next(amount)
  }
}

class Manager extends BaseApprover {
  override approveRequest(amount: number): void {
    if(amount <= 5000){
      console.log(
        `Manager: %cAprobando monto de ${amount}`,
        COLORS.yellow
      );
      return;
    }

    super.next(amount)
  }
}

class Director extends BaseApprover {
  override approveRequest(amount: number): void {
    if(amount){
      console.log(
        `Director: %cAprobando monto de ${amount}`,
        COLORS.yellow
      );
      return;
    }

    super.next(amount)
  }
}

// 4. Código Cliente para probar la cadena de responsabilidad

function main() {
  // supervisor: <= 1000
  const supervisor = new Supervisor();
  // manager: <= 5000
  const manager = new Manager();
  // director: todo
  const director = new Director();

  // Configurar la cadena de responsabilidad
  supervisor.setNext(manager).setNext(director);

  // Probar diferentes solicitudes de compra
  console.log('Solicitud de compra de $500:');
  supervisor.approveRequest(500);

  console.log('\nSolicitud de compra de $3000:');
  supervisor.approveRequest(3000);

  console.log('\nSolicitud de compra de $7000:');
  supervisor.approveRequest(7000);
}

main();
