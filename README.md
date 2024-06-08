# mknr

create Next.js route by running one command

`npx mknr path dirName`

**result**

path/dirName/page.tsx

```tsx
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "dirName",
}

function Page() {
  return <div>dirName</div>
}

export default Page
```

path/dirName/loading.tsx

```tsx
import React from "react"

function Loading() {
  return <div>dirName-loading</div>
}

export default Loading
```
