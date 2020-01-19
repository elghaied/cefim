//"use strict";

class Test {
    static exists(object, success, error) {
        this.printResult(typeof object !== 'undefined', success, error);
        if (typeof object !== 'undefined') {
            this.validTestsCount++;
        }
        this.testsCount++;
    }

    static assert(object, expected, success, error) {
        this.printResult(object === expected, success, error);
        if (object === expected) {
            this.validTestsCount++;
        } else {
            console.error("\t(Valeur attendu : " + expected + ", Valeur reçu : " + object + ")");
        }
        this.testsCount++;
    }

    static assertType(object, expected, success, error) {
        this.printResult(typeof object === expected, success, error);
        if (typeof object === expected) {
            this.validTestsCount++;
        }
        this.testsCount++;
    }

    static assertInstanceOf(object, instance, success, error) {
        this.printResult(object instanceof instance, success, error);
        if (object instanceof instance) {
            this.validTestsCount++;
        }
        this.testsCount++;
    }


    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static randomArray(array) {
        return array[Math.floor(Math.random()*array.length)];
    }


    static printResult(condition, success, error) {
        if (condition) {
            console.info("✔️ " + success + " : Ok !");
        } else {
            console.error("❌ " + error);
        }
    }
}

Test.testsCount = 0;
Test.validTestsCount = 0;