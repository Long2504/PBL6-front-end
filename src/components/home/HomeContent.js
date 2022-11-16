import { Component } from "react";
import styles from '../../assets/appstyle/main.module.css'

class HomeContent extends Component {
    render() {
        return (
            <div className={styles["container"]}>
                <div id={styles["slider"]}>
                    <img className={styles["img-slider"]} src="/assets/image/home.jpg"></img>
                </div>
                <div className={styles["content"]}>
                    <div className={styles["slides"] + styles["slowFade"]}>
                        <div className={styles["slide"]}>
                            <img className={styles["img-content"]} src="https://dlcdnwebimgs.asus.com/gain/AA39F748-8AA2-4B41-AE10-0FA4B590583A"></img>
                        </div>
                        <div className={styles["slide"]}>
                            <img className={styles["img-content"]} src="https://dlcdnwebimgs.asus.com/gain/1EADD94D-CFE1-4773-8531-9AFAEFA19B22/fwebp"></img>
                        </div>
                        <div className={styles["slide"]}>
                            <img className={styles["img-content"]} src="https://dlcdnwebimgs.asus.com/gain/EF9E42D5-55F8-4DCF-9965-8D8F2788D2FB/fwebp"></img>
                        </div>
                        <div className={styles["slide"]}>
                            <img className={styles["img-content"]} src="https://dlcdnwebimgs.asus.com/gain/64B0F267-4834-4C76-BC12-ECEA2BAE0E67"></img>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default HomeContent;