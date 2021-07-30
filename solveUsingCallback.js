console.log("1");

// first step of login function
function login(email,pass,callback){
	setTimeout(()=>{
		callback({userEmail : email});
	},1500) // let's say server takes 1.5s to reply
}


const user = login("js@js.com","XaEinkS12",(user)=>{
	console.log(user); //with callback problem solved
});


console.log("0");