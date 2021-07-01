const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function readLine(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, value => {
            resolve(value);
        });
    });
}

var comp1Pergales = 0;
var comp2Pergales = 0;
var lygiosios = 0;

async function main() {

    const partijuSkaicius = await readLine("\nKiek kartu bus zaidziama?:");

    if (typeof(parseInt(partijuSkaicius)) === 'number' && partijuSkaicius > 0) {
        for (var i = 1; i <= parseInt(partijuSkaicius); i++) {
            const comp1 = Math.floor(Math.random() * 3);
            const comp2 = Math.floor(Math.random() * 3);
            if (comp1 === 0 && comp2 === 0) {
                console.log('Kompiuteris 1 pasirinko: r');
                console.log('Kompiuteris 2 pasirinko: r');
                console.log('Lygiosios\n');
                lygiosios++;
            } else if (comp1 === 1 && comp2 === 1) {
                console.log('Kompiuteris 1 pasirinko: p');
                console.log('Kompiuteris 2 pasirinko: p');
                console.log('Lygiosios\n');
                lygiosios++;
            } else if (comp1 === 2 && comp2 === 2) {
                console.log('Kompiuteris 1 pasirinko: s');
                console.log('Kompiuteris 2 pasirinko: s');
                console.log('Lygiosios\n');
                lygiosios++;
            } else if (comp1 === 0 && comp2 === 1) {
                console.log('Kompiuteris 1 pasirinko: r');
                console.log('Kompiuteris 2 pasirinko: p');
                console.log('Laimejo Kompiuteris 2\n');
                comp2Pergales++;
            } else if (comp1 === 0 && comp2 === 2) {
                console.log('Kompiuteris 1 pasirinko: r');
                console.log('Kompiuteris 2 pasirinko: s');
                console.log('Laimejo Kompiuteris 1\n');
                comp1Pergales++;
            } else if (comp1 === 1 && comp2 === 0) {
                console.log('Kompiuteris 1 pasirinko: p');
                console.log('Kompiuteris 2 pasirinko: r');
                console.log('Laimejo Kompiuteris 1\n');
                comp1Pergales++;
            } else if (comp1 === 1 && comp2 === 2) {
                console.log('Kompiuteris 1 pasirinko: p');
                console.log('Kompiuteris 2 pasirinko: s');
                console.log('Laimejo Kompiuteris 2\n');
                comp2Pergales++;
            } else if (comp1 === 2 && comp2 === 1) {
                console.log('Kompiuteris 1 pasirinko: s');
                console.log('Kompiuteris 2 pasirinko: p');
                console.log('Laimejo Kompiuteris 1\n');
                comp1Pergales++;
            } else if (comp1 === 2 && comp2 === 0) {
                console.log('Kompiuteris 1 pasirinko: s');
                console.log('Kompiuteris 2 pasirinko: r');
                console.log('Laimejo Kompiuteris 2\n');
                comp2Pergales++;
            }
        }
        console.log('Zaidimo pabaiga\n------------------------------\n\tKompo 1 pergales: ' + comp1Pergales + '\n\tKompo 2 pergales: ' + comp2Pergales + '\n\tLygiosios: ' + lygiosios + '\n------------------------------');
        comp1Pergales = 0;
        comp2Pergales = 0;
        lygiosios = 0;
        rl.close();
    } else {
        console.log('\nKlaida ivedant verte. Iveskite sveika zaidimo partiju skaiciu.\n');
        main();
    }
}

main();