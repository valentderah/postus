import {Button} from "../../components/Button";

export const NewPost = () => {
    return (
        <div className="">
            <h1>New Post</h1>
            <div className="write">
                <div className="write-wrapper">
                    <input type="text" placeholder="Write your message"/>
                </div>
                <Button/>
            </div>
        </div>
    );
}

