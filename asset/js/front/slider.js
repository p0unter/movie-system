const sliderImgPreview = document.querySelector(".slider-img-preview");
const sliderLeft = document.getElementById("slider-left");
const sliderRight = document.getElementById("slider-right");
const sliderLogo = document.querySelector(".slider-logo");
const sliderDesc = document.querySelector(".slider-parag");
const sliderLog = document.querySelector(".slider-log");

let dataArrayLimited = [];
for (let x in dataArray) {
    if (x < 10) {
        dataArrayLimited.push(dataArray[x]);
    }
}

let nowLocation = 0;

let isNotHover = false;
setInterval(() => {
    if (isNotHover == false) {
        if (nowLocation !== 9) {
            nowLocation++;
            sliderOpIs();
            getSliderItem();
            IsActiveSliderLog("log-"+nowLocation);
        } else {
            nowLocation = -1;
        }
    }
}, 10000);

function getSliderItem() {
    console.log(nowLocation)
    sliderImgPreview.style.opacity = 0;
    setTimeout(() => {
        sliderImgPreview.style.opacity = 1;
        sliderImgPreview.style.backgroundImage = `url(${dataArrayLimited[nowLocation].movieImgSRC})`;
    }, 100);

    sliderLogo.style.opacity = 0;
    setTimeout(() => {
        sliderLogo.style.opacity = 1;
        sliderLogo.src = dataArrayLimited[nowLocation].movieLogoSRC;
    }, 100);

    sliderDesc.textContent = dataArrayLimited[nowLocation].movieDesc;
}

function addLocation() {
    if (nowLocation < dataArrayLimited.length - 1) {
        nowLocation++;
        getSliderItem();
        IsActiveSliderLog("log-"+nowLocation);
    } else {
        nowLocation = 0;
        getSliderItem();
        IsActiveSliderLog("log-"+nowLocation);
    }
    sliderOpIs();
}

function minusLocation() {
    if (nowLocation > 0) {
        nowLocation--;
        getSliderItem();
        IsActiveSliderLog("log-"+nowLocation);
    }
    sliderOpIs();
}

function sliderOpIs() {
    if (dataArrayLimited.length === 0) {
        sliderLeft.style.opacity = "0";
        sliderLeft.style.pointerEvents = "none";
        sliderRight.style.opacity = "0";
        sliderRight.style.pointerEvents = "none";
    }
    else {
        if (nowLocation === 0) {
            sliderLeft.style.opacity = "0";
            sliderLeft.style.pointerEvents = "none";
        } else {
            sliderLeft.style.opacity = "1";
            sliderLeft.style.pointerEvents = "auto";
        }
        if (nowLocation === dataArrayLimited.length - 1) {
            // sliderRight.style.opacity = "0";
            // sliderRight.style.pointerEvents = "none";
        } else {
            sliderRight.style.opacity = "1";
            sliderRight.style.pointerEvents = "auto";
        }
    }
}

sliderLeft.addEventListener("click", () => {
    minusLocation();
    console.log(isNotHover);
    setTimeout(() => {
        isNotHover = false;
        console.log(isNotHover);
    }, 7000);
});
sliderRight.addEventListener("click", () => {
    addLocation();
    isNotHover = true;
    console.log(isNotHover);
    setTimeout(() => {
        isNotHover = false;
        console.log(isNotHover);
    }, 7000);
});

sliderOpIs();
getSliderItem();
GetLogSystem();
IsActiveSliderLog("log-"+nowLocation);

function GetLogSystem() {
    for (let x in dataArrayLimited) {
        let HTMLcontent = `<button class="btn log-${x} slider-log-item" onclick="GotoLocation(${x})"></button>`;
        sliderLog.insertAdjacentHTML("beforeend", HTMLcontent)
    }
}

function IsActiveSliderLog(loca) {
    const items = sliderLog.querySelectorAll(".slider-log-item");
    items.forEach(item => {
        if (item.classList.contains("slider-log-active")) {
            item.classList.remove("slider-log-active");
        }
        if (item.classList.contains(loca)) {
            item.classList.add("slider-log-active");
        }
    });
}

function GotoLocation(loca) {
    nowLocation = loca;
    getSliderItem();
    IsActiveSliderLog("log-"+nowLocation)
    sliderOpIs();
}