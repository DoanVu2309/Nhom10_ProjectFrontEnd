import React from 'react';

export default function InfoElearning() {
	return (
		<section className="info-elearning">
			<div className="ie-overflow" style={{ backgroundImage: "url('./img/bg-2.png')" }}></div>
			<div className="ie-content">
				<div className="icon-group">
					<i className="fa fa-university"></i>
					<div className="name-icon">Department</div>
					<div className="amount">5</div>
				</div>
				<div className="icon-group">
					<i className="fa fa-bookmark"></i>
					<div className="name-icon">Teachers</div>
					<div className="amount">100</div>
				</div>
				<div className="icon-group">
					<i class="fa fa-book"></i>
					<div className="name-icon">Lessons</div>
					<div className="amount">500+</div>
				</div>
				<div className="icon-group">
					<i className="fa fa-mortar-board"></i>
					<div className="name-icon">Students</div>
					<div className="amount">1000+</div>
				</div>
			</div>
		</section>
	);
}
