import NotFound from "../not-found"

const page = ({params}) => {
  if(params.productid > 1000){
    return(
      <NotFound />
    )
  }
  return (
    <div>
      product detail of page {params.productid}
    </div>
  )
}

export default page
