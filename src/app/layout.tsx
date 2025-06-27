import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { OSProvider } from "@lib/hooks/OSContext"
import { Toaster } from "@medusajs/ui"
import { inter } from "./font"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import AIModal from "@modules/layout/components/modal/AIModal/AIModal"
config.autoAddCss = false

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={inter.variable}>
      <body>
        <OSProvider>
          <main>{props.children}</main>
        </OSProvider>
        <Toaster
          position="top-right"
          style={{ background: "red" }}
          className="my-toast"
        />
        <AIModal />
      </body>
    </html>
  )
}
