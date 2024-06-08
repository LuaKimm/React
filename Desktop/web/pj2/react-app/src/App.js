import './App.css';
import { useState } from 'react';
import List from './components/list';

function App() {
    const initialTitles = [
        {
            id: 1,
            titlename: '국내여행 -강아지 워터파크 추천',
            date: '6월 4일 발행',
            content: '강추',
            likes: 0
        },
        {
            id: 2,
            titlename: '강아지와 함께 하는 카페 탐방',
            date: '6월 5일 발행',
            content: '좋아요',
            likes: 0
        },
        {
            id: 3,
            titlename: '맛집기행-강아지 동반 식당 추천',
            date: '6월 6일 발행',
            content: '맛있어요',
            likes: 0
        }
    ];

    const [titles, setTitles] = useState(initialTitles);
    const [inputValue, setInputValue] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [content, setContent] = useState('');
    const [selectedTitle, setSelectedTitle] = useState(null);

    const addItem = () => {
        const newId = titles.length ? titles[titles.length - 1].id + 1 : 1;
        const formattedDate = `${year}년 ${month}월 ${day}일`;
        const newTitle = {
            id: newId,
            titlename: inputValue,
            date: formattedDate,
            likes: 0,
            content: content
        };
        setTitles([...titles, newTitle]);
        setInputValue('');
        setYear('');
        setMonth('');
        setDay('');
        setContent('');
    };

    const changeTitle = () => {
        let newTitles = [...titles];
        newTitles[0].titlename = '국내여행 -고양이 동반 여행';
        setTitles(newTitles);
    };

    const sortTitles = () => {
        let newArray = [...titles];
        newArray.sort((a, b) => a.titlename.localeCompare(b.titlename));
        setTitles(newArray);
    };

    const increaseLikes = (id) => {
        const newTitles = titles.map(title => {
            if (title.id === id) {
                return { ...title, likes: title.likes + 1 };
            }
            return title;
        });
        setTitles(newTitles);
    };

    return (
        <div className="App">
            <div className="black-nav">
                <h4>자유롭개</h4>
            </div>

            <button onClick={changeTitle}>글 수정</button>
            <button onClick={sortTitles}>가나다순</button>
            <List 
                titles={titles} 
                setSelectedTitle={setSelectedTitle} 
                increaseLikes={increaseLikes} 
                selectedTitle={selectedTitle} 
            />
            <Modal
                addItem={addItem}
                inputValue={inputValue}
                setInputValue={setInputValue}
                year={year}
                setYear={setYear}
                month={month}
                setMonth={setMonth}
                day={day}
                setDay={setDay}
                content={content}
                setContent={setContent}
            />
        </div>
    );
}

const Modal = ({ addItem, inputValue, setInputValue, year, setYear, month, setMonth, day, setDay, content, setContent }) => {
    return (
        <div className="modal">
            <label htmlFor="title_name">제목</label>
            <input 
                value={inputValue} 
                type="text" 
                onChange={(event) => setInputValue(event.target.value)} 
                className="wide-input"
            />
            <br />
            <div className="date-container">
                <input 
                    type="text" 
                    value={year} 
                    placeholder="YYYY" 
                    onChange={(event) => setYear(event.target.value)} 
                />
                <input 
                    type="text" 
                    value={month} 
                    placeholder="MM" 
                    onChange={(event) => setMonth(event.target.value)} 
                />
                <input 
                    type="text" 
                    value={day} 
                    placeholder="DD" 
                    onChange={(event) => setDay(event.target.value)} 
                />
            </div>
            <br />
            <p>상세내용</p>
            <textarea 
                value={content} 
                onChange={(event) => setContent(event.target.value)} 
                className="large-textarea" 
            />
            <br />
            <button onClick={addItem}>추가</button>
        </div>
    );
}

export default App;




