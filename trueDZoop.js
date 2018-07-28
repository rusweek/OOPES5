
function Calculator(firstNumber) {

    this.numberSum = firstNumber;
    this.numberDif = firstNumber;
    this.numberDiv = firstNumber;
    this.numberMul = firstNumber;
}

Calculator.prototype.sum = function () {
        for (let i = 0; i < arguments.length; i++) {
            this.numberSum += arguments[i]
        }
    
        return this.numberSum;
};

Calculator.prototype.dif = function () {

        for (let i = 0; i < arguments.length; i++) {
            this.numberDif -= arguments[i]
        }
    
        return this.numberDif;
};

Calculator.prototype.div = function () {

        for (let i = 0; i < arguments.length; i++) {
            try {
                if (arguments[i] == 0) {
                    throw new Error('The divisor is must not be zero!Exclude zero from array.')
                }
            } catch (e) {
                return e
            }

            this.numberDiv /= arguments[i]
        }
    
        return this.numberDiv;
};

Calculator.prototype.mul = function () {
    
        for (let i = 0; i < arguments.length; i++) {
            this.numberMul *= arguments[i]
        }
    
        return this.numberMul;
};


function SqrCalc(firstNumber) {
    Calc.apply(this, arguments);
}

SqrCalc.prototype = Object.create(Calc.prototype);

SqrCalc.prototype.sum = function () {
    Calc.prototype.sum.apply(this, arguments);
    return this.numberSum *= this.numberSum;
};

SqrCalc.prototype.dif = function () {
    Calc.prototype.dif.apply(this, arguments);
    return this.numberDif *= this.numberDif;
};

SqrCalc.prototype.div = function () {
    Calc.prototype.div.apply(this, arguments);
    return this.numberDiv *= this.numberDiv;
};

SqrCalc.prototype.mul = function () {
    Calc.prototype.mul.apply(this, arguments);
    return this.numberMul *= this.numberMul;
};


//class SqlCalc extends require('./calculator') {

    sum() {
        super.sum(...arguments);
        return this.numberSum *= this.numberSum;
    }

    dif() {
        super.dif(...arguments);
        return this.numberDif *= this.numberDif;
    }

    div() {
        super.div(...arguments);
        return this.numberDiv *= this.numberDiv;
    }

    mul() {
        super.mul(...arguments);
        return this.numberMul *= this.numberMul;
    }