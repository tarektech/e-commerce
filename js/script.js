function openmenu(){
    document.getElementById('small-screen').style.width = '190px';
}

function closemenu(){
    document.getElementById('small-screen').style.width = '0';
}

function openclose(){
    var menu = document.getElementById('small-screen').style.width;
    if(menu == '0px'){
        console.log("🚀 ~ file: script.js:12 ~ openclose ~ menu:", menu)
        openmenu();
    }else{
        closemenu();
    }
}