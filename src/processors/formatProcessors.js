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
  description: '格式化XML文本，添加适当的缩进和换行。<br/>例如：<span style="color: #666">&lt;root&gt;&lt;person&gt;&lt;name&gt;John&lt;/name&gt;&lt;/person&gt;&lt;/root&gt;</span><br/>→ <span style="color: #2f9e44">&lt;root&gt;\n&nbsp;&nbsp;&lt;person&gt;\n&nbsp;&nbsp;&nbsp;&nbsp;&lt;name&gt;John&lt;/name&gt;\n&nbsp;&nbsp;&lt;/person&gt;\n&lt;/root&gt;</span>',
  process: (text) => {
    try {
      // Create a temporary DOM parser
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'text/xml');
      
      // Check for parsing errors
      const parserError = xmlDoc.getElementsByTagName('parsererror');
      if (parserError.length > 0) {
        throw new Error('Invalid XML');
      }

      // Format the XML with proper indentation
      const serializer = new XMLSerializer();
      let formatted = '';
      const split = serializer.serializeToString(xmlDoc).split('>');
      let indent = 0;
      
      for (let i = 0; i < split.length; i++) {
        const node = split[i];
        if (node.trim() !== '') {
          if (node.indexOf('</') === 0) indent--;
          formatted += '  '.repeat(indent) + node.trim() + '>\n';
          if (node.indexOf('/>') === -1 && node.indexOf('</') === -1 && node.indexOf('<?xml') === -1) indent++;
        }
      }
      
      return formatted.trim();
    } catch (e) {
      return 'Error: Invalid XML input';
    }
  },
};

export const xmlMinify = {
  name: 'XML 压缩',
  description: '移除XML文本中的所有空格、缩进和换行，将其压缩为一行。<br/>例如：<span style="color: #666">&lt;root&gt;\n&nbsp;&nbsp;&lt;person&gt;\n&nbsp;&nbsp;&nbsp;&nbsp;&lt;name&gt;John&lt;/name&gt;\n&nbsp;&nbsp;&lt;/person&gt;\n&lt;/root&gt;</span><br/>→ <span style="color: #2f9e44">&lt;root&gt;&lt;person&gt;&lt;name&gt;John&lt;/name&gt;&lt;/person&gt;&lt;/root&gt;</span>',
  process: (text) => {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'text/xml');
      
      // Check for parsing errors
      const parserError = xmlDoc.getElementsByTagName('parsererror');
      if (parserError.length > 0) {
        throw new Error('Invalid XML');
      }

      // Serialize without formatting
      const serializer = new XMLSerializer();
      return serializer.serializeToString(xmlDoc)
        .replace(/>\s+</g, '><') // Remove whitespace between tags
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .trim();
    } catch (e) {
      return 'Error: Invalid XML input';
    }
  },
};
