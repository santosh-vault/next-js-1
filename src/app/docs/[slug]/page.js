
const page = ({params}) => {
    if(params.slug.length === 2){
  return (
    <div>
      <h1>Hello docs feature {params.slug[0] } . concept {params.slug[1]} </h1>
    </div>
  )}else if(params.slug.length === 1){
    return(
        <div>
            <p>feature {params.slug[0]} concept {params.slug[2]} </p>
        </div>
    )
  }
}

export default page
