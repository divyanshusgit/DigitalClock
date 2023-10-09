let timeElem = document.getElementById('timeElem');
let dateElem = document.getElementById('dateElem');

function updateTime(){
        let time = new Date();
        let seconds = time.getSeconds();
        let minutes = time.getMinutes();
        let hours = time.getHours();
        if(hours<10){
            hours = `0${hours}`;
        };
        if(minutes<10){
            minutes = `0${minutes}`;
        };
        if(seconds<10){
            seconds = `0${seconds}`;
        };
        timeElem.innerHTML = `${hours}:${minutes}:${seconds}`;
        if(seconds==`00` && minutes=='00' && hours=='00'){
            updateDate();
        };
};

function updateDate(){
    let today = new Date();
    let day = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    switch (day) {
        case 0:
            day = 'Sun';
            break;
        case 1:
            day = 'Mon';
            break;
        case 2:
            day = 'Tue';
            break;
        case 3:
            day = 'Wed';
            break;
        case 4:
            day = 'Thu';
            break;
        case 5:
            day = 'Fri';
            break;
        default:
            day = 'Sat';
            break;
    };
    switch (month) {
        case 0:
            month = 'Jan'
            break;
        case 1:
            month = 'Feb'
            break;
        case 2:
            month = 'Mar'
            break;
        case 3:
            month = 'Apr'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'Jun'
            break;
        case 6:
            month = 'Jul'
            break;
        case 7:
            month = 'Aug'
            break;
        case 8:
            month = 'Sep'
            break;
        case 9:
            month = 'Oct'
            break;
        case 10:
            month = 'Nov'
            break;
        default:
            month = 'Dec'
            break;
    };
    if(date<10){
        date = `0${date}`;
    }
    dateElem.innerHTML = `${day}, ${date} ${month}`;
};

updateTime();

updateDate();

setInterval(updateTime, 1000);