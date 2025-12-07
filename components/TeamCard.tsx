interface TeamCardProps {
  name: string
  role: string
  description: string
}

export default function TeamCard({ name, role, description }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <p className="text-primary-600 font-semibold mt-1">{role}</p>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
