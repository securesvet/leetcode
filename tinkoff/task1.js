const readline = require('readline');

const read = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

read.question('', (input) => {
    const [revolversAmount, moneyAmount] = input.split(' ').map(Number);

    read.question('', (input) => {
        const revolverPrices = input.split(' ').map(Number)
        revolverPrices.sort((x, y) => y - x);
        let priceOfRevolverToAfford = 0;

        for (let price of revolverPrices) {
            if (price <= moneyAmount) {
                priceOfRevolverToAfford = price;
                break;
            }
        }

        console.log(priceOfRevolverToAfford);
        read.close();
    })
})

