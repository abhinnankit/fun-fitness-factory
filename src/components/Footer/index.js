import React from "react";
import Asset from "../../utils/AssetService";
import {Grid,Row,Col} from "react-bootstrap";
import { Slider, Slide, Button} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faMapMarker,
  faMapMarked,
  faPhoneVolume,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import {Logo,FooterDiv,Contact,Social,Copy} from "./styled";

import {faFacebook,faInstagram, faFacebookF} from "@fortawesome/free-brands-svg-icons"

export default class Footer extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <FooterDiv>
                <Grid>
                    <Col md={4} sm={4} xs={12}>
                        <Logo src={Asset(this.props.content.logo)}/>
                    </Col>
                    <Col md={8} sm={8} xs={12}>
                        <h2>Information</h2>
                    {
                        this.props.content.info.map((i,index)=>(
                            <React.Fragment>
                                {i.type == "normal" && 
                                <Contact>
                                    
                                <a className={i.icon}>
                                <FontAwesomeIcon size="lg" icon={i.icon == "faMapMarker" ? faMapMarker : (i.icon == "faEnvelope" ? faEnvelope : faPhoneVolume)} />
                                </a>  
                                  <span>{i.content}</span>  
                                </Contact>
                                }
                                {i.type == "social" && 
                                <Social>
                                <a href ={i.icon == "faFacebook" ? "https://www.facebook.com/F3-Fun-Fitness-Factory-1521363167948313/" : "https://www.instagram.com/f3_fun_fitness_factory/?utm_source=ig_profile_share&igshid=1s5selxemfj1g"} target="blank" className={i.icon}><FontAwesomeIcon size="lg" icon={i.icon == "faFacebook" ? faFacebookF : faInstagram} />
                                </a>
                                </Social>
                            }
                            </React.Fragment>
                        ))
                    }
                        
                    </Col>
                      
                </Grid>
                
            </FooterDiv>    
        )
    }
}