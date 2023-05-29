function openmenu(){
    document.getElementById('small-screen').style.width = '190px';
}

function closemenu(){
    document.getElementById('small-screen').style.width = '0';
}

function openclose(){
    var menu = document.getElementById('small-screen').style.width;
    if(menu == '0px'){
        openmenu();
    }else{
        closemenu();
    }
}

