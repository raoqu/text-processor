export const blogImageConvertor = {
    name: 'BLOB转图片下载',
    description: '从HTML BLOB字符串(data:image/png;base64,...)下载图片。<br/>例如：<span style="color: #666">data:image/png;base64,iVBO...</span> → <span style="color: #2f9e44">下载图片文件</span>',
    process: (text) => {
      try {
        // If text doesn't start with 'data:', try to extract the data URL substring
        if (text && !text.startsWith('data:')) {
          const dataUrlMatch = text.match(/data:([\w\/+]+);base64,[^)]*(?:\)|$)/g);
          if (dataUrlMatch && dataUrlMatch.length > 0) {
            text = dataUrlMatch[0];
            // Remove trailing parenthesis if it exists
            if (text.endsWith(')')) {
              text = text.slice(0, -1);
            }
          } else {
            return 'Error: No valid data URL found in the input';
          }
        }
        
        // Validate that we now have a data URL
        if (!text || !text.startsWith('data:')) {
          return 'Error: Invalid data URL format. Must start with "data:"';
        }

        // Extract MIME type and base64 data
        const matches = text.match(/^data:([\w\/+]+);base64,(.+)$/);
        if (!matches || matches.length !== 3) {
          return 'Error: Invalid data URL format';
        }

        const mimeType = matches[1];
        const base64Data = matches[2];

        // Create file extension based on MIME type
        let fileExtension = 'bin';
        if (mimeType.startsWith('image/')) {
          fileExtension = mimeType.split('/')[1];
        }

        // Create a blob from the base64 data
        const byteCharacters = atob(base64Data);
        const byteArrays = [];
        
        for (let i = 0; i < byteCharacters.length; i += 512) {
          const slice = byteCharacters.slice(i, i + 512);
          const byteNumbers = new Array(slice.length);
          
          for (let j = 0; j < slice.length; j++) {
            byteNumbers[j] = slice.charCodeAt(j);
          }
          
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }
        
        const blob = new Blob(byteArrays, { type: mimeType });
        
        // Create a download link and trigger the download
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `image.${fileExtension}`;
        document.body.appendChild(link);
        link.click();
        
        // Clean up
        setTimeout(() => {
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }, 100);
        
        return 'Image download initiated';
      } catch (e) {
        console.error('Error processing data URL:', e);
        return `Error: ${e.message || 'Failed to process data URL'}`;
      }
    },
  };