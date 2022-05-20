const answer = document.getElementById("answer")

let rnum;

const delay = ms => new Promise(res => setTimeout(res, ms));
const randomtime = () => {return Math.floor(Math.random()*3000)};

var questionmus = new Audio('./Puzzles.wav');
var yes = new Audio('./correctsfx.mp3');
var no = new Audio('./wronganswer.mp3');


const randomNum = (num) =>{
return Math.floor(Math.random()*num)
}
const answerNum = () =>{
	return rnum = Math.floor(Math.random()*2)

}
const flickanswer = async() =>{
	let speed = 1000
	questionmus.play()
	for (i = 0; i < 30; i++){
		console.log(i)
		answer.innerHTML = "Yes"
		await delay(speed)
		speed -= randomNum(100)
		answer.innerHTML = "No"
		await delay(speed)
		speed -= randomNum(100)
		answer.innerHTML = "Maybe"
		await delay(speed)
		speed -= randomNum(100)
		
	}
	questionmus.pause()
	questionmus.currentTime=0;
	answer.innerHTML = "Got It!...."
	await delay(2000)
	
	givenanswer()


}
const givenanswer = () =>{
	if(rnum == 0){
		yes.play();
		manswer = answer.innerHTML = "Yes"

}else if(rnum == 1){
	no.play();
	 manswer = answer.innerHTML = "No"

}
}
const charliecharlie = async () => {
	answerNum();
	answer.innerHTML = "Let me think..."
	await delay(randomtime() + 4000);
	answer.innerHTML = "I have something..."
	await delay(randomtime());
	answer.innerHTML = "The Answer is:..."
	await delay(randomtime());
	flickanswer()
	
} 


const yourFunction = async () => {
	await delay(5000);
	console.log("Waited 5s");
  
	await delay(5000);
	console.log("Waited an additional 5s");
  };

