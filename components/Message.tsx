import { Cpu, User } from 'react-feather'

export default function ({ conversationItem }: { conversationItem: { role: string; formatted: { transcript: string } } }) {
  return (
    <div className="flex flex-row items-center gap-x-3 flex-wrap max-w-full">
      <div className={`rounded border p-2 max-w-max ${conversationItem.role === 'user' ? 'text-[#34005b]' : 'text-[#0066ff]'}`}>{conversationItem.role === 'user' ? <User /> : <Cpu />}</div>
      <div className={`flex flex-col gap-y-2 ${conversationItem.role === 'user' ? 'text-[#34005b]' : 'text-[#0066ff]'}`}>{conversationItem.formatted.transcript}</div>
    </div>
  )
}
