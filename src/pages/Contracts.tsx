import { Search, Plus, Download, Copy, FileText, MoreHorizontal } from 'lucide-react'

const templates = [
  {
    id: 1,
    name: 'Standard Purchase Agreement',
    category: 'Purchase',
    lastModified: 'Dec 28, 2025',
    uses: 45,
    status: 'Active',
  },
  {
    id: 2,
    name: 'Lease Agreement - Residential',
    category: 'Lease',
    lastModified: 'Dec 25, 2025',
    uses: 32,
    status: 'Active',
  },
  {
    id: 3,
    name: 'Commercial Lease Template',
    category: 'Lease',
    lastModified: 'Dec 20, 2025',
    uses: 18,
    status: 'Active',
  },
  {
    id: 4,
    name: 'Offer Letter Template',
    category: 'Offer',
    lastModified: 'Dec 15, 2025',
    uses: 67,
    status: 'Active',
  },
  {
    id: 5,
    name: 'Property Disclosure Form',
    category: 'Disclosure',
    lastModified: 'Dec 10, 2025',
    uses: 54,
    status: 'Active',
  },
  {
    id: 6,
    name: 'Amendment Agreement',
    category: 'Amendment',
    lastModified: 'Dec 5, 2025',
    uses: 12,
    status: 'Draft',
  },
  {
    id: 7,
    name: 'Buyer Representation Agreement',
    category: 'Representation',
    lastModified: 'Nov 30, 2025',
    uses: 28,
    status: 'Active',
  },
  {
    id: 8,
    name: 'Seller Listing Agreement',
    category: 'Listing',
    lastModified: 'Nov 28, 2025',
    uses: 23,
    status: 'Active',
  },
]

const categoryColors: Record<string, string> = {
  'Purchase': 'bg-emerald-100 text-emerald-700',
  'Lease': 'bg-blue-100 text-blue-700',
  'Offer': 'bg-amber-100 text-amber-700',
  'Disclosure': 'bg-purple-100 text-purple-700',
  'Amendment': 'bg-orange-100 text-orange-700',
  'Representation': 'bg-pink-100 text-pink-700',
  'Listing': 'bg-cyan-100 text-cyan-700',
}

export default function Contracts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900">Contract Templates</h1>
        <button className="flex items-center gap-2 bg-amber-400 text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors">
          <Plus className="w-4 h-4" />
          New Template
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Total Templates</p>
          <p className="text-2xl font-semibold text-zinc-900">8</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Active</p>
          <p className="text-2xl font-semibold text-green-600">7</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Drafts</p>
          <p className="text-2xl font-semibold text-amber-600">1</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Total Uses</p>
          <p className="text-2xl font-semibold text-zinc-900">279</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl border border-zinc-200 p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search templates..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          />
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {templates.map((template) => (
          <div key={template.id} className="bg-white rounded-xl border border-zinc-200 p-5 hover:border-zinc-300 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-zinc-600" />
              </div>
              <button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            <h3 className="font-medium text-zinc-900 mb-2 line-clamp-2">{template.name}</h3>
            
            <div className="flex items-center gap-2 mb-3">
              <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${categoryColors[template.category]}`}>
                {template.category}
              </span>
              <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${
                template.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-zinc-100 text-zinc-600'
              }`}>
                {template.status}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
              <span>Used {template.uses} times</span>
              <span>{template.lastModified}</span>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-zinc-100">
              <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 rounded-lg transition-colors">
                <Copy className="w-4 h-4" />
                Copy
              </button>
              <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
