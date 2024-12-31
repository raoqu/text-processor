export const base64Encode = {
  name: 'Base64 编码',
  description: '将文本转换为Base64编码格式，常用于在网络上传输二进制数据。<br/>例如：<span style="color: #666">Hello</span> → <span style="color: #2f9e44">SGVsbG8=</span>',
  process: (text) => {
    try {
      return btoa(unescape(encodeURIComponent(text)));
    } catch (e) {
      return 'Error: Invalid input for Base64 encoding';
    }
  },
};

export const base64Decode = {
  name: 'Base64 解码',
  description: '将Base64编码的文本解码为原始文本。<br/>例如：<span style="color: #666">SGVsbG8=</span> → <span style="color: #2f9e44">Hello</span>',
  process: (text) => {
    try {
      return decodeURIComponent(escape(atob(text)));
    } catch (e) {
      return 'Error: Invalid Base64 input';
    }
  },
};
