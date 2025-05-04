import styles from './Tag.module.scss';

interface TagProps {
    text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
    return (
        <div className={styles.tag}>
            <span>{text}</span>
        </div>
    );
};

export default Tag;
