import { Search, Plus, Mail, Phone, Building, MoreHorizontal, Filter } from 'lucide-react'

const contacts = [
  {
    id: 1,
    name: 'James Wilson',
    company: 'Wilson Investments',
    email: 'jwilson@investments.com',
    phone: '+1 (555) 111-2222',
    type: 'Investor',
    status: 'Active',
    lastContact: '2 days ago',
  },
  {
    id: 2,
    name: 'Amanda Roberts',
    company: 'First Home Buyers',
    email: 'aroberts@email.com',
    phone: '+1 (555) 222-3333',
    type: 'Buyer',
    status: 'Hot Lead',
    lastContact: 'Today',
  },
  {
    id: 3,
    name: 'David Thompson',
    company: 'Thompson Legal',
    email: 'dthompson@legal.com',
    phone: '+1 (555) 333-4444',
    type: 'Partner',
    status: 'Active',
    lastContact: '1 week ago',
  },
  {
    id: 4,
    name: 'Lisa Chen',
    company: 'Chen Family Trust',
    email: 'lchen@trust.com',
    phone: '+1 (555) 444-5555',
    type: 'Investor',
    status: 'Nurturing',
    lastContact: '3 days ago',
  },
  {
    id: 5,
    name: 'Mark Stevens',
    company: 'Stevens & Co',
    email: 'mstevens@company.com',
    phone: '+1 (555) 555-6666',
    type: 'Buyer',
    status: 'Active',
    lastContact: 'Yesterday',
  },
  {
    id: 6,
    name: 'Rachel Green',
    company: 'GreenView Properties',
    email: 'rgreen@greenview.com',
    phone: '+1 (555) 666-7777',
    type: 'Partner',
    status: 'Active',
    lastContact: '5 days ago',
  },
  {
    id: 7,
    name: 'Tom Bradley',
    company: 'Individual',
    email: 'tbradley@mail.com',
    phone: '+1 (555) 777-8888',
    type: 'Buyer',
    status: 'Cold',
    lastContact: '2 weeks ago',
  },
  {
    id: 8,
    name: 'Susan Miller',
    company: 'Miller Holdings',
    email: 'smiller@holdings.com',
    phone: '+1 (555) 888-9999',
    type: 'Investor',
    status: 'Hot Lead',
    lastContact: 'Today',
  },
]

const statusColors: Record<string, string> = {
  'Active': 'bg-green-100 text-green-700',
  'Hot Lead': 'bg-amber-100 text-amber-700',
  'Nurturing': 'bg-blue-100 text-blue-700',
  'Cold': 'bg-zinc-100 text-zinc-600',
}

const typeColors: Record<string, string> = {
  'Investor': 'bg-purple-100 text-purple-700',
  'Buyer': 'bg-emerald-100 text-emerald-700',
  'Partner': 'bg-sky-100 text-sky-700',
}

export default function Contacts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900">Contacts</h1>
        <button className="flex items-center gap-2 bg-amber-400 text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors">
          <Plus className="w-4 h-4" />
          Add Contact
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Total Contacts</p>
          <p className="text-2xl font-semibold text-zinc-900">248</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Hot Leads</p>
          <p className="text-2xl font-semibold text-amber-600">18</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Investors</p>
          <p className="text-2xl font-semibold text-zinc-900">42</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Partners</p>
          <p className="text-2xl font-semibold text-zinc-900">15</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-zinc-200 p-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-50 border-b border-zinc-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Last Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {contacts.map((contact) => (
              <tr key={contact.id} className="hover:bg-zinc-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-700 font-medium text-sm">
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900">{contact.name}</p>
                      <div className="flex items-center gap-1 text-sm text-zinc-500">
                        <Building className="w-3 h-3" />
                        {contact.company}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${typeColors[contact.type]}`}>
                    {contact.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${statusColors[contact.status]}`}>
                    {contact.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-zinc-500">{contact.lastContact}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
