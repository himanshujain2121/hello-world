function ArticleByCategory({articles,category}) {
    //console.log(articles)
    return (
        <>
            <h1>showing news for category {category}</h1>
            {
                
                articles.map(article => {
                    return (
                        <div key={article.id}>
                        <h2>{article.id} {article.title}</h2>
                        <p>{article.description}</p>
                        <hr></hr>
                    </div>
                    )
                    
                })
            }
        </>
    )
}

export default ArticleByCategory

export async function getServerSideProps(context) {
    const { params, req, res, query } = context
    console.log(query)
    console.log(params)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie',['name=himanshu'])
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json();
    //console.log(data)
    return {
        props: {
            articles: data,
            category,
        }
    }
}