let dataArray = [];

function getData(type) {
    if (type === "n") {
        return dataArray;
    } else if (type === "args") {
        return dataArray.join(" ");
    }
}

function addData(object_value, is_return) {
    dataArray.unshift(object_value);

    if (is_return === true) {
        return dataArray;
    }
}

function deleteData(object_id, delete_value, is_return) {
    if (delete_value !== "full") {
        dataArray.splice(object_id, delete_value);
    } else {
        let lenght_calc = dataArray.length - delete_value;
        dataArray.splice(object_id, lenght_calc);
    }

    if (is_return === true) {
        return dataArray;
    }
}

function getItemData(is_filter, object_id, filter_value) {
    switch(is_filter) {
        case false:
            return dataArray[object_id];
            break;
        case true:
            if (filter_value !== "") {
                return dataArray.filter(data => filter_value === dataArray[data].movieTitle || filter_value === dataArray[data].movieLoader);
            }
            break;
    }
}

addData({
    movieTitle: "The Terminal List",
    movieDesc: "Lorem ipsum dolor  Impedit, rerum sed. Perspiciatis inventore.",
    movieImgSRC: "asset/img/stock/walp/theterminallist_walp.jpg",
    movieLogoSRC: "asset/img/stock/logo/theterminallist_logo.png",
    movieTumbSRC: "asset/img/stock/tumb/theterminalist_tumb.jpg"
}, false);
addData(
{
    movieTitle: "Breaking Bad",
    movieDesc: "Consectetur adipisicing elit. Impedit, rerum sed. Perspiciatis inventore.",
    movieImgSRC: "asset/img/stock/walp/breakingbad_walp.jpg",
    movieLogoSRC: "asset/img/stock/logo/breakingbad_logo.png",
    movieTumbSRC: "asset/img/stock/tumb/breakingbad_tumb.jpg"
}, false);
addData(
{
    movieTitle: "Game of Thorones",
    movieDesc: "Impedit, rerum sed. Perspiciatis inventore.",
    movieImgSRC: "asset/img/stock/walp/gameofthorones_walp.jpg",
    movieLogoSRC: "asset/img/stock/logo/gameofthorone_logo.png",
    movieTumbSRC: "asset/img/stock/tumb/gameoftghorones_tumb.jpg"
}, false);
addData(
{
    movieTitle: "The Amazing Spiderman",
    movieDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, rerum sed. Perspiciatis inventore.",
    movieImgSRC: "asset/img/stock/walp/theamazingspiderman_wallpaper.jpg",
    movieLogoSRC: "asset/img/stock/logo/theamazingspiderman_logo.png",
    movieTumbSRC: "asset/img/stock/tumb/theamazingspiderman_tumb.jpg"
}, false);
addData(
{
    movieTitle: "Fight Club",
    movieDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, rerum sed. Perspiciatis inventore.",
    movieImgSRC: "asset/img/stock/walp/inception_walp.jpg",
    movieLogoSRC: "asset/img/stock/logo/inception_logo.png",
    movieTumbSRC: "asset/img/stock/tumb/inception_tumb.jpg"
}, false);
addData(
{
    movieTitle: "Catch Me If You Can",
    movieDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, rerum sed. Perspiciatis inventore.",
    movieImgSRC: "asset/img/stock/walp/catchmeifyoucan_walp.jpg",
    movieLogoSRC: "asset/img/stock/logo/catchmeifyoucan_logo.png",
    movieTumbSRC: "asset/img/stock/tumb/catchmeifyoucan_tumb.jpeg"
}, false);
addData(
{
    movieTitle: "Memento",
    movieDesc: "Lorem ipsum dolor, amet consectetur adipisicing elit. Impedit, rerum sed. Perspiciatis inventore.",
    movieImgSRC: "asset/img/stock/walp/memento_walp.jpg",
    movieLogoSRC: "asset/img/stock/logo/memento_logo.png",
    movieTumbSRC: "asset/img/stock/tumb/memento_tumb.jpg"
}, false);
addData(
{
    movieTitle: "The Dark Knight",
    movieDesc: "Lorem ipsum dolor, amet consectetur adipisicing elit. Impedit, rerum sed. Perspiciatis inventore.",
    movieImgSRC: "asset/img/stock/walp/thedarkknight_walp.jpg",
    movieLogoSRC: "asset/img/stock/logo/thedarkknight_logo.png",
    movieTumbSRC: "asset/img/stock/tumb/thedarkknight_tumb.jpg"
}, false);
addData(
{
    movieTitle: "The Godfather 1",
    movieDesc: "Lorem ipsum dolor, amet consectetur adipisicing elit. Impedit, rerum sed. Perspiciatis inventore.",
    movieImgSRC: "asset/img/stock/walp/thegodfather_walp.jpg",
    movieLogoSRC: "asset/img/stock/logo/thegodfather_logo.png",
    movieTumbSRC: "asset/img/stock/tumb/thegodfather_tumb.jpg"
}, false);
addData(
{
    movieTitle: "The Matrix 1",
    movieDesc: "Lorem ipsum dolor, amet consectetur adipisicing elit. Impedit, rerum sed. Perspiciatis inventore.",
    movieImgSRC: "asset/img/stock/walp/thematrix_walp.jpg",
    movieLogoSRC: "asset/img/stock/logo/thematrix_logo.png",
    movieTumbSRC: "asset/img/stock/tumb/thematrix_tumb.jpg"
}, false); 