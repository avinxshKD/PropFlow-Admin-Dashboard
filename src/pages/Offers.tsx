import { Search, Plus, Tag, DollarSign, Calendar, MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react'

const offers = [
  {
    id: 1,
    property: 'Unit 4B - Tower A',
    buyer: 'James Wilson',
    amount: '$465,000',
    listPrice: '$450,000',
    status: 'Pending',
    date: 'Dec 29, 2025',
    trend: 'up',
  },
  {
    id: 2,
    property: 'Penthouse Suite',
    buyer: 'Amanda Roberts',
    amount: '$1,150,000',
    listPrice: '$1,200,000',
    status: 'Counter',
    date: 'Dec 28, 2025',
    trend: 'down',
  },
  {
    id: 3,
    property: 'Unit 12A',
    buyer: 'Tom Bradley',
    amount: '$375,000',
    listPrice: '$380,000',
    status: 'Pending',
    date: 'Dec 28, 2025',
    trend: 'down',
  },
  {
    id: 4,
    property: 'Ground Floor Retail',
    buyer: 'Chen Family Trust',
    amount: '$920,000',
    listPrice: '$890,000',
    status: 'Accepted',
    date: 'Dec 27, 2025',
    trend: 'up',
  },
  {
    id: 5,
    property: 'Unit 8C - Tower B',
    buyer: 'Mark Stevens',
    amount: '$510,000',
    listPrice: '$520,000',
    status: 'Rejected',
    date: 'Dec 26, 2025',
    trend: 'down',
  },
  {
    id: 6,
    property: 'Unit 15D',
    buyer: 'Rachel Green',
    amount: '$425,000',
    listPrice: '$410,000',
    status: 'Accepted',
    date: 'Dec 25, 2025',
    trend: 'up',
  },
]

const statusColors: Record<string, string> = {
  'Pending': 'bg-amber-100 text-amber-700',
  'Accepted': 'bg-green-100 text-green-700',
  'Rejected': 'bg-red-100 text-red-700',
  'Counter': 'bg-blue-100 text-blue-700',
}

export default function Offers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900">Offers</h1>
        <button className="flex items-center gap-2 bg-amber-400 text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors">
          <Plus className="w-4 h-4" />
          New Offer
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Total Offers</p>
          <p className="text-2xl font-semibold text-zinc-900">24</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Pending</p>
          <p className="text-2xl font-semibold text-amber-600">8</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Accepted</p>
          <p className="text-2xl font-semibold text-green-600">12</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Avg. Offer Value</p>
          <p className="text-2xl font-semibold text-zinc-900">$542K</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl border border-zinc-200 p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search offers..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          />
        </div>
      </div>

      {/* Offers Table */}
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-50 border-b border-zinc-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Property</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Buyer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Offer Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">List Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {offers.map((offer) => (
              <tr key={offer.id} className="hover:bg-zinc-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Tag className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="font-medium text-zinc-900">{offer.property}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-600">{offer.buyer}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-zinc-400" />
                    <span className="font-medium text-zinc-900">{offer.amount}</span>
                    {offer.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-500 ml-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-500 ml-1" />
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-500">{offer.listPrice}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[offer.status]}`}>
                    {offer.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-sm text-zinc-500">
                    <Calendar className="w-4 h-4" />
                    {offer.date}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
