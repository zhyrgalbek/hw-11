import Card from '../../UI/Card/Card';
import styles from './UserList.module.css';
import {useState} from 'react';
import Button from '../../UI/Button/Button';
import ErrorModal from '../ErrorModal/ErrorModal';

const UserList = props => {
    const [deleteText, setDeleteText] = useState(false);
    const [id, setId] = useState('');

    function handOverId(id){
        setDeleteText({
            title: 'Удаление пользователя!',
            message: 'Вы хотите удалить пользователя?'
        })
        setId(id);
    }

    function handYes(){
        props.getId(id);
        setDeleteText(null)
    }

    function handNo(){
        setDeleteText(null)
    }


    return (
        <Card className={styles.users}>
            {deleteText && <ErrorModal title={deleteText.title} message={deleteText.message} handYes={handYes} handNo={handNo} />}
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        <span>
                            {user.name} {user.age} years old 
                        </span>
                        <Button onClick={()=>handOverId(user.id)}>delete</Button>
                    </li>
                ))}
            </ul>
        </Card>
    )

}
export default UserList