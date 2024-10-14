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


export const getPublishedTime = (timeString:string) => {

    let date = new Date();
    if (timeString)
         date = new Date(timeString);
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}

export const processName = (name:string, limit=30) => {
    if (name.length > 20) {
        return name.substring(0, limit) + '...';
    }
    return name;
}


export const titleCase = (str:string) => {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0; // Random number from 0 to 15
      const v = c === 'x' ? r : (r & 0x3 | 0x8); // Generate values
      return v.toString(16); // Convert to hexadecimal
    });
  }
  