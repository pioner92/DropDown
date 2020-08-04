import React, {useEffect, useRef, useState} from 'react';
import items from '../../items'
import DropDownList from "./DropDownList/DropDownList";
import DropDownBlock from "./DropDownBlock/DropDownBlock";

function DropDownComponent(props) {
    const [isVisible, setIsVisible] = useState(false)
    const [selectedList, setSelectedList] = useState([])
    const [value, setValue] = useState('')
    const [list, setList] = useState([...items.items])
    const [number, setNumber] = useState(1)
    const inputEl = useRef()
    const item = useRef()
    const onSetIsVisible = () => {
        setIsVisible(prevState => !prevState)
    }

    const addToSelected = (e) => {
        setSelectedList(prevState => [...prevState, e])
    }
    useEffect(() => {
        setList(items.items.filter(item => item.title.toLowerCase().includes(value.toLowerCase())))
    }, [value])

    const setTabIndex = (e) => {
        switch (e.keyCode) {
            case 40:setNumber(prevState => prevState + 1);break;
            case 38: setNumber(prevState => prevState - 1);break;
            case 13:addToSelected(list.find((el) => el.id === item.current.tabIndex));break;
            default:break;
        }
    }

    const onDelete = (id) => {
        setSelectedList(prevState => prevState.filter((el) => el.id !== id))
    }

    useEffect(() => {
        if (item.current) {
            item.current.focus()
        }
    }, [number])

    return (
        <div className="App">
            <div onKeyDown={setTabIndex}>
                <DropDownBlock onDelete={onDelete} setTabIndex={setTabIndex} item={item} inputEl={inputEl} value={value}
                               setValue={setValue}
                               setIsVisible={setIsVisible} selectedList={selectedList} onSetIsVisible={onSetIsVisible}/>
                {isVisible &&
                <DropDownList number={number} setTabIndex={setTabIndex} item_ref={item} inputEl={inputEl} list={list}
                              value={value} selectedList={selectedList} addItem={addToSelected} items={items}/>
                }
            </div>
        </div>
    );
}

export default DropDownComponent;
