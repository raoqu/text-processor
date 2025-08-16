export const timeHexEncode = {
    name: '时间编码[特殊]',
    description: '特殊用途，将时间转换为十六进制数据格式。<br/>例如：<span style="color: #666">081510</span> → <span style="color: #2f9e44">08150A</span>',
    process: (text) => {
        try {
            text = text.trim();
            if (text.length%2 !== 0) {
                throw new Error('无效的格式');
            }
            let newText = '';
            for (let i = 0; i < text.length; i += 2) {
                const hex = text.substring(i, i + 2);
                // padding '0' to hex if length is 1
                const decimal = parseInt(hex, 10);
                let hexString = decimal.toString(16).toUpperCase();
                if (hexString.length === 1) {
                    hexString = '0' + hexString;
                }
                newText += hexString;
            }
            return newText;
        } catch (e) {
            return 'Error: Invalid input for time hex encoding';
        }
    },
};