let bank = 1000;

let storage = {
    beer: {
        price: 25,
        count: 100
    },
    vine: {
        price: 30,
        count: 50
    },
    pepsi: {
        price: 15,
        count: 80
    }
}

function getStorage(key) {
    return storage[key].count;
}
function getBank() {
    return bank;
}
function sell(count, key) {
    if (count <= storage[key].count && count != 0) {
        let total = count * storage[key].price;
        bank += total;
        storage[key].count -= count;
        return total;
    }
    else if(count == 0){
        return 'Введіть додатнє число';
    }
    else {
        return 'Недостатньо продукції на складі';
    }
}

export { getBank, getStorage, sell };