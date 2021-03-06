import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import s from "./Team.module.css";
import team from "../../data/team";
import { useState } from "react";
import TeamModal from "../TeamModal/TeamModal";

export default function Team({ children, onBtnClick }) {
  const [teamModal, setTeamModal] = useState(false);
  const [memberId, setMemberId] = useState(1);

  const onTeamModalOpen = (e) => {
    setMemberId(Number(e.currentTarget.id));
    setTeamModal(true);
  };

  const onTeamModalClose = () => {
    setTeamModal(false);
  };
  // const settings = {
  //   // dots: true,
  //   // infinite: false,
  //   // speed: 500,
  //   // slidesToShow: 1,
  //   // slidesToScroll: 2,
  //   // nextArrow: <SampleNextArrow />,
  //   // prevArrow: <SamplePrevArrow />,

  //   swipeable: true,
  //   emulateTouch: true,
  //   useKeyboardArrows: true,
  //   showStatus: false,
  //   showThumbs: false,
  //   showArrows: true,
  //   showIndicators: false,
  //   stopOnHover: true,
  //   infiniteLoop: true,
  //   autoPlay: true,
  //   interval: 10000,
  // };

  // function onShowMore() {
  //   setShowMore((prev) => {
  //     return !prev;
  //   });
  // }
  return (
    <div className={s.wrapper} id="team">
      {children}
      {/* <Carousel {...settings} className={s.slider}> */}
      <ul className={s.cardList}>
        {team.map((member) => {
          return (
            <li key={member.id} className={s.card}>
              <img src={member.url} alt={member.name} className={s.image} />
              <div className={s.cardInfo}>
                <h4 className={s.title}>{member.name}</h4>
                <p className={s.position}>{member.position}</p>
                {/* <p className={s.descrMobile}>
                  {!showMore ? member.descr.slice(0, 60) + "..." : member.descr}
                  <button
                    className={s.showMoreBtn}
                    type="button"
                    onClick={onShowMore}
                  >
                    {!showMore ? "???????????? ??????????" : "????????????"}
                  </button>
                </p> */}
                {/* <p className={s.descr}>
                  {!showMore ? member.descr.slice(0, 40) + "..." : member.descr}
                </p> */}
                <button
                  id={member.id}
                  onClick={onTeamModalOpen}
                  className={s.showMoreBtn}
                >
                  ???????????? ??????????????????
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {/* </Carousel> */}
      {teamModal && (
        <TeamModal
          onBtnClick={onBtnClick}
          memberId={memberId}
          close={onTeamModalClose}
        />
      )}
    </div>
  );
}
