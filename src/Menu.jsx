import { Button, Navbar } from "react-bootstrap";
import { useState } from "react";

function Menu() {
  const [selectedTag, setSelectedTag] = useState("All");

  // Sample menu items for each tag
  const menuItems = [
    { id: 1, name: "Allitem", price :"$6.99" ,discription:"This is All food item",tag: "All" ,image:"https://i.guim.co.uk/img/media/9212de9a058a57ca84ccdbbee1277e3f3808e837/0_0_5000_3000/master/5000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=4dce5aa18bac684148ba79ad968fba75"},
    { id: 2, name: "AllItem", price :"$6.99" ,discription:"this is 2nd item",tag: "All" ,image:"https://i.guim.co.uk/img/media/763740b8e350cea9a3e28e262f29894d3e9da140/0_0_4200_2521/master/4200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0847d42d79838b226f479fb87cd638a8"},
    { id: 3, name: "Breakfast", price :"$6.99" ,discription:"this is 3rd item",tag: "Breakfast",image:"https://static.toiimg.com/photo/93691127.cms" },
    { id: 4, name: "Breakfast ", price :"$6.99" ,discription:"this is 4th item",tag: "Breakfast" ,image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/7/11/0/FNK_the-best-pancakes_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1562853903667.jpeg"},
    { id: 5, name: "Lunch ", price :"$6.99" ,discription:"this is 5th item",tag: "Lunch" ,image:"https://static.toiimg.com/photo/90934370.cms"},
    { id: 6, name: "Lunch ", price :"$6.99" ,discription:"this is 6th item",tag: "Lunch" ,image:"https://static.toiimg.com/thumb/msid-67454814,width-1280,resizemode-4/67454814.jpg"},
    { id: 7, name: "Shake ", price :"$6.99" ,discription:"this is 7th item",tag: "Shake" ,image:"https://static.toiimg.com/photo/75254695.cms"},
    { id: 8, name: "Shake ", price :"$6.99" ,discription:"this is 8th item",tag: "Shake" ,image:"https://static.toiimg.com/thumb/95214965.cms?width=1200&height=900"},
    { id: 9, name: "Dinner ", price :"$6.99" ,discription:"this is 9th item",tag: "Dinner" ,image:"https://cdn.vox-cdn.com/thumbor/Bc9M8hs99tenJl8gTCCyaE4AyIw=/0x0:6016x4016/1200x900/filters:focal(2527x1527:3489x2489)/cdn.vox-cdn.com/uploads/chorus_image/image/62294207/AubrieLeGault_Ringside_Holiday_23.27.jpg"},
    { id: 10, name: "Dinner", price :"$6.99" ,discription:"this is 10th item",tag: "Dinner" ,image:"https://wallpapers.com/images/featured/dinner-hvk1qxg65dmseary.jpg"},
  ];

  // Filter menu items based on the selected tag
  const filteredMenuItems =
    selectedTag === "All"
      ? menuItems
      : menuItems.filter((item) => item.tag === selectedTag);

  return (
    <>
      <div>
        <h3 style={{ marginTop: "20px" }} className="text-center">
          Our Menu
        </h3>
        <hr className="custom-hr" />
      </div>
      <div className="text-center">
        <button className="btn btn-light mx-2" onClick={() => setSelectedTag("All")}>
          All
        </button>
        <button className="btn btn-light mx-2" onClick={() => setSelectedTag("Breakfast")}>
          Breakfast
        </button>
        <button className="btn btn-light mx-2" onClick={() => setSelectedTag("Lunch")}>
          Lunch
        </button>
        <button className="btn btn-light mx-2" onClick={() => setSelectedTag("Shake")}>
          Shake
        </button>
        <button className="btn btn-light mx-2" onClick={() => setSelectedTag("Dinner")}>
          Dinner
        </button>
      </div>

      <div style={{ marginTop: "50px", display: "flex", flexWrap: "wrap", justifyContent:"space-around" ,marginRight:"150px"}}>
  {filteredMenuItems.map((item) => (
    <div key={item.id} className="" style={{ width: "20rem", margin: "10px 50px" }}>
      <div style={{ display: "flex", alignItems: "center" ,justifyContent:"space-between" }}>
        <img src={item.image} className="card-img-top" alt={item.name} style={{border:"2px solid orange",width:"20rem"}} />
        <div style={{ flex: 1 ,marginTop:"-185px"}}>
          <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted black", paddingBottom: "5px" ,marginLeft:"10px"}}>
            <h5 className="card-title" >{item.name}</h5>
            <h5 className="card-title" style={{marginLeft:"80px"}}>{item.price}</h5>
          </div>
          <p className="card-text" style={{marginLeft:"10px",marginTop:"10px"}}>{item.discription}</p>
        </div>
      </div>
    </div>
  ))}
</div>





    </>
  );
}

export default Menu;
