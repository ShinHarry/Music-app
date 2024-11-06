import classNames from "classnames/bind";
import styles from "./SongItem.module.scss";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function SongItem() {
    return (
        <div className = {cx('wrapper')}>
            <img className={cx('avatar')}
                src = ""
                alt="avatar"
             />
            <div className = {cx('info')}>
                <h4 className={cx('name')}>
                    <span>Song Name</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
            </div>
        </div>
    );

}

export default SongItem;