console.log("1");

// first step of login function
function login(email,pass,onSuccess,onFailure){
	userFound = true;
	setTimeout(()=>{
		if (!userFound){
			onFailure(new Error("user not found"))			
		}else{
			onSuccess({userEmail : email});			
		}

	},1500) // let's say server takes 1.5s to reply
}

function getVideos(email,callback){
	setTimeout(()=>{
		callback(['video1','video2','video3']);
	},1000) // let's say server takes 1.5s to reply

}
function getVideoDetails(video,callback){
	setTimeout(()=>{
		callback({codec : "X@2!FhL7X@2!FhL7"})
	},2000)
}

const user = login("js@js.com","XaEinkS12",(user)=>{
	console.log(user); //with callback problem solved
	getVideos(user.email,(videos)=>{
		console.log(videos);
		getVideoDetails(videos[0],(codec)=>{
			console.log(videos[0]  + " --> "+ codec);
			console.log("problem => ['creates callback hell', 'i don't like it']")
		});
	}); 
},(err)=>{console.log(err)});//callback hell




console.log("0");