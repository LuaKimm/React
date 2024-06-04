/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let post = '애견 동반 여행지 추천';
    const initialTitles = [{
        id: 1,
        titlename: '강아지 동반 식당',
        date: '6월 4일 발행'
    },
    {
        id: 2,
        titlename: '강아지 동반 카페',
        date: '6월 5일 발행'
    },
    {
        id: 3,
        titlename: '강아지 워터파크 추천',
        date: '6월 6일 발행'
    }
    ];

    let [titles, setTitles] = useState(initialTitles);
    let [따봉, 따봉변경] = useState(0);

    const changeTitle = () => {
        let newTitles = [...titles];
        newTitles[0].titlename = '고양이 동반 식당';
        setTitles(newTitles);
    };

    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{ fontSize: '16px' }}>자유롭개</h4>
            </div>
            <div className="list">
                <h4 onClick={changeTitle}>{titles[0].titlename} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉}</h4>
                <p>{titles[0].date}</p>
            </div>
            <div className="list">
                <h4>{titles[1].titlename}</h4>
                <p>{titles[1].date}</p>
            </div>
            <div className="list">
                <h4>{titles[2].titlename}</h4>
                <p>{titles[2].date}</p>
            </div>
        </div>
    );
}

export default App;

