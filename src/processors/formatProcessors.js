export const jsonFormat = {
  name: 'JSON 格式化',
  description: '格式化JSON文本，使其具有适当的缩进和换行。<br/>例如：<span style="color: #666">{"name":"john","age":30}</span> → <span style="color: #2f9e44">{\n&nbsp;&nbsp;"name": "john",\n&nbsp;&nbsp;"age": 30\n}</span>',
  process: (text) => {
    try {
      const obj = JSON.parse(text);
      return JSON.stringify(obj, null, 2);
    } catch (e) {
      return 'Error: Invalid JSON input';
    }
  },
};

export const jsonMinify = {
  name: 'JSON 压缩',
  description: '移除JSON文本中的所有空格和换行，将其压缩为一行。<br/>例如：<span style="color: #666">{\n&nbsp;&nbsp;"name": "john"\n}</span> → <span style="color: #2f9e44">{"name":"john"}</span>',
  process: (text) => {
    try {
      const obj = JSON.parse(text);
      return JSON.stringify(obj);
    } catch (e) {
      return 'Error: Invalid JSON input';
    }
  },
};

export const xmlFormat = {
  name: 'XML 格式化',
  description: '格式化XML文本，添加适当的缩进和换行。<br/>例如：<span style="color: #666">&lt;root&gt;&lt;person&gt;&lt;name&gt;John&lt;/name&gt;&lt;/person&gt;&lt;/root&gt;</span> → <span style="color: #2f9e44">&lt;root&gt;\n&nbsp;&nbsp;&lt;person&gt;\n&nbsp;&nbsp;&nbsp;&nbsp;&lt;name&gt;John&lt;/name&gt;\n&nbsp;&nbsp;&lt;/person&gt;\n&lt;/root&gt;</span>',
  process: (text) => {
    try {
      // First, minify the XML to normalize it
      let formatted = text.replace(/>\s+</g, '><')
                         .replace(/\s+</g, '<')
                         .replace(/>\s+/g, '>')
                         .trim();

      // Add newlines and indentation
      let output = '';
      let indent = 0;
      let inTag = false;
      let inContent = false;
      
      for (let i = 0; i < formatted.length; i++) {
        const char = formatted[i];
        
        if (char === '<') {
          const isClosing = formatted[i + 1] === '/';
          if (isClosing) {
            indent--;
          }
          
          if (inContent) {
            output += '\n' + '  '.repeat(indent);
            inContent = false;
          }
          
          inTag = true;
          output += char;
        } else if (char === '>') {
          inTag = false;
          output += char;
          
          const isClosing = formatted[i - 1] === '/';
          const nextChar = formatted[i + 1];
          
          if (!isClosing && formatted[i - 1] !== '/' && nextChar !== '<') {
            inContent = true;
          } else if (!isClosing && nextChar === '<' && formatted[i + 2] !== '/') {
            output += '\n' + '  '.repeat(indent + 1);
            indent++;
          } else if (nextChar === '<' && formatted[i + 2] === '/') {
            output += '\n' + '  '.repeat(indent);
          } else if (nextChar === '<') {
            output += '\n' + '  '.repeat(indent);
          }
        } else {
          output += char;
        }
      }
      
      return output;
    } catch (e) {
      return 'Error: Invalid XML input';
    }
  },
};

export const xmlMinify = {
  name: 'XML 压缩',
  description: '移除XML文本中的所有空格、缩进和换行，将其压缩为一行。<br/>例如：<span style="color: #666">&lt;root&gt;\n&nbsp;&nbsp;&lt;person&gt;\n&nbsp;&nbsp;&nbsp;&nbsp;&lt;name&gt;John&lt;/name&gt;\n&nbsp;&nbsp;&lt;/person&gt;\n&lt;/root&gt;</span> → <span style="color: #2f9e44">&lt;root&gt;&lt;person&gt;&lt;name&gt;John&lt;/name&gt;&lt;/person&gt;&lt;/root&gt;</span>',
  process: (text) => {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'text/xml');
      
      const parserError = xmlDoc.getElementsByTagName('parsererror');
      if (parserError.length > 0) {
        throw new Error('Invalid XML');
      }

      const serializer = new XMLSerializer();
      return serializer.serializeToString(xmlDoc)
        .replace(/>\s+</g, '><')
        .replace(/\s+/g, ' ')
        .trim();
    } catch (e) {
      return 'Error: Invalid XML input';
    }
  },
};
