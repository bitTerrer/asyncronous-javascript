console.log("1");

function login(email, password) {
  return new Promise((resolve, reject) => {
    const userfound = true;

    setTimeout(() => {
		if(userfound){
			resolve({ userEmail: email });
		}else{
			reject(new Error("user not found"))
	}
    }, 1500); // let's say server takes 1.5s to reply
    // reject({errno:22});
  });
}

function getVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 1000); // let's say server takes 1.5s to reply
  });
}
function getVideoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ codec: "h264" });
    }, 2000);
  });
}
function getCode(codec){
    setTimeout(() => {
    return("string")},1000);
}

// async function
async function getData(){
    try{
    const user = await login("vb","vb");
    console.log(user);
    const videos = await getVideos(user.email);
    console.log(videos);
    const codec = await getVideoDetails(videos[0]);
    console.log(codec);
    const code = await getCode(codec.codec); // await is applyed if only promise is returned 
    console.log(code + " // because not pr0mising so no waiting " );
    }catch(err){
        console.log(err);
    }
}


getData();

console.log("0");
