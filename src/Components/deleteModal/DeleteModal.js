import styles from '../ErrorModal/ErrorModal.module.css';
import Card from "../../UI/Card/Card";
import Button from '../../UI/Button/Button';

function DeleterModal(props) {
    function yes(){
        props.handYes();
    }

    function no(){
        props.handNo();
    }

    return <div className={styles.backdrop}>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>Удаление пользователя!</h2>
            </header>
            <div className={styles.content}>
                <p>Вы действительно хотите удалить?</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={yes}>Да</Button>
                <Button onClick={no}>Нет</Button>
            </footer>
        </Card>
    </div>
}

export default DeleterModal;