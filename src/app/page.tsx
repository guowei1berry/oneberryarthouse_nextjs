import HomePage from "./home-page";
import styles from "./page.module.css";
// import video from './assets/video_artsH.mp4'
import video from "./../../videos/video_artsH.mp4";
export default function Page() {
  return (
    <>
      {/* <video controls autoPlay muted loop id="background-video" width="750" height="500">
        <source src={video} type="video/mp4" />


      </video> */}
      {/* <video autoPlay muted loop style={{ width: "500px", height: "500px" }}>
        <source src={video} />
      </video> */}
      <HomePage />
    </>
  );
}
