

class HtmlUtil{

    #checkContentListValidElements(content){

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

    #appendChilds(element, list){
        for (const child of list) {
            element.appendChild(child);
        }
    }

    #createHtmlElement(tag, content, classList, id){
        const element = document.createElement(tag);

        if (this.#checkContentListValidElements(content)) this.#appendChilds(element, content);
        else if (Assert.isHtmlElement(content)) element.appendChild(content);
        else if (Assert.isString(content)) element.innerText = content;

        if (Assert.isList(classList)) element.classList.add(...classList);
        else if (Assert.isString(classList)) element.classList.add(classList);

        if (Assert.isString(id)) element.id = id;

        return element;
    }

    div(content, classList, id){
        return this.#createHtmlElement('div', content, classList, id);
    }

    p(content, classList, id){
        return this.#createHtmlElement('p', content, classList, id);
    }

    span(content, classList, id){
        return this.#createHtmlElement('span', content, classList, id);
    }

    h1(content, classList, id){
        return this.#createHtmlElement('h1', content, classList, id);
    }

    h2(content, classList, id){
        return this.#createHtmlElement('h2', content, classList, id);
    }

    h3(content, classList, id){
        return this.#createHtmlElement('h3', content, classList, id);
    }

    ol(content, classList, id){
        return this.#createHtmlElement('ol', content, classList, id);
    }

    ul(content, classList, id){
        return this.#createHtmlElement('ul', content, classList, id);
    }

    li(content, classList, id){
        return this.#createHtmlElement('li', content, classList, id);
    }

}