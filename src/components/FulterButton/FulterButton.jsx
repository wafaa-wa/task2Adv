
export default function FulterButton({ className, children, onClick }) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}
