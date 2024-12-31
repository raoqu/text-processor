export const reverseText = {
  name: '字符反序',
  description: '将输入的文本字符顺序反转。例如：hello → olleh',
  process: (text) => text.split('').reverse().join(''),
};

export const removeSpaces = {
  name: '删除空格',
  description: '删除文本中多余的空格，保留单词间的一个空格。例如："hello   world" → "hello world"',
  process: (text) => text.replace(/\s+/g, ' ').trim(),
};

export const countWords = {
  name: '统计单词数量',
  description: '统计文本中的单词数量，以空格为分隔符。例如："hello world" → "Word count: 2"',
  process: (text) => {
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    return `Word count: ${words.length}`;
  },
};
