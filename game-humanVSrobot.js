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

var zmogausPergales = 0;
var kompoPergales = 0;
var lygiosios = 0;

async function main() {

    const user = await readLine("\nIvesk reiksme r/p/s:");
    // reikia patkrinti ar vartotojas tikrai ivede r p s

    if (user === 'r' || user === 'p' || user === 's') {
        console.log('\n\tZmogus pasirinko: ' + user);
        const comp = Math.floor(Math.random() * 3);
        if (comp === 0) {
            console.log('\tKompiuteris pasirinko: r');
            var computer = 'r';
            // kas laimejo
            if (user === computer) {
                console.log('\nLygiosios');
                lygiosios++;
            } else if (user === 'p') {
                console.log('\nLaimejo zmogus!');
                zmogausPergales++;
            } else if (user === 's') {
                console.log('\nLaimejo kompiuteris!');
                kompoPergales++;
            }
        } else if (comp === 1) {
            console.log('\tKompiuteris pasirinko: p');
            var computer = 'p';
            if (user === computer) {
                console.log('\nLygiosios');
                lygiosios++;
            } else if (user === 's') {
                console.log('\nLaimejo zmogus!');
                zmogausPergales++;
            } else if (user === 'r') {
                console.log('\nLaimejo kompiuteris!');
                kompoPergales++;
            }
        } else if (comp === 2) {
            console.log('\tKompiuteris pasirinko: s');
            var computer = 's';
            if (user === computer) {
                console.log('\nLygiosios');
                lygiosios++;
            } else if (user === 'r') {
                console.log('\nLaimejo zmogus!');
                zmogausPergales++
            } else if (user === 'p') {
                console.log('\nLaimejo kompiuteris!');
                kompoPergales++;
            }
        }

    } else {
        console.log('\nKlaida ivedant verte. Pasirinkite r, p arba s.\n');
        main();
    }
    const onceMore = await readLine("\nAr kartosim t/n ?: ");
    if (onceMore === 't') {
        main();
    } else {
        console.log('\nZaidimo pabaiga\n------------------------------\n\tZmogaus pergales: ' + zmogausPergales + '\n\tKompo pergales: ' + kompoPergales + '\n\tLygiosios: ' + lygiosios + '\n------------------------------');
        zmogausPergales = 0;
        kompoPergales = 0;
        lygiosios = 0;
        rl.close();
    }


}

main();