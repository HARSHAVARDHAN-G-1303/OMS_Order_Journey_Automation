function OrderLine({ index, line, updateOrderLine , removeOrderLine, totalOrderLines }) {
 
  return (
 
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "5px"
      }}
    >
 
      <h4>Order Line {index + 1}</h4>
 
      <label>Item ID</label>
 
      <br />
 
      <input
        type="text"
        placeholder="Item ID"
        value={line.itemId}
        onChange={(e) =>
          updateOrderLine(index, "itemId", e.target.value)
        }
      />
 
      <br />
      <br />
 
      <label>Ordered Quantity</label>
 
      <br />
 
      <input
        type="number"
        value={line.orderedQty}
        onChange={(e) =>
          updateOrderLine(index, "orderedQty", e.target.value)
        }
      />
 
      <br />
      <br />
 
      <label>Unit Price</label>
 
      <br />
 
      <input
        type="number"
        value={line.unitPrice}
        onChange={(e) =>
          updateOrderLine(index, "unitPrice", e.target.value)
        }
      />
 
      <br />
      <br />
 
      <b>Prime Line No : {index + 1}</b>
 
    </div>
 
  );
 
}
 
export default OrderLine;
 