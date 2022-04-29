import styles from './DeleteUser.module.css';

function DeleteUser(props){

    function handleDeleteUser(){
        props.handOverId(props.id);
    }

    function DeleteUser(){
        alert('Hell oworld')
        // props.DeleteUser(props.id);
    }

    return <button className={styles.button} onClick={handleDeleteUser}>удалить</button>
}

export default DeleteUser;