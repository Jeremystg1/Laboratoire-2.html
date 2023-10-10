import Model from './model.js';

export default class calculator extends Model {
    constructor(params) {
        super();

        this.addField('op', 'string');
        this.addField('x', 'Number');
        this.addField('y', 'Number');
        this.addField('n', 'integer');
        this.addField('value', 'string');

        this.op = params.op;
        this.x = params.x || params.X;
        this.y = params.y || params.Y;
        this.n = params.n;
        this.params = params;
    }
    compute(){
        switch(this.op){
            case " ":
            case "+":
                if(!this.ValidNumber("x") || !this.ValidNumber("y")) {
                    this.messageErreur = "Invalid number";
                    break;
                }
                if(!this.ValidNumber("x")) {
                    this.messageErreur = "parameter x is not valid";
                    break;
                }
                if(!this.ValidNumber("y")) {
                    this.messageErreur = "parameter y missing";
                    break;
                }
                if(this.parametreDeTrop()){
                    this.messageErreur = "You put a parameter over";
                    break;
                }
                this.value = parseFloat(this.x) + parseFloat(this.y);
                break;
            break;


            case "-":
                if(!this.ValidNumber("x")) {
                    this.messageErreur = "parameter x missing";
                    break;
                }
                if(!this.ValidNumber("y")) {
                    this.messageErreur = "parameter y missing";
                    break;
                }
                if(this.parametreDeTrop()){
                    this.messageErreur = "You put a parameter over";
                    break;
                }
                this.value = parseFloat(this.x) - parseFloat(this.y);
                break;


            case "/":
                if(parseFloat(this.y) == 0 && parseFloat(this.x) == 0){
                    this.value = "NaN";
                    break;
                }
                if(parseFloat(this.y) == 0){
                    this.value = "Infinity";
                    break;
                }
                if(this.parametreDeTrop()){
                    this.messageErreur = "You put a parameter over";
                    break;
                }
                this.value = parseFloat(this.x) / parseFloat(this.y);
                break;


            case "*":
                if(!this.ValidNumber("x")) {
                    this.messageErreur = "parameter x missing";
                    break;
                }
                if(!this.ValidNumber("y")) {
                    this.messageErreur = "parameter y missing";
                    break;
                }
                if(this.parametreDeTrop()){
                    this.messageErreur = "You put a parameter over";
                    break;
                }
                this.value = parseFloat(this.x) * parseFloat(this.y);
                break;


            case "%":
                if(parseFloat(this.y) == 0 && parseFloat(this.x) == 0){
                    this.value = "NaN";
                    break;
                }
                if(parseFloat(this.y) == 0 || parseFloat(this.x) == 0){
                    this.value = "NaN";
                    break;
                }
                if(this.parametreDeTrop()){
                    this.messageErreur = "You put a parameter over";
                    break;
                }
                
                this.value = parseFloat(this.x) % parseFloat(this.y);
                break;   
            
            case "!":
                if(parseFloat(this.n) == 0 ) {
                    this.messageErreur = "invalid number";
                    break;
                }
                if(!this.ValidNumber("n")){
                    this.messageErreur = "parameter n is not a valid integer";
                    break;
                }
                if(this.parametreDeTrop()){
                    this.messageErreur = "You put a parameter over";
                    break;
                }
                this.value = parseFloat(this.n) * -1;
                break;
            
            case "p":
                if(this.parametreDeTrop()){
                    this.messageErreur = "You put a parameter over";
                    break;
                }
                if(parseFloat(this.n) == 0 ){
                    this.messageErreur = "invalid number";
                    break;
                }
                if(this.ValidNumber("n")){
                    if(this.itsPrime(this.n)){
                        this.value = true;
                        break;
                    }else{
                        this.value = false;
                        break;
                    }
                }else{
                    this.messageErreur = "parameter n is not a valid integer";
                    break;
                }
                break;
            
            case "np":
                if(this.parametreDeTrop()){
                    this.messageErreur = "You put a parameter over";
                    break;
                }
                if(this.ValidNumber("n")){
                    this.value = this.findThisPrime(this.n);
                    break;
                }else{
                    this.messageErreur="n is not a valid integer"
                    break;
                }

            default:
                if(this.op == undefined){
                    this.messageErreur="this service his not implemented"
                    break;
                }
                
        }
    }

    parametreDeTrop(){
        if(this.params.z != undefined){
            return true;
        }
        else{
            return false;
        }
    }

    ValidNumber(whatCheck){
        if(whatCheck == "x"){
            if(this.x != undefined){
                if(!Number.isNaN(this.x)){
                    if(this.x > 0 ){
                        if(this.x < Number.MAX_VALUE){
                            return true
                        }
                    }else{
                        return false;
                    }
                }
                else{
                    return false;
                }
            }else{
                return false;
            }
        }
        else if(whatCheck == "y"){
            if(this.y != undefined){
                if(!Number.isNaN(this.y)){
                    if(this.y > 0 ){
                        if(this.y < Number.MAX_VALUE){
                            return true
                        }
                    }else{
                        return false;
                    }
                }
                else{
                    return false;
                }
            }else{
                return false;
            }
        }
        else if(whatCheck == "n"){
            if(this.n != undefined){
                if(!Number.isNaN(this.n)){
                    if(this.n <= 0 ){
                        return false;
                    }else{
                        if(Number.isInteger(parseFloat(this.n))){
                            if(this.n < Number.MAX_VALUE){
                                return true
                            }
                            else{
                                return false;
                            }
                        }else{
                            return false;
                        }
                        
                    }
                    
                }
                else{
                    return false;
                }
            }else{
                return false;
            }
        }
    }

    findThisPrime(number) {
        let prime = 0;
        for (let i = 0; i < number; i++) {
            prime++;
            while (!itsPrime(prime)) {
                prime++;
            }
        }
        return primeNumer;
    }

    itsPrime(number){
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return number > 1;
    }


}