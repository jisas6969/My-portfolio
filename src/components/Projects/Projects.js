import "./projects.css";
import { Link } from "react-scroll";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import img1 from "../../assets/project1.png";
import img2 from "../../assets/project2.png";
import img3 from "../../assets/project4.png";
import img4 from "../../assets/project5.png";
import img5 from "../../assets/project6.png";
import img6 from "../../assets/project7.png";

const images = [img1, img2, img3, img4, img5, img6];

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

{/* HERO SECTION */}

<div className="projectsHero" id="projectsHero">

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


{/* PROJECT CARD */}

<div className="projectsCard">

<h2>Projects That Showcase My Growth</h2>

<p className="projectName">
BridgeTalk: A Multimodal Speech and Sign Language Translation System
</p>


{/* 3D COVERFLOW CAROUSEL */}

<Swiper
modules={[Autoplay, Pagination, EffectCoverflow]}
effect="coverflow"
grabCursor={true}
centeredSlides={true}
slidesPerView={3}
loop={true}
spaceBetween={40}
coverflowEffect={{
rotate:0,
stretch:0,
depth:200,
modifier:1.5,
slideShadows:false,
}}
autoplay={{
delay:2500,
disableOnInteraction:false
}}
pagination={{clickable:true}}
className="projectSwiper"
>

{images.map((img,index)=>(
<SwiperSlide key={index}>
<img src={img} alt="project"/>
</SwiperSlide>
))}

</Swiper>


<button
className="viewBtn"
onClick={()=>setOpenModal(true)}
>
View Gallery
</button>

</div>


{/* MODAL GALLERY */}

{openModal && (

<div
className="modalOverlay"
onClick={()=>setOpenModal(false)}
>

<div
className="modalContent"
onClick={(e)=>e.stopPropagation()}
>

<button
className="closeBtn"
onClick={()=>setOpenModal(false)}
>
✕
</button>

<div className="modalGrid">

{images.map((img,index)=>(
<img
key={index}
src={img}
alt="project"
onClick={()=>setViewerIndex(index)}
/>
))}

</div>

</div>

</div>

)}


{/* FULLSCREEN IMAGE VIEWER */}

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

<img
src={images[viewerIndex]}
alt="viewer"
/>

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