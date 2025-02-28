const EmailAvatar = ({ email, size = 'sm' }) => {

    const getInitial = (email) => {
        if (!email) return 'A';
        return email.charAt(0).toUpperCase();
    };

    switch (size) {
        case 'sm': return (<div className='email-avatar'>{getInitial(email)}</div>)
        case 'l': return (<div className='email-large-avatar'>{getInitial(email)}</div>)
        default: return (<div className='email-avatar'>{getInitial(email)}</div>)
    }
};

export default EmailAvatar;