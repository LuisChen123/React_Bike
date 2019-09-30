export default{
    formatDate(time){
        if(!time) return ''
        let date = new Date(time)
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()+" || "+(date.getMonth()+1)+'/'+date.getDate()+"/"+date.getFullYear();
    }
}