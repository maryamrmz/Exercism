//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = pangram => {
    let sentence = pangram.toLowerCase().split("");
    let alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];

    for (let i = 0; i < alphabet.length; i++) {
        if (sentence.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }
    return true;
};
