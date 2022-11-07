import { Component } from "react";
import styles from '../../assets/appstyle/main.module.css'

class HomeContent extends Component {
    render() {
        return (
            <div className={styles["container"]}>
                <div id={styles["slider"]}>
                    <img className={styles["img-content"]} src="https://dlcdnwebimgs.asus.com/gain/AA39F748-8AA2-4B41-AE10-0FA4B590583A"></img>
                </div>
                <div className={styles["content"]}></div>
            </div>

        )
    }
}

export default HomeContent;