import React, { useState, useMemo } from 'react';

function SearchList() {
    const [inputValue, setInputValue] = useState('');  // 사용자 입력을 임시 저장할 상태
    const [searchTerm, setSearchTerm] = useState(''); // 검색을 수행할 실제 검색어
    const [items, setItems] = useState([...Array(1000).keys()].map(i => `Item ${i}`));

    // useMemo를 사용하여 필터링된 결과 메모이제이션
    const filteredItems = useMemo(() => {
        console.log('Filtering items for input:', searchTerm);
        return items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm]);  // searchTerm 변경 시에만 필터링 로직 재실행

    const handleSearch = () => {
        setSearchTerm(inputValue);  // 버튼 클릭 시 검색어 설정
    };

    return (
        <div>
            <h1>Item Search</h1>
            <input
                type="text"
                onInput={e => setInputValue(e.target.value)}  // 입력 필드 값 변경 핸들링
                placeholder="Enter search term..."
            />
            <button onClick={handleSearch}>Search</button>  
            <ul>
                {filteredItems.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchList;
