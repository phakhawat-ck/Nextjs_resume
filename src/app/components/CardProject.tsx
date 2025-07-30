interface CardProjectProps {
  label: string;
  discription: string;
}

export default function CardProject({ label, discription }: CardProjectProps) {
  return (
    <>
      <div className="border rounded-lg p-4 shadow-sm bg-white ">
        <h3 className="text-lg font-semibold">{label}</h3>
        <p className="text-sm text-gray-600 mt-2">{discription}</p>
        <div className="flex justify-end mt-4">
          <a href="#" className="text-blue-500 hover:underline text-sm">View Project</a>
        </div>
      </div>

    </>
  )
}
