export const base64Encode = {
  name: 'Base64 编码',
  description: '将文本转换为Base64编码格式，常用于在网络上传输二进制数据。例如：Hello → SGVsbG8=',
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
  description: '将Base64编码的文本解码为原始文本。例如：SGVsbG8= → Hello',
  process: (text) => {
    try {
      return decodeURIComponent(escape(atob(text)));
    } catch (e) {
      return 'Error: Invalid Base64 input';
    }
  },
};
