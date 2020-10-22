/**
 * @fileoverview This plugin will order your imports to look so badass you're gonna tatto it on yourself!
 * @author Attila Tóth
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import processors
module.exports.processors = {
  'import-processor': {
    preprocess: (text, filename) =>
      // TODO: only import declarations!
      [
        // filename includes extension!
        { text, filename },
      ],
    // messages is a multidimensional array having objects like this:
    // {
    //     line: number,
    //         column: number,
    //
    //     endLine?: number,
    //     endColumn?: number
    // }
    // That corresponds to the objects returned from preprocess.
    // damn a type system would be good...
    // eslint-disable-next-line no-unused-vars
    postprocess: (messages, filename) =>
      // Will need to return stuff of shape:
      // {
      //     range: [number, number],
      //         text: string
      // }
      // under prop fix!
      // eslint-disable-next-line implicit-arrow-linebreak
      [],
    supportsAutofix: true,
  },
}
