export const uppercase = {
  name: '小写转大写',
  description: '将输入的文本中的所有小写字母转换为大写字母。例如：hello → HELLO',
  process: (text) => text.toUpperCase(),
};

export const lowercase = {
  name: '大写转小写',
  description: '将输入的文本中的所有大写字母转换为小写字母。例如：HELLO → hello',
  process: (text) => text.toLowerCase(),
};
