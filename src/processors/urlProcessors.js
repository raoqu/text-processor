export const urlEncode = {
  name: 'URL 编码',
  description: '将文本转换为URL安全的格式，编码特殊字符。<br/>例如：<span style="color: #666">Hello World</span> → <span style="color: #2f9e44">Hello%20World</span>',
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
  description: '将URL编码的文本解码为原始文本。<br/>例如：<span style="color: #666">Hello%20World</span> → <span style="color: #2f9e44">Hello World</span>',
  process: (text) => {
    try {
      return decodeURIComponent(text);
    } catch (e) {
      return 'Error: Invalid URL-encoded input';
    }
  },
};
