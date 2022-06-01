import React from "react";
import axios from "axios";
// Import CSS from assets folder
import "../assets/style.css";
import {Card, Button, ResourceList, ResourceItem, TextStyle} from "@shopify/polaris";


const Products = () => {

   const  HandlefetchProducts = async( ) => {
      console.log("You clicked on products");
      
         const result =  await axios.get("/getProducts").then((res)=>{
                 console.log("Hello World@");
                 console.log(res);
          }).catch(err=> console.log(err)); 
    }

   
  return(
    <>
      <div className="productLists">
         <div style={{width : '30%'}}>
            <h2>Products from your shops</h2>
            <p>Total Products from your store . Click into the product to see its corresponding kiwi size charts. You can add new size charts for the products directly too.</p>
           <Button onClick={HandlefetchProducts} > View All the Products</Button>
         </div>

         <div style={{width : '70%'}} >
           <Card>
              <div className="products">
                  <ResourceList
                    resourceName={{singular: 'customer', plural: 'customers'}}
                    items={[
                      {
                        id: 100,
                        url: 'customers/341',
                        name: 'Mae Jemison',
                        location: 'Decatur, USA',
                      },
                      {
                        id: 200,
                        url: 'customers/256',
                        name: 'Ellen Ochoa',
                        location: 'Los Angeles, USA',
                      },
                    ]}
                    renderItem={(item) => {
                      const {id, url, name, location} = item;
                      // const media = <Avatar customer size="medium" name={name} />;

                      return (
                        <ResourceItem
                          id={id}
                          url={url}
                          // media={media}
                          accessibilityLabel={`View details for ${name}`}
                        >
                          <h3>
                            <TextStyle variation="strong">{name}</TextStyle>
                          </h3>
                          <div>{location}</div>
                        </ResourceItem>
                      );
                    }}
                  />
              </div>
           </Card>
         </div>
      </div>
    </>
  )
}


export default Products;