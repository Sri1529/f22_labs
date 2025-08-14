export const ErrorIcon = ({ bgColor = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="white"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" fill={bgColor} />
      <line x1="12" y1="6" x2="12" y2="14" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="18" r="1.5" fill="white" />
    </svg>
  );
};


export default ErrorIcon