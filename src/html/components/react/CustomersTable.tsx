import React, { useEffect, useState } from 'react'

type Customer = { id: string; name: string; contact: string; phone: string }

export default function CustomersTable(){
  const [items, setItems] = useState<Customer[]>([])
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [phone, setPhone] = useState('')

  async function load(){
    const res = await fetch('/api/customers')
    setItems(await res.json())
  }

  async function add(){
    if(!name.trim()) return
    await fetch('/api/customers', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, contact, phone })
    })
    setName(''); setContact(''); setPhone('')
    load()
  }

  async function remove(id: string){
    await fetch(`/api/customers/${id}`, { method: 'DELETE' })
    load()
  }

  useEffect(()=>{ load() }, [])

  return (
    <div>
      <div style={{ display:'flex', gap:8, marginBottom:12 }}>
        <input placeholder="客户名称" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="联系人" value={contact} onChange={e=>setContact(e.target.value)} />
        <input placeholder="电话" value={phone} onChange={e=>setPhone(e.target.value)} />
        <button onClick={add}>新增客户</button>
      </div>
      <table className="table">
        <thead>
          <tr><th>客户ID</th><th>名称</th><th>联系人</th><th>电话</th><th>操作</th></tr>
        </thead>
        <tbody>
          {items.map(c=> (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.contact}</td>
              <td>{c.phone}</td>
              <td><button onClick={()=>remove(c.id)}>删除</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


