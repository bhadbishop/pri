const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");

imageInput.addEventListener("change",function(){
    const file = this.files[0];

    if(file) {
        const reader = new FileReader();

        reader.addEventListener("load",function(){
            previewImage.scr = this.result;
            previewImage.style.display = "block";
        });

        reader.readAsDataURL(file);
    }
}  );