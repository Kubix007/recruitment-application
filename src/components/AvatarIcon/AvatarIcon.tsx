import { TextSVG } from "./AvatarIcon.style";
import { IAvatarIconProps } from "./types";

const AvatarIcon: React.FC<IAvatarIconProps> = ({ text }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52.727"
        height="52.727"
        viewBox="0 0 52.727 52.727"
      >
        <circle
          id="Ellipse_19"
          data-name="Ellipse 19"
          cx="26.363"
          cy="26.363"
          r="26.363"
          fill="#589103"
        />
        <TextSVG x="19" y="32" className="elipse">
          {text}
        </TextSVG>
      </svg>
    </>
  );
};

export default AvatarIcon;
