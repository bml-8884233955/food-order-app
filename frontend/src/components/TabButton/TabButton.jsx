import styles from './TabButton.module.scss';

const TabButton = ({ children, item, link, ...props }) => {
    return (
        <li
            className={styles.tabButton}
            key={item}
            {...props}
        >
            <a className="li-link nav-link" aria-current="page" href={`/${link}`}>{children || item}</a>
        </li >
    );
};

export default TabButton;
