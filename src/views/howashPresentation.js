exports.create = ()=>{
    "use strict";
    const {Page,TabFolder,Tab,ScrollView,ImageView,TextView,Composite,Button} = require('tabris');
    const themeColor = "#8DC540";
    require('../modules/tabrisUi.js')(`dark`, themeColor , themeColor);
    const font16px = "16px roboto, noto";
    let createnavigationView;
    const executeNavigationView = require("../helpers/navigationViewAnimation.js")(createnavigationView, false);
          executeNavigationView.toolbarVisible = false;
    const lmrPresentationView = new Page({background:themeColor}).appendTo(executeNavigationView);
    const scrollView = new ScrollView({left: 0,right: 0,top: 0,bottom:0}).appendTo(lmrPresentationView);
    let tabFolder = new TabFolder({left: 0, top: 0, right: 0, bottom:50,paging: true,elevation:2,tabBarLocation:'hidden',id:'tabFolder'})
    .on("selectionChanged", ({value:tab})=>{
      let tabActive = tab.title;
      if(tabActive === "tab3"){
        nextSlide.text = "OK";
      }else{
        nextSlide.text = "SUIVANT";
      }
    }).appendTo(scrollView);
    const tab1 = new Tab({title:'tab1'}).appendTo(tabFolder);
    const tab2 = new Tab({title:'tab2'}).appendTo(tabFolder);
    const tab3 = new Tab({title:'tab3'}).appendTo(tabFolder);
    createAndPopulateTab(tab1,'src/img/greetings.png',"Bienvenue sur Howash et bonne année!!","La Howash est une machine de lavage d'automobiles qui permet de laver votre véhicule avec 6 litres d'eau seulement.");
    createAndPopulateTab(tab2,'src/img/our-services.png',"Les services Howash","Howash propose des services divers et variés allant d'un lavage classique de votre voiture a un lavage plus approfondie(lavage Gold).");
    createAndPopulateTab(tab3,'src/img/team.png',"L'equipe Howash","Howash, c'est surtout une équipe de professionnels disponible pour vous guider et répondre a vos questions 7j/7.");
    // function de creation et de remplissage des elements des tab du tabfolder
    function createAndPopulateTab(whichTab,imageInsideEachTab,titleInsideEachTab,textInsideEachTab){
      const scrollViewInsideTabFolder = new ScrollView({left: 0,right: 0,top: 0,bottom:50}).appendTo(whichTab);
      const imgTab = new ImageView({centerX:0,scaleMode:'fit',width:200,height:200,top:"10%",image:imageInsideEachTab}).appendTo(scrollViewInsideTabFolder);
      const titleInsideTab = new TextView({left:25,right:25,top:["prev()", 40],text:titleInsideEachTab,font:"24px roboto,noto",textColor:"#fff",markupEnabled:true}).appendTo(scrollViewInsideTabFolder);
      const textTab = new TextView({left:25,right:25,top:["prev()", 5],text:textInsideEachTab,font:font16px,textColor:"#fff",markupEnabled:true}).appendTo(scrollViewInsideTabFolder);
    }
    // gestion du slider
    const separator = new Composite({left:0,right:0,bottom:50,background:'#eeeeee',height:0.5}).appendTo(scrollView);
    const sliderControl = new Composite({top:['prev()',0],left:0,right:0,bottom:0,background:themeColor}).appendTo(scrollView);
    const goToHomeView = new TextView({left:25,centerY:0,text:"IGNORER",textColor:'#fff',font:"14px roboto, noto",highlightOnTouch:true})
    .on("tap", ()=>{
        // connexion.js
     executeNavigationView.dispose();
     let connexionView = require('./connexion.js');
         connexionView.create();
    }).appendTo(sliderControl);
    const nextSlide = new Button({right:25,centerY:0,text:"SUIVANT",textColor:'#424242',font:"14px roboto, noto",width:100,height:45,background:'#fff',elevation:0})
    .on("tap", ()=>{
      if(nextSlide.text === "OK"){
        executeNavigationView.dispose();
        let connexionView = require('./connexion.js');
            connexionView.create();
      }else{
        let tabActive = tabFolder.selection;
        if(tabActive.title === "tab1"){
          tabFolder.selection = tab2;
        }else if(tabActive.title === "tab2"){
          tabFolder.selection = tab3;
        }else if(tabActive.title === "tab3"){
          nextSlide.text = "OK";
        }
      }
    }).appendTo(sliderControl);
    return executeNavigationView;
  
  };