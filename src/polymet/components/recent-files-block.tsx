import { Button } from "@/components/ui/button"
import { FolderOpenIcon } from "lucide-react"
import { RecentFileCard } from "@/polymet/components/recent-file-card"

interface Collaborator {
  id: string
  name: string
  avatar: string
}

interface RecentFile {
  id: string
  filename: string
  collaborators: Collaborator[]
  lastOpened: string
  fileType: string
}

interface RecentFilesBlockProps {
  files: RecentFile[]
  onFileClick?: (fileId: string) => void
  onViewAllClick?: () => void
}

export function RecentFilesBlock({
  files,
  onFileClick,
  onViewAllClick
}: RecentFilesBlockProps) {
  const displayFiles = files.slice(0, 5)

  return (
    <div className="w-full max-w-3xl mx-auto p-8 bg-[#fef7ec] dark:bg-[#fef7ec] rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-900">Recent Files</h2>
          <p className="text-sm text-gray-600 dark:text-gray-600 mt-1">
            Quick access to your recently opened documents
          </p>
        </div>
        <Button
          onClick={onViewAllClick}
          className="bg-[#ff6a3d] hover:bg-[#ff5528] text-white shadow-md hover:shadow-lg transition-all"
        >
          <FolderOpenIcon className="w-4 h-4 mr-2" />
          View All
        </Button>
      </div>

      {/* Files List */}
      <div className="space-y-3">
        {displayFiles.length > 0 ? (
          displayFiles.map((file) => (
            <RecentFileCard
              key={file.id}
              filename={file.filename}
              collaborators={file.collaborators}
              lastOpened={file.lastOpened}
              fileType={file.fileType}
              onClick={() => onFileClick?.(file.id)}
            />
          ))
        ) : (
          <div className="text-center py-12">
            <FolderOpenIcon className="w-12 h-12 text-gray-400 dark:text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 dark:text-gray-600">No recent files</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Files you open will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  )
}