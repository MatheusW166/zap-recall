export default function FlipArrow({ onClick }) {
  return (
    <svg
      data-test="turn-btn"
      onClick={onClick}
      width="30"
      height="20"
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 0C6.75 0 0 3.38462 0 7.69231C0 11.0769 4.35 14 10.5 15.0769V20L16.5 13.8462L10.5 7.69231V11.8462C5.7 10.9231 3 8.92308 3 7.69231C3 6 7.5 3.07692 15 3.07692C22.5 3.07692 27 6 27 7.69231C27 8.76923 24.75 10.6154 21 11.5385V14.7692C26.25 13.5385 30 10.9231 30 7.69231C30 3.38462 23.25 0 15 0V0Z"
        fill="#333333"
      />
    </svg>
  );
}
