import { NextApiRequest, NextApiResponse } from 'lib/types'
import getConfig from 'next/config'
import path from 'path'
import fs from 'fs'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { serverRuntimeConfig } = getConfig()

  const dirRelativeToPublicFolder = 'devotionals'
  // const dir = path.resolve('./public', dirRelativeToPublicFolder)
  const dir = path.join(serverRuntimeConfig.PROJECT_ROOT, './public', dirRelativeToPublicFolder)
  const filenames = fs.readdirSync(dir)

  const urlFiles = filenames.map(name => {
    const urlFilePublic = `/${dirRelativeToPublicFolder}/${name}`

    return {
      title: name.slice(0, -4),
      url: urlFilePublic
    }
  })

  res
    .status(200)
    .json({ data: urlFiles, error: null })
}
