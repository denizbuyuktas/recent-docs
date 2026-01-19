import { ClockIcon } from "lucide-react"
import { FileIcon } from "@/polymet/components/file-icon"
import { CollaboratorAvatars } from "@/polymet/components/collaborator-avatars"

interface Collaborator {
  id: string
  name: string
  avatar: string
}

interface RecentFileCardProps {
  filename: string
  collaborators: Collaborator[]
  lastOpened: string
  fileType: string
  onClick?: () => void
}

export function RecentFileCard({
  filename,
  collaborators,
  lastOpened,
  fileType,
  onClick
}: RecentFileCardProps) {
  return (
    <div
      onClick={onClick}
      className="group flex items-center gap-4 p-4 bg-white dark:bg-white/95 rounded-lg border border-[#f5e6d3] hover:border-[#ff6a3d] transition-all cursor-pointer hover:shadow-md"
    >
      {/* File Icon */}
      <div className="flex-shrink-0 w-10 h-10 bg-[#fff5eb] dark:bg-[#fff5eb] rounded-lg flex items-center justify-center group-hover:bg-[#ffe8d6] transition-colors">
        <FileIcon fileType={fileType} className="w-5 h-5 text-[#ff6a3d]" />
      </div>

      {/* File Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-900 truncate group-hover:text-[#ff6a3d] transition-colors">
          {filename}
        </h3>
        <div className="flex items-center gap-1.5 mt-1">
          <ClockIcon className="w-3.5 h-3.5 text-gray-500 dark:text-gray-500" />
          <span className="text-xs text-gray-500 dark:text-gray-500">{lastOpened}</span>
        </div>
      </div>

      {/* Collaborators */}
      <div className="flex-shrink-0">
        <CollaboratorAvatars collaborators={collaborators} maxDisplay={3} />
      </div>
    </div>
  )
}