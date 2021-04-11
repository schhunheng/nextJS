import styles from './../../styles/components/presentations/List.module.css'
const List = ({icon,name}) => {
    return ( 
        <div className={styles.container}>
            <img className={styles.img} src={icon}/>
            <span className={styles.name}>{name}</span>
        </div>
     );
}
 
export default List;