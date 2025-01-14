export const LINE_FEED = '\n'
export const DECLARATION_TYPE_EXT = '.d.ts'
export const JS_JSX_EXTENSIONS = ['.js', '.jsx']
export const TS_TSX_REGEX = /\.m?tsx?$/
export const JS_JSX_REGEX = /\.m?jsx?$/
// `extensionsToTreatAsEsm` only accepts `.ts`, `.tsx` and `.jsx`. `.js`, `.cjs`, `.mjs` will throw error
export const TS_EXT_TO_TREAT_AS_ESM = ['.ts','.mts', '.tsx']
export const JS_EXT_TO_TREAT_AS_ESM = ['.jsx']
/**
 * @internal
 * See https://jestjs.io/docs/en/configuration#testmatch-arraystring
 */
export const DEFAULT_JEST_TEST_MATCH = ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)']
