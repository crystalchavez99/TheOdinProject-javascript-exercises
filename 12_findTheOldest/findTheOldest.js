const findTheOldest = function (people) {
    const age = (x) => (x.yearOfDeath || new Date().getFullYear()) - x.yearOfBirth;
    const oldest = people.sort((a, b) =>{
        //age(a) > age(b) ? -1 : 1;
        if(age(a) > age(b)){
            return -1;
        }else{
            return 1;
        }
    });
    return oldest[0];
}

// Do not edit below this line
module.exports = findTheOldest;
