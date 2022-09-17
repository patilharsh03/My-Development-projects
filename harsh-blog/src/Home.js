import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isLoading, error} = useFetch("http://localhost:8000/blogs")

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    // useEffect(() => {
    //     fetch("http://localhost:8000/blogs")
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then((data) => {
    //         setBlogs(data)
    //         setIsLoading(false)
    //     })
    // }, [])

    

    return (
        <div className="home">
            { error && <div>{error}</div>}
            { isLoading && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'harsh')} title="Harsh's blogs" /> */}
        </div>
    )
}

export default Home;