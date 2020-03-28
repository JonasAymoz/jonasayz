import React from "React";
import labs from '../posts/lab';
import {Link} from "react-router-dom";
import LabItem from "./lab_item";
import {Component} from "react";


export default class  Lab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLab : 0
        }
    }

    selectLab = (lab) => {
        this.setState({selectedLab: (this.state.selectedLab != lab)? lab : 0}, ()=>{
            console.log('selected ' + this.state.selectedLab);
        });
    }

    render(){
        const labSorted = labs.sort((a, b) => {
            return b.id - a.id;
        });
        return (
            <div className="page ">
                <h2><span className="gradientText"> //</span> LAB</h2>
                <p className="labSubtitle"> Projects during spare time </p>
                <div className={(this.state.selectedLab!=0)? "whiteblur" : ""}></div>
                <div className="gridSquare-Lab">
                    {labSorted.map((p, i) => {
                        return <LabItem key={i} p={p} selectLab={(lab) => this.selectLab(lab)} isOpen={p.id==this.state.selectedLab}/>
                        })
                    }
                </div>

            </div>
        );
    }
}
