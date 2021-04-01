// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({
  onSubmitUsername,
}: {
  onSubmitUsername: (username: string) => void
}) {
  const [username, setUsername] = React.useState('')

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmitUsername(event.currentTarget.value)
  }

  function handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
    setUsername(event.currentTarget.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (username: string) =>
    alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export {App}
