import React from 'react';
import book from '../assets/Video/BookFinder.mp4';
import code from '../assets/Video/CodeQuiz.mp4';
import dragon from '../assets/Video/dragon.mp4';
import word from '../assets/Video/whatintheword.mp4';
import pass from '../assets/Video/PasswordGen.mp4';
// import translation from
// import weather from

function Portfolio() {
	function modeFun2() {
		let firstTime = localStorage.getItem('first');

		const modal = document.getElementById('myModal');
		const span = document.getElementsByClassName('close-btn')[0];

		localStorage.setItem('first', 'nope');
		if (firstTime == null) {
			modal.style.display = 'block';
		}

		span.onclick = function() {
			modal.style.display = 'none';
		};
	}

	return (
		<div class="back" id="portBack">
			{modeFun2}
			<div class="contactboxP" id="placeholders">
				<h2>
					Portfolio
					<hr />
				</h2>
				<div className="book">
					<div>
						<video className="video-container video-container-overlay" autoPlay="true" loop>
							<source src={book} type="video/mp4" />
						</video>
					</div>
					<div class="container" id="linkTwo">
						<div class="btn1" id="btn1">
							Book Finder
							<span id="bookFinder">
								ur usuer story: As a reader I want to see books recommend from a title entered/ books
								recommended from genres. Along with reader reviews and rating. So that I can find new
								literature to read.
							</span>
						</div>
					</div>
				</div>
				<div className="code" />
				<div>
					<video className="video-container video-container-overlay" autoPlay="true" loop>
						<source src={code} type="video/mp4" />
					</video>
				</div>
				<div class="container" id="linkSix">
					<div className="btn2" id="btn2">
						Code Quiz
						<span id="codeQuiz">
							Create an application that generates a random password based on user-selected criteria. This
							app will run in the browser and feature dynamically updated HTML and CSS powered by your
							JavaScript code.
						</span>
					</div>
				</div>
				<div className="pass">
					<div>
						<video className="video-container video-container-overlay" autoPlay="true" loop>
							<source src={pass} type="video/mp4" />
						</video>
					</div>
					<div class="container " id="linkFive">
						<div class="btn3" id="btn3">
							Password Generater
							<span id="passPop">
								Create an application that generates a random password based on user-selected criteria.
								This app will run in the browser and feature dynamically updated HTML and CSS powered by
								your JavaScript code.
							</span>
						</div>
					</div>
				</div>
				<div className="container4">
					{/* <div>
					<video
						className="video-container video-container-overlay"
						autoPlay="true"
						loop
						
						>
						<source src={this.props.translation} type="video/mp4" />
						</video>
					</div> */}
					<div class="container" id="linkSeven">
						<div class="btn4" id="btn4">
							Translation Website COMING SOON
							<span id="bsnPop">
								Nothing to do with develoment but I did make the site. This is the website for my
								translation of light novels in to english.
							</span>
						</div>
					</div>
				</div>
				<div className="container5">
					{/* <div>
					<video
					className="video-container video-container-overlay"
					autoPlay="true"
					loop>
					<source src={this.props.weather} type="video/mp4" />
					</video>
				</div> */}
					<div class="container" id="linkThree">
						<div class="btn5" id="btn5">
							React Weather App
							<span id="weatherPop">
								This is a React basied weather app. Using hooks and styled componets.
							</span>
						</div>
					</div>{' '}
					<div />
					<div className="container6">
						<video className="video-container video-container-overlay" autoPlay="true" loop>
							<source src={word} type="video/mp4" />
						</video>
					</div>
					<div class="container" id="linkOne">
						<div class="btn6" id="btn6">
							What in the Word
							<span id="Word">
								Our usuer story: As a reader As a I reader I want to be able to look up foreign word,
								that is in my book. be provided with definitions and text to speech of word and maybe a
								picture. So that I can under stand what I am reading. Patent Pending
							</span>
						</div>
					</div>
				</div>
				<div className="container7">
					<div>
						<video className="video-container video-container-overlay" autoPlay="true" loop>
							<source src={dragon} type="video/mp4" />
						</video>
					</div>
					<div class="container" id="linkFour">
						<div class="btn7" id="btn7">
							Dragon Restaurant
							<span id="restPop">
								A full stack application that simulates a reservation system for a restaurant with only
								five tables. Includes 2 RESTful API's and code that determinates between the two.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
