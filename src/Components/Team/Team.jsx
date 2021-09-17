import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Team.module.css";
import team from "../../data/team";
import { useState } from "react";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ffeb09",
        borderRadius: "50%",
        padding: "2px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#ffeb09",
        borderRadius: "50%",
        padding: "2px",
      }}
      onClick={onClick}
    />
  );
}

export default function Team({ children }) {
  const [showMore, setShowMore] = useState(false);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function onShowMore() {
    setShowMore((prev) => {
      return !prev;
    });
  }
  return (
    <div className={s.wrapper}>
      {children}
      <Slider {...settings} className={s.slider}>
        {team.map((member) => {
          return (
            <div key={member.id} className={s.card}>
              <img src={member.url} alt={member.name} className={s.image} />
              <h4 className={s.title}>{member.name}</h4>
              <p className={s.position}>{member.position}</p>
              <p className={s.descrMobile}>
                {!showMore ? member.descr.slice(0, 60) + "..." : member.descr}
                <button
                  className={s.showMoreBtn}
                  type="button"
                  onClick={onShowMore}
                >
                  {!showMore ? "Читать далее" : "Скрыть"}
                </button>
              </p>
              <p className={s.descr}>{member.descr}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
