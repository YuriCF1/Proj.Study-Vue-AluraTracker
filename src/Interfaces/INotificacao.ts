export enum TipoDeNotificacao {
    /*
    An enum is a special "class" that represents a group of constants (unchangeable variables).
    Enums come in two flavors string and numeric. Lets start with numeric.
    By default, enums will initialize the first value to 0 and add 1 to each additional value:
    */
    SUCCESS, FAIL, WARNING
}

export default interface INotificacao {
    title: string,
    text: string,
    tipo: TipoDeNotificacao
    id: number
}