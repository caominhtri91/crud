import {
  handleBodyRequestParsing,
  handleCompression,
  handleCors,
  handleLogging,
  // handleSec,
} from './common';

export default [
  handleCors,
  handleBodyRequestParsing,
  // handleSec,
  handleCompression,
  handleLogging,
];
