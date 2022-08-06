


let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]


export const getPublishedTime = (timeString) => {

    let date = new Date(timeString);
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}