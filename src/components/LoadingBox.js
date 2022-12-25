import styles from "../assets/appstyle/loading.module.css";

const Loading = () => {
	return (
		<div className={styles["container"]}>
			<div className={styles["loader"]}>
				<p>l</p>
				<p>o</p>
				<p>a</p>
				<p>d</p>
				<p>i</p>
				<p>n</p>
				<p>g</p>
			</div>
		</div>
	);
};

export default Loading;
