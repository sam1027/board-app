import { Link } from "react-router-dom";

export default function Header () {
    return (
        <div>
            <Link to="/">
                <h1>게시판 App!</h1>
            </Link>
        </div>
    );
}