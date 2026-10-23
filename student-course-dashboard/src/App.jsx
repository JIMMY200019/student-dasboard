import { useState } from "react";
import CourseCard from "./components/CourseCard.jsx";
import { courses } from "./data/courses.js";

const FILTERS = ["All", "In progress", "Completed"];

function App() {
  // Extension feature: filter courses by status
  const [filter, setFilter] = useState("All");

  const visibleCourses = courses.filter((course) => {
    if (filter === "Completed") return course.completed;
    if (filter === "In progress") return !course.completed;
    return true;
  });

  const completedCount = courses.filter((c) => c.completed).length;

  return (
    <div className="app">
      <header className="header">
        <h1>Student Course Dashboard</h1>
        <p className="subtitle">
          {completedCount} of {courses.length} courses completed
        </p>
      </header>

      <nav className="filters" aria-label="Filter courses">
        {FILTERS.map((name) => (
          <button
            key={name}
            className={filter === name ? "filter active" : "filter"}
            onClick={() => setFilter(name)}
          >
            {name}
          </button>
        ))}
      </nav>

      <main>
        {/* Empty state: shown when there is nothing to display */}
        {visibleCourses.length === 0 ? (
          <p className="empty">
            No courses to show here yet. Try a different filter or add a new course.
          </p>
        ) : (
          <section className="grid">
            {visibleCourses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                lecturer={course.lecturer}
                progress={course.progress}
                completed={course.completed}
              />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
