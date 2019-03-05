import React from "react";

import Asset from "../../utils/AssetService";

import {Title,Para,Image} from "./styled";
import {Grid,Row,Col} from "react-bootstrap";

export default class AboutUs extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Grid>
                <Title>
                  {this.props.content.title}  
                </Title>
            <Row>
                <Col lg={6} xs={12}>
                    <Image width="100%" height={400} src={Asset("assets/images/vision2.jpg")} />
                </Col>
                <Col lg={6} xs={12}>
                    {
                        this.props.content.paras.map((p,index)=>(
                            <Para>{p}</Para>
                        ))
                    }
                </Col>
            </Row>
            </Grid>
        )
    }
}