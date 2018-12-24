import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import {
  getEmployees,
  setSelectedEmployee,
  resetPassword
} from "../../../actions/itimeActions";
import Spinner from "../../../utils/Spinner";
import { Button, Card, CardBody, CardHeader, Col, Row } from "reactstrap";

class PasswordReset extends Component {
  constructor(props, context) {
    super(props, context);

    this.resetPassword = this.resetPassword.bind(this);
  }

  componentDidMount() {
    this.props.getEmployees("N");
  }

  resetPassword() {
    this.props.resetPassword(this.props.employee.EMPLOYEE_NUMBER);
  }

  render() {
    const { employees, employee, loading } = this.props;
    let employeesList;

    const { SearchBar } = Search;
    const columns = [
      {
        dataField: "EMPLOYEE_NUMBER",
        text: "Employee ID"
      },
      {
        dataField: "TITLE",
        text: "Title"
      },
      {
        dataField: "FIRST_NAME",
        text: "First Name"
      },
      {
        dataField: "LAST_NAME",
        text: "Last Name"
      },
      {
        dataField: "BU",
        text: "BU"
      },
      {
        dataField: "BRANCH",
        text: "Branch"
      },
      {
        dataField: "START_DATE",
        text: "Start Date"
      },
      {
        dataField: "ORGANIZATION_NAME",
        text: "Organization"
      },
      {
        dataField: "POSITION_NAME",
        text: "Position"
      },
      {
        dataField: "PEOPLE_GROUP_NAME",
        text: "Group"
      }
    ];

    if (loading) {
      employeesList = <Spinner />;
    } else {
      if (employees) {
        const selectRow = {
          mode: "radio",
          clickToSelect: true,
          onSelect: (row, isSelect, rowIndex, e) => {
            this.props.setSelectedEmployee(row);
          }
        };

        const customTotal = (from, to, size) => (
          <span className="react-bootstrap-table-pagination-total">
            Showing {from} to {to} of {size} Results
          </span>
        );

        const options = {
          paginationSize: 10,
          pageStartIndex: 0, // alwaysShowAllBtns: true, // Always show next and previous button
          // withFirstAndLast: false, // Hide the going to First and Last page button
          // hideSizePerPage: true, // Hide the sizePerPage dropdown always
          // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
          firstPageText: "First",
          prePageText: "Back",
          nextPageText: "Next",
          lastPageText: "Last",
          nextPageTitle: "First page",
          prePageTitle: "Pre page",
          firstPageTitle: "Next page",
          lastPageTitle: "Last page",
          showTotal: true,
          paginationTotalRenderer: customTotal,
          sizePerPageList: [
            { text: "10", value: 10 },
            { text: "15", value: 15 },
            { text: "20", value: 20 },
            { text: "All", value: employees.length }
          ]
        }; // A numeric array is also available. the purpose of above example is custom the text
        employeesList = (
          <ToolkitProvider
            keyField="EMPLOYEE_NUMBER"
            data={employees}
            columns={columns}
            search
          >
            {props => (
              <div>
                <SearchBar {...props.searchProps} />
                <hr />
                <BootstrapTable
                  {...props.baseProps}
                  selectRow={selectRow}
                  pagination={paginationFactory(options)}
                  hover
                  condensed
                  noDataIndication="No employees that password locked"
                />
              </div>
            )}
          </ToolkitProvider>
        );
      }
    }
    return (
      <div className="animated fadeIn">
        <Card>
          <CardBody>
            <Row className="align-items-center">
              <Col>
                <Button block color="danger" onClick={this.resetPassword}>
                  Reset Password
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
        {employeesList}
      </div>
    );
  }
}

PasswordReset.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  setSelectedEmployee: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  employees: state.itime.employees,
  employee: state.itime.employee,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getEmployees, setSelectedEmployee, resetPassword }
)(PasswordReset);
