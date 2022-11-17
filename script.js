const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream, pass to video element, then play.
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(err){
        console.log('SelectMediaStream error: ', err);
    }
}

button.addEventListener('click', async()=>{
    button.disable = true;
    await videoElement.requestPictureInPicture();
    button.disable = false;

});

//on load
selectMediaStream();
