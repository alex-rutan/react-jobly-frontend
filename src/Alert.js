function Alert({ type, messages }) {
  if (type === null) return null;

  return (
    <div className={`Alert alert alert-${type}`} role="alert">
      {messages.map(m => <p>{m}</p>)}
    </div>
  )
}

export default Alert;