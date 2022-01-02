const leapYears = function(year) {
    //if year is not divisible by 4 then it is a common year
    if(year % 4 !== 0){
        return false;
    }
    //else if year is not divisible by 100 then it is a leap year
    else if(year % 100 !== 0){
        return true;
    }
    //else if year is not divisible by 400 then it is a common year
    else if(year % 400 !== 0){
        return false;
    }
    //else it is a leap year
    else{
        return true;
    }
};

// Do not edit below this line
module.exports = leapYears;
