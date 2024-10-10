import NavBar from "./src/components/NavBar"
import Card from "./src/components/card"
import Form from "./src/components/form"
export default function App() {
  return (
  <div className="App">
    
    <NavBar/>
    <Form />
    {/* this was passed in from cardjsx, the functionality did not display correctly without passing it here.  */}
    <Card 
    imgSrc="https://picsum.photos/300/200" 
    imgAlt="card image"
     title="card-title"
     description="This is the card description"
     buttonText="Learn More"
     link="card page"
     />
 
  </div>
  );
}
