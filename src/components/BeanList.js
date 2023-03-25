import React from "react";
import Bean from "./Bean";
import PropTypes from "prop-types";

function BeanList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.beanList.map((bean) =>
      <Bean
        whenBeanClicked={ props.onBeanSelection }
        name={bean.name}
        price={bean.price}
        roast={bean.roast}
        origin={bean.origin}
        tastingNotes={bean.tastingNotes}
        id={bean.id}
        key={bean.id} /> 
      )}
    </React.Fragment>
  );
}

BeanList.propTypes= {
  beanList: PropTypes.array,
  onBeanSelection: PropTypes.func
};

export default BeanList;