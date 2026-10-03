import type { Metadata } from "next"
import ProjectsArchive from "./projects-archive"

export const metadata: Metadata = {
  title: "Projects",
  description: "Production platforms, AI experiments and every smaller build by Tarush Ruhela.",
}

export default function ProjectsPage() {
  return <ProjectsArchive />
}
