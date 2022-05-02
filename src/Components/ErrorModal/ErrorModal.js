import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import styles from './ErrorModal.module.css';

const ErrorModal = props => {

    return (
        <div className={styles.backdrop} onClick={props.onConfirm}>
           <Card className={styles.modal}>
               <header className={styles.header}>
                <h2>{props.title}</h2>
               </header>
               <div className={styles.content}>
                       <p>{props.message}</p>
               </div>
               <footer className={styles.actions}>

                {props.onConfirm && <Button type="submit">okay</Button>}
                
                {props.handYes && props.handNo && <Card><Button onClick={props.handYes}>yes</Button><Button onClick={props.handNo}>No</Button></Card>} 

               </footer>
           </Card>
        </div>
    )
}

export default ErrorModal