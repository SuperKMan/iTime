import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import Spinner from "../../utils/Spinner";
import { getPasswordStatus } from "../../actions/itimeActions";
class Dashboard extends Component {
  componentDidMount() {
    this.props.getPasswordStatus();
  }

  render() {
    const { pwdstatus, loading } = this.props;
    let doughnutChart;
    if (pwdstatus) {
      var data = {
        labels: ["Locked", "Normal"],
        datasets: [
          {
            data: [pwdstatus.lockedNum, pwdstatus.totalNum],
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"]
          }
        ]
      };
      doughnutChart = <Doughnut data={data} />;
    } else {
      doughnutChart = <Spinner />;
    }

    return <div className="animated fadeIn">{doughnutChart}</div>;
  }
}

Dashboard.propTypes = {
  getPasswordStatus: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  pwdstatus: state.itime.pwdstatus,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPasswordStatus }
)(Dashboard);
