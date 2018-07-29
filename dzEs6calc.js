class Calc{
    constructor(num){
        this.thoseSum = num;
        this.thoseDif = num;
        this.thoseDiv = num;
        this.thoseMul = num;
    };
    sum(){
        let length = arguments.length;
        for(let i = 0; i<length; i++){
            this.thoseSum +=arguments[i];
        };
        return  this.thoseSum;
    };
    dif(){
        let length = arguments.length;
        for (let i = 0; i < length; i++) {
            this.thoseDif -=arguments[i];
            
            
        };
        return this.thoseDif;
    };
    div(){
        let length = arguments.length;
        for (let i = 0; i < length; i++) {
            this.thoseDiv /= arguments[i];
            
        }
        return this.thoseDiv;
    };
    mul(){
        let length = arguments.length;
        for (let i = 0; i < length; i++) {
            this.thoseMul *=  arguments[i];
        };
        return this.thoseMul;
    };
};

let s = new Calc(100);
    console.log(s.sum(1,2,3));
    console.log(s.dif(10,30));
    console.log(s.div(10,2));
    console.log(s.mul(2,2));
    console.log('--------------------------------------------------------------');


    class SqlCalc extends Calc{
        constructor(num){
            super(num);
        };

        sum(){
            super.sum(...arguments);
            return this.thoseSum*=this.thoseSum;
        };
        dif(){
            super.dif(...arguments);
            return this.thoseDif*=this.thoseDif;
        };
        div(){
            super.div(...arguments);
            return this.thoseDiv*=this.thoseDiv;
        };
        mul(){
            super.mul(...arguments);
            return this.thoseMul*=this.thoseMul;
        };
    };

    let s2  = new SqlCalc(100);
    
    console.log(s2.sum(1,2,3));
    console.log(s2.dif(10,20));
    console.log(s2.div(2,2));
    console.log(s2.mul(2,2));