exports.create = () => {
    "use strict";
    const themeColor = "#8DC540";
    const {Page,TextView,Composite,ImageView,CollectionView,ui,ScrollView,SearchAction} = require('tabris');
    ui.contentView.background = '#fff';
    let createnavigationView;
    const executeNavigationView = require("../helpers/navigationViewAnimation.js")(createnavigationView, false);
          executeNavigationView.drawerActionVisible = true;
          executeNavigationView.font = "12px roboto,noto";
    // const objectUserInformations = JSON.parse(localStorage.getItem("storeUserInfos"));
    let createMenuActionIcon;
    const handleActionSettings = require("../helpers/actionIcons.js")(createMenuActionIcon, "Paramétres", "srcImg", "low", executeNavigationView);
    const handleActionShare = require("../helpers/actionIcons.js")(createMenuActionIcon, "Partager", "srcImg", "low", executeNavigationView);
    const handleActionHowashMore = require("../helpers/actionIcons.js")(createMenuActionIcon, "Howash+", "srcImg", "low", executeNavigationView);
    const drawer = ui.drawer;
    drawer.enabled = true;
    drawer.background = "#2c343e";
    let homeView = new Page({title: `HOWASH`,background: `#fafafa`
    }).on({
        appear: () => {
         handleActionSettings.visible = true;
         handleActionShare.visible = true;
         handleActionHowashMore.visible = true;
         drawer.enabled = true;
        },
        disappear: () => {
         handleActionSettings.visible = false;
         handleActionShare.visible = false;
         handleActionHowashMore.visible = false;
         drawer.enabled = false;
        }
    }).appendTo(executeNavigationView);
    const scrollView = new ScrollView({ left: 0,right: 0,top: 0,bottom:0}).appendTo(homeView);
    require('../modules/cardHome.js')(scrollView,executeNavigationView);

    // Creation du composite du drawer
   const compositeDrawer = new Composite({left: 0,top: 0,height:100,right: 0,background: "#323b46"}).appendTo(drawer);
   const textViewCompositeIdentifiant = new TextView({left: 15,centerY:0,font: "bold 16px roboto, noto",text: "Sylvain Honnang",textColor: "#fff"}).appendTo(compositeDrawer);
   const textViewCompositeEmail = new TextView({left: 15,top: ["prev()", 1],font: "14px roboto, noto",text:"sylvainHonnang@howash.com",textColor: "#fff"}).appendTo(compositeDrawer);
    // Creation de la collectionView du drawer 
    const itemConfig = [
        {
            title: "Centres Howash",
            image: "src/icons/howash-location.png"
     },
        {
            title: "Réservation",
            image: "src/icons/reservation.png"
     },
        {
            title: "Les services Howash",
            image: "src/icons/settings.png"
     },
        {
            title: "Achat de crédit Howash",
            image: "src/icons/money.png"
        },
        {
            title: "Contacter Howash",
            image: "src/icons/contact-us.png"
        },
        {
            title: "Déconnexion",
            image: "src/icons/logout.png"
        }];
    const drawerCollectionView = new CollectionView({right: 0,bottom: 0,top:100,left: 0,itemCount: itemConfig.length,cellHeight: 64,
        createCell: () => {
          const cell = new Composite({right: 0,bottom: 0,top: 100,highlightOnTouch:true});
         const imageViewCell = new ImageView({highlightOnTouch:true,left: 15,centerY: 0,id: "imageViewCell",width:22,height:22,scaleMode:'fit'}).appendTo(cell);
         const textViewCell = new TextView({highlightOnTouch:true,left: 50,centerY: 0,font: "15px roboto, noto",textColor: "#fafafa",id: "textViewCell"}).appendTo(cell);
         return cell;
        },
        updateCell: (view, index) => {
            let page = itemConfig[index];
            view.find("#imageViewCell").set("image", page.image);
            view.find("#textViewCell").set("text", page.title);
        }
    }).on("select", ({
        index
    }) => {
        let itemIndex = itemConfig[index];
        drawer.close();
        if(itemIndex.title === "Demander un devis automobile"){
         require("./createDevis.js").create().appendTo(executeNavigationView);
        }else if(itemIndex.title === "Poser une question à un agent"){
         require('./speakToAnAgent.js')(executeNavigationView).appendTo(executeNavigationView);
        }else if(itemIndex.title === "Mes paramètres"){
         require('./settings.js')(executeNavigationView).appendTo(executeNavigationView);
        }else if(itemIndex.title === "A propos de nous"){
         require('./aboutUs.js').create().appendTo(executeNavigationView);
        }else if(itemIndex.title === "Déconnexion") {
         executeNavigationView.visible = false;
         executeNavigationView.dispose();
         localStorage.clear();
         let connexionPage = require("./connexion.js");
             connexionPage.create();
        }
    }).appendTo(drawer);

    // Fin creation collectionView du drawer

   

    return executeNavigationView;
};
