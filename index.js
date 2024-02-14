

function Switchff(){
    document.getElementById("imageLight").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("imagecat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("textchange").textContent = "Switched Off"
    document.getElementById("backgroundswitchoff").style.backgroundColor="#cbd2d9"
    document.getElementById("backgroundswitchon").style.backgroundColor="#22c55e"
    
}

function switchon(){
    document.getElementById("imageLight").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("imagecat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("textchange").textContent = "Switched On"
    document.getElementById("backgroundswitchoff").style.backgroundColor="red"
    document.getElementById("backgroundswitchon").style.backgroundColor="#cbd2d9"
}