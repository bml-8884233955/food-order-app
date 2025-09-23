import styles from './button.module.scss';
const Button = ({ label, onClick }) => {
    return (
        <button
            className={styles.addBtn}
            onClick={onClick}
        >
            {label}
        </button >
    )
}

export default Button;