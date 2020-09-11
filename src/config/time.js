export default function timeDifference(previous) {

    var date = new Date();
    var curr = date.getTime();
    var current = Math.floor(curr / 1000);
    
    var msPerMinute = 60;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed / msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed / msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';   
    }

    else {
        return 'approximately ' + Math.round(elapsed / msPerYear ) + ' years ago';   
    }
}
