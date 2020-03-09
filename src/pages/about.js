import React, { useState } from 'react';
import tree from '../assets/Pic/tree.JPG';
import resume from '../assets/pdf/Code.pdf';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function About() {
	const [ modalIsOpen, setIsOpen ] = useState(false);
	const openModal = () => {
		setIsOpen(true);
	};

	const afterOpenModal = () => {
		// references are now sync'd and can be accessed.
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<section className="contactbox" id="box">
				<h2>
					About Me <hr />
				</h2>
				<img src={tree} alt="picMe" id="mepic" />
				<p className="break" id="pOne">
					Welcome to my developer site! My name is Shauna Larkin. I hope you enjoy your time spent here. In
					this section I will tell you a little about myself, my history, and the work I've done and hoping to
					do.
				</p>

				<p className="break" id="pTwo">
					I am a Colorado Native, my home town is Georgetown. I have owned and opprated my own pet care
					bussines for 14 years and going. With completion of my formal training in web develoment I will be
					opening my own freelance web design bussines. My formal studies were in the field of art, in both
					animation and illistratution, with some graphic design thrown in the mix.
				</p>

				<p className="break" id="pFour">
					While my studies were in art and I have a love for all art. My intrest are more specifically lie in
					the Renaissance to Romanticism periods of western art, and in general for Middle Eastern and Aisan
					art.
				</p>
				<p className="break" id="pFive">
					As a developer, I am passionate about using my art education and pasion for art to creative websits
					that is both fuctional and aesthetically pleasing. Where beauty is just as important as fuction.
				</p>
				<p className="break" id="pSix">
					As my client, I will work together with you, collaborating to realize the projects you envision,
					providing you with the best quality and support, and the knowledge that the final product will
					truely be a part and representation of YOU and YOUR needs.
				</p>
				<p className="break" id="pSeven">
					You can see examples of my projects in the <a href="portfolio.html">portfolio</a> section.{' '}
					<a href="https://github.com/waterylime" target="_blank" rel="noopener noreferrer">
						THIS
					</a>{' '}
					is a link to my GitHub page,{' '}
					<a
						href="https://www.linkedin.com/in/shauna-larkin-bb534a13/"
						target="_blank"
						rel="noopener noreferrer"
					>
						THIS
					</a>{' '}
					is a link to my LinkedIn page, and{' '}
					<a href={resume} rel="noopener noreferrer" target="_blank">
						HERE
					</a>{' '}
					you can download my resume. For my technical skills and proficiencies, click{' '}
					<p onClick={openModal} style={{ cursor: 'pointer' }}>
						{' '}
						HERE
					</p>
				</p>
			</section>
			<Modal
				id="tModal"
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				shouldCloseOnOverlayClick={true}
				contentLabel="Example Modal"
			>
				<div className="modal-content">
					<span className="close-btn" onClick={closeModal}>
						&times;
					</span>
					<p>
						<h3>Programing Languages Known:</h3> HTML 5, CSS, JavaScript (ES6) <br />
						<h3>Front End:</h3>React.js (including hooks), REST API queries, 3rd party JS and CSS library
						integration, deployment of web pages <br />
						<h3>Back End: </h3>Node.js, Express servers, REST API creation, NPM, Handlebars, Sequelize{' '}
						<br />
						<h3>Cross Stack: </h3>MERN stack, jQuery, Test Driven Development with Jest, mySQL, Object
						Oriented Programming, MongoDB and Mongoose, PWA creation (including offline support) <br />
					</p>
					<p>
						To see these skills in use, please click <a href="portfolio.html">HERE</a>.
					</p>
				</div>
			</Modal>
		</div>
	);
}

export default About;
