const themeColor = '#8DC540';
let navigationView = new tabris.NavigationView({left: 0, top: 0, right: 0, bottom: 0, toolbarColor:themeColor, titleTextColor:'#fff'}).appendTo(tabris.ui.contentView);
require('./modules/tabrisUi.js')(`dark`, `#709d33`, themeColor);
let storeHowashUserInfos = localStorage.getItem("storeHowashUserInfos");
if(storeHowashUserInfos === null){
  const howashPresentationPage = require("./views/howashPresentation.js");
  howashPresentationPage.create();
 }else{
     // home.js
    let homePage = require("./views/home.js");
        homePage.create();
 }

