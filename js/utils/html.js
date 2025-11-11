

class HtmlUtil{

    static #checkContentListValidElements(content){

        if (!Assert.isList(content)){
            return false;
        }

        for (const element of content) {
            if (!Assert.isHtmlElement(element)){
                return false;
            }
        }

        return true;
    }

    static #appendChilds(element, list){
        for (const child of list) {
            element.appendChild(child);
        }
    }

    static #createHtmlElement(tag, content, classList, id){
        const element = document.createElement(tag);

        if (this.#checkContentListValidElements(content)) this.#appendChilds(element, content);
        else if (Assert.isHtmlElement(content)) element.appendChild(content);
        else if (Assert.isString(content)) element.innerText = content;

        if (Assert.isList(classList)) element.classList.add(...classList);
        else if (Assert.isString(classList)) element.classList.add(classList);

        if (Assert.isString(id)) element.id = id;

        return element;
    }

    static div(content, classList, id){
        return this.#createHtmlElement('div', content, classList, id);
    }

    static p(content, classList, id){
        return this.#createHtmlElement('p', content, classList, id);
    }

    static span(content, classList, id){
        return this.#createHtmlElement('span', content, classList, id);
    }

    static h1(content, classList, id){
        return this.#createHtmlElement('h1', content, classList, id);
    }

    static h2(content, classList, id){
        return this.#createHtmlElement('h2', content, classList, id);
    }

    static h3(content, classList, id){
        return this.#createHtmlElement('h3', content, classList, id);
    }

    static ol(content, classList, id){
        return this.#createHtmlElement('ol', content, classList, id);
    }

    static ul(content, classList, id){
        return this.#createHtmlElement('ul', content, classList, id);
    }

    static li(content, classList, id){
        return this.#createHtmlElement('li', content, classList, id);
    }

}