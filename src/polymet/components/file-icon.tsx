import { FileTextIcon, FileSpreadsheetIcon, FileIcon } from "lucide-react"

interface FileIconProps {
  fileType: string
  className?: string
}

export function FileIcon({ fileType, className = "" }: FileIconProps) {
  const getIcon = () => {
    switch (fileType) {
      case "document":
        return <FileTextIcon className={className} />
      case "spreadsheet":
        return <FileSpreadsheetIcon className={className} />
      case "pdf":
        return <FileIcon className={className} />
      default:
        return <FileIcon className={className} />
    }
  }

  return getIcon()
}