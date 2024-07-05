const ProductCard = (props) => {
  return (
    <div className="max-w-sm rounded-sm border border-gray-200 bg-white p-2 shadow dark:border-gray-700 dark:bg-gray-800">
      <img className="h-48 w-full object-contain" src={props.image} />

      <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        Name: &nbsp;
        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.name}
        </span>
      </h6>
      <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        Price: &nbsp;
        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.price}
        </span>
      </h6>
      <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        Category: &nbsp;
        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.category}
        </span>
      </h6>

      <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        Description: &nbsp;
        <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </span>
      </h6>
    </div>
  );
};

export default ProductCard;
