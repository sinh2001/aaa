
const Products = (props) => {
  
  return (
    <div>
      {props.products.map((item) => {
        return <div> {item.name}</div>;
      })}
    </div>
  );
};
export default Products;
