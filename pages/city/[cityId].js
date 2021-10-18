function cityList ({cityData}){
    return (
        <>
          <h1>Welcome to each city</h1>
          <h2>
                {cityData.id}  {cityData.title} {cityData.price}
            </h2>
            <h3>{cityData.description}</h3>
        </>
    )

}

export default cityList

export async function getStaticProps(context){
   const {params} = context
   const response = await fetch(`http://localhost:4000/city/${params.cityId}`)
   const data = await response.json()
   if(!data.id){
    notFound:true
    }
   return{
       props:{
           cityData:data
       },
       revalidate:10
   }
}

export async function getStaticPaths(){
    return{
        paths:[{params:{cityId:'1'}}],
        fallback:'blocking',
    }
}