export default function Buttons() {
  const handleEmailButtonClick = () => {
    window.location.href = "mailto:Lizettemu1@gmail.com";
  };
  return (
    <div className="buttons">
      <button id="btn-email" onClick={handleEmailButtonClick}>
        <i className="fa fa-envelope"></i>Email
      </button>
      <button id="btn-linkedin">
        <i className="fab fa-linkedin"></i>LinkedIn
      </button>
    </div>
  );
}
