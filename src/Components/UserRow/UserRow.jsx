import React from 'react'
import headshot from '../../assets/images/headshot.png';
import bell from '../../assets/icons/bell.svg';
import buttonArrow from '../../assets/icons/button_arrow.svg';
import calendar from '../../assets/icons/carbon_event-schedule.svg';
import done from '../../assets/icons/done.svg';
import './UserRow.scss';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { PieChart } from 'react-minimal-pie-chart';

import 'react-circular-progressbar/dist/styles.css';
import { kFormatter } from '../../helpers/numberFormatHelper';

export const UserRow = ({ data }) => {
  const { name, email, steps, target, perfDate, scheduledDate, calIntake, calTarget, proteinConsumed, proteinTarget, carbConsumed, carbTarget, fatConsumed, fatTarget } = data;

  return (
    <div className='user'>
      <div className='user__info'>
        <img src={headshot} alt="user" />
        <p className='user__info--name'>
          {name}
          <br />
          <span>
            {email}
          </span>
        </p>
      </div>
      <div className='circular-bar'>
        <div className='circular-bar__inner'>
          <CircularProgressbar
            className='circular-component'
            value={steps}
            maxValue={target}
            strokeWidth={10}
            styles={buildStyles({
            
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'butt',

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
            
              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',
            
              // Colors
              trailColor: '#7FD18C',
              pathColor: '#fff',
              backgroundColor: '#1E262F',
              textColor: '#fff'
            })}
          />
          <p className='circ-label'>
            {steps}
            <br />
            <span>
              walked
            </span>
          </p>
        </div>
        <p>
          {kFormatter(target)}
          <br />
          <span>
            target
          </span>
        </p>
      </div>
      <div className='user__workout'>
        <div className='user__workout--container'>
          <p>
            <img src={calendar} alt="calendar" />
            {perfDate}
          </p>
          <p>
          <img src={done} alt="done" />
            {scheduledDate}
          </p>
        </div>
        <div className='piechart-container__more'>
          <img src={buttonArrow} alt="user statistics" />
        </div>
      </div>
      <div className='piechart-container'>
        <div className='piechart'>
          <div className='piechart__component'>
            <PieChart
              data={[
                { value: proteinConsumed, color: "#F45C84" },
                { value: carbConsumed, color: "#F5C90F" },
                { value: fatConsumed, color: "#03C7FC" },
              ]}

              lineWidth={20}
              // paddingAngle={18}
              totalValue={calIntake}
            />
            <p className='piechart__label'>
              {calIntake}
              <br />
              <span>
                calories
              </span>
            </p>
          </div>
          <p>
            {calTarget}
            <br />
            <span>
              target
            </span>
          </p>
        </div>
        <div className='piechart-container__more'>
          <img src={buttonArrow} alt="user statistics" />
        </div>
      </div>
        <div className='user__bell'>
          <img src={bell} alt="bell" />
        </div>
    </div>
  );
}
