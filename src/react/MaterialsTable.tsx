import React, { useEffect, useState } from 'react'

type Material = { id: string; name: string; stock: number }

export default function MaterialsTable() {
  const [items, setItems] = useState<Material[]>([])
  const [name, setName] = useState('')
  const [stock, setStock] = useState<number>(0)
  const [loading, setLoading] = useState(false)

  async function load() {
    setLoading(true)
    try {
      const res = await fetch('/api/materials')
      const data = await res.json()
      setItems(data)
    } finally {
      setLoading(false)
    }
  }

  async function add() {
    if (!name.trim()) return
    await fetch('/api/materials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, stock })
    })
    setName('')
    setStock(0)
    load()
  }

  useEffect(() => { load() }, [])

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="名称" />
        <input type="number" value={stock} onChange={e => setStock(Number(e.target.value))} placeholder="库存" />
        <button onClick={add}>新增</button>
      </div>
      {loading ? (
        <div>加载中...</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>编号</th>
              <th>名称</th>
              <th>库存</th>
            </tr>
          </thead>
          <tbody>
            {items.map(m => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}


