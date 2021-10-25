const  fibonachi = (n)=> {  // обчислення за формулоюю Біне, перевага на фрактальним способом в лінійному виконанні Алгоритму
    const a = (1 +  Math.sqrt(5)) / 2;
    const b = (1 -  Math.sqrt(5)) / 2;

    return Math.round(((Math.pow(a, n) - Math.pow(b, n)) /  Math.sqrt(5)));
};

const startFibonachi  = (n) => {
    let indexFibonachi = Number(n);

    if (isNaN(indexFibonachi) || indexFibonachi < 0  ){
        throw new Error(`Expected incorrect index`);
    }

    return fibonachi(indexFibonachi);
};

module.exports = {
    startFibonachi,
};