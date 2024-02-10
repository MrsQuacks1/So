camera=document.getElementById("camera");
Webcam.set({
    width:500, height:400, image_format:"png", png_quality:80
})
Webcam.attach(camera)