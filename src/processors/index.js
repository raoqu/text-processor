import { uppercase, lowercase } from './caseConverters';
import { reverseText, removeSpaces, countWords } from './textManipulation';
import { base64Encode, base64Decode } from './base64Processors';
import { urlEncode, urlDecode } from './urlProcessors';

// Text processors collection
export const processors = {
  uppercase,
  lowercase,
  reverseText,
  removeSpaces,
  countWords,
  base64Encode,
  base64Decode,
  urlEncode,
  urlDecode,
};
