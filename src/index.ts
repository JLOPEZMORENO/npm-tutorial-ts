export class Log {
    static danger(message:string){
        console.log(`%c ${message}`, "color: red")
    }
    
    static succes(message:string){
        console.log(`%c ${message}`, "color: green")
    }

    static info(message: string){
        console.log(`%c ${message}`, "color: black; background: yellow")
    }
}