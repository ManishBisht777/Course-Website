import React from "react";
import { useState, useEffect } from "react";

// css import
import "./home.css";

// mui components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// images and icons import

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";
import { BsStarFill, BsStarHalf, BsBookmarkHeartFill } from "react-icons/bs";
import { MdPlayLesson } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { FaBaseballBall } from "react-icons/fa";

// carousel import

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  // function for dynamic counter

  const [countdownDate, setCountdownDate] = useState(
    new Date("07/01/2022").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <>
      {/* landing page */}

      <div className="home">
        <div className="box1">
          <h3 className="title">
            #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
          </h3>
          <h2 className="heading">
            Unleash Your SCRUM Skills, Grab More Attention To Résumé
          </h2>
          <button className="button button_active">Enroll Now</button>
          <div className="counter">
            <p>10% OFF on all courses* | Offer Valid For</p>
            <div className="countdown-wrapper">
              <div className="time-section">
                <div className="time">{state.days || "0"}</div>
                <small className="time-text">Days</small>
              </div>

              <div className="time-section">
                <div className="time">{state.hours || "00"}</div>
                <small className="time-text">Hours</small>
              </div>

              <div className="time-section">
                <div className="time">{state.minutes || "00"}</div>
                <small className="time-text">Minutes</small>
              </div>

              <div className="time-section">
                <div className="time">{state.seconds || "00"}</div>
                <small className="time-text">Seconds</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* courses section */}

      <div className="courses">
        <div className="headline">
          <h3 className="big-text">A broad range of courses</h3>
          <p className="small-text">
            Choose from 100+ online video courses with new additions published
            every month
          </p>
        </div>

        <div className="courses-card">
          <Card className="card" sx={{ maxWidth: 245 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img1}
            />
            <CardContent>
              <h5 className="big-text">
                Learn SCRUM: The Complete Beginner Course
                {/* <BsBookmarkHeartFill /> */}
              </h5>
              <p className="small-text">Samay Jain, Ex-KPMG</p>
              <div className="ratings">
                <p>4.5</p>
                <div className="rating">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
              </div>
            </CardContent>
            <button className="button button_active">Enroll Now</button>
          </Card>
          <Card className="card" sx={{ maxWidth: 245 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img2}
            />
            <CardContent>
              <h5 className="big-text">
                Learn SCRUM: The Complete Beginner Course
                {/* <BsBookmarkHeartFill /> */}
              </h5>
              <p className="small-text">Samay Jain, Ex-KPMG</p>
              <div className="ratings">
                <p>4.5</p>
                <div className="rating">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
              </div>
            </CardContent>
            <button className="button button_active">Enroll Now</button>
          </Card>
          <Card className="card" sx={{ maxWidth: 245 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img3}
            />
            <CardContent>
              <h5 className="big-text">
                Learn SCRUM: The Complete Beginner Course
                {/* <BsBookmarkHeartFill /> */}
              </h5>
              <p className="small-text">Samay Jain, Ex-KPMG</p>
              <div className="ratings">
                <p>4.5</p>
                <div className="rating">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
              </div>
            </CardContent>
            <button className="button button_active">Enroll Now</button>
          </Card>
          <Card className="card" sx={{ maxWidth: 245 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img4}
            />
            <CardContent>
              <h5 className="big-text">
                Learn SCRUM: The Complete Beginner Course
                {/* <BsBookmarkHeartFill /> */}
              </h5>
              <p className="small-text">Samay Jain, Ex-KPMG</p>
              <div className="ratings">
                <p>4.5</p>
                <div className="rating">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
              </div>
            </CardContent>
            <button className="button button_active">Enroll Now</button>
          </Card>
          <Card className="card" sx={{ maxWidth: 245 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={img1}
            />
            <CardContent>
              <h5 className="big-text">
                Learn SCRUM: The Complete Beginner Course
                {/* <BsBookmarkHeartFill /> */}
              </h5>
              <p className="small-text">Samay Jain, Ex-KPMG</p>
              <div className="ratings">
                <p>4.5</p>
                <div className="rating">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                </div>
              </div>
            </CardContent>
            <button className="button button_active">Enroll Now</button>
          </Card>
        </div>
      </div>

      {/* learn now */}

      <div className="learnnow">
        <div className="learnbx">
          <div className="heading">Start learning with us right now!</div>
          <p className="small-text">
            Choose from 100+ online video courses with new updates.
          </p>
          <button className="button button_active">Enroll Now</button>
        </div>
        <div className="circles">
          <div className="circle1">
            <div className="circle">
              <p>Live Course</p>
              <div className="bxcircle">
                <BsBookmarkHeartFill />
              </div>
            </div>
            <div className="circle">
              <p>1000+ lessons</p>
              <div className="bxcircle">
                <MdPlayLesson />
              </div>
            </div>
            <div className="circle">
              <p>Live Classes</p>
              <div className="bxcircle">
                <FaBaseballBall />
              </div>
            </div>
          </div>
          <div className="circle2">
            <div className="circle">
              <p>10000+ views</p>
              <div className="bxcircle">
                <AiFillEye />
              </div>
            </div>
            <div className="circle">
              <p>live exam</p>
              <div className="bxcircle">
                <BsBookmarkHeartFill />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}

      <div className="testimonials">
        <div className="big-text">
          TESTIMONIALS <span></span>
        </div>
        <div className="testimonial">
          <Carousel showArrows={true}>
            <div className="t-card">
              <img src={img2} alt="" />
              <p>
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat modi et consequuntur sint esse atque adipisci totam
                dolorum repellendus at vel ex obcaecati error deleniti,
                dignissimos, quae a perferendis nulla saepe! Aperiam, quam
                iste."
              </p>
              <div className="name">Manish Bisht</div>
              <p className="role">Full Stack Developer</p>
            </div>
            <div className="t-card">
              <img src={img1} alt="" />
              <p>
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat modi et consequuntur sint esse atque adipisci totam
                dolorum repellendus at vel ex obcaecati error deleniti,
                dignissimos, quae a perferendis nulla saepe! Aperiam, quam
                iste."
              </p>
              <div className="name">Manish Bisht</div>
              <p className="role">Full Stack Developer</p>
            </div>
            <div className="t-card">
              <img src={img3} alt="" />
              <p>
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat modi et consequuntur sint esse atque adipisci totam
                dolorum repellendus at vel ex obcaecati error deleniti,
                dignissimos, quae a perferendis nulla saepe! Aperiam, quam
                iste."
              </p>
              <div className="name">Manish Bisht</div>
              <p className="role">Full Stack Developer</p>
            </div>
            <div className="t-card">
              <img src={img4} alt="" />
              <p>
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat modi et consequuntur sint esse atque adipisci totam
                dolorum repellendus at vel ex obcaecati error deleniti,
                dignissimos, quae a perferendis nulla saepe! Aperiam, quam
                iste."
              </p>
              <div className="name">Manish Bisht</div>
              <p className="role">Full Stack Developer</p>
            </div>
          </Carousel>
        </div>
      </div>

      {/* contact  */}

      <div className="contact">
        <div className="bx1">
          <div className="big-text">Email Us</div>
          <div className="small-text">
            Connect with us in case of any queries, complaints or feedbacks...
          </div>
        </div>
        <button className="button button_active">Contact Us</button>
      </div>
    </>
  );
};

export default Home;
