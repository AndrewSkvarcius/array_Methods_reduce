function extractValue(arr, name) {
    return arr.reduce(function (acc, nextname) {
        acc.push(nextname[name]);
        return acc;
    },[])
};

function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(acc, nextVow){
    let lowerCase = nextVow.toLowerCase();
    if (vowels.indexOf(lowerCase )!== -1){
        if(acc[lowerCase]) {
         acc[lowerCase]++;
        }else {
            acc[lowerCase]  = 1;
        }
    }
    return acc;
    }, {});
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function (acc, next, index) {
        acc[index][key] = value; 
        return acc;
    },arr);

}
function partition(arr, callback){
    return arr.reduce(function (acc, next){
        if(callback(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}
   