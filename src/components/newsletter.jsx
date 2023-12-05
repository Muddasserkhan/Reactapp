import React from 'react'


const Newsletter = () => {
    return (
        <>
            <section className="footer-cta bg-dark py-5">
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-6 col-md-12">
                            <h2 className="text-white text-center">
                            Keep Up and Join Our Newsletter
                            </h2>
                            <p className="text-white text-center">
                            Duis autem vel eum iriure dolor in hendrerit in vulputate.
                            </p>
                            <form className="text-center px-5">
                                <div className="form-group text-center pt-3 pb-4">
                                    <input
                                    type="email"
                                    className="form-control text-center"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="E-mail Address"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-light mx-auto fs-6 px-4 py-2"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter
