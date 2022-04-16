import React, { Component } from 'react';
import axios from 'axios';
import { TOKEN_CYBERSOFT } from '../../util/setting';
import { connect } from 'react-redux';


class CourseDetailScreen extends Component {
    render() {
        return <div className="container">
            <div className='row'>
                <div className="col-4">
                    <div className="card text-white bg-primary">
                        <img className="card-img-top" src={this.props.courseDetail.hinhAnh} />
                        <div className="card-body">
                            <h4 className="card-title">{this.props.courseDetail.tenKhoaHoc}</h4>
                            <p className="card-text">Text</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }

    componentDidMount() {
        axios({
            method: "GET",
            url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=00001',
            headers: {
                TokenCybersoft: TOKEN_CYBERSOFT
            }
        }
        )
            .then((res) => {
                //tiến hành dispatch lên store
                this.props.dispatch({
                    type: 'FETCH_COURSE_DETAIL',
                    payload: res.data
                })
            }).catch(err => {
                console.log(err);
            })
    }
}
const mapStateToProps = (state) => ({
    courseDetail: state.course.courseDetail || {
        maKhoaHoc: '',
        tenKhoaHoc: '',
        hinhAnh: '',
        nguoiTao: {
            taiKhoan: '',
            hoTen: ''
        }
    }
})
export default connect(mapStateToProps)(CourseDetailScreen);