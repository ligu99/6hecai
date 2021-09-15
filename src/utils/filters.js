// 传入时间戳，输出year-month-day hours:mins:secs
export const dateFormat = (value) => {
    if (value) {
        const time = new Date(value);
        let year = time.getFullYear();//获取年
        let month = time.getMonth() + 1 > 9 ? time.getMonth() + 1 : '0' + Number(time.getMonth() + 1);//0开始  0-11 月
        let day = time.getDate() > 9 ? time.getDate() : '0' + time.getDate();//日
        let hours = time.getHours() > 9 ? time.getHours() : '0' + time.getHours();//时
        let mins = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes();//分
        let secs = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds();//秒
        return year + "-" + month + "-" + day + " " + hours + ":" + mins + ":" + secs
    } else {
        return "--"
    }
}

export const formatShengxiao = (value) => {
    let newValue = ""
    switch (value) {
        case 1:
            newValue = "鼠";
            break
        case 2:
            newValue = "牛";
            break
        case 3:
            newValue = "虎";
            break
        case 4:
            newValue = "兔";
            break
        case 5:
            newValue = "龙";
            break
        case 6:
            newValue = "蛇";
            break
        case 7:
            newValue = "马";
            break
        case 8:
            newValue = "羊";
            break
        case 9:
            newValue = "猴";
            break
        case 10:
            newValue = "鸡";
            break
        case 11:
            newValue = "狗";
            break
        case 12:
            newValue = "猪";
            break
        default:
            newValue = ""
    }
    return newValue;
}


