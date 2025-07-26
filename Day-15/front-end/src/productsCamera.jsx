let ProductsCamera = () => {
  const {id, name} = useParams()
  const obj = userParams()
  return(
    <>
    {<h1>Camera Component {obj.id} {obj.name}</h1>}
    <h1>Camera Component {id} {name}</h1>
    </>
  )
}