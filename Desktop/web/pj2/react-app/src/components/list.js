import React from "react";

let List = ({ titles, setSelectedTitle, increaseLikes, selectedTitle }) => {
    return (
        <>
            {titles.map((title) => (
                <div className="list" key={title.id} onClick={() => setSelectedTitle(title)}>
                    <h4>{title.titlename} <span onClick={() => increaseLikes(title.id)}>👍</span> {title.likes}</h4>
                    <p>{title.date}</p>
                    {title === selectedTitle && (
                        <div className="selected-title-info">
                            <p>{title.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}
export default List;