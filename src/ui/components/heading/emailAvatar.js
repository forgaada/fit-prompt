const EmailAvatar = ({ onClick, email, size = 'sm' }) => {

    const getInitial = (email) => {
        if (!email) return 'A';
        return email.charAt(0).toUpperCase();
    };

    switch (size) {
        case 'sm': return (<div onClick={onClick} className='email-avatar'>{getInitial(email)}</div>)
        case 'l': return (<div onClick={onClick} className='email-large-avatar'>{getInitial(email)}</div>)
        default: return (<div onClick={onClick} className='email-avatar'>{getInitial(email)}</div>)
    }
};

export default EmailAvatar;