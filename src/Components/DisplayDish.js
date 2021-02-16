import { Subtitles } from "@material-ui/icons";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/display.css";
import { getItems,deleteItem } from "../redux/actions/ItemActions";
class DisplayDish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading:true
    };
  }
  componentDidMount() {
    this.props.getItems();
  }
static getDerivedStateFromProps(nextProps,prevState){

  if(nextProps.allItems!=undefined && prevState.items!=undefined){
    return ({items:nextProps.allItems,
    loading:nextProps.loading
    })
  }

  return null
}
controlDelete=(id)=>{
  this.props.deleteItem(id)
}
  render() {
      if(this.state.loading){
      return (<h1>Loading</h1>)
      
    }else{
    return (
      <div className="row">
        {this.props.allItems && this.props.allItems.map((data) => (
          <div className="col-12 col-lg-5 box m-3">
            <div className="text-left">
              <h3 style={{backgroundColor:'lightblue',textTransform:'uppercase'}}>{data.name}</h3>
              <p>{data.category}</p>
              <p>{data.price}</p>
            </div>
            <div>{data.description}</div>
            <div>
              <button className="btn btn-info" style={{ padding: "6px 21px" }} 
                
                >
                <Link to={`/edit/${data.id}`} >Edit</Link>
              </button>
              <button
                className="btn btn-danger"
                style={{ padding: "6px 21px" }}
                onClick={()=>this.controlDelete(data.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    )}
  }
}
const mapStateToProps = (state) =>

 ({ allItems: state.item.data ,
proploading:state.item.loading
});

const mapDispatchToProps = {
  getItems,deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayDish);
