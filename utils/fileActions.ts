import fs from 'fs'

const dataPath = `data/payments.json`

const readFile = (
  callback: Function,
  returnJson: boolean = false,
  filePath: string = dataPath,
  encoding: string = `utf8`
) => {
  fs.readFile( filePath, encoding, ( err, data ) => {
    if ( err ) return err

    return callback( returnJson ? JSON.parse( data ) : data )
  } )
}

const writeFile = (
  fileData,
  callback,
  filePath = dataPath,
  encoding = `utf8`
) => {
  fs.writeFile( filePath, fileData, encoding, err => {
    if ( err ) throw err

    return callback()
  } )
}

export { readFile, writeFile }