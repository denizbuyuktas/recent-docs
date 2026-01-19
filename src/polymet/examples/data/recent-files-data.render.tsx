import { recentFilesData } from "@/polymet/data/recent-files-data"

export default function RecentFilesDataRender() {
  return (
    <div className="p-8 bg-background">
      <h2 className="text-2xl font-bold mb-4">Recent Files Data</h2>
      <div className="space-y-4">
        {recentFilesData.map((file) => (
          <div key={file.id} className="p-4 border border-border rounded-lg bg-card">
            <h3 className="font-semibold">{file.filename}</h3>
            <p className="text-sm text-muted-foreground">Type: {file.fileType}</p>
            <p className="text-sm text-muted-foreground">Last opened: {file.lastOpened}</p>
            <div className="mt-2">
              <p className="text-sm font-medium">Collaborators:</p>
              <ul className="text-sm text-muted-foreground">
                {file.collaborators.map((collab) => (
                  <li key={collab.id}>{collab.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}