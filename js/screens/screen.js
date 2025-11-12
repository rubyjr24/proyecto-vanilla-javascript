

class Screen{

    #listeners = {};
    html = new HtmlUtil();
    

    // Este método devuelve el contenido de la screen
    paint(){

    }

    addEventListener(element, event, callBack){
        element.addEventListener(event, callBack);

        if (!Object.hasOwn(this.#listeners, element)){
            const data = {};
            data[event] = [callBack];
            this.#listeners[element] = data; 
        
        }else{
            this.#listeners[element].event.push(callBack);
        }

        
    }

}