interface LogoProps {
    className?: string;
}

const Logo = ({ className = "w-10 h-10" }: LogoProps) => {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
            </defs>

            {/* Background circle */}
            <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />

            {/* Crypto network nodes */}
            <circle cx="50" cy="25" r="6" fill="white" opacity="0.9" />
            <circle cx="75" cy="50" r="6" fill="white" opacity="0.9" />
            <circle cx="50" cy="75" r="6" fill="white" opacity="0.9" />
            <circle cx="25" cy="50" r="6" fill="white" opacity="0.9" />
            <circle cx="50" cy="50" r="8" fill="white" />

            {/* Connection lines */}
            <line x1="50" y1="25" x2="50" y2="50" stroke="white" strokeWidth="2" opacity="0.6" />
            <line x1="75" y1="50" x2="50" y2="50" stroke="white" strokeWidth="2" opacity="0.6" />
            <line x1="50" y1="75" x2="50" y2="50" stroke="white" strokeWidth="2" opacity="0.6" />
            <line x1="25" y1="50" x2="50" y2="50" stroke="white" strokeWidth="2" opacity="0.6" />

            {/* Diagonal connections */}
            <line x1="50" y1="25" x2="75" y2="50" stroke="white" strokeWidth="1.5" opacity="0.4" />
            <line x1="75" y1="50" x2="50" y2="75" stroke="white" strokeWidth="1.5" opacity="0.4" />
            <line x1="50" y1="75" x2="25" y2="50" stroke="white" strokeWidth="1.5" opacity="0.4" />
            <line x1="25" y1="50" x2="50" y2="25" stroke="white" strokeWidth="1.5" opacity="0.4" />
        </svg>
    );
};

export default Logo;
