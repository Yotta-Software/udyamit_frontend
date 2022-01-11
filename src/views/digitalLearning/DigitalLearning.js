import React from "react";
import DigitalCard from "../../components/digitalLearning/DigitalCard";
import { getDigitalCourses } from "../../utils/dataApi";

function DigitalLearning() {
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const courseData = await getDigitalCourses("?limit=15");

      setCourses(courseData ? courseData.courses : []);
    }
    fetchData();
    return () => {
      setCourses([]);
    };
  }, []);
  return (
    <div className="container" style={{ paddingTop: 15, paddingBottom: 15 }}>
      <div className="row">
        {courses?.map((course) => {
          return (
            <div className="col-md-4 col-sm-12">
              <DigitalCard
                name={course.name}
                price={course.price}
                icon={course.icon}
                discp={course.description}
                id={course._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DigitalLearning;
