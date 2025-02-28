import { Label } from "reactstrap";

const PageLogo = () => {
    return (
        <div className='d-flex align-items-center page-logo'>
            <Label className="heading-label">
                Fit <span style={{ fontWeight: 'lighter' }}>Prompt</span>
            </Label>
        </div>
    );
}

export default PageLogo;
