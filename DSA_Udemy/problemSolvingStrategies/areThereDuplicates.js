// areThereDuplicates accepts a variable number of args
// checks whether there are any duplicates in the arguments

function areThereDuplicates(...args) {
    let seen = {};
    for (let arg of args) {
        if (seen[arg]) {
            return true;
        } else {
            seen[arg] = 1;
        }
    }
    return false;
}