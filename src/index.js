const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----': '0',
    ' ': ' ',
};

function decode(expr) {
    let exprArray = expr.split('');
    let substrExpr = [];
    let morseCode = [];
    let result = '';
    let morselet = '';
    for (let i = 0; i < exprArray.length; i=i+10) {
        let substrExpr = exprArray.slice(i, i + 10);
        if (substrExpr[0] === '*') {
            result = result + ' ';
        } else {
            let morseLetter = [];
            for (let j = 0; j < substrExpr.length - 1; j+=2){
               
               if (substrExpr[j] === '1' && substrExpr[j+1] === '0') {
                    morseLetter.push('.');
                } else if (substrExpr[j] === '1' && substrExpr[j+1] === '1') {
                    morseLetter.push('-');
               } else {
                   morseLetter.push('');
                }
            }
                for (let key in MORSE_TABLE) {
                    if (key === morseLetter.join(''))
                        result = result + MORSE_TABLE[key];
            }
        }
       }
    return result;
    
}

module.exports = {
    
    decode
    
}