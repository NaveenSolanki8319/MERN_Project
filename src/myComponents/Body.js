import React from 'react'
import home from '../img/men.webp'

export default function Body() {
    return (
        <>
            <div className="container-fluid">
                <div style={{ margin: 0 }} className="row">
                    <div className="img-responsive col-md-7 bg-img "><img src={home} alt="Description for image" width={700} height={450} /><blockquote class="blockquote mb-0">
                        <p>“Inspiration does exist, but it must find you working.”</p>
                        <footer class="blockquote-footer"><cite title="Source Title"> Pablo Picasso</cite></footer>
                    </blockquote></div>

                    <div className="col-md-4 mt-3 ms-5">
                        <div className="card mt-3 ms-5">
                            <div className="card-body">
                                <form action="{{url_for('login_validation')}}" className="'form" method="POST">
                                    <div className="mb-3">
                                        <p className="fw-bold fs-3 align-center" style={{ textAlign: 'center' }}>Login Here</p>
                                        <label className="fw-bold fs-6">Email address</label><br />
                                        <input type="email" className="fw-bold form-control" name="user_email" required={1} maxLength={30} /><br />
                                        <label className="fw-bold fs-6">Password</label><br />
                                        <input type="password" className="mt-2 form-control" name="user_password" required={1} maxLength={10} /><br />
                                        <div className="d-grid gap-2">
                                            <input type="submit" className="fw-bolder btn btn-dark" name="login" defaultValue="Login" />
                                        </div>
                                        <div class="text-center">
                                        <button type="button" className="text-center mt-4 btn btn-outline-dark">Not a User? Create Account</button>
                                        </div>
                                        {/* <p className="text-center mt-5">Not a User? <a href data-bs-toggle="modal" data-bs-target="#registerModal">Create Account</a> </p> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="registerModal" tabIndex={-1} aria-labelledby="registerModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registerModalLabel">Register Here</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form action="{{url_for('register')}}" method="POST">
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                                    <input type="text" className="form-control" id="recipient-name" name="name" required={1} maxLength={20} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="recipient-email" className="col-form-label">Email:</label>
                                    <input type="email" className="form-control" id="recipient-email" name="email" required={1} maxLength={30} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="col-form-label">Address:</label>
                                    <input type="text" className="form-control" id="address" required={1} name="address" maxLength={30} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="col-form-label">Password:</label>
                                    <input type="password" className="form-control" id="password" required={1} name="password" maxLength={10} />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <input type="submit" className="btn btn-dark" name="register" defaultValue="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
