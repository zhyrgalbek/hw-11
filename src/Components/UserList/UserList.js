import Card from '../../UI/Card/Card';
import styles from './UserList.module.css';
import DeleteUser from '../DeleteUser/DeleterUser';
import DeleterModal from '../deleteModal/DeleteModal';
import {useState} from 'react';

const UserList = props => {
    const [isValidDelete, setIsValidDelete] = useState(false);
    const [id, setId] = useState('');
    function handOverId(id){
        setIsValidDelete(true);
        setId(id);
    }

    function handYes(){
        setIsValidDelete(false);
        props.getId(id);
    }

    function handNo(){
        setIsValidDelete(false);
    }


    return (
        <Card className={styles.users}>
            {isValidDelete ? <DeleterModal handYes={handYes} handNo={handNo} /> : ''}
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        <span>
                            {user.name} {user.age} years old 
                        </span>
                        <DeleteUser id={user.id} handOverId={handOverId} deleteUser={handYes}  />
                    </li>
                ))}
            </ul>
        </Card>
    )

}
export default UserList