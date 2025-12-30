import { Search, Star, Trash2, Archive, MoreHorizontal, Paperclip } from 'lucide-react'

const emails = [
  {
    id: 1,
    from: 'Sarah Mitchell',
    email: 'sarah.m@realty.com',
    subject: 'Re: Unit 12A Offer Update',
    preview: 'Hi, I wanted to follow up on the offer we discussed yesterday. The client is very interested and...',
    time: '10:30 AM',
    unread: true,
    starred: true,
    hasAttachment: true,
  },
  {
    id: 2,
    from: 'Michael Chen',
    email: 'mchen@investors.co',
    subject: 'Investment Portfolio Review',
    preview: 'Please find attached the Q4 portfolio review. Let me know if you have any questions about...',
    time: '9:15 AM',
    unread: true,
    starred: false,
    hasAttachment: true,
  },
  {
    id: 3,
    from: 'Legal Team',
    email: 'legal@propflow.com',
    subject: 'Contract Amendment - Tower B',
    preview: 'The amended contract for Tower B units has been reviewed. Please sign and return by...',
    time: 'Yesterday',
    unread: false,
    starred: true,
    hasAttachment: true,
  },
  {
    id: 4,
    from: 'Jennifer Adams',
    email: 'jadams@clients.net',
    subject: 'Viewing Request - Penthouse Suite',
    preview: 'I would like to schedule a viewing for the penthouse suite this weekend if possible...',
    time: 'Yesterday',
    unread: false,
    starred: false,
    hasAttachment: false,
  },
  {
    id: 5,
    from: 'PropFlow Notifications',
    email: 'noreply@propflow.com',
    subject: 'New Lead Assigned: David Wilson',
    preview: 'A new lead has been assigned to you. Contact details: David Wilson, interested in...',
    time: 'Dec 28',
    unread: false,
    starred: false,
    hasAttachment: false,
  },
  {
    id: 6,
    from: 'Robert Taylor',
    email: 'rtaylor@mortgage.com',
    subject: 'Mortgage Pre-approval Documents',
    preview: 'The pre-approval documents for the Johnson family are ready. They have been approved for...',
    time: 'Dec 27',
    unread: false,
    starred: false,
    hasAttachment: true,
  },
]

const folders = [
  { name: 'Inbox', count: 24, active: true },
  { name: 'Starred', count: 8, active: false },
  { name: 'Sent', count: 0, active: false },
  { name: 'Drafts', count: 3, active: false },
  { name: 'Archive', count: 156, active: false },
  { name: 'Trash', count: 0, active: false },
]

export default function Inbox() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900">Email Inbox</h1>
        <button className="bg-amber-400 text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors">
          Compose
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Folders Sidebar */}
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <div className="space-y-1">
            {folders.map((folder) => (
              <button
                key={folder.name}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  folder.active ? 'bg-amber-50 text-amber-700' : 'text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                <span>{folder.name}</span>
                {folder.count > 0 && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    folder.active ? 'bg-amber-200 text-amber-800' : 'bg-zinc-100 text-zinc-500'
                  }`}>
                    {folder.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Email List */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-zinc-200">
          {/* Search Bar */}
          <div className="p-4 border-b border-zinc-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search emails..."
                className="w-full pl-10 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>
          </div>

          {/* Email Items */}
          <div className="divide-y divide-zinc-100">
            {emails.map((email) => (
              <div
                key={email.id}
                className={`px-4 py-4 hover:bg-zinc-50 cursor-pointer transition-colors ${
                  email.unread ? 'bg-amber-50/50' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center gap-2">
                    <button className="text-zinc-300 hover:text-amber-400 transition-colors">
                      <Star className={`w-4 h-4 ${email.starred ? 'fill-amber-400 text-amber-400' : ''}`} />
                    </button>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm ${email.unread ? 'font-semibold text-zinc-900' : 'font-medium text-zinc-700'}`}>
                        {email.from}
                      </span>
                      <span className="text-xs text-zinc-500">{email.time}</span>
                    </div>
                    <p className={`text-sm mb-1 ${email.unread ? 'font-medium text-zinc-900' : 'text-zinc-700'}`}>
                      {email.subject}
                      {email.hasAttachment && <Paperclip className="inline w-3 h-3 ml-2 text-zinc-400" />}
                    </p>
                    <p className="text-sm text-zinc-500 truncate">{email.preview}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded transition-colors">
                      <Archive className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-zinc-400 hover:text-red-500 hover:bg-zinc-100 rounded transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
