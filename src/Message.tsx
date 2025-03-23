function Message() {
    const name = 'abhiii singh'
  
  if (name)  {
    return (
    <div>
      <h2>hello {name}</h2>
    </div>
  )}
  else {
    return (
      <div>
        <h2>hello stranger</h2>
      </div>
    )
  }
}
export default Message;
