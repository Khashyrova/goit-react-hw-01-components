import './Statistics.modules.css';
import ProtoType from 'prop-types';
import getRandomHexColor from './randomazer';

const Stastistics = ({ stats }) => {
  return (
    <section className="statistics">
      <div className="statistics-container">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className="item"
                key={id}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

Stastistics.ProtoType = {
  label: ProtoType.string.isRequired,
  percentage: ProtoType.number.isRequired,
};

export default Stastistics;
