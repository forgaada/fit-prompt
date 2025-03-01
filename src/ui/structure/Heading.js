import PageLogo from "../components/heading/pageLogo";
import UserInfo from "../components/heading/userInfo";
import Navigation from "../components/heading/navigation";

/**
 * Page heading section containing logo and user info.
 */
const Heading = () => {
    return (
        <>
            <div className='heading-div'>
                <PageLogo/>
                <Navigation/>
                <UserInfo/>
            </div>
        </>
    )
}

export default Heading
