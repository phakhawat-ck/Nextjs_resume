interface CardProjectProps {
  label: string;
  discription: string;
  demoLink?: string;
  projectLink?: string;
  tech?: string[];
}

export default function CardProject({ label, discription, demoLink, projectLink, tech }: CardProjectProps) {
  return (
    <>
      <a href={projectLink} className="border rounded-lg p-4 bg-white border-gray-200 transition-all duration-300 hover:bg-gray-50  hover:scale-110 shadow-sm hover:shadow-md">
        <h3 className="text-lg font-semibold">{label}</h3>
        <p className="text-sm text-gray-600 mt-2">{discription}</p>
        <div className="flex justify-end mt-2 ">
          <a href={demoLink} className="inline-flex items-center rounded-md border px-1 py-0.5 font-semibold  border-transparent bg-gray-200 align-middle text-sm  hover:bg-red-500 hover:text-white transition">demo</a>
        </div>
        <div className="mt-2">
          {tech && tech.map((item, index) => (
            <span key={index} className="relative inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 font-semibold align-middle text-xs border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-50 transition-colors mx-1">{item}</span>
          ))}

        </div>
      </a>

    </>
  )
}
