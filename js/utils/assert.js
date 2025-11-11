class Assert{

    static isNull(obj){
        return obj == null;
    }

    static isString(obj){
        return !this.isNull(obj) && (obj instanceof String || typeof obj === 'string');
    }

    static isList(obj){
        return !this.isNull(obj) && obj instanceof Array;
    }

    static isHtmlElement(obj){
        return !this.isNull(obj) && obj instanceof HTMLElement;
    }

}