import { useState } from 'react'
import { Search, Plus, Mail, Phone, Building, MoreHorizontal, Filter, X, Trash2, Edit } from 'lucide-react'

interface Contact {
  id: number
  name: string
  company: string
  email: string
  phone: string
  type: 'Investor' | 'Buyer' | 'Partner'
  status: 'Active' | 'Hot Lead' | 'Nurturing' | 'Cold'
  lastContact: string
}

const initialContacts: Contact[] = [
  { id: 1, name: 'James Wilson', company: 'Wilson Investments', email: 'jwilson@investments.com', phone: '+1 (555) 111-2222', type: 'Investor', status: 'Active', lastContact: '2 days ago' },
  { id: 2, name: 'Amanda Roberts', company: 'First Home Buyers', email: 'aroberts@email.com', phone: '+1 (555) 222-3333', type: 'Buyer', status: 'Hot Lead', lastContact: 'Today' },
  { id: 3, name: 'David Thompson', company: 'Thompson Legal', email: 'dthompson@legal.com', phone: '+1 (555) 333-4444', type: 'Partner', status: 'Active', lastContact: '1 week ago' },
  { id: 4, name: 'Lisa Chen', company: 'Chen Family Trust', email: 'lchen@trust.com', phone: '+1 (555) 444-5555', type: 'Investor', status: 'Nurturing', lastContact: '3 days ago' },
  { id: 5, name: 'Mark Stevens', company: 'Stevens & Co', email: 'mstevens@company.com', phone: '+1 (555) 555-6666', type: 'Buyer', status: 'Active', lastContact: 'Yesterday' },
  { id: 6, name: 'Rachel Green', company: 'GreenView Properties', email: 'rgreen@greenview.com', phone: '+1 (555) 666-7777', type: 'Partner', status: 'Active', lastContact: '5 days ago' },
  { id: 7, name: 'Tom Bradley', company: 'Individual', email: 'tbradley@mail.com', phone: '+1 (555) 777-8888', type: 'Buyer', status: 'Cold', lastContact: '2 weeks ago' },
  { id: 8, name: 'Susan Miller', company: 'Miller Holdings', email: 'smiller@holdings.com', phone: '+1 (555) 888-9999', type: 'Investor', status: 'Hot Lead', lastContact: 'Today' },
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
  const [contacts, setContacts] = useState<Contact[]>(initialContacts)
  const [searchQuery, setSearchQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [showAddModal, setShowAddModal] = useState(false)
  const [activeMenu, setActiveMenu] = useState<number | null>(null)

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === 'all' || contact.type === typeFilter
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter
    return matchesSearch && matchesType && matchesStatus
  })

  const stats = {
    total: contacts.length,
    hotLeads: contacts.filter(c => c.status === 'Hot Lead').length,
    investors: contacts.filter(c => c.type === 'Investor').length,
    partners: contacts.filter(c => c.type === 'Partner').length,
  }

  const handleDelete = (id: number) => {
    setContacts(contacts.filter(c => c.id !== id))
    setActiveMenu(null)
  }

  const handleAddContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const newContact: Contact = {
      id: Math.max(...contacts.map(c => c.id)) + 1,
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      type: formData.get('type') as Contact['type'],
      status: formData.get('status') as Contact['status'],
      lastContact: 'Just now',
    }
    setContacts([newContact, ...contacts])
    setShowAddModal(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900">Contacts</h1>
        <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 bg-amber-400 text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors">
          <Plus className="w-4 h-4" />
          Add Contact
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Total Contacts</p>
          <p className="text-2xl font-semibold text-zinc-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Hot Leads</p>
          <p className="text-2xl font-semibold text-amber-600">{stats.hotLeads}</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Investors</p>
          <p className="text-2xl font-semibold text-zinc-900">{stats.investors}</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Partners</p>
          <p className="text-2xl font-semibold text-zinc-900">{stats.partners}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input type="text" placeholder="Search by name, company, or email..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
            {searchQuery && (<button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2"><X className="w-4 h-4 text-zinc-400 hover:text-zinc-600" /></button>)}
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-zinc-400" />
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-3 py-2 border border-zinc-200 rounded-lg text-sm text-zinc-600 bg-white">
              <option value="all">All Types</option>
              <option value="Investor">Investors</option>
              <option value="Buyer">Buyers</option>
              <option value="Partner">Partners</option>
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-3 py-2 border border-zinc-200 rounded-lg text-sm text-zinc-600 bg-white">
              <option value="all">All Status</option>
              <option value="Hot Lead">Hot Leads</option>
              <option value="Active">Active</option>
              <option value="Nurturing">Nurturing</option>
              <option value="Cold">Cold</option>
            </select>
          </div>
        </div>
        {(searchQuery || typeFilter !== 'all' || statusFilter !== 'all') && (
          <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
            <span>Showing {filteredContacts.length} of {contacts.length} contacts</span>
            <button onClick={() => { setSearchQuery(''); setTypeFilter('all'); setStatusFilter('all'); }} className="text-amber-600 hover:text-amber-700">Clear filters</button>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-50 border-b border-zinc-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase">Last Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {filteredContacts.length === 0 ? (
              <tr><td colSpan={5} className="px-6 py-8 text-center text-zinc-500">No contacts found</td></tr>
            ) : (
              filteredContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-zinc-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <span className="text-amber-700 font-medium text-sm">{contact.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="font-medium text-zinc-900">{contact.name}</p>
                        <div className="flex items-center gap-1 text-sm text-zinc-500"><Building className="w-3 h-3" />{contact.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className={typeColors[contact.type] + ' inline-flex px-2 py-1 text-xs font-medium rounded-full'}>{contact.type}</span></td>
                  <td className="px-6 py-4"><span className={statusColors[contact.status] + ' inline-flex px-2 py-1 text-xs font-medium rounded-full'}>{contact.status}</span></td>
                  <td className="px-6 py-4 text-sm text-zinc-500">{contact.lastContact}</td>
                  <td className="px-6 py-4">
                    <div className="relative flex items-center gap-1">
                      <button onClick={() => window.location.href = 'mailto:' + contact.email} className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded"><Mail className="w-4 h-4" /></button>
                      <button onClick={() => window.location.href = 'tel:' + contact.phone} className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded"><Phone className="w-4 h-4" /></button>
                      <button onClick={() => setActiveMenu(activeMenu === contact.id ? null : contact.id)} className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded"><MoreHorizontal className="w-4 h-4" /></button>
                      {activeMenu === contact.id && (
                        <div className="absolute right-0 top-8 bg-white border border-zinc-200 rounded-lg shadow-lg py-1 z-10 min-w-32">
                          <button onClick={() => handleDelete(contact.id)} className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-zinc-50 flex items-center gap-2"><Trash2 className="w-4 h-4" />Delete</button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowAddModal(false)}>
          <div className="bg-white rounded-xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-zinc-900">Add New Contact</h2>
              <button onClick={() => setShowAddModal(false)} className="text-zinc-400 hover:text-zinc-600"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleAddContact} className="space-y-4">
              <div><label className="block text-sm font-medium text-zinc-700 mb-1">Name</label><input name="name" required className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" /></div>
              <div><label className="block text-sm font-medium text-zinc-700 mb-1">Company</label><input name="company" required className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" /></div>
              <div><label className="block text-sm font-medium text-zinc-700 mb-1">Email</label><input name="email" type="email" required className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" /></div>
              <div><label className="block text-sm font-medium text-zinc-700 mb-1">Phone</label><input name="phone" required className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-zinc-700 mb-1">Type</label><select name="type" className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm"><option value="Buyer">Buyer</option><option value="Investor">Investor</option><option value="Partner">Partner</option></select></div>
                <div><label className="block text-sm font-medium text-zinc-700 mb-1">Status</label><select name="status" className="w-full px-3 py-2 border border-zinc-200 rounded-lg text-sm"><option value="Hot Lead">Hot Lead</option><option value="Active">Active</option><option value="Nurturing">Nurturing</option><option value="Cold">Cold</option></select></div>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 px-4 py-2 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50">Cancel</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-amber-400 rounded-lg text-sm font-medium text-zinc-900 hover:bg-amber-500">Add Contact</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
