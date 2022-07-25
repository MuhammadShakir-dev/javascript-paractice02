function times(t){
    for(var i = 0; i<11; i++){
        t();
    }
    
}


function sas(){
    let a = Math.floor(Math.random() * 20) + 1;
    document.write(a)
}

times(sas)
