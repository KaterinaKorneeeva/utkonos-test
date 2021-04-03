import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux"
import {ActionCreator} from "../../store/action"

import {
  TableStyled,
  InputStyled,
  TitleStyled,
  ListStyled,
  ItemStyled
} from "../main-page/style.js";

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }



  createMarkup(val) {
    return {__html: val};
  }

  handleFieldChange(evt) {
    const code = evt.target.value;

    if (code.length === 0) {
      const {loadData} = this.props;
      loadData();
    } else {
      const {updateData} = this.props;
      updateData(code);
    }
  }


  render() {
  const {itemsList} = this.props;
    return (
      <>
        <TableStyled>
          <TitleStyled>Штрихкод</TitleStyled>
          <InputStyled
              type="number"
              placeholder= "Фильтр..."
              name = "barcode"
              pattern="[0-9]*"
              onChange = {this.handleFieldChange}
            />
          <ListStyled>
              {itemsList.map((item, i) => (
                <>
                <ItemStyled key ={i}>
                  <span dangerouslySetInnerHTML={this.createMarkup(item.code)} />
                </ItemStyled>
                </>


            ))}
          </ListStyled>
        </TableStyled>
      </>
    );
  }
}

MainPage.propTypes = {
  loadData: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
      itemsList: state.itemsList,
  }
}
const mapDispatchToProps = dispatch => {
  return {
      updateData(code) {
        dispatch(ActionCreator.updateData(code));
      },
      loadData() {
        dispatch(ActionCreator.loadData());
      },
  }
}

export default (connect(mapStateToProps, mapDispatchToProps)(MainPage));
