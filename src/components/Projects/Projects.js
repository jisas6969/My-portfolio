import "./projects.css";
import { Link } from "react-scroll";
import { useState } from "react";

import img1 from "../../assets/project1.png";
import img2 from "../../assets/project2.png";
import img3 from "../../assets/project4.png";
import img4 from "../../assets/project5.png";
import img5 from "../../assets/project6.png";
import img6 from "../../assets/project7.png";

import video1 from "../../assets/projectVideo.mp4";

const images = [img1, img2, img3, img4, img5, img6];

const projects = [
  { img: img1 },
  { img: img1 },
  { img: img1 },
  { img: img1 },
];

const Projects = () => {

const [openModal,setOpenModal] = useState(false);
const [viewerIndex,setViewerIndex] = useState(null);

const nextImage = () => {
setViewerIndex(
viewerIndex === images.length - 1 ? 0 : viewerIndex + 1
);
};

const prevImage = () => {
setViewerIndex(
viewerIndex === 0 ? images.length - 1 : viewerIndex - 1
);
};

return (

<section className="projectsWrapper">

{/* HERO */}

<div className="projectsHero">

<div className="heroGrid">

<div className="heroLeft">

<div className="projectsLabel">
<span className="dot"></span>
<span>Projects</span>
</div>

<h1>
What <br/> I’ve Built
</h1>

</div>

<div className="heroRight">

<Link
to="intro"
smooth
duration={500}
offset={-112}
className="breadcrumbLink"
>
Home
</Link>

<span>/</span>
<span className="active">Portfolio</span>

</div>

</div>

</div>


{/* PROJECTS CARD */}

<div className="projectsCard">

<h2>Projects That Showcase My Growth</h2>

<div className="projectsGrid">

{projects.map((project,index)=>{

return(

<div
key={index}
className="projectCard"
onClick={()=>setOpenModal(true)}
>

<img src={project.img} alt="project"/>

<div className="projectOverlay">
<p>View Project</p>
</div>

</div>

);

})}

</div>

</div>



{/* MODAL */}

{openModal && (

<div className="modalOverlay" onClick={()=>setOpenModal(false)}>

<div className="projectModal" onClick={(e)=>e.stopPropagation()}>

<button className="closeBtn" onClick={()=>setOpenModal(false)}>
✕
</button>

<div className="projectLayout">


{/* LEFT */}

<div className="projectContent">

<h2 className="projectTitle">
BridgeTalk: A Multimodal Speech and Sign Language Translation System
</h2>

<img
src={img1}
className="projectImage"
alt="BridgeTalk project"
onClick={()=>setViewerIndex(0)}
/>

<video className="projectVideo" controls>
<source src={video1} type="video/mp4"/>
</video>

</div>


{/* RIGHT */}

<div className="projectSidebar">

<div className="infoBlock">
<span>PROJECT DESCRIPTION</span>
<p>
AI-powered multimodal speech and sign language translation system
designed to assist communication between hearing and deaf users.
</p>
</div>

<div className="infoBlock">
<span>PROJECT DATE</span>
<p>March 2025</p>
</div>

<div className="infoBlock">
<span>ROLE</span>
<p>Full Stack Developer</p>
</div>

<div className="infoBlock">
<span>CLIENT</span>
<p>Bagong Silang Elementary School</p>
</div>

<div className="infoBlock">
<span>LANGUAGE</span>
<p>Python</p>
</div>

</div>

</div>

</div>

</div>

)}



{/* IMAGE VIEWER */}

{viewerIndex !== null && (

<div className="imageViewer">

<button
className="viewerClose"
onClick={()=>setViewerIndex(null)}
>
✕
</button>

<button
className="viewerPrev"
onClick={prevImage}
>
‹
</button>

<img src={images[viewerIndex]} alt="viewer"/>

<button
className="viewerNext"
onClick={nextImage}
>
›
</button>

</div>

)}

</section>

);
};

export default Projects;