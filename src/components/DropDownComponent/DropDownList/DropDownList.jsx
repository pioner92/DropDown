import React from 'react';

const DropDownList = (props) => {

    const addToSelectedList = (e) => {
        props.inputEl.current.focus()
        props.addItem(e)
    }

    return (
        <ul className='content'>
            {props.list.map(item => {
                return (
                    <div key={item.id}>
                        {
                            !props.selectedList.includes(item) &&
                            <li onFocus={(e) => e.target.focus()} id={item.id}
                                ref={item.id === props.number ? props.item_ref : null} tabIndex={item.id}
                                className={'item'} onClick={() => addToSelectedList(item)}>{item.title}</li>
                        }
                    </div>
                )
            })}
        </ul>
    );
};

export default DropDownList;
