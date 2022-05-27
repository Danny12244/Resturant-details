import "./App.css";
import Navbar from "./comp/Navbar";
import Offers from "./comp/Offers";
import Filters from "./comp/Filters";
import Resturant from "./comp/Resturant";
import userdata from "../src/data/userInfo.json";
import resturants from "./data/resturant.json";
import offer from "./data/offerdata.json";
import { useState } from "react";

const filters = [
  "Cash-only",
  "Card-only",
  "Cost High to Low",
  "Cost Low to High",
  "Ratings",
  "Delivery Time",
  "Relevance",
];
function App() {
  const [filterBy, SetFilterBy] = useState("");
  const [data, setData] = useState(resturants);//make a new data to add cash only and card only part
  const [cashonly, setCashonly] = useState(resturants);
  const [cardonly, setCardonly] = useState(resturants);
  const updateFilter = (newFilter) => {
    // console.log(newFilter)
    switch (newFilter) {
      case "Cost High to Low": {
        SetFilterBy("Cost High to Low");
        data.sort((a, b) => b.costFortwo - a.costFortwo);
        // console.log(data.map((d) => d.costFortwo));
        setData([...data]);
        setCashonly(resturants)
        setCardonly(resturants)
        break;
      }

      case "Cost Low to High": {
        SetFilterBy( "Cost Low to High");
        data.sort((a, b) => a.costFortwo - b.costFortwo);
        // console.log(data.map((d) => d.costFortwo));
        setData([...data]);
        setCashonly(resturants)
        setCardonly(resturants)
        break;
      }

      case "Delivery Time":{
        SetFilterBy(  "Delivery Time");
        data.sort((a, b) => a.deliveryTimings - b.deliveryTimings);
        // console.log(data.map((d) => d.deliveryTimings));
        setData([...data]);
        setCashonly(resturants)
        setCardonly(resturants)
        break;
      }
      case "Ratings":{
        SetFilterBy(  "Ratings");
        data.sort((a, b) =>b.rating -  a.rating);
        // console.log(data.map((d) => d.rating));
        setData([...data]);
        setCashonly(resturants)
        setCardonly(resturants)
        break;
      }
      case "Cash-only":{
        SetFilterBy("Cash-only");
        console.log(cashonly.filter((el)=>(el.payment_methods.cash!==false)))
        setCashonly(cashonly.filter((el)=>(el.payment_methods.cash!==false)));
        setCardonly(resturants)
        // console.log(data.map((d) => d.payment_methods.cash));
        break;
      }
      case "Card-only":{
        SetFilterBy("Card-only");
        console.log(cardonly.filter((el)=>(el.payment_methods.card!==false)))
        setCardonly(cardonly.filter((el)=>(el.payment_methods.card!==false)));
        setCashonly(resturants)
        // console.log(data.map((d) => d.payment_methods.cash));
        break;
      }
      default: {
        setData(resturants);
        break;
      }
    }
  };
  const change =()=>{
    if(cashonly.length<5){
      return cashonly
     }
     else if(cardonly.length<7){
       return cardonly
     }
  else{
    return data

  }
  }
  return (
    <>
      <Navbar {...userdata.location} />
      <Offers offer={offer} />
      <section className="near-you">
        <Filters filters={filters} currentFilteredBy={filterBy} updateFilter={updateFilter}/>
        <Resturant Restu={change()} />
      </section>
    </>
  );
}

export default App;
