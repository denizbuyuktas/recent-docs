import { BrowserRouter } from "react-router-dom"
import { FileIcon } from "@/polymet/components/file-icon"

export default function FileIconRender() {
  return (
    <BrowserRouter>
      <div className="p-8 bg-background space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">File Type Icons</h3>
          <div className="flex gap-8 items-center">
            <div className="flex flex-col items-center gap-2">
              <FileIcon fileType="document" className="w-8 h-8 text-foreground" />
              <span className="text-sm text-muted-foreground">Document</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FileIcon fileType="spreadsheet" className="w-8 h-8 text-foreground" />
              <span className="text-sm text-muted-foreground">Spreadsheet</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FileIcon fileType="pdf" className="w-8 h-8 text-foreground" />
              <span className="text-sm text-muted-foreground">PDF</span>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}