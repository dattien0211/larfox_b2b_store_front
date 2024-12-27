import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { OSProvider } from "@lib/hooks/OSContext"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <OSProvider>
          <main className="relative z-20 border-t border-grey-10">
            {props.children}
          </main>
        </OSProvider>
      </body>
    </html>
  )
}
