import { Bell, Check, X, AlertCircle, Info, CheckCircle, Clock } from 'lucide-react'

const notifications = [
  {
    id: 1,
    type: 'success',
    title: 'Offer Accepted',
    message: 'Your offer for Unit 15D has been accepted by the seller.',
    time: '5 minutes ago',
    read: false,
  },
  {
    id: 2,
    type: 'info',
    title: 'New Lead Assigned',
    message: 'A new lead (Amanda Roberts) has been assigned to you.',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 3,
    type: 'warning',
    title: 'Contract Expiring Soon',
    message: 'The contract for Unit 8C expires in 3 days. Please follow up with the buyer.',
    time: '2 hours ago',
    read: false,
  },
  {
    id: 4,
    type: 'info',
    title: 'Viewing Reminder',
    message: 'You have a property viewing scheduled for Unit 4B tomorrow at 10:00 AM.',
    time: '3 hours ago',
    read: true,
  },
  {
    id: 5,
    type: 'success',
    title: 'Payment Received',
    message: 'Deposit payment of $25,000 received for Ground Floor Retail.',
    time: '5 hours ago',
    read: true,
  },
  {
    id: 6,
    type: 'info',
    title: 'Document Uploaded',
    message: 'James Wilson has uploaded the required identification documents.',
    time: 'Yesterday',
    read: true,
  },
  {
    id: 7,
    type: 'warning',
    title: 'Follow-up Required',
    message: 'Tom Bradley has not responded in 7 days. Consider following up.',
    time: 'Yesterday',
    read: true,
  },
  {
    id: 8,
    type: 'success',
    title: 'Deal Closed',
    message: 'Congratulations! Unit 1A - Tower A deal has been successfully closed.',
    time: '2 days ago',
    read: true,
  },
]

const typeIcons: Record<string, typeof CheckCircle> = {
  success: CheckCircle,
  info: Info,
  warning: AlertCircle,
}

const typeColors: Record<string, string> = {
  success: 'bg-green-100 text-green-600',
  info: 'bg-blue-100 text-blue-600',
  warning: 'bg-amber-100 text-amber-600',
}

export default function Notifications() {
  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-zinc-900">Notifications</h1>
          {unreadCount > 0 && (
            <span className="bg-amber-400 text-zinc-900 text-xs font-semibold px-2 py-1 rounded-full">
              {unreadCount} new
            </span>
          )}
        </div>
        <button className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors">
          Mark all as read
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-zinc-200 p-4 flex items-center gap-4">
          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
            <Bell className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-zinc-500">Unread</p>
            <p className="text-xl font-semibold text-zinc-900">{unreadCount}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4 flex items-center gap-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-zinc-500">Today</p>
            <p className="text-xl font-semibold text-zinc-900">5</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4 flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-zinc-500">This Week</p>
            <p className="text-xl font-semibold text-zinc-900">12</p>
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-xl border border-zinc-200 divide-y divide-zinc-100">
        {notifications.map((notification) => {
          const Icon = typeIcons[notification.type]
          return (
            <div
              key={notification.id}
              className={`p-4 flex items-start gap-4 hover:bg-zinc-50 transition-colors ${
                !notification.read ? 'bg-amber-50/50' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${typeColors[notification.type]}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className={`font-medium ${!notification.read ? 'text-zinc-900' : 'text-zinc-700'}`}>
                      {notification.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1">{notification.message}</p>
                  </div>
                  <span className="text-xs text-zinc-400 whitespace-nowrap">{notification.time}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {!notification.read && (
                  <button className="p-1.5 text-zinc-400 hover:text-green-600 hover:bg-zinc-100 rounded transition-colors" title="Mark as read">
                    <Check className="w-4 h-4" />
                  </button>
                )}
                <button className="p-1.5 text-zinc-400 hover:text-red-500 hover:bg-zinc-100 rounded transition-colors" title="Dismiss">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
