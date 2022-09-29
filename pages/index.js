import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Contenido Digital de Malvinas</title>
				<meta name='description' content='Contenido Digital de Malvinas' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Vídeos de Malvinas</h1>

				<div className={styles.grid}>
					<div className={styles.card}>
						<h2>Discurso de Galtieri</h2>
						<iframe
							width='auto'
							height='auto'
							src='https://www.youtube.com/embed/QFp5X1KzPGU'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>

					<div className={styles.card}>
						<h2>Hundimiento del Ara General Belgrano</h2>
						<iframe
							width='auto'
							height='auto'
							src='https://www.youtube.com/embed/27zg3sWk_lQ'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>

					<div className={styles.card}>
						<h2>Documental de Malvinas</h2>
						<iframe
							width='auto'
							height='auto'
							src='https://www.youtube.com/embed/bNI59kQG7Ow'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>

					<div className={styles.card}>
						<h2>Cortometraje de Malvinas</h2>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/yW0hhriJ-Ew?start=27'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>

					<div className={styles.card}>
						<h2>Documental de la dictadura</h2>
						<iframe
							width='auto'
							height='auto'
							src='https://www.youtube.com/embed/ufzoqg3lIkY'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>

					<div className={styles.card}>
						<h2>
							Canción {'"'}No Bombardeen Buenos Aires{'"'} de Charly Garcia
						</h2>
						<iframe
							width='auto'
							height='auto'
							src='https://www.youtube.com/embed/q7fXoJZLzY0'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen
						></iframe>
					</div>
				</div>
			</main>

			<footer className={styles.footer}>Hecho por Martín Valdez</footer>
		</div>
	);
}
