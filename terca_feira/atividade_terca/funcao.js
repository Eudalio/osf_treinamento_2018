function oddOrEven (num) {
    return num%2 == 0 ? 'par' : 'impar';
    /* if(num%2 == 0) return 'par'
    else return 'impar' */
}

function numberRandom () {
    // Gerando numero aleatorio entre 1 e 100
    return Math.floor((Math.random() * 100) + 1);
}

function listNumbersRandom () {
    let list = []
    for (let i = 0; i < 10; i++) {
        list.push(numberRandom());        
    }
    return list;
}

module.exports = { oddOrEven, numberRandom, listNumbersRandom }