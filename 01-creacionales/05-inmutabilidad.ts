/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

import { COLORS } from "../helpers/colors.ts";


class CodeEditorState {
    readonly content: string;
    readonly cursorPosition: number;
    readonly unsavedChanges: boolean;

    constructor(content: string, cursorPosition: number, unsavedChanges: boolean) {
        this.content = content;
        this.cursorPosition = cursorPosition;
        this.unsavedChanges = unsavedChanges;
    }

    displayState() {
        console.log('%cEstado actual del editor de código:', COLORS.blue);
        console.log('Contenido:', this.content);
        console.log('Cursor:', this.cursorPosition);
        console.log('Cambios sin guardar:', this.unsavedChanges ? 'Sí' : 'No');
    }

    copyWith({content, cursorPosition, unsavedChanges}: Partial<CodeEditorState>): CodeEditorState {
        return new CodeEditorState(content ?? this.content, cursorPosition ?? this.cursorPosition, unsavedChanges ?? this.unsavedChanges);
    }
}


class CodeEditorHistory {
    private history: CodeEditorState[] = [];
    private currentIndex: number = -1;

    save(state: CodeEditorState): void {
        if (this.currentIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.currentIndex + 1);
        }
        this.history.push(state);
        this.currentIndex++;
    }
    
    redo(): CodeEditorState | null {
        if(this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }
        return null;
    }

    undo(): CodeEditorState | null {
        if(this.currentIndex > 0) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }
        return null;
    }

}

function main() {
    const history = new CodeEditorHistory();
    let editorState = new CodeEditorState('console.log("Hola, mundo!");', 0, false);

    history.save(editorState);

    editorState.displayState();

    editorState = editorState.copyWith({content: 'console.log("Hola, mundo con mas cosas!");', cursorPosition: 2, unsavedChanges: true});

    history.save(editorState);

    editorState.displayState();

    editorState = editorState.copyWith({cursorPosition: 10});

    history.save(editorState);

    editorState.displayState();

    editorState = history.undo()!;

    editorState.displayState();

    editorState = history.redo()!;

    editorState.displayState();
}

main();