import React, { Fragment } from 'react';
import './CardsStyles.css';
import Spinner from  '../spinner/Spinner';
import CountryPicker from '../countryPicker/CountryPicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe, faLungsVirus, faHeadSideMask } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const Cards = (props) => {
	

	
switch (props.data.TotalConfirmed) {
	case undefined:
		return (
		<Spinner/>
		);
	case 0 :
		return (
			<Fragment>
				<div className="alert alert-primary" role="alert">
  						No Data Available was found for {props.data.Country}.
				</div>
				<CountryPicker handleCountryChange={props.handleCountryChange} countries={props.countries} />
			</Fragment>
		);
	default:

		return (
			<Fragment>
		
			<span className="text-right muted d-block update-time">Last updated:{new Date().toDateString()}</span>
			<div className="mt-3">
				<h3 className="mb-0 title-heading">
					Total Cases {props.data.Country ? `in ${props.data.Country} :` : `World wide :`}
				</h3>
			</div>
			<div className="card-columns my-3">
				<div className="card recovered">
					<div className="card-body position-relative">
						<p className="card-text">Total Recoverd Covid-19 cases</p>
		
							<CountUp className="card-text" start={0} end={props.data.TotalRecovered} separator="," duration={2.5}/>
						
						<FontAwesomeIcon icon={faSyringe} className="icon" />
					</div>
				</div>
				<div className="card infected">
					<div className="card-body position-relative">
						<p className="card-text">Total Infected Covid-19 Cases</p>
					<CountUp className="card-text" start={0} end={props.data.TotalConfirmed} separator="," duration={2.5}/>
						<FontAwesomeIcon icon={faLungsVirus} className="icon" />
					</div>
				</div>
				<div className="card deaths">
					<div className="card-body position-relative">
						<p className="card-text">Total Deaths Covid-19 Cases</p>
							<CountUp className="card-text" start={0} end={props.data.TotalDeaths} separator="," duration={2.5}/>
						<FontAwesomeIcon icon={faHeadSideMask} className="icon" />
					</div>
				</div>
			</div>
			<div className="mt-3">
				<h3 className="mb-0 title-heading">
					Total New Cases {props.data.Country ? `in ${props.data.Country} :` : `World wide :`}
				</h3>
			</div>
			<div className="card-columns my-3">
				<div className="card recovered">
					<div className="card-body position-relative">
						<p className="card-text">New Recoverd Covid-19 cases</p>
							<CountUp className="card-text" start={0} end={props.data.NewRecovered} separator="," duration={2.5}/>
						<FontAwesomeIcon icon={faSyringe} className="icon" />
					</div>
				</div>
				<div className="card infected">
					<div className="card-body position-relative">
						<p className="card-text">New Infected Covid-19 Cases</p>

							<CountUp className="card-text" start={0} end={props.data.NewConfirmed} separator="," duration={2.5}/>

						<FontAwesomeIcon icon={faLungsVirus} className="icon" />
					</div>
				</div>
				<div className="card deaths">
					<div className="card-body position-relative">
						<p className="card-text">New Deaths Covid-19 Cases</p>
							<CountUp className="card-text" start={0} end={props.data.NewDeaths} separator="," duration={2.5}/>
						<FontAwesomeIcon icon={faHeadSideMask} className="icon" />
					</div>
				</div>
			</div>
			<CountryPicker handleCountryChange={props.handleCountryChange} countries={props.countries} />
		</Fragment>
		
			
		);

}

	
};

export default Cards;
