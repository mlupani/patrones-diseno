/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 */

import { COLORS } from '../helpers/colors.ts';

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean = false;

  // Constructor privado para evitar instancias directas
  private constructor() {}

  // Método estático para obtener la instancia única
  public static getInstance(): DatabaseConnection {
    // Completar: implementar el patrón Singleton
    if(!DatabaseConnection.instance){
      console.log('%cNueva conexion a la base de datos', COLORS.blue)
      return DatabaseConnection.instance = new DatabaseConnection()
    }
    console.log('%cYa existe una conexion a la base de datos', COLORS.yellow)
    return this.instance
  }

  // Método para conectar a la base de datos
  public connect(): void {
    if(this.connected && DatabaseConnection.instance){
      console.log('%cYa existe una conexion activa', COLORS.red);
      return;
    }
    this.connected = true;
    console.log('%cBase de datos conectada', COLORS.green)
  }

  // Método para desconectar de la base de datos
  public disconnect(): void {
    // Completar: desconectar y mostrar mensaje de desconexión
    if(!this.connected && !DatabaseConnection.instance){
      console.log('%cNo existe una conexion activa', COLORS.red);
      return;
    }
    this.connected = false;
    console.log('%cBase de datos desconectada', COLORS.blue)
  }
}

// Pruebas
function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect(); // Debería conectar a la base de datos

  const db2 = DatabaseConnection.getInstance();
  db2.connect(); // Debería mostrar que ya existe una conexión activa

  console.log('Son iguales:', db1 === db2); // Debería mostrar true

  db1.disconnect(); // Debería cerrar la conexión

  db2.connect(); // Ahora debería conectar de nuevo, ya que se cerró la anterior
}

main();
