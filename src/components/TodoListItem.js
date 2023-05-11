import {
    VscChromeMaximize,
    VscPassFilled,
    VscPass,
} from 'react-icons/vsc';
import cn from 'classname';
import './TodoListItem.scss'

const TodoListItem = ({todo, onRemove , onToggle }) => {
    const { id, text, checked } = todo;

    return(
        <div className='TodoListItem'>
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <VscPassFilled/> :<VscChromeMaximize/>}
                <div className='text'>{text}</div>
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <VscPass/>
            </div>
        </div>
    );
};

export default TodoListItem;