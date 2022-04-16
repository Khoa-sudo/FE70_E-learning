let initialState = {
    //Vì sao để object mà không phải là mảng
    // - Có rất nhiều dữ liệu liên quan nên coures sẽ chứa tất cả dữ liệu
    courses: [],
    courseDetail: null
}

const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COURSES':
            state.courses = action.payload;
            return { ...state }
        case 'FETCH_COURSE_DETAIL':
            state.courseDetail = action.payload;
            return { ...state }

        default:
            return state;
    }
}

export default CourseReducer;