#!/usr/bin/env node
const fs = require("fs")

;(() => {
  const path = process.argv[2]
  const directoryName = process.argv[3]
  console.log(
    "\x1b[34m%s\x1b[0m",
    `[create-route] ${path}/${directoryName} 라우트 생성 시작`
  )
  const dirPath = `src/app/${path}/${directoryName}`
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
  fs.writeFile(
    dirPath + "/" + "page.tsx",
    `import { Metadata } from "next"
import React from 'react'

export const metadata: Metadata = {
  title: "${directoryName}",
}

function Page() {
  return (
    <div>${directoryName}</div>
  )
}
  
export default Page`,
    (err, data) => {
      if (err) console.log("\x1b[31m%s\x1b[0m", "page.tsx 파일 생성 실패")
    }
  )

  fs.writeFile(
    dirPath + "/" + "loading.tsx",
    `import React from 'react'

function Loading() {
  return (
    <div>${directoryName}-loading</div>
  )
}
  
export default Loading`,
    (err, data) => {
      if (err) console.log("\x1b[31m%s\x1b[0m", "loading.tsx 파일 생성 실패")
    }
  )

  console.log(
    "\x1b[34m%s\x1b[0m",
    `[create-route] ${path}/${directoryName} 라우트 생성 완료`
  )
})()
