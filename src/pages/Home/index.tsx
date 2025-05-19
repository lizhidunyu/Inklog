import Header from './Header'

const HomeContainer = {
    backgroundColor: 'pink',
    height: "120vh",
    padding: '2rem',
    paddingTop: '1rem'
   
}

export default function Home(){
  return (
    <div style={HomeContainer}>
     <Header/>
    </div>
  )
}
