import { Search, Plus, Mail, Phone, MoreHorizontal } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Senior Sales Agent',
    email: 'sarah.m@propflow.com',
    phone: '+1 (555) 123-4567',
    avatar: 'SM',
    status: 'online',
    deals: 12,
    revenue: '$2.4M',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Sales Agent',
    email: 'mchen@propflow.com',
    phone: '+1 (555) 234-5678',
    avatar: 'MC',
    status: 'online',
    deals: 8,
    revenue: '$1.8M',
  },
  {
    id: 3,
    name: 'Jennifer Adams',
    role: 'Sales Agent',
    email: 'jadams@propflow.com',
    phone: '+1 (555) 345-6789',
    avatar: 'JA',
    status: 'away',
    deals: 6,
    revenue: '$1.2M',
  },
  {
    id: 4,
    name: 'Robert Taylor',
    role: 'Junior Agent',
    email: 'rtaylor@propflow.com',
    phone: '+1 (555) 456-7890',
    avatar: 'RT',
    status: 'offline',
    deals: 3,
    revenue: '$650K',
  },
  {
    id: 5,
    name: 'Emily Watson',
    role: 'Property Manager',
    email: 'ewatson@propflow.com',
    phone: '+1 (555) 567-8901',
    avatar: 'EW',
    status: 'online',
    deals: 15,
    revenue: '$3.1M',
  },
  {
    id: 6,
    name: 'David Park',
    role: 'Sales Agent',
    email: 'dpark@propflow.com',
    phone: '+1 (555) 678-9012',
    avatar: 'DP',
    status: 'online',
    deals: 9,
    revenue: '$1.9M',
  },
]

export default function Team() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900">Team</h1>
        <button className="flex items-center gap-2 bg-amber-400 text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors">
          <Plus className="w-4 h-4" />
          Add Member
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Total Members</p>
          <p className="text-2xl font-semibold text-zinc-900">6</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Online Now</p>
          <p className="text-2xl font-semibold text-green-600">4</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Total Deals</p>
          <p className="text-2xl font-semibold text-zinc-900">53</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500 mb-1">Total Revenue</p>
          <p className="text-2xl font-semibold text-zinc-900">$11.05M</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl border border-zinc-200 p-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search team members..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          />
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-xl border border-zinc-200 p-5">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-amber-700 font-semibold">{member.avatar}</span>
                  </div>
                  <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                    member.status === 'online' ? 'bg-green-500' :
                    member.status === 'away' ? 'bg-amber-500' : 'bg-zinc-300'
                  }`}></div>
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900">{member.name}</h3>
                  <p className="text-sm text-zinc-500">{member.role}</p>
                </div>
              </div>
              <button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <Mail className="w-4 h-4 text-zinc-400" />
                {member.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600">
                <Phone className="w-4 h-4 text-zinc-400" />
                {member.phone}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
              <div>
                <p className="text-xs text-zinc-500">Deals</p>
                <p className="font-semibold text-zinc-900">{member.deals}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500">Revenue</p>
                <p className="font-semibold text-zinc-900">{member.revenue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
