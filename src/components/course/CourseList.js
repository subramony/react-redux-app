import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

let CourseList = React.createClass({
    propTypes : {
        courses: PropTypes.array.isRequired
    },
   render :function () {
       return (
           <table className="table">
               <thead>
               <tr>
                   <th>&nbsp;</th>
                   <th>Title</th>
                   <th>Author</th>
                   <th>Category</th>
                   <th>Length</th>
               </tr>
               </thead>
               <tbody>
               {this.props.courses.map(course =>
                   <CourseListRow key={course.id} course={course}/>
               )}
               </tbody>
           </table>
       );
   }
});

export default CourseList;