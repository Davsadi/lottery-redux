import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLottery, fetchLotteryNumbers } from '../actions';
import Moment from 'moment';

const isTest = false;
let sTest = "";
if (isTest) {
    sTest = "<li class='winners'>3</li><li class='winners'>3 + MEGA</li><li class='winners'>4</li><li class='winners'>1 + MEGA</li><li class='winners'>3</li><li class='winners'>3 + MEGA</li><li class='winners'>4</li><li class='winners'>1 + MEGA</li>";
}

class LotteryIndex extends Component {
    componentDidMount() {
        this.props.fetchLottery();
    }

    renderLottery() {
        return _.map(this.props.lottery, lottery => {
            const standardNumbers = lottery.standardNumbers.toString();
            const standardNumbersHTML = standardNumbers.replace(/,/g, "</li><li class='numbers-float'>");
            const winnersList = lottery.myWinners.toString();
            console.log(lottery.myWinners.length);
            let rowColor = "";
            let winnersListHTML = "";
            if (lottery.myWinners.length > 0) {
                winnersListHTML = "<div class='matched-cell-div'><i class='fa fa-thumbs-up fa-3x' aria-hidden='true'></i><ul><li class='winners'>" + winnersList.replace(/,/g, "</li><li class='winners'>") + "</li>" + sTest + "</ul></div>";
                winnersListHTML = winnersListHTML.replace(/<li class=\'winners\'>, <\/li>/g, "");
                winnersListHTML = winnersListHTML.replace(/<li class=\'winners\'><\/li>/g, "");
                winnersListHTML = winnersListHTML.replace(/, <\/li><\/ul>/g, "</li></ul>");
                rowColor = "table-success";
            } else {
                winnersListHTML = "<div class='matched-cell-div'><i class='fa fa-thumbs-down fa-2x' aria-hidden='true'></i></div>"
                rowColor = "table-danger";
            }



            return (
                <tr key={lottery._id} className={rowColor}>
                    <td className="draw-cell"><b>{Moment.utc(lottery.drawDate).format("ddd, MMMM Do")}</b></td>
                    <td className="numbers-cell">
                        <ul>
                            <li className="numbers-float" dangerouslySetInnerHTML={{__html: standardNumbersHTML}} />
                            <li className="bonus-number">{lottery.bonusNumber}</li>
                        </ul>
                    </td>
                    <td dangerouslySetInnerHTML={{__html: winnersListHTML}} />
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="row">
                <div className="top-div">Lottery Draws <Link className="btn btn-secondary btn-sm btn-float" to="/lottery/add">Add New</Link></div>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr className="header-row">
                          <th>Draw</th>
                          <th>Winning Numbers</th>
                          <th>Matched Numbers</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderLottery()}</tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lottery: state.lottery,
        lotteryNumbers: state.lotteryNumbers
    };
}

export default connect(mapStateToProps, { fetchLottery, fetchLotteryNumbers } )(LotteryIndex);
