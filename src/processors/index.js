import { uppercase, lowercase } from './caseConverters';
import { reverseText, removeSpaces, countWords } from './textManipulation';
import { base64Encode, base64Decode } from './base64Processors';
import { urlEncode, urlDecode } from './urlProcessors';
import { jsonFormat, jsonMinify, xmlFormat, xmlMinify } from './formatProcessors';

// Text processors collection
export const processors = {
  // Formatters
  jsonFormat,
  jsonMinify,
  xmlFormat,
  xmlMinify,
  // Encodings
  urlEncode,
  urlDecode,
  base64Encode,
  base64Decode,
  // Case conversion
  uppercase,
  lowercase,
  
  // Text manipulation
  reverseText,
  removeSpaces,
  countWords,
  
  
};
