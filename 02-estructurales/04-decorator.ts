import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 *  * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */

interface Notification {
    send(message: string): void;
}

class BasicNotification implements Notification {
    send(message: string): void {
        console.log(`%cEnviando notificación básica: %c${message}`, COLORS.blue, COLORS.white);
    }
}

class NotificationDecorator implements Notification {
    protected notification: Notification;
    constructor(notification: Notification) {
        this.notification = notification;
    }

    send(message: string): void {
        this.notification.send(message);
    }
}

class SMSNotificationDecorator extends NotificationDecorator {
    private sendSMS(message: string): void {
        console.log(`%cEnviando SMS: %c${message}`, COLORS.green, COLORS.white);
    }
    override send(message: string): void {
        super.send(message);
        this.sendSMS(message);
    }
}

class EmailNotificationDecorator extends NotificationDecorator {
    private sendEmail(message: string): void {
        console.log(`%cEnviando email: %c${message}`, COLORS.yellow, COLORS.white);
    }
    override send(message: string): void {
        super.send(message);
        this.sendEmail(message);
    }
}

function main()  {
    let notification: Notification = new BasicNotification();
    notification = new SMSNotificationDecorator(notification);
    notification = new EmailNotificationDecorator(notification);

    notification.send('Hola, este es un mensaje de prueba');
}

main();