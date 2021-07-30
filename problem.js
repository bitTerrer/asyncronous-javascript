console.log("1");

// first step of login function
function login(email,pass){
	setTimeout(()=>{
		console.log("data updated");
		return {userEmail : email}
	},1500) // let's say server takes 1.5s to reply
}


const user = login("js@js.com","XaEinkS12");
console.log(user); //user is set to undefined due to server delay

console.log("0");