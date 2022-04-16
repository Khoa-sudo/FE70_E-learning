import React, { Component } from "react";
import CourseItem from "../../Components/CourseItems";
import Axios from "axios";
import { TOKEN_CYBERSOFT } from "../../util/setting";
import { connect } from "react-redux";

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 text-center">Danh sách khóa học</h1>
                <div className="container">
                    <div className="row">
                        {this.props.courseList.map((item, index) =>
                            <div className="col-3" key={index}>
                                <CourseItem item={item} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        //axios return promise ES6
        Axios({
            method: "GET",
            url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
            headers: {
                //token đưa vào phần thuộc tính header
                TokenCybersoft: TOKEN_CYBERSOFT,
            },
        })
            .then((res) => {
                this.props.dispatch({
                    type: 'FETCH_COURSES',
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
const mapStateToProps = (state) => ({
    courseList: state.course.courses
})
export default connect(mapStateToProps)(HomeScreen);
