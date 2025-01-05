export const timestampToTime = {
  name: '时间戳转换时间',
  description: '将Unix时间戳转换为GMT+8时间字符串。<br/>例如：<span style="color: #666">1704015600</span> → <span style="color: #2f9e44">2024-01-01 00:00:00</span>',
  process: (text) => {
    try {
      const timestamp = parseInt(text.trim());
      if (isNaN(timestamp)) {
        throw new Error('Invalid timestamp');
      }

      // Create a date object in UTC
      const date = new Date(timestamp * 1000);
      
      // Convert to GMT+8
      const gmt8Date = new Date(date.getTime() + (8 * 60 * 60 * 1000));
      
      // Format the date
      const year = gmt8Date.getUTCFullYear();
      const month = String(gmt8Date.getUTCMonth() + 1).padStart(2, '0');
      const day = String(gmt8Date.getUTCDate()).padStart(2, '0');
      const hours = String(gmt8Date.getUTCHours()).padStart(2, '0');
      const minutes = String(gmt8Date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(gmt8Date.getUTCSeconds()).padStart(2, '0');

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    } catch (e) {
      return 'Error: Invalid timestamp input';
    }
  },
};

export const timeToTimestamp = {
  name: '时间转换时间戳',
  description: '将GMT+8时间字符串转换为Unix时间戳。<br/>例如：<span style="color: #666">2024-01-01 00:00:00</span> → <span style="color: #2f9e44">1704015600</span>',
  process: (text) => {
    try {
      // Parse the date string
      const [datePart, timePart] = text.trim().split(' ');
      if (!datePart || !timePart) {
        throw new Error('Invalid date format');
      }

      const [year, month, day] = datePart.split('-').map(num => parseInt(num));
      const [hours, minutes, seconds] = timePart.split(':').map(num => parseInt(num));

      if ([year, month, day, hours, minutes, seconds].some(isNaN)) {
        throw new Error('Invalid date components');
      }

      // Create date in GMT+8
      const date = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
      const timestamp = Math.floor(date.getTime() / 1000) - (8 * 60 * 60);

      return String(timestamp);
    } catch (e) {
      return 'Error: Invalid time format. Use YYYY-MM-DD HH:mm:ss';
    }
  },
};
