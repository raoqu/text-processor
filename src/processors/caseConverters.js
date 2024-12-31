export const uppercase = {
  name: '小写转大写',
  description: '将输入的文本中的所有小写字母转换为大写字母。<br/>例如：<span style="color: #666">hello</span> → <span style="color: #2f9e44">HELLO</span>',
  process: (text) => text.toUpperCase(),
};

export const lowercase = {
  name: '大写转小写',
  description: '将输入的文本中的所有大写字母转换为小写字母。<br/>例如：<span style="color: #666">HELLO</span> → <span style="color: #2f9e44">hello</span>',
  process: (text) => text.toLowerCase(),
};
