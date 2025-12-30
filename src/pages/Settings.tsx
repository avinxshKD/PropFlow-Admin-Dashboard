import { Bell, Lock, User, Globe, Palette, Database } from 'lucide-react'

export default function Settings() {
  const settingsGroups = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Profile', description: 'Update your personal information' },
        { icon: Lock, label: 'Security', description: 'Manage password and 2FA' },
        { icon: Bell, label: 'Notifications', description: 'Configure alert preferences' },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { icon: Palette, label: 'Appearance', description: 'Customize the look and feel' },
        { icon: Globe, label: 'Language', description: 'Change display language' },
        { icon: Database, label: 'Data', description: 'Export or delete your data' },
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-zinc-900">Settings</h1>
      
      <div className="grid gap-6">
        {settingsGroups.map((group) => (
          <div key={group.title} className="bg-white rounded-xl border border-zinc-200">
            <div className="px-5 py-4 border-b border-zinc-100">
              <h2 className="font-medium text-zinc-900">{group.title}</h2>
            </div>
            <div className="divide-y divide-zinc-100">
              {group.items.map((item) => (
                <div
                  key={item.label}
                  className="px-5 py-4 flex items-center gap-4 hover:bg-zinc-50 cursor-pointer transition-colors"
                >
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-zinc-900">{item.label}</p>
                    <p className="text-sm text-zinc-500">{item.description}</p>
                  </div>
                  <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
