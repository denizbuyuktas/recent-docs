import { BrowserRouter } from "react-router-dom"
import { RecentFileCard } from "@/polymet/components/recent-file-card"

export default function RecentFileCardRender() {
  const mockFile = {
    filename: "Q4 Marketing Strategy.docx",
    collaborators: [
      {
        id: "1",
        name: "Yusuf Hilmi",
        avatar: "https://github.com/yusufhilmi.png"
      },
      {
        id: "2",
        name: "Kadir",
        avatar: "https://github.com/kdrnp.png"
      },
      {
        id: "3",
        name: "Yahya Bedirhan",
        avatar: "https://github.com/yahyabedirhan.png"
      }
    ],
    lastOpened: "2 minutes ago",
    fileType: "document"
  }

  return (
    <BrowserRouter>
      <div className="p-8 bg-[#fef7ec] min-h-screen">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent File Card Variants</h3>
          
          <RecentFileCard {...mockFile} />
          
          <RecentFileCard
            filename="Product Roadmap 2024.xlsx"
            collaborators={mockFile.collaborators.slice(0, 2)}
            lastOpened="15 minutes ago"
            fileType="spreadsheet"
          />
          
          <RecentFileCard
            filename="Design System Guidelines with a very long filename.pdf"
            collaborators={mockFile.collaborators}
            lastOpened="1 hour ago"
            fileType="pdf"
          />
        </div>
      </div>
    </BrowserRouter>
  )
}