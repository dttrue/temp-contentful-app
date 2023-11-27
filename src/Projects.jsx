import { useFetchProjects} from './fetchProjects'

const Projects = () => {
    const {loading, project_showcase} = useFetchProjects()
   

    if (loading) {
        return(
            <section className="projects">
                <h2>Loading...</h2>
            </section>
        )
    }
    return(
        <section className="projects">
            <div className="title">
            <h2>Projects</h2>
            <div className="underline"></div>
            </div>
            <div className="projects-center">
                {project_showcase.map((project) => {
                    const { title, url, img, id } = project
                    return (
                        <a href={url} key={id} target="_blank" rel="noreferrer" className="project">
                            <img src={img} alt={title} className='img' />
                            <h5>{title}</h5>
                        </a>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects