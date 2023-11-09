import Project1 from '../../assets/images/elimende-inagella-Yrc4lmlOzPY-unsplash.jpg';
import Project2 from '../../assets/images/linh-ha-ZYdKWY_sOJ8-unsplash.jpg';
import Project3 from '../../assets/images/marek-piwnicki-YJ8bq1AiwoM-unsplash.jpg';
import Project4 from '../../assets/images/nina-mercado-Y_t0n-T4H5M-unsplash.jpg';
import Project5 from '../../assets/images/taner-ardali-vc7e5M6HXzA-unsplash.jpg';
import Project6 from '../../assets/images/yung-chang-qAShc5SV83M-unsplash.jpg';
import Image from 'next/image';
import './project-section.scss';

export default function ProjectSection() {
  const projects = [
    {
      img: Project1,
      title: "1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: Project2,
      title: "2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: Project3,
      title: "3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: Project4,
      title: "4",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: Project5,
      title: "5",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      img: Project6,
      title: "6",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ]

  return (
    <div className="project-section bg-darker text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="project-section-text">
              <h2>Recente projecten</h2>
            </div>
          </div>
        </div>
        <div className="row mt-0">
        {projects.map((project) => (
        <div key={project.title} className="col-lg-4 col-md-6 mt-4">
            <div className="project-section-card">
              <div className="project-section-card-image">
                <Image 
                src={project.img} 
                alt="placeholder" 
                width={360}
                height={300}
                />
                <div className="project-section-card-text">
                <h3>{project.title}</h3>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-primary btn mt-4"> Bekijk alle projecten </button>
      </div>
    </div>
  )
}
