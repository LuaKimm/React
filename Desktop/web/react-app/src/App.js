/*eslint-disable*/
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let post = '애견 동반 여행지 추천';
    const initialTitles = [{
        id: 1,
        titlename: '국내여행 -강아지 워터파크 추천',
        date: '6월 4일 발행'
    },
    {
        id: 2,
        titlename: '강아지와 함께 하는 애견 동반 카페',
        date: '6월 5일 발행'
    },
    {
        id: 3,
        titlename: '맛집기행-강아지 동반 식당 추천',
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

    const sortTitles = () => {
        let newArray = [...titles];
        newArray.sort((a, b) => a.titlename.localeCompare(b.titlename));
        setTitles(newArray);
    };

    return (
        <div className="App">
            <div className="black-nav">
                <h4 style={{ fontSize: '16px' }}>자유롭개</h4>
            </div>

            <button onClick={changeTitle}>글 수정</button>
            <button onClick={sortTitles}>가나다순</button>
        <List titles = {titles} 따봉= {따봉} 따봉변경 = {따봉변경} />
        
        <Modal/>
        </div>
    );
}

let Modal = () => {
    return  <div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
</div>
}

let List = ({titles, 따봉, 따봉변경}) => {
    return (   <>
    <div className="list">
        <h4>{titles[0].titlename} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉}</h4>
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
</>
    );
}

export default App;


