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

  login("xyz@yza.com","secret")
  .then(user => {
	  console.log(user);
	  return getVideos(user.email)})
  .then(videos => {
	  console.log(videos);
	  return getVideoDetails(videos[0])})
  .then(video => {
	  console.log(video);
	  return getVideoDetails(video)})
  .catch(err => console.log(err))

console.log("0");
