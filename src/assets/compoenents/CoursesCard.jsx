// reusable componenets
import "../compoenents/CoursesCard.css";
function CourseCard({ title }) {
    return (
        <>
            <h3>{title}</h3>
            <button>Enroll Know !!</button>
        </>
    );
}
export default CourseCard;