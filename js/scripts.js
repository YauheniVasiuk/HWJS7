// Task 1
let Calc = function() {
    this.get = function() {
        this.onOff = prompt("Введите операцию: Вкл/выкл (+/-)");
        this.a = +prompt("Введите число a");
        this.b = +prompt("Введите число b");
        this.oper = prompt("Введите операцию: +, -, *, /");

        this.operation();
    };

    this.operation = function() {
        switch(this.onOff) {
            case '+':
                this.resultOn = "Вкл";
            break;
            case '-':
                this.resultOn = "Выкл";
            break;
            default: this.resultOn = "Не правильный ввод";
        }
        switch(this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }

        this.show();
    };

    this.show = function() {
        if(this.resultOn == 'Вкл') {
        alert(this.resultOn + "\n" + this.a + ' ' + this.oper + ' ' + this.b + ' ' + ' = ' + this.result);
        } else {
            alert("Калькулятор выключен \n" + this.resultOn);
        }
    };
};

let calc = new Calc();
calc.get();
