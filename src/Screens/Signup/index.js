import React, { Component } from 'react'

class SignupScreen extends Component {
    render() {
        return (
            <div className='container w-50 mx-auto'>
                <h1 className='display-4 text-center'>
                    Sign up
                </h1>
                <form action>
                    <div className="form-group">
                        <label>Tài khoản</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Mật khẩu</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Mã nhóm</label>
                        <select className='form-control'>
                            <option value="">GP01</option>
                            <option value="">GP02</option>
                            <option value="">GP03</option>
                            <option value="">GP04</option>
                            <option value="">GP05</option>
                            <option value="">GP06</option>
                            <option value="">GP07</option>
                            <option value="">GP08</option>
                            <option value="">GP09</option>
                            <option value="">GP10</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupScreen
