

class Screen{

    #listeners = {};
    

    paint(){

    }

    addEventListener(element, event, callBack){
        element.addEventListener(event, callBack);

        if (!Object.hasOwn(this.#listeners, element)){
            const data = {};
            data[event] = callBack;
            this.#listeners[element] = data; 
        
        }else{

            const data = this.#listeners[element]
            

        }

        
    }

}