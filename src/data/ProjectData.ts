export interface ProjectData {
  id: string
  name: string
  htmlDescription: string
  iconUrl: string
  isWide: boolean
  isHigh: boolean
  accentColor: string
}

export function createProject(
  id: string,
  name: string,
  iconUrl: string,
  html: string,
  accentColor = '#8b5cf6',
  isHigh = false,
  isWide = false
): ProjectData {
  return {
    id,
    name,
    htmlDescription: html,
    iconUrl,
    isHigh,
    isWide,
    accentColor
  }
}
