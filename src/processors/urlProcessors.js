export const urlEncode = {
  name: 'URL 编码',
  description: '将文本转换为URL安全的格式，编码特殊字符。例如：Hello World → Hello%20World',
  process: (text) => {
    try {
      return encodeURIComponent(text);
    } catch (e) {
      return 'Error: Invalid input for URL encoding';
    }
  },
};

export const urlDecode = {
  name: 'URL 解码',
  description: '将URL编码的文本解码为原始文本。例如：Hello%20World → Hello World',
  process: (text) => {
    try {
      return decodeURIComponent(text);
    } catch (e) {
      return 'Error: Invalid URL-encoded input';
    }
  },
};
