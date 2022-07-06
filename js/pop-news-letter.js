$(document).ready(function () {
    function showpopupnewsletter(){
        $(`.pop-up-news-letter`).addClass(`show`);
        $(`.pop-up-news-letter-wrap`).addClass(`show`);
    }

    $(`.pop-up-news-letter-suscripcion-img`).click(function(){
        $(`.pop-up-news-letter`).removeClass(`show`);
        $(`.pop-up-news-letter-wrap`).removeClass(`show`);
    });
    setTimeout(showpopupnewsletter, 2000);
});