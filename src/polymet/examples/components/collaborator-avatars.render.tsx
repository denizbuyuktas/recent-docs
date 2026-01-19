import { BrowserRouter } from "react-router-dom"
import { CollaboratorAvatars } from "@/polymet/components/collaborator-avatars"

export default function CollaboratorAvatarsRender() {
  const mockCollaborators = [
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
    },
    {
      id: "4",
      name: "Deniz Buyuktas",
      avatar: "https://github.com/denizbuyuktas.png"
    },
    {
      id: "5",
      name: "Shoaib",
      avatar: "https://github.com/shoaibux1.png"
    }
  ]

  return (
    <BrowserRouter>
      <div className="p-8 bg-background space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Collaborator Avatars - Various Counts</h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-32">2 collaborators:</span>
              <CollaboratorAvatars collaborators={mockCollaborators.slice(0, 2)} />
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-32">3 collaborators:</span>
              <CollaboratorAvatars collaborators={mockCollaborators.slice(0, 3)} />
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground w-32">5 collaborators:</span>
              <CollaboratorAvatars collaborators={mockCollaborators} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}