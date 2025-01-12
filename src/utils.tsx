import { formatDistanceToNow } from "date-fns";

export const formatTime = (date: any) => {
    let distance = formatDistanceToNow(date, { addSuffix: true });
    // If the distance is less than a minute, return "just now"
     distance= distance
    .replace(/about?/gi, '')
    .replace(/minute(s)?/gi, 'min')
    .replace(/second(s)?/gi, 'sec')
    .replace(/day(s)?/gi, 'day')
    .replace(/month(s)?/gi, 'month')
    .replace(/year(s)?/gi, 'year');
    if (distance.includes("less than a min ago")) {
      return "just now";
    }
    
    return distance;
  };