import React from 'react'
import { useExample } from '../hooks'
export default () => {
  const { example, setExample, exampleAsync, list } = useExample()
  return (
    <div>
      <h2>{example}</h2>
      <button onClick={() => setExample('foo')}>Example sync</button>
      <button onClick={exampleAsync}>Example async</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}
