export type Photo = {
  id: string
  src: string
  alt: string
  title: string
  location: string
  date: string
  camera?: string
  span?: "tall" | "wide" | "square"
}

/**
 * Drop your images into `public/photography/`, then add an entry here.
 * `span` controls masonry size: tall | wide | square
 */
export const photos: Photo[] = [
  {
    id: "01",
    src: "/photography/photo-01.jpg",
    alt: "Rainy night street with wet reflections",
    title: "Night_Market_Bleed",
    location: "Coastal Town",
    date: "2025",
    camera: "Digital",
    span: "wide",
  },
  {
    id: "02",
    src: "/photography/photo-02.jpg",
    alt: "Stone temple corridor with soft side light",
    title: "Stone_Corridor",
    location: "Temple Precinct",
    date: "2025",
    camera: "Digital",
    span: "tall",
  },
  {
    id: "03",
    src: "/photography/photo-03.jpg",
    alt: "Fishing boats at dusk on the shoreline",
    title: "Harbor_Dusk",
    location: "Udupi Coast",
    date: "2025",
    camera: "Digital",
    span: "wide",
  },
  {
    id: "04",
    src: "/photography/photo-04.jpg",
    alt: "Vintage camera and film still life",
    title: "Glass_And_Grain",
    location: "Studio Desk",
    date: "2025",
    camera: "Digital",
    span: "square",
  },
  {
    id: "05",
    src: "/photography/photo-05.jpg",
    alt: "Empty concrete steps under a streetlamp",
    title: "Lamp_Pool",
    location: "Urban Night",
    date: "2025",
    camera: "Digital",
    span: "tall",
  },
  {
    id: "06",
    src: "/photography/photo-06.jpg",
    alt: "Monsoon clouds over green hills",
    title: "Monsoon_Front",
    location: "Western Ghats",
    date: "2025",
    camera: "Digital",
    span: "wide",
  },
]
