function watering(params) {
    const status_1 = document.getElementById('one');
    const status_2 = document.getElementById('two');
    const status_3 = document.getElementById('three');
    const status_4 = document.getElementById('four');
    const status_5 = document.getElementById('five');
    const status_6 = document.getElementById('six');
    const status_7 = document.getElementById('seven');
    const status_8 = document.getElementById('eight');
    const status_9 = document.getElementById('nine');

    // let water_1 = status_1.innerText;
    // let water_2 = status_2.innerText;
    // let water_3 = status_3.innerText;
    // let water_4 = status_4.innerText;
    // let water_5 = status_5.innerText;
    // let water_6 = status_6.innerText;
    // let water_7 = status_7.innerText;
    // let water_8 = status_8.innerText;
    // let water_9 = status_9.innerText;


    // if(params === "1"){
    //     water_1 = parseInt(water_1)+2;
    // } else if(params === "2"){
    //     water_2 = parseInt(water_2)+2;
    // }
    
    // status_1.innerText = water_1;
    // status_2.innerText = water_2;
    pos = parseInt(params)
    switch(pos){
        case 1:
            status_1.innerText = parseInt(status_1.innerText)+1;
            break;
        case 2:
            status_2.innerText = parseInt(status_2.innerText)+1;
            break;
        case 3:
            status_3.innerText = parseInt(status_3.innerText)+1;
            break;
        case 4:
            status_4.innerText = parseInt(status_4.innerText)+1;
            break;
        case 5:
            status_5.innerText = parseInt(status_5.innerText)+1;
            break;
        case 6:
            status_6.innerText = parseInt(status_6.innerText)+1;
            break;
        case 7:
            status_7.innerText = parseInt(status_7.innerText)+1;
            break;
        case 8:
            status_8.innerText = parseInt(status_8.innerText)+1;
            break;
        case 9:
            status_9.innerText = parseInt(status_9.innerText)+1;
            break;

    }


}