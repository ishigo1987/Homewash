module.exports = (widgetToAppend,navigationViewToImport)=>{
    "use strict";
    const {Composite,TextView,ImageView} = require('tabris');
    const font14px = '14px roboto,noto';
    const themeColor = "#8DC540";
    // premiére carte
    const compositeCard1 = new Composite({top:['prev()',5],left:5,right:5,height:400,elevation:2,cornerRadius:2,background:'#fff',id:"compositeCard1"}).appendTo(widgetToAppend);
    const imageCard1 = new ImageView({left:0,right:0,top:0,height:250,image:{src:"src/img/howash-presentation.png"},scaleMode:"stretch",}).appendTo(compositeCard1);
    const titreRubrique1 =  new TextView({top:['prev()',10],left:10,right:10,font:'16px roboto,noto',maxLines:1,text:"HOWASH : LA LAVERIE MOBILE ÉCOLOGIQUE VENUE DU CAMEROUN",textColor:'#212121'}).appendTo(compositeCard1);
    const apercuTextRubrique1 = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:"La Howash est une laverie mobile destinée au lavage des voitures. Cette laverie mobile dispose d’un réservoir de 80 litres d’eau et est accompagnée d’accessoires comme les serviettes en microfibres, d’un aspirateur etc.",markupEnabled:true}).appendTo(compositeCard1);
    const share1 = new TextView({bottom:12,left:15,text:'PARTAGER',font:font14px,textColor:'#757575'}).appendTo(compositeCard1);
    const readMore1 = new TextView({bottom:12,right:15,text:"LIRE PLUS",font:font14px,textColor:themeColor}).appendTo(compositeCard1);

    // Deuxiéme carte
    const compositeCard2 = new Composite({top:['prev()',5],left:5,right:5,height:400,elevation:2,cornerRadius:2,background:'#fff',id:"compositeCard2"}).appendTo(widgetToAppend);
    const imageCard2 = new ImageView({left:0,right:0,top:0,height:250,image:{src:"src/img/howash-explications.jpg"},scaleMode:"stretch",}).appendTo(compositeCard2);
    const titreRubrique2 =  new TextView({top:['prev()',10],left:10,right:10,font:'16px roboto,noto',maxLines:1,text:"LA LAVERIE MOBILE ECOLO PREND DU SERVICE",textColor:'#212121'}).appendTo(compositeCard2);
    const apercuTextRubrique2 = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:" L’invention du Camerounais Sylvain Honnang permet de nettoyer les véhicules en 15 minutes, en l’absence de courant électrique et en évitant un gaspillage en eau.",markupEnabled:true}).appendTo(compositeCard2);
    const share2 = new TextView({bottom:12,left:15,text:'PARTAGER',font:font14px,textColor:'#757575'}).appendTo(compositeCard2);
    const readMore2 = new TextView({bottom:12,right:15,text:"LIRE PLUS",font:font14px,textColor:themeColor}).appendTo(compositeCard2);

    // troisiéme carte
    const compositeCard3 = new Composite({top:['prev()',5],left:5,right:5,height:400,elevation:2,cornerRadius:2,background:'#fff',id:"compositeCard3"}).appendTo(widgetToAppend);
    const imageCard3 = new ImageView({left:0,right:0,top:0,height:250,image:{src:"src/img/howash-innovation.jpg"},scaleMode:"stretch",}).appendTo(compositeCard3);
    const titreRubrique3 =  new TextView({top:['prev()',10],left:10,right:10,font:'16px roboto,noto',maxLines:1,text:"CAMEROUN-INNOVATION: MISE AU POINT D'UNE MACHINE PERMETTANT...",textColor:'#212121'}).appendTo(compositeCard3);
    const apercuTextRubrique3 = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:"L’appareil baptisé Howash, une invention de Sylvain Honang a été présentée le vendredi 21 avril 2017 à Douala, en présence de l’ancien défenseur camerounais Raymond Kalla.",markupEnabled:true}).appendTo(compositeCard3);
    const share3 = new TextView({bottom:12,left:15,text:'PARTAGER',font:font14px,textColor:'#757575'}).appendTo(compositeCard3);
    const readMore3 = new TextView({bottom:12,right:15,text:"LIRE PLUS",font:font14px,textColor:themeColor}).appendTo(compositeCard3);

    // quatriéme carte
    const compositeCard4 = new Composite({top:['prev()',5],left:5,right:5,height:400,elevation:2,cornerRadius:2,background:'#fff',id:"compositeCard4"}).appendTo(widgetToAppend);
    const imageCard4 = new ImageView({left:0,right:0,top:0,height:250,image:{src:"src/img/howash-invention.jpg"},scaleMode:"stretch",}).appendTo(compositeCard4);
    const titreRubrique4 =  new TextView({top:['prev()',10],left:10,right:10,font:'16px roboto,noto',maxLines:1,text:"INVENTION: UNE LAVERIE MOBILE ECOLO AU CAMEROUN",textColor:'#212121'}).appendTo(compositeCard4);
    const apercuTextRubrique4 = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:" Sylvain Honnang vient de concevoir la Howash, un appareil qui permet de nettoyer un véhicule en tout lieu, avec moins de 5 litres d’eau.",markupEnabled:true}).appendTo(compositeCard4);
    const share4 = new TextView({bottom:12,left:15,text:'PARTAGER',font:font14px,textColor:'#757575'}).appendTo(compositeCard4);
    const readMore4 = new TextView({bottom:12,right:15,text:"LIRE PLUS",font:font14px,textColor:themeColor}).appendTo(compositeCard4);
}