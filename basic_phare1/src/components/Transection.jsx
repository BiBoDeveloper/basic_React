import "./Item.css"
import Item from "./Item"
import PropTypes from 'prop-types';


const Transection = (props) => {
  const {items} = props;
  return (
        <>
            <ul className="item-list">
              {
                items.map((data) => {
                  return <Item {...data} key={data.id} />
                })
              }
            </ul>
        </>
    )
  }

  Transection.propTypes = {
    items:PropTypes.array.isRequired,
  }



  export default Transection