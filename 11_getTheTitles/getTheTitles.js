const getTheTitles = function(arr) {
    let newArr = [];
    //returns the value of the first element in the provided array
    arr.find(object => {
        //push found value into array to return
       newArr.push(object.title)
    })
    return newArr;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
  console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
