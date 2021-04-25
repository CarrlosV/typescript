class MensagemView {

    private _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(model:string):void {
        this._elemento.innerHTML = this.template(model);
    }

    private template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`;
    }
}