import React from 'react'

const Searchfilter = () => {
    return (
        <>
            <div className="col-md-6 mx-auto">
                <form className="row justify-content-center gap-3 mb-5">
                    <div className="d-flex justify-content-center flex-md-row justify-content-center gap-4 flex-lg-row flex-md-column flex-column">
                        <div className="form-group d-flex gap-3 justify-content-center">
                            <label htmlFor="inputEmail3" className="col-form-label m-0 px-0">
                                Select Month
                            </label>
                            <div className="px-0">
                                <select
                                className="form-select form-select-md"
                                aria-label=".form-select-lg example"
                                >
                                <option selected="">April</option>
                                <option value={1}>January</option>
                                <option value={2}>Febraury</option>
                                <option value={3}>March</option>
                                <option value={4}>April</option>
                                <option value={5}>May</option>
                                <option value={6}>June</option>
                                <option value={7}>July</option>
                                <option value={8}>August</option>
                                <option value={9}>September</option>
                                <option value={10}>Octuber</option>
                                <option value={11}>November</option>
                                <option value={12}>December</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group d-flex gap-3 justify-content-center">
                            <label htmlFor="inputPassword3" className="col-form-label px-0">
                                Select Year
                            </label>
                            <div className="px-0">
                                <select
                                className="form-select form-select-md"
                                aria-label=".form-select-lg example"
                                >
                                <option selected="">2023</option>
                                <option value={2017}>2017</option>
                                <option value={2018}>2018</option>
                                <option value={2019}>2019</option>
                                <option value={2020}>2020</option>
                                <option value={2021}>2021</option>
                                <option value={2022}>2022</option>
                                <option value={2023}>2023</option>
                                <option value={2024}>2024</option>
                                <option value={2025}>2025</option>
                                <option value={2026}>2026</option>
                                <option value={2027}>2027</option>
                                <option value={2028}>2028</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Searchfilter
