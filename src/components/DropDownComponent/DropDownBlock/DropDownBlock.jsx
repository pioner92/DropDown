import React from 'react';

const DropDownBlock = (props) => {

    const onChange = (e) => {
        props.setIsVisible(true)
        props.setValue(e.target.value)
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 27) {
            props.setIsVisible(false)
        }
    }
    const onDelete = (id) => {
        props.onDelete(id)
    }

    return (
        <div className="container">
            <div className="items">
                {props.selectedList.map((el) => {
                    return (
                        <div key={el.id} className={"selected_items_block"}>
                            <span className="selected-item">{el.title} </span>
                            <span onClick={() => onDelete(el.id)} className='delete'> x</span>
                        </div>
                    )
                })}
            </div>
            <div className="dropdown-menu-input_block">
                <input ref={props.inputEl} onKeyDown={onKeyDown} onFocus={() => props.setIsVisible(true)}
                       value={props.value} onChange={onChange} className="dropdown-menu-input" type="text"/>
                <div onClick={props.onSetIsVisible} className="add">+</div>
            </div>
        </div>
    );
};

export default DropDownBlock;
