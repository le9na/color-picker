const pickColor = document.getElementById("pick-color");
const fileInput = document.getElementById("file");
const image = document.getElementById("image");
const hexInput = document.getElementById("hex-input");
const rgbInput = document.getElementById("rgb-input");
const pickedColor = document.getElementById("picked-color");

const initEyeDropper = () =>{
    if(window.EyeDropper){
        pickColor.classList.remove("hide");
        const eyeDropper = new EyeDropper();
        pickColor.addEventListener("click", async () =>{
            try{
                const hexVal = colorValue.sRGBHex.toLowerCase();
                const rgbVal = hexToRGB(hexVal);
                result.style.display = "grid";
                hexInput.value = hexVal;
                rgbInput.value = rgbVal;
                pickedColor.style.backgroundColor = hexVal;
            }catch{
                alert("Eyedropper not supported for this browser");
            }
        });
    }
    else{
        alert("Eyedropper API is not supported for this browser");
    }
};

fileInput.addEventListener("change", () =>{
    result.style.display = "none";
    const reader = new FileReader();
    reader.onload = () => image.setAttribute("src", reader.result);
    reader.readAsDataURL(fileInput.files[0]);
});


const copyToClipboard = (textId) =>{
    const text = document.getElementById(textId);
    text.select();
    document.execCommand("copy");
};


const hexToRGB = (hex) =>{
    const R = parseInt(hex.slice(1, 3), 16);
    const G = parseInt(hex.slice(3, 5), 16);
    const B = parseInt(hex.slice(5, 7), 16);
    return `RGB(${R}, ${G}, ${B})`;
};

window.onload = initEyeDropper;