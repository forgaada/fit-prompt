const EmailAvatar = ({ email }) => {

    const getInitial = (email) => {
        if (!email) return 'A';
        return email.charAt(0).toUpperCase();
    };

    return (
        <div className='email-avatar'>
            {getInitial(email)}
        </div>
    );
};

export default EmailAvatar;