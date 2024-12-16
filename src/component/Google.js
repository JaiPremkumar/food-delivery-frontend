import { GoogleMap, LoadScript } from '@react-google-maps/api'

export default function Google(){
    const container={
        width:'100%',
        height:'400px'
    }
    const center={
        lat:37.7749,
        lng:-122.4194
    }
    return(
        <>
        <LoadScript googleMapsApiKey='?address=New+York&key=api/v1/map' >
            <GoogleMap mapContainerStyle={container} center={center} zoom={10}/>
        </LoadScript>
        </>
    )
}