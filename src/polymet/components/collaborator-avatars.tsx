import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Collaborator {
  id: string
  name: string
  avatar: string
}

interface CollaboratorAvatarsProps {
  collaborators: Collaborator[]
  maxDisplay?: number
}

export function CollaboratorAvatars({ 
  collaborators, 
  maxDisplay = 4 
}: CollaboratorAvatarsProps) {
  const displayCollaborators = collaborators.slice(0, maxDisplay)
  const remainingCount = Math.max(0, collaborators.length - maxDisplay)

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <TooltipProvider>
      <div className="flex items-center -space-x-2">
        {displayCollaborators.map((collaborator) => (
          <Tooltip key={collaborator.id}>
            <TooltipTrigger asChild>
              <Avatar className="w-8 h-8 border-2 border-[#fef7ec] dark:border-[#fef7ec] hover:z-10 transition-all cursor-pointer">
                <AvatarImage src={collaborator.avatar} alt={collaborator.name} />
                <AvatarFallback className="bg-[#ff6a3d] text-white text-xs">
                  {getInitials(collaborator.name)}
                </AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              <p>{collaborator.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        {remainingCount > 0 && (
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-8 h-8 rounded-full bg-[#ff6a3d] border-2 border-[#fef7ec] dark:border-[#fef7ec] flex items-center justify-center text-white text-xs font-medium hover:z-10 transition-all cursor-pointer">
                +{remainingCount}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{remainingCount} more collaborator{remainingCount > 1 ? 's' : ''}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  )
}