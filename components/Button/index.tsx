import Link from 'next/link';
import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
    href: string;
    extraClass?: string; // This will allow you to add additional classes if needed
    targetBlank?: boolean; // This will determine if target="_blank" should be added
}

const Button: React.FC<ButtonProps> = ({ text, href, extraClass, targetBlank = false }) => {
    return (
        <Link
            href={href}
            className={`${styles.btn} ${extraClass ? extraClass : ''}`}
            target={targetBlank ? '_blank' : '_self'} // Conditionally set target="_blank"
            rel={targetBlank ? 'noopener noreferrer' : ''} // Add rel attribute for security when using target="_blank"
        >
            {text}
        </Link>
    );
};

// Required for better debugging with forwardRef
Button.displayName = "Button";

export default Button;
