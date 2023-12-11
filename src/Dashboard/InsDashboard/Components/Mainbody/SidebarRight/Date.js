exports.validDate = () => {
    var v_date = new Date()
    var v_day = v_date.getDate()
    var v_month = v_date.getMonth() + 1
    var v_year = v_date.getFullYear()
    if(v_day < 10){
        v_day = `0${v_day}`
    }
    if(v_month < 10){
        v_month = `0${v_month}`
    }
    return `${v_year}-${v_month}-${v_day}`
}