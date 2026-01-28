import makeWASocket from './Socket/index'

export * from '../WAProto/index.js'
export * from './Utils/index'
export * from './Types/index'
export * from './Defaults/index'
export * from './WABinary/index'
export * from './WAM/index'
export * from './WAUSync/index'

console.log('\x1b[1;36mMade with by Baileys\x1b[0m');

export type WASocket = ReturnType<typeof makeWASocket>
export { makeWASocket }
export default makeWASocket
