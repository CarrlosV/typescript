// declare var $: any; // nao foi utilizado pois temos o TypeScript Declaration File do jquery
abstract class View<T> {
    private _elemento: JQuery;

    constructor(seletor: string) {
        this._elemento = $(seletor);
    }

    update(model: T): void {
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}