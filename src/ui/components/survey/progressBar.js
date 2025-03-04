import React from "react";

const ProgressBar = ({currentPage, totalPages}) => {

    const getProgress = (currentPage, totalPages) => {
        return ((currentPage + 1) / totalPages) * 100;
    }

    return (
        <div className="progress-bar">
            <div className="progress" style={{width: `${getProgress(currentPage, totalPages)}%`}}></div>
        </div>
    )
}

export default ProgressBar