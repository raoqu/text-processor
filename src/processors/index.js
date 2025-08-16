import { uppercase, lowercase } from './caseConverters';
import { reverseText, removeSpaces, countWords } from './textManipulation';
import { base64Encode, base64Decode } from './base64Processors';
import { urlEncode, urlDecode } from './urlProcessors';
import { blogImageConvertor } from './blobImageProcessors';
import { jsonFormat, jsonMinify, xmlFormat, xmlMinify } from './formatProcessors';
import { timestampToTime, timeToTimestamp } from './timeProcessors';
import { timeHexEncode } from './timeHexProcessor';

// Text processors collection
export const processors = {
  // Formatters
  jsonFormat,
  jsonMinify,
  xmlFormat,
  xmlMinify,
  // Time converters
  timestampToTime,
  timeToTimestamp,
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
  // Blob image processors
  blogImageConvertor,
  // Time processors
  timeHexEncode,
};
