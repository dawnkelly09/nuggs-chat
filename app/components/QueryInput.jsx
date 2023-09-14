// Desc: QueryInput component
const QueryInput = () => {
  return (
    <div>
      <label htmlFor="user-query"></label>
      <textarea id="user-query" name="user-query" rows="3" cols="50">
        Ask Nuggs...
      </textarea>
    </div>
  )
}

export default QueryInput