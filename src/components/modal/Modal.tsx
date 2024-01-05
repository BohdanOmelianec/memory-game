import "./modal.scss";

const Modal = ({ restartGame }: { restartGame: () => void }) => {
  return (
    <div className={`modal`}>
      <div className="modal-content">
        <div className="box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.0"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              color="rgb(21 145 21)"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
          <h1 className="modal-title">Well done!</h1>
          <button className="button" onClick={restartGame}>
            Start new game
          </button>
        </div>
      </div>

    </div>
  );
};

export default Modal;
