export const reverseText = {
  name: '字符反序',
  description: '将输入的文本字符顺序反转。<br/>例如：<span style="color: #666">hello</span> → <span style="color: #2f9e44">olleh</span>',
  process: (text) => text.split('').reverse().join(''),
};

export const removeSpaces = {
  name: '删除空格',
  description: '删除文本中多余的空格，保留单词间的一个空格。<br/>例如：<span style="color: #666">"hello&nbsp;&nbsp;&nbsp;world"</span> → <span style="color: #2f9e44">"hello world"</span>',
  process: (text) => text.replace(/\s+/g, ' ').trim(),
};

export const countWords = {
  name: '统计单词数量',
  description: '统计文本中的单词数量，以空格为分隔符。<br/>例如：<span style="color: #666">"hello world"</span> → <span style="color: #2f9e44">"Word count: 2"</span>',
  process: (text) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return `Word count: ${words.length}`;
  },
};
