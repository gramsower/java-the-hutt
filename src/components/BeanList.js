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
        whenSellBeansClicked={ props.onSellBeansClicked }
        name={bean.name}
        price={bean.price}
        roast={bean.roast}
        origin={bean.origin}
        amount={bean.amount}
        tastingNotes={bean.tastingNotes}
        id={bean.id}
        key={bean.id} /> 
      )}
    </React.Fragment>
  );
}

BeanList.propTypes= {
  beanList: PropTypes.array,
  onBeanSelection: PropTypes.func,
  onSellBeansClicked: PropTypes.func
};

export default BeanList;