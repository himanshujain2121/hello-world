

function City( {cities}){
    return (
        <>
          <h1>List of products</h1>
          {
              cities.map( city => {
                  return (
                      <div key={city.id}>
                          <h2>
                              {city.id} {city.title} {city.price}
                          </h2>
                      </div>
                  )
              })
          }
        </>
       
    )
}

export default City

export async function getStaticProps(){
    const response = await fetch('http://localhost:4000/city');
    const data = await response.json()

    return{
        props:{
            cities:data
        },
        revalidate:10
    }
}