import "../compoenents/Courses.css";
import CourseCard from "./CoursesCard";
function Courses() {
    const courses = [
        "React Basics",
        "JavaScript Mastery",
        "Node.js Beginner",
        "Full Stack Development"
    ];
    return (
        <section>
            <h2>Popular Courses</h2>
            {courses.map((course) => (
                <CourseCard title={course} />
            ))}
        </section>

    );

}
export default Courses;