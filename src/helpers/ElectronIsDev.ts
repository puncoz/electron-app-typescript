import { app } from "electron"

const isEnvSet = 'ELECTRON_IS_DEV' in process.env
const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1

export default isEnvSet ? getFromEnv : !app.isPackaged