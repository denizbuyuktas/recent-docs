export interface Collaborator {
  id: string
  name: string
  avatar: string
}

export interface RecentFile {
  id: string
  filename: string
  collaborators: Collaborator[]
  lastOpened: string
  fileType: string
}

export const recentFilesData: RecentFile[] = [
  {
    id: "1",
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
  },
  {
    id: "2",
    filename: "Product Roadmap 2024.xlsx",
    collaborators: [
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
    ],
    lastOpened: "15 minutes ago",
    fileType: "spreadsheet"
  },
  {
    id: "3",
    filename: "Design System Guidelines.pdf",
    collaborators: [
      {
        id: "1",
        name: "Yusuf Hilmi",
        avatar: "https://github.com/yusufhilmi.png"
      },
      {
        id: "4",
        name: "Deniz Buyuktas",
        avatar: "https://github.com/denizbuyuktas.png"
      },
      {
        id: "3",
        name: "Yahya Bedirhan",
        avatar: "https://github.com/yahyabedirhan.png"
      },
      {
        id: "2",
        name: "Kadir",
        avatar: "https://github.com/kdrnp.png"
      }
    ],
    lastOpened: "1 hour ago",
    fileType: "pdf"
  },
  {
    id: "4",
    filename: "Team Meeting Notes.docx",
    collaborators: [
      {
        id: "5",
        name: "Shoaib",
        avatar: "https://github.com/shoaibux1.png"
      },
      {
        id: "2",
        name: "Kadir",
        avatar: "https://github.com/kdrnp.png"
      }
    ],
    lastOpened: "3 hours ago",
    fileType: "document"
  },
  {
    id: "5",
    filename: "Budget Proposal 2024.xlsx",
    collaborators: [
      {
        id: "1",
        name: "Yusuf Hilmi",
        avatar: "https://github.com/yusufhilmi.png"
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
    ],
    lastOpened: "Yesterday",
    fileType: "spreadsheet"
  }
]