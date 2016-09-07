// i will make an array with a list of different types of emotions
var emotionsArray = ['Anger','Sadness','Joy','Fear',]

// this variable will find the first item in my emotionsArray
var firstEmotion = emotionsArray[0];

// i will make an if... else... conditional that will test to
// see whether the first item in my emotionsarray is
// we will also test whether the thirt emotion is surprise emotion
if (firstEmotion == 'Joy') {
  console.log('The first emotion is a Joy emotion');
} else if (emotionsArray[2] == 'Joy'){
  console.log('The third emotion is Surprise emotion.')
} else {
  console.log('The first emotion is not a joy emotion');
  console.log('Actually, the first emotion is '+firstEmotion);
}
