import { BrowserRouter } from "react-router-dom"
import { RecentFilesBlock } from "@/polymet/components/recent-files-block"
import { recentFilesData } from "@/polymet/data/recent-files-data"

export default function RecentFilesBlockRender() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="space-y-8">
          {/* With Files */}
          <RecentFilesBlock
            files={recentFilesData}
            onFileClick={(fileId) => console.log("File clicked:", fileId)}
            onViewAllClick={() => console.log("View all clicked")}
          />

          {/* Empty State */}
          <RecentFilesBlock
            files={[]}
            onFileClick={(fileId) => console.log("File clicked:", fileId)}
            onViewAllClick={() => console.log("View all clicked")}
          />
        </div>
      </div>
    </BrowserRouter>
  )
}