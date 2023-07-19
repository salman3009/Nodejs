const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Adds two number',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true,
            type: 'number'
        },
        secondNumber: {
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }

    },
    handler(arg){
        console.log("Result",arg.firstNumber + arg.secondNumber)
    }
})

yargs.parse();

//cmd:  node app add --firstNumber=4 --secondNumber=6