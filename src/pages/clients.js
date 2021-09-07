import * as React from "react"
import Layout from "../components/Layout"

//todo: add clients


//* styles
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

//* data
const clients = [
  "Nike",
  "Vans",
  "Adidas",
  "Thrasher Magazine",
  "Prana",
  "Chrome Industries",
  "Poler",
  "Timberline Lodge",
  "Alpental",
  "The Summit at Snoqualmie",
  "Spy Optics",
  "Independent Trucks",
  "OJ Wheels",
  "Creature Skateboards",
  "Bronson Bearings",
  "Mob Grip",
  "Slime Balls",
  "NHS inc.",
  "Slash Snowboards",
  "Bonfire Outerwear",
  "WornPath",
  "Bitters",
]

const ClientsPage = () => {
  return (
    <main>
      <Layout>
        <div>
          <ul style={listStyles}>
          {clients.map((client, index) => (
            <li key={index} style={{...listItemStyles}}>
              <span>
              {client}
              </span>
            </li>
          ))}
          </ul>
        </div>
        
      </Layout>
    </main>
  )
}

export default ClientsPage

