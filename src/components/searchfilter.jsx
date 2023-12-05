import React from 'react'

const Searchfilter = () => {
    const monthNames = [
        'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
    ];
    
    const currentYear = new Date().getFullYear();
    const yearsRange = 20;
    const years = Array.from({ length: yearsRange * 2 + 1 }, (_, index) => currentYear - yearsRange + index);
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
                                <option value='Choose the month'>Choose the Month</option>
                                {
                                    monthNames.map((month, index) => (
                                        <option key={index} value={index + 1}>
                                            {month}
                                        </option>
                                    ))
                                }
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
                                <option value='Choose the year'>Choose the year</option>
                                {
                                    years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))
                                }
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
