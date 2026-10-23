// Reusable card: everything it shows comes in through props.
function CourseCard({ title, lecturer, progress, completed }) {
  return (
    <article className="card">
      <div className="card-top">
        <h3 className="card-title">{title}</h3>
        {/* Conditional rendering: badge text and style depend on the data */}
        <span className={completed ? "badge badge-done" : "badge badge-progress"}>
          {completed ? "Completed" : "In progress"}
        </span>
      </div>

      <p className="lecturer">Lecturer: {lecturer}</p>

      <div
        className="progress"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${title} progress`}
      >
        <div
          className={completed ? "progress-bar done" : "progress-bar"}
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="progress-text">{progress}% complete</p>
    </article>
  );
}

export default CourseCard;
